<template>
  <section id="projects" class="py-20 md:py-28 bg-[#0B0F19]/50 border-t border-slate-900 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.projects.sectionTitle }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ t.projects.sectionTitle }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          {{ t.projects.sectionSubtitle }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="project in projectsData"
          :key="project.id"
          class="bg-dark-850/80 hover:bg-dark-800/90 border border-slate-800/80 hover:border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-card hover:shadow-glow-sm group relative overflow-hidden"
        >
          <!-- Corner Light Accent -->
          <div
            class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
            :style="{ backgroundColor: project.accentColor }"
          ></div>

          <div class="space-y-6">
            <!-- Header: Category & Live Link -->
            <div class="flex items-center justify-between gap-4">
              <span class="px-3 py-1 rounded-lg text-xs font-semibold bg-dark-950 text-brand-400 border border-slate-800">
                {{ isRtl ? project.category.ar : project.category.en }}
              </span>

              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors group/link"
              >
                <span>{{ t.projects.visitLive }}</span>
                <ExternalLink class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <!-- Title & Tagline -->
            <div class="space-y-2">
              <h3 class="text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-slate-400 font-medium">
                {{ isRtl ? project.tagline.ar : project.tagline.en }}
              </p>
            </div>

            <!-- Scope / Ownership Badge -->
            <div class="p-3.5 rounded-xl bg-dark-900/90 border border-slate-800 text-xs">
              <span class="font-bold text-slate-300 block mb-1">
                {{ t.projects.ownershipLabel }}
              </span>
              <p class="text-slate-400">
                {{ isRtl ? project.ownership.ar : project.ownership.en }}
              </p>
            </div>

            <!-- Key Contributions (2 Backend highlights, 1 Frontend highlight) -->
            <div class="space-y-3 pt-2">
              <div class="space-y-1.5">
                <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Server class="w-3.5 h-3.5" />
                  <span>{{ t.projects.backendContributions }}</span>
                </span>
                <div class="space-y-1.5">
                  <div
                    v-for="(item, idx) in project.contributions.backend.slice(0, 2)"
                    :key="idx"
                    class="text-xs text-slate-300 flex items-start gap-2"
                  >
                    <span class="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{{ isRtl ? item.ar : item.en }}</span>
                  </div>
                </div>
              </div>

              <div class="space-y-1.5 pt-1">
                <span class="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Layout class="w-3.5 h-3.5" />
                  <span>{{ t.projects.frontendContributions }}</span>
                </span>
                <div class="text-xs text-slate-300 flex items-start gap-2">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>{{ isRtl ? project.contributions.frontend[0].ar : project.contributions.frontend[0].en }}</span>
                </div>
              </div>
            </div>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tech in project.technologies.slice(0, 6)"
                :key="tech"
                class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950/80 text-slate-300 border border-slate-800"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 6"
                class="px-2 py-1 rounded-md text-[11px] font-mono bg-dark-950/40 text-slate-500"
              >
                +{{ project.technologies.length - 6 }}
              </span>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between gap-4">
            <button
              @click="selectedProject = project"
              class="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors cursor-pointer"
            >
              <span>{{ t.projects.viewDetails }}</span>
              <ChevronRight class="w-4 h-4" />
            </button>

            <a
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-dark-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors inline-flex items-center gap-1.5"
            >
              <span>{{ t.projects.visitLive }}</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

    </div>

    <!-- Detailed Project Modal -->
    <ProjectModal
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import ProjectModal from '../projects/ProjectModal.vue';
import { ExternalLink, Server, Layout, ChevronRight } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
const selectedProject = ref<Project | null>(null);
</script>
