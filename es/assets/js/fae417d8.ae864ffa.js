"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4984"], {
6176: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_sample_import_spreadsheets_md_fae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-importing-data-importing-sample-import-spreadsheets-md-fae.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_sample_import_spreadsheets_md_fae_namespaceObject = JSON.parse('{"id":"kb/importing-data/importing-sample-import-spreadsheets","title":"Importación-> Muestra de hojas de cálculo de importación","description":"Si necesita ayuda con su Importación de datos hacia Fintesk, Es posible que desee comenzar con un documento de plantilla para ver la mejor manera de proceder.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-sample-import-spreadsheets.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-sample-import-spreadsheets","permalink":"/es/kb/importing-data/importing-sample-import-spreadsheets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/es/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1742256000000,"sidebarPosition":4,"frontMatter":{"id":"importing-sample-import-spreadsheets","title":"Importación-> Muestra de hojas de cálculo de importación","sidebar_position":4,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-18T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Import fields","permalink":"/es/kb/importing-data/import-fields"},"next":{"title":"¿Cómo puedo formatear las fechas para importar a Fintesk?","permalink":"/es/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-sample-import-spreadsheets.md


const frontMatter = {
	id: 'importing-sample-import-spreadsheets',
	title: 'Importación-> Muestra de hojas de cálculo de importación',
	sidebar_position: 4,
	tags: [
		'Getting started',
		'Importing data'
	],
	last_update: {
		date: new Date('2025-03-18T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si necesita ayuda con su ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "Importación de datos"
      }), " hacia Fintesk, Es posible que desee comenzar con un documento de plantilla para ver la mejor manera de proceder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Para obtener información sobre cómo importar datos de hoja de cálculo en Fintesk, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "esta guía"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La hoja de cálculo adjunta a este artículo, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Datos de muestra de Fintesk"
      }), ", proporciona excelentes señales visuales e información de referencia importante para comenzar a usar Fintesk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las columnas en la hoja de cálculo de muestra están codificadas por colores y proporcionan descripciones de los diferentes campos, lo que hace que los encabezados de columnas sean fáciles de reconocer en la sección de mapeo de la función de importación de Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede llenar sus propios datos en esta hoja de cálculo, o usarlos para obtener información sobre dónde mapear los diferentes campos de Fintesk en las columnas de su propia hoja de cálculo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(32532)/* ["default"] */.A) + "",
          children: "Descargar la muestra de datos Fintesk archivo .xlsx"
        })
      }), "\n"]
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
32532: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/ejemplo_data_v5-11a1136bc470c9c78bad9391ca67bac7.xlsx");

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