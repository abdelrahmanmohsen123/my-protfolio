<template>
  <section id="skills" class="py-16 md:py-20 border-b border-slate-900/60">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-8">
        <h2 class="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
          {{ t.skills.sectionTitle }}
        </h2>
        <p class="text-sm text-slate-400">
          {{ t.skills.sectionSubtitle }}
        </p>
      </div>

      <!-- Categories & Badges -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="cat in skillsCategories"
          :key="cat.id"
          class="bg-[#0B0F19]/60 border border-slate-800/80 rounded-2xl p-5"
        >
          <!-- Category Title -->
          <div class="flex items-center justify-between mb-3.5">
            <h3 class="text-sm font-bold text-white">
              {{ isRtl ? cat.title.ar : cat.title.en }}
            </h3>
            <span
              v-if="cat.id === 'currently-learning'"
              class="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20"
            >
              {{ isRtl ? 'دراسة مستمرة' : 'Learning' }}
            </span>
          </div>

          <!-- Clean Tech Badges -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, idx) in cat.items"
              :key="idx"
              :class="[
                'px-2.5 py-1 rounded-md text-xs font-medium border transition-colors',
                cat.id === 'currently-learning'
                  ? 'bg-dark-950 text-amber-200/90 border-amber-500/20'
                  : 'bg-dark-950 text-slate-200 border-slate-800 hover:border-slate-700'
              ]"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { skillsCategories } from '../../data/skills';

const { isRtl, t } = useLanguage();
</script>
