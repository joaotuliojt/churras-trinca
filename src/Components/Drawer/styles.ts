import * as Dialog from '@radix-ui/react-dialog'
import { styled, keyframes } from '@styles/stitches'

const showDrawerKeyframe = keyframes({
  '0%': {
    transform: 'translateX(100%)'
  },
  '100%': {
    transform: 'translateX(0)'
  }
})

const fadingAnimation = keyframes({
  from: {
    background: 'transparent'
  },
  to: {
    background: 'rgba(0, 0, 0, .4)'
  }
})

export const Container = styled(Dialog.Root, {})

export const Overlay = styled(Dialog.Overlay, {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, .4)',
  animation: `${fadingAnimation} .4s ease`
})

export const Content = styled(Dialog.Content, {
  position: 'absolute',
  right: '0',
  height: '100vh',
  backgroundColor: '#202020',
  color: '#FAFAFA',
  width: '63.6rem',
  backgroundImage: 'url("/assets/background_white.svg")',
  backgroundSize: 'contain',
  overflowY: 'scroll',
  paddingBottom: '6rem',
  animation: `${showDrawerKeyframe} .5s ease`,
  '&::-webkit-scrollbar': {
    width: '.4rem',
    background: '$white'
  },
  '&::-webkit-scrollbar-thumb': {
    width: '.1rem',
    background: '$yellow'
  },
  '@media(max-width: 660px)': {
    width: '100vw',
    overflowX: 'hidden'
  }
})

export const Title = styled(Dialog.Title, {
  fontSize: '3.6rem',
  fontWeight: 700,
  color: '$yellow'
})

export const Close = styled(Dialog.Close, {
  cursor: 'pointer'
})

export const DrawerHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '3.2rem 4rem 0 4rem'
})

export const Divider = styled('div', {
  width: '100%',
  height: '1px',
  backgroundColor: '#2F2F2F',
  marginTop: '3.2rem',
  marginBottom: '6rem'
})

export const ChildrenWrap = styled('div', {
  padding: '0 4rem'
})
