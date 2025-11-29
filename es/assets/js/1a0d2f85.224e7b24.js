"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["7657"], {
67937: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_mandatory_fields_md_1a0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-importing-data-importing-mandatory-fields-md-1a0.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_mandatory_fields_md_1a0_namespaceObject = JSON.parse('{"id":"kb/importing-data/importing-mandatory-fields","title":"Importación-> campos obligatorios","description":"Al importar datos a Fintesk desde una hoja de cálculo, es importante incluir los campos que son obligatorios para que cada elemento se importe con éxito. Este artículo lo lleva a través de los cuales los campos son obligatorios para la importación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-mandatory-fields.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-mandatory-fields","permalink":"/es/kb/importing-data/importing-mandatory-fields","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/es/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1742256000000,"sidebarPosition":15,"frontMatter":{"id":"importing-mandatory-fields","title":"Importación-> campos obligatorios","sidebar_position":15,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-18T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importación-> Mapeo avanzado","permalink":"/es/kb/importing-data/importing-advanced-mapping"},"next":{"title":"¿Por qué mis valores de moneda importados aparecen como \\"0\\"?","permalink":"/es/kb/importing-data/why-do-my-imported-currency-values-appear-as-0"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-mandatory-fields.md


const frontMatter = {
	id: 'importing-mandatory-fields',
	title: 'Importación-> campos obligatorios',
	sidebar_position: 15,
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
  "value": "Negocios",
  "id": "negocios",
  "level": 2
}, {
  "value": "¿Qué otros campos puedo incluir con mi importación de negocios?",
  "id": "qué-otros-campos-puedo-incluir-con-mi-importación-de-negocios",
  "level": 3
}, {
  "value": "Contactos: Personas y organizaciones",
  "id": "contactos-personas-y-organizaciones",
  "level": 2
}, {
  "value": "Productos",
  "id": "productos",
  "level": 2
}, {
  "value": "¿Qué otros campos puedo incluir con mi importación de productos?",
  "id": "qué-otros-campos-puedo-incluir-con-mi-importación-de-productos",
  "level": 3
}, {
  "value": "Actividad",
  "id": "actividad",
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Al importar datos a Fintesk desde una hoja de cálculo, es importante incluir los campos que son obligatorios para que cada elemento se importe con éxito. Este artículo lo lleva a través de los cuales los campos son obligatorios para la importación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si desea información más general sobre cómo importar datos a Fintesk, puede ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "leer este artículo"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Si no importa sus datos con los campos obligatorios, no se crearán elementos y se generará un archivo de omisión."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "negocios",
      children: "Negocios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cada negocio en Fintesk necesita tener una persona de contacto u organización vinculada a él. Para importar un negocio, deberá agregar al menos ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "un"
      }), " campo de negocio y cualquiera de los siguientes en su hoja de cálculo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nombre de la persona"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nombre de la organización"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Recomendamos incluir el campo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nombre del negocio"
      }), ", pero no es obligatorio. Si no incluye un nombre de negocio, el negocio tomará automáticamente el nombre del contacto con el que se importa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf01",
        src: (__webpack_require__(34622)/* ["default"] */.A) + "",
        width: "1394",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf01_2",
        src: (__webpack_require__(34449)/* ["default"] */.A) + "",
        width: "1253",
        height: "887"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qué-otros-campos-puedo-incluir-con-mi-importación-de-negocios",
      children: "¿Qué otros campos puedo incluir con mi importación de negocios?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "También puede incluir los siguientes campos de negocios:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propietario"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Etapa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Valor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fecha de cierre esperada"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cualquier campo personalizado"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si está importando un negocio histórico o un negocio que ya se ha cerrado, puede usar los siguientes campos:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fecha de Ganado"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fecha de Perdido"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estado"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Para importar un negocio, no necesariamente necesita tener un nombre de negocio en su hoja de cálculo. Si desea crear negocios para cada persona u organización, solo necesita crear una columna vacía en su hoja de cálculo para los nombres de los negocios. Asegúrese de que esta columna vacía esté asignada al campo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Nombre de negocio"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando se importan, los nombres del negocio tomarán automáticamente el nombre de la organización. Si no hay organización, tomará el nombre de la persona de contacto."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contactos-personas-y-organizaciones",
      children: "Contactos: Personas y organizaciones"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al importar personas u organizaciones, solo el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nombre"
      }), " es obligatorio para la creación de contacto exitosa. Sin embargo, se recomienda agregar más campos para identificar mejor su contacto y evitar que se creen duplicados. Obtenga más información sobre cómo Fintesk detecta duplicados durante la importación en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/how-to-avoid-duplicates-during-an-import",
        children: "este artículo"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para las personas, agregue lo siguiente para evitar que se creen duplicados:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dirección de correo electrónico"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Número de teléfono"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para las organizaciones, incluya lo siguiente para evitar que se creen duplicados:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dirección"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las organizaciones y las personas se pueden crear por separado, pero recomendamos importarlos para vincularlos automáticamente."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf02",
        src: (__webpack_require__(54997)/* ["default"] */.A) + "",
        width: "1314",
        height: "155"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf02_2",
        src: (__webpack_require__(79103)/* ["default"] */.A) + "",
        width: "1243",
        height: "879"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " El rojo en las imágenes de arriba representa un campo obligatorio."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "productos",
      children: "Productos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para importar un producto, solo necesitará el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nombre del producto"
      }), " en su hoja de cálculo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf03",
        src: (__webpack_require__(43372)/* ["default"] */.A) + "",
        width: "556",
        height: "143"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf03_2",
        src: (__webpack_require__(85271)/* ["default"] */.A) + "",
        width: "1249",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qué-otros-campos-puedo-incluir-con-mi-importación-de-productos",
      children: "¿Qué otros campos puedo incluir con mi importación de productos?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["También puede incluir otros campos de productos como ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "precio"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "moneda"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "descripción"
      }), " y cualquier ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "campo personalizado"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Actualmente no es posible vincular productos a negocios a través de una importación. Solo puede vincular un producto a un negocio cuando sus datos ya se hayan importado a Fintesk."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actividad",
      children: "Actividad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Por el momento, las actividades no tienen campos obligatorios. Sin embargo, se recomienda incluir información como el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Asunto"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fecha finalización"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tipo"
      }), " y ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Asignado al usuario"
      }), ", así como cualquier negocio vinculado o contactos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf04",
        src: (__webpack_require__(92771)/* ["default"] */.A) + "",
        width: "722",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf04_2",
        src: (__webpack_require__(24025)/* ["default"] */.A) + "",
        width: "1241",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si su actividad ya se ha completado, puede incluir los siguientes campos históricos:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fecha de completado"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Marcado como completado"
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
34622: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf01-4ab2473506557dd2254ee6b20a4181fc.png");

}),
34449: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf01_2-dea006d5fc271c0adc62808524ad47ae.png");

}),
54997: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf02-757a71452a57fa9f821f12e522905b10.png");

}),
79103: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf02_2-0019334aa4008e300a55da35c541ae8c.jpeg");

}),
43372: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf03-8a985fa223a03361a91bef64b0c98e7c.png");

}),
85271: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf03_2-45c42b71b26c15dcccae1f47aa7a805c.png");

}),
92771: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf04-98d001bc98677275790dae3d55282b9d.png");

}),
24025: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf04_2-35d8af5a2f35e4102c266064dfd5c957.jpeg");

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