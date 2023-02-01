import { BarbecueCard } from '@/components/BarbecueCard'
import { ChurrasForm } from '@/components/ChurrasForm'
import { Drawer } from '@/components/Drawer'
import Header from '@/components/Header'
import { api } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import * as S from './styles'

export interface IParticipant {
  id: string
  name: string
  value: number
  withDrink: boolean
}

export interface IBarbecue {
  id: string
  date: Date | string
  description: string
  comments: string
  participants: IParticipant[]
}

export function Dashboard() {
  const { data: barbecues, refetch } = useQuery<IBarbecue[]>({
    queryKey: ['barbecues'],
    queryFn: async () => {
      const { data } = await api.get<IBarbecue[]>(
        '/barbecues?_sort=date&_order=desc'
      )
      return data
    }
  })

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [selectedBarbecue, setSelectedBarbecue] = useState<IBarbecue>()

  const setDrawerTitle = () => {
    if (selectedBarbecue) {
      return 'Editar churras'
    } else {
      return 'Novo churras'
    }
  }

  const handleSelectBarbecue = (barbecue: IBarbecue) => {
    setSelectedBarbecue(barbecue)
    setDrawerIsOpen(true)
  }

  const handleCloseDrawer = () => {
    setDrawerIsOpen(false)
    setSelectedBarbecue(undefined)
  }

  const handleMakeRefetch = async () => {
    await refetch()
  }

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
          <S.AddChurrasCard
            onClick={() => {
              setDrawerIsOpen(true)
              setSelectedBarbecue(undefined)
            }}
          >
            <div>
              <img src="/assets/icons/bbq_icon.svg" alt="" />
              <p>Adicionar Churras</p>
            </div>
          </S.AddChurrasCard>
          {barbecues?.map((barbecue) => (
            <BarbecueCard
              onSelect={handleSelectBarbecue}
              key={barbecue.id}
              {...barbecue}
            />
          ))}
        </S.GridContainer>
      </S.Container>
      <Drawer
        isOpen={drawerIsOpen}
        onClose={handleCloseDrawer}
        title={setDrawerTitle()}
      >
        <ChurrasForm
          refetch={handleMakeRefetch}
          barbecue={selectedBarbecue}
          onCancel={handleCloseDrawer}
        />
      </Drawer>
    </>
  )
}
