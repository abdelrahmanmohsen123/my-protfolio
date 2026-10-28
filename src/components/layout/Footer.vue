<template>
  <footer class="bg-[#050811] border-t border-slate-900 py-8 text-slate-500 text-xs">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <p>© {{ new Date().getFullYear() }} {{ isRtl ? profileData.name.ar : profileData.name.en }}. {{ t.footer.rights }}</p>
      <p>{{ t.footer.builtWith }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';

const { isRtl, t } = useLanguage();
</script>
