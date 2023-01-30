import { IBarbecue } from '@/pages/Dashboard'
import * as S from './styles'
import { CalendarBlank, Users, CurrencyCircleDollar } from 'phosphor-react'
import Moment from 'react-moment'
import CurrencyFormat from 'react-currency-format'

export const BarbecueCard = ({
  date,
  description,
  id,
  total,
  totalParticipants
}: IBarbecue) => (
  <S.Container>
    <S.Header>
      <S.Date>
        <CalendarBlank strokeWidth={1} width={24} height={24} />
        <p>
          <Moment format="DD/MM" date={date} />
        </p>
      </S.Date>
      <S.Description>{description}</S.Description>
    </S.Header>
    <S.Footer>
      <S.TotalParticipants>
        <Users width={24} height={24} />
        {totalParticipants}
      </S.TotalParticipants>
      <S.TotalValue>
        <CurrencyCircleDollar width={24} height={24} />
        <CurrencyFormat
          fixedDecimalScale
          decimalSeparator=","
          thousandSeparator="."
          value={total}
          decimalScale={2}
          prefix={'R$ '}
          displayType={'text'}
          renderText={(value) => <S.CurrencyText>{value}</S.CurrencyText>}
        />
      </S.TotalValue>
    </S.Footer>
  </S.Container>
)
