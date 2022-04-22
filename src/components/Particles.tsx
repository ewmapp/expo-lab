import { styled } from '../../stitches.config'
import ParticleField from 'react-particles-webgl'

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

const Container = styled('div', {
  height: '100vh',
  width: '100%',
  position: 'absolute',
  zIndex: '0'
})

export default function Particles() {
  return (
    <Container>
      <ParticleField config={config} />
    </Container>
  )
}
