<template>
  <section class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.skills.learningBadge }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {{ t.learning.sectionTitle }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          {{ t.learning.intro }}
        </p>
      </div>

      <!-- Learning Tracks Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Track 1: Linux & DevOps -->
        <div class="bg-gradient-to-b from-dark-850 to-dark-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 sm:p-7 space-y-4 shadow-card transition-all">
          <div class="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Terminal class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-white">
            {{ isRtl ? 'إدارة أنظمة لينكس والـ DevOps' : 'Advanced Linux & DevOps' }}
          </h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            {{ isRtl
              ? 'التعمق في إدارة خدمات خوادم لينكس، وأتمتة النشر المستمر (CI/CD)، والتعامل مع العمليات المتقدمة وتهيئة أمان الخوادم.'
              : 'Deepening Linux server administration, automation workflows, CI/CD pipeline authoring, system monitoring, and defense-in-depth security.'
            }}
          </p>
          <div class="pt-2 flex flex-wrap gap-1.5">
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">Linux Bash</span>
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">CI/CD</span>
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">Nginx Hardening</span>
          </div>
        </div>

        <!-- Track 2: Containers & Cloud -->
        <div class="bg-gradient-to-b from-dark-850 to-dark-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 sm:p-7 space-y-4 shadow-card transition-all">
          <div class="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Cloud class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-white">
            {{ isRtl ? 'حاويات Docker وأساسيات AWS' : 'Docker & AWS Fundamentals' }}
          </h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            {{ isRtl
              ? 'بناء بيئات التطوير المعزولة متعددة الحاويات بـ Docker Compose، ودراسة خدمات السحابة الأساسية (EC2, S3, RDS, IAM).'
              : 'Multi-container orchestration with Docker Compose, cloud resource provisioning, storage buckets, and managed relational database tiers on AWS.'
            }}
          </p>
          <div class="pt-2 flex flex-wrap gap-1.5">
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">Docker</span>
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">AWS EC2/S3</span>
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">RDS</span>
          </div>
        </div>

        <!-- Track 3: Data Analysis & Metrics -->
        <div class="bg-gradient-to-b from-dark-850 to-dark-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 sm:p-7 space-y-4 shadow-card transition-all md:col-span-2 lg:col-span-1">
          <div class="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <BarChart3 class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-white">
            {{ isRtl ? 'تحليل البيانات ومقاييس الأداء' : 'Data Analytics & Performance Metrics' }}
          </h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            {{ isRtl
              ? 'دراسة آليات استخلاص البيانات الضخمة، ونمذجة المؤشرات الاقتصادية والتشغيلية، وتحسين استعلامات التقارير التجميعية في قواعد البيانات.'
              : 'Studying analytical data extraction, operational KPI modeling, data visualization patterns, and high-volume aggregate query design.'
            }}
          </p>
          <div class="pt-2 flex flex-wrap gap-1.5">
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">Data Modeling</span>
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">Aggregation SQL</span>
            <span class="px-2.5 py-1 rounded bg-dark-950 text-amber-200 text-xs font-mono border border-slate-800">Analytics</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { Terminal, Cloud, BarChart3 } from 'lucide-vue-next';

const { isRtl, t } = useLanguage();
</script>
