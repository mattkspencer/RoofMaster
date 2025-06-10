import { ReactNode, lazy, Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyCallButton from './StickyCallButton';
import { useAnalytics } from '@/hooks/use-analytics';

// Lazy load chat widget to reduce main bundle size
const ChatWidget = lazy(() => import('./ChatWidget'));

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
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
      <StickyCallButton />
    </div>
  );
};

export default Layout;
