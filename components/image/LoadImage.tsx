import Image, { ImageProps } from "next/image";
import React from "react";

interface LoadImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  height: number;
  width: number;
  className:string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src, alt, height,className, width, ...rest }) => {
  function toBase64(str: string) {
    if (typeof window === "undefined") {
      return Buffer.from(str).toString("base64"); 
    }
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  function shimmer(w: number, h: number) {
    return `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect width="${w}" height="${h}" fill="#f3f3f3"/>
    </svg>`;
  }

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(20, 10))}`}
      {...rest}
    />
  );
};

export default LoadImage;
