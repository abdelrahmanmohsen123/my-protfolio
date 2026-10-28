<template>
  <section class="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-900/60">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <!-- Profile Photo with Status Indicator -->
      <div class="relative inline-block mb-6 group">
        <div class="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-slate-700/80 shadow-card bg-slate-900 mx-auto transition-transform duration-300 group-hover:scale-105">
          <img
            src="/images/profile.jpg"
            :alt="isRtl ? profileData.name.ar : profileData.name.en"
            class="w-full h-full object-cover object-[center_18%]"
            loading="eager"
          />
        </div>
        <!-- Status dot -->
        <span 
          class="absolute bottom-1 right-2 sm:bottom-2 sm:right-3 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#070a12] shadow-sm"
          :title="t.hero.statusBadge"
        ></span>
      </div>

      <!-- Name & Title -->
      <div class="space-y-2 mb-5">
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {{ isRtl ? profileData.name.ar : profileData.name.en }}
        </h1>
        <p class="text-base sm:text-lg font-medium text-brand-400">
          {{ isRtl ? profileData.headlineRole.ar : profileData.headlineRole.en }}
          <span class="text-slate-600 mx-2">•</span>
          <span class="text-slate-300">{{ isRtl ? profileData.secondaryRole.ar : profileData.secondaryRole.en }}</span>
        </p>
      </div>

      <!-- One Strong Sentence -->
      <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
        {{ isRtl ? profileData.heroHeadline.ar : profileData.heroHeadline.en }}
      </p>

      <!-- Two Main Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
        <!-- Button 1: View Projects -->
        <a
          href="#projects"
          class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-sm hover:shadow"
        >
          {{ t.hero.viewProjects }}
        </a>

        <!-- Button 2: ATS Resumes -->
        <button
          @click="$emit('open-cv-modal')"
          class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-all cursor-pointer inline-flex items-center gap-2"
        >
          <FileText class="w-4 h-4 text-brand-400" />
          <span>{{ t.hero.downloadCv }}</span>
        </button>
      </div>

      <!-- Minimal Social Links -->
      <div class="flex items-center justify-center gap-6 text-xs text-slate-400">
        <a
          :href="profileData.contact.github"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Github class="w-4 h-4" />
          <span>GitHub</span>
        </a>
        <span class="text-slate-700">•</span>
        <a
          :href="profileData.contact.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Linkedin class="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <span class="text-slate-700">•</span>
        <a
          :href="'mailto:' + profileData.contact.email"
          class="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Mail class="w-4 h-4" />
          <span>Email</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { FileText, Github, Linkedin, Mail } from 'lucide-vue-next';

defineEmits(['open-cv-modal']);

const { isRtl, t } = useLanguage();
</script>
