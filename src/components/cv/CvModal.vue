<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    @click.self="$emit('close')"
  >
    <div
      class="bg-dark-900 border border-slate-700 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-scaleUp overflow-hidden max-h-[95vh] flex flex-col"
    >
      <!-- Modal Header -->
      <div class="flex items-start justify-between gap-4 border-b border-slate-800 pb-4 flex-shrink-0">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-2">
            <CheckCircle2 class="w-3.5 h-3.5" />
            <span>100% ATS-Compliant Single-Column Format</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
            {{ t.cvModal.title }}
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">
            {{ t.cvModal.subtitle }}
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

      <!-- Control Bar: Track Selector & Language Selector -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-dark-950 p-4 rounded-2xl border border-slate-800 flex-shrink-0">
        <!-- Track Selector -->
        <div>
          <label class="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
            {{ t.cvModal.trackSelect }}
          </label>
          <div class="grid grid-cols-2 gap-2">
            <button
              @click="selectedTrack = 'fullstack'"
              :class="[
                'px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border text-center',
                selectedTrack === 'fullstack'
                  ? 'bg-brand-600 text-white border-brand-500 shadow-glow-sm'
                  : 'bg-dark-900 text-slate-400 border-slate-800 hover:text-white'
              ]"
            >
              {{ t.cvModal.fullstackTrack }}
            </button>
            <button
              @click="selectedTrack = 'backend'"
              :class="[
                'px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border text-center',
                selectedTrack === 'backend'
                  ? 'bg-brand-600 text-white border-brand-500 shadow-glow-sm'
                  : 'bg-dark-900 text-slate-400 border-slate-800 hover:text-white'
              ]"
            >
              {{ t.cvModal.backendTrack }}
            </button>
          </div>
        </div>

        <!-- Language Selector -->
        <div>
          <label class="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
            {{ t.cvModal.langSelect }}
          </label>
          <div class="grid grid-cols-2 gap-2">
            <button
              @click="selectedLang = 'en'"
              :class="[
                'px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border text-center',
                selectedLang === 'en'
                  ? 'bg-brand-600 text-white border-brand-500 shadow-glow-sm'
                  : 'bg-dark-900 text-slate-400 border-slate-800 hover:text-white'
              ]"
            >
              {{ t.cvModal.english }}
            </button>
            <button
              @click="selectedLang = 'ar'"
              :class="[
                'px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border text-center',
                selectedLang === 'ar'
                  ? 'bg-brand-600 text-white border-brand-500 shadow-glow-sm'
                  : 'bg-dark-900 text-slate-400 border-slate-800 hover:text-white'
              ]"
            >
              {{ t.cvModal.arabic }}
            </button>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 flex-shrink-0">
        <div class="flex items-center gap-2">
          <!-- Print / PDF -->
          <a
            :href="currentCvUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white shadow-glow-sm inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <Printer class="w-4 h-4" />
            <span>{{ t.cvModal.printPdf }}</span>
          </a>

          <!-- Download ATS File -->
          <a
            :href="currentCvUrl"
            :download="currentCvDownloadName"
            class="px-4 py-2.5 rounded-xl text-xs font-bold bg-dark-850 hover:bg-dark-800 text-slate-200 hover:text-white border border-slate-700 inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <Download class="w-4 h-4 text-brand-400" />
            <span>{{ t.cvModal.downloadHtml }}</span>
          </a>
        </div>

        <div class="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
          <ShieldCheck class="w-4 h-4 text-emerald-400" />
          <span>{{ selectedTrack.toUpperCase() }} • {{ selectedLang.toUpperCase() }}</span>
        </div>
      </div>

      <!-- Live ATS Resume Preview Window -->
      <div
        class="bg-white text-[#111] p-6 sm:p-10 rounded-2xl shadow-inner overflow-y-auto flex-grow max-h-[50vh] border border-slate-300 font-sans"
        :dir="selectedLang === 'ar' ? 'rtl' : 'ltr'"
        :style="{ fontFamily: selectedLang === 'ar' ? `'Segoe UI', Tahoma, Arial, sans-serif` : `Arial, Helvetica, sans-serif` }"
      >
        <!-- Header -->
        <div class="border-b-2 border-black pb-3 mb-4">
          <h1 class="text-2xl font-bold uppercase tracking-tight text-black">
            {{ selectedLang === 'ar' ? 'عبدالرحمن محسن السيد' : 'Abdelrahman Mohsen Elsaied' }}
          </h1>
          <div class="text-sm font-bold text-gray-700 mt-1">
            {{ selectedLang === 'ar' 
              ? (selectedTrack === 'fullstack' ? 'مهندس برمجيات فل ستاك | تخصص قوي في هندسة الباك إند ولارفيل' : 'مهندس برمجيات باك إند | متخصص بلغة PHP وإطار عمل Laravel')
              : (selectedTrack === 'fullstack' ? 'Full Stack Software Engineer | Strong Laravel Backend Specialization' : 'Backend Software Engineer | PHP & Laravel Developer')
            }}
          </div>
          <div class="text-xs text-gray-600 mt-2 space-y-0.5" dir="ltr" :class="selectedLang === 'ar' ? 'text-right' : 'text-left'">
            <div>Egypt | +201063170724 | abdelrahman.mohsen.elsaied94@gmail.com</div>
            <div>LinkedIn: linkedin.com/in/abdelrahman-mohsen-025a9725a | GitHub: github.com/abdelrahmanmohsen123</div>
          </div>
        </div>

        <!-- Summary -->
        <div class="mb-5">
          <h2 class="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2 text-black">
            {{ selectedLang === 'ar' ? 'الملخص المهني' : 'Professional Summary' }}
          </h2>
          <p class="text-xs leading-relaxed text-gray-800">
            {{ activeCv.summary[selectedLang] }}
          </p>
        </div>

        <!-- Skills -->
        <div class="mb-5">
          <h2 class="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2 text-black">
            {{ selectedLang === 'ar' ? 'المهارات التقنية' : 'Technical Skills' }}
          </h2>
          <div class="space-y-1.5 text-xs text-gray-800">
            <div v-for="(group, idx) in activeCv.skillsGroups" :key="idx">
              <strong>{{ group.title[selectedLang] }}:</strong>
              {{ group.skills.join(', ') }}
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div class="mb-5">
          <h2 class="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3 text-black">
            {{ selectedLang === 'ar' ? 'الخبرات المهنية' : 'Professional Experience' }}
          </h2>
          <div class="space-y-4">
            <div v-for="(job, idx) in activeCv.experience" :key="idx" class="text-xs">
              <div class="flex justify-between font-bold text-gray-900">
                <span>{{ job.company }} — {{ job.location[selectedLang] }}</span>
                <span>{{ job.period[selectedLang] }}</span>
              </div>
              <div class="italic text-gray-700 mb-1.5">
                {{ job.role[selectedLang] }}
              </div>
              <ul class="list-disc list-inside space-y-1 text-gray-800" :class="selectedLang === 'ar' ? 'pr-2' : 'pl-2'">
                <li v-for="(bullet, bIdx) in job.bullets" :key="bIdx" class="leading-relaxed">
                  {{ bullet[selectedLang] }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <div class="mb-5">
          <h2 class="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3 text-black">
            {{ selectedLang === 'ar' ? 'أبرز المشاريع الإنتاجية' : 'Selected Production Projects' }}
          </h2>
          <div class="space-y-3">
            <div v-for="(proj, idx) in activeCv.featuredProjects" :key="idx" class="text-xs">
              <div class="font-bold text-gray-900">
                {{ proj.name }}
              </div>
              <div class="text-gray-700 italic mb-1">
                {{ proj.description[selectedLang] }}
              </div>
              <ul class="list-disc list-inside space-y-1 text-gray-800" :class="selectedLang === 'ar' ? 'pr-2' : 'pl-2'">
                <li v-for="(bullet, bIdx) in proj.bullets" :key="bIdx" class="leading-relaxed">
                  {{ bullet[selectedLang] }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3 text-black">
            {{ selectedLang === 'ar' ? 'التعليم والدبلومات' : 'Education & Diplomas' }}
          </h2>
          <div class="space-y-3">
            <div v-for="(edu, idx) in activeCv.education" :key="idx" class="text-xs">
              <div class="flex justify-between font-bold text-gray-900">
                <span>{{ edu.institution[selectedLang] }}</span>
                <span>{{ edu.period }}</span>
              </div>
              <div class="text-gray-700">
                {{ edu.degree[selectedLang] }}
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer Notice -->
      <div class="text-center text-[11px] text-slate-500 pt-2 flex-shrink-0">
        {{ t.cvModal.atsNotice }}
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { cvDataStore } from '../../data/cv-data';
import { CvTrack, Language } from '../../types';
import { X, CheckCircle2, Printer, Download, ShieldCheck } from 'lucide-vue-next';

defineProps<{
  isOpen: boolean;
}>();

defineEmits(['close']);

const { t } = useLanguage();

const selectedTrack = ref<CvTrack>('fullstack');
const selectedLang = ref<Language>('en');

const activeCv = computed(() => {
  return cvDataStore[selectedTrack.value][selectedLang.value];
});

const currentCvUrl = computed(() => {
  const trackName = selectedTrack.value === 'fullstack' ? 'FullStack' : 'Backend';
  const langName = selectedLang.value === 'en' ? 'English' : 'Arabic';
  return `./cv/Abdelrahman_Mohsen_CV_${trackName}_${langName}.html`;
});

const currentCvDownloadName = computed(() => {
  const trackName = selectedTrack.value === 'fullstack' ? 'FullStack' : 'Backend';
  const langName = selectedLang.value === 'en' ? 'English' : 'Arabic';
  return `Abdelrahman_Mohsen_CV_${trackName}_${langName}.html`;
});
</script>

