<template>
  <ion-page>
    <AppHeader
      title="Dashboard"
      subtitle="Overzicht van inspecties en rapportages"
    />

    <ion-content>
      <div class="rec-page-padding dashboard-wrap">
        <section class="welcome-block">
          <div class="welcome-top">
            <div>
              <h2>Goedemorgen, {{ username }}</h2>
              <p class="rec-subtitle">
                Je hebt vandaag 3 open rapportages en 1 item dat offline is opgeslagen.
              </p>
            </div>

            <img
              class="dashboard-brand-logo"
              :src="logoBluePath"
              alt="RealEstateCare beeldmerk"
            />
          </div>
        </section>

        <StatusOverview />

        <section class="cards-section">
          <h3 class="rec-section-title">Hoofdfuncties</h3>

          <div class="cards-grid">
            <DashboardCard
              title="Toegewezen rapportages"
              description="Open nieuwe inspecties en werk rapportages stap voor stap af."
              :icon="documentTextOutline"
              :badge="3"
              @select="goTo('/tabs/assigned')"
            />

            <DashboardCard
              title="Uitgevoerde rapportages"
              description="Bekijk eerder ingevulde rapportages en pas gegevens aan."
              :icon="checkmarkDoneOutline"
              @select="goTo('/tabs/completed')"
            />

            <DashboardCard
              title="Kennisbase"
              description="Normbladen, testprocedures en documentatie voor inspecties."
              :icon="bookOutline"
              @select="goTo('/tabs/knowledge')"
            />

            <DashboardCard
              title="Instellingen"
              description="Beheer account, meldingen, interface-voorkeuren en profiel."
              :icon="settingsOutline"
              @select="goTo('/tabs/settings')"
            />
          </div>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { IonPage, IonContent } from '@ionic/vue'
import {
  documentTextOutline,
  checkmarkDoneOutline,
  bookOutline,
  settingsOutline
} from 'ionicons/icons'

import AppHeader from '@/components/AppHeader.vue'
import DashboardCard from '@/components/DashboardCard.vue'
import StatusOverview from '@/components/StatusOverview.vue'
import logoBluePath from '@/assets/logo-blauw.png'

const router = useRouter()

const username = computed(() => {
  return localStorage.getItem('rec_user') || 'Inspecteur'
})

const goTo = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.dashboard-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.welcome-block h2 {
  margin: 0 0 4px;
  font-size: 1.35rem;
  color: var(--rec-text);
}

.welcome-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.dashboard-brand-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  flex-shrink: 0;
}

.cards-grid {
  display: grid;
  gap: 14px;
}
</style>