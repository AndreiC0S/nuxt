import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 px-4 max-w-4xl mx-auto grid gap-10 md:grid-cols-2 items-start" }, _attrs))}><form action="https://formspree.io/f/mgvaddvn" method="POST" class="space-y-4 bg-white p-6 rounded shadow"><div><label for="name" class="block text-sm font-medium text-gray-700">Nume</label><input type="text" name="name" id="name" required class="mt-1 block w-full border border-gray-300 rounded p-2"></div><div><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input type="email" name="email" id="email" required class="mt-1 block w-full border border-gray-300 rounded p-2"></div><div><label for="phone" class="block text-sm font-medium text-gray-700">Telefon</label><input type="tel" name="phone" id="phone" required class="mt-1 block w-full border border-gray-300 rounded p-2"></div><div><label for="message" class="block text-sm font-medium text-gray-700">Mesaj</label><textarea name="message" id="message" rows="4" required class="mt-1 block w-full border border-gray-300 rounded p-2"></textarea></div><input type="text" name="_gotcha" style="${ssrRenderStyle({ "display": "none" })}"><button type="submit" class="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"> Trimite </button></form><div class="text-center md:text-left text-gray-800 bg-white p-6 rounded shadow"><h3 class="text-lg font-semibold mb-2">📍 Ne găsești aici</h3><p>București</p><p>Sector 1, București</p><div class="mt-4"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.57974048027!2d26.01206554917715!3d44.4379185781343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1756727441349!5m2!1sen!2sro" width="100%" height="250" style="${ssrRenderStyle({ "border": "0" })}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact.vue.mjs.map
