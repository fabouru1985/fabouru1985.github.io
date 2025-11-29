"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["5452"], {
12225: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_changing_the_field_type_of_a_custom_field_md_156_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-changing-the-field-type-of-a-custom-field-md-156.json
var site_docs_kb_importing_data_changing_the_field_type_of_a_custom_field_md_156_namespaceObject = JSON.parse('{"id":"kb/importing-data/changing-the-field-type-of-a-custom-field","title":"Changing the field type of a custom field","description":"The best way to change a custom field type is to recreate the field in the type that you want and use the Fintesk \\"System ID\\" feature to transfer the existing data into the new field.","source":"@site/docs/kb/importing-data/changing-the-field-type-of-a-custom-field.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/changing-the-field-type-of-a-custom-field","permalink":"/kb/importing-data/changing-the-field-type-of-a-custom-field","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":1,"frontMatter":{"id":"changing-the-field-type-of-a-custom-field","title":"Changing the field type of a custom field","sidebar_position":1,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importing Data","permalink":"/category/importing-data"},"next":{"title":"Importing data into Fintesk with spreadsheets","permalink":"/kb/importing-data/importing-data-into-fintesk-with-spreadsheets"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/changing-the-field-type-of-a-custom-field.md


const frontMatter = {
	id: 'changing-the-field-type-of-a-custom-field',
	title: 'Changing the field type of a custom field',
	sidebar_position: 1,
	tags: [
		'Getting started',
		'Importing data'
	],
	last_update: {
		date: new Date('2025-03-05T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Getting started",
  "id": "getting-started",
  "level": 2
}, {
  "value": "Exporting your data",
  "id": "exporting-your-data",
  "level": 2
}, {
  "value": "Importing your updated data",
  "id": "importing-your-updated-data",
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
      children: ["The best way to change a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/data-fields/custom-fields",
        children: "custom field"
      }), " type is to recreate the field in the type that you want and use the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/updating-fintesk-data-with-a-spreadsheet",
        children: "Fintesk \"System ID\" feature"
      }), " to transfer the existing data into the new field."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a new custom field with the correct custom field type."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Copy and paste the old custom field information into the new custom field through ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/exporting-data/exporting-data-from-fintesk",
          children: "exporting"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "importing"
        }), ". This step will allow you to “update” the newly created custom field with the data from the old custom field."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete the old custom field once all of the correct information has been moved to the new custom field."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-started",
      children: "Getting started"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before any exporting, make sure the new custom field with the correct type has been created in your account, so the old custom field information has somewhere to move to."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To create a custom field, go to ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Settings > ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/fields?utm_source=fintesk-docs",
          children: "Custom fields"
        })]
      }), " and select the category of custom field you wish to add to Fintesk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": While you are in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom fields"
        }), " settings page, it may be a good idea to edit the name of the existing custom field to include the word “old” to avoid any confusion during the updating process."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exporting-your-data",
      children: "Exporting your data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To get started with your export, you can go to the deals, persons, or organization ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "list view"
      }), " the custom field is under. You will need to include the following columns in your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "list view"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Old custom field"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New custom field"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Item ID (deal, person or organization)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " In the screenshots below, the values under the “Example text custom field” under deals will be moved over to the newly created “Example single option custom field” under deals."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft01",
        src: (__webpack_require__(28334)/* ["default"] */.A) + "",
        width: "1091",
        height: "712"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you have these four columns applied in your list view, you can then ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/exporting-data/exporting-data-from-fintesk",
        children: "export the list"
      }), " to a spreadsheet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the exported spreadsheet, you will then have to copy and paste all of the values under the old custom field into the cells under the new custom field. This will allow the new custom field to be “updated” with the information from the old custom field when you re-import your spreadsheet."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft02",
        src: (__webpack_require__(27834)/* ["default"] */.A) + "",
        width: "1106",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importing-your-updated-data",
      children: "Importing your updated data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you save the updated spreadsheet, you can then import the spreadsheet back into Fintesk by clicking the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"...\""
      }), " in the bottom left of your screen, then selecting ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/tools/import#history?utm_source=fintesk-docs",
          children: "Import data"
        }), " > From a spreadsheet"]
      }), ". You can learn more about importing ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you get to the mapping step of your import, it’s important to make sure all of the columns in your spreadsheet are mapped to the correct field in your Fintesk account."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft03",
        src: (__webpack_require__(9044)/* ["default"] */.A) + "",
        width: "1252",
        height: "764"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once everything is mapped, you can hit the \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next\""
      }), " button to proceed with your import."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "cft04",
        src: (__webpack_require__(96929)/* ["default"] */.A) + "",
        width: "670",
        height: "509"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once you confirm the information has successfully been transferred over from the old custom field to the new custom field, you can delete the old one."
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
28334: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cft01-6e1b293dd1a88f437766b486e4da5522.jpeg");

}),
27834: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cft02-e39e89f9763ce989738d618057047a2d.png");

}),
9044: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cft03-3e47a4e60e50b1d9c58d596529505c74.jpeg");

}),
96929: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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