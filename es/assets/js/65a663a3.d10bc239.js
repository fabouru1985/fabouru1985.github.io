"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["7557"], {
76075: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_data_fields_custom_fields_md_65a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-data-fields-custom-fields-md-65a.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_data_fields_custom_fields_md_65a_namespaceObject = JSON.parse('{"id":"kb/data-fields/custom-fields","title":"Campos personalizados","description":"Fintesk viene con un enfoque altamente personalizable para administrar su proceso de ventas (y de hecho, cualquier otro proceso). Sus negocios, contactos, organizaciones y productos ya vienen con los campos predeterminados necesarios para administrar sus datos, pero puede agregar campos específicos para las necesidades de su empresa como campos personalizados.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/data-fields/custom-fields.md","sourceDirName":"kb/data-fields","slug":"/kb/data-fields/custom-fields","permalink":"/es/kb/data-fields/custom-fields","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Organizing your data","permalink":"/es/tags/organizing-your-data"},{"inline":true,"label":"Data fields","permalink":"/es/tags/data-fields"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741651200000,"sidebarPosition":1,"frontMatter":{"id":"custom-fields","title":"Campos personalizados","sidebar_position":1,"tags":["Organizing your data","Data fields"],"last_update":{"date":"2025-03-11T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Data Fields","permalink":"/es/category/data-fields"},"next":{"title":"Campos de datos en Fintesk","permalink":"/es/kb/data-fields/data-fields-in-fintesk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/data-fields/custom-fields.md


const frontMatter = {
	id: 'custom-fields',
	title: 'Campos personalizados',
	sidebar_position: 1,
	tags: [
		'Organizing your data',
		'Data fields'
	],
	last_update: {
		date: new Date('2025-03-11T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar campos personalizados",
  "id": "agregar-campos-personalizados",
  "level": 2
}, {
  "value": "Field properties",
  "id": "field-properties",
  "level": 3
}, {
  "value": "Ver sus campos personalizados",
  "id": "ver-sus-campos-personalizados",
  "level": 2
}, {
  "value": "Actualización de sus campos personalizados",
  "id": "actualización-de-sus-campos-personalizados",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    br: "br",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fintesk viene con un ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fintesk.com/es/caracteristicas/personalizacion/?utm_source=fintesk-docs",
        children: "enfoque altamente personalizable"
      }), " para administrar su proceso de ventas (y de hecho, cualquier otro proceso). Sus negocios, contactos, organizaciones y productos ya vienen con los campos predeterminados necesarios para administrar sus datos, pero puede agregar campos específicos para las necesidades de su empresa como ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "campos personalizados"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Con los campos personalizados, puede documentar la información específica necesaria para personalizar sus datos, así como organizar y ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/filtering",
        children: "filtrar"
      }), " basado en estos campos en Fintesk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Esta acción solo está disponible para los usuarios con los correctos ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/users-and-permissions/permission-sets",
          children: "permisos globales"
        }), " habilitados. El número de campos personalizados que puede tener depende de en qué plan se encuentre. Obtenga más información sobre los límites de uso en ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/personal-settings/usage-limits-in-fintesk",
          children: "este artículo"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-campos-personalizados",
      children: "Agregar campos personalizados"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " ¿No está seguro de dónde agregar su campo personalizado? Obtenga más información sobre cómo se organizan sus datos ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/",
          children: "en este artículo."
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vaya a ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Configuración> Compañía> ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/fields?utm_source=fintesk-docs",
          children: "Campos de datos"
        })]
      }), ", y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Agregar campo personalizado\""
      }), ". El campo se puede agregar en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Negocio"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Persona"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Organización"
      }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Producto"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la ventana que aparece, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nombre"
      }), " el campo y seleccione el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tipo"
      }), " de campo que desea crear. Fintesk ofrece una variedad de tipos de campo personalizados que se pueden personalizar fácilmente en concordancia con la información que necesita para sus datos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A1",
        src: (__webpack_require__(38041)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede aprender sobre los tipos de campos personalizados disponibles en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/es/kb/data-fields/what-types-of-custom-fields-are-there",
        children: "este artículo"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A2",
        src: (__webpack_require__(57774)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "field-properties",
      children: "Field properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al agregar un campo personalizado, puede elegir los lugares donde el campo se muestra en Fintesk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aparece en la vista de agregar"
        }), "\nThe custom field always appears in that item’s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Add new”"
        }), " dialog."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aparece en la vista de detalle"
        }), "\nEl campo personalizado siempre aparece en ese elemento dentro de la ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vista de detalle"
        }), ". Por ejemplo, tal vez solo desee agregar un campo para trabajar solo con nuestra API."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-sus-campos-personalizados",
      children: "Ver sus campos personalizados"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede agregar, ver o eliminar los valores de campo personalizados en los siguientes lugares dentro de Fintesk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vista de detalle"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["En la ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vista de detalle"
        }), ", cualquier campo personalizado se puede encontrar en la sección ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Detalles"
        }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "A3",
          src: (__webpack_require__(35819)/* ["default"] */.A) + "",
          width: "2880",
          height: "1626"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vista de lista"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Haga clic en el ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "icono de engranaje"
        }), " a la derecha de la tabla y seleccione el campo personalizado en la sección \"", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Elegir columnas"
        }), "\".Haga clic en \"", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardar"
        }), "\" para que esa columna de campo personalizada sea visible en la vista de la lista\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "A4",
          src: (__webpack_require__(89080)/* ["default"] */.A) + "",
          width: "2880",
          height: "1626"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add new dialog:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Show in add new dialog”"
        }), " option is marked as “Yes,” the custom field will appear in the “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add new"
        }), "” modals.", (0,jsx_runtime.jsx)(_components.img, {
          alt: "A5",
          src: (__webpack_require__(93397)/* ["default"] */.A) + "",
          width: "2880",
          height: "1626"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la función de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Importación"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Al importar una hoja de cálculo en Fintesk, sus campos personalizados se pueden asignar a columnas en su hoja de cálculo. También puede agregar campos personalizados directamente desde la página ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapeo"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lea más sobre la importación ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/es/kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "en este artículo"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A6",
        src: (__webpack_require__(1322)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actualización-de-sus-campos-personalizados",
      children: "Actualización de sus campos personalizados"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para cambiar sus campos personalizados, vaya a ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Configuración> Compañía> ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/fields?utm_source=fintesk-docs",
          children: "Campos de datos"
        })]
      }), " y haga clic en el botón \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "..."
      }), "” junto a su campo personalizado."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A7",
        src: (__webpack_require__(69063)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Editar"
        }), "\nPuede cambiar el nombre de campo personalizado, propiedades de campo para su campo personalizado en cualquier momento. El tipo de campo personalizado no se puede cambiar una vez que se ha creado."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Borrar"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Eliminar su campo personalizado eliminará el campo y sus datos existentes de su cuenta Fintesk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copiar clave API"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Puede copiar la clave API de su campo personalizado. Para obtener más información sobre cómo usar la API, puede ver nuestra ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.fintesk.com/docs/category/knowledge-base?utm_source=fintesk-docs",
          children: "Documentación de API"
        }), "."]
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
38041: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A1-383bbd4ec2fcc3708a7c6034cbcb45bc.jpg");

}),
57774: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A2-34fc6088b906f1bc0635b91b599c1ea6.jpg");

}),
35819: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A3-af456b27c6c016992c45a1fb7e44d065.jpg");

}),
89080: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A4-cf40b92a0dda33a8c43d2cd292de58d1.jpg");

}),
93397: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A5-fc5421725afb3ffb2afb3728340fb270.jpg");

}),
1322: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A6-20b309acc59d2dd39a59753e61096f24.jpg");

}),
69063: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A7-275f067544e5faece9f33c6c52961334.jpg");

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