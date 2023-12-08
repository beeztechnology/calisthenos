import React from 'react'
import Image from 'next/image';

type MyImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function MyImage({ src, alt }: MyImageProps) {
  return (
    <Image src={src} alt={alt} fill className="object-contain p-2" />
  )
}
