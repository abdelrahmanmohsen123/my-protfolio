<template>
  <section class="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-900/60 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Split Two-Column Layout on Desktop -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Text Column (Left on LTR / Right on RTL - 7 cols) -->
        <div class="lg:col-span-7 text-center lg:text-left rtl:lg:text-right space-y-6">
          
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 shadow-sm text-xs font-medium text-slate-300">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{{ t.hero.statusBadge }}</span>
          </div>

          <!-- Name & Role -->
          <div class="space-y-2">
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {{ isRtl ? profileData.name.ar : profileData.name.en }}
            </h1>
            <p class="text-lg sm:text-xl font-bold text-brand-400">
              {{ t.hero.roleTitle }}
            </p>
          </div>

          <!-- Strong Value-Focused Headline -->
          <p class="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            "{{ t.hero.headline }}"
          </p>

          <!-- Short Professional Intro -->
          <p class="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            {{ isRtl ? profileData.heroIntro.ar : profileData.heroIntro.en }}
          </p>

          <!-- Main CTA Buttons (View Projects / Hire Me / Download CV) -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <!-- Button 1: View Projects -->
            <a
              href="#projects"
              class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-glow-sm hover:shadow flex items-center gap-2"
            >
              <span>{{ t.hero.viewProjects }}</span>
              <ArrowDown class="w-4 h-4" />
            </a>

            <!-- Button 2: Hire Me / Let's Work Together -->
            <a
              href="#contact"
              class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm flex items-center gap-2"
            >
              <Send class="w-4 h-4" />
              <span>{{ t.hero.hireMe }}</span>
            </a>

            <!-- Button 3: Download CV with Dropdown -->
            <div class="relative" ref="dropdownRef">
              <div class="inline-flex rounded-xl shadow-sm border border-slate-700 bg-slate-800/90 hover:bg-slate-700/90 transition-all">
                <a
                  :href="defaultPdfUrl"
                  :download="defaultPdfName"
                  class="px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white inline-flex items-center gap-2 border-r border-slate-700/80 rtl:border-r-0 rtl:border-l"
                  :title="isRtl ? 'تحميل مباشر كملف PDF' : 'Direct Download PDF'"
                >
                  <Download class="w-4 h-4 text-brand-400" />
                  <span>{{ isRtl ? 'تحميل السيرة الذاتية (PDF)' : 'Download CV (PDF)' }}</span>
                </a>

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
                class="absolute top-full mt-2 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-64 bg-[#131d36] border border-slate-700 rounded-xl p-2 shadow-2xl z-30 text-left rtl:text-right text-xs space-y-1 animate-fadeIn"
              >
                <div class="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                  {{ isRtl ? 'اختر النسخة للتحميل المباشر' : 'Download Version (PDF)' }}
                </div>

                <a
                  href="./cv/Abdelrahman_Mohsen_CV_FullStack_English.pdf"
                  download="Abdelrahman_Mohsen_CV_FullStack_English.pdf"
                  @click="isDropdownOpen = false"
                  class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  <span class="font-medium">Full Stack (English)</span>
                  <span class="text-[10px] text-brand-400 font-mono">PDF</span>
                </a>

                <a
                  href="./cv/Abdelrahman_Mohsen_CV_FullStack_Arabic.pdf"
                  download="Abdelrahman_Mohsen_CV_FullStack_Arabic.pdf"
                  @click="isDropdownOpen = false"
                  class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  <span class="font-medium">فل ستاك (العربية)</span>
                  <span class="text-[10px] text-brand-400 font-mono">PDF</span>
                </a>

                <a
                  href="./cv/Abdelrahman_Mohsen_CV_Backend_English.pdf"
                  download="Abdelrahman_Mohsen_CV_Backend_English.pdf"
                  @click="isDropdownOpen = false"
                  class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  <span class="font-medium">Backend (English)</span>
                  <span class="text-[10px] text-brand-400 font-mono">PDF</span>
                </a>

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

          <!-- Social Links Row -->
          <div class="flex items-center justify-center lg:justify-start gap-5 pt-3 text-xs text-slate-400">
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
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle class="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
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

        <!-- Image Column (Right on LTR / Left on RTL - 5 cols) -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-64 sm:w-80 md:w-96 group">
            
            <!-- Ambient Glow Behind Image Frame -->
            <div class="absolute -inset-2 bg-gradient-to-r from-brand-500/20 via-accent-indigo/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-500"></div>

            <!-- Geometric Frame Container -->
            <div class="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-gradient-to-b from-[#15223c] to-[#0d1527] shadow-2xl p-2.5">
              
              <!-- Image Wrap with Tasteful Aspect Ratio -->
              <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="/images/profile.jpg"
                  :alt="isRtl ? profileData.name.ar : profileData.name.en"
                  class="w-full h-full object-cover object-[center_16%] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                <!-- Dark Vignette Gradient on Bottom of Photo -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0d1527]/85 via-transparent to-transparent pointer-events-none"></div>

                <!-- Floating Overlaid Badge -->
                <div class="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#0d1527]/90 backdrop-blur-md border border-slate-700/80 text-left rtl:text-right shadow-lg">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-xs font-bold text-white">
                        {{ isRtl ? profileData.name.ar : profileData.name.en }}
                      </p>
                      <p class="text-[11px] font-mono text-brand-300">
                        {{ isRtl ? 'مهندس برمجيات باكوند ولارفيل' : 'Laravel & Backend Engineer' }}
                      </p>
                    </div>
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Code2 class="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { 
  Download, 
  ChevronDown, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown, 
  Send, 
  MessageCircle, 
  Code2 
} from 'lucide-vue-next';

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

const whatsappUrl = computed(() => {
  const phone = profileData.contact.phone.replace(/[^0-9]/g, '');
  const msg = encodeURIComponent(
    currentLang.value === 'ar'
      ? 'مرحباً مهندس عبدالرحمن، أود الاستفسار عن تفاصيل مشروع وتكلفة التنفيذ.'
      : 'Hello Abdelrahman, I would like to inquire about a project and collaboration.'
  );
  return `https://wa.me/${phone}?text=${msg}`;
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
