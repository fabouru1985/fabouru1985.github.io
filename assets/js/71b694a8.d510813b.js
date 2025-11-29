"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4556"], {
94736: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_08_como_elegir_el_crm_o_software_de_gestion_de_ventas_md_d4a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_04_08_como_elegir_el_crm_o_software_de_gestion_de_ventas_md_d4a_json__rspack_import_0 = __webpack_require__(58714);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Cómo elegir el CRM o Software de Gestión de Ventas Adecuado para su Empresa',
	slug: 'como-elegir-el-crm-o-software-de-gestion-de-ventas-adecuado-para-su-empresa',
	authors: 'fabrizzio',
	tags: [
		'ventas',
		'crm',
		'como-elegir-crm'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
    children: "El software de Gestión de Relaciones con el Cliente (CRM, por sus siglas en inglés) se ha convertido en un sistema integrado fundamental para las empresas que buscan administrar eficazmente sus interacciones con clientes actuales y potenciales, con el objetivo de fortalecer las relaciones e impulsar el crecimiento."
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
58714: (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/como-elegir-el-crm-o-software-de-gestion-de-ventas-adecuado-para-su-empresa","source":"@site/blog/2025-04-08-como-elegir-el-crm-o-software-de-gestion-de-ventas.md","title":"Cómo elegir el CRM o Software de Gestión de Ventas Adecuado para su Empresa","description":"El software de Gestión de Relaciones con el Cliente (CRM, por sus siglas en inglés) se ha convertido en un sistema integrado fundamental para las empresas que buscan administrar eficazmente sus interacciones con clientes actuales y potenciales, con el objetivo de fortalecer las relaciones e impulsar el crecimiento.","date":"2025-04-08T00:00:00.000Z","tags":[{"inline":true,"label":"ventas","permalink":"/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/blog/tags/crm"},{"inline":true,"label":"como-elegir-crm","permalink":"/blog/tags/como-elegir-crm"}],"readingTime":16.17,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Fintesk - Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"title":"Cómo elegir el CRM o Software de Gestión de Ventas Adecuado para su Empresa","slug":"como-elegir-el-crm-o-software-de-gestion-de-ventas-adecuado-para-su-empresa","authors":"fabrizzio","tags":["ventas","crm","como-elegir-crm"]},"unlisted":false,"prevItem":{"title":"Estrategias para Atraer Leads de Alta Calidad","permalink":"/blog/estrategias-para-atraer-leads-de-alta-calidad"},"nextItem":{"title":"Un Análisis Más Detallado, Software CRM Popular en el Mercado Estadounidense","permalink":"/blog/software-crm-popular-en-el-mercado-estadounidense"}}')

}),

}]);