import { mergeProps, ref, computed, useSSRContext } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
gsap.registerPlugin(ScrollTrigger);
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b230418c"]]);
export {
  Footer as default
};
//# sourceMappingURL=Footer.vue.mjs.map
