<template>
  <ion-card class="status-card">
    <ion-card-content>
      <div class="status-grid">
        <div class="status-item">
          <strong>{{ openCount }}</strong>
          <span>Open taken</span>
        </div>

        <div class="status-item">
          <strong>{{ completedCount }}</strong>
          <span>Vandaag afgerond</span>
        </div>

        <div class="status-item">
          <strong>{{ offlineCount }}</strong>
          <span>Offline opgeslagen</span>
        </div>

        <div class="status-item">
          <strong>{{ syncStatus }}</strong>
          <span>Synchronisatie</span>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue'

defineProps<{
  openCount: number
  completedCount: number
  offlineCount: number
  syncStatus: string
}>()
</script>

<style scoped>
.status-card {
  margin: 0;
  border-radius: 18px;
  background: var(--rec-gradient);
  color: #ffffff;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.status-item {
  display: flex;
  flex-direction: column;
}

.status-item strong {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
}

.status-item span {
  font-size: 0.82rem;
  opacity: 0.9;
  color: #ffffff;
}
</style>