import { HTMLAttributes } from 'react';

interface OptimizedImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  mobileWidth?: number;
  mobileHeight?: number;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  loading = 'lazy', 
  decoding = 'async',
  sizes = '(max-width: 768px) 100vw, 50vw',
  mobileWidth,
  mobileHeight,
  className,
  ...props 
}: OptimizedImageProps) => {
  // Generate WebP source if JPEG/JPG image
  const webpSrc = src.replace(/\.(jpg|jpeg)$/i, '.webp');
  const isLocalImage = src.startsWith('/images/');

  // Generate responsive srcsets for mobile optimization
  const generateSrcSet = (baseSrc: string) => {
    if (!isLocalImage) return baseSrc;
    
    // Use actual mobile-optimized images
    const mobileSrc = baseSrc.replace(/\.([^.]+)$/, '-mobile.$1');
    
    return `${mobileSrc} 480w, ${baseSrc} 768w`;
  };

  if (isLocalImage) {
    return (
      <picture>
        <source 
          srcSet={generateSrcSet(webpSrc)} 
          type="image/webp" 
          sizes={sizes}
        />
        <source 
          srcSet={generateSrcSet(src)} 
          type="image/jpeg" 
          sizes={sizes}
        />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          className={className}
          style={{ aspectRatio: `${width}/${height}` }}
          {...props}
        />
      </picture>
    );
  }

  // For external images (like Unsplash), use regular img tag with aspect ratio
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      className={className}
      style={{ aspectRatio: `${width}/${height}` }}
      {...props}
    />
  );
};

export default OptimizedImage;