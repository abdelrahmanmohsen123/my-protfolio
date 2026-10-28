<template>
  <div class="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-sans transition-colors duration-300">
    <!-- Navbar Header -->
    <Navbar @open-cv-modal="isCvModalOpen = true" />

    <!-- Main Content Area -->
    <main class="flex-grow">
      <HeroSection @open-cv-modal="isCvModalOpen = true" />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <LearningSection />
      <ContactSection />
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
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import EducationSection from './components/sections/EducationSection.vue';
import LearningSection from './components/sections/LearningSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import CvModal from './components/cv/CvModal.vue';

const isCvModalOpen = ref(false);
</script>
