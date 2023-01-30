import { styled } from '@styles/stitches'

export const Container = styled('main', {
  padding: '0 4.8rem',
  marginTop: '6rem'
})

export const PageDescription = styled('div', {
  h1: {
    fontWeight: 700,
    fontSize: '4rem',
    marginBottom: '.8rem'
  },
  p: {
    fontWeight: 500,
    fontSize: '1.6rem',
    maxWidth: '53.2rem'
  }
})

export const GridContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  marginTop: '3rem',
  gap: '1.6rem',
  rowGap: '3rem',
  '@media(max-width: 1440px)': {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  '@media(max-width: 1080px)': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  '@media(max-width: 820px)': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  '@media(max-width: 580px)': {
    gridTemplateColumns: '1fr'
  }
})

export const AddChurrasCard = styled('div', {
  display: 'grid',
  placeItems: 'center',
  backgroundColor: '$yellow',
  height: '20rem',
  borderRadius: '.6rem',
  cursor: 'pointer',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  },
  p: {
    fontSize: '1.8rem',
    fontWeight: 500
  }
})
