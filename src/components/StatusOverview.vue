<template>
  <ion-card class="status-card">
    <ion-card-content>
      <div class="status-grid">
        <div class="status-item">
          <strong>3</strong>
          <span>Open taken</span>
        </div>
        <div class="status-item">
          <strong>2</strong>
          <span>Vandaag afgerond</span>
        </div>
        <div class="status-item">
          <strong>1</strong>
          <span>Offline opgeslagen</span>
        </div>
        <div class="status-item">
          <strong>Actief</strong>
          <span>Synchronisatie</span>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue'
</script>

<style scoped>
.status-card {
  margin: 0;
  border-radius: 18px;
  background: var(--rec-gradient);
  color: #fff;
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
}

.status-item span {
  font-size: 0.82rem;
  opacity: 0.9;
}
</style>