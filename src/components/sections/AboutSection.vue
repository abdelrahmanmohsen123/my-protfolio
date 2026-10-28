<template>
  <section id="about" class="py-20 md:py-28 bg-[#0B0F19]/60 border-t border-slate-900 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.about.verifiedBadge }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ t.about.sectionTitle }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          {{ t.about.sectionSubtitle }}
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Bio Narrative (Left / 7 cols) -->
        <div class="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
          <p v-for="(p, idx) in profileData.about.paragraphs" :key="idx" class="bg-dark-850/40 p-5 rounded-2xl border border-slate-800/60 shadow-card">
            {{ isRtl ? p.ar : p.en }}
          </p>
        </div>

        <!-- Specialization Highlights (Right / 5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            {{ t.about.keySpecializations }}
          </h3>

          <div
            v-for="(item, idx) in profileData.about.highlights"
            :key="idx"
            class="p-5 rounded-2xl bg-dark-800/50 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
          >
            <div class="text-xs font-semibold text-brand-400 mb-1">
              {{ isRtl ? item.label.ar : item.label.en }}
            </div>
            <div class="text-base font-semibold text-white group-hover:text-brand-300 transition-colors">
              {{ isRtl ? item.value.ar : item.value.en }}
            </div>
          </div>

          <!-- Quick Stat / Principles Card -->
          <div class="p-6 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-850 border border-brand-500/20 shadow-glow-sm">
            <div class="flex items-center gap-3 mb-3">
              <div class="p-2.5 rounded-lg bg-brand-500/10 text-brand-400">
                <CheckCircle2 class="w-5 h-5" />
              </div>
              <h4 class="text-sm font-bold text-white">
                {{ isRtl ? 'نهج العمل البرمجي' : 'Engineering Approach' }}
              </h4>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              {{ isRtl 
                ? 'التركيز على بناء كود قابل للصيانة، وواجهات APIs موثقة بدقة، واستعلامات SQL محسنة لمنع الاختناقات أثناء طفرات الترافيك العالية.'
                : 'Focusing on maintainable architectures, thoroughly documented REST APIs, and defensively optimized SQL queries that hold up reliably under production load.'
              }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { CheckCircle2 } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
</script>
