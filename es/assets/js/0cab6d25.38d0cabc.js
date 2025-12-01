"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["7545"], {
63935: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_05_alineando_marketing_y_ventas_para_una_conversion_optima_md_427_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_05_alineando_marketing_y_ventas_para_una_conversion_optima_md_427_json__rspack_import_0 = __webpack_require__(82103);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Alineando Marketing y Ventas para una Conversión Óptima',
	slug: 'alineando-marketing-y-ventas-para-una-conversion-optima',
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
        src: (__webpack_require__(81597)/* ["default"] */.A) + "",
        width: "1024",
        height: "416"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Lograr tasas de conversión óptimas requiere un enfoque cohesivo e integrado entre los equipos de marketing y ventas. La alineación de los embudos de marketing y ventas ofrece numerosos beneficios que contribuyen a un recorrido del cliente más eficaz y eficiente."
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
81597: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alineando-marketing-y-ventas-para-una-conversion-optima-e401e7f05a8b5778aa3683138610a1e4.jpg");

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
82103: (function (module) {
module.exports = JSON.parse('{"permalink":"/es/blog/alineando-marketing-y-ventas-para-una-conversion-optima","source":"@site/blog/2025-04-05-alineando-marketing-y-ventas-para-una-conversion-optima.md","title":"Alineando Marketing y Ventas para una Conversión Óptima","description":"Lograr tasas de conversión óptimas requiere un enfoque cohesivo e integrado entre los equipos de marketing y ventas. La alineación de los embudos de marketing y ventas ofrece numerosos beneficios que contribuyen a un recorrido del cliente más eficaz y eficiente.","date":"2025-04-05T00:00:00.000Z","tags":[{"inline":true,"label":"embudo-ventas","permalink":"/es/blog/tags/embudo-ventas"},{"inline":true,"label":"embudo-marketing","permalink":"/es/blog/tags/embudo-marketing"},{"inline":true,"label":"ventas","permalink":"/es/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/es/blog/tags/crm"},{"inline":true,"label":"tasa-de-conversion","permalink":"/es/blog/tags/tasa-de-conversion"}],"readingTime":8.76,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"title":"Alineando Marketing y Ventas para una Conversión Óptima","slug":"alineando-marketing-y-ventas-para-una-conversion-optima","authors":"fabrizzio","tags":["embudo-ventas","embudo-marketing","ventas","crm","tasa-de-conversion"]},"unlisted":false,"prevItem":{"title":"Las Ventajas de Usar un Sistema CRM para la Nutrición y el Seguimiento de Leads","permalink":"/es/blog/las-ventajas-de-usar-un-sistema-crm-para-la-nutricion-y-el-seguimiento-de-leads"},"nextItem":{"title":"Estrategias Accionables para Mejorar las Tasas de Conversión en Cada Etapa del Embudo","permalink":"/es/blog/estrategias-para-mejorar-las-tasas-de-conversion-en-cada-etapa-del-embudo"}}')

}),

}]);