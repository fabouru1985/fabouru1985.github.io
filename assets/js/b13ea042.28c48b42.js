"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["5590"], {
12715: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_import_fields_md_b13_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-import-fields-md-b13.json
var site_docs_kb_importing_data_import_fields_md_b13_namespaceObject = JSON.parse('{"id":"kb/importing-data/import-fields","title":"Import fields","description":"When you’re importing spreadsheets into Fintesk, it’s important to know which fields are available for you to move your spreadsheet data into.","source":"@site/docs/kb/importing-data/import-fields.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/import-fields","permalink":"/kb/importing-data/import-fields","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"},{"inline":true,"label":"Organizing your data","permalink":"/tags/organizing-your-data"},{"inline":true,"label":"Data fields","permalink":"/tags/data-fields"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":3,"frontMatter":{"id":"import-fields","title":"Import fields","sidebar_position":3,"tags":["Getting started","Importing data","Organizing your data","Data fields"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importing data into Fintesk with spreadsheets","permalink":"/kb/importing-data/importing-data-into-fintesk-with-spreadsheets"},"next":{"title":"Importing-> sample import spreadsheets","permalink":"/kb/importing-data/importing-sample-import-spreadsheets"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/import-fields.md


const frontMatter = {
	id: 'import-fields',
	title: 'Import fields',
	sidebar_position: 3,
	tags: [
		'Getting started',
		'Importing data',
		'Organizing your data',
		'Data fields'
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
  "value": "Starting your import",
  "id": "starting-your-import",
  "level": 2
}, {
  "value": "How fields are organized",
  "id": "how-fields-are-organized",
  "level": 2
}, {
  "value": "Default fields",
  "id": "default-fields",
  "level": 2
}, {
  "value": "Activities",
  "id": "activities",
  "level": 3
}, {
  "value": "Custom fields",
  "id": "custom-fields",
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
      children: "When you’re importing spreadsheets into Fintesk, it’s important to know which fields are available for you to move your spreadsheet data into."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " For an in-depth guide to spreadsheet importing, check out ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "this article."
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "starting-your-import",
      children: "Starting your import"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " If you don‘t have a spreadsheet to work from, we provide sample spreadsheets that you can access on ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-sample-import-spreadsheets",
          children: "this page."
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To initiate a spreadsheet import, go to ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Tools and apps > ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/tools/import#history",
          children: "Import data"
        }), " > From a spreadsheet."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "if01",
        src: (__webpack_require__(76115)/* ["default"] */.A) + "",
        width: "1266",
        height: "940"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-fields-are-organized",
      children: "How fields are organized"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the import window, there are seven data categories that represent your available field types."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Person"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "if02",
        src: (__webpack_require__(60198)/* ["default"] */.A) + "",
        width: "1254",
        height: "932"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In each field type category, the fields are listed alphabetically (including custom fields.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "if03",
        src: (__webpack_require__(90413)/* ["default"] */.A) + "",
        width: "1241",
        height: "934"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "default-fields",
      children: "Default fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deals"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "persons"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "organizations"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "products"
      }), ", the available default fields for import can be found in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/fields?utm_source=fintesk-docs",
          children: "data fields"
        })
      }), " section of your settings under each category."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "if04",
        src: (__webpack_require__(36920)/* ["default"] */.A) + "",
        width: "1562",
        height: "950"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activities",
      children: "Activities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activities don‘t appear in the data fields section of your account, but you can see the available import fields in the import mapping screen."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "if05",
        src: (__webpack_require__(47407)/* ["default"] */.A) + "",
        width: "1242",
        height: "885"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-fields",
      children: "Custom fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Activities and notes don’t have custom fields available. For more information about custom fields, check out ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/data-fields/custom-fields",
          children: "this article."
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In addition to default fields, custom fields can be mapped when importing data into your Fintesk account."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "if06",
        src: (__webpack_require__(50258)/* ["default"] */.A) + "",
        width: "1248",
        height: "936"
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
76115: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/if01-afb67800b3e5d127a04192dcdbd5e5e0.jpeg");

}),
60198: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/if02-a08b6a357f5af67d07a56c6aa8a4dac0.jpeg");

}),
90413: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/if03-80f36acb6b2fad645811a26b01ee52d7.jpeg");

}),
36920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/if04-c8108925684ba67ad2828de82f936ebf.jpeg");

}),
47407: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/if05-8a725d20b5de736c83152fd41ee0c680.jpeg");

}),
50258: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/if06-f2d2d844eb8056a4852b9bd27d2f1ee0.jpeg");

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