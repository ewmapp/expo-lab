/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { styled } from '../../../web/src'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

const Image = styled('img', {
  verticalAlign: 'middle',
  maxWidth: '100%'
})

export const ImageBox = ({ ...props }: ImageProps) => {
  return <Image {...props} />
}
