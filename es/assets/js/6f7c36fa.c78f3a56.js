"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["6618"], {
13416: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_changing_the_field_type_of_a_custom_field_md_6f7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-importing-data-changing-the-field-type-of-a-custom-field-md-6f7.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_changing_the_field_type_of_a_custom_field_md_6f7_namespaceObject = JSON.parse('{"id":"kb/importing-data/changing-the-field-type-of-a-custom-field","title":"Cambiar el tipo de campo de un campo personalizado","description":"La mejor manera de cambiar el tipo de un campo personalizado es recrear el campo en el tipo que desea y usar la función Fintesk \\"ID del sistema\\" para transferir los datos existentes al nuevo campo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/changing-the-field-type-of-a-custom-field.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/changing-the-field-type-of-a-custom-field","permalink":"/es/kb/importing-data/changing-the-field-type-of-a-custom-field","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/es/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1742169600000,"sidebarPosition":1,"frontMatter":{"id":"changing-the-field-type-of-a-custom-field","title":"Cambiar el tipo de campo de un campo personalizado","sidebar_position":1,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-17T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importing Data","permalink":"/es/category/importing-data"},"next":{"title":"Importar datos a Fintesk con hojas de cálculo","permalink":"/es/kb/importing-data/importing-data-into-fintesk-with-spreadsheets"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/changing-the-field-type-of-a-custom-field.md


const frontMatter = {
	id: 'changing-the-field-type-of-a-custom-field',
	title: 'Cambiar el tipo de campo de un campo personalizado',
	sidebar_position: 1,
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
  "value": "Empezando con los cambios",
  "id": "empezando-con-los-cambios",
  "level": 2
}, {
  "value": "Exportar sus datos",
  "id": "exportar-sus-datos",
  "level": 2
}, {
  "value": "Importando sus datos actualizados",
  "id": "importando-sus-datos-actualizados",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: ["La mejor manera de cambiar el tipo de un ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/data-fields/custom-fields",
        children: "campo personalizado"
      }), " es recrear el campo en el tipo que desea y usar la función ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/updating-fintesk-data-with-a-spreadsheet",
        children: "Fintesk \"ID del sistema\""
      }), " para transferir los datos existentes al nuevo campo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cree un nuevo campo personalizado con el tipo de campo personalizado correcto."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Copie y pegue la información de campo personalizado antiguo en el nuevo campo personalizado a través de ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/exporting-data/exporting-data-from-fintesk",
          children: "Exportación"
        }), " e ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "importación"
        }), ". Este paso le permitirá \"actualizar\" el campo personalizado recién creado con los datos del campo personalizado anterior."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elimine el campo personalizado antiguo una vez que toda la información correcta se haya movido al nuevo campo personalizado."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "empezando-con-los-cambios",
      children: "Empezando con los cambios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Antes de cualquier exportación, asegúrese de que el nuevo campo personalizado con el tipo correcto se haya creado en su cuenta, por lo que la información del campo personalizado antiguo tiene un lugar al que moverse."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para crear un campo personalizado, vaya a ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Configuración> ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/fields?utm_source=fintesk-docs",
          children: "Campos personalizados"
        })]
      }), " y seleccione la categoría de campo personalizado que desea agregar a Fintesk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota"
        }), ": Mientras se encuentra en la página de configuración de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Campos personalizados"
        }), ", puede ser una buena idea editar el nombre del campo personalizado existente para incluir la palabra \"antiguo\" para evitar cualquier confusión durante el proceso de actualización."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exportar-sus-datos",
      children: "Exportar sus datos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para comenzar con su exportación, puede ir a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vista de lista"
      }), " de los negocios, personas u organización los campos personalizado están debajo. Deberá incluir las siguientes columnas en su ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vista de lista"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nombre"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Antiguo campo personalizado"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nuevo campo personalizado"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ID de artículo (negocio, persona u organización)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " En las capturas de pantalla a continuación, los valores en el \"Ejemplo de Campo personalizado de texto\" en negocios se moverán al recién creado \"Ejemplo de Campo personalizado Opción Única\" en negocios."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft01",
        src: (__webpack_require__(84951)/* ["default"] */.A) + "",
        width: "1091",
        height: "712"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Una vez que tenga estas cuatro columnas aplicadas en su \"vista de lista\", puede ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/exporting-data/exporting-data-from-fintesk",
        children: "exportar la lista"
      }), " a una hoja de cálculo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En la hoja de cálculo exportada, tendrá que copiar y pegar todos los valores debajo del campo personalizado antiguo en las celdas debajo del campo personalizado nuevo. Esto permitirá que el nuevo campo personalizado se \"actualice\" con la información del campo personalizado anterior cuando vuelva a importar su hoja de cálculo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft02",
        src: (__webpack_require__(31989)/* ["default"] */.A) + "",
        width: "1106",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importando-sus-datos-actualizados",
      children: "Importando sus datos actualizados"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Una vez que guarde la hoja de cálculo actualizada, puede importar la hoja de cálculo de nuevo a Fintesk haciendo clic en el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"...\""
      }), " en la parte inferior izquierda de su pantalla, luego seleccionando ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/tools/import#history?utm_source=fintesk-docs",
          children: "Importar datos"
        }), " > De una hoja de cálculo"]
      }), ". Puede obtener más información sobre la importación ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "aquí"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando llega al paso de mapeo de su importación, es importante asegurarse de que todas las columnas de su hoja de cálculo se asignen al campo correcto en su cuenta de Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft03",
        src: (__webpack_require__(81889)/* ["default"] */.A) + "",
        width: "1252",
        height: "764"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Una vez que todo está asignado, puede presionar el botón ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Próximo\""
      }), " para continuar con su importación."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft04",
        src: (__webpack_require__(20180)/* ["default"] */.A) + "",
        width: "670",
        height: "509"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una vez que confirma que la información se ha transferido con éxito desde el campo personalizado anterior al nuevo campo personalizado, puede eliminar la anterior."
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
84951: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cft01-6e1b293dd1a88f437766b486e4da5522.jpeg");

}),
31989: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cft02-e39e89f9763ce989738d618057047a2d.png");

}),
81889: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cft03-3e47a4e60e50b1d9c58d596529505c74.jpeg");

}),
20180: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cft04-bc40273601f73c508a283083c4013c19.jpeg");

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