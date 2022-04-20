import { css } from '../../../web/src'

export const SideBarMenu = css({
  width: '100%',
  marginTop: 80,
  transition: '0.3s',
})
export const SideBarSubMenu = css({
  background: 'rgba(255, 255, 255, 0.1)',
})

export const SideBarItem = css({
  position: 'relative',
  cursor: 'pointer',
})

export const SideBar = css({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  width: 250,
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: '-100%',
  overflowY: 'auto',
  transition: 'all 0.2s ease',
  zIndex: '10',

  variants: {
    show: {
      true: {
        left: 0,
      },
    },
  },
})
