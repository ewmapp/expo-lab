import { IconButton as IconButtonCSS } from '../../../styles'
import { styled } from '../../../web/src'
import { forwardRef } from 'react'

const StyledIconButton = styled('button', IconButtonCSS)

export type IconButtonProps = React.ComponentProps<typeof StyledIconButton> &
  React.ButtonHTMLAttributes<typeof IconButtonCSS>

export const IconButton = forwardRef<
  React.ElementRef<typeof StyledIconButton>,
  IconButtonProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyledIconButton ref={forwardRef} {...props}>
      {children}
    </StyledIconButton>
  )
})

IconButton.displayName = 'IconButton'
