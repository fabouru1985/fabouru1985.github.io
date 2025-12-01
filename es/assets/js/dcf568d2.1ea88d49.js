"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["5236"], {
94482: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_12_01_modernizacion_de_la_gestion_de_cobranzas_2025_md_928_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_12_01_modernizacion_de_la_gestion_de_cobranzas_2025_md_928_json__rspack_import_0 = __webpack_require__(13368);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Modernización de la Gestión de Cobranzas (2025)',
	slug: 'modernizacion-de-la-gestion-de-cobranzas-2025',
	authors: 'fabrizzio',
	tags: [
		'ventas',
		'crm',
		'Cobranza'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "<strong>1. La Nueva Era de la Recuperación Inteligente</strong>",
  "id": "1-la-nueva-era-de-la-recuperación-inteligente",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(30876)/* ["default"] */.A) + "",
        width: "1024",
        height: "420"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-la-nueva-era-de-la-recuperación-inteligente",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "1. La Nueva Era de la Recuperación Inteligente"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["En el actual panorama financiero, caracterizado por una volatilidad económica global y la digitalización acelerada de los servicios, la gestión de cobranzas ha dejado de ser una función administrativa de ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "back-office"
      }), " para convertirse en un pilar estratégico de la liquidez y la retención de clientes. El desafío no es solo \"cobrar\", sino orquestar un ecosistema tecnológico que maximice el retorno de inversión (ROI) mientras preserva la relación con el cliente."]
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
30876: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/modernizacion-de-la-gestion-de-cobranzas-2025-9d26fec65a19ff3688f0e71c937a930f.jpg");

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
13368: (function (module) {
module.exports = JSON.parse('{"permalink":"/es/blog/modernizacion-de-la-gestion-de-cobranzas-2025","source":"@site/blog/2025-12-01-modernizacion-de-la-gestion-de-cobranzas-2025.md","title":"Modernización de la Gestión de Cobranzas (2025)","description":"1\\\\. La Nueva Era de la Recuperación Inteligente","date":"2025-12-01T00:00:00.000Z","tags":[{"inline":true,"label":"ventas","permalink":"/es/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/es/blog/tags/crm"},{"inline":true,"label":"Cobranza","permalink":"/es/blog/tags/cobranza"}],"readingTime":6.43,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"title":"Modernización de la Gestión de Cobranzas (2025)","slug":"modernizacion-de-la-gestion-de-cobranzas-2025","authors":"fabrizzio","tags":["ventas","crm","Cobranza"]},"unlisted":false,"prevItem":{"title":"Fintesk como Alternativa SaaS frente a los Gigantes del Mercado","permalink":"/es/blog/fintesk-como-alternativa-saas-frente-a-los-gigantes-del-mercado"},"nextItem":{"title":"Transformación Integral de la Gestión de Cobranza con Fintesk","permalink":"/es/blog/transformacion-integral-de-la-gestion-de-cobranza-con-fintesk"}}')

}),

}]);