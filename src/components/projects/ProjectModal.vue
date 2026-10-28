<template>
  <div
    v-if="project"
    class="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    @click.self="$emit('close')"
  >
    <div
      class="bg-dark-900 border border-slate-700/80 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-scaleUp overflow-hidden max-h-[90vh] flex flex-col"
    >
      <!-- Top Glow Accent -->
      <div 
        class="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
        :style="{ backgroundColor: project.accentColor }"
      ></div>

      <!-- Header with Close Button -->
      <div class="flex items-start justify-between gap-4 border-b border-slate-800 pb-4 flex-shrink-0">
        <div>
          <span class="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-brand-400 mb-2 border border-slate-700">
            {{ isRtl ? project.category.ar : project.category.en }}
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
            {{ project.title }}
          </h3>
          <p class="text-sm text-slate-400 mt-1">
            {{ isRtl ? project.tagline.ar : project.tagline.en }}
          </p>
        </div>

        <button
          @click="$emit('close')"
          class="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Scrollable Body -->
      <div class="space-y-6 overflow-y-auto pr-2 flex-grow text-slate-300 text-sm">
        <!-- Business Description -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {{ isRtl ? 'عن المنصة ونموذج العمل' : 'Platform Overview' }}
          </h4>
          <p class="text-slate-300 leading-relaxed bg-dark-850/50 p-4 rounded-xl border border-slate-800">
            {{ isRtl ? project.description.ar : project.description.en }}
          </p>
        </div>

        <!-- Scope & Ownership Statement -->
        <div class="p-4 rounded-xl bg-brand-950/30 border border-brand-500/30">
          <span class="font-bold text-brand-400 block mb-1">
            {{ t.projects.ownershipLabel }}
          </span>
          <p class="text-slate-200">
            {{ isRtl ? project.ownership.ar : project.ownership.en }}
          </p>
        </div>

        <!-- Backend Contributions -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <Server class="w-4 h-4" />
            <span>{{ t.projects.backendContributions }}</span>
          </h4>
          <ul class="space-y-2">
            <li
              v-for="(item, idx) in project.contributions.backend"
              :key="idx"
              class="flex items-start gap-2.5 p-3 rounded-lg bg-dark-850/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{{ isRtl ? item.ar : item.en }}</span>
            </li>
          </ul>
        </div>

        <!-- Frontend Contributions -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <Layout class="w-4 h-4" />
            <span>{{ t.projects.frontendContributions }}</span>
          </h4>
          <ul class="space-y-2">
            <li
              v-for="(item, idx) in project.contributions.frontend"
              :key="idx"
              class="flex items-start gap-2.5 p-3 rounded-lg bg-dark-850/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 class="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <span>{{ isRtl ? item.ar : item.en }}</span>
            </li>
          </ul>
        </div>

        <!-- Technologies -->
        <div class="space-y-2 pt-2">
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {{ t.projects.technologies }}
          </h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 text-slate-300 border border-slate-800"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex items-center justify-between gap-4 pt-4 border-t border-slate-800 flex-shrink-0">
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-glow-sm transition-all duration-200"
        >
          <span>{{ t.projects.visitLive }}</span>
          <ExternalLink class="w-4 h-4" />
        </a>

        <button
          @click="$emit('close')"
          class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
        >
          {{ t.projects.closeModal }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { Project } from '../../types';
import { X, ExternalLink, Server, Layout, CheckCircle2 } from 'lucide-vue-next';

defineProps<{
  project: Project | null;
}>();

defineEmits(['close']);

const { isRtl, t } = useLanguage();
</script>
