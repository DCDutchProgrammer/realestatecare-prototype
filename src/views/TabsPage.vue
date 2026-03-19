<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/tabs/dashboard">
          <ion-icon :icon="gridOutline" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="assigned" href="/tabs/assigned">
          <ion-icon :icon="documentTextOutline" />
          <ion-label>Toegewezen</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="knowledge" href="/tabs/knowledge">
          <ion-icon :icon="bookOutline" />
          <ion-label>Kennisbase</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon :icon="settingsOutline" />
          <ion-label>Instellingen</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/vue'

import {
  gridOutline,
  documentTextOutline,
  bookOutline,
  settingsOutline
} from 'ionicons/icons'
</script>