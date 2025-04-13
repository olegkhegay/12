import{A as g}from"./UK-zWAVI.js";import{g as n}from"./CKx49QUS.js";import{_ as h,c as r,o as l,a as t,F as v,r as q,b as a,d,t as f,n as w,w as u,g as O,v as k,T as y}from"./CvDpfZ_4.js";import{F as A}from"./DJvUBO-Z.js";const C={name:"FaqAccordion",data(){return{faqItems:[{question:"Что такое лендинг?",answer:"Лендинг (Landing Page) — это одностраничный сайт, созданный для решения конкретной задачи: продажи продукта, сбора заявок или продвижения акции. Он фокусирует внимание пользователя на одном предложении.",isOpen:!1},{question:"Чем лендинг отличается от обычного сайта?",answer:"Главная цель лендинга – сфокусировать внимание пользователя на конкретном предложении.",isOpen:!1},{question:"Сколько времени нужно на создание лендинга?",answer:"Зависит от сложности, но в среднем 2-3 дня, включая базовую оптимизацию.",isOpen:!1},{question:"Можно ли изменить лендинг после запуска?",answer:"Да, как правило, он легко редактируется и дорабатывается.",isOpen:!1},{question:"Как лендинг помогает увеличить продажи?",answer:"Благодаря четкой структуре, фокусировке на оффере и призывам к действию.",isOpen:!1}]}},methods:{toggle(s){this.faqItems.forEach((o,e)=>{e!==s&&(o.isOpen=!1)}),this.faqItems[s].isOpen=!this.faqItems[s].isOpen},enterAnimation(s){n.set(s,{height:0,opacity:0});const o=s.scrollHeight;n.to(s,{duration:.3,height:o,opacity:1,ease:"power2.out",onComplete:()=>{n.set(s,{height:"auto"})}})},leaveAnimation(s,o){const e=s.scrollHeight;n.set(s,{height:e,opacity:1}),n.to(s,{duration:.3,height:0,opacity:0,ease:"power2.out",onComplete:o})}}},F={class:"faq-accordion"},I=["onClick"],b={class:"faq-answer"};function B(s,o,e,p,m,c){return l(),r("div",F,[o[1]||(o[1]=t("section",{class:"faq-title"},[t("h1",null,"Ответы на часто задаваемые вопросы"),t("h3",null,"Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений.")],-1)),(l(!0),r(v,null,q(m.faqItems,(i,_)=>(l(),r("div",{key:_,class:"faq-item"},[t("button",{class:"faq-question",onClick:T=>c.toggle(_)},[d(f(i.question)+" ",1),t("span",{class:w(["faq-icon",{open:i.isOpen}])},o[0]||(o[0]=[t("svg",{width:"40",height:"40",viewBox:"0 0 24 24"},[t("path",{d:"M12 5v14M5 12h14",stroke:"var(--btn2-color-text)","stroke-width":"2","stroke-linecap":"round"})],-1)]),2)],8,I),a(y,{onEnter:c.enterAnimation,onLeave:c.leaveAnimation},{default:u(()=>[O(t("div",b,[t("p",null,f(i.answer),1)],512),[[k,i.isOpen]])]),_:2},1032,["onEnter","onLeave"])]))),128))])}const x=h(C,[["render",B],["__scopeId","data-v-0bed32e8"]]),L={class:"page-container"},$={class:"hero"},E={class:"hero__wrap"},H={class:"hero__title"},S={class:"hero__title-buttons"},N={__name:"faq",setup(s){return(o,e)=>{const p=g;return l(),r("div",L,[t("section",$,[t("div",E,[t("div",H,[e[2]||(e[2]=t("h2",null,"Лендинги (Landing Page)",-1)),e[3]||(e[3]=t("p",null," Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений. ",-1)),t("div",S,[a(p,{type:"1"},{default:u(()=>e[0]||(e[0]=[d("Обсудить проект")])),_:1}),a(p,{type:"2"},{default:u(()=>e[1]||(e[1]=[d("Заказать")])),_:1})])]),e[4]||(e[4]=t("div",{class:"hero__main-img"},[t("div",{class:"hero__img"})],-1))])]),a(x),a(A)])}}},z=h(N,[["__scopeId","data-v-25714322"]]);export{z as default};
