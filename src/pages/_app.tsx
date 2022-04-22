import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme, globalCss } from '../../stitches.config'
import { appWithTranslation } from 'next-i18next'

const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0px',
    outline: '0px',
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: '$default',
    backgroundColor: '$loContrast'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
