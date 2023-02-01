import { IBarbecue } from '@/pages/Dashboard'
import { api } from './api'

type BarbecueData = IBarbecue

export const EditBarbecue = async (data: Partial<BarbecueData>, id: string) => {
  const response = await api.put(`/barbecues/${id}`, data)
  return response.data
}

export const AddBarbecue = async (data: BarbecueData) => {
  const response = await api.post('/barbecues', data)
  return response.data
}
