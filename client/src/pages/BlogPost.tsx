import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { formatDate } from '@/lib/utils';

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

const BlogPost = () => {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
    enabled: !!slug,
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Spencer Roofing Solutions`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }
    
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        {post && (
          <Breadcrumb 
            items={[
              { label: "Home", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: post.title, path: `/blog/${post.slug}`, active: true }
            ]} 
          />
        )}
        
        <div className="py-12">
          {isLoading ? (
            <div className="max-w-4xl mx-auto animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-6 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-12 mx-auto"></div>
              <div className="h-96 bg-gray-200 rounded mb-10"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold text-red-500 mb-2">Unable to load blog post</h3>
              <p className="mb-6">This post may have been removed or the URL might be incorrect.</p>
              <Link href="/blog" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                Back to Blog
              </Link>
            </div>
          ) : post ? (
            <article className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
              
              <div className="flex justify-center items-center space-x-4 mb-8 text-gray-600">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
              
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-neutral-light px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </article>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold mb-2">Blog post not found</h3>
              <p className="mb-6">The article you're looking for may have been removed or the URL might be incorrect.</p>
              <Link href="/blog" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                Back to Blog
              </Link>
            </div>
          )}
        </div>
        
        <CTASection 
          title="Need Professional Roofing Services?" 
          text="Contact us today for a free inspection and estimate for your roofing project."
          buttonText="Get a Free Estimate"
          buttonLink="/contact"
          showPhoneButton={true}
        />
      </div>
    </div>
  );
};

export default BlogPost;