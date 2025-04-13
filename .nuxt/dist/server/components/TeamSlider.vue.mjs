import { mergeProps, ref, useSSRContext } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import "C:/Users/user/Desktop/DevX/12/node_modules/hookable/dist/index.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../_virtual/virtual_public.mjs";
import _imports_1 from "../_virtual/virtual_public2.mjs";
import _imports_2 from "../_virtual/virtual_public3.mjs";
import _imports_3 from "../_virtual/virtual_public4.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
gsap.registerPlugin(ScrollTrigger);
const _sfc_main = {
  name: "TeamSlider",
  setup() {
    const teamSection = ref(null);
    const teamTitle = ref(null);
    const teamSlider = ref(null);
    const sliderContainer = ref(null);
    const sliderItems = ref([]);
    const leftArrow = ref(null);
    const rightArrow = ref(null);
    const currentIndex = ref(0);
    const isAnimating = ref(false);
    const isPulsing = ref(false);
    const teamMembers = ref([
      {
        name: "Кучкаров Максим",
        position: "Дизайнер",
        image: "/human.png"
      },
      {
        name: "Флоренко Сергей",
        position: "CEO DevX Group LLC",
        image: "/human.png"
      },
      {
        name: "Лучкин Владислав",
        position: "Тимлид",
        image: "/human.png"
      }
    ]);
    const getSlideClass = (index) => {
      if (index === currentIndex.value) return "active";
      if (index === (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length) return "prev";
      if (index === (currentIndex.value + 1) % teamMembers.value.length) return "next";
      return "";
    };
    const getSlideStyle = (index) => {
      const baseStyle = {
        transition: "all 1.2s cubic-bezier(0.42, 0, 0.58, 1)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%"
      };
      if (index === currentIndex.value) {
        return {
          ...baseStyle,
          opacity: "1",
          transform: "translateX(0) scale(1)",
          zIndex: "10"
        };
      } else if (index === (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length) {
        return {
          ...baseStyle,
          opacity: "0.7",
          transform: "translateX(-120%) scale(0.8) rotateY(10deg)",
          zIndex: "5"
        };
      } else if (index === (currentIndex.value + 1) % teamMembers.value.length) {
        return {
          ...baseStyle,
          opacity: "0.7",
          transform: "translateX(120%) scale(0.8) rotateY(-10deg)",
          zIndex: "5"
        };
      } else {
        return {
          ...baseStyle,
          opacity: "0",
          transform: "translateX(0) scale(0.5)",
          zIndex: "1"
        };
      }
    };
    const showSlide = (index) => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      currentIndex.value = (index + teamMembers.value.length) % teamMembers.value.length;
      setTimeout(() => {
        isAnimating.value = false;
      }, 1e3);
    };
    return {
      teamSection,
      teamTitle,
      teamSlider,
      sliderContainer,
      sliderItems,
      leftArrow,
      rightArrow,
      teamMembers,
      currentIndex,
      isPulsing,
      showSlide,
      getSlideClass,
      getSlideStyle
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "team-section",
    ref: "teamSection"
  }, _attrs))} data-v-dfe57399><div class="team-container" data-v-dfe57399><h2 data-v-dfe57399>Наши сотрудники</h2><div class="team-slider" data-v-dfe57399><div class="team-slider-container" data-v-dfe57399><div class="team-slider-arrow left" data-v-dfe57399><img${ssrRenderAttr("src", _imports_0)} alt="Предыдущий" data-v-dfe57399></div><div class="team-slider-content" data-v-dfe57399><div class="team-slider-items" data-v-dfe57399><!--[-->`);
  ssrRenderList($setup.teamMembers, (member, index) => {
    _push(`<div class="${ssrRenderClass([$setup.getSlideClass(index), "team-slider-item"])}" style="${ssrRenderStyle($setup.getSlideStyle(index))}" data-v-dfe57399><div class="${ssrRenderClass([{ "pulse": index === $setup.currentIndex && $setup.isPulsing }, "team-member-image"])}" data-v-dfe57399><img class="polygon"${ssrRenderAttr("src", _imports_1)} alt="Фигура" data-v-dfe57399><img class="human"${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} data-v-dfe57399></div><img class="human-line"${ssrRenderAttr("src", _imports_2)} alt="Линия" data-v-dfe57399><div class="team-member-info" data-v-dfe57399><h3 data-v-dfe57399>${ssrInterpolate(member.name)}</h3><div class="team-member-line" data-v-dfe57399></div><p data-v-dfe57399>${ssrInterpolate(member.position)}</p></div></div>`);
  });
  _push(`<!--]--></div></div><div class="team-slider-arrow right" data-v-dfe57399><img${ssrRenderAttr("src", _imports_3)} alt="Следующий" data-v-dfe57399></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TeamSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dfe57399"]]);
export {
  TeamSlider as default
};
//# sourceMappingURL=TeamSlider.vue.mjs.map
