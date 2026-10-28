<template>
  <section id="education" class="py-20 md:py-28 bg-[#0B0F19]/50 border-t border-slate-900 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.education.sectionTitle }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ t.education.sectionTitle }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          {{ t.education.sectionSubtitle }}
        </p>
      </div>

      <!-- Education Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="edu in educationData"
          :key="edu.id"
          class="bg-dark-850/80 hover:bg-dark-800/90 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-card"
        >
          <div class="space-y-4">
            <!-- Period Badge -->
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 text-brand-400 border border-slate-800">
              <Calendar class="w-3.5 h-3.5" />
              <span>{{ edu.period }}</span>
            </div>

            <!-- Program & Institution -->
            <div class="space-y-1.5">
              <h3 class="text-lg font-bold text-white leading-snug">
                {{ isRtl ? edu.program.ar : edu.program.en }}
              </h3>
              <p class="text-sm font-semibold text-brand-300">
                {{ isRtl ? edu.institution.ar : edu.institution.en }}
              </p>
              <p class="text-xs text-slate-400">
                {{ isRtl ? edu.location.ar : edu.location.en }}
              </p>
            </div>

            <!-- Description -->
            <p class="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
              {{ isRtl ? edu.description.ar : edu.description.en }}
            </p>
          </div>

          <!-- Credential Tag -->
          <div class="pt-4 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-slate-500">
            <GraduationCap class="w-4 h-4 text-purple-400" />
            <span class="truncate">{{ isRtl ? edu.credential.ar : edu.credential.en }}</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { educationData } from '../../data/education';
import { Calendar, GraduationCap } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
</script>
