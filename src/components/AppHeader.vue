<template>
  <ion-header class="ion-no-border">
    <ion-toolbar color="primary">
      <div class="header-wrap">
        <div class="brand-left">
          <img class="brand-logo" :src="logoIconPath" alt="RealEstateCare logo" />

          <div class="brand-text">
            <div class="brand-title">{{ title }}</div>
            <div v-if="subtitle" class="brand-subtitle">{{ subtitle }}</div>
          </div>
        </div>

        <ion-buttons slot="end">
          <ion-button fill="clear">
            <ion-icon :icon="notificationsOutline" />
          </ion-button>
        </ion-buttons>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/vue'
import { notificationsOutline } from 'ionicons/icons'
import logoIconPath from '@/assets/logo-icon.png'

defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<style scoped>
.header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
}

.brand-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  padding: 4px;
}

.brand-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
}

ion-button {
  --color: #ffffff;
}
</style>