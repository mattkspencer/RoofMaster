import { Link } from 'wouter';
import { formatDate, truncateText } from '@/lib/utils';

interface BlogPost {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      image: "https://pixabay.com/get/gad3ca8c95a6679cdd1043ec8600a842d346afb92be6d7e6f6abbacfbf5f314603cb235510bc26d7bc3bdd4be3f799568c4e34ff877db60a35cad90a8cf003fc3_1280.jpg",
      date: "2023-06-15",
      title: "How to Identify Hail Damage on Your Roof",
      excerpt: "Learn the telltale signs of hail damage and what steps to take if you suspect your roof has been compromised after a storm.",
      slug: "how-to-identify-hail-damage"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "2023-05-28",
      title: "The Best Roofing Materials for Colorado's Climate",
      excerpt: "Discover which roofing materials stand up best to Colorado's unique climate challenges, from hail to intense sun and everything in between.",
      slug: "best-roofing-materials-colorado"
    },
    {
      image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "2023-04-10",
      title: "When to Repair vs. Replace Your Roof",
      excerpt: "Is it time for a full roof replacement, or can repairs extend your roof's life? This guide helps you make the right decision for your home.",
      slug: "repair-vs-replace-roof"
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
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{truncateText(post.excerpt, 120)}</p>
                <Link href={`/blog/${post.slug}`}>
                  <a className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/blog">
            <a className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-md transition-colors">
              View All Articles
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
