import { gsap } from "gsap";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  name: "FaqAccordion",
  data() {
    return {
      faqItems: [
        {
          question: "Что такое лендинг?",
          answer: "Лендинг (Landing Page) — это одностраничный сайт, созданный для решения конкретной задачи: продажи продукта, сбора заявок или продвижения акции. Он фокусирует внимание пользователя на одном предложении.",
          isOpen: false
        },
        {
          question: "Чем лендинг отличается от обычного сайта?",
          answer: "Главная цель лендинга – сфокусировать внимание пользователя на конкретном предложении.",
          isOpen: false
        },
        {
          question: "Сколько времени нужно на создание лендинга?",
          answer: "Зависит от сложности, но в среднем 2-3 дня, включая базовую оптимизацию.",
          isOpen: false
        },
        {
          question: "Можно ли изменить лендинг после запуска?",
          answer: "Да, как правило, он легко редактируется и дорабатывается.",
          isOpen: false
        },
        {
          question: "Как лендинг помогает увеличить продажи?",
          answer: "Благодаря четкой структуре, фокусировке на оффере и призывам к действию.",
          isOpen: false
        }
      ]
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
        }
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
        onComplete: done
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-accordion" }, _attrs))} data-v-0bed32e8><section class="faq-title" data-v-0bed32e8><h1 data-v-0bed32e8>Ответы на часто задаваемые вопросы</h1><h3 data-v-0bed32e8>Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений.</h3></section><!--[-->`);
  ssrRenderList($data.faqItems, (item, index) => {
    _push(`<div class="faq-item" data-v-0bed32e8><button class="faq-question" data-v-0bed32e8>${ssrInterpolate(item.question)} <span class="${ssrRenderClass([{ open: item.isOpen }, "faq-icon"])}" data-v-0bed32e8><svg width="40" height="40" viewBox="0 0 24 24" data-v-0bed32e8><path d="M12 5v14M5 12h14" stroke="var(--btn2-color-text)" stroke-width="2" stroke-linecap="round" data-v-0bed32e8></path></svg></span></button><div style="${ssrRenderStyle(item.isOpen ? null : { display: "none" })}" class="faq-answer" data-v-0bed32e8><p data-v-0bed32e8>${ssrInterpolate(item.answer)}</p></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faqs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Faqs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0bed32e8"]]);
export {
  Faqs as default
};
//# sourceMappingURL=Faqs.vue.mjs.map
