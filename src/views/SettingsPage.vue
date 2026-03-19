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
            <ion-label>Donkere modus</ion-label>
            <ion-toggle v-model="darkMode" />
          </ion-item>

          <ion-item>
            <ion-label>Meldingen tonen</ion-label>
            <ion-toggle v-model="notifications" />
          </ion-item>

          <ion-item>
            <ion-label>Geluiden</ion-label>
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
import { ref, watch } from 'vue'
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

watch(darkMode, (value) => {
  document.body.classList.toggle('dark', value)
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