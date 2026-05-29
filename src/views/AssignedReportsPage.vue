<template>
  <ion-page>
    <AppHeader
      title="Openstaande inspecties"
      subtitle="Toegewezen rapportages op locatie"
    />

    <ion-content>
      <div class="rec-page-padding">
        <ion-list inset>
          <ion-item
            v-for="inspection in openInspections"
            :key="inspection.id"
            button
            detail
            @click="openInspection(inspection.id)"
          >
            <ion-icon
              :icon="documentTextOutline"
              slot="start"
              color="primary"
            />

            <ion-label>
              <h2>{{ inspection.title }}</h2>
              <p>{{ inspection.address }}</p>
              <p>Prioriteit: {{ inspection.priority }}</p>
            </ion-label>

            <ion-badge color="danger">
              Open
            </ion-badge>
          </ion-item>
        </ion-list>

        <ion-card v-if="openInspections.length === 0">
          <ion-card-content>
            Er zijn geen openstaande inspecties gevonden.
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

import { documentTextOutline } from 'ionicons/icons'

import AppHeader from '@/components/AppHeader.vue'
import { useInspectionStore } from '@/stores/inspectionStore'

const router = useRouter()
const store = useInspectionStore()

onMounted(() => {
  store.loadInspections()
})

const openInspections = computed(() => {
  return store.openInspections
})

const openInspection = (id: number) => {
  router.push(`/tabs/inspection/${id}`)
}
</script>