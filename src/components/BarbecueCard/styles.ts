import { styled } from '@styles/stitches'

export const Container = styled('div', {
  padding: '1.6rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '.6rem',
  cursor: 'pointer',
  height: '20rem',
  transition: '$default',
  '&:hover': {
    transform: 'translateY(-1rem)'
  }
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const Date = styled('div', {
  display: 'flex',
  gap: '.8rem',
  alignItems: 'center',
  p: {
    fontWeight: '700',
    fontSize: '1.6rem'
  }
})

export const Description = styled('p', {
  fontWeight: 700,
  marginTop: '1.6rem'
})

export const Footer = styled('div', {
  display: 'flex',
  gap: '2.6rem'
})

export const TotalParticipants = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.6rem',
  fontWeight: 500,
  fontSize: '1.6rem'
})

export const TotalValue = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.6rem'
})

export const CurrencyText = styled('p', {
  fontWeight: 500
})
