import { defineStore } from 'pinia'
import { getInspections } from '@/services/inspectionService'

export const useInspectionStore = defineStore('inspectionStore', {
  state: () => ({
    inspections: [] as any[],
    loading: false
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

        this.inspections = await getInspections()
        this.saveInspections()
      } finally {
        this.loading = false
      }
    },

    saveInspections() {
      localStorage.setItem('rec_inspections', JSON.stringify(this.inspections))
    },

    completeInspection(id: number) {
      const inspection = this.inspections.find((item) => item.id === id)

      if (!inspection) {
        return
      }

      inspection.status = 'completed'
      this.saveInspections()
    },

    reopenInspection(id: number) {
      const inspection = this.inspections.find((item) => item.id === id)

      if (!inspection) {
        return
      }

      inspection.status = 'open'
      this.saveInspections()
    },

    resetInspections() {
      localStorage.removeItem('rec_inspections')
      this.inspections = []
    }
  }
})