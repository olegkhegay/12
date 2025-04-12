<template>
  <FeedbackForm />

  <div class="google__map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2995.3457773206105!2d69.30865842889627!3d41.34483746078554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1744430637148!5m2!1sru!2s"
        width="100%"
        height="700"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
  </div>
</template>

<script setup>
import FeedbackForm from "~/components/FeedbackForm.vue";
</script>

<style scoped>
    .google__map{
        border-bottom: 5px dashed var(--text-hover-color);
        border-top: 5px dashed var(--text-hover-color);
        padding: 2px;
    }
</style>
