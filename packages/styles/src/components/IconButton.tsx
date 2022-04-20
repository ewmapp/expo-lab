import { css } from '../../../web/src'

export const IconButton = css({
  // Reset
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  border: '1px solid transparent',
  padding: '0px',
  backgroundColor: 'transparent',
  borderRadius: '$sm',
  borderWidth: '0',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s ease 0s, box-shadow 0.2s ease 0s',

  variants: {
    size: {
      sm: {
        height: '$8',
        padding: '0 $3 0 $3'
      },
      md: {
        height: '$10',
        padding: '0 $4 0'
      },
      lg: {
        height: '$12',
        padding: '0 $5 0'
      }
    },
    variant: {
      solid: {
        color: '#fff',
        backgroundColor: '$loSoPrimary',
        '&:hover': {
          backgroundColor: '$hiSoPrimary'
        }
      },
      soft: {
        color: '$hiContrast',
        backgroundColor: '$slate2',
        '&:hover': {
          backgroundColor: '$slate3'
        }
      },
      ghost: {
        color: '$hiContrast',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '$medium'
      }
    },
    outlined: {
      true: {
        color: '$loPrimary',
        border: '1px solid',
        backgroundColor: 'transparent'
      }
    }
  },

  compoundVariants: [
    {
      variant: 'solid',
      outlined: true,
      css: {
        background: '$bgPrimary',
        borderColor: '$loBdPrimary',
        '&:hover': {
          background: '$loBgPrimary',
          borderColor: '$hiBdPrimary'
        }
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid'
  }
})
