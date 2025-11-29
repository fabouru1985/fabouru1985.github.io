"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["9978"], {
49840: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_06_indicadores_clave_de_rendimiento_kpi_para_medir_el_exito_md_b33_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_06_indicadores_clave_de_rendimiento_kpi_para_medir_el_exito_md_b33_json__rspack_import_0 = __webpack_require__(94629);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	slug: 'indicadores-clave-de-rendimiento-kpi-para-medir-el-exito',
	title: 'Indicadores Clave de Rendimiento (KPI) para Medir el Éxito de la Nutrición y el Seguimiento de Leads',
	authors: 'fabrizzio',
	tags: [
		'excel',
		'ventas',
		'crm',
		'excel-vs-crm'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "8.1. KPIs Medibles con CRM",
  "id": "81-kpis-medibles-con-crm",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "81-kpis-medibles-con-crm",
      children: "8.1. KPIs Medibles con CRM"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Los sistemas CRM ofrecen la capacidad de rastrear y medir con precisión varios indicadores clave de rendimiento (KPI) que son cruciales para evaluar el éxito de los esfuerzos de nutrición y seguimiento de leads."
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
94629: (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/indicadores-clave-de-rendimiento-kpi-para-medir-el-exito","source":"@site/blog/2025-04-06-indicadores-clave-de-rendimiento-kpi-para-medir-el-exito.md","title":"Indicadores Clave de Rendimiento (KPI) para Medir el Éxito de la Nutrición y el Seguimiento de Leads","description":"8.1. KPIs Medibles con CRM","date":"2025-04-06T00:00:00.000Z","tags":[{"inline":true,"label":"excel","permalink":"/blog/tags/excel"},{"inline":true,"label":"ventas","permalink":"/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/blog/tags/crm"},{"inline":true,"label":"excel-vs-crm","permalink":"/blog/tags/excel-vs-crm"}],"readingTime":9.53,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Fintesk - Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"slug":"indicadores-clave-de-rendimiento-kpi-para-medir-el-exito","title":"Indicadores Clave de Rendimiento (KPI) para Medir el Éxito de la Nutrición y el Seguimiento de Leads","authors":"fabrizzio","tags":["excel","ventas","crm","excel-vs-crm"]},"unlisted":false,"prevItem":{"title":"CRM vs Excel, Un Análisis Comparativo para la Nutrición y el Seguimiento de Leads en Ventas","permalink":"/blog/crm-vs-excel-un-analisis-comparativo"},"nextItem":{"title":"Las Desventajas de Usar Excel para la Nutrición y el Seguimiento de Leads","permalink":"/blog/las-desventajas-de-usar-excel-para-la-nutricion-y-el-seguimiento-de-leads"}}')

}),

}]);