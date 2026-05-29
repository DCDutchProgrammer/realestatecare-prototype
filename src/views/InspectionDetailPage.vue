<template>
  <ion-page>
    <AppHeader title="Inspectie detail" subtitle="Rapportage invullen" />

    <ion-content>
      <div class="rec-page-padding">
        <ion-button
          fill="clear"
          color="medium"
          class="back-button"
          @click="goBack"
        >
          Terug naar inspecties
        </ion-button>

        <ion-card v-if="loading">
          <ion-card-content>
            Inspectie wordt geladen...
          </ion-card-content>
        </ion-card>

        <ion-card v-else-if="!inspection">
          <ion-card-content>
            Deze inspectie kon niet worden gevonden.
          </ion-card-content>
        </ion-card>

        <ion-card v-else>
          <ion-card-header>
            <ion-card-title>{{ inspection.title }}</ion-card-title>
            <ion-card-subtitle>{{ inspection.address }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label>Prioriteit</ion-label>
                <ion-badge :color="priorityColor">
                  {{ inspection.priority }}
                </ion-badge>
              </ion-item>

              <ion-item>
                <ion-label>Status</ion-label>
                <ion-badge :color="inspection.status === 'open' ? 'warning' : 'success'">
                  {{ inspection.status === 'open' ? 'Openstaand' : 'Afgerond' }}
                </ion-badge>
              </ion-item>

              <ion-item>
                <ion-label>
                  <h2>Inspectiedoelen</h2>
                  <p>{{ inspection.inspectionGoals?.join(', ') }}</p>
                </ion-label>
              </ion-item>

              <ion-item-divider>
                <ion-label>Schade opnemen</ion-label>
              </ion-item-divider>

              <ion-item>
                <ion-label position="stacked">Locatie schade</ion-label>
                <ion-input
                  v-model="damageLocation"
                  placeholder="Bijv. woonkamer, badkamer of gevel"
                />
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Soort schade</ion-label>
                <ion-select
                  v-model="damageType"
                  placeholder="Kies soort schade"
                >
                  <ion-select-option value="moedwillig">Moedwillig</ion-select-option>
                  <ion-select-option value="slijtage">Slijtage</ion-select-option>
                  <ion-select-option value="geweld">Geweld</ion-select-option>
                  <ion-select-option value="normaal gebruik">Normaal gebruik</ion-select-option>
                  <ion-select-option value="calamiteit">Calamiteit</ion-select-option>
                  <ion-select-option value="anders">Anders</ion-select-option>
                </ion-select>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Datum inspectie</ion-label>
                <ion-input
                  v-model="inspectionDate"
                  type="date"
                />
              </ion-item>

              <ion-item>
                <ion-label>
                  <h2>Nieuwe schade</h2>
                  <p>Is deze schade nog niet eerder geregistreerd?</p>
                </ion-label>
                <ion-toggle v-model="newDamage" />
              </ion-item>

              <ion-item>
                <ion-label>
                  <h2>Acute actie vereist</h2>
                  <p>Moet er direct actie worden ondernomen?</p>
                </ion-label>
                <ion-toggle v-model="urgentAction" />
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Omschrijving</ion-label>
                <ion-textarea
                  v-model="description"
                  auto-grow
                  placeholder="Beschrijf de schade of situatie..."
                />
              </ion-item>

              <ion-item-divider>
                <ion-label>Bewijsmateriaal</ion-label>
              </ion-item-divider>

              <ion-item>
                <ion-label>
                  <h2>Foto's</h2>
                  <p>{{ photos.length }} foto('s) toegevoegd</p>
                </ion-label>
              </ion-item>
            </ion-list>

            <ion-button expand="block" color="primary" @click="addPhoto">
              Foto toevoegen
            </ion-button>

            <ion-button expand="block" color="secondary" @click="saveInspection">
              Rapportage lokaal opslaan
            </ion-button>

            <ion-button
              v-if="inspection.status === 'open'"
              expand="block"
              color="success"
              @click="completeInspection"
            >
              Inspectie afronden
            </ion-button>

            <ion-button
              v-else
              expand="block"
              color="warning"
              @click="reopenInspection"
            >
              Terugzetten naar openstaand
            </ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
  IonItemDivider,
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
const router = useRouter()
const store = useInspectionStore()

const loading = ref(true)

const damageLocation = ref('')
const damageType = ref('')
const inspectionDate = ref('')
const newDamage = ref(false)
const urgentAction = ref(false)
const description = ref('')
const photos = ref<string[]>([])

const inspection = computed(() => {
  return store.inspections.find((item) => item.id === Number(route.params.id))
})

const priorityColor = computed(() => {
  if (!inspection.value) return 'medium'

  if (inspection.value.priority === 'Hoog') {
    return 'danger'
  }

  if (inspection.value.priority === 'Normaal') {
    return 'warning'
  }

  return 'medium'
})

onMounted(async () => {
  if (store.inspections.length === 0) {
    await store.loadInspections()
  }

  loadInspectionData()
  loadLocalDraft()

  loading.value = false
})

const loadInspectionData = () => {
  if (!inspection.value?.damage) {
    return
  }

  damageLocation.value = inspection.value.damage.location || ''
  damageType.value = inspection.value.damage.type || ''
  inspectionDate.value = inspection.value.damage.date || ''
  newDamage.value = inspection.value.damage.newDamage || false
  urgentAction.value = inspection.value.damage.urgentAction || false
  description.value = inspection.value.damage.description || ''
}

const loadLocalDraft = () => {
  const savedDraft = localStorage.getItem(`inspection_${route.params.id}`)

  if (!savedDraft) {
    return
  }

  const parsedDraft = JSON.parse(savedDraft)

  damageLocation.value = parsedDraft.damageLocation || damageLocation.value
  damageType.value = parsedDraft.damageType || damageType.value
  inspectionDate.value = parsedDraft.inspectionDate || inspectionDate.value
  newDamage.value = parsedDraft.newDamage ?? newDamage.value
  urgentAction.value = parsedDraft.urgentAction ?? urgentAction.value
  description.value = parsedDraft.description || description.value
  photos.value = parsedDraft.photos || []
}

const addPhoto = async () => {
  const fakePhotoName = `foto-${photos.value.length + 1}.jpg`
  photos.value.push(fakePhotoName)

  const toast = await toastController.create({
    message: `${fakePhotoName} toegevoegd als demo-foto.`,
    duration: 2000,
    color: 'primary',
    position: 'top'
  })

  await toast.present()
}

const saveInspection = async () => {
  localStorage.setItem(
    `inspection_${route.params.id}`,
    JSON.stringify({
      damageLocation: damageLocation.value,
      damageType: damageType.value,
      inspectionDate: inspectionDate.value,
      newDamage: newDamage.value,
      urgentAction: urgentAction.value,
      description: description.value,
      photos: photos.value
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

const completeInspection = async () => {
  await saveInspection()

  store.completeInspection(Number(route.params.id))

  const toast = await toastController.create({
    message: 'Inspectie afgerond en verplaatst naar uitgevoerde inspecties.',
    duration: 2500,
    color: 'success',
    position: 'top'
  })

  await toast.present()

  router.push('/tabs/completed')
}

const reopenInspection = async () => {
  store.reopenInspection(Number(route.params.id))

  const toast = await toastController.create({
    message: 'Inspectie teruggezet naar openstaande inspecties.',
    duration: 2500,
    color: 'warning',
    position: 'top'
  })

  await toast.present()

  router.push('/tabs/assigned')
}

const goBack = () => {
  if (inspection.value?.status === 'completed') {
    router.push('/tabs/completed')
  } else {
    router.push('/tabs/assigned')
  }
}
</script>

<style scoped>
.back-button {
  margin-bottom: 10px;
  padding-left: 0;
}

ion-card {
  border-radius: 18px;  
}

ion-item-divider {
  margin-top: 12px;
  --background: var(--rec-bg);
  --color: var(--rec-text);
  font-weight: 700;
}
</style>