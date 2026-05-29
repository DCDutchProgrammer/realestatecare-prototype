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
      this.inspections = await getInspections()
      this.loading = false
    }
  }
})