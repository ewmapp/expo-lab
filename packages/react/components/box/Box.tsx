import { Box as BoxCSS } from '../../../styles/index'
import { styled, CSS } from '../../../web/src'
import { forwardRef } from 'react'

const StyleBox = styled('div', BoxCSS)

export type BoxProps = React.ComponentProps<typeof StyleBox> &
  React.HTMLAttributes<typeof StyleBox> & { css?: CSS; as?: never }

export const Box = forwardRef<React.ElementRef<typeof StyleBox>, BoxProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleBox ref={forwardRef} {...props}>
        {children}
      </StyleBox>
    )
  }
)

Box.displayName = 'Box'
