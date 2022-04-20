import { css } from '../../../web/src'

export const Text = css({
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
        lineHeight: '$base',
      },
      xs: {
        fontSize: '$xs',
        lineHeight: '$base',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$base',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$base',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$base',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$base',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$short',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$short',
      },
      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$shorter',
      },
      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$shorter',
      },
      '7xl': {
        fontSize: '$7xl',
        lineHeight: '$shorter',
      },
      '8xl': {
        fontSize: '$8xl',
        lineHeight: '$shorter',
      },
      '9xl': {
        fontSize: '$9xl',
        lineHeight: '$shorter',
      },
    },
    variant: {
      red: {
        color: '$red11',
      },
      pink: {
        color: '$pink11',
      },
      purple: {
        color: '$purple11',
      },
      blue: {
        color: '$blue11',
      },
      green: {
        color: '$green11',
      },
      yellow: {
        color: '$yellow11',
      },
      orange: {
        color: '$orange11',
      },
      contrast: {
        color: '$hiContrast',
      },
      default: {
        color: '$slate11',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'red',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $red11, $crimson11)',
      },
    },
    {
      variant: 'pink',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $pink11, $purple11)',
      },
    },
    {
      variant: 'purple',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $purple11, $violet11)',
      },
    },
    {
      variant: 'blue',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $blue11, $cyan11)',
      },
    },
    {
      variant: 'green',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $green11, $lime11)',
      },
    },
    {
      variant: 'yellow',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $yellow11, $orange11)',
      },
    },
    {
      variant: 'orange',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $orange11, $red11)',
      },
    },
    {
      variant: 'contrast',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $hiContrast, $gray12)',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})
