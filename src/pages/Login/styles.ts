import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  '@media(max-width: 1440px)': {
    gridTemplateColumns: '1fr 1.4fr'
  },
  '@media(max-width: 900px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const LeftSide = styled('div', {
  background: '$yellow',
  position: 'relative',
  backgroundImage: 'url(assets/background.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat',
  '@media(max-width: 900px)': {
    display: 'none'
  }
})

export const Logo = styled('img', {
  position: 'absolute',
  top: '5.2rem',
  left: '6rem',
  variants: {
    onlyMobile: {
      true: {
        display: 'none',
        '@media(max-width: 900px)': {
          position: 'static',
          top: 'auto',
          left: 'auto',
          display: 'block'
        }
      }
    }
  }
})

export const RightSide = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media(max-width: 600px)': {
    padding: '2rem'
  }
})

export const FormContainer = styled('div', {})

export const HeadingWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '7.6rem',
  h2: {
    fontWeight: '700',
    fontSize: '4rem',
    marginBottom: '2rem'
  },
  p: {
    fontWeight: 300,
    fontSize: '2.4rem',
    maxWidth: '43.7rem'
  }
})

export const LoginForm = styled('form', {
  display: 'block'
})

export const InputWraps = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.6rem',
  marginBottom: '4rem'
})
