import { Link } from 'wouter';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const ServiceCard = ({ icon, title, description, link, linkText }: ServiceCardProps) => (
  <div className="service-card bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <i className={`fas ${icon} text-2xl text-blue-600`}></i>
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={link} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
      {linkText} <i className="fas fa-arrow-right ml-2"></i>
    </Link>
  </div>
);

const FeaturedServices = () => {
  const services = [
    {
      icon: 'fa-home',
      title: 'Residential Roofing',
      description: 'Expert installation, repair and maintenance for all types of residential roofs.',
      link: '/services/residential-roofing',
      linkText: 'Learn About Residential Roofing Services'
    },
    {
      icon: 'fa-building',
      title: 'Commercial Roofing',
      description: 'Durable, high-performance roofing solutions for commercial properties of all sizes.',
      link: '/services/commercial-roofing',
      linkText: 'Explore Commercial Roofing Solutions'
    },
    {
      icon: 'fa-tools',
      title: 'Roof Repairs',
      description: 'Fast, reliable repairs for leaks, storm damage, and other roofing issues.',
      link: '/services/roof-repair',
      linkText: 'Get Professional Roof Repair Services'
    },
    {
      icon: 'fa-file-invoice-dollar',
      title: 'Insurance Claims',
      description: 'Expert assistance navigating the insurance claim process for storm damage.',
      link: '/services/insurance-claims',
      linkText: 'Learn About Insurance Claim Assistance'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans mb-4">Expert Roofing Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            From new installations to repairs and insurance claims, we provide comprehensive roofing solutions for the Denver metro area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              linkText={service.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
