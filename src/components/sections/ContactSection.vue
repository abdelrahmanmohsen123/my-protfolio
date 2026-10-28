<template>
  <section id="contact" class="py-16 md:py-24 bg-[#0B0F19]/40">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <!-- Section Header -->
      <h2 class="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2">
        {{ t.contact.sectionTitle }}
      </h2>
      <p class="text-xl sm:text-2xl font-bold text-white mb-2">
        {{ isRtl ? 'جاهز للانضمام إلى فريقك أو مشروعك القادم' : 'Ready to collaborate or discuss engineering roles.' }}
      </p>
      <p class="text-sm text-slate-400 mb-8">
        {{ t.contact.sectionSubtitle }}
      </p>

      <!-- Direct Contact Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
        <!-- Email -->
        <div class="bg-[#070a12] border border-slate-800 rounded-xl p-4 text-left rtl:text-right flex items-center justify-between">
          <div class="truncate mr-3 rtl:mr-0 rtl:ml-3">
            <span class="text-[11px] font-semibold text-slate-500 block uppercase">{{ t.contact.email }}</span>
            <a :href="'mailto:' + profileData.contact.email" class="text-xs sm:text-sm font-semibold text-white hover:text-brand-400 transition-colors truncate block">
              {{ profileData.contact.email }}
            </a>
          </div>
          <button
            @click="copyText(profileData.contact.email, 'email')"
            class="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex-shrink-0 cursor-pointer"
          >
            {{ copiedField === 'email' ? t.contact.copied : t.contact.copy }}
          </button>
        </div>

        <!-- Phone / WhatsApp -->
        <div class="bg-[#070a12] border border-slate-800 rounded-xl p-4 text-left rtl:text-right flex items-center justify-between">
          <div>
            <span class="text-[11px] font-semibold text-slate-500 block uppercase">{{ t.contact.phone }}</span>
            <a :href="'tel:' + profileData.contact.phone" class="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono block">
              {{ profileData.contact.phone }}
            </a>
          </div>
          <button
            @click="copyText(profileData.contact.phone, 'phone')"
            class="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex-shrink-0 cursor-pointer"
          >
            {{ copiedField === 'phone' ? t.contact.copied : t.contact.copy }}
          </button>
        </div>
      </div>

      <!-- Social Links Row -->
      <div class="flex items-center justify-center gap-6 text-sm text-slate-400">
        <a :href="profileData.contact.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
          <Linkedin class="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <span class="text-slate-800">•</span>
        <a :href="profileData.contact.github" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
          <Github class="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { Linkedin, Github } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
const copiedField = ref<string | null>(null);

const copyText = (text: string, field: string) => {
  navigator.clipboard.writeText(text);
  copiedField.value = field;
  setTimeout(() => {
    if (copiedField.value === field) {
      copiedField.value = null;
    }
  }, 2000);
};
</script>
