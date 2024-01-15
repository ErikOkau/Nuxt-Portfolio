import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "threeJS",
  __ssrInlineRender: true,
  setup(__props) {
    const canvas = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        class: "position",
        ref_key: "canvas",
        ref: canvas
      }, _attrs))} data-v-1cf8a014></canvas>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/threeJS/threeJS.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1cf8a014"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_threeJS = __nuxt_component_0;
  _push(`<!--[--><div class="header" data-v-249c74c6><h1 data-v-249c74c6>Erik S\xF8rheim</h1><h2 data-v-249c74c6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil nisi dignissimos dolore consequatur recusandae vero incidunt pariatur, accusamus placeat fugit ipsum alias necessitatibus soluta totam. Aut sed unde quia?</h2></div><div class="threeJS" data-v-249c74c6>`);
  _push(ssrRenderComponent(_component_threeJS, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-249c74c6"]]);

export { index as default };
//# sourceMappingURL=index-0103d237.mjs.map
