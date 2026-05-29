<template>
  <ion-page>
    <AppHeader
      title="Instellingen"
      subtitle="Account, voorkeuren en meldingen"
    />

    <ion-content>
      <div class="rec-page-padding">
        <ion-list inset>
          <ion-item>
            <ion-label>
              <h2>Donkere modus</h2>
              <p>Schakel tussen lichte en donkere weergave</p>
            </ion-label>

            <ion-toggle
              v-model="darkMode"
              aria-label="Donkere modus inschakelen"
            />
          </ion-item>

          <ion-item>
            <ion-label>
              <h2>Meldingen tonen</h2>
              <p>Ontvang meldingen over inspecties</p>
            </ion-label>

            <ion-toggle v-model="notifications" />
          </ion-item>

          <ion-item>
            <ion-label>
              <h2>Geluiden</h2>
              <p>Speel geluiden af bij meldingen</p>
            </ion-label>

            <ion-toggle v-model="sounds" />
          </ion-item>
        </ion-list>

        <ion-card class="logout-card">
          <ion-card-content>
            <ion-button expand="block" color="secondary" @click="logout">
              Uitloggen
            </ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonCard,
  IonCardContent,
  IonButton
} from '@ionic/vue'

import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()

const darkMode = ref(false)
const notifications = ref(true)
const sounds = ref(true)

onMounted(() => {
  darkMode.value = localStorage.getItem('rec_dark_mode') === 'true'
  notifications.value = localStorage.getItem('rec_notifications') !== 'false'
  sounds.value = localStorage.getItem('rec_sounds') !== 'false'

  document.body.classList.toggle('dark', darkMode.value)
})

watch(darkMode, (value) => {
  localStorage.setItem('rec_dark_mode', String(value))
  document.body.classList.toggle('dark', value)
})

watch(notifications, (value) => {
  localStorage.setItem('rec_notifications', String(value))
})

watch(sounds, (value) => {
  localStorage.setItem('rec_sounds', String(value))
})

const logout = () => {
  localStorage.removeItem('rec_logged_in')
  localStorage.removeItem('rec_user')
  router.push('/login')
}
</script>

<style scoped>
.logout-card {
  margin-top: 18px;
  border-radius: 18px;
}
</style>