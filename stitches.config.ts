import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme
} = createStitches({
  theme: {
    colors: {
      yellow: '#FFD836',
      white: '#FAFAFA'
    },
    fonts: {
      Raleway: '"Raleway", sans-serif'
    },
    transitions: {
      default: 'ease all .3s'
    }
  }
})

export const resetCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  html: {
    fontSize: '62.5%'
  },
  body: {
    fontSize: '1.6rem',
    width: '100%',
    minHeight: '100vh',
    fontFamily: '$Raleway'
  }
})
