<template>
  <section id="skills" class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-semibold uppercase tracking-wider">
          {{ t.skills.sectionTitle }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ t.skills.sectionTitle }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          {{ t.skills.sectionSubtitle }}
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="cat in skillsCategories"
          :key="cat.id"
          :class="[
            'p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between',
            cat.id === 'currently-learning'
              ? 'bg-gradient-to-b from-dark-850 to-dark-900 border-amber-500/30 hover:border-amber-500/50 shadow-card'
              : 'bg-dark-850/60 hover:bg-dark-800/70 border-slate-800/80 hover:border-slate-700 shadow-card'
          ]"
        >
          <div>
            <!-- Category Title & Icon -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <div 
                  :class="[
                    'p-2.5 rounded-xl border',
                    cat.id === 'currently-learning'
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      : 'bg-brand-500/10 border-brand-500/30 text-brand-400'
                  ]"
                >
                  <component :is="getIcon(cat.iconName)" class="w-5 h-5" />
                </div>
                <h3 class="text-lg font-bold text-white">
                  {{ isRtl ? cat.title.ar : cat.title.en }}
                </h3>
              </div>

              <!-- Learning Tag if applicable -->
              <span
                v-if="cat.id === 'currently-learning'"
                class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30"
              >
                {{ isRtl ? 'دراسة مستمرة' : 'Learning' }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-xs text-slate-400 mb-6 leading-relaxed">
              {{ isRtl ? cat.description.ar : cat.description.en }}
            </p>

            <!-- Skill Items Tags -->
            <div class="flex flex-wrap gap-2">
              <div
                v-for="(skill, idx) in cat.items"
                :key="idx"
                :class="[
                  'px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
                  cat.id === 'currently-learning'
                    ? 'bg-slate-900/90 text-amber-200 border-amber-500/20'
                    : 'bg-dark-950/80 text-slate-200 border-slate-800/80 hover:border-brand-500/40 hover:text-white'
                ]"
              >
                {{ skill.name }}
              </div>
            </div>
          </div>

          <!-- Bottom Footer indicator -->
          <div class="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
            <span>{{ cat.items.length }} {{ isRtl ? 'مهارات' : 'technologies' }}</span>
            <span class="text-slate-400 font-mono">
              {{ cat.id === 'currently-learning' ? t.skills.learningLevel : t.skills.coreLevel }}
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
import { Server, Database, Layout, GitBranch, Cpu, Sparkles } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();

const getIcon = (name: string) => {
  switch (name) {
    case 'Server': return Server;
    case 'Database': return Database;
    case 'Layout': return Layout;
    case 'GitBranch': return GitBranch;
    case 'Cpu': return Cpu;
    case 'Sparkles': return Sparkles;
    default: return Server;
  }
};
</script>
