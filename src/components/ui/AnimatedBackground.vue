<template>
  <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
    <!-- Subtle Grid Overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-60"></div>

    <!-- Soft Radial Gradient Vignette -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#0d1527]/30 via-transparent to-[#0a101d]/80"></div>

    <!-- Animated Ambient Orb 1 (Cyan/Sky) -->
    <div
      class="absolute -top-20 -left-20 w-[480px] h-[480px] md:w-[650px] md:h-[650px] rounded-full bg-sky-500/15 blur-[130px] animate-float-slow"
    ></div>

    <!-- Animated Ambient Orb 2 (Indigo/Violet) -->
    <div
      class="absolute top-1/3 -right-20 w-[420px] h-[420px] md:w-[580px] md:h-[580px] rounded-full bg-indigo-500/12 blur-[140px] animate-float-reverse"
    ></div>

    <!-- Animated Ambient Orb 3 (Emerald/Teal) -->
    <div
      class="absolute -bottom-24 left-1/4 w-[380px] h-[380px] md:w-[520px] md:h-[520px] rounded-full bg-emerald-500/10 blur-[120px] animate-float-pulse"
    ></div>
  </div>
</template>

<script setup lang="ts">
// Ambient animated backdrop
</script>

