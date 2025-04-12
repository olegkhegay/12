<template>
  <div class="faq-accordion">

    <section class="faq-title">
        <h1>Ответы на часто задаваемые вопросы</h1>
        <h3>Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений.</h3>
    </section>

    <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
      <button class="faq-question" @click="toggle(index)">
        {{ item.question }}
        <span class="faq-icon" :class="{ open: item.isOpen }">
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path
              d="M12 5v14M5 12h14"
              stroke= "var(--btn2-color-text)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>

      <transition @enter="enterAnimation" @leave="leaveAnimation">
        <div v-show="item.isOpen" class="faq-answer">
          <p>{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "FaqAccordion",
  data() {
    return {
      faqItems: [
        {
          question: "Что такое лендинг?",
          answer:
            "Лендинг (Landing Page) — это одностраничный сайт, созданный для решения конкретной задачи: продажи продукта, сбора заявок или продвижения акции. Он фокусирует внимание пользователя на одном предложении.",
          isOpen: false,
        },
        {
          question: "Чем лендинг отличается от обычного сайта?",
          answer:
            "Главная цель лендинга – сфокусировать внимание пользователя на конкретном предложении.",
          isOpen: false,
        },
        {
          question: "Сколько времени нужно на создание лендинга?",
          answer:
            "Зависит от сложности, но в среднем 2-3 дня, включая базовую оптимизацию.",
          isOpen: false,
        },
        {
          question: "Можно ли изменить лендинг после запуска?",
          answer: "Да, как правило, он легко редактируется и дорабатывается.",
          isOpen: false,
        },
        {
          question: "Как лендинг помогает увеличить продажи?",
          answer:
            "Благодаря четкой структуре, фокусировке на оффере и призывам к действию.",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.faqItems.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false;
        }
      });
      this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
    },
    enterAnimation(el) {
      gsap.set(el, { height: 0, opacity: 0 });
      const fullHeight = el.scrollHeight;
      gsap.to(el, {
        duration: 0.3,
        height: fullHeight,
        opacity: 1,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(el, { height: "auto" });
        },
      });
    },
    // Добавляем колбэк done, чтобы Vue Transition дождался завершения анимации
    leaveAnimation(el, done) {
      const currentHeight = el.scrollHeight;
      gsap.set(el, { height: currentHeight, opacity: 1 });
      gsap.to(el, {
        duration: 0.3,
        height: 0,
        opacity: 0,
        ease: "power2.out",
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.faq-title{
    margin-top: 100px;
    max-width: 690px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-bottom: 60px;
    gap: 30px;

    h1{
        font-size: clamp(1.5rem, 0.632rem + 6.32vw, 3rem);
        color: var(--text-hover-color);
        font-weight: 700;
    }

    h3{
        font-size: clamp(1.125rem, 0.908rem + 1.58vw, 1.5rem);
        font-weight: 700;
    }
}

.faq-accordion {
  max-width: 1050px;
  margin: 0 auto;
  padding: 100px 0 100px 0;
}

.faq-item {
  border: 5px solid var(--text-hover-color);
  padding: 50px;
  margin-bottom: 30px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  font-size: clamp(1.5rem, 1.318rem + 0.91vw, 2rem);
  color: var(--text-hover-color);
  font-weight: 700;
  cursor: pointer;
}

.faq-icon {
  display: flex;
  align-items: center;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.faq-icon.open {
  transform: rotate(45deg);
}

.faq-answer {
  overflow: hidden !important;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.faq-answer::-webkit-scrollbar {
  display: none;
}

.faq-answer p {
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
  font-weight: 700;
}
</style>
