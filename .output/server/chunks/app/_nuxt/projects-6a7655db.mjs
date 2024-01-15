import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$1 = "" + publicAssetsURL("img/arrow-up-right.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "read_more" }, _attrs))} data-v-00177316><div class="read_more_text" data-v-00177316><span data-v-00177316><p data-v-00177316>Les mer</p><img${ssrRenderAttr("src", _imports_0$1)} data-v-00177316></span></div><div class="read_more_line" data-v-00177316></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Readmore.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-00177316"]]);
const _imports_0 = "" + publicAssetsURL("img/vue.svg");
const _imports_1 = "" + publicAssetsURL("img/firebase.svg");
const _imports_2 = "" + publicAssetsURL("img/csharp.svg");
const _imports_3 = "" + publicAssetsURL("img/dotnet.svg");
const _imports_4 = "" + publicAssetsURL("img/typescript.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects2 = [
      {
        title: "Kj\xF8reskole",
        image: "/img/Kjoreskole.png"
      },
      {
        title: "OCR Program",
        description: "Lesing av PDF-er mottat p\xE5 e-post og konvertere teksten til en tom fil."
      },
      {
        title: "Valgomat",
        image: "/img/Valgomat.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Readmore = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boxes" }, _attrs))} data-v-c02f5d2b><div class="box" data-v-c02f5d2b><h3 data-v-c02f5d2b>${ssrInterpolate(projects2[0].title)}</h3><img class="img"${ssrRenderAttr("src", projects2[0].image)} data-v-c02f5d2b><div class="icons1" data-v-c02f5d2b><img${ssrRenderAttr("src", _imports_0)} data-v-c02f5d2b><img${ssrRenderAttr("src", _imports_1)} data-v-c02f5d2b></div>`);
      _push(ssrRenderComponent(_component_Readmore, null, null, _parent));
      _push(`</div><div class="box" data-v-c02f5d2b><h3 data-v-c02f5d2b>${ssrInterpolate(projects2[1].title)}</h3><p data-v-c02f5d2b>${ssrInterpolate(projects2[1].description)}</p><div class="icons2" data-v-c02f5d2b><img${ssrRenderAttr("src", _imports_2)} data-v-c02f5d2b><img${ssrRenderAttr("src", _imports_3)} data-v-c02f5d2b></div>`);
      _push(ssrRenderComponent(_component_Readmore, null, null, _parent));
      _push(`</div><div class="box" data-v-c02f5d2b><h3 data-v-c02f5d2b>${ssrInterpolate(projects2[2].title)}</h3><img class="img2"${ssrRenderAttr("src", projects2[2].image)} data-v-c02f5d2b><div class="icons3" data-v-c02f5d2b><img${ssrRenderAttr("src", _imports_0)} data-v-c02f5d2b><img${ssrRenderAttr("src", _imports_4)} data-v-c02f5d2b></div>`);
      _push(ssrRenderComponent(_component_Readmore, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c02f5d2b"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Projects = __nuxt_component_0;
  _push(`<!--[--><div class="header" data-v-c55a0bea><h1 data-v-c55a0bea>Projekter</h1><h2 data-v-c55a0bea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil nisi dignissimos dolore consequatur recusandae vero incidunt pariatur, accusamus placeat fugit ipsum alias necessitatibus soluta totam. Aut sed unde quia?</h2></div>`);
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c55a0bea"]]);

export { projects as default };
//# sourceMappingURL=projects-6a7655db.mjs.map
