"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["7937"], {
65933: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_core_api_concepts_core_api_concepts_http_status_codes_md_4f5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-core-api-concepts-core-api-concepts-http-status-codes-md-4f5.json
var site_docs_developers_core_api_concepts_core_api_concepts_http_status_codes_md_4f5_namespaceObject = JSON.parse('{"id":"developers/core-api-concepts/core-api-concepts-http-status-codes","title":"HTTP status codes","description":"Here\'s a list of the status codes used in Fintesk:","source":"@site/docs/developers/core-api-concepts/core-api-concepts-http-status-codes.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/core-api-concepts-http-status-codes","permalink":"/developers/core-api-concepts/core-api-concepts-http-status-codes","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":7,"frontMatter":{"id":"core-api-concepts-http-status-codes","title":"HTTP status codes","sidebar_position":7,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Pagination","permalink":"/developers/core-api-concepts/core-api-concepts-pagination"},"next":{"title":"Custom fields","permalink":"/developers/core-api-concepts/core-api-concepts-custom-fields"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/core-api-concepts/core-api-concepts-http-status-codes.md


const frontMatter = {
	id: 'core-api-concepts-http-status-codes',
	title: 'HTTP status codes',
	sidebar_position: 7,
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
const contentTitle = 'HTTP status codes';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
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
        id: "http-status-codes",
        children: "HTTP status codes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here's a list of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "status codes"
      }), " used in Fintesk:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
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
              children: "200"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request fulfilled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "201"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "New resource created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bad Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request not understood"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unauthorized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Invalid API token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "402"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Payment Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Company account is not open (possible reason: trial expired, payment details not entered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "403"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Forbidden"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Request not allowed. User account has ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../kb/personal-settings/usage-limits-in-fintesk",
              children: "reached a limit"
            }), " for an entity."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "404"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Not Found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource unavailable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "405"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Method not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Incorrect request method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "410"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Gone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Old resource permanently unavailable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "415"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unsupported Media Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Feature is not enabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unprocessable Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Webhooks limit reached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "429"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Too Many Requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[Rate limit] has been exceeded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "500"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal Server Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Generic server error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "501"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Not Implemented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Non-existent functionality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "503"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Service Unavailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Scheduled maintenance"
          })]
        })]
      })]
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