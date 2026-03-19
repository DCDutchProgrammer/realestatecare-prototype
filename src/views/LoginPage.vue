<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="login-wrapper">
        <div class="login-card">
          <img
            class="login-logo"
            :src="logoTextPath"
            alt="RealEstateCare logo"
          />

          <h1>Welkom terug</h1>
          <p>Log in om inspectierapportages te openen en te beheren.</p>

          <ion-item class="input-item" lines="none">
            <ion-input
              v-model="username"
              label="Gebruikersnaam"
              label-placement="stacked"
              placeholder="Voer gebruikersnaam in"
            />
          </ion-item>

          <ion-item class="input-item" lines="none">
            <ion-input
              v-model="password"
              type="password"
              label="Wachtwoord"
              label-placement="stacked"
              placeholder="Voer wachtwoord in"
            />
          </ion-item>

          <ion-button expand="block" size="large" @click="login">
            Inloggen
          </ion-button>

          <div class="demo-box">
            <strong>Demo login</strong>
            <span>Gebruikersnaam: inspecteur</span>
            <span>Wachtwoord: 1234</span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  toastController
} from '@ionic/vue'
import logoTextPath from '@/assets/logo-tekst.png'

const router = useRouter()
const username = ref('')
const password = ref('')

const login = async () => {
  if (username.value === 'inspecteur' && password.value === '1234') {
    localStorage.setItem('rec_logged_in', 'true')
    localStorage.setItem('rec_user', username.value)
    router.push('/tabs/dashboard')
    return
  }

  const toast = await toastController.create({
    message: 'Onjuiste inloggegevens. Gebruik inspecteur / 1234',
    duration: 2500,
    position: 'top',
    color: 'danger'
  })
  await toast.present()
}
</script>

<style scoped>
.login-wrapper {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(180deg, #eef2f3 0%, #dfe9eb 100%);
}

.login-card {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.login-logo {
  width: 100%;
  max-width: 260px;
  display: block;
  margin: 0 auto 20px;
  object-fit: contain;
}

.login-card h1 {
  margin: 0 0 6px;
  color: var(--rec-text);
  font-size: 1.5rem;
}

.login-card p {
  margin: 0 0 20px;
  color: var(--rec-muted);
}

.input-item {
  --background: #f8fafb;
  --border-radius: 14px;
  color: black;
  margin-bottom: 14px;
  border: 1px solid var(--rec-border);
}

.demo-box {
  margin-top: 16px;
  padding: 14px;
  border-radius: 14px;
  background: #f6fbfb;
  border: 1px solid var(--rec-border);
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: black;
  font-size: 0.9rem;
}
</style>