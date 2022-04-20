import { css } from '../../../web/src'

export const ButtonLabel = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > * + *': {
    marginLeft: '$3'
  }
})

ButtonLabel.toString = () => `.${ButtonLabel.className}`

export const ButtonLoading = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Button = css({
  // Reset
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  border: '1px solid transparent',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s ease 0s, box-shadow 0.2s ease 0s',

  variants: {
    variant: {
      solid: {
        backgroundColor: '$loSoPrimary',
        color: '#fff',
        '&:hover': {
          backgroundColor: '$hiSoPrimary'
        }
      },
      soft: {
        backgroundColor: '$loBgPrimary',
        color: '$loPrimary',
        '&:hover': {
          backgroundColor: '$hiBgPrimary'
        }
      },
      ghost: {
        backgroundColor: 'transpatent',
        color: '$loPrimary',
        '&:hover': {
          backgroundColor: '$hiBgPrimary'
        }
      },
      link: {
        backgroundColor: 'transpatent',
        color: '$loPrimary',
        '&:hover': {
          color: '$loPrimary',
          backgroundColor: 'transpatent'
        }
      },
      light: {
        backgroundColor: '$slate6',
        color: '$slate11',
        '&:hover': {
          backgroundColor: '$slate7'
        }
      },
      dark: {
        backgroundColor: '$loBgSecondary',
        color: '$loSecondary',
        '&:hover': {
          backgroundColor: '$hiBgSecondary'
        }
      },
      success: {
        backgroundColor: '$green6',
        color: '$green11',
        '&:hover': {
          backgroundColor: '$green7'
        }
      },
      danger: {
        backgroundColor: '$red6',
        color: '$red11',
        '&:hover': {
          backgroundColor: '$red7'
        }
      }
    },
    size: {
      sm: {
        height: '$8',
        padding: '0 $4',
        fontsize: '$xs'
      },
      md: {
        height: '$10',
        padding: '0 $6'
      },
      lg: {
        height: '$12',
        padding: '0 $8'
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '$medium'
      }
    },
    outlined: {
      true: {}
    },
    loading: {
      true: {
        [`& ${ButtonLabel}`]: {
          visibility: 'hidden'
        }
      }
    }
  },

  compoundVariants: [
    {
      variant: 'solid',
      outlined: true,
      css: {
        color: '$loPrimary',
        background: '$bgPrimary',
        borderColor: '$loBdPrimary',
        '&:hover': {
          color: '$loPrimary',
          background: '$loBgPrimary',
          borderColor: '$hiBdPrimary'
        }
      }
    },
    {
      variant: 'soft',
      outlined: true,
      css: {
        background: 'none',
        borderColor: '$loBdPrimary',
        '&:hover': {
          background: 'none',
          borderColor: '$hiBdPrimary'
        }
      }
    },
    {
      variant: 'ghost',
      outlined: true,
      css: {
        background: 'none',
        borderColor: 'none',
        '&:hover': {
          background: 'none',
          borderColor: '$hiBdPrimary'
        }
      }
    },
    {
      variant: 'solid',
      outlined: true,
      disabled: true,
      css: {
        background: 'none',
        borderColor: '$loBdPrimary',
        '&:hover': {
          background: '$loBgPrimary'
        }
      }
    },
    {
      variant: 'soft',
      outlined: true,
      disabled: true,
      css: {
        background: 'none',
        borderColor: '$loBdPrimary',
        '&:hover': {
          background: 'none',
          borderColor: '$hiBdPrimary'
        }
      }
    },
    {
      variant: 'light',
      outlined: true,
      css: {
        background: '$slate1',
        borderColor: '$slate8',
        '&:hover': {
          background: '$slate2',
          borderColor: '$slate8'
        }
      }
    },
    {
      variant: 'success',
      outlined: true,
      css: {
        background: '$green1',
        borderColor: '$green8',
        '&:hover': {
          background: '$green2',
          borderColor: '$green8'
        }
      }
    },
    {
      variant: 'danger',
      outlined: true,
      css: {
        background: '$red1',
        borderColor: '$red6',
        '&:hover': {
          background: '$red2',
          borderColor: '$red8'
        }
      }
    }
  ],

  defaultVariants: {
    variant: 'solid',
    size: 'md'
  }
})
