<template>
  <section id="contact" class="py-16 md:py-24 bg-[#121d36]/30 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          {{ t.contact.sectionTitle }}
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ isRtl ? 'دعنا نبدأ مشروعك القادم معاً' : "Let's Build Your Next Project Together" }}
        </h2>
        <p class="text-sm sm:text-base text-slate-400">
          {{ t.contact.sectionSubtitle }}
        </p>
      </div>

      <!-- Main Layout: Contact Form (Left) & Direct Channels (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Contact Form Column (7 cols) -->
        <div class="lg:col-span-7 bg-[#15223c]/85 border border-slate-700/80 rounded-3xl p-6 sm:p-9 shadow-card">
          <div class="mb-6">
            <h3 class="text-lg font-bold text-white mb-1">
              {{ t.contact.formTitle }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-400">
              {{ t.contact.formDesc }}
            </p>
          </div>

          <!-- Success Alert -->
          <div
            v-if="submitStatus === 'success'"
            class="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn"
          >
            <CheckCircle2 class="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
            <div>
              <p class="font-bold text-emerald-200">{{ t.contact.successTitle }}</p>
              <p class="mt-0.5 text-emerald-300/90">{{ t.contact.successMsg }}</p>
            </div>
          </div>

          <!-- Error Alert -->
          <div
            v-if="submitStatus === 'error'"
            class="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn"
          >
            <AlertCircle class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
            <div>
              <p class="font-bold text-red-200">{{ t.contact.errorTitle }}</p>
              <p class="mt-0.5 text-red-300/90">{{ errorMessage || t.contact.errorMsg }}</p>
            </div>
          </div>

          <!-- Form Fields -->
          <form @submit.prevent="handleSubmit" class="space-y-4 text-left rtl:text-right">
            
            <!-- Honeypot anti-spam field (hidden from genuine users) -->
            <div class="hidden" aria-hidden="true">
              <input type="text" name="_gotcha" v-model="form.honeypot" tabindex="-1" autocomplete="off" />
            </div>

            <!-- Full Name & Email (2 Cols on desktop) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                  {{ t.contact.fullName }} <span class="text-red-400">*</span>
                </label>
                <input
                  v-model.trim="form.name"
                  type="text"
                  required
                  :placeholder="t.contact.fullNamePlaceholder"
                  class="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#0d1527] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                  {{ t.contact.email }} <span class="text-red-400">*</span>
                </label>
                <input
                  v-model.trim="form.email"
                  type="email"
                  required
                  :placeholder="t.contact.emailPlaceholder"
                  class="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#0d1527] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>
            </div>

            <!-- Phone / WhatsApp & Service Required (2 Cols) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                  {{ t.contact.phone }}
                </label>
                <input
                  v-model.trim="form.phone"
                  type="tel"
                  :placeholder="t.contact.phonePlaceholder"
                  class="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#0d1527] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-mono"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                  {{ t.contact.serviceRequired }}
                </label>
                <select
                  v-model="form.service"
                  class="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#0d1527] border border-slate-700/80 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all cursor-pointer"
                >
                  <option value="">{{ t.contact.selectService }}</option>
                  <option
                    v-for="srv in servicesData"
                    :key="srv.id"
                    :value="isRtl ? srv.title.ar : srv.title.en"
                  >
                    {{ isRtl ? srv.title.ar : srv.title.en }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Project Budget (Optional) -->
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                {{ t.contact.budget }}
              </label>
              <select
                v-model="form.budget"
                class="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#0d1527] border border-slate-700/80 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all cursor-pointer"
              >
                <option value="">{{ t.contact.selectBudget }}</option>
                <option
                  v-for="(option, oIdx) in t.contact.budgetOptions"
                  :key="oIdx"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>

            <!-- Project Details Textarea -->
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                {{ t.contact.projectDetails }} <span class="text-red-400">*</span>
              </label>
              <textarea
                v-model.trim="form.message"
                required
                rows="4"
                :placeholder="t.contact.projectDetailsPlaceholder"
                class="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#0d1527] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-y"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3 px-6 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 disabled:bg-slate-700 text-white transition-all shadow-glow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                <Loader2 v-if="isSubmitting" class="w-4 h-4 animate-spin" />
                <Send v-else class="w-4 h-4 rtl:rotate-180" />
                <span>{{ isSubmitting ? t.contact.sending : t.contact.sendMessage }}</span>
              </button>
            </div>

          </form>
        </div>

        <!-- Direct Contact Channels & Availability Column (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          
          <div class="bg-[#15223c]/85 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-card space-y-4">
            <h3 class="text-sm font-bold uppercase tracking-wider text-brand-400">
              {{ t.contact.directChannels }}
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              {{ isRtl 
                ? 'تفضل التواصل المباشر أو لديك استفسار عاجل؟ يمكنك مراسلتي في أي وقت عبر القنوات التالية:' 
                : 'Prefer a direct conversation or have an urgent project deadline? Reach out anytime via:' 
              }}
            </p>

            <!-- WhatsApp Card -->
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-2xl bg-[#0d1527] border border-slate-700 hover:border-emerald-500/60 flex items-center justify-between group transition-all"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageCircle class="w-5 h-5" />
                </div>
                <div>
                  <span class="text-[11px] font-semibold text-slate-400 block uppercase">WhatsApp</span>
                  <span class="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                    {{ profileData.contact.phone }}
                  </span>
                </div>
              </div>
              <ExternalLink class="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            <!-- Direct Email Card -->
            <div class="p-4 rounded-2xl bg-[#0d1527] border border-slate-700 flex items-center justify-between group">
              <div class="flex items-center gap-3 truncate mr-2 rtl:mr-0 rtl:ml-2">
                <div class="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail class="w-5 h-5" />
                </div>
                <div class="truncate">
                  <span class="text-[11px] font-semibold text-slate-400 block uppercase">{{ t.contact.email }}</span>
                  <a
                    :href="'mailto:' + profileData.contact.email"
                    class="text-xs sm:text-sm font-bold text-white hover:text-brand-400 transition-colors truncate block"
                  >
                    {{ profileData.contact.email }}
                  </a>
                </div>
              </div>
              <button
                @click="copyText(profileData.contact.email, 'email')"
                class="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex-shrink-0 cursor-pointer border border-slate-700"
              >
                {{ copiedField === 'email' ? t.contact.copied : t.contact.copy }}
              </button>
            </div>

            <!-- Phone Call Card -->
            <div class="p-4 rounded-2xl bg-[#0d1527] border border-slate-700 flex items-center justify-between group">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone class="w-5 h-5" />
                </div>
                <div>
                  <span class="text-[11px] font-semibold text-slate-400 block uppercase">{{ t.contact.phone }}</span>
                  <a
                    :href="'tel:' + profileData.contact.phone"
                    class="text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition-colors font-mono"
                  >
                    {{ profileData.contact.phone }}
                  </a>
                </div>
              </div>
              <button
                @click="copyText(profileData.contact.phone, 'phone')"
                class="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex-shrink-0 cursor-pointer border border-slate-700"
              >
                {{ copiedField === 'phone' ? t.contact.copied : t.contact.copy }}
              </button>
            </div>

            <!-- Professional Networks -->
            <div class="pt-3 border-t border-slate-700/60 flex items-center justify-between">
              <a
                :href="profileData.contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 py-2 px-3 rounded-xl bg-[#0d1527] hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 flex items-center justify-center gap-2 mr-2 rtl:mr-0 rtl:ml-2 transition-colors"
              >
                <Linkedin class="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a
                :href="profileData.contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 py-2 px-3 rounded-xl bg-[#0d1527] hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Github class="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          <!-- Trust & SLA Guarantee Card -->
          <div class="p-5 rounded-3xl bg-gradient-to-br from-[#15223c] to-[#0d1527] border border-brand-500/30 text-xs text-slate-300 space-y-2">
            <div class="flex items-center gap-2 text-brand-300 font-bold">
              <Clock class="w-4 h-4 text-brand-400" />
              <span>{{ isRtl ? 'سرعة الرد والالتزام' : 'Response Time & Commitment' }}</span>
            </div>
            <p class="leading-relaxed text-slate-400">
              {{ isRtl
                ? 'أقوم بالرد على جميع الرسائل واستفسارات المشاريع خلال أقل من 24 ساعة، مع إمكانية عقد جلسة استشارية سريعة عبر Google Meet / Zoom لمناقشة المتطلبات الفنية.'
                : 'All inquiries receive a response within 24 hours. We can arrange a quick technical discovery call via Google Meet / Zoom to discuss architecture and scope.'
              }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import { profileData } from '../../data/profile';
import { servicesData } from '../../data/services';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink,
  Clock 
} from 'lucide-vue-next';

const props = defineProps<{
  preselectedServiceId?: string;
}>();

const { isRtl, currentLang, t } = useLanguage();

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  honeypot: '',
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');
const errorMessage = ref('');
const copiedField = ref<string | null>(null);

// Watch for preselected service from Services Section CTA
watch(
  () => props.preselectedServiceId,
  (newId) => {
    if (newId) {
      const match = servicesData.find((s) => s.id === newId);
      if (match) {
        form.value.service = isRtl.value ? match.title.ar : match.title.en;
      }
    }
  },
  { immediate: true }
);

// WhatsApp quick conversation link
const whatsappUrl = computed(() => {
  const phone = profileData.contact.phone.replace(/[^0-9]/g, '');
  const msg = encodeURIComponent(
    currentLang.value === 'ar'
      ? `مرحباً مهندس عبدالرحمن، أود طلب استشارة لمشروع ${form.value.service ? `(${form.value.service})` : ''}.`
      : `Hello Abdelrahman, I would like to inquire about ${form.value.service || 'a project'}.`
  );
  return `https://wa.me/${phone}?text=${msg}`;
});

const copyText = (text: string, field: string) => {
  navigator.clipboard.writeText(text);
  copiedField.value = field;
  setTimeout(() => {
    if (copiedField.value === field) {
      copiedField.value = null;
    }
  }, 2000);
};

// Form submission with Formspree endpoint & mailto fallback
const handleSubmit = async () => {
  // Anti-spam Honeypot Check
  if (form.value.honeypot) {
    console.warn('Spam submission detected by honeypot.');
    submitStatus.value = 'success';
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = 'idle';
  errorMessage.value = '';

  try {
    // We send payload to Formspree endpoint (free, reliable serverless form delivery to abdelrahman.mohsen.elsaied94@gmail.com)
    const endpoint = 'https://formspree.io/f/mqaebrvw';

    const payload = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone || 'N/A',
      service: form.value.service || 'General Inquiry',
      budget: form.value.budget || 'Not specified',
      message: form.value.message,
      _subject: `New Portfolio Project Inquiry: ${form.value.service || 'Backend'} (${form.value.name})`,
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      submitStatus.value = 'success';
      form.value = {
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        honeypot: '',
      };
    } else {
      // In case of any rate limit or API issue, fall back seamlessly
      throw new Error('API submission error');
    }
  } catch (err) {
    console.error('Contact submission error:', err);
    // Provide a graceful fallback: open formatted mailto so the client never loses their message
    submitStatus.value = 'error';
    errorMessage.value = isRtl.value
      ? 'حدث بطء في الاتصال. تم تجهيز رسالتك للإرسال عبر البريد الإلكتروني أو الواتساب مباشرة.'
      : 'Submission encountered a network delay. You can send your inquiry directly via email or WhatsApp.';

    // Create instant fallback mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry — ${form.value.service || 'Backend Project'}`);
    const body = encodeURIComponent(
      `Name: ${form.value.name}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}\nService: ${form.value.service}\nBudget: ${form.value.budget}\n\nDetails:\n${form.value.message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
  } finally {
    isSubmitting.value = false;
  }
};
</script>
