<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Ambient Background Lighting -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[140px] pointer-events-none rounded-full"></div>
    <div class="absolute top-1/3 -left-32 w-[350px] h-[350px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-glow-sm">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-xs font-medium text-slate-300">
            {{ t.hero.badge }}
          </span>
        </div>

        <!-- Name & Professional Title -->
        <div class="space-y-3">
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              {{ isRtl ? profileData.name.ar : profileData.name.en }}
            </span>
          </h1>

          <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl font-semibold">
            <span class="text-brand-400">
              {{ isRtl ? profileData.headlineRole.ar : profileData.headlineRole.en }}
            </span>
            <span class="text-slate-600 hidden sm:inline">•</span>
            <span class="text-slate-300">
              {{ isRtl ? profileData.secondaryRole.ar : profileData.secondaryRole.en }}
            </span>
          </div>
        </div>

        <!-- Headline & Intro -->
        <div class="space-y-4 max-w-3xl mx-auto">
          <p class="text-xl sm:text-2xl text-slate-200 font-medium leading-snug">
            "{{ isRtl ? profileData.heroHeadline.ar : profileData.heroHeadline.en }}"
          </p>
          <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
            {{ isRtl ? profileData.heroIntro.ar : profileData.heroIntro.en }}
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <!-- View Projects -->
          <a
            href="#projects"
            class="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-brand-500 to-accent-indigo text-white shadow-glow hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
          >
            <span>{{ t.hero.viewProjects }}</span>
            <ArrowDown class="w-4 h-4 animate-bounce" />
          </a>

          <!-- Download CV Modal Trigger -->
          <button
            @click="$emit('open-cv-modal')"
            class="px-6 py-3.5 rounded-xl font-semibold text-sm bg-dark-800/90 hover:bg-dark-700/90 text-slate-200 hover:text-white border border-slate-700 hover:border-brand-500/50 shadow-card hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <FileText class="w-4 h-4 text-brand-400" />
            <span>{{ t.hero.downloadCv }}</span>
          </button>

          <!-- Contact Me -->
          <a
            href="#contact"
            class="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-2"
          >
            <Mail class="w-4 h-4 text-slate-400" />
            <span>{{ t.hero.contactMe }}</span>
          </a>
        </div>

        <!-- Social Channels -->
        <div class="flex items-center justify-center gap-6 pt-4 text-slate-400 text-sm">
          <a
            :href="profileData.contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-brand-400 transition-colors"
          >
            <Github class="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <span class="text-slate-700">•</span>
          <a
            :href="profileData.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-brand-400 transition-colors"
          >
            <Linkedin class="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <span class="text-slate-700">•</span>
          <div class="flex items-center gap-2 text-slate-400">
            <MapPin class="w-4 h-4 text-brand-400" />
            <span>{{ isRtl ? profileData.contact.location.ar : profileData.contact.location.en }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { ArrowDown, FileText, Mail, Github, Linkedin, MapPin } from 'lucide-vue-next';

defineEmits(['open-cv-modal']);

const { isRtl, t } = useLanguage();
</script>
