import { Users } from 'phosphor-react'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Input } from '../Input'
import * as yup from 'yup'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IBarbecue, IParticipant } from '@/pages/Dashboard'
import { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getTotalMoneyParticipants } from '@/utils/NumberUtils'
import { v4 as uuid } from 'uuid'
import { AddBarbecue, EditBarbecue } from '@/services/barbecue'

interface FormData {
  description: string
  comments: string
  date: Date | string
}

const schema = yup.object({
  description: yup.string().required('Campo obrigatório'),
  comments: yup.string().required('Campo obrigatório'),
  date: yup.date().typeError('Campo inválido').required('Campo obrigatório')
})

interface ChurrasFormProps {
  barbecue?: IBarbecue
  onCancel: () => void
  refetch: () => void
}

export const ChurrasForm = ({
  barbecue,
  onCancel,
  refetch
}: ChurrasFormProps) => {
  const isEditMode = !!barbecue
  const [participants, setParticipants] = useState<IParticipant[]>([])
  const [participantsSelected, setParticipantsSelected] = useState<string[]>([])
  const [isAddMode, setIsAddMode] = useState(false)
  const [newParticipantName, setNewParticipantName] = useState('')
  const [newParticipantValue, setNewParticipantValue] = useState(0)
  const [newParticipantDrink, setNewParticipantDrink] = useState<boolean>(false)
  useEffect(() => {
    if (barbecue) {
      setValue('comments', barbecue.comments)
      setValue('date', barbecue.date)
      setValue('description', barbecue.description)
      setParticipants(barbecue.participants)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { register, handleSubmit, formState, setValue } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const { errors, isSubmitting } = formState

  const handleSelectParticipants = (
    newParticipant: boolean,
    participantId: string
  ) => {
    if (newParticipant) {
      setParticipantsSelected([...participantsSelected, participantId])
    } else {
      const participantsFiltered = participantsSelected.filter(
        (participant) => participant != participantId
      )
      setParticipantsSelected(participantsFiltered)
    }
  }

  const deleteParticipants = () => {
    const filteredParticipants = participants.filter((participant) => {
      const isToDelete = participantsSelected.some(
        (id) => id === participant.id
      )
      if (isToDelete) {
        return false
      }
      return true
    })
    setParticipants(filteredParticipants)
    setParticipantsSelected([])
  }

  const toggleAddMode = () => {
    setIsAddMode(!isAddMode)
  }

  const addNewParticipant = () => {
    const data = {
      name: newParticipantName,
      value: newParticipantValue,
      withDrink: newParticipantDrink,
      id: uuid()
    }

    setParticipants([data, ...participants])
  }

  const cancelAddParticipant = () => {
    setNewParticipantValue(0)
    setNewParticipantName('')
    setNewParticipantDrink(false)
    setIsAddMode(false)
  }

  const onSubmit = handleSubmit(async ({ comments, date, description }) => {
    if (!isEditMode) {
      const data = {
        comments,
        date: new Date(date).toISOString().split('T')[0],
        description,
        participants,
        id: uuid()
      }
      await AddBarbecue(data)
    } else {
      const data = {
        comments,
        date: new Date(date).toISOString().split('T')[0],
        description,
        participants
      }
      await EditBarbecue(data, barbecue.id)
    }
    await refetch()
    onCancel()
  })

  return (
    <S.Container onSubmit={onSubmit}>
      <S.MainInputs>
        <Input
          theme="white"
          id="date"
          type="date"
          label="Data do churras:"
          defaultValue={new Date().toISOString().split('T')[0]}
          min={new Date().toISOString().split('T')[0]}
          error={errors.date?.message}
          {...register('date')}
        />
        <Input
          theme="white"
          id="description"
          type="text"
          label="Descrição:"
          placeholder="Descrição"
          error={errors.description?.message}
          {...register('description')}
        />
        <Input
          theme="white"
          id="comments"
          type="text"
          label="Observações:"
          placeholder="Observações"
          error={errors.comments?.message}
          {...register('comments')}
        />
      </S.MainInputs>

      <S.ParticipantsAction>
        <h3>Participantes</h3>
        <Button
          type="button"
          variant="secondary"
          leftIcon={<Users size={24} />}
          onClick={toggleAddMode}
          disabled={isAddMode}
        >
          Adicionar
        </Button>
      </S.ParticipantsAction>
      {isAddMode && (
        <S.AddParticipant>
          <Input
            label="Nome:"
            theme="white"
            id="newParticipant"
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              const target = e.target as HTMLInputElement
              setNewParticipantName(target.value)
            }}
          />
          <Input
            label="Valor:"
            theme="white"
            isCurrency
            currencyProps={{
              fixedDecimalScale: true,
              decimalSeparator: ',',
              thousandSeparator: '.',
              decimalScale: 2,
              prefix: 'R$ ',
              onValueChange: (e) => {
                setNewParticipantValue(e.floatValue)
              }
            }}
            id="contribution"
            placeholder="Valor"
          />
          <S.WithDrink>
            <Checkbox
              id="withDrink"
              checked={newParticipantDrink}
              onCheckedChange={(e) => setNewParticipantDrink(Boolean(e))}
            />
            <label htmlFor="withDrink">Bebida inclusa no valor</label>
          </S.WithDrink>
          <S.AddParticipantActions>
            <Button
              variant="secondary"
              type="button"
              onClick={addNewParticipant}
              disabled={!newParticipantValue || !newParticipantName}
            >
              Adicionar
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={cancelAddParticipant}
            >
              Cancelar
            </Button>
          </S.AddParticipantActions>
        </S.AddParticipant>
      )}

      <S.ParticipantsList>
        {participants.map((participant) => (
          <S.Participant key={participant.id}>
            <S.LeftSideList>
              <Checkbox
                onCheckedChange={(e) => {
                  handleSelectParticipants(Boolean(e), participant.id)
                }}
              />
              <S.NameAndChip>
                <p>{participant.name}</p>
                <S.Chip withDrink={participant.withDrink}>
                  {participant.withDrink ? 'Com bebida' : 'Sem bebida'}
                </S.Chip>
              </S.NameAndChip>
              <S.Value>
                <CurrencyFormat
                  fixedDecimalScale
                  decimalSeparator=","
                  thousandSeparator="."
                  value={participant.value}
                  decimalScale={2}
                  prefix={'R$ '}
                  displayType={'text'}
                />
              </S.Value>
            </S.LeftSideList>
          </S.Participant>
        ))}
        <S.TotalValue>
          <Button
            type="button"
            variant="secondary"
            disabled={participantsSelected.length <= 0}
            onClick={deleteParticipants}
          >
            Apagar
          </Button>
          <CurrencyFormat
            fixedDecimalScale
            decimalSeparator=","
            thousandSeparator="."
            value={getTotalMoneyParticipants(participants)}
            decimalScale={2}
            prefix={'R$ '}
            displayType={'text'}
            renderText={(value) => (
              <S.TotalValueText>Total: {value}</S.TotalValueText>
            )}
          />
        </S.TotalValue>
      </S.ParticipantsList>
      <S.ButtonGroup>
        <Button type="submit" loading={isSubmitting}>
          Salvar Churras
        </Button>
        <Button onClick={onCancel} type="button" variant="outline">
          Cancelar
        </Button>
      </S.ButtonGroup>
    </S.Container>
  )
}
