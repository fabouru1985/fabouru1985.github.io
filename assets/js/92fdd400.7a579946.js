"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["3049"], {
51959: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_how_can_i_format_dates_to_import_into_fintesk_md_92f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-how-can-i-format-dates-to-import-into-fintesk-md-92f.json
var site_docs_kb_importing_data_how_can_i_format_dates_to_import_into_fintesk_md_92f_namespaceObject = JSON.parse('{"id":"kb/importing-data/how-can-i-format-dates-to-import-into-fintesk","title":"How can I format dates to import into Fintesk?","description":"Fintesk supports multiple date formats and configurations. When importing your own dates into any date\\\\-specific field, there are a few things to take into consideration:","source":"@site/docs/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk","permalink":"/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":8,"frontMatter":{"id":"how-can-i-format-dates-to-import-into-fintesk","title":"How can I format dates to import into Fintesk?","sidebar_position":8,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importing-> sample import spreadsheets","permalink":"/kb/importing-data/importing-sample-import-spreadsheets"},"next":{"title":"Updating Fintesk data with a spreadsheet","permalink":"/kb/importing-data/updating-fintesk-data-with-a-spreadsheet"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/how-can-i-format-dates-to-import-into-fintesk.md


const frontMatter = {
	id: 'how-can-i-format-dates-to-import-into-fintesk',
	title: 'How can I format dates to import into Fintesk?',
	sidebar_position: '08',
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
  "value": "Mapping in Fintesk",
  "id": "mapping-in-fintesk",
  "level": 2
}, {
  "value": "How to format your columns in excel",
  "id": "how-to-format-your-columns-in-excel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
      children: ["Fintesk supports multiple date formats and configurations. When importing your own dates into any ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "date"
      }), "-specific field, there are a few things to take into consideration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This action is only available to admin users."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How are you entering your data? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "4/04/2016"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2016/04/04"
        }), " for example."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How is the column in your spreadsheet formatted? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Date"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "General"
        }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Text"
        }), " for example."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The image below shows you an import that was done using several different formatting techniques and how they showed up in Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Study the image to see how your dates will turn out:"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapping-in-fintesk",
      children: "Mapping in Fintesk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once you import your spreadsheet, if Fintesk can identify the format of your dates without any confusion, no action is needed. If Fintesk can't identify the format of your dates, it will prompt you to specify your spreadsheet's formatting."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hci01",
        src: (__webpack_require__(51084)/* ["default"] */.A) + "",
        width: "832",
        height: "138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hci02",
        src: (__webpack_require__(80685)/* ["default"] */.A) + "",
        width: "603",
        height: "523"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-format-your-columns-in-excel",
      children: "How to format your columns in excel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spreadsheets can have their cells formatted for special types of data. Often, you may receive a spreadsheet that's already formatted, or you may have to format your own data. Here's how to edit the format of your columns in Excel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Right-click the head of your column > Format Cells > Choose your desired format"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hci03",
        src: (__webpack_require__(18150)/* ["default"] */.A) + "",
        width: "692",
        height: "630"
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
51084: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hci01-ff793abad3dfd37daf0f4df8a24c9e21.jpeg");

}),
80685: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hci02-72650160ada4a2a5b8a4b2a128556d84.jpeg");

}),
18150: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hci03-a8c10b7c63a94fa8c2dbfc12e5cfb54b.gif");

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