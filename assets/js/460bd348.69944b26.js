"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["6621"], {
68631: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_data_fields_custom_fields_md_460_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-data-fields-custom-fields-md-460.json
var site_docs_kb_data_fields_custom_fields_md_460_namespaceObject = JSON.parse('{"id":"kb/data-fields/custom-fields","title":"Custom fields","description":"Fintesk comes with a highly customizable approach to managing your sales process (and in fact, any other process). Your deals, contacts, organizations and products already come with the default fields needed to manage your data, but you can add fields specific to your company’s needs as custom fields.","source":"@site/docs/kb/data-fields/custom-fields.md","sourceDirName":"kb/data-fields","slug":"/kb/data-fields/custom-fields","permalink":"/kb/data-fields/custom-fields","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Organizing your data","permalink":"/tags/organizing-your-data"},{"inline":true,"label":"Data fields","permalink":"/tags/data-fields"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1719187200000,"sidebarPosition":1,"frontMatter":{"id":"custom-fields","title":"Custom fields","sidebar_position":1,"tags":["Organizing your data","Data fields"],"last_update":{"date":"2024-06-24T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Data Fields","permalink":"/category/data-fields"},"next":{"title":"Data fields in Fintesk","permalink":"/kb/data-fields/data-fields-in-fintesk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/data-fields/custom-fields.md


const frontMatter = {
	id: 'custom-fields',
	title: 'Custom fields',
	sidebar_position: 1,
	tags: [
		'Organizing your data',
		'Data fields'
	],
	last_update: {
		date: new Date('2024-06-24T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Adding custom fields",
  "id": "adding-custom-fields",
  "level": 2
}, {
  "value": "Field properties",
  "id": "field-properties",
  "level": 3
}, {
  "value": "Viewing your custom fields",
  "id": "viewing-your-custom-fields",
  "level": 2
}, {
  "value": "Updating your custom fields",
  "id": "updating-your-custom-fields",
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
      children: ["Fintesk comes with a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fintesk.com/es/caracteristicas/personalizacion/?utm_source=fintesk-docs",
        children: "highly customizable approach"
      }), " to managing your sales process (and in fact, any other process). Your deals, contacts, organizations and products already come with the default fields needed to manage your data, but you can add fields specific to your company’s needs as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "custom fields"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With custom fields, you can document specific information needed to customize your data as well as organize and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/filtering",
        children: "filter"
      }), " based on these fields in Fintesk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This action is only available to users with the correct ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/users-and-permissions/permission-sets",
          children: "\"global permissions\""
        }), " enabled. The number of custom fields you can have depends on which plan you’re on. Learn more about usage limits in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/personal-settings/usage-limits-in-fintesk",
          children: "this article"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-custom-fields",
      children: "Adding custom fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Not sure where to add your custom field? Learn more about how your data is organized ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/",
          children: "in this article."
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Settings > Company > ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/fields?utm_source=fintesk-docs",
          children: "Data fields"
        })]
      }), ", and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Add custom field“"
      }), ". The field can be added under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deal"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Person"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Organization"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the window that appears, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " the field and select the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type"
      }), " of field you wish to create. Fintesk offers a variety of custom field types that can easily be customized according to the information you need for your data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A1",
        src: (__webpack_require__(43870)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can learn about the types of custom fields available in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/kb/data-fields/what-types-of-custom-fields-are-there",
        children: "this article"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A2",
        src: (__webpack_require__(35369)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "field-properties",
      children: "Field properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When adding a custom field, you can choose the places where the field is shown in Fintesk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Appears in add view"
        }), "\nThe custom field always appears in that item’s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Add new”"
        }), " dialog."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Appears in detail view"
        }), "\nThe custom field always appears in that item’s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Detail View"
        }), ". For example, maybe\nyou only want to add a field for working only with our API."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-your-custom-fields",
      children: "Viewing your custom fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add, view, or delete custom field values in the following places within Fintesk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detail view"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "detail view"
        }), ", any custom fields can be found in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DETAILS"
        }), " section.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "A3",
          src: (__webpack_require__(37580)/* ["default"] */.A) + "",
          width: "2880",
          height: "1626"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "list view"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "gear icon"
        }), " to the right of the table and select the custom field in the “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose columns"
        }), "” section. Click “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Save"
        }), "” to make that custom field column visible in the list view\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "A4",
          src: (__webpack_require__(97815)/* ["default"] */.A) + "",
          width: "2880",
          height: "1626"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
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
          src: (__webpack_require__(45882)/* ["default"] */.A) + "",
          width: "2880",
          height: "1626"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Import"
      }), " function:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When importing a spreadsheet into Fintesk, your custom fields can be mapped to columns in your spreadsheet. You can also add custom fields directly from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mapping"
        }), " page."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Read more about importing ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "in this article"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A6",
        src: (__webpack_require__(3109)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updating-your-custom-fields",
      children: "Updating your custom fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To change your custom fields, go to ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Settings > Company > ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/fields?utm_source=fintesk-docs",
          children: "Data fields"
        })]
      }), " and click the \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "..."
      }), "” button next to your custom field."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "A7",
        src: (__webpack_require__(59144)/* ["default"] */.A) + "",
        width: "2880",
        height: "1626"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit"
        }), "\nYou can change the custom field name, field properties for your custom field at any time. The custom field type cannot be changed once it has been created."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Deleting your custom field will delete the field and its existing data from your Fintesk account."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy API key"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "You can copy your custom field’s API key. For more information on how to use the API, you can look at our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.fintesk.com/docs/category/knowledge-base?utm_source=fintesk-docs",
          children: "API documentation"
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
43870: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A1-383bbd4ec2fcc3708a7c6034cbcb45bc.jpg");

}),
35369: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A2-34fc6088b906f1bc0635b91b599c1ea6.jpg");

}),
37580: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A3-af456b27c6c016992c45a1fb7e44d065.jpg");

}),
97815: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A4-cf40b92a0dda33a8c43d2cd292de58d1.jpg");

}),
45882: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A5-fc5421725afb3ffb2afb3728340fb270.jpg");

}),
3109: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/A6-20b309acc59d2dd39a59753e61096f24.jpg");

}),
59144: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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