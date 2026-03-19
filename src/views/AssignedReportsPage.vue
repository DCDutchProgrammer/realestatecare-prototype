<template>
  <ion-page>
    <AppHeader
      title="Toegewezen rapportages"
      subtitle="Openstaande inspecties op locatie"
    />

    <ion-content>
      <div class="rec-page-padding">
        <ion-list inset>
          <ion-item button detail>
            <ion-icon :icon="homeOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Pand - Arnhem 12A</h2>
              <p>Inspectiedoelen: schade, onderhoud</p>
            </ion-label>
            <ion-badge color="danger">Nieuw</ion-badge>
          </ion-item>

          <ion-item button detail>
            <ion-icon :icon="businessOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Complex - Nijmegen West</h2>
              <p>Inspectiedoelen: installaties, modificaties</p>
            </ion-label>
          </ion-item>

          <ion-item button detail>
            <ion-icon :icon="constructOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Woning - Eindhoven 44</h2>
              <p>Inspectiedoelen: achterstallig onderhoud</p>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-card class="info-card">
          <ion-card-header>
            <ion-card-title>Inspectie-onderdelen</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ul>
              <li>Schade opnemen</li>
              <li>Achterstallig onderhoud opnemen</li>
              <li>Technische installaties inspecteren</li>
              <li>Modificaties inventariseren</li>
            </ul>
          </ion-card-content>
        </ion-card>
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
  IonIcon,
  IonBadge,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'
import { homeOutline, businessOutline, constructOutline } from 'ionicons/icons'
import AppHeader from '@/components/AppHeader.vue'
</script>

<style scoped>
.info-card {
  margin-top: 18px;
  border-radius: 18px;
}

ul {
  margin: 0;
  padding-left: 18px;
  color: var(--rec-text);
}
</style>