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
          <ion-button
            fill="clear"
            class="notification-button"
            @click="openNotifications($event)"
          >
            <ion-icon class="notification-icon" :icon="notificationsOutline" />

            <ion-badge
              v-if="totalNotifications > 0"
              color="danger"
              class="notification-badge"
            >
              {{ totalNotifications }}
            </ion-badge>
          </ion-button>
        </ion-buttons>

        <ion-popover
          :is-open="isNotificationOpen"
          :event="popoverEvent"
          @didDismiss="closeNotifications"
        >
          <ion-content class="notification-popover">
            <ion-list>
              <ion-list-header>
                <ion-label>Meldingen</ion-label>
              </ion-list-header>

              <ion-item button @click="goToAssigned">
                <ion-icon :icon="documentTextOutline" slot="start" color="primary" />
                <ion-label>
                  <h2>Toegewezen rapportages</h2>
                  <p>{{ openCount }} open rapportage(s)</p>
                </ion-label>
                <ion-badge color="danger">{{ openCount }}</ion-badge>
              </ion-item>

              <ion-item button @click="goToCompleted">
                <ion-icon :icon="checkmarkDoneOutline" slot="start" color="success" />
                <ion-label>
                  <h2>Uitgevoerde rapportages</h2>
                  <p>{{ completedCount }} afgeronde rapportage(s)</p>
                </ion-label>
                <ion-badge color="success">{{ completedCount }}</ion-badge>
              </ion-item>

              <ion-item v-if="totalNotifications === 0">
                <ion-label>
                  <h2>Geen meldingen</h2>
                  <p>Er zijn momenteel geen rapportages.</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-popover>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
  IonPopover,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel
} from '@ionic/vue'

import {
  notificationsOutline,
  documentTextOutline,
  checkmarkDoneOutline
} from 'ionicons/icons'

import logoIconPath from '@/assets/logo-icon.png'
import { useInspectionStore } from '@/stores/inspectionStore'

defineProps<{
  title: string
  subtitle?: string
}>()

const router = useRouter()
const store = useInspectionStore()

const isNotificationOpen = ref(false)
const popoverEvent = ref<Event | undefined>(undefined)

onMounted(() => {
  if (store.inspections.length === 0) {
    store.loadInspections()
  }
})

const openCount = computed(() => {
  return store.openInspections.length
})

const completedCount = computed(() => {
  return store.completedInspections.length
})

const totalNotifications = computed(() => {
  return openCount.value + completedCount.value
})

const openNotifications = (event: Event) => {
  popoverEvent.value = event
  isNotificationOpen.value = true
}

const closeNotifications = () => {
  isNotificationOpen.value = false
}

const goToAssigned = () => {
  closeNotifications()
  router.push('/tabs/assigned')
}

const goToCompleted = () => {
  closeNotifications()
  router.push('/tabs/completed')
}
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

.notification-button {
  position: relative;
  width: 48px;
  height: 48px;
  --padding-start: 0;
  --padding-end: 0;
  --color: #ffffff;
}

.notification-icon {
  font-size: 28px;
}

.notification-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.72rem;
  min-width: 20px;
  height: 20px;
  border-radius: 999px;
}

.notification-popover {
  --background: var(--rec-card);
}

ion-popover {
  --width: 320px;
}

ion-list-header {
  font-weight: 700;
  color: var(--rec-text);
}

ion-item h2 {
  font-size: 0.95rem;
  font-weight: 700;
}

ion-item p {
  font-size: 0.82rem;
  color: var(--rec-muted);
}
</style>