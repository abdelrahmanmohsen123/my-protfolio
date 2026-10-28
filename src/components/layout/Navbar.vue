<template>
  <header class="fixed top-0 inset-x-0 z-40 bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Logo / Name -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-indigo flex items-center justify-center font-bold text-white shadow-glow-sm group-hover:scale-105 transition-transform duration-200">
          AM
        </div>
        <div class="flex flex-col">
          <span class="text-base font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors">
            {{ isRtl ? 'عبدالرحمن محسن' : 'Abdelrahman Mohsen' }}
          </span>
          <span class="text-xs text-slate-400 font-mono">
            {{ isRtl ? 'مهندس برمجيات' : 'Software Engineer' }}
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        <a 
          v-for="link in navLinks" 
          :key="link.id" 
          :href="'#' + link.id" 
          class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Actions: Language Switcher, ATS CV Button, Mobile Menu -->
      <div class="flex items-center gap-3">
        <!-- Language Switcher Pill -->
        <button
          @click="toggleLanguage"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-brand-300 border border-slate-700/70 hover:border-brand-500/50 transition-all duration-200 cursor-pointer shadow-sm"
          :title="isRtl ? 'التبديل إلى الإنجليزية' : 'Switch to Arabic'"
        >
          <span class="text-xs">🌐</span>
          <span>{{ currentLang === 'en' ? 'العربية' : 'English' }}</span>
        </button>

        <!-- ATS CV Modal Trigger -->
        <button
          @click="$emit('open-cv-modal')"
          class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-brand-600 to-accent-indigo hover:from-brand-500 hover:to-indigo-500 text-white shadow-glow-sm hover:shadow-glow transition-all duration-200 cursor-pointer"
        >
          <FileText class="w-4 h-4" />
          <span>{{ t.nav.cv }}</span>
        </button>

        <!-- Mobile Hamburger Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg"
          aria-label="Toggle Navigation Menu"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn"
    >
      <a
        v-for="link in navLinks"
        :key="link.id"
        :href="'#' + link.id"
        @click="mobileMenuOpen = false"
        class="block px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/80 rounded-lg"
      >
        {{ link.label }}
      </a>
      <div class="pt-4 border-t border-slate-800 flex flex-col gap-2">
        <button
          @click="$emit('open-cv-modal'); mobileMenuOpen = false"
          class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-brand-600 to-accent-indigo text-white shadow-glow-sm"
        >
          <FileText class="w-4 h-4" />
          <span>{{ t.nav.cv }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { FileText, Menu, X } from 'lucide-vue-next';

defineEmits(['open-cv-modal']);

const { currentLang, isRtl, toggleLanguage, t } = useLanguage();
const mobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { id: 'about', label: t.value.nav.about },
  { id: 'skills', label: t.value.nav.skills },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'education', label: t.value.nav.education },
  { id: 'contact', label: t.value.nav.contact },
]);
</script>
