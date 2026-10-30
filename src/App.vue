<template>
  <div class="min-h-screen bg-[#0d1527] text-slate-100 flex flex-col font-sans transition-colors duration-200 relative selection:bg-brand-500 selection:text-white">
    <!-- Smooth Animated Ambient Movement in Background -->
    <AnimatedBackground />

    <!-- Navbar Header with Dynamic Navigation -->
    <Navbar @open-cv-modal="isCvModalOpen = true" />

    <!-- Main Content Area: Enhanced Client-Focused Sections -->
    <main class="flex-grow">
      <!-- 1. Hero: Two-column split layout with personal photo and clear CTAs -->
      <HeroSection @open-cv-modal="isCvModalOpen = true" />
      
      <!-- 2. Services: Client-focused service cards with benefit lists & CTAs -->
      <ServicesSection @select-service="handleSelectService" />

      <!-- 3. Projects: Commercial platforms with verified contributions -->
      <ProjectsSection />

      <!-- 4. Skills: Categorized clean technology badges -->
      <SkillsSection />

      <!-- 5. About: Professional engineering background -->
      <AboutSection />
      
      <!-- 6. Experience: Compact timeline for Arab Apps & CyperFace -->
      <ExperienceSection />

      <!-- 7. Client Testimonials: Trust-building feedback & ratings -->
      <TestimonialsSection />

      <!-- 8. Education & Scholarships: ITI, NTI & Engineering degree -->
      <EducationSection />
      
      <!-- 9. Contact: Functional project inquiry form + direct channels -->
      <ContactSection :preselected-service-id="selectedServiceId" />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- ATS CV Modal with 4 versions -->
    <CvModal
      :is-open="isCvModalOpen"
      @close="isCvModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AnimatedBackground from './components/ui/AnimatedBackground.vue';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ServicesSection from './components/sections/ServicesSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import TestimonialsSection from './components/sections/TestimonialsSection.vue';
import EducationSection from './components/sections/EducationSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import CvModal from './components/cv/CvModal.vue';

const isCvModalOpen = ref(false);
const selectedServiceId = ref<string>('');

const handleSelectService = (serviceId: string) => {
  selectedServiceId.value = serviceId;
};
</script>
