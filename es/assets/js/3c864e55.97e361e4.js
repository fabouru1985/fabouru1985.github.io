"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["7305"], {
69890: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_advanced_mapping_md_3c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-importing-data-importing-advanced-mapping-md-3c8.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_advanced_mapping_md_3c8_namespaceObject = JSON.parse('{"id":"kb/importing-data/importing-advanced-mapping","title":"Importación-> Mapeo avanzado","description":"Al importar en Fintesk, algunos campos pueden ser más complicados para mapear su hoja de cálculo dependiendo de cómo se configuren los campos. Los campos de múltiples opciones, dirección y tipo de teléfono requieren un paso adicional para que se asignen correctamente.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-advanced-mapping.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-advanced-mapping","permalink":"/es/kb/importing-data/importing-advanced-mapping","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/es/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1742169600000,"sidebarPosition":14,"frontMatter":{"id":"importing-advanced-mapping","title":"Importación-> Mapeo avanzado","sidebar_position":14,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-17T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importación-> Mapeo de sus campos","permalink":"/es/kb/importing-data/importing-mapping-your-fields"},"next":{"title":"Importación-> campos obligatorios","permalink":"/es/kb/importing-data/importing-mandatory-fields"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-advanced-mapping.md


const frontMatter = {
	id: 'importing-advanced-mapping',
	title: 'Importación-> Mapeo avanzado',
	sidebar_position: 14,
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
  "value": "Mapeo de múltiples campos de opción",
  "id": "mapeo-de-múltiples-campos-de-opción",
  "level": 2
}, {
  "value": "Mapeo de números de teléfono",
  "id": "mapeo-de-números-de-teléfono",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Al importar en Fintesk, algunos campos pueden ser más complicados para mapear su hoja de cálculo dependiendo de cómo se configuren los campos. Los campos de múltiples opciones, dirección y tipo de teléfono requieren un paso adicional para que se asignen correctamente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para comprender nuestra funcionalidad de mapeo básico, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-mapping-your-fields",
        children: "lee este artículo"
      }), ", o para obtener información más general sobre la importación de datos a Fintesk, por favor ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "lea este artículo"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapeo-de-múltiples-campos-de-opción",
      children: "Mapeo de múltiples campos de opción"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Para asignar un campo de opción múltiple, primero deberá asegurarse de que el campo de tipo de opción múltiple ya esté creado en su cuenta FinTesk. Puede obtener más información sobre los campos personalizados en ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/data-fields/custom-fields",
          children: "este artículo"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para importar un campo de opciones múltiples, hay un paso adicional para que pueda mapear. Cuando haya mapeado el campo en sí (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"número de grupo\""
      }), " En el ejemplo a continuación), haga clic en él para expandir y vea la asignación individual de cada opción de campo desde su hoja de cálculo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "iam01_1",
        src: (__webpack_require__(47368)/* ["default"] */.A) + "",
        width: "1238",
        height: "864"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "iam01",
        src: (__webpack_require__(71220)/* ["default"] */.A) + "",
        width: "1242",
        height: "880"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifique si las opciones de su hoja de cálculo se han asignado correctamente a las opciones de campo personalizadas en Fintesk. Si no se mapearon correctamente, haga clic y arrastre las opciones correctas a sus opciones correspondientes desde la hoja de cálculo."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapeo-de-números-de-teléfono",
      children: "Mapeo de números de teléfono"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al importar el número de teléfono de su contacto, tiene la opción de seleccionar la etiqueta del teléfono que desea asignar a Fintesk. Si tiene múltiples números de teléfono para un contacto, puede asignar el campo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Teléfono"
      }), " varias veces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Por ejemplo, si desea importar contactos con un número de teléfono móvil personal, así como un teléfono de trabajo, puede hacerlo agregando los números en columnas separadas."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "iam02",
        src: (__webpack_require__(20860)/* ["default"] */.A) + "",
        width: "1816",
        height: "378"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al asignar, puede hacer clic y arrastrar el campo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Teléfono"
      }), " varias veces. Una vez que se haya asignado, haga clic en el icono ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lápiz"
      }), " para asignar una etiqueta a ese tipo de número de teléfono."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "iam03",
        src: (__webpack_require__(71410)/* ["default"] */.A) + "",
        width: "1264",
        height: "870"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede elegir etiquetar sus números de teléfono como ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trabajo"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "casa"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "móvil"
      }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "otro"
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
71220: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iam01-6e99e94fc63dbb3cacca79462872bce3.gif");

}),
47368: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iam01_1-c3350fa9c4a8709b1852a603c4826467.gif");

}),
20860: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iam02-530d090acfbaf46f4a923acd903fb0ca.png");

}),
71410: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iam03-5803ae12959be2934279d501d2438971.gif");

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