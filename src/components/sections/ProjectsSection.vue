<template>
  <section id="projects" class="py-16 md:py-24 border-b border-slate-900/60 bg-[#0B0F19]/40">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-10">
        <h2 class="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
          {{ t.projects.sectionTitle }}
        </h2>
        <p class="text-sm text-slate-400">
          {{ t.projects.sectionSubtitle }}
        </p>
      </div>

      <!-- Project Cards Grid (Consistent, Clean & Modern) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in projectsData"
          :key="project.id"
          class="bg-[#070a12] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group"
        >
          <div>
            <!-- Category & Name -->
            <div class="flex items-center justify-between gap-3 mb-2.5">
              <h3 class="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                {{ project.title }}
              </h3>
              <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                {{ isRtl ? project.category.ar : project.category.en }}
              </span>
            </div>

            <!-- Short Description (1-2 lines maximum) -->
            <p class="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-5">
              {{ isRtl ? project.tagline.ar : project.tagline.en }}
            </p>
          </div>

          <div>
            <!-- Main Technologies -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tech in project.technologies.slice(0, 5)"
                :key="tech"
                class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
              >
                {{ tech }}
              </span>
            </div>

            <!-- View Project Button & Details Button -->
            <div class="flex items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-sm"
              >
                <span>{{ t.projects.visitLive }}</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>

              <button
                @click="selectedProject = project"
                class="text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {{ t.projects.viewDetails }}
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Details Modal (for recruiters wanting deep dive) -->
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
import { ExternalLink } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
const selectedProject = ref<Project | null>(null);
</script>
