<template>
  <ion-card button class="dashboard-card" @click="$emit('select')">
    <ion-card-content class="card-content">
      <div class="icon-wrap">
        <ion-icon :icon="icon" />
        <ion-badge v-if="badge" color="danger" class="badge">{{ badge }}</ion-badge>
      </div>

      <div class="text-wrap">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonBadge
} from '@ionic/vue'

defineProps<{
  title: string
  description: string
  icon: string
  badge?: number | string
}>()

defineEmits(['select'])
</script>

<style scoped>
.dashboard-card {
  margin: 0;
  border-radius: 18px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
}

.card-content {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 104px;
}

.icon-wrap {
  position: relative;
  min-width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(31, 183, 176, 0.12);
  color: var(--ion-color-primary);
  font-size: 1.5rem;
}

.badge {
  position: absolute;
  top: -6px;
  right: -6px;
}

.text-wrap h3 {
  margin: 0 0 4px;
  font-size: 1rem;
  color: var(--rec-text);
}

.text-wrap p {
  margin: 0;
  color: var(--rec-muted);
  font-size: 0.9rem;
}
</style>