"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["2028"], {
99259: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_core_api_concepts_core_api_concepts_requests_md_9f8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-core-api-concepts-core-api-concepts-requests-md-9f8.json
var site_docs_developers_core_api_concepts_core_api_concepts_requests_md_9f8_namespaceObject = JSON.parse('{"id":"developers/core-api-concepts/core-api-concepts-requests","title":"Requests","description":"All requests to the Fintesk API must be made over SSL (https, not http).","source":"@site/docs/developers/core-api-concepts/core-api-concepts-requests.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/core-api-concepts-requests","permalink":"/developers/core-api-concepts/core-api-concepts-requests","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":3,"frontMatter":{"id":"core-api-concepts-requests","title":"Requests","sidebar_position":3,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Changes to the API","permalink":"/developers/core-api-concepts/changes-to-the-api"},"next":{"title":"Date format","permalink":"/developers/core-api-concepts/core-api-concepts-date-format"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/core-api-concepts/core-api-concepts-requests.md


const frontMatter = {
	id: 'core-api-concepts-requests',
	title: 'Requests',
	sidebar_position: 3,
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
const contentTitle = 'Requests';

const assets = {

};



const toc = [{
  "value": "URL naming",
  "id": "url-naming",
  "level": 2
}, {
  "value": "Field selector",
  "id": "field-selector",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "requests",
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "All requests to the Fintesk API must be made over SSL (https, not http)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We recommend using JSON body format when performing API requests. To do a proper JSON-formatted request, ensure you provide ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Content-Type: application/json"
      }), " in HTTP request headers. Our API supports UTF-8 for character encoding."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST"
      }), " method, regular form-encoded body format is also supported but you may experience quirks related to a lack of data types. Our API uses the HTTP verbs for each action:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Used for retrieving resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "POST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Used for creating resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PUT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Used for replacing resources or collections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PATCH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Used for updating some parts of a resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DELETE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Used for deleting resources"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "url-naming",
      children: "URL naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#url-naming"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our API uses a straightforward URL naming convention."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each request must be made to the API endpoint ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://api.fintesk.com/lc_erp/v1"
        }), ", followed by the type of object in a plural form, for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://api.fintesk.com/lc_erp/v1/deals"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When one item is being asked, and such a method exists, the ID of the item must be appended to the URL, for example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://api.fintesk.com/lc_erp/v1/deals/abc"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When asking for sub-objects of an object, append that to the ID of the master object, for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://api.fintesk.com/lc_erp/v1/deals/2/activities"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "field-selector",
      children: "Field selector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#field-selector"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When asking for a collection/list of objects, you can pass in a field selector to indicate which fields you would like to fetch per each object. Most endpoints in our ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fintesk/api-v1",
        children: "API reference"
      }), " support this, but not all."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, you may only want to fetch a deal's ID, title, value, and currency when asking the deals list – this can be done by using the following syntax:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Request with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OAuth 2.0"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-URL",
        children: "\nGET https://api.fintesk.com/lc_erp/v1/deals:(id,title,value,currency)\n"
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