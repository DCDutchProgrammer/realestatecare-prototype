<template>
  <ion-page>
    <AppHeader
      title="Uitgevoerde rapportages"
      subtitle="Reeds ingevulde inspecties"
    />

    <ion-content>
      <div class="rec-page-padding">
        <ion-list inset>
          <ion-item button detail>
            <ion-icon :icon="folderOpenOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Rapportage - Utrecht 22</h2>
              <p>Aangepast op 03-03-2026</p>
            </ion-label>
          </ion-item>

          <ion-item button detail>
            <ion-icon :icon="folderOpenOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Rapportage - Tilburg 8</h2>
              <p>Aangepast op 01-03-2026</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/vue'
import { folderOpenOutline } from 'ionicons/icons'
import AppHeader from '@/components/AppHeader.vue'
</script>