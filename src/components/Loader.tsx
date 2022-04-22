import { styled } from '../../stitches.config'
import ClipLoader from 'react-spinners/DotLoader'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
  background:
    'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(223,223,223,1) 100%)',
  position: 'absolute',
  zIndex: '9999'
})

export default function Loader() {
  return (
    <Container>
      <ClipLoader color="#4f8bc9" loading={true} size={150} />
    </Container>
  )
}
