import { mergeProps, ref, useSSRContext } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
gsap.registerPlugin(ScrollTrigger);
const _sfc_main = {
  name: "CompanyNumbers",
  setup() {
    const companySection = ref(null);
    const companyContainer = ref(null);
    const companyTitle = ref(null);
    const companyDiv1 = ref(null);
    const companyDiv2 = ref(null);
    const companyText1 = ref(null);
    const companyText2 = ref(null);
    const companyText3 = ref(null);
    const companyText4 = ref(null);
    const companyText5 = ref(null);
    const companyText6 = ref(null);
    const companyFooter = ref(null);
    const verticalLine = ref(null);
    return {
      companySection,
      companyContainer,
      companyTitle,
      companyDiv1,
      companyDiv2,
      companyText1,
      companyText2,
      companyText3,
      companyText4,
      companyText5,
      companyText6,
      companyFooter,
      verticalLine
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "company-numbers",
    ref: "companySection"
  }, _attrs))} data-v-939bb7f1><div class="company-numbers-container" data-v-939bb7f1><div class="company-numbers-text" data-v-939bb7f1><span class="company-numbers-text1" data-v-939bb7f1>Компания DevX в цифрах: комплексная автоматизация управления бизнесом</span><div class="company-numbers-div" data-v-939bb7f1><span class="company-numbers-text2" data-v-939bb7f1>&gt; 20 экспертов</span><span class="company-numbers-text3" data-v-939bb7f1>В команде более 20<br data-v-939bb7f1>сертифицированных специалистов<br data-v-939bb7f1>по автоматизации.</span></div><div class="company-numbers-div" data-v-939bb7f1><span class="company-numbers-text2" data-v-939bb7f1>&gt; 250 клиентов</span><span class="company-numbers-text3" data-v-939bb7f1>Оказываем тех поддержку,<br data-v-939bb7f1> сопровождение и постпродажное<br data-v-939bb7f1>обслуживание более 250 нашим<br data-v-939bb7f1>постоянным клиентам.</span></div></div><div class="company-numbers-footer" data-v-939bb7f1><span class="company-numbers-text4" data-v-939bb7f1>Опытные<br data-v-939bb7f1> специалисты</span><div class="company-numbers-verticalLine" data-v-939bb7f1></div><span class="company-numbers-text5" data-v-939bb7f1>Наша команда — это профессионалы с многолетним опытом в создании и<br data-v-939bb7f1> продвижении сайтов. Мы объединяем экспертов в области веб-разработки, дизайна, маркетинга и<br data-v-939bb7f1> аналитики, чтобы предложить вам комплексные решения для вашего бизнеса</span></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompanyNumbers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CompanyNumbers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-939bb7f1"]]);
export {
  CompanyNumbers as default
};
//# sourceMappingURL=CompanyNumbers.vue.mjs.map
