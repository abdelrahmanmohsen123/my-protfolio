<template>
  <header class="fixed top-0 inset-x-0 z-40 bg-[#0d1527]/85 backdrop-blur-md border-b border-slate-700/50 transition-all duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo / Name -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-accent-indigo text-white font-bold text-xs flex items-center justify-center shadow-glow-sm group-hover:scale-105 transition-all">
          AM
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
            {{ isRtl ? profileData.name.ar : profileData.name.en }}
          </span>
          <span class="text-[10px] text-slate-400 font-mono hidden sm:inline">
            {{ isRtl ? 'مهندس برمجيات' : 'Software Engineer' }}
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-1">
        <a 
          v-for="link in navLinks" 
          :key="link.id" 
          :href="'#' + link.id" 
          class="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2.5">
        <!-- Language Switcher -->
        <button
          @click="toggleLanguage"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer flex items-center gap-1.5"
          :title="isRtl ? 'Switch to English' : 'التبديل إلى العربية'"
        >
          <span>🌐</span>
          <span>{{ currentLang === 'en' ? 'العربية' : 'English' }}</span>
        </button>

        <!-- CTA Hire Me button -->
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-sm"
        >
          <Mail class="w-3.5 h-3.5" />
          <span>{{ isRtl ? 'طلب مشروع' : 'Hire Me' }}</span>
        </a>

        <!-- ATS CV Modal Trigger -->
        <button
          @click="$emit('open-cv-modal')"
          class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
        >
          <FileText class="w-3.5 h-3.5 text-brand-400" />
          <span>{{ t.nav.cv }}</span>
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md"
          aria-label="Toggle Menu"
        >
          <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden bg-[#131d36] border-b border-slate-700/60 px-4 py-3 space-y-1 animate-fadeIn shadow-2xl"
    >
      <a
        v-for="link in navLinks"
        :key="link.id"
        :href="'#' + link.id"
        @click="mobileMenuOpen = false"
        class="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-md"
      >
        {{ link.label }}
      </a>
      <div class="pt-3 border-t border-slate-700/60 flex gap-2">
        <a
          href="#contact"
          @click="mobileMenuOpen = false"
          class="flex-1 py-2 text-center text-xs font-semibold bg-brand-600 text-white rounded-lg"
        >
          {{ isRtl ? 'طلب مشروع' : 'Hire Me' }}
        </a>
        <button
          @click="$emit('open-cv-modal'); mobileMenuOpen = false"
          class="flex-1 py-2 text-center text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 rounded-lg flex items-center justify-center gap-1.5"
        >
          <FileText class="w-3.5 h-3.5 text-brand-400" />
          <span>{{ t.nav.cv }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { FileText, Menu, X, Mail } from 'lucide-vue-next';

defineEmits(['open-cv-modal']);

const { currentLang, isRtl, toggleLanguage, t } = useLanguage();
const mobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { id: 'about', label: t.value.nav.about },
  { id: 'services', label: t.value.nav.services },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'skills', label: t.value.nav.skills },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'testimonials', label: t.value.nav.testimonials },
  { id: 'education', label: t.value.nav.education },
  { id: 'contact', label: t.value.nav.contact },
]);
</script>
