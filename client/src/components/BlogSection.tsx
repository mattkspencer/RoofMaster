import { Link } from 'wouter';
import { formatDate, truncateText } from '@/lib/utils';
import OptimizedImage from './OptimizedImage';

interface BlogPost {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  linkText?: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      image: "/images/haildamagepic.jpg",
      date: "2023-06-15",
      title: "How to Identify Hail Damage on Your Roof",
      excerpt: "Learn the telltale signs of hail damage and what steps to take if you suspect your roof has been compromised after a storm.",
      slug: "how-to-identify-hail-damage",
      linkText: "Read About Identifying Hail Damage"
    },
    {
      image: "https://picsum.photos/600/300?random=31",
      date: "2023-05-28",
      title: "The Best Roofing Materials for Colorado's Climate",
      excerpt: "Discover which roofing materials stand up best to Colorado's unique climate challenges, from hail to intense sun and everything in between.",
      slug: "best-roofing-materials-colorado",
      linkText: "Discover Best Roofing Materials for Colorado"
    },
    {
      image: "https://picsum.photos/600/300?random=32",
      date: "2023-04-10",
      title: "When to Repair vs. Replace Your Roof",
      excerpt: "Is it time for a full roof replacement, or can repairs extend your roof's life? This guide helps you make the right decision for your home.",
      slug: "repair-vs-replace-roof",
      linkText: "Learn When to Repair vs Replace Your Roof"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans mb-4">Roofing Tips & Insights</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Helpful articles and resources to help you make informed decisions about your roofing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <OptimizedImage 
                src={post.image} 
                alt={`${post.title} - Spencer Roofing Solutions blog article`}
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
                width={600}
                height={300}
                mobileWidth={400}
                mobileHeight={200}
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{truncateText(post.excerpt, 120)}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
                  {post.linkText || "Read Roofing Article"} <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/blog"
            className="inline-block border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
