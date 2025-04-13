import AppButton from "../components/AppButton.vue.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import Faqs from "../components/Faqs.vue.mjs";
import FeedbackForm from "../components/FeedbackForm.vue.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = AppButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-25714322><section class="hero" data-v-25714322><div class="hero__wrap" data-v-25714322><div class="hero__title" data-v-25714322><h2 data-v-25714322>Лендинги (Landing Page)</h2><p data-v-25714322> Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений. </p><div class="hero__title-buttons" data-v-25714322>`);
      _push(ssrRenderComponent(_component_AppButton, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Обсудить проект`);
          } else {
            return [
              createTextVNode("Обсудить проект")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppButton, { type: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказать`);
          } else {
            return [
              createTextVNode("Заказать")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero__main-img" data-v-25714322><div class="hero__img" data-v-25714322></div></div></div></section>`);
      _push(ssrRenderComponent(Faqs, null, null, _parent));
      _push(ssrRenderComponent(FeedbackForm, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25714322"]]);
export {
  faq as default
};
//# sourceMappingURL=faq.vue.mjs.map
