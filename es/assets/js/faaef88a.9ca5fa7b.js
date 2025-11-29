"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["6078"], {
30725: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_filtering_filters_common_uses_md_faa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-filtering-filters-common-uses-md-faa.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_filtering_filters_common_uses_md_faa_namespaceObject = JSON.parse('{"id":"kb/filtering/filters-common-uses","title":"Filtros-> Usos comunes","description":"La herramienta de Filtrado de Fintesk ofrece una variedad de formas de ver y segmentar datos específicos en su cuenta. Aquí hay algunos ejemplos de opciones de filtro comunes que puede encontrar útiles.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/filtering/filters-common-uses.md","sourceDirName":"kb/filtering","slug":"/kb/filtering/filters-common-uses","permalink":"/es/kb/filtering/filters-common-uses","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Organizing your data","permalink":"/es/tags/organizing-your-data"},{"inline":true,"label":"Filtering","permalink":"/es/tags/filtering"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741564800000,"sidebarPosition":2,"frontMatter":{"id":"filters-common-uses","title":"Filtros-> Usos comunes","sidebar_position":2,"tags":["Organizing your data","Filtering"],"last_update":{"date":"2025-03-10T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Filtrando","permalink":"/es/kb/filtering/"},"next":{"title":"Deals","permalink":"/es/category/deals"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/filtering/filters-common-uses.md


const frontMatter = {
	id: 'filters-common-uses',
	title: 'Filtros-> Usos comunes',
	sidebar_position: 2,
	tags: [
		'Organizing your data',
		'Filtering'
	],
	last_update: {
		date: new Date('2025-03-10T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver solamente negocios ganados y perdidos",
  "id": "ver-solamente-negocios-ganados-y-perdidos",
  "level": 2
}, {
  "value": "Ver personas con una dirección de correo electrónico",
  "id": "ver-personas-con-una-dirección-de-correo-electrónico",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["La herramienta de ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/filtering",
        children: "Filtrado"
      }), " de Fintesk ofrece una variedad de formas de ver y segmentar datos específicos en su cuenta. Aquí hay algunos ejemplos de opciones de filtro comunes que puede encontrar útiles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-solamente-negocios-ganados-y-perdidos",
      children: "Ver solamente negocios ganados y perdidos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fcu01",
        src: (__webpack_require__(82300)/* ["default"] */.A) + "",
        width: "820",
        height: "492"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para ver negocios ganados y perdidas, asegúrese de usar condiciones ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CUALQUIERA"
      }), ", en vez de condiciones ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TODAS"
      }), ". Agregar ambas condiciones a la sección ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TODAS"
      }), " producirá cero resultados, ya que un negocio no se puede ganar y perder al mismo tiempo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-personas-con-una-dirección-de-correo-electrónico",
      children: "Ver personas con una dirección de correo electrónico"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fcu02",
        src: (__webpack_require__(82173)/* ["default"] */.A) + "",
        width: "826",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Este filtro le mostrará cualquier persona en su cuenta con un valor agregado al campo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Correo electrónico"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
82300: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fcu01-348e8baaa0b3f5a827a5edba0b0d4c88.jpeg");

}),
82173: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fcu02-343a99431b64bfb61788d35c48475dda.jpeg");

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

}]);