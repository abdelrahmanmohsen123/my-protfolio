<template>
  <section id="testimonials" class="py-16 md:py-24 border-b border-slate-900/60 bg-[#0d1527] relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14 space-y-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.testimonials.sectionTitle }}
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ isRtl ? 'ثقة العملاء وجودة التنفيذ' : 'Client Feedback & Partnerships' }}
        </h2>
        <p class="text-sm sm:text-base text-slate-400">
          {{ t.testimonials.sectionSubtitle }}
        </p>
      </div>

      <!-- Testimonials Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div
          v-for="item in testimonialsData"
          :key="item.id"
          class="bg-[#15223c]/85 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-card relative group hover:border-amber-500/40 transition-all duration-300 md:col-span-2 max-w-3xl mx-auto"
        >
          <!-- Top Quote Icon and Star Rating -->
          <div class="flex items-center justify-between gap-4 mb-5">
            <div class="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Quote class="w-6 h-6 rtl:rotate-180" />
            </div>

            <!-- 5-Star Rating -->
            <div v-if="item.rating" class="flex items-center gap-1 text-amber-400">
              <Star
                v-for="star in item.rating"
                :key="star"
                class="w-4 h-4 fill-amber-400 text-amber-400"
              />
            </div>
          </div>

          <!-- Message Body -->
          <p class="text-base sm:text-lg text-slate-200 leading-relaxed italic mb-6">
            "{{ isRtl ? item.message.ar : item.message.en }}"
          </p>

          <!-- Client Footer Info -->
          <div class="pt-4 border-t border-slate-700/70 flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center gap-3">
              <!-- Avatar Initials -->
              <div class="w-11 h-11 rounded-full bg-gradient-to-br from-brand-600 to-accent-indigo text-white font-bold text-sm flex items-center justify-center shadow-md">
                {{ item.avatar || 'CL' }}
              </div>
              <div>
                <h4 class="text-sm font-bold text-white">
                  {{ isRtl ? item.clientName.ar : item.clientName.en }}
                </h4>
                <p class="text-xs text-slate-400">
                  {{ isRtl ? item.role.ar : item.role.en }}
                </p>
              </div>
            </div>

            <!-- Project / Service Badge -->
            <span class="text-xs font-mono px-3 py-1 rounded-lg bg-[#0d1527] text-brand-300 border border-slate-700">
              {{ isRtl ? item.projectOrService.ar : item.projectOrService.en }}
            </span>
          </div>

          <!-- Preview Draft Tag if unconfirmed -->
          <div v-if="item.isDraft" class="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-amber-300/80">
            <span class="inline-flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>{{ t.testimonials.draftNotice }}</span>
            </span>
            <span class="text-slate-400 font-mono text-[10px]">Confidential</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { testimonialsData } from '../../data/testimonials';
import { Quote, Star } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
</script>

