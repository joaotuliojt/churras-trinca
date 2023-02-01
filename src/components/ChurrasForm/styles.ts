import { styled } from '@styles/stitches'

export const Container = styled('form', {
  display: 'block',
  'input[type="date"]::-webkit-calendar-picker-indicator': {
    background: 'url("/assets/icons/CalendarBlank.svg")',
    display: 'block',
    opacity: 1,
    width: '24px',
    height: '24px'
  },
  'input[type="date"]': {
    maxWidth: '28rem'
  }
})

export const MainInputs = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.4rem'
})

export const DefaultValues = styled('div', {
  marginTop: '3rem',
  h3: {
    fontSize: '3.6rem',
    fontWeight: 600,
    marginBottom: '2.4rem'
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '@media(max-width: 600px)': {
    '& > div': {
      flexDirection: 'column',
      gap: '2rem'
    }
  }
})

export const ParticipantsAction = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '4rem',
  marginBottom: '4rem',
  h3: {
    fontWeight: 600,
    fontSize: '3.6rem '
  },
  '@media(max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem'
  }
})

export const AddParticipant = styled('div', {
  display: 'grid',
  gridTemplateColumns: '24.5rem 15.8rem',
  gap: '3rem',
  rowGap: '2rem',
  marginBottom: '6rem',
  '@media(max-width: 520px)': {
    flexDirection: 'column',
    display: 'flex'
  }
})

export const WithDrink = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.8rem',
  gap: '1rem'
})

export const AddParticipantActions = styled('div', {
  gridColumnStart: '1',
  display: 'flex',
  gap: '2rem',
  '@media(max-width: 390px)': {
    flexDirection: 'column'
  }
})

export const ParticipantsList = styled('div', {
  width: '100%'
})

export const Participant = styled('div', {
  borderBottom: '1px solid #484848',
  paddingBottom: '2rem',
  marginBottom: '2rem'
})

export const LeftSideList = styled('div', {
  display: 'flex',
  alignItems: 'center'
})

export const NameAndChip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  p: {
    fontWeight: 400,
    fontSize: '2rem'
  },
  marginLeft: '3rem',
  '@media(max-width: 420px)': {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})

export const Chip = styled('div', {
  padding: '.5rem 1.6rem',
  minWidth: '8rem',
  fontSize: '1.4rem',
  background: '$yellow',
  borderRadius: '4rem',
  fontWeight: 400,
  color: '#000',
  '@media(max-width: 420px)': {
    fontSize: '1rem'
  },
  variants: {
    withDrink: {
      true: {
        backgroundColor: '#A4B8FF'
      },
      false: {
        backgroundColor: '#EDD571'
      }
    }
  }
})

export const Value = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end'
})

export const TotalValue = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem'
})

export const TotalValueText = styled('p', {
  fontWeight: 600
})

export const ButtonGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '36rem',
  margin: '0 auto',
  gap: '1.6rem',
  marginTop: '10rem'
})
