import { css } from '../../../web/src'

export const Section = css({
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  variants: {
    size: {
      '1': {
        py: '$3',
      },
      '2': {
        py: '$5',
      },
      '3': {
        py: '$8',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})
