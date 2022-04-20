import { Section as SectionCSS } from '../../../styles/index'
import { styled } from '../../../web/src'
import React, { forwardRef } from 'react'

const StyleSection = styled('section', SectionCSS)

export type SectionProps = React.ComponentProps<typeof StyleSection> &
  React.HTMLAttributes<typeof StyleSection>

export const Section = forwardRef<
  React.ElementRef<typeof StyleSection>,
  SectionProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleSection ref={forwardRef} {...props}>
      {children}
    </StyleSection>
  )
})

Section.displayName = 'Section'
