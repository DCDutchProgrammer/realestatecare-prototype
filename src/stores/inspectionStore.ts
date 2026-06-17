import { defineStore } from 'pinia'
import { getInspections } from '@/services/inspectionService'

export const useInspectionStore = defineStore('inspectionStore', {
  state: () => ({
    inspections: [] as any[],
    loading: false,
    error: '' as string
  }),

  getters: {
    openInspections: (state) => {
      return state.inspections.filter((item) => item.status === 'open')
    },

    completedInspections: (state) => {
      return state.inspections.filter((item) => item.status === 'completed')
    }
  },

  actions: {
    async loadInspections() {
      this.loading = true
      this.error = ''

      try {
        const savedInspections = localStorage.getItem('rec_inspections')

        if (savedInspections) {
          this.inspections = JSON.parse(savedInspections)
        } else {
          this.inspections = await getInspections()
          this.saveInspections()
        }
      } catch (error) {
        console.error('Fout bij laden van inspecties:', error)

        this.error = 'Inspecties konden niet worden geladen.'

        try {
          this.inspections = await getInspections()
          this.saveInspections()
        } catch (fallbackError) {
          console.error('Fallback laden van inspecties mislukt:', fallbackError)
          this.inspections = []
          this.error = 'Er is een probleem met het laden van de inspectiedata.'
        }
      } finally {
        this.loading = false
      }
    },

    saveInspections() {
      try {
        localStorage.setItem('rec_inspections', JSON.stringify(this.inspections))
      } catch (error) {
        console.error('Fout bij opslaan van inspecties:', error)
        this.error = 'Inspecties konden niet lokaal worden opgeslagen.'
      }
    },

    completeInspection(id: number) {
      try {
        const inspection = this.inspections.find((item) => item.id === id)

        if (!inspection) {
          this.error = 'Inspectie kon niet worden gevonden.'
          return
        }

        inspection.status = 'completed'
        this.saveInspections()
      } catch (error) {
        console.error('Fout bij afronden van inspectie:', error)
        this.error = 'Inspectie kon niet worden afgerond.'
      }
    },

    reopenInspection(id: number) {
      try {
        const inspection = this.inspections.find((item) => item.id === id)

        if (!inspection) {
          this.error = 'Inspectie kon niet worden gevonden.'
          return
        }

        inspection.status = 'open'
        this.saveInspections()
      } catch (error) {
        console.error('Fout bij terugzetten van inspectie:', error)
        this.error = 'Inspectie kon niet worden teruggezet.'
      }
    },

    resetInspections() {
      try {
        localStorage.removeItem('rec_inspections')
        this.inspections = []
        this.error = ''
      } catch (error) {
        console.error('Fout bij resetten van inspecties:', error)
        this.error = 'Inspecties konden niet worden gereset.'
      }
    }
  }
})