<template>
  <section id="education" class="py-16 md:py-24 border-b border-slate-900/60 bg-[#0B0F19]/40">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-10">
        <h2 class="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
          {{ t.education.sectionTitle }}
        </h2>
        <p class="text-sm text-slate-400">
          {{ t.education.sectionSubtitle }}
        </p>
      </div>

      <!-- Education & Programs Cards Grid -->
      <div class="space-y-6">
        <div
          v-for="edu in educationData"
          :key="edu.id"
          class="bg-[#070a12] border border-slate-800/90 rounded-2xl p-6 sm:p-7 transition-all"
        >
          <!-- Top Row: Program Name & Period -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 class="text-base sm:text-lg font-bold text-white leading-snug">
                {{ isRtl ? edu.program.ar : edu.program.en }}
              </h3>
              <p class="text-xs sm:text-sm font-semibold text-brand-400 mt-0.5">
                {{ isRtl ? edu.institution.ar : edu.institution.en }}
              </p>
              <p class="text-xs text-slate-500">
                {{ isRtl ? edu.location.ar : edu.location.en }}
              </p>
            </div>

            <span class="text-xs font-mono text-slate-400 bg-dark-950 px-2.5 py-1 rounded border border-slate-800 self-start sm:self-auto flex-shrink-0">
              {{ edu.period }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            {{ isRtl ? edu.description.ar : edu.description.en }}
          </p>

          <!-- Key Practical Learnings -->
          <div v-if="edu.keyLearnings && edu.keyLearnings.length > 0" class="pt-3 border-t border-slate-800/80">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              {{ t.education.keyLearningsLabel }}
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(learning, lIdx) in edu.keyLearnings"
                :key="lIdx"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
              >
                <span class="text-brand-400 font-bold mt-0.5">•</span>
                <span class="leading-relaxed">{{ isRtl ? learning.ar : learning.en }}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { educationData } from '../../data/education';

const { isRtl, t } = useLanguage();
</script>

