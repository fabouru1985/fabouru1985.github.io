"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["5469"], {
22366: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_core_api_concepts_core_api_concepts_pagination_md_8be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-core-api-concepts-core-api-concepts-pagination-md-8be.json
var site_docs_developers_core_api_concepts_core_api_concepts_pagination_md_8be_namespaceObject = JSON.parse('{"id":"developers/core-api-concepts/core-api-concepts-pagination","title":"Pagination","description":"Fintesk offers pagination for most of our API’s list and item collection endpoints.","source":"@site/docs/developers/core-api-concepts/core-api-concepts-pagination.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/core-api-concepts-pagination","permalink":"/developers/core-api-concepts/core-api-concepts-pagination","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":6,"frontMatter":{"id":"core-api-concepts-pagination","title":"Pagination","sidebar_position":6,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Date format","permalink":"/developers/core-api-concepts/core-api-concepts-date-format"},"next":{"title":"HTTP status codes","permalink":"/developers/core-api-concepts/core-api-concepts-http-status-codes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/core-api-concepts/core-api-concepts-pagination.md


const frontMatter = {
	id: 'core-api-concepts-pagination',
	title: 'Pagination',
	sidebar_position: 6,
	tags: [
		'Developers',
		'Fintesk Api',
		'Core Api Concepts'
	],
	last_update: {
		date: new Date('2025-02-22T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = 'Pagination';

const assets = {

};



const toc = [{
  "value": "Offset pagination",
  "id": "offset-pagination",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pagination",
        children: "Pagination"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fintesk offers pagination for most of our API’s list and item collection endpoints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offset-pagination",
      children: "Offset pagination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#offset-pagination"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With the rest of our GET endpoints, we offer offset-based pagination. The parameters that control this type of pagination are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "start_page"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit_by"
      }), ", indicating the desired offset and the number of items to be returned per page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "start_page (integer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pagination start. If omitted, the default value is 0."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "limit_by (integer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of items shown per page. If not provided, 50 items will be returned."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Example request for the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /v1/activities"
        }), " endpoint:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JSON",
        children: "\nGET https://api.fintesk.com/v1/activities?start=0&limit=100\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Within the response’s ", (0,jsx_runtime.jsx)(_components.code, {
        children: "additional_data"
      }), " object, a pagination object will be returned. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "additional_data.pagination"
      }), " object will contain the given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "start_page"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit_by"
      }), " values, as well as the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "more_items_in_collection"
      }), " flag, indicating whether more items can be fetched after the current batch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If more items can be fetched, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next_start"
      }), " field, which can be used for specifying the next offset pointer, will also be returned."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The maximum ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit_by"
      }), " value is 500."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example response:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"success\": true,\n  \"data\": [{\n    … // returned activities’ data\n  }],\n  \"additional_data\": {\n    \"pagination\": {\n      \"start\": 0,\n      \"limit\": 10,\n      \"more_items_in_collection\": true,\n      \"next_start\": 10\n    }\n  }\n}\n"
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