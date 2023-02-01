import { IParticipant } from '@/pages/Dashboard'

export const getTotalMoneyParticipants = (
  participants: IParticipant[] | undefined
) => {
  if (participants) {
    const total = participants.reduce((prev, curr) => {
      return prev + Number(curr.value)
    }, 0)
    return total
  } else {
    return 0
  }
}
