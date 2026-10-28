<template>
  <section id="about" class="py-16 md:py-20 border-b border-slate-900/60 bg-[#121d36]/30">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <h2 class="text-xs font-bold uppercase tracking-wider text-brand-400 mb-4">
        {{ t.about.sectionTitle }}
      </h2>

      <!-- 3 to 4 Short Meaningful Lines -->
      <div class="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed">
        <p v-for="(p, idx) in profileData.about.paragraphs" :key="idx" class="border-l-2 border-slate-800 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
          {{ isRtl ? p.ar : p.en }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';

const { isRtl, t } = useLanguage();
</script>
