import { HTMLAttributes } from 'react';

interface OptimizedImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  loading = 'lazy', 
  decoding = 'async',
  sizes,
  className,
  ...props 
}: OptimizedImageProps) => {
  // Generate WebP source if JPEG/JPG image
  const webpSrc = src.replace(/\.(jpg|jpeg)$/i, '.webp');
  const isLocalImage = src.startsWith('/images/');

  if (isLocalImage) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          sizes={sizes}
          className={className}
          {...props}
        />
      </picture>
    );
  }

  // For external images (like Unsplash), use regular img tag
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
      {...props}
    />
  );
};

export default OptimizedImage;