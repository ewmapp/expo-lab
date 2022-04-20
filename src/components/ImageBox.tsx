/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-use-before-define
import React from 'react'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const ImageBox = ({ ...props }: ImageProps) => {
  return <img {...props} />
}
