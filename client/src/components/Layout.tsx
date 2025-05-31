import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import EnhancedChatWidget from './EnhancedChatWidget';
import StickyCallButton from './StickyCallButton';
import { useAnalytics } from '@/hooks/use-analytics';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Track page views when routes change
  useAnalytics();

  return (
    <div className="font-body text-neutral-dark bg-neutral-light min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <EnhancedChatWidget />
      <StickyCallButton />
    </div>
  );
};

export default Layout;
