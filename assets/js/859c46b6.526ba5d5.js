"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["7893"], {
73197: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_29_fintesk_como_ecosistema_crm_para_la_industria_turistica_md_175_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_29_fintesk_como_ecosistema_crm_para_la_industria_turistica_md_175_json__rspack_import_0 = __webpack_require__(50177);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Fintesk como Ecosistema CRM para la Industria Turística',
	slug: 'fintesk-como-ecosistema-crm-para-la-industria-turistica',
	authors: 'fabrizzio',
	tags: [
		'ventas',
		'crm',
		'Agencias de Viajes'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "<strong>1. Introducción: La Encrucijada Tecnológica de la Agencia de Viajes Moderna</strong>",
  "id": "1-introducción-la-encrucijada-tecnológica-de-la-agencia-de-viajes-moderna",
  "level": 2
}, {
  "value": "<strong>1.1 El Contexto de la Transformación Digital en Turismo</strong>",
  "id": "11-el-contexto-de-la-transformación-digital-en-turismo",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(98451)/* ["default"] */.A) + "",
        width: "1024",
        height: "420"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-introducción-la-encrucijada-tecnológica-de-la-agencia-de-viajes-moderna",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "1. Introducción: La Encrucijada Tecnológica de la Agencia de Viajes Moderna"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "11-el-contexto-de-la-transformación-digital-en-turismo",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "1.1 El Contexto de la Transformación Digital en Turismo"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "La industria de la intermediación turística se encuentra en un punto de inflexión crítico hacia el año 2025. El modelo tradicional de gestión, basado en la memoria del agente, archivadores físicos y hojas de cálculo desconectadas, ha demostrado ser insostenible ante la creciente complejidad de la demanda del viajero moderno. La investigación actual sugiere que el \"universo semántico\" de un agente de viajes ha evolucionado drásticamente; ya no se trata simplemente de reservar un vuelo o una habitación de hotel, sino de gestionar una \"experiencia\" que abarca múltiples puntos de contacto, gestión de riesgos, requisitos sanitarios y preferencias hiper-personalizadas."
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
98451: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fintesk-como-ecosistema-crm-para-la-industria-turistica-3dd6917acd70a46e1589e74782a3215f.jpg");

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
50177: (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/fintesk-como-ecosistema-crm-para-la-industria-turistica","source":"@site/blog/2025-11-29-fintesk-como-ecosistema-crm-para-la-industria-turistica.md","title":"Fintesk como Ecosistema CRM para la Industria Turística","description":"1\\\\. Introducción: La Encrucijada Tecnológica de la Agencia de Viajes Moderna","date":"2025-11-29T00:00:00.000Z","tags":[{"inline":true,"label":"ventas","permalink":"/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/blog/tags/crm"},{"inline":true,"label":"Agencias de Viajes","permalink":"/blog/tags/agencias-de-viajes"}],"readingTime":17.06,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Fintesk - Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"title":"Fintesk como Ecosistema CRM para la Industria Turística","slug":"fintesk-como-ecosistema-crm-para-la-industria-turistica","authors":"fabrizzio","tags":["ventas","crm","Agencias de Viajes"]},"unlisted":false,"prevItem":{"title":"El Mejor CRM para Agencias de Viajes y Freelance","permalink":"/blog/el-mejor-crm-para-agencias-de-viajes-y-freelance"},"nextItem":{"title":"Estrategias para Atraer Leads de Alta Calidad","permalink":"/blog/estrategias-para-atraer-leads-de-alta-calidad"}}')

}),

}]);