import { BarbecueCard } from '@/components/BarbecueCard'
import Header from '@/components/Header'
import { api } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import * as S from './styles'

interface IParticipant {
  name: string
  value: number
  withDrink: boolean
}

export interface IBarbecue {
  id: string
  date: Date
  description: string
  comments: string
  total: number
  values: {
    withDrinks: number
    withoutDrinks: number
  }
  participants: IParticipant[]
  totalParticipants: number
}

export function Dashboard() {
  const { data: barbecues } = useQuery<IBarbecue[]>({
    queryKey: ['barbecues'],
    queryFn: async () => {
      const { data } = await api.get<IBarbecue[]>(
        '/barbecues?_sort=date&_order=desc'
      )
      return data
    }
  })

  return (
    <>
      <Header />
      <S.Container>
        <S.PageDescription>
          <h1>Todos os churras marcados</h1>
          <p>
            Clique no primeiro card para adicionar um novo churras ou clique nos
            demais para visualizar o evento
          </p>
        </S.PageDescription>
        <S.GridContainer>
          <S.AddChurrasCard>
            <div>
              <img src="/assets/bbq_icon.svg" alt="" />
              <p>Adicionar Churras</p>
            </div>
          </S.AddChurrasCard>
          {barbecues?.map((barbecue) => (
            <BarbecueCard key={barbecue.id} {...barbecue} />
          ))}
        </S.GridContainer>
      </S.Container>
    </>
  )
}
