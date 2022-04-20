import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset
} = createStitches({
  theme: {
    fonts: {
      default: 'Roboto, -apple-system, system-ui, sans-serif',
      highlight: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      reading: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      code: 'Söhne Mono, menlo, monospace'
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: '#cdced3'
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
      4: '19px',
      5: '21px',
      6: '26px',
      7: '31px',
      8: '36px',
      9: '41px'
    }
  },
  media: {
    bp1: '(min-width: 576px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 992px)',
    bp4: '(min-width: 1200px)',
    bp5: '(min-width: 1400px)'
  }
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: {
    hiContrast: '#cdced3',
    loContrast: 'hsl(206,10%,5%)'
  }
})
