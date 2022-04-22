/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GetStaticProps } from 'next/types'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import { TitleAndMetaTags } from '../components/TitleAndMetaTags'
import { styled, css } from '../../stitches.config'
import { Box, ImageBox } from '../../packages/react'

import ReactPlayer from 'react-player/lazy'

const LogoSvg = dynamic(() => import('../components/LogoSvg'), {
  ssr: false
})

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  minHeight: '100vh',
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
  padding: '1rem 0.5rem',

  '@bp3': {
    padding: '1rem 1.5rem'
  },

  '@bp4': {
    padding: '1rem 0'
  }
})

const TopContent = styled('div', {
  display: 'flex',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  width: '100%',
  padding: '1rem 0 1rem',

  '& svg': {
    maxHeight: '80px'
  },
  '& img': {
    maxHeight: '80px'
  },
  '@bp4': {
    '& svg': {
      maxHeight: '120px'
    },
    '& img': {
      maxHeight: '120px'
    }
  }
})

const Content = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  webkitBoxShadow: '1px 1px 20px 10px rgba(0,0,0,0.20)',
  boxShadow: '1px 1px 20px 10px rgba(0,0,0,0.20)',

  '@bp2': {
    gridTemplateColumns: '70% auto'
  }
})

const BotContent = styled('div', {
  display: 'flex',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  width: '100%',
  padding: '1rem 0 1rem',

  '& svg': {
    maxHeight: '80px'
  },
  '& img': {
    maxHeight: '80px'
  },
  '@bp4': {
    padding: '1rem 0 0'
  }
})

const PlayWrapper = styled('div', {
  position: 'relative',
  paddingTop: '56.25%',

  gridColumn: 'span 2',
  gridRow: 'span 2',

  '@bp3': {
    gridColumn: 'span 1',
    gridRow: 'span 1'
  }
})

const ChatWrapper = styled('div', {
  width: '100%',
  gridColumn: 'span 2',
  gridRow: 'span 2',
  height: '400px',

  '@bp3': {
    gridColumn: 'span 1',
    gridRow: 'span 1',
    height: 'auto'
  }
})

const playerReact = css({
  position: 'absolute',
  top: 0,
  left: 0
})

const ChatID = (chatid: never) => {
  return `https://vimeo.com/live-chat/${chatid}/`
}

export const getStaticProps: GetStaticProps = async context => ({
  props: {
    ...(await serverSideTranslations(context.locale!, ['home']))
  }
})

export default function Live() {
  const { t } = useTranslation('home')
  return (
    <Box>
      <TitleAndMetaTags title={t('title')} />
      <Main>
        <Container>
          <TopContent>
            <LogoSvg />
          </TopContent>
          <Content>
            <PlayWrapper>
              <ReactPlayer
                className={playerReact()}
                url="https://player.vimeo.com/video/"
                width="100%"
                height="100%"
                config={{
                  vimeo: {
                    playerOptions: {
                      id: t('vimeoID'),
                      controls: true,
                      autoplay: true,
                      dnt: true,
                      title: true,
                      transparent: false
                    }
                  }
                }}
              />
            </PlayWrapper>
            <ChatWrapper>
              <iframe
                src={ChatID(t('vimeoChat'))}
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </ChatWrapper>
          </Content>
          <BotContent>
            <ImageBox
              src="/assets/img/img-footer.png"
              width="800"
              height="auto"
              alt="org"
            />
          </BotContent>
        </Container>
      </Main>
    </Box>
  )
}
