import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { useAutoAnimate } from "@formkit/auto-animate/vue";
import Footer from "../components/Footer.vue.mjs";
import logoImg from "../assets/images/DevX.png.mjs";
import tgImg from "../_virtual/virtual_public5.mjs";
import themeImg from "../_virtual/virtual_public6.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
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
export {
  _default as default
};
//# sourceMappingURL=default.vue.mjs.map
