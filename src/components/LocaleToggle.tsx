import { styled, keyframes } from '../../packages/web/src'
import Link from 'next/link'

import { FlagBR, FlagUS } from '../components/FlagSvg'

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

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
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
  },

  animation: `${fadeIn} 1000ms`,
  mozAnimation: `${fadeIn} 1000ms`,
  webkitAnimation: `${fadeIn} 1000ms`,
  oAnimation: `${fadeIn} 1000ms`
})

export default function LocaleToggle() {
  return (
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
  )
}
