<template>
  <section id="experience" class="py-16 md:py-20 border-b border-slate-900/60">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-8">
        <h2 class="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
          {{ t.experience.sectionTitle }}
        </h2>
        <p class="text-sm text-slate-400">
          {{ t.experience.sectionSubtitle }}
        </p>
      </div>

      <!-- Compact Timeline -->
      <div class="space-y-6">
        <div
          v-for="exp in experienceData"
          :key="exp.id"
          class="bg-[#15223c]/80 border border-slate-700/70 rounded-2xl p-6 transition-all shadow-card"
        >
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base sm:text-lg font-bold text-white">
                  {{ isRtl ? exp.role.ar : exp.role.en }}
                </h3>
                <span
                  v-if="exp.current"
                  class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase"
                >
                  {{ t.experience.present }}
                </span>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-brand-400 mt-0.5">
                {{ exp.company }} <span class="text-slate-400 font-normal">({{ isRtl ? exp.employmentType.ar : exp.employmentType.en }})</span>
              </p>
            </div>

            <span class="text-xs font-mono text-slate-300 bg-[#0d1527] px-2.5 py-1 rounded border border-slate-700/80 self-start sm:self-auto">
              {{ isRtl ? exp.period.ar : exp.period.en }}
            </span>
          </div>

          <!-- Concise Key Achievements (2-3 items) -->
          <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <li
              v-for="(resp, idx) in exp.keyResponsibilities.slice(0, 3)"
              :key="idx"
              class="flex items-start gap-2"
            >
              <span class="text-brand-400 font-bold mt-0.5">•</span>
              <span class="leading-relaxed">{{ isRtl ? resp.ar : resp.en }}</span>
            </li>
          </ul>

          <!-- Tech stack tags -->
          <div class="mt-4 pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5">
            <span
              v-for="tech in exp.technologies.slice(0, 6)"
              :key="tech"
              class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0d1527] text-slate-300 border border-slate-700/80"
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

const { isRtl, t } = useLanguage();
</script>
