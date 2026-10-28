<template>
  <section id="contact" class="py-20 md:py-28 bg-[#0B0F19]/60 border-t border-slate-900 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.contact.sectionTitle }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ t.contact.sectionTitle }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          {{ t.contact.sectionSubtitle }}
        </p>
      </div>

      <!-- Contact Channels Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Email Card -->
        <div class="bg-dark-850/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <div class="p-3 w-fit rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
              <Mail class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-semibold text-slate-400">{{ t.contact.emailMe }}</span>
              <a
                :href="'mailto:' + profileData.contact.email"
                class="block text-sm font-bold text-white hover:text-brand-400 transition-colors break-all mt-1"
              >
                {{ profileData.contact.email }}
              </a>
            </div>
          </div>

          <button
            @click="copyText(profileData.contact.email, 'email')"
            class="w-full mt-4 py-2 px-3 rounded-xl bg-dark-950 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Check v-if="copiedField === 'email'" class="w-4 h-4 text-emerald-400" />
            <Copy v-else class="w-4 h-4 text-slate-400" />
            <span>{{ copiedField === 'email' ? t.contact.copySuccess : t.contact.copy }}</span>
          </button>
        </div>

        <!-- Phone / WhatsApp Card -->
        <div class="bg-dark-850/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <div class="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Phone class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-semibold text-slate-400">{{ t.contact.callMe }}</span>
              <a
                :href="'tel:' + profileData.contact.phone"
                class="block text-sm font-bold text-white hover:text-emerald-400 transition-colors mt-1 font-mono"
              >
                {{ profileData.contact.phone }}
              </a>
            </div>
          </div>

          <button
            @click="copyText(profileData.contact.phone, 'phone')"
            class="w-full mt-4 py-2 px-3 rounded-xl bg-dark-950 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Check v-if="copiedField === 'phone'" class="w-4 h-4 text-emerald-400" />
            <Copy v-else class="w-4 h-4 text-slate-400" />
            <span>{{ copiedField === 'phone' ? t.contact.copySuccess : t.contact.copy }}</span>
          </button>
        </div>

        <!-- LinkedIn Card -->
        <div class="bg-dark-850/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <div class="p-3 w-fit rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Linkedin class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-semibold text-slate-400">LinkedIn</span>
              <a
                :href="profileData.contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-sm font-bold text-white hover:text-sky-400 transition-colors mt-1"
              >
                in/abdelrahman-mohsen
              </a>
            </div>
          </div>

          <a
            :href="profileData.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full mt-4 py-2 px-3 rounded-xl bg-dark-950 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center gap-2 transition-colors"
          >
            <ExternalLink class="w-4 h-4 text-slate-400" />
            <span>{{ isRtl ? 'فتح الملف الشخصي' : 'Open Profile' }}</span>
          </a>
        </div>

        <!-- GitHub Card -->
        <div class="bg-dark-850/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <div class="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Github class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-semibold text-slate-400">GitHub</span>
              <a
                :href="profileData.contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-sm font-bold text-white hover:text-purple-400 transition-colors mt-1"
              >
                abdelrahmanmohsen123
              </a>
            </div>
          </div>

          <a
            :href="profileData.contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full mt-4 py-2 px-3 rounded-xl bg-dark-950 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center gap-2 transition-colors"
          >
            <ExternalLink class="w-4 h-4 text-slate-400" />
            <span>{{ isRtl ? 'استعراض المشاريع' : 'Open Repos' }}</span>
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
const copiedField = ref<string | null>(null);

const copyText = (text: string, field: string) => {
  navigator.clipboard.writeText(text);
  copiedField.value = field;
  setTimeout(() => {
    if (copiedField.value === field) {
      copiedField.value = null;
    }
  }, 2500);
};
</script>
