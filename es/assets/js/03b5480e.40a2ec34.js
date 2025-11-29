"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["2779"], {
56153: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_updating_fintesk_data_with_a_spreadsheet_md_03b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-importing-data-updating-fintesk-data-with-a-spreadsheet-md-03b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_updating_fintesk_data_with_a_spreadsheet_md_03b_namespaceObject = JSON.parse('{"id":"kb/importing-data/updating-fintesk-data-with-a-spreadsheet","title":"Updating Fintesk data with a spreadsheet","description":"Tener una gran base de datos de negocios, personas o cualquier otro elemento puede ser natural al administrar sus ventas. Sin embargo, se puede esperar que alguna información se vuelva anticuada con el tiempo. Actualizar cada uno de ellos manualmente es factible, pero si hay mucha información que debe actualizarse, puede requerir un tiempo y un esfuerzo importantes que podría estar utilizando para concretar las negocios y sus ventas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/updating-fintesk-data-with-a-spreadsheet.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/updating-fintesk-data-with-a-spreadsheet","permalink":"/es/kb/importing-data/updating-fintesk-data-with-a-spreadsheet","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/es/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1742256000000,"sidebarPosition":11,"frontMatter":{"id":"updating-fintesk-data-with-a-spreadsheet","title":"Updating Fintesk data with a spreadsheet","sidebar_position":11,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-18T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"¿Cómo puedo formatear las fechas para importar a Fintesk?","permalink":"/es/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk"},"next":{"title":"Transferring data to a different Fintesk company account","permalink":"/es/kb/importing-data/transferring-data-to-a-different-fintesk-company-account"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/updating-fintesk-data-with-a-spreadsheet.md


const frontMatter = {
	id: 'updating-fintesk-data-with-a-spreadsheet',
	title: 'Updating Fintesk data with a spreadsheet',
	sidebar_position: 11,
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



const toc = [{
  "value": "Función de ID del sistema Fintesk",
  "id": "función-de-id-del-sistema-fintesk",
  "level": 2
}, {
  "value": "Exportando sus datos",
  "id": "exportando-sus-datos",
  "level": 2
}, {
  "value": "¿Qué IDs y campos debo usar?",
  "id": "qué-ids-y-campos-debo-usar",
  "level": 3
}, {
  "value": "¿Cómo obtengo los ID del sistema Fintesk en la vista de lista?",
  "id": "cómo-obtengo-los-id-del-sistema-fintesk-en-la-vista-de-lista",
  "level": 3
}, {
  "value": "Importando sus datos",
  "id": "importando-sus-datos",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Tener una gran base de datos de negocios, personas o cualquier otro elemento puede ser natural al administrar sus ventas. Sin embargo, se puede esperar que alguna información se vuelva anticuada con el tiempo. Actualizar cada uno de ellos manualmente es factible, pero si hay mucha información que debe actualizarse, puede requerir un tiempo y un esfuerzo importantes que podría estar utilizando para concretar las negocios y sus ventas."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Esta acción solo está disponible para usuarios administrativos y usuarios regulares con los permisos correctos habilitados."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si ya tiene todos los datos que necesita en una hoja de cálculo, ¿y necesita llevarlos a Fintesk sin crear duplicados? Por esa razón, Fintesk le permite actualizar su base de datos masivamente importando una hoja de cálculo con la función ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID del sistema Fintesk"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "función-de-id-del-sistema-fintesk",
      children: "Función de ID del sistema Fintesk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dentro de Fintesk, cada elemento (negocio, persona, organización, actividad, producto, notas) se le asigna una identificación única en la creación. Puede encontrar esta identificación en la URL de la vista de detalle de cada elemento, o puede agregarla como una columna en la vista de lista."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "01",
        src: (__webpack_require__(33439)/* ["default"] */.A) + "",
        width: "2380",
        height: "1028"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exportando-sus-datos",
      children: "Exportando sus datos"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qué-ids-y-campos-debo-usar",
      children: "¿Qué IDs y campos debo usar?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para actualizar sus elementos (negocios, personas, organizaciones, productos, etc.), es necesario incluir el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID del sistema Fintesk"
      }), " y cualquier otro campo que desee actualizar."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Por ejemplo, supongamos que desea cambiar los valores, la etapa y el dueño de los negocios existentes. Necesita exportar una lista con la columna ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID"
      }), " más la columnas ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Valor"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nombre de etapa"
      }), " y ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Propietario (dueño)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "02",
        src: (__webpack_require__(95776)/* ["default"] */.A) + "",
        width: "2698",
        height: "1029"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tenga en cuenta que puede exportar otras columnas como referencia, como el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nombre"
      }), ". Sin embargo, cualquier cambio que realice en esas columnas se sobrescribirán cuando importe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cómo-obtengo-los-id-del-sistema-fintesk-en-la-vista-de-lista",
      children: "¿Cómo obtengo los ID del sistema Fintesk en la vista de lista?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para hacer visible la columna ID en la vista de lista, haga clic en el ícono de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "engranaje"
      }), " para abrir la ventana de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Elija columnas\""
      }), ", busque y seleccione el campo ID deseado y haga clic en \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guardar"
      }), "\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "03",
        src: (__webpack_require__(51357)/* ["default"] */.A) + "",
        width: "2690",
        height: "1460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Puede obtener ID de negocio, persona y organización dentro de la vista de lista de la pestaña de negocios. Sin embargo, si tiene contactos sin negocios asociados, no aparecerán en la vista de lista de la pestaña de negocios. Luego deberá usar la vista de lista de la pestaña Contactos para obtener esas ID."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/filtering/",
        children: "crear un filtro para reducir la lista"
      }), "\na solo los elementos que desea actualizar. Cuando la vista de la lista esté configurada para mostrar sus campos de ID del sistema Fintesk, exporte la lista aquí:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "04",
        src: (__webpack_require__(19894)/* ["default"] */.A) + "",
        width: "2216",
        height: "1274"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importando-sus-datos",
      children: "Importando sus datos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una vez exportado, realice todos los cambios necesarios en los datos dentro de la hoja de cálculo. Aquí hay un ejemplo de cómo se vería su hoja de cálculo cuando la exporta antes de los cambios:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "iyd_01",
        src: (__webpack_require__(90482)/* ["default"] */.A) + "",
        width: "1534",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Y aquí hay un ejemplo de la misma hoja de cálculo con cambios realizados. Tenga en cuenta que los campos de identificación no necesitan cambiarse. Solo necesita cambiar la información que debe actualizarse en Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "iyd_02",
        src: (__webpack_require__(38665)/* ["default"] */.A) + "",
        width: "1389",
        height: "209"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Entonces, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/transferring-data-to-a-different-fintesk-company-account",
        children: "importar la hoja de cálculo"
      }), " a fintesk y asigna los campos de identificación correspondientes a sus columnas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "05",
        src: (__webpack_require__(66707)/* ["default"] */.A) + "",
        width: "3312",
        height: "1646"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando se asignen todos los campos, haga clic en \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Siguiente"
      }), "\" y finalice la importación. El ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID del sistema Fintesk"
      }), " actualizará automáticamente su base de datos con su nueva información, ya que Fintesk sabrá qué elementos está actualizando en función de la ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID del sistema Fintesk"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Si recibe un error al intentar importar una hoja de cálculo, el problema puede provenir de su hoja de cálculo: el tamaño máximo del archivo está limitado a 50 MB, con un límite máximo de 50,000 filas. Puede obtener más información sobre la importación de errores en ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-errors-and-skip-files",
          children: "este artículo"
        }), "."]
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
33439: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/01-28eb2cd004ae93674a35ecb07a0ea295.png");

}),
95776: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/02-7ce741fde019577b1e4345793353f79c.jpg");

}),
51357: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/03-6ac5fa08d0cde5c18d833b82ca8f3c32.jpg");

}),
19894: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/04-ba59669100839cd4216fbd27ea43fadc.jpg");

}),
66707: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/05-6308d7a4ef7eb597f2676d4465bff667.jpg");

}),
90482: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iyd_01-317845d5f2824bff658712f68f248fe1.png");

}),
38665: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iyd_02-dca4e8d847b5e3fef708f5df80709a93.png");

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