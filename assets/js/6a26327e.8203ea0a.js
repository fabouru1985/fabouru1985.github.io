"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["1052"], {
33020: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_05_mejora_de_las_tasas_de_conversion_a_traves_del_embudo_de_marketing_y_ventas_md_578_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_05_mejora_de_las_tasas_de_conversion_a_traves_del_embudo_de_marketing_y_ventas_md_578_json__rspack_import_0 = __webpack_require__(91043);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Mejora de las Tasas de Conversión a Través del Embudo de Marketing y Ventas',
	slug: 'mejora-de-las-tasas-de-conversion-a-traves-del-embudo-de-marketing-y-ventas',
	authors: 'fabrizzio',
	tags: [
		'embudo-ventas',
		'embudo-marketing',
		'ventas',
		'crm',
		'tasa-de-conversion'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(28698)/* ["default"] */.A) + "",
        width: "1024",
        height: "420"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "El trayecto desde la conciencia inicial del cliente hasta la lealtad sostenida presenta un desafío complejo para las empresas. Si bien atraer clientes potenciales constituye la base del crecimiento, la capacidad de guiar a estos prospectos a través de las diversas etapas y convertirlos en clientes y defensores de la marca es primordial."
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
28698: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/mejora-de-las-tasas-de-conversion-a-traves-del-embudo-de-marketing-y-ventas-8540123782ffdcd2bfed66512830cb1c.jpg");

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
91043: (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/mejora-de-las-tasas-de-conversion-a-traves-del-embudo-de-marketing-y-ventas","source":"@site/blog/2025-04-05-mejora-de-las-tasas-de-conversion-a-traves-del-embudo-de-marketing-y-ventas.md","title":"Mejora de las Tasas de Conversión a Través del Embudo de Marketing y Ventas","description":"El trayecto desde la conciencia inicial del cliente hasta la lealtad sostenida presenta un desafío complejo para las empresas. Si bien atraer clientes potenciales constituye la base del crecimiento, la capacidad de guiar a estos prospectos a través de las diversas etapas y convertirlos en clientes y defensores de la marca es primordial.","date":"2025-04-05T00:00:00.000Z","tags":[{"inline":true,"label":"embudo-ventas","permalink":"/blog/tags/embudo-ventas"},{"inline":true,"label":"embudo-marketing","permalink":"/blog/tags/embudo-marketing"},{"inline":true,"label":"ventas","permalink":"/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/blog/tags/crm"},{"inline":true,"label":"tasa-de-conversion","permalink":"/blog/tags/tasa-de-conversion"}],"readingTime":9.73,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Fintesk - Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"/img/fabrizzio-linkedin.jpeg","key":"fabrizzio","page":null}],"frontMatter":{"title":"Mejora de las Tasas de Conversión a Través del Embudo de Marketing y Ventas","slug":"mejora-de-las-tasas-de-conversion-a-traves-del-embudo-de-marketing-y-ventas","authors":"fabrizzio","tags":["embudo-ventas","embudo-marketing","ventas","crm","tasa-de-conversion"]},"unlisted":false,"prevItem":{"title":"Estrategias Accionables para Mejorar las Tasas de Conversión en Cada Etapa del Embudo","permalink":"/blog/estrategias-para-mejorar-las-tasas-de-conversion-en-cada-etapa-del-embudo"}}')

}),

}]);