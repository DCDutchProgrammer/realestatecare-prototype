import inspections from '@/data/inspections.json'

export const getInspections = async () => {
  return inspections
}

export const getInspectionById = async (id: number) => {
  return inspections.find((inspection) => inspection.id === id)
}