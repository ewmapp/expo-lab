/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GetStaticProps } from 'next/types'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

import { TitleAndMetaTags } from '../components/TitleAndMetaTags'
import { styled, css } from '../../packages/web/src'
import { Box, Text, ImageBox } from '../../packages/react'

import { LogoSvg } from '../components/LogoSvg'
import { FlagBR, FlagUS } from '../components/FlagSvg'

import Particles from '../components/Particles'

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

const ButtonLocale = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: '54px',
  height: '40px',
  background: '#4f8bc9',
  boxSizing: 'border-box',
  webkitClipPath:
    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',

  '& svg': {
    position: 'absolute',
    top: '0px',
    left: '4px',
    width: '46px',
    height: '40px',
    webkitClipPath:
      'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
  },

  '&:hover': {
    background: '#d0741b',
    transform: 'scale(1.05)'
  }
})

export const getStaticProps: GetStaticProps = async context => ({
  props: {
    ...(await serverSideTranslations(context.locale!, ['home']))
  }
})

export default function Home() {
  const { t } = useTranslation('home')
  return (
    <Box>
      <TitleAndMetaTags title={t('title')} />
      <Particles />
      <Main>
        <Container>
          <ItemContent>
            <MenuContent>
              <Link href="/" locale="pt">
                <a>
                  <ButtonLocale>
                    <FlagBR />
                  </ButtonLocale>
                </a>
              </Link>
              <Link href="/" locale="en">
                <a>
                  <ButtonLocale>
                    <FlagUS />
                  </ButtonLocale>
                </a>
              </Link>
            </MenuContent>
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
    </Box>
  )
}
