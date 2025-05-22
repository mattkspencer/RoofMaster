
import PortfolioSection from '@/components/PortfolioSection';
import Breadcrumb from '@/components/Breadcrumb';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' }
        ]} 
      />
      <PortfolioSection />
    </div>
  );
}
