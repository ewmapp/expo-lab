// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Text } from '../text/Text'
import { VariantProps, CSS } from '../../../web/src'
import merge from 'lodash.merge'

const DEFAULT_TAG = 'h1'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type HeadingSizeVariants = '1' | '2' | '3' | '4'
type HeadingVarVariants =
  | 'default'
  | 'contrast'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
type HeadingVariants = {
  size?: HeadingSizeVariants
  variant?: HeadingVarVariants
  gradient?: true
} & Omit<VariantProps<typeof Text>, 'size'>
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: never }

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  // '2' here is the default heading size variant
  const { size = '2', ...textProps } = props
  // This is the mapping of Heading Variants to Text variants
  const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': 'lg', '@bp2': 'xl' },
    2: { '@initial': '2xl', '@bp2': '4xl' },
    3: { '@initial': '5xl', '@bp2': '6xl' },
    4: { '@initial': '7xl', '@bp2': '8xl' }
  }

  // This is the mapping of Heading Variants to Text css
  const textCss: Record<HeadingSizeVariants, CSS> = {
    1: {
      fontWeight: 500,
      lineHeight: '$shorter',
      py: '$1',
      '@bp2': { lineHeight: '$shorter', py: '$2' }
    },
    2: {
      fontWeight: 500,
      lineHeight: '$shorter',
      py: '$1',
      '@bp2': { lineHeight: '$shorter', py: '$2' }
    },
    3: {
      fontWeight: 500,
      lineHeight: '$shorter',
      py: '$2',
      '@bp2': { lineHeight: '$shorter', py: '$3' }
    },
    4: {
      fontWeight: 500,
      lineHeight: '$shorter',
      py: '$2',
      '@bp2': { lineHeight: '$shorter', py: '$3' }
    }
  }

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: 'proportional-nums',
        ...merge(textCss[size], props.css)
      }}
    />
  )
})

Heading.displayName = 'Heading'
