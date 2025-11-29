"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4291"], {
52273: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_importing_mandatory_fields_md_ce1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-importing-mandatory-fields-md-ce1.json
var site_docs_kb_importing_data_importing_mandatory_fields_md_ce1_namespaceObject = JSON.parse('{"id":"kb/importing-data/importing-mandatory-fields","title":"Importing-> mandatory fields","description":"When importing data to Fintesk from a spreadsheet, it\'s important to include the fields that are mandatory for each item to be imported successfully. This article takes you through which fields are mandatory for importing.","source":"@site/docs/kb/importing-data/importing-mandatory-fields.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-mandatory-fields","permalink":"/kb/importing-data/importing-mandatory-fields","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":15,"frontMatter":{"id":"importing-mandatory-fields","title":"Importing-> mandatory fields","sidebar_position":15,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importing-> advanced mapping","permalink":"/kb/importing-data/importing-advanced-mapping"},"next":{"title":"Why do my imported currency values appear as \\"0\\"?","permalink":"/kb/importing-data/why-do-my-imported-currency-values-appear-as-0"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/importing-mandatory-fields.md


const frontMatter = {
	id: 'importing-mandatory-fields',
	title: 'Importing-> mandatory fields',
	sidebar_position: 15,
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
  "value": "Deals",
  "id": "deals",
  "level": 2
}, {
  "value": "What other fields can I include with my deals import?",
  "id": "what-other-fields-can-i-include-with-my-deals-import",
  "level": 3
}, {
  "value": "Contacts: persons and organizations",
  "id": "contacts-persons-and-organizations",
  "level": 2
}, {
  "value": "Products",
  "id": "products",
  "level": 2
}, {
  "value": "What other fields can I include with my product import?",
  "id": "what-other-fields-can-i-include-with-my-product-import",
  "level": 3
}, {
  "value": "Activity",
  "id": "activity",
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
      children: "When importing data to Fintesk from a spreadsheet, it's important to include the fields that are mandatory for each item to be imported successfully. This article takes you through which fields are mandatory for importing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you would like more general information on how to import data to Fintesk, you can ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "read this article"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " If you don't import your data with the mandatory fields, no items will be created and a skip file will be generated."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deals",
      children: "Deals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every deal in Fintesk needs to have either a contact person or organization linked to it. To import a deal, you will need to add at least ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one"
      }), " deal field and any of the following in your spreadsheet:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Person name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization name"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We recommend including the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deal name"
      }), " field, but it’s not mandatory. If you don’t include a deal name, the deal will automatically take the name of the contact that it is imported with."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf01",
        src: (__webpack_require__(4883)/* ["default"] */.A) + "",
        width: "1394",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf01_2",
        src: (__webpack_require__(36484)/* ["default"] */.A) + "",
        width: "1253",
        height: "887"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-other-fields-can-i-include-with-my-deals-import",
      children: "What other fields can I include with my deals import?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also include the following deal fields:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Owner"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected close date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any custom fields"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are importing a historic deal or a deal that has already been closed, you can use the following fields:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Won time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lost time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " To import a deal, you don't necessarily need to have a deal name in your spreadsheet. If you want to create deals for each person or organization, you just need to create an empty column in your spreadsheet for the deal names. Make sure this empty column is mapped to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deal-Name"
        }), " field."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When imported, the deal's titles will automatically take the name of the organization. If there is no organization, it will take the name of the contact person."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contacts-persons-and-organizations",
      children: "Contacts: persons and organizations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When importing persons or organizations, only the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " is mandatory for successful contact creation. However, it is recommended to add more fields to better identify your contact and avoid duplications from being created. Learn more about how Fintesk detects duplicates during importing in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/how-to-avoid-duplicates-during-an-import",
        children: "this article"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For persons, add the following to prevent duplicates from being created:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "email address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phone number"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For organizations, include the following to prevent duplicates from being created:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Organizations and persons can be created separately, but we recommend importing them together to automatically link them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf02",
        src: (__webpack_require__(59128)/* ["default"] */.A) + "",
        width: "1314",
        height: "155"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf02_2",
        src: (__webpack_require__(252)/* ["default"] */.A) + "",
        width: "1243",
        height: "879"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Red in the above images represents a mandatory field."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "products",
      children: "Products"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To import a product, you will just need the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "product name"
      }), " in your spreadsheet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf03",
        src: (__webpack_require__(80257)/* ["default"] */.A) + "",
        width: "556",
        height: "143"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf03_2",
        src: (__webpack_require__(69882)/* ["default"] */.A) + "",
        width: "1249",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-other-fields-can-i-include-with-my-product-import",
      children: "What other fields can I include with my product import?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also include other product fields such as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "price"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "currency"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "description"
      }), " and any ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "custom fields"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Currently it is not possible to link products to deals through an import. You can only link a product to a deal when your data has already been imported into Fintesk."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activity",
      children: "Activity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the time being, activities don't have any mandatory fields. However, it is recommended to include information such as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subject"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "due date"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "assigned to user"
      }), ", as well as any linked deals, or contacts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "imf04",
        src: (__webpack_require__(62542)/* ["default"] */.A) + "",
        width: "722",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "imf04_2",
        src: (__webpack_require__(39934)/* ["default"] */.A) + "",
        width: "1241",
        height: "884"
      }), "\nIf your activity has already been completed, you can include the following historical fields:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Done time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Marked as done time"
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
4883: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf01-4ab2473506557dd2254ee6b20a4181fc.png");

}),
36484: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf01_2-dea006d5fc271c0adc62808524ad47ae.png");

}),
59128: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf02-757a71452a57fa9f821f12e522905b10.png");

}),
252: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf02_2-0019334aa4008e300a55da35c541ae8c.jpeg");

}),
80257: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf03-8a985fa223a03361a91bef64b0c98e7c.png");

}),
69882: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf03_2-45c42b71b26c15dcccae1f47aa7a805c.png");

}),
62542: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/imf04-98d001bc98677275790dae3d55282b9d.png");

}),
39934: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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