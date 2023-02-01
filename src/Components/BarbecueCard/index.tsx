import { IBarbecue } from '@/pages/Dashboard'
import * as S from './styles'
import { CalendarBlank, Users, CurrencyCircleDollar } from 'phosphor-react'
import Moment from 'react-moment'
import CurrencyFormat from 'react-currency-format'
import { getTotalMoneyParticipants } from '@/utils/NumberUtils'

interface BarbecueCardProps extends IBarbecue {
  onSelect: (barbecue: IBarbecue) => void
}

export const BarbecueCard = (props: BarbecueCardProps) => {
  return (
    <S.Container
      onClick={() => {
        props.onSelect(props)
      }}
    >
      <S.Header>
        <S.Date>
          <CalendarBlank strokeWidth={1} width={24} height={24} />
          <p>
            <Moment format="DD/MM" date={props.date} />
          </p>
        </S.Date>
        <S.Description>{props.description}</S.Description>
      </S.Header>
      <S.Footer>
        <S.TotalParticipants>
          <Users width={24} height={24} />
          {props.participants.length}
        </S.TotalParticipants>
        <S.TotalValue>
          <CurrencyCircleDollar width={24} height={24} />
          <CurrencyFormat
            fixedDecimalScale
            decimalSeparator=","
            thousandSeparator="."
            value={getTotalMoneyParticipants(props.participants)}
            decimalScale={2}
            prefix={'R$ '}
            displayType={'text'}
            renderText={(value) => <S.CurrencyText>{value}</S.CurrencyText>}
          />
        </S.TotalValue>
      </S.Footer>
    </S.Container>
  )
}
