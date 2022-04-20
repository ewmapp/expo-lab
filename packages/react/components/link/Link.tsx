import { Link as LinkCSS } from '../../../styles/index'
import { styled, CSS } from '../../../web/src'
import { forwardRef } from 'react'

const StyleLink = styled('a', LinkCSS)

export type LinkProps = React.ComponentProps<typeof StyleLink> &
  React.HTMLAttributes<typeof StyleLink> & { css?: CSS; as?: any }

export const Link = forwardRef<React.ElementRef<typeof StyleLink>, LinkProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleLink ref={forwardRef} {...props}>
        {children}
      </StyleLink>
    )
  }
)

Link.displayName = 'Link'
