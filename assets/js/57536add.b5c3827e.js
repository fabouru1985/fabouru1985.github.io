"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["2917"], {
21251: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_core_api_concepts_changes_to_the_api_md_575_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-core-api-concepts-changes-to-the-api-md-575.json
var site_docs_developers_core_api_concepts_changes_to_the_api_md_575_namespaceObject = JSON.parse('{"id":"developers/core-api-concepts/changes-to-the-api","title":"Changes to the API","description":"Fintesk’s API together with our Developer Platform is constantly evolving to cover additional product functionality. By introducing changes to the API, we aim to enhance your API experience by adding new features and functionality.","source":"@site/docs/developers/core-api-concepts/changes-to-the-api.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/changes-to-the-api","permalink":"/developers/core-api-concepts/changes-to-the-api","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":2,"frontMatter":{"id":"changes-to-the-api","title":"Changes to the API","sidebar_position":2,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"About the Fintesk API","permalink":"/developers/core-api-concepts/core-api-concepts-about-fintesk-api"},"next":{"title":"Requests","permalink":"/developers/core-api-concepts/core-api-concepts-requests"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/core-api-concepts/changes-to-the-api.md


const frontMatter = {
	id: 'changes-to-the-api',
	title: 'Changes to the API',
	sidebar_position: 2,
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
const contentTitle = 'Changes to the API';

const assets = {

};



const toc = [{
  "value": "Types of changes",
  "id": "types-of-changes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
        id: "changes-to-the-api",
        children: "Changes to the API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fintesk’s API together with our Developer Platform is constantly evolving to cover additional product functionality. By introducing changes to the API, we aim to enhance your API experience by adding new features and functionality."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do take note that from time to time, we may introduce breaking changes in order to improve the API. Read on to find out how we communicate changes and what types of changes we introduce."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["All changes to the Fintesk API are announced via our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../fintesk/changelog",
          children: "Changelog"
        }), ". Make sure to subscribe to stay up to date!"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Occasionally, we announce new API endpoints in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Beta version"
        }), " with the goal of gathering customer feedback. Please note that Beta endpoints may be subject to breaking changes."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "types-of-changes",
      children: "Types of changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#types-of-changes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Changes to the Fintesk API can be divided into breaking and non-breaking changes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "breaking change"
      }), " is a backward incompatible change that may require updating your app.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-breaking change"
      }), " is typically a new addition to the API that can be implemented at your own pace and choosing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["We aim to announce ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "breaking changes"
        }), " via our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../fintesk/changelog",
          children: "Changelog"
        }), " at least ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "60 days"
        }), " in advance to give you adequate time to adopt the changes."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Breaking changes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Non-breaking changes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a new endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing an endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a new optional parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a new response field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a response field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Changing the order of response fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifying an endpoint’s URI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Changing an error message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifying the name of a parameter or field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fixing an HTTP response code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifying required parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a required parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Changing the data type of an existing field or parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reducing API limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Restricting OAuth scopes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Introducing a new validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
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