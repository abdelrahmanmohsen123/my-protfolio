<template>
  <div class="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-sans transition-colors duration-200">
    <!-- Navbar Header -->
    <Navbar @open-cv-modal="isCvModalOpen = true" />

    <!-- Main Content Area: Focused 6 Sections -->
    <main class="flex-grow">
      <!-- 1. Hero with Professional Photo -->
      <HeroSection @open-cv-modal="isCvModalOpen = true" />
      
      <!-- 2. About (3-4 concise lines) -->
      <AboutSection />
      
      <!-- 3. Skills (Clean organized badges) -->
      <SkillsSection />
      
      <!-- 4. Featured Projects (Name, 1-2 line description, main tech, view button) -->
      <ProjectsSection />
      
      <!-- 5. Experience (Compact timeline) -->
      <ExperienceSection />
      
      <!-- 6. Contact (Simple clear options) -->
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
import ContactSection from './components/sections/ContactSection.vue';
import CvModal from './components/cv/CvModal.vue';

const isCvModalOpen = ref(false);
</script>
