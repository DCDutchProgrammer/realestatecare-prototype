import inspections from '@/data/inspections.json'

export const getInspections = async () => {
  try {
    if (!Array.isArray(inspections)) {
      throw new Error('Inspectiedata heeft geen geldige array-structuur.')
    }

    return inspections
  } catch (error) {
    console.error('Fout bij ophalen van inspecties:', error)
    return []
  }
}

export const getInspectionById = async (id: number) => {
  try {
    if (!Array.isArray(inspections)) {
      throw new Error('Inspectiedata heeft geen geldige array-structuur.')
    }

    const inspection = inspections.find((item) => item.id === id)

    if (!inspection) {
      throw new Error(`Inspectie met id ${id} niet gevonden.`)
    }

    return inspection
  } catch (error) {
    console.error('Fout bij ophalen van inspectie:', error)
    return null
  }
}