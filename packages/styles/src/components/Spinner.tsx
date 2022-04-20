import { css, keyframes } from '../../../web/src'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const Spinner = css({
  display: 'block',
  position: 'relative',
  boxSizing: 'border-box',
  border: '2px solid $colors$slate1',
  borderRadius: '50%',
  borderTop: '2px solid $colors$loTransparent',
  width: '16px',
  height: '16px',
  animation: `${spin} 0.6s linear 0s infinite normal none`,

  '&::before': {
    content: '',
    boxSizing: 'inherit',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    borderRightColor: 'transparent'
  },

  '&::after': {
    content: '',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '$colors$slate2',
    opacity: '$medium'
  }
})
