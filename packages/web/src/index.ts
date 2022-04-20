/* import { colors as defaultColors } from '../../colors/src' */
import {
  blue,
  blueDark,
  crimson,
  crimsonDark,
  cyan,
  cyanDark,
  gray,
  grayDark,
  green,
  greenDark,
  lime,
  limeDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  violet,
  violetDark,
  yellow,
  yellowDark,
  whiteA,
  blackA
} from '@radix-ui/colors'
import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity'
  },
  theme: {
    colors: {
      ...blue,
      ...crimson,
      ...cyan,
      ...gray,
      ...green,
      ...lime,
      ...orange,
      ...pink,
      ...purple,
      ...blueDark,
      ...red,
      ...slate,
      ...slateA,
      ...violet,
      ...yellow,

      ...whiteA,
      ...blackA,

      bgColor: '$slate1',
      hiContrast: '$slate12',
      loContrast: '$slate1',

      // Theme Component Color
      loPrimary: '$pink11',
      hiPrimary: '$pink12',
      bgPrimary: '$pink1',

      loSecondary: '$slate5',

      // Theme Component Background
      hiBgPrimary: '$pink5',
      miBgPrimary: '$pink4',
      loBgPrimary: '$pink3',

      // Theme Component Border
      hiBdPrimary: '$pink8',
      miBdPrimary: '$pink7',
      loBdPrimary: '$pink6',

      // Theme Component Solid
      hiSoPrimary: '$pink9',
      loSoPrimary: '$pink10',

      hiBgSecondary: '$slateA9',
      miBgSecondary: '$slateA10',
      loBgSecondary: '$slateA11',

      loTransparent: 'rgba(255,255,255,0.5)'
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem'
    },

    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem'
    },

    fonts: {
      default: 'Roboto, -apple-system, system-ui, sans-serif',
      highlight: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      reading: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      code: 'Söhne Mono, menlo, monospace'
    },

    fontWeights: {
      regular: 'regular',
      medium: 'medium',
      bold: 'bold'
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%'
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px'
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px'
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%'
    },

    zIndices: {
      overlay: 9995,
      modal: 9999,
      under: -1
    }
  },

  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)'
  },

  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    })
  }
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...crimsonDark,
    ...cyanDark,
    ...grayDark,
    ...greenDark,
    ...limeDark,
    ...orangeDark,
    ...pinkDark,
    ...purpleDark,
    ...redDark,
    ...slateDark,
    ...slateDarkA,
    ...violetDark,
    ...yellowDark,

    ...whiteA,
    ...blackA,

    bgColor: '$slate1',
    hiContrast: '$slate12',
    loContrast: '$slate1',

    // Theme Component Color
    loPrimary: '$pink11',
    hiPrimary: '$pink12',
    bgPrimary: '$pink1',

    loSecondary: '$slate11',

    // Theme Component Background
    hiBgPrimary: '$pink5',
    miBgPrimary: '$pink4',
    loBgPrimary: '$pink3',

    // Theme Component Border
    hiBdPrimary: '$pink8',
    miBdPrimary: '$pink7',
    loBdPrimary: '$pink6',

    // Theme Component Solid
    hiSoPrimary: '$pink9',
    loSoPrimary: '$pink10',

    hiBgSecondary: '$slateA5',
    miBgSecondary: '$slateA4',
    loBgSecondary: '$slateA3',

    loTransparent: 'rgba(0,0,0,0.5)'
  }
})
