import { styled } from '@styles/stitches'
import { Root, Indicator } from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(Root, {
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: '2px solid',
  borderColor: '#FFF',
  position: 'relative'
})

export const CheckboxIndicator = styled(Indicator, {
  background: '$yellow',
  position: 'absolute',
  inset: 0,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem'
})
