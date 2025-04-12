<template>
  <div class="page-container">
    <section class="hero">
      <div class="hero__wrap">
        <div class="hero__title">
          <h2>Лендинги (Landing Page)</h2>
          <p>
            Одностраничный сайт для продаж, заявок или акций. Фокусирует
            внимание на цели, повышая конверсию. Идеален для быстрых решений.
          </p>


          <div class="hero__title-buttons">
            <AppButton type="1">Обсудить проект</AppButton>
            <AppButton type="2">Заказать</AppButton>
          </div>
        </div>
        
        <div class="hero__main-img">
          <div class="hero__img">
          </div>

        </div>
      </div>
    </section>

    <Faqs/>
    <FeedbackForm/>
  </div>
</template>

<script setup>
  import Faqs from '~/components/Faqs.vue';
  import FeedbackForm from '~/components/FeedbackForm.vue';
</script>

<style scoped>
.page-container {
  padding: 0;
  margin: 0;
  font-family: "DM Sans", sans-serif;
  
  line-height: 1.3;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
  overflow: visible;
}

.hero__wrap {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

.hero__title{
    margin-left: 150px;
    max-width: 750px;
    height: 1100px;
    padding: 120px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-image: var(--background-image-faq);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h2{
        color: var(--text-hover-color);
        font-weight: 700;
        font-size: clamp(1.5rem, 0.955rem + 4.36vw, 3rem);
    }

    p{
        color: var(--text-hover-color);
        font-weight: 700;
        font-size: clamp(1.125rem, 0.989rem + 1.09vw, 1.5rem);
        padding-bottom: 30px;
    }

    .hero__title-buttons{
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 20px;
      flex-wrap: wrap;
    }
}

.hero__main-img{
  max-width: 473px;
  padding: 40px 0 40px 40px;
  width: 100%;
  max-height: 850px;
  margin-top: 100px;
  border-bottom: 5px solid var(--text-hover-color);
  border-top: 5px solid var(--text-hover-color);
  border-left: 5px solid var(--text-hover-color);
}
.hero__img{
  
  height: 100%;
  background-image: var(--background-image-faq-hero);
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
}


</style>
