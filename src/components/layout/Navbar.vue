<template>
  <header class="fixed top-0 inset-x-0 z-40 bg-[#070a12]/80 backdrop-blur-md border-b border-slate-800/60 transition-all duration-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo / Name -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 font-bold text-xs flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all">
          AM
        </div>
        <span class="text-sm font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
          {{ isRtl ? profileData.name.ar : profileData.name.en }}
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1">
        <a 
          v-for="link in navLinks" 
          :key="link.id" 
          :href="'#' + link.id" 
          class="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2.5">
        <!-- Language Switcher -->
        <button
          @click="toggleLanguage"
          class="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 border border-slate-700/60 hover:border-slate-600 transition-all cursor-pointer"
          :title="isRtl ? 'Switch to English' : 'التبديل إلى العربية'"
        >
          {{ currentLang === 'en' ? 'العربية' : 'English' }}
        </button>

        <!-- ATS CV Modal Trigger -->
        <button
          @click="$emit('open-cv-modal')"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-all cursor-pointer shadow-sm"
        >
          <FileText class="w-3.5 h-3.5" />
          <span>{{ t.nav.cv }}</span>
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md"
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
      class="md:hidden bg-[#0B0F19] border-b border-slate-800 px-4 py-3 space-y-1 animate-fadeIn"
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
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { FileText, Menu, X } from 'lucide-vue-next';

defineEmits(['open-cv-modal']);

const { currentLang, isRtl, toggleLanguage, t } = useLanguage();
const mobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { id: 'about', label: t.value.nav.about },
  { id: 'skills', label: t.value.nav.skills },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'contact', label: t.value.nav.contact },
]);
</script>
