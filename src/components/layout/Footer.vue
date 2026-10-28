<template>
  <footer class="bg-[#050811] border-t border-slate-900 py-12 text-slate-400 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand & Info -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-white text-xs border border-slate-700">
            AM
          </div>
          <div>
            <p class="text-slate-200 font-semibold">
              {{ isRtl ? profileData.name.ar : profileData.name.en }}
            </p>
            <p class="text-xs text-slate-500">
              {{ isRtl ? profileData.headlineRole.ar : profileData.headlineRole.en }}
            </p>
          </div>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6 text-xs text-slate-400">
          <a :href="profileData.contact.github" target="_blank" rel="noopener noreferrer" class="hover:text-brand-400 transition-colors flex items-center gap-1.5">
            <Github class="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a :href="profileData.contact.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-brand-400 transition-colors flex items-center gap-1.5">
            <Linkedin class="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a :href="'mailto:' + profileData.contact.email" class="hover:text-brand-400 transition-colors flex items-center gap-1.5">
            <Mail class="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
        <p>© {{ new Date().getFullYear() }} {{ isRtl ? profileData.name.ar : profileData.name.en }}. {{ t.footer.rights }}</p>
        <p>{{ t.footer.builtWith }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { Github, Linkedin, Mail } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
</script>
