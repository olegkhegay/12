import { mergeProps, ref, computed, reactive, watch, useSSRContext } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
gsap.registerPlugin(ScrollTrigger);
const _sfc_main = {
  name: "FeedbackForm",
  setup() {
    const feedbackSection = ref(null);
    const feedbackText = ref(null);
    const feedbackForm = ref(null);
    const consultationCard = ref(null);
    const currentTheme = computed(() => {
      return "white";
    });
    const backgroundImage = computed(() => {
      return currentTheme.value === "white" ? "/bg_Feedback-white.png" : "/bg_Feedback-dark.png";
    });
    const formData = reactive({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const errors = reactive({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const animationFields = reactive({
      name: false,
      email: false,
      phone: false,
      message: false
    });
    const isSubmitting = ref(false);
    const formStatus = reactive({
      success: false,
      message: ""
    });
    const validateForm = () => {
      let isValid = true;
      if (!formData.name || formData.name.trim().length < 2) {
        errors.name = "Имя должно содержать не менее 2 символов";
        startPulseAnimation("name");
        isValid = false;
      } else {
        errors.name = "";
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = "Пожалуйста, введите корректный email";
        startPulseAnimation("email");
        isValid = false;
      } else {
        errors.email = "";
      }
      const phoneRegex = /^(\+998|998|8)?[\s\-]?(\d{2}|\(\d{2}\))[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$|^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = "Пожалуйста, введите корректный номер телефона";
        startPulseAnimation("phone");
        isValid = false;
      } else {
        errors.phone = "";
      }
      if (!formData.message || formData.message.trim().length < 10) {
        errors.message = "Сообщение должно содержать не менее 10 символов";
        startPulseAnimation("message");
        isValid = false;
      } else {
        errors.message = "";
      }
      return isValid;
    };
    const startPulseAnimation = (fieldName) => {
      animationFields[fieldName] = true;
      setTimeout(() => {
        animationFields[fieldName] = false;
      }, 2e3);
    };
    const clearError = (fieldName) => {
      errors[fieldName] = "";
      animationFields[fieldName] = false;
    };
    const submitForm = async () => {
      if (!validateForm()) {
        return;
      }
      isSubmitting.value = true;
      formStatus.success = false;
      formStatus.message = "";
      try {
        const response = await fetch("/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const result = await response.json();
        if (!result.success && result.errors) {
          Object.keys(result.errors).forEach((key) => {
            errors[key] = result.errors[key];
            startPulseAnimation(key);
          });
        } else if (result.success) {
          formData.name = "";
          formData.email = "";
          formData.phone = "";
          formData.message = "";
          formStatus.success = true;
          formStatus.message = result.message;
          if (feedbackForm.value) {
            gsap.fromTo(
              ".success-message",
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
          }
          setTimeout(() => {
            formStatus.message = "";
            formStatus.success = false;
          }, 5e3);
        }
      } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        formStatus.success = false;
        formStatus.message = "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.";
      } finally {
        isSubmitting.value = false;
      }
    };
    watch(currentTheme, () => {
    });
    return {
      feedbackSection,
      feedbackText,
      feedbackForm,
      consultationCard,
      formData,
      errors,
      animationFields,
      isSubmitting,
      formStatus,
      submitForm,
      clearError,
      backgroundImage
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "feedback-section",
    ref: "feedbackSection"
  }, _attrs))} data-v-c554ba21><div class="feedback-bg" data-v-c554ba21><img${ssrRenderAttr("src", $setup.backgroundImage)} alt="Фоновый узор" data-v-c554ba21></div><div class="feedback-container" data-v-c554ba21><div class="feedback-left" data-v-c554ba21><div class="feedback-text" data-v-c554ba21><h2 data-v-c554ba21>Оставить обратную связь</h2><p data-v-c554ba21>Остались вопросы или есть предложения? Напишите нам – мы всегда на связи!</p></div><div class="feedback-form" data-v-c554ba21><div class="${ssrRenderClass([{ "error": $setup.errors.name, "pulse-animation": $setup.animationFields.name }, "form-group"])}" data-v-c554ba21><label for="name" data-v-c554ba21>Имя</label><input type="text" id="name" placeholder="Ваше имя..."${ssrRenderAttr("value", $setup.formData.name)} data-v-c554ba21>`);
  if ($setup.errors.name) {
    _push(`<span class="error-message" data-v-c554ba21>${ssrInterpolate($setup.errors.name)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ "error": $setup.errors.email, "pulse-animation": $setup.animationFields.email }, "form-group"])}" data-v-c554ba21><label for="email" data-v-c554ba21>Email</label><input type="email" id="email" placeholder="user.name@email.com"${ssrRenderAttr("value", $setup.formData.email)} data-v-c554ba21>`);
  if ($setup.errors.email) {
    _push(`<span class="error-message" data-v-c554ba21>${ssrInterpolate($setup.errors.email)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ "error": $setup.errors.phone, "pulse-animation": $setup.animationFields.phone }, "form-group"])}" data-v-c554ba21><label for="phone" data-v-c554ba21>Телефон</label><input type="tel" id="phone" placeholder="+998 90 111 22 33"${ssrRenderAttr("value", $setup.formData.phone)} data-v-c554ba21>`);
  if ($setup.errors.phone) {
    _push(`<span class="error-message" data-v-c554ba21>${ssrInterpolate($setup.errors.phone)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ "error": $setup.errors.message, "pulse-animation": $setup.animationFields.message }, "form-group"])}" data-v-c554ba21><label for="message" data-v-c554ba21>Сообщение</label><textarea id="message" placeholder="Пожалуйста, введите ваше сообщение здесь... (необязательно)" data-v-c554ba21>${ssrInterpolate($setup.formData.message)}</textarea>`);
  if ($setup.errors.message) {
    _push(`<span class="error-message" data-v-c554ba21>${ssrInterpolate($setup.errors.message)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><button class="feedback-submit"${ssrIncludeBooleanAttr($setup.isSubmitting) ? " disabled" : ""} data-v-c554ba21>`);
  if (!$setup.isSubmitting) {
    _push(`<span data-v-c554ba21>Отправить сообщение</span>`);
  } else {
    _push(`<span class="spinner" data-v-c554ba21></span>`);
  }
  _push(`</button>`);
  if ($setup.formStatus.message) {
    _push(`<div class="form-status" data-v-c554ba21>`);
    if ($setup.formStatus.success) {
      _push(`<div class="success-message" data-v-c554ba21>${ssrInterpolate($setup.formStatus.message)}</div>`);
    } else {
      _push(`<div class="error-message-global" data-v-c554ba21>${ssrInterpolate($setup.formStatus.message)}</div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="feedback-right" data-v-c554ba21><div class="consultation-card" data-v-c554ba21><h3 data-v-c554ba21>Консультация по проекту</h3><p data-v-c554ba21>Чтобы узнать больше о наших услугах, заполните заявку или позвоните нам. Мы расскажем вам, как мы можем помочь вашему бизнесу.</p><div class="consultation-info" data-v-c554ba21><div class="consultation-item" data-v-c554ba21><span class="consultation-label" data-v-c554ba21>Телефон:</span><span class="consultation-value" data-v-c554ba21>+998 (90) 123-45-67</span></div><div class="consultation-item" data-v-c554ba21><span class="consultation-label" data-v-c554ba21>Email:</span><span class="consultation-value" data-v-c554ba21>info@gmail.ru</span></div><div class="consultation-item" data-v-c554ba21><span class="consultation-label" data-v-c554ba21>Адрес:</span><span class="consultation-value" data-v-c554ba21>Узбекистан, г. Ташкент, ул. Богишамол, 232.</span></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeedbackForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeedbackForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c554ba21"]]);
export {
  FeedbackForm as default
};
//# sourceMappingURL=FeedbackForm.vue.mjs.map
