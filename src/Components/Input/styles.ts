import { styled } from '@styles/stitches'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
})

export const Input = styled('div', {
  input: {
    width: '100%',
    borderRadius: '.6rem',
    padding: '2rem',
    fontSize: '1.6rem',
    outline: 'none',
    borderColor: 'rgb(0, 0 ,0)',
    '&::placeholder': {
      color: '#595959'
    }
  },
  variants: {
    error: {
      true: {
        input: {
          borderColor: 'red'
        }
      }
    }
  }
})

export const Label = styled('label', {
  display: 'block',
  marginBottom: '1.2rem',
  fontWeight: 400,
  fontSize: '2rem'
})

export const ErrorText = styled('p', {
  color: 'red',
  position: 'absolute',
  bottom: '0',
  transform: 'translateY(120%)'
})
