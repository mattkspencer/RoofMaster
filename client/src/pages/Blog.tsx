import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { formatDate, truncateText } from '@/lib/utils';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

const Blog = () => {
  useEffect(() => {
    document.title = "Roofing Blog - Expert Tips & Advice | Spencer Roofing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read our latest roofing articles for tips, maintenance advice, and industry insights. Stay informed about the best roofing practices for Denver's unique climate.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  // Generate descriptive link text based on blog post title
  const generateLinkText = (title: string): string => {
    if (title.toLowerCase().includes('hail')) return 'Read About Identifying Hail Damage';
    if (title.toLowerCase().includes('material')) return 'Discover Best Roofing Materials for Colorado';
    if (title.toLowerCase().includes('repair') && title.toLowerCase().includes('replace')) return 'Learn When to Repair vs Replace Your Roof';
    if (title.toLowerCase().includes('maintenance')) return 'Learn Roof Maintenance Tips';
    if (title.toLowerCase().includes('insurance')) return 'Read About Insurance Claims Process';
    if (title.toLowerCase().includes('cost')) return 'Learn About Roofing Costs';
    if (title.toLowerCase().includes('winter')) return 'Read Winter Roofing Tips';
    if (title.toLowerCase().includes('commercial')) return 'Learn About Commercial Roofing';
    // Default fallback with first few words of title
    const words = title.split(' ').slice(0, 4).join(' ');
    return `Read About ${words}`;
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Home", path: "/" },
            { label: "Blog", path: "/blog", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Roofing Blog</h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg">
              Expert advice, tips, and insights on roofing maintenance, repair, and replacement
              for Denver homeowners and businesses.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold text-red-500 mb-2">Unable to load blog posts</h3>
              <p>Please try again later or contact us for assistance.</p>
            </div>
          ) : (
            <>
              {blogPosts && blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                      <Link href={`/blog/${post.slug}`} className="block overflow-hidden h-48">
                        <picture>
                          <source 
                            media="(max-width: 768px)" 
                            srcSet={post.image?.includes('.jpg') ? post.image.replace('.jpg', '-medium.webp') : post.image} 
                            type="image/webp"
                          />
                          <source 
                            media="(max-width: 768px)" 
                            srcSet={post.image?.includes('.jpg') ? post.image.replace('.jpg', '-medium.jpg') : post.image} 
                            type="image/jpeg"
                          />
                          <source 
                            srcSet={post.image?.includes('.jpg') ? post.image.replace('.jpg', '.webp') : post.image} 
                            type="image/webp"
                          />
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                            width="600"
                            height="300"
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                      </Link>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</div>
                        <Link href={`/blog/${post.slug}`} className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                        <p className="text-gray-600 mb-4 flex-grow">{truncateText(post.excerpt, 120)}</p>
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                          {generateLinkText(post.title)}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl font-bold mb-2">No blog posts found</h3>
                  <p>Check back soon for new articles and roofing tips!</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <CTASection 
        title="Ready to Discuss Your Roofing Project?" 
        text="Whether you need a roof repair, replacement, or help with an insurance claim, we're here to provide professional service throughout the Denver metro area."
        buttonText="Contact Us"
        buttonLink="/contact"
        showPhoneButton={true}
      />
    </div>
  );
};

export default Blog;