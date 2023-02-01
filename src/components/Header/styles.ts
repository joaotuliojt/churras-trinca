import { styled } from '@styles/stitches'

export const Container = styled('header', {
  height: '12.6rem',
  backgroundImage: 'url("/assets/background.svg")',
  backgroundRepeat: 'repeat',
  padding: '0 4.8rem',
  backgroundColor: '$yellow',
  backgroundSize: 'contain'
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%'
})

export const LogoWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
  img: {
    width: '5.4rem',
    height: '5.4rem'
  },
  p: {
    fontWeight: 600,
    fontSize: '2rem',
    userSelect: 'none'
  },
  '@media(max-width: 460px)': {
    p: {
      display: 'none'
    }
  }
})

export const Logout = styled('div', {
  a: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 600,
    gap: '.6rem',
    color: '#000',
    fontSize: '2rem'
  }
})
