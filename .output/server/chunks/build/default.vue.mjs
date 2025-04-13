import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { mergeProps, ref, computed, useSSRContext, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { useAutoAnimate } from '@formkit/auto-animate/vue';
import gsap from 'gsap';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
import { _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

gsap.registerPlugin(ScrollTrigger);
const _sfc_main$1 = {
  name: "Footer",
  setup() {
    ref(null);
    ref([]);
    ref(null);
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return {
      currentYear
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-b230418c><div class="footer-line" data-v-b230418c></div><div class="footer-container" data-v-b230418c><div class="footer-content" data-v-b230418c><div class="footer-column" data-v-b230418c><h3 data-v-b230418c>Контактная информация</h3><ul data-v-b230418c><li data-v-b230418c>Адрес: г. Москва, ул. Примерная, д. 123</li><li data-v-b230418c>Телефон: +7 (999) 123-45-67</li><li data-v-b230418c>Email: <a href="mailto:info@webdev-site.ru" data-v-b230418c>info@webdev-site.ru</a></li><li data-v-b230418c>Режим работы: Пн-Пт: 9:00 - 18:00</li></ul></div><div class="footer-column" data-v-b230418c><h3 data-v-b230418c>Мы в соцсетях</h3><ul data-v-b230418c><li data-v-b230418c><a href="#" data-v-b230418c>VK</a></li><li data-v-b230418c><a href="#" data-v-b230418c>Telegram</a></li><li data-v-b230418c><a href="#" data-v-b230418c>Instagram</a></li><li data-v-b230418c><a href="#" data-v-b230418c>YouTube</a></li></ul></div><div class="footer-column" data-v-b230418c><h3 data-v-b230418c>Быстрые ссылки</h3><ul data-v-b230418c><li data-v-b230418c><a href="#" data-v-b230418c>Главная</a></li><li data-v-b230418c><a href="#" data-v-b230418c>Услуги</a></li><li data-v-b230418c><a href="#" data-v-b230418c>Портфолио</a></li><li data-v-b230418c><a href="#" data-v-b230418c>О нас</a></li><li data-v-b230418c><a href="#" data-v-b230418c>Блог</a></li><li data-v-b230418c><a href="#" data-v-b230418c>Контакты</a></li></ul></div></div><div class="footer-bottom" data-v-b230418c><p class="footer-legal" data-v-b230418c>Юридическая информация</p><p class="footer-copyright" data-v-b230418c>©${ssrInterpolate($setup.currentYear)} DevX. Все права защищены · <a href="#" data-v-b230418c>Политика конфиденциальности</a> · <a href="#" data-v-b230418c>Пользовательское соглашение</a></p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b230418c"]]);

const logoImg = "data:image/png;base64,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";

const tgImg = publicAssetsURL("/TG.png");

const themeImg = publicAssetsURL("/Theme.png");

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const logoImage = ref(logoImg);
    const tgImage = ref(tgImg);
    const themeImage = ref(themeImg);
    const vAutoAnimate = useAutoAnimate({
      duration: 300,
      easing: "ease-in-out"
    });
    const mobileMenuOpen = ref(false);
    const isClosing = ref(false);
    ref(null);
    ref(null);
    ref(null);
    const closeMobileMenu = () => {
      isClosing.value = true;
      setTimeout(() => {
        mobileMenuOpen.value = false;
        isClosing.value = false;
        (void 0).body.style.overflow = "";
      }, 500);
    };
    ref("white");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col app-container" }, _attrs))} data-v-19cf03a2><header class="header" data-v-19cf03a2><div class="header-container" data-v-19cf03a2><div${ssrRenderAttrs(mergeProps({ class: "logo" }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-19cf03a2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", logoImage.value)} alt="DevX" class="dark:invert" data-v-19cf03a2${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: logoImage.value,
                alt: "DevX",
                class: "dark:invert"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav${ssrRenderAttrs(mergeProps({ class: "nav" }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-19cf03a2><li data-v-19cf03a2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/orders" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказы`);
          } else {
            return [
              createTextVNode("Заказы")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-19cf03a2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/licenses" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Лицензии`);
          } else {
            return [
              createTextVNode("Лицензии")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-19cf03a2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`О компании`);
          } else {
            return [
              createTextVNode("О компании")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-19cf03a2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacts" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Контакты`);
          } else {
            return [
              createTextVNode("Контакты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></nav><div${ssrRenderAttrs(mergeProps({ class: "contacts" }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-19cf03a2><a href="tel:+998941452332" data-v-19cf03a2>+998941452332</a><a id="tg" href="#" data-v-19cf03a2><img${ssrRenderAttr("src", tgImage.value)} alt="Telegram" data-v-19cf03a2></a><button id="theme-toggle" data-v-19cf03a2><img${ssrRenderAttr("src", themeImage.value)} alt="Theme Toggle" data-v-19cf03a2></button></div><div class="theme-animation-container" data-v-19cf03a2><svg class="comet-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" preserveAspectRatio="none" data-v-19cf03a2><defs data-v-19cf03a2><linearGradient id="cometTailDark" x1="0%" y1="0%" x2="100%" y2="0%" data-v-19cf03a2><stop offset="0%" stop-color="#00ffff" stop-opacity="1" data-v-19cf03a2></stop><stop offset="40%" stop-color="#4169e1" stop-opacity="0.8" data-v-19cf03a2></stop><stop offset="100%" stop-color="#ffffff" stop-opacity="0" data-v-19cf03a2></stop></linearGradient><linearGradient id="cometTailLight" x1="0%" y1="0%" x2="100%" y2="0%" data-v-19cf03a2><stop offset="0%" stop-color="#000000" stop-opacity="1" data-v-19cf03a2></stop><stop offset="40%" stop-color="#333333" stop-opacity="0.8" data-v-19cf03a2></stop><stop offset="100%" stop-color="#666666" stop-opacity="0" data-v-19cf03a2></stop></linearGradient><filter id="glowDark" x="-50%" y="-50%" width="200%" height="200%" data-v-19cf03a2><feGaussianBlur stdDeviation="6" result="blur" data-v-19cf03a2></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-19cf03a2></feComposite></filter><filter id="glowLight" x="-50%" y="-50%" width="200%" height="200%" data-v-19cf03a2><feGaussianBlur stdDeviation="3" result="blur" data-v-19cf03a2></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-19cf03a2></feComposite></filter></defs><g class="comet-dark-theme" data-v-19cf03a2><path class="comet-tail" d="M20,25 L-230,25" stroke="url(#cometTailDark)" stroke-width="15" stroke-linecap="round" data-v-19cf03a2></path><path d="M20,25 L-180,15" stroke="url(#cometTailDark)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-19cf03a2></path><path d="M20,25 L-180,35" stroke="url(#cometTailDark)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-19cf03a2></path><circle class="comet-head" cx="20" cy="25" r="12" fill="#ffffff" filter="url(#glowDark)" data-v-19cf03a2></circle></g><g class="comet-light-theme" data-v-19cf03a2><path class="comet-tail" d="M20,25 L-230,25" stroke="url(#cometTailLight)" stroke-width="15" stroke-linecap="round" data-v-19cf03a2></path><path d="M20,25 L-180,15" stroke="url(#cometTailLight)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-19cf03a2></path><path d="M20,25 L-180,35" stroke="url(#cometTailLight)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-19cf03a2></path><circle class="comet-head" cx="20" cy="25" r="12" fill="#000000" filter="url(#glowLight)" data-v-19cf03a2></circle></g></svg><div style="${ssrRenderStyle({ "display": "none" })}" data-v-19cf03a2><svg id="star-template-dark" viewBox="0 0 24 24" width="100%" height="100%" data-v-19cf03a2><path d="M12,1.5l2.4,7.4h7.8l-6.3,4.6l2.4,7.4L12,16.3l-6.3,4.6l2.4-7.4L1.8,8.9h7.8L12,1.5z" fill="#00ffff" data-v-19cf03a2></path><filter id="star-glow-dark" data-v-19cf03a2><feGaussianBlur stdDeviation="1" result="blur" data-v-19cf03a2></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-19cf03a2></feComposite></filter></svg><svg id="star-template-light" viewBox="0 0 24 24" width="100%" height="100%" data-v-19cf03a2><path d="M12,1.5l2.4,7.4h7.8l-6.3,4.6l2.4,7.4L12,16.3l-6.3,4.6l2.4-7.4L1.8,8.9h7.8L12,1.5z" fill="#000000" data-v-19cf03a2></path><filter id="star-glow-light" data-v-19cf03a2><feGaussianBlur stdDeviation="1" result="blur" data-v-19cf03a2></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-19cf03a2></feComposite></filter></svg></div><div class="comet-trail" data-v-19cf03a2></div><div class="stars-container" data-v-19cf03a2><!--[-->`);
      ssrRenderList(20, (n) => {
        _push(`<div class="${ssrRenderClass([`star-${n}`, "star"])}" data-v-19cf03a2></div>`);
      });
      _push(`<!--]--></div></div><div class="header__burger-menu" data-v-19cf03a2><div class="burger-icon" data-v-19cf03a2></div></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["mobile-menu", { "closing": isClosing.value }]
        }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-19cf03a2><nav class="mobile-nav" data-v-19cf03a2><li data-v-19cf03a2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/orders"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Заказы`);
            } else {
              return [
                createTextVNode("Заказы")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-19cf03a2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/licenses"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Лицензии`);
            } else {
              return [
                createTextVNode("Лицензии")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-19cf03a2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/about"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`О компании`);
            } else {
              return [
                createTextVNode("О компании")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-19cf03a2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/contacts"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Контакты`);
            } else {
              return [
                createTextVNode("Контакты")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></nav><div class="mobile-contacts" data-v-19cf03a2><a href="tel:+998941452332" data-v-19cf03a2>+998941452332</a><a id="mobile-tg" href="#" data-v-19cf03a2><img${ssrRenderAttr("src", tgImage.value)} alt="Telegram" data-v-19cf03a2></a><button id="mobile-theme-toggle" data-v-19cf03a2><img${ssrRenderAttr("src", themeImage.value)} alt="Theme Toggle" data-v-19cf03a2></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="flex-grow main-content" data-v-19cf03a2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19cf03a2"]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
