<template>
  <section id="experience" class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.experience.sectionTitle }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ t.experience.sectionTitle }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          {{ t.experience.sectionSubtitle }}
        </p>
      </div>

      <!-- Timeline List -->
      <div class="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-slate-800 before:hidden sm:before:block">
        <div
          v-for="exp in experienceData"
          :key="exp.id"
          class="bg-dark-850/80 border border-slate-800 rounded-3xl p-6 sm:p-8 relative sm:ml-12 shadow-card"
        >
          <!-- Timeline Indicator Node -->
          <div class="hidden sm:flex absolute -left-[57px] top-8 w-6 h-6 rounded-full bg-dark-900 border-2 border-brand-500 items-center justify-center">
            <div class="w-2 h-2 rounded-full bg-brand-400"></div>
          </div>

          <!-- Header: Role, Company & Period -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xl sm:text-2xl font-bold text-white">
                  {{ isRtl ? exp.role.ar : exp.role.en }}
                </h3>
                <span
                  v-if="exp.current"
                  class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider"
                >
                  {{ t.experience.present }}
                </span>
              </div>
              <div class="flex flex-wrap items-center gap-2 text-sm text-brand-400 font-semibold mt-1">
                <span>{{ exp.company }}</span>
                <span class="text-slate-600">•</span>
                <span class="text-slate-400 font-normal">{{ isRtl ? exp.employmentType.ar : exp.employmentType.en }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 text-xs font-mono text-slate-400 bg-dark-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start md:self-auto">
              <Calendar class="w-3.5 h-3.5 text-brand-400" />
              <span>{{ isRtl ? exp.period.ar : exp.period.en }}</span>
            </div>
          </div>

          <!-- Summary -->
          <p class="text-sm text-slate-300 mb-6 leading-relaxed bg-dark-900/60 p-4 rounded-xl border border-slate-800/80">
            {{ isRtl ? exp.summary.ar : exp.summary.en }}
          </p>

          <!-- Responsibilities -->
          <div class="space-y-3 mb-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {{ t.experience.responsibilities }}
            </h4>
            <ul class="space-y-2.5">
              <li
                v-for="(resp, idx) in exp.keyResponsibilities"
                :key="idx"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 class="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span class="leading-relaxed">{{ isRtl ? resp.ar : resp.en }}</span>
              </li>
            </ul>
          </div>

          <!-- Technologies -->
          <div class="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
            <span class="text-xs font-semibold text-slate-500 mr-2">
              {{ t.experience.technologiesUsed }}:
            </span>
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 text-slate-300 border border-slate-800"
            >
              {{ tech }}
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { experienceData } from '../../data/experience';
import { Calendar, CheckCircle2 } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
</script>
