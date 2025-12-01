"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["1352"], {
83640: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_30_guia_definitiva_de_ecosistemas_crm_para_ongs_2025_md_69a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_30_guia_definitiva_de_ecosistemas_crm_para_ongs_2025_md_69a_json__rspack_import_0 = __webpack_require__(82271);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Guía Definitiva de Ecosistemas CRM para ONGs (2025)',
	slug: 'guia-definitiva-de-ecosistemas-crm-para-ongs-2025',
	authors: 'fabrizzio',
	tags: [
		'ventas',
		'crm',
		'ONGs'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "<strong>1. El Paradigma Tecnológico del Tercer Sector en la Era de la Inteligencia Artificial</strong>",
  "id": "1-el-paradigma-tecnológico-del-tercer-sector-en-la-era-de-la-inteligencia-artificial",
  "level": 2
}, {
  "value": "<strong>1.1. La Transformación de la Misión: De la Gestión Manual a la Inteligencia de Datos</strong>",
  "id": "11-la-transformación-de-la-misión-de-la-gestión-manual-a-la-inteligencia-de-datos",
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
        src: (__webpack_require__(7298)/* ["default"] */.A) + "",
        width: "1024",
        height: "420"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-el-paradigma-tecnológico-del-tercer-sector-en-la-era-de-la-inteligencia-artificial",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "1. El Paradigma Tecnológico del Tercer Sector en la Era de la Inteligencia Artificial"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "11-la-transformación-de-la-misión-de-la-gestión-manual-a-la-inteligencia-de-datos",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "1.1. La Transformación de la Misión: De la Gestión Manual a la Inteligencia de Datos"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["El panorama global de las Organizaciones No Gubernamentales (ONG) y el ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "tercer sector"
      }), " en 2025 se encuentra en un punto de inflexión crítico. Históricamente, la gestión de estas entidades se ha caracterizado por una dependencia de procesos manuales, hojas de cálculo desconectadas y una infraestructura tecnológica fragmentada. Sin embargo, la maduración digital de la sociedad y la creciente exigencia de ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "transparencia ong"
      }), " por parte de donantes institucionales y privados han forzado una evolución radical. Ya no es suficiente con \"hacer el bien\"; es imperativo demostrar la eficiencia, el impacto y la trazabilidad de cada recurso gestionado."]
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
7298: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/guia-definitiva-de-ecosistemas-crm-para-ongs-2025-5b731e3950180008a8979859e7ad36e3.jpg");

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
82271: (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/guia-definitiva-de-ecosistemas-crm-para-ongs-2025","source":"@site/blog/2025-11-30-guia-definitiva-de-ecosistemas-crm-para-ongs-2025.md","title":"Guía Definitiva de Ecosistemas CRM para ONGs (2025)","description":"1\\\\. El Paradigma Tecnológico del Tercer Sector en la Era de la Inteligencia Artificial","date":"2025-11-30T00:00:00.000Z","tags":[{"inline":true,"label":"ventas","permalink":"/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/blog/tags/crm"},{"inline":true,"label":"ONGs","permalink":"/blog/tags/on-gs"}],"readingTime":18.1,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Fintesk - Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"title":"Guía Definitiva de Ecosistemas CRM para ONGs (2025)","slug":"guia-definitiva-de-ecosistemas-crm-para-ongs-2025","authors":"fabrizzio","tags":["ventas","crm","ONGs"]},"unlisted":false,"prevItem":{"title":"Fintesk.com en el Ecosistema de Ongs","permalink":"/blog/fintesk-com-en-el-ecosistema-de-ongs"},"nextItem":{"title":"El Mejor CRM para Agencias de Viajes y Freelance","permalink":"/blog/el-mejor-crm-para-agencias-de-viajes-y-freelance"}}')

}),

}]);