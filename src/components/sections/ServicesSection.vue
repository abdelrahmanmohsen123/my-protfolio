<template>
  <section id="services" class="py-16 md:py-24 border-b border-slate-900/60 bg-[#121d36]/25 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.services.sectionTitle }}
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ isRtl ? 'حلول برمجية متكاملة تركز على نمو أعمالك' : 'What I Can Deliver For Your Business' }}
        </h2>
        <p class="text-sm sm:text-base text-slate-400">
          {{ t.services.sectionSubtitle }}
        </p>
      </div>

      <!-- Services Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in servicesData"
          :key="service.id"
          class="bg-[#15223c]/85 border border-slate-700/80 hover:border-brand-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-card hover:shadow-glow-sm relative"
        >
          <div class="space-y-4">
            <!-- Icon -->
            <div class="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
              <component :is="getIcon(service.iconName)" class="w-6 h-6" />
            </div>

            <!-- Title & Short Description -->
            <div>
              <h3 class="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                {{ isRtl ? service.title.ar : service.title.en }}
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {{ isRtl ? service.shortDesc.ar : service.shortDesc.en }}
              </p>
            </div>

            <!-- Client Benefits List -->
            <div class="pt-3 border-t border-slate-700/60 space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                {{ isRtl ? 'المزايا والقيمة لعملك:' : 'Client Value & Benefits:' }}
              </span>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li
                  v-for="(benefit, bIdx) in service.benefits"
                  :key="bIdx"
                  class="flex items-start gap-2"
                >
                  <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span class="leading-relaxed">{{ isRtl ? benefit.ar : benefit.en }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card Bottom Action: Request This Service -->
          <div class="pt-5 mt-5 border-t border-slate-700/60">
            <button
              @click="handleSelectService(service.id)"
              class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0d1527] hover:bg-brand-600 text-slate-200 hover:text-white border border-slate-700 hover:border-brand-500 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group/btn"
            >
              <span>{{ t.services.requestService }}</span>
              <ArrowRight class="w-3.5 h-3.5 rtl:rotate-180 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage';
import { servicesData } from '../../data/services';
import { 
  Server, 
  Workflow, 
  LayoutDashboard, 
  Wrench, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'select-service', serviceId: string): void;
}>();

const { isRtl, t } = useLanguage();

const getIcon = (name: string) => {
  switch (name) {
    case 'Server': return Server;
    case 'Workflow': return Workflow;
    case 'LayoutDashboard': return LayoutDashboard;
    case 'Wrench': return Wrench;
    case 'Database': return Database;
    case 'Cpu': return Cpu;
    default: return Server;
  }
};

const handleSelectService = (serviceId: string) => {
  emit('select-service', serviceId);
  const contactElem = document.getElementById('contact');
  if (contactElem) {
    contactElem.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
