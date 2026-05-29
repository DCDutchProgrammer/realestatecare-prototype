<template>
  <ion-page>
    <AppHeader title="Inspectie detail" subtitle="Rapportage invullen" />

    <ion-content>
      <div class="rec-page-padding" v-if="inspection">
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ inspection.title }}</ion-card-title>
            <ion-card-subtitle>{{ inspection.address }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label>Prioriteit</ion-label>
                <ion-badge color="danger">{{ inspection.priority }}</ion-badge>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Locatie schade</ion-label>
                <ion-input v-model="damageLocation" />
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Soort schade</ion-label>
                <ion-select v-model="damageType">
                  <ion-select-option value="moedwillig">Moedwillig</ion-select-option>
                  <ion-select-option value="slijtage">Slijtage</ion-select-option>
                  <ion-select-option value="geweld">Geweld</ion-select-option>
                  <ion-select-option value="normaal gebruik">Normaal gebruik</ion-select-option>
                  <ion-select-option value="calamiteit">Calamiteit</ion-select-option>
                  <ion-select-option value="anders">Anders</ion-select-option>
                </ion-select>
              </ion-item>

              <ion-item>
                <ion-label>Acute actie vereist</ion-label>
                <ion-toggle v-model="urgentAction" />
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Omschrijving</ion-label>
                <ion-textarea v-model="description" />
              </ion-item>
            </ion-list>

            <ion-button expand="block" color="primary">
              Foto toevoegen
            </ion-button>

            <ion-button expand="block" color="secondary" @click="saveInspection">
              Rapportage lokaal opslaan
            </ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonToggle,
  IonButton,
  IonBadge,
  toastController
} from '@ionic/vue'

import AppHeader from '@/components/AppHeader.vue'
import { useInspectionStore } from '@/stores/inspectionStore'

const route = useRoute()
const store = useInspectionStore()

const damageLocation = ref('')
const damageType = ref('')
const urgentAction = ref(false)
const description = ref('')

const inspection = computed(() => {
  return store.inspections.find((item) => item.id === Number(route.params.id))
})

onMounted(async () => {
  if (store.inspections.length === 0) {
    await store.loadInspections()
  }

  if (inspection.value?.damage) {
    damageLocation.value = inspection.value.damage.location
    damageType.value = inspection.value.damage.type
    urgentAction.value = inspection.value.damage.urgentAction
    description.value = inspection.value.damage.description
  }
})

const saveInspection = async () => {
  localStorage.setItem(
    `inspection_${route.params.id}`,
    JSON.stringify({
      damageLocation: damageLocation.value,
      damageType: damageType.value,
      urgentAction: urgentAction.value,
      description: description.value
    })
  )

  const toast = await toastController.create({
    message: 'Rapportage lokaal opgeslagen.',
    duration: 2000,
    color: 'success',
    position: 'top'
  })

  await toast.present()
}
</script>