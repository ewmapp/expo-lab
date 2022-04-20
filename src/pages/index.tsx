import { styled } from '../../stitches.config'
import { LogoSvg } from '../components/LogoSvg'
import Image from 'next/image'
import ParticleField from 'react-particles-webgl'
import { TitleAndMetaTags } from '../components/TitleAndMetaTags'
import { Box, Text } from '../../packages/react'

const Texto = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1'
      },
      2: {
        fontSize: '$2'
      },
      3: {
        fontSize: '$3'
      },
      4: {
        fontSize: '$4'
      },
      5: {
        fontSize: '$5'
      },
      6: {
        fontSize: '$6'
      },
      7: {
        fontSize: '$7'
      },
      8: {
        fontSize: '$8'
      },
      9: {
        fontSize: '$9'
      }
    }
  }
})

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  /* background: 'radial-gradient(#fff, #cdced3)' */
  /* backgroundImage:
    'radial-gradient(rgba(255,255,255, 1), rgba(0,0,0, 0.2)), url("assets/img/background.jpg")', */
  backgroundImage: 'url("assets/img/bg.jpg")',
  backgroundRrepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

const Content = styled('div', {
  flex: '1 1 0%',
  display: 'flex',
  flexDirection: 'column',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1000px',
  padding: '32px'
})

const DivCenter = styled('div', {
  flex: '1 1 0%',
  display: 'flex',
  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '28px 0px 50px'
})

const DivLogo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  maxWidth: '920px',
  zIndex: '10'
})

const DivFooter = styled('div', {
  position: 'fixed',
  left: 0,
  bottom: '2vw',
  width: '100%',
  textAlign: 'center',
  padding: '32px'
})

const config = {
  showCube: false,
  dimension: '3D',
  velocity: 0.2,
  boundaryType: 'bounce',
  antialias: false,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1
  },
  lines: {
    colorMode: 'solid',
    color: '#315189',
    transparency: 0.8,
    limitConnections: true,
    maxConnections: 3,
    minDistance: 400,
    visible: true
  },
  particles: {
    colorMode: 'solid',
    color: '#286898',
    transparency: 0.6,
    shape: 'circle',
    boundingBox: 'canvas',
    count: 50,
    minSize: 90,
    maxSize: 150,
    visible: true
  },
  cameraControls: {
    enabled: true,
    enableDamping: true,
    dampingFactor: 0.25,
    enableZoom: false,
    autoRotate: true,
    autoRotateSpeed: 0.5,
    resetCameraFlag: false
  },
  maxConnections: 3,
  limitConnections: true
}

const myLoader = ({ src, width, quality }) => {
  return `assets/img/${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags title="EXPOLAB | 1&#170; Mostra Nacional de Experiências da Rede de Laboratórios de Saúde Pública" />
      <Main>
        <div
          style={{
            height: '100vh',
            width: '100%',
            position: 'absolute',
            zIndex: '0'
          }}
        >
          <ParticleField config={config} />
        </div>
        <Content>
          <DivCenter>
            <DivLogo>
              <LogoSvg />
              <Texto
                as="h2"
                css={{
                  fontFamily: '$default',
                  color: '#4f8bc9',
                  textAlign: 'center',
                  marginTop: '1vw',
                  letterSpacing: '0.9vw',
                  fontStyle: 'italic',
                  fontSize: '22px',
                  '@bp1': {
                    fontSize: '4vw'
                  },
                  '@bp2': {
                    fontSize: '6vw'
                  },
                  '@bp3': {
                    fontSize: '40px'
                  }
                }}
              >
                04 de maio de 2022
              </Texto>
              <Texto
                as="h2"
                css={{
                  fontFamily: '$default',
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
                    fontSize: '6vw'
                  },
                  '@bp3': {
                    fontSize: '40px'
                  }
                }}
              >
                1&#170; Mostra Nacional de Experiências da Rede de Laboratórios
                de Saúde Pública
              </Texto>
              <Text>Ola</Text>
            </DivLogo>
          </DivCenter>
        </Content>
        <DivFooter>
          <Image
            loader={myLoader}
            src="img-footer.png"
            alt="Org"
            width={562}
            height={58}
          />
        </DivFooter>
      </Main>
    </Box>
  )
}
