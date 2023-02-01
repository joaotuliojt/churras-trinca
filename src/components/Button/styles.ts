import { styled, keyframes } from '@styles/stitches'

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
    fontWeight: '500',
    fontSize: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '1rem 3rem',
    width: '100%',
    borderRadius: '2.4rem',
    height: '5.6rem',
    border: 'none',
    transition: '$default'
  },
  'button:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },
  '.spinner': {
    animation: `${SpinnerAnimation} .7s linear infinite`
  },
  variants: {
    variant: {
      primary: {
        button: {
          backgroundColor: '#000000',
          color: '#FFF',
          '&:hover': {
            background: '$yellow',
            color: 'black'
          }
        }
      },
      secondary: {
        button: {
          backgroundColor: '$yellow',
          color: 'black',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white'
          }
        }
      },
      outline: {
        button: {
          background: 'transparent',
          border: '1px solid',
          borderColor: '$yellow',
          color: '$yellow',
          '&:hover': {
            background: '$yellow',
            color: 'black'
          }
        }
      }
    },
    withIcon: {
      true: {
        button: {
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
