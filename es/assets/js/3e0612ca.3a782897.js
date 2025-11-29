"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["2133"], {
75676: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_09_estrategias_para_atraer_leads_de_alta_calidad_md_42d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_09_estrategias_para_atraer_leads_de_alta_calidad_md_42d_json__rspack_import_0 = __webpack_require__(40337);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Estrategias para Atraer Leads de Alta Calidad',
	slug: 'estrategias-para-atraer-leads-de-alta-calidad',
	authors: 'fabrizzio',
	tags: [
		'leads',
		'ventas',
		'crm',
		'leads-alta-calidad'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "El Desafío Generalizado de los Leads de Baja Calidad en el Marketing Digital",
  "id": "el-desafío-generalizado-de-los-leads-de-baja-calidad-en-el-marketing-digital",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "el-desafío-generalizado-de-los-leads-de-baja-calidad-en-el-marketing-digital",
      children: "El Desafío Generalizado de los Leads de Baja Calidad en el Marketing Digital"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "La preocupación inicial del usuario pone de manifiesto un problema común en el ámbito del marketing digital: la atracción de un gran volumen de prospectos que, en última instancia, no se traducen en ventas concretas."
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
40337: (function (module) {
module.exports = JSON.parse('{"permalink":"/es/blog/estrategias-para-atraer-leads-de-alta-calidad","source":"@site/blog/2025-04-09-estrategias-para-atraer-leads-de-alta-calidad.md","title":"Estrategias para Atraer Leads de Alta Calidad","description":"El Desafío Generalizado de los Leads de Baja Calidad en el Marketing Digital","date":"2025-04-09T00:00:00.000Z","tags":[{"inline":true,"label":"leads","permalink":"/es/blog/tags/leads"},{"inline":true,"label":"ventas","permalink":"/es/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/es/blog/tags/crm"},{"inline":true,"label":"leads-alta-calidad","permalink":"/es/blog/tags/leads-alta-calidad"}],"readingTime":11.22,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"title":"Estrategias para Atraer Leads de Alta Calidad","slug":"estrategias-para-atraer-leads-de-alta-calidad","authors":"fabrizzio","tags":["leads","ventas","crm","leads-alta-calidad"]},"unlisted":false,"nextItem":{"title":"Cómo elegir el CRM o Software de Gestión de Ventas Adecuado para su Empresa","permalink":"/es/blog/como-elegir-el-crm-o-software-de-gestion-de-ventas-adecuado-para-su-empresa"}}')

}),

}]);