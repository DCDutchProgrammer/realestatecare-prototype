<template>
  <ion-page>
    <AppHeader
      title="Kennisbase"
      subtitle="Normbladen, procedures en documentatie"
    />

    <ion-content>
      <div class="rec-page-padding">
        <ion-list inset>
          <ion-item button>
            <ion-icon :icon="documentAttachOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Normblad brandveiligheid</h2>
              <p>PDF-document</p>
            </ion-label>
          </ion-item>

          <ion-item button>
            <ion-icon :icon="documentAttachOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Testprocedure technische installaties</h2>
              <p>PDF-document</p>
            </ion-label>
          </ion-item>

          <ion-item button>
            <ion-icon :icon="documentTextOutline" slot="start" color="primary" />
            <ion-label>
              <h2>Handleiding inspectie op locatie</h2>
              <p>Interne documentatie</p>
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
import { documentAttachOutline, documentTextOutline } from 'ionicons/icons'
import AppHeader from '@/components/AppHeader.vue'
</script>