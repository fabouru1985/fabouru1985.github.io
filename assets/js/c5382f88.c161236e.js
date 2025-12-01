"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["5103"], {
44777: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_29_el_mejor_crm_para_agencias_de_viajes_y_freelance_md_05a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_29_el_mejor_crm_para_agencias_de_viajes_y_freelance_md_05a_json__rspack_import_0 = __webpack_require__(45782);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'El Mejor CRM para Agencias de Viajes y Freelance',
	slug: 'el-mejor-crm-para-agencias-de-viajes-y-freelance',
	authors: 'fabrizzio',
	tags: [
		'ventas',
		'crm',
		'Agencias de Viajes'
	]
};
const contentTitle = 'El Mejor CRM para Agencias de Viajes y Freelance (Guía 2025)';

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(70183)/* ["default"] */.A) + "",
        width: "1024",
        height: "420"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["En la industria turística actual, la diferencia entre cerrar una venta o perderla frente a un competidor online suele reducirse a la velocidad de respuesta y la personalización. Ya no basta con tener una agenda de contactos; el ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "software para agencias de viajes"
      }), " moderno debe actuar como el motor central de tu negocio, conectando la inspiración del cliente con la logística de la reserva."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
70183: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/el-mejor-crm-para-agencias-de-viajes-y-freelance-14f98e5ed3bcaed35db16f151d438222.jpg");

}),
28453: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),
45782: (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/el-mejor-crm-para-agencias-de-viajes-y-freelance","source":"@site/blog/2025-11-29-el-mejor-crm-para-agencias-de-viajes-y-freelance.md","title":"El Mejor CRM para Agencias de Viajes y Freelance","description":"En la industria turística actual, la diferencia entre cerrar una venta o perderla frente a un competidor online suele reducirse a la velocidad de respuesta y la personalización. Ya no basta con tener una agenda de contactos; el software para agencias de viajes moderno debe actuar como el motor central de tu negocio, conectando la inspiración del cliente con la logística de la reserva.","date":"2025-11-29T00:00:00.000Z","tags":[{"inline":true,"label":"ventas","permalink":"/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/blog/tags/crm"},{"inline":true,"label":"Agencias de Viajes","permalink":"/blog/tags/agencias-de-viajes"}],"readingTime":8.99,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Fintesk - Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"/img/fabrizzio-linkedin.jpeg","key":"fabrizzio","page":null}],"frontMatter":{"title":"El Mejor CRM para Agencias de Viajes y Freelance","slug":"el-mejor-crm-para-agencias-de-viajes-y-freelance","authors":"fabrizzio","tags":["ventas","crm","Agencias de Viajes"]},"unlisted":false,"prevItem":{"title":"Guía Definitiva de Ecosistemas CRM para ONGs (2025)","permalink":"/blog/guia-definitiva-de-ecosistemas-crm-para-ongs-2025"},"nextItem":{"title":"Fintesk como Ecosistema CRM para la Industria Turística","permalink":"/blog/fintesk-como-ecosistema-crm-para-la-industria-turistica"}}')

}),

}]);