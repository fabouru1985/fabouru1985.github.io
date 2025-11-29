"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["6433"], {
32670: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_how_can_i_format_dates_to_import_into_fintesk_md_ce7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-importing-data-how-can-i-format-dates-to-import-into-fintesk-md-ce7.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_how_can_i_format_dates_to_import_into_fintesk_md_ce7_namespaceObject = JSON.parse('{"id":"kb/importing-data/how-can-i-format-dates-to-import-into-fintesk","title":"¿Cómo puedo formatear las fechas para importar a Fintesk?","description":"Fintesk admite múltiples formatos y configuraciones de fecha.Al importar sus propias fechas en cualquier campo del tipo Fecha, hay algunas cosas a tener en cuenta:","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk","permalink":"/es/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/es/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1742169600000,"sidebarPosition":8,"frontMatter":{"id":"how-can-i-format-dates-to-import-into-fintesk","title":"¿Cómo puedo formatear las fechas para importar a Fintesk?","sidebar_position":8,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-17T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importación-> Muestra de hojas de cálculo de importación","permalink":"/es/kb/importing-data/importing-sample-import-spreadsheets"},"next":{"title":"Updating Fintesk data with a spreadsheet","permalink":"/es/kb/importing-data/updating-fintesk-data-with-a-spreadsheet"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk.md


const frontMatter = {
	id: 'how-can-i-format-dates-to-import-into-fintesk',
	title: '¿Cómo puedo formatear las fechas para importar a Fintesk?',
	sidebar_position: '08',
	tags: [
		'Getting started',
		'Importing data'
	],
	last_update: {
		date: new Date('2025-03-17T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Mapeo en Fintesk",
  "id": "mapeo-en-fintesk",
  "level": 2
}, {
  "value": "Cómo formatear sus columnas en Excel",
  "id": "cómo-formatear-sus-columnas-en-excel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fintesk admite múltiples formatos y configuraciones de fecha.Al importar sus propias fechas en cualquier campo del tipo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fecha"
      }), ", hay algunas cosas a tener en cuenta:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Esta acción solo está disponible para los usuarios administrativos."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["¿Cómo está ingresando a sus datos? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "4/04/2016"
        }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2016/04/04"
        }), " por ejemplo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["¿Cómo está formateado la columna en su hoja de cálculo? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fecha"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "General"
        }), ", o ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Texto"
        }), " por ejemplo."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La siguiente imagen le muestra una importación que se realizó utilizando varias técnicas de formato diferentes y cómo aparecieron en Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estudie la imagen para ver cómo resultarán sus fechas:"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapeo-en-fintesk",
      children: "Mapeo en Fintesk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una vez que importe su hoja de cálculo, si Fintesk puede identificar el formato de sus fechas sin ninguna confusión, no se necesita acción. Si Fintesk no puede identificar el formato de sus fechas, le pedirá que especifique el formato de su hoja de cálculo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hci01",
        src: (__webpack_require__(95473)/* ["default"] */.A) + "",
        width: "832",
        height: "138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hci02",
        src: (__webpack_require__(86704)/* ["default"] */.A) + "",
        width: "603",
        height: "523"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cómo-formatear-sus-columnas-en-excel",
      children: "Cómo formatear sus columnas en Excel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las hojas de cálculo pueden formatear sus celdas para tipos especiales de datos. A menudo, puede recibir una hoja de cálculo que ya está formateada, o es posible que tenga que formatear sus propios datos. Aquí le mostramos cómo editar el formato de sus columnas en Excel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Haga clic con el botón derecho en la cabeza de su columna> Células de formato> Elija su formato deseado"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hci03",
        src: (__webpack_require__(21965)/* ["default"] */.A) + "",
        width: "692",
        height: "630"
      })
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
95473: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hci01-ff793abad3dfd37daf0f4df8a24c9e21.jpeg");

}),
86704: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hci02-72650160ada4a2a5b8a4b2a128556d84.jpeg");

}),
21965: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hci03-a8c10b7c63a94fa8c2dbfc12e5cfb54b.gif");

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