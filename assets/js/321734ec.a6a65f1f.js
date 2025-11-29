"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["42"], {
46527: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_importing_advanced_mapping_md_321_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-importing-advanced-mapping-md-321.json
var site_docs_kb_importing_data_importing_advanced_mapping_md_321_namespaceObject = JSON.parse('{"id":"kb/importing-data/importing-advanced-mapping","title":"Importing-> advanced mapping","description":"When importing in Fintesk, some fields can be trickier to map to your spreadsheet depending on how the fields are set up. Multiple option, address and phone type fields all require an extra step in order for them to be mapped correctly.","source":"@site/docs/kb/importing-data/importing-advanced-mapping.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-advanced-mapping","permalink":"/kb/importing-data/importing-advanced-mapping","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":14,"frontMatter":{"id":"importing-advanced-mapping","title":"Importing-> advanced mapping","sidebar_position":14,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importing-> mapping your fields","permalink":"/kb/importing-data/importing-mapping-your-fields"},"next":{"title":"Importing-> mandatory fields","permalink":"/kb/importing-data/importing-mandatory-fields"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/importing-advanced-mapping.md


const frontMatter = {
	id: 'importing-advanced-mapping',
	title: 'Importing-> advanced mapping',
	sidebar_position: 14,
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
  "value": "Mapping multiple option fields",
  "id": "mapping-multiple-option-fields",
  "level": 2
}, {
  "value": "Mapping phone numbers",
  "id": "mapping-phone-numbers",
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
      children: "When importing in Fintesk, some fields can be trickier to map to your spreadsheet depending on how the fields are set up. Multiple option, address and phone type fields all require an extra step in order for them to be mapped correctly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To understand our basic mapping functionality, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-mapping-your-fields",
        children: "read this article"
      }), ", or for more general information on importing data to Fintesk, please ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "read this article"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapping-multiple-option-fields",
      children: "Mapping multiple option fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " To map a multiple option field, you will first need to make sure the multiple option type custom field is already created in your Fintesk account. You can learn more about custom fields in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/data-fields/custom-fields",
          children: "this article"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In order to import a multiple option field, there is an extra step for you to map. When you have mapped the field itself (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Group Number\""
      }), " in the example below), click on it to expand and see the individual mapping of each field option from your spreadsheet."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "iam01_1",
        src: (__webpack_require__(67185)/* ["default"] */.A) + "",
        width: "1238",
        height: "864"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "iam01",
        src: (__webpack_require__(94741)/* ["default"] */.A) + "",
        width: "1242",
        height: "880"
      }), "\nCheck to see if the options from your spreadsheet have been mapped correctly to the custom field options in Fintesk. If they weren't mapped correctly, click and drag the correct options to their corresponding options from the spreadsheet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapping-phone-numbers",
      children: "Mapping phone numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When importing your contact's phone number, you have the option to select the phone label you want to map to Fintesk. If you have multiple phone numbers for a contact, you can map the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "phone"
      }), " field multiple times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, if you would like to import contacts with a personal mobile phone number as well as a work phone, you can do so by adding the numbers in separate columns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "iam02",
        src: (__webpack_require__(41677)/* ["default"] */.A) + "",
        width: "1816",
        height: "378"
      }), "\nWhen mapping, you can click and drag the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "phone"
      }), " field multiple times. Once it has been mapped, click on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pencil icon"
      }), " to assign a label to that phone number type."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "iam03",
        src: (__webpack_require__(19811)/* ["default"] */.A) + "",
        width: "1264",
        height: "870"
      }), "\nYou can choose to label your phone numbers as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Work"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Home"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mobile"
      }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Other"
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
94741: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iam01-6e99e94fc63dbb3cacca79462872bce3.gif");

}),
67185: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iam01_1-c3350fa9c4a8709b1852a603c4826467.gif");

}),
41677: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iam02-530d090acfbaf46f4a923acd903fb0ca.png");

}),
19811: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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