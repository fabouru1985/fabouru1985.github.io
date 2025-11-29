"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4338"], {
37682: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_filtering_filtering_md_22e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-filtering-filtering-md-22e.json
var site_docs_kb_filtering_filtering_md_22e_namespaceObject = JSON.parse('{"id":"kb/filtering/filtering","title":"Filtering","description":"In Fintesk, you can use filters to see specific data in your account. You can even mix different item fields within a filter to make full use of the connections and custom fields you’ve created in Fintesk.","source":"@site/docs/kb/filtering/filtering.md","sourceDirName":"kb/filtering","slug":"/kb/filtering/","permalink":"/kb/filtering/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Organizing your data","permalink":"/tags/organizing-your-data"},{"inline":true,"label":"Filtering","permalink":"/tags/filtering"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741046400000,"sidebarPosition":1,"frontMatter":{"id":"filtering","title":"Filtering","sidebar_position":1,"tags":["Organizing your data","Filtering"],"last_update":{"date":"2025-03-04T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Filtering","permalink":"/category/filtering"},"next":{"title":"Filters-> common uses","permalink":"/kb/filtering/filters-common-uses"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/filtering/filtering.md


const frontMatter = {
	id: 'filtering',
	title: 'Filtering',
	sidebar_position: 1,
	tags: [
		'Organizing your data',
		'Filtering'
	],
	last_update: {
		date: new Date('2025-03-04T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = 'Filtering';

const assets = {

};



const toc = [{
  "value": "Creating a filter",
  "id": "creating-a-filter",
  "level": 2
}, {
  "value": "Filter conditions",
  "id": "filter-conditions",
  "level": 2
}, {
  "value": "Clearing and deleting filters",
  "id": "clearing-and-deleting-filters",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "filtering",
        children: "Filtering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Fintesk, you can use filters to see specific data in your account. You can even mix different item fields within a filter to make full use of the connections and custom fields you’ve created in Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-a-filter",
      children: "Creating a filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“+ Add new filter”"
      }), " button by clicking the filter drop-down in the top right corner of your:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deals list view"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contacts (person or organization) list view"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activities list view"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Products list view"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fil01",
        src: (__webpack_require__(50762)/* ["default"] */.A) + "",
        width: "1039",
        height: "714"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you add a new filter, you’ll see a window where you can click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Add condition”"
      }), " to select your filter criteria:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fil02",
        src: (__webpack_require__(97671)/* ["default"] */.A) + "",
        width: "836",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also add a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "filter name"
      }), " or define the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "visibility"
      }), " for the filter set, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Save”"
      }), " when you’re done to display the filter results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filter-conditions",
      children: "Filter conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " For more examples of how you can use the filter tool, check out ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/filtering/filters-common-uses",
          children: "this article"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["There are two types of filter conditions you can add: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALL"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ANY"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), " condition must be met, or an item won’t be displayed in your filter results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least one ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ANY"
        }), " condition must be met, along with any ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), " conditions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, in this first filter, there are two competing conditions in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALL"
      }), " section:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fil03",
        src: (__webpack_require__(40496)/* ["default"] */.A) + "",
        width: "830",
        height: "507"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since a person can’t have two owners, this will yield no filter results."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fil04",
        src: (__webpack_require__(48824)/* ["default"] */.A) + "",
        width: "681",
        height: "240"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["But if you move those same conditions into the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ANY"
      }), " section:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fil05",
        src: (__webpack_require__(67550)/* ["default"] */.A) + "",
        width: "820",
        height: "495"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your results will consist of persons owned by either of those users."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fil06",
        src: (__webpack_require__(57131)/* ["default"] */.A) + "",
        width: "1120",
        height: "431"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " While the maximum number of filter conditions is 16, we recommend using up to nine conditions to maintain optimal loading speed."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clearing-and-deleting-filters",
      children: "Clearing and deleting filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " “Everyone” refers to ownership, meaning items owned by every user will be visible."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To clear out any existing filters, click on the filters drop-down and switch to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owners > Everyone"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "fil07",
        src: (__webpack_require__(24388)/* ["default"] */.A) + "",
        width: "1115",
        height: "399"
      }), "\nTo delete a filter, click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pencil"
      }), " icon when hovering over a filter, then select the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Delete”"
      }), " option:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fil08",
        src: (__webpack_require__(72211)/* ["default"] */.A) + "",
        width: "1148",
        height: "814"
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
50762: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil01-f96542456d3f1a610a378c9e2f536187.jpeg");

}),
97671: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil02-281fba0e6941a6758d4e99023a3d80cc.jpeg");

}),
40496: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil03-b93cbb80ab7a6f2b6945f7aaf64bb1c9.jpeg");

}),
48824: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil04-54535f24072b90fe830f8afbbc5a375f.png");

}),
67550: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil05-6928d06be850fa05dd1578a66184feba.jpeg");

}),
57131: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil06-b25164f249bf73a75a0ae26276fe5462.jpeg");

}),
24388: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil07-a0efd8be73be6ee12afcc0204b350de1.jpeg");

}),
72211: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fil08-5ed51d0c213c98252e44b48d85a1d857.gif");

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