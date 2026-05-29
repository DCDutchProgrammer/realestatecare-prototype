<template>
  <ion-page>
    <AppHeader
      title="Uitgevoerde inspecties"
      subtitle="Reeds ingevulde rapportages"
    />

    <ion-content>
      <div class="rec-page-padding">
        <ion-list inset>
          <ion-item
            v-for="inspection in completedInspections"
            :key="inspection.id"
            button
            detail
            @click="openInspection(inspection.id)"
          >
            <ion-icon
              :icon="folderOpenOutline"
              slot="start"
              color="primary"
            />

            <ion-label>
              <h2>{{ inspection.title }}</h2>
              <p>{{ inspection.address }}</p>
              <p>Prioriteit: {{ inspection.priority }}</p>
            </ion-label>

            <ion-badge color="success">Afgerond</ion-badge>
          </ion-item>
        </ion-list>

        <ion-card v-if="completedInspections.length === 0">
          <ion-card-content>
            Er zijn nog geen uitgevoerde inspecties gevonden.
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
  IonCard,
  IonCardContent
} from '@ionic/vue'
import { folderOpenOutline } from 'ionicons/icons'

import AppHeader from '@/components/AppHeader.vue'
import { useInspectionStore } from '@/stores/inspectionStore'

const router = useRouter()
const store = useInspectionStore()

onMounted(() => {
  store.loadInspections()
})

const completedInspections = computed(() => {
  return store.completedInspections
})

const openInspection = (id: number) => {
  router.push(`/tabs/inspection/${id}`)
}
</script>