import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { F as FeedbackForm } from './FeedbackForm.vue.mjs';
import { C as CompanyNumbers, T as TeamSlider } from './CompanyNumbers.vue.mjs';
import { A as AppButton } from './AppButton.vue.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'gsap';
import '../_/ScrollTrigger.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import 'vue-router';

const _imports_0 = "" + __buildAssetsURL("Command.Cz1jwC24.png");

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="page-container" data-v-7527bbbb><section class="hero" data-v-7527bbbb><div class="hero__container" data-v-7527bbbb><h1 data-v-7527bbbb>Создаем сайты, которые работают на ваш бизнес!</h1><h4 data-v-7527bbbb> От концепции до реализации: профессиональная разработка, дизайн и поддержка для достижения ваших целей. </h4><div class="hero__buttons" data-v-7527bbbb>`);
      _push(ssrRenderComponent(AppButton, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее о нас`);
          } else {
            return [
              createTextVNode("Подробнее о нас")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppButton, { type: "2" }, {
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
      _push(`</div></div></section><section class="about" data-v-7527bbbb><div class="about__lines" data-v-7527bbbb></div><div class="about__wrap" data-v-7527bbbb><div class="about__container" data-v-7527bbbb><h2 class="about__title" data-v-7527bbbb>Немного о нас</h2><h3 class="about__subtitle" data-v-7527bbbb>Мы создаем не просто сайты, а истории успеха</h3><p class="about__text" data-v-7527bbbb>Создаём современные и удобные сайты, которые помогают вашему бизнесу расти и привлекать новых клиентов</p></div>`);
      _push(ssrRenderComponent(CompanyNumbers, null, null, _parent));
      _push(`</div></section><section class="team" data-v-7527bbbb><img class="team__img"${ssrRenderAttr("src", _imports_0)} alt="team" data-v-7527bbbb></section></div>`);
      _push(ssrRenderComponent(TeamSlider, null, null, _parent));
      _push(ssrRenderComponent(FeedbackForm, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7527bbbb"]]);

export { about as default };
//# sourceMappingURL=about.vue.mjs.map
