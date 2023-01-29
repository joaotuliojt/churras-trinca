import { styled, keyframes } from '../../../stitches.config'

const SpinnerAnimation = keyframes({
  '0%': {
    rotate: '0deg'
  },
  '100%': {
    rotate: '360deg'
  }
})

export const Button = styled('div', {
  button: {
    textTransform: 'uppercase',
    color: '#FFF',
    fontWeight: '500',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '1rem',
    width: '100%',
    borderRadius: '2.4rem',
    height: '5.6rem',
    border: 'none',
    transition: '$default',
    '&:hover': {
      background: '$yellow'
    }
  },
  '.spinner': {
    animation: `${SpinnerAnimation} .7s linear infinite`
  },
  variants: {
    variant: {
      primary: {
        button: {
          backgroundColor: '#000000'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
