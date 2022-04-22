/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme, globalCss } from '../../stitches.config'
import { appWithTranslation } from 'next-i18next'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Loader from '../components/Loader'

const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0px',
    outline: '0px',
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: '$default',
    backgroundColor: '#f1f1f1'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = (url: any) => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  setTimeout(() => {
    setLoading(false)
  }, 500)

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      {!loading ? <Component {...pageProps} /> : <Loader />}
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
