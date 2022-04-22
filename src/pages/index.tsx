/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from 'next/types'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import Script from 'next/script'
import dynamic from 'next/dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { TitleAndMetaTags } from '../components/TitleAndMetaTags'
import { styled, css, keyframes } from '../../packages/web/src'
import { Box, Text, ImageBox } from '../../packages/react'

import Loader from '../components/Loader'
import { LogoSvg } from '../components/LogoSvg'

import Particles from '../components/Particles'

const LocaleToggle = dynamic(() => import('../components/LocaleToggle'), {
  ssr: false
})

const buttonClass = css({
  width: '120px',
  height: '100px',
  fontSize: '1.3rem',
  textAlign: 'center',
  background: '#4f8bc9',
  color: '#fff',
  padding: '37px 10px',
  textDecoration: 'none',
  cursor: 'pointer',
  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  transition: 'transform .1s',

  '&:hover': {
    background: '#d0741b',
    transform: 'scale(1.05)'
  }
})

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',

  webkitBoxAlign: 'center',
  alignItems: 'center',

  backgroundImage: 'url("assets/img/bg.jpg")',
  backgroundRrepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

const Container = styled('div', {
  flex: '1 1 0%',
  display: 'flex',
  flexFlow: 'row wrap',
  alignContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1280px',
  zIndex: '1',
  padding: '1rem 0.7rem',

  '@bp3': {
    padding: '1rem 0'
  }
})

const ItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexFlow: 'row wrap',

  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  width: '100%'
})

const MenuContent = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  width: '100%',

  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',

  gap: '10px',
  rowGap: '10px',
  columnGap: '20px'
})

export const getStaticProps: GetStaticProps = async context => ({
  props: {
    ...(await serverSideTranslations(context.locale!, ['home']))
  }
})

export default function Home() {
  const { t } = useTranslation('home')

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

  const timer = setTimeout(() => {
    setLoading(false)
  }, 800)

  return (
    <Box>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2J3EJ7KGZ9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2J3EJ7KGZ9');
        `}
      </Script>
      <TitleAndMetaTags title={t('title')} />
      {!loading ? (
        <>
          <Particles />
          <Main>
            <Container>
              <ItemContent css={{ minHeight: 56 }}>
                <LocaleToggle />
              </ItemContent>
              <ItemContent css={{ maxWidth: 920, margin: '10px auto' }}>
                <LogoSvg />
                <Text
                  css={{
                    color: '#4f8bc9',
                    textAlign: 'center',
                    marginTop: '1vw',
                    letterSpacing: '0.9vw',
                    fontStyle: 'italic',
                    fontSize: '22px',
                    fontWeight: '700',
                    '@bp1': {
                      fontSize: '4vw'
                    },
                    '@bp2': {
                      fontSize: '40px'
                    }
                  }}
                >
                  {t('subtitle')}
                </Text>
                <Text
                  css={{
                    color: '#000',
                    textAlign: 'center',
                    marginTop: '2vw',
                    fontStyle: 'italic',
                    fontSize: '22px',
                    lineHeight: 1,
                    fontWeight: 400,
                    '@bp1': {
                      fontSize: '4vw'
                    },
                    '@bp2': {
                      fontSize: '40px'
                    }
                  }}
                >
                  {t('description')}
                </Text>
                <MenuContent css={{ margin: '2rem 0 2rem' }}>
                  <Link href="live">
                    <a className={buttonClass()}>{t('buttonAccess')}</a>
                  </Link>
                </MenuContent>
              </ItemContent>
              <ItemContent
                css={{
                  maxWidth: 800,
                  margin: '0 auto 9vh',
                  '@bp2': {
                    margin: '0 auto 0'
                  }
                }}
              >
                <ImageBox
                  src="/assets/img/img-footer.png"
                  width="100%"
                  height="auto"
                  alt="org"
                />
              </ItemContent>
            </Container>
          </Main>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  )
}
