import React from 'react'
import Image from 'next/image';

type MyImageProps = {
  src: string;
  alt: string;
}

export default function MyImage({ src, alt }: MyImageProps) {
  return (
    <Image src={src} alt={alt} layout="fill" objectFit="contain" className="p-2" />
  )
}
