"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["6848"], {
70694: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_updating_fintesk_data_with_a_spreadsheet_md_982_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-updating-fintesk-data-with-a-spreadsheet-md-982.json
var site_docs_kb_importing_data_updating_fintesk_data_with_a_spreadsheet_md_982_namespaceObject = JSON.parse('{"id":"kb/importing-data/updating-fintesk-data-with-a-spreadsheet","title":"Updating Fintesk data with a spreadsheet","description":"Having a large database of deals, persons, or any other item can be natural when managing your sales. However, it can be expected that some information becomes outdated over time. Updating each one of them manually is doable, but if there is a lot of information that needs to be updated, it may require important time and effort that you could be using to close deals.","source":"@site/docs/kb/importing-data/updating-fintesk-data-with-a-spreadsheet.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/updating-fintesk-data-with-a-spreadsheet","permalink":"/kb/importing-data/updating-fintesk-data-with-a-spreadsheet","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":11,"frontMatter":{"id":"updating-fintesk-data-with-a-spreadsheet","title":"Updating Fintesk data with a spreadsheet","sidebar_position":11,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"How can I format dates to import into Fintesk?","permalink":"/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk"},"next":{"title":"Transferring data to a different Fintesk company account","permalink":"/kb/importing-data/transferring-data-to-a-different-fintesk-company-account"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/updating-fintesk-data-with-a-spreadsheet.md


const frontMatter = {
	id: 'updating-fintesk-data-with-a-spreadsheet',
	title: 'Updating Fintesk data with a spreadsheet',
	sidebar_position: 11,
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
  "value": "Fintesk System ID feature",
  "id": "fintesk-system-id-feature",
  "level": 2
}, {
  "value": "Exporting your data",
  "id": "exporting-your-data",
  "level": 2
}, {
  "value": "Which IDs and fields should I use?",
  "id": "which-ids-and-fields-should-i-use",
  "level": 3
}, {
  "value": "How do I get the Fintesk System IDs in the list view?",
  "id": "how-do-i-get-the-fintesk-system-ids-in-the-list-view",
  "level": 3
}, {
  "value": "Importing your data",
  "id": "importing-your-data",
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
      children: "Having a large database of deals, persons, or any other item can be natural when managing your sales. However, it can be expected that some information becomes outdated over time. Updating each one of them manually is doable, but if there is a lot of information that needs to be updated, it may require important time and effort that you could be using to close deals."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This action is only available to admin users and regular users with the correct permissions enabled."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you already have all the data you need in a spreadsheet, and you need to get it into Fintesk without creating duplicates? For that reason, Fintesk allows you to update your database in bulk by importing a spreadsheet with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fintesk System ID"
      }), " feature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fintesk-system-id-feature",
      children: "Fintesk System ID feature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Within Fintesk, every item – deal, person, organization, activity, product, note – is assigned a unique ID upon creation. You can find this ID in the URL of the detail view of each item, or you can add it as a column in the list view."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "01",
        src: (__webpack_require__(71856)/* ["default"] */.A) + "",
        width: "2380",
        height: "1028"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exporting-your-data",
      children: "Exporting your data"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "which-ids-and-fields-should-i-use",
      children: "Which IDs and fields should I use?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To update your items (deals, persons, organizations, products, etc.), it's necessary to include the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fintesk System ID"
      }), " and any other fields you'd like to update."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, let’s say that you want to change the values, stage and ownership of existing deals. You need to export a list with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID"
      }), " column plus the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stage Name"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner"
      }), " columns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "02",
        src: (__webpack_require__(14115)/* ["default"] */.A) + "",
        width: "2698",
        height: "1029"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note that you can export other columns for reference, like the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), ". However, any changes that you make in those columns will be overwritten when you import."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-get-the-fintesk-system-ids-in-the-list-view",
      children: "How do I get the Fintesk System IDs in the list view?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To make the ID column visible in the list view, click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gear icon"
      }), " to open the \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choose columns"
      }), "\" section, search and select the desired ID field and click \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), "\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "03",
        src: (__webpack_require__(54630)/* ["default"] */.A) + "",
        width: "2690",
        height: "1460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " You can get deal, person and organization IDs inside the list view of the deals tab. However, if you have contacts with no associated deals, they will not show up in the list view of the deals tab. You will then have to use the list view of the contacts tab to get those IDs."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/filtering/",
        children: "create a filter to narrow down the list"
      }), "\nto only items you want to update. When the list view is configured to display your Fintesk System ID fields, export the list here:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "04",
        src: (__webpack_require__(90061)/* ["default"] */.A) + "",
        width: "2216",
        height: "1274"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importing-your-data",
      children: "Importing your data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once exported, make all necessary changes to the data within the spreadsheet. Here is one example of what your spreadsheet would look like when you export it before the changes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "iyd_01",
        src: (__webpack_require__(41437)/* ["default"] */.A) + "",
        width: "1534",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "And here is an example of the same spreadsheet with changes made to it. Keep in mind that the ID fields don’t need to be changed. You only need to change the information that needs to be updated in Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "iyd_02",
        src: (__webpack_require__(74022)/* ["default"] */.A) + "",
        width: "1389",
        height: "209"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/transferring-data-to-a-different-fintesk-company-account",
        children: "import the spreadsheet"
      }), " to Fintesk and map the corresponding ID fields to their columns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "05",
        src: (__webpack_require__(21488)/* ["default"] */.A) + "",
        width: "3312",
        height: "1646"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When all the fields are mapped, click on “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), "” and finish the import. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fintesk System ID"
      }), " will automatically update your database with your new information, as Fintesk will know which elements you are updating based on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fintesk System ID"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " If you receive an error when attempting to import a spreadsheet, the issue may stem from your spreadsheet: the maximum file size is limited to 50MB, with a maximum limit of 50,000 rows. You can learn more about importing errors in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-errors-and-skip-files",
          children: "this article"
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
71856: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/01-28eb2cd004ae93674a35ecb07a0ea295.png");

}),
14115: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/02-7ce741fde019577b1e4345793353f79c.jpg");

}),
54630: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/03-6ac5fa08d0cde5c18d833b82ca8f3c32.jpg");

}),
90061: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/04-ba59669100839cd4216fbd27ea43fadc.jpg");

}),
21488: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/05-6308d7a4ef7eb597f2676d4465bff667.jpg");

}),
41437: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iyd_01-317845d5f2824bff658712f68f248fe1.png");

}),
74022: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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