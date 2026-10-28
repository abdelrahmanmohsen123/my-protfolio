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

      <!-- Two Main Buttons: View Projects + Download CV (with quick dropdown) -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-8 relative">
        <!-- Button 1: View Projects -->
        <a
          href="#projects"
          class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-sm hover:shadow"
        >
          {{ t.hero.viewProjects }}
        </a>

        <!-- Button 2: Direct Download CV with Dropdown -->
        <div class="relative" ref="dropdownRef">
          <div class="inline-flex rounded-lg shadow-sm border border-slate-700 bg-slate-800/90 hover:bg-slate-700/90 transition-all">
            <!-- Direct Download Current Track PDF -->
            <a
              :href="defaultPdfUrl"
              :download="defaultPdfName"
              class="px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white inline-flex items-center gap-2 border-r border-slate-700/80 rtl:border-r-0 rtl:border-l"
              :title="isRtl ? 'تحميل مباشر كملف PDF' : 'Direct Download PDF'"
            >
              <Download class="w-4 h-4 text-brand-400" />
              <span>{{ isRtl ? 'تحميل السيرة الذاتية (PDF)' : 'Download CV (PDF)' }}</span>
            </a>

            <!-- Toggle Dropdown for 4 versions -->
            <button
              @click="isDropdownOpen = !isDropdownOpen"
              class="px-2.5 py-2.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Select CV Version"
            >
              <ChevronDown class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isDropdownOpen }" />
            </button>
          </div>

          <!-- Dropdown Menu for 4 Versions -->
          <div
            v-if="isDropdownOpen"
            class="absolute top-full mt-2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 w-64 bg-[#0B0F19] border border-slate-700 rounded-xl p-2 shadow-2xl z-30 text-left rtl:text-right text-xs space-y-1 animate-fadeIn"
          >
            <div class="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
              {{ isRtl ? 'اختر النسخة للتحميل المباشر' : 'Download Version (PDF)' }}
            </div>

            <!-- Full Stack EN -->
            <a
              href="./cv/Abdelrahman_Mohsen_CV_FullStack_English.pdf"
              download="Abdelrahman_Mohsen_CV_FullStack_English.pdf"
              @click="isDropdownOpen = false"
              class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
            >
              <span class="font-medium">Full Stack (English)</span>
              <span class="text-[10px] text-brand-400 font-mono">PDF</span>
            </a>

            <!-- Full Stack AR -->
            <a
              href="./cv/Abdelrahman_Mohsen_CV_FullStack_Arabic.pdf"
              download="Abdelrahman_Mohsen_CV_FullStack_Arabic.pdf"
              @click="isDropdownOpen = false"
              class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
            >
              <span class="font-medium">فل ستاك (العربية)</span>
              <span class="text-[10px] text-brand-400 font-mono">PDF</span>
            </a>

            <!-- Backend EN -->
            <a
              href="./cv/Abdelrahman_Mohsen_CV_Backend_English.pdf"
              download="Abdelrahman_Mohsen_CV_Backend_English.pdf"
              @click="isDropdownOpen = false"
              class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
            >
              <span class="font-medium">Backend (English)</span>
              <span class="text-[10px] text-brand-400 font-mono">PDF</span>
            </a>

            <!-- Backend AR -->
            <a
              href="./cv/Abdelrahman_Mohsen_CV_Backend_Arabic.pdf"
              download="Abdelrahman_Mohsen_CV_Backend_Arabic.pdf"
              @click="isDropdownOpen = false"
              class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
            >
              <span class="font-medium">باك إند (العربية)</span>
              <span class="text-[10px] text-brand-400 font-mono">PDF</span>
            </a>

            <div class="border-t border-slate-800 pt-1 mt-1">
              <button
                @click="$emit('open-cv-modal'); isDropdownOpen = false"
                class="w-full text-left rtl:text-right p-2 rounded-lg text-brand-400 hover:bg-slate-800 font-medium flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{{ isRtl ? 'معاينة وطباعة ATS أونلاين' : 'Preview & Print ATS Resumes' }}</span>
                <FileText class="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { Download, ChevronDown, FileText, Github, Linkedin, Mail } from 'lucide-vue-next';

defineEmits(['open-cv-modal']);

const { isRtl, currentLang, t } = useLanguage();
const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const defaultPdfUrl = computed(() => {
  return currentLang.value === 'ar'
    ? './cv/Abdelrahman_Mohsen_CV_FullStack_Arabic.pdf'
    : './cv/Abdelrahman_Mohsen_CV_FullStack_English.pdf';
});

const defaultPdfName = computed(() => {
  return currentLang.value === 'ar'
    ? 'Abdelrahman_Mohsen_CV_FullStack_Arabic.pdf'
    : 'Abdelrahman_Mohsen_CV_FullStack_English.pdf';
});

const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>
