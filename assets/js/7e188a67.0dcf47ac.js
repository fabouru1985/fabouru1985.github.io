"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["153"], {
63658: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_core_api_concepts_core_api_concepts_custom_fields_md_7e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-core-api-concepts-core-api-concepts-custom-fields-md-7e1.json
var site_docs_developers_core_api_concepts_core_api_concepts_custom_fields_md_7e1_namespaceObject = JSON.parse('{"id":"developers/core-api-concepts/core-api-concepts-custom-fields","title":"Custom fields","description":"Custom fields allow you to add additional data to your Fintesk account that isn\'t included by default. Each deal, organization, person, and product item can contain custom fields. We have 16 different field types available, each with its own uses.","source":"@site/docs/developers/core-api-concepts/core-api-concepts-custom-fields.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/core-api-concepts-custom-fields","permalink":"/developers/core-api-concepts/core-api-concepts-custom-fields","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":8,"frontMatter":{"id":"core-api-concepts-custom-fields","title":"Custom fields","sidebar_position":8,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"HTTP status codes","permalink":"/developers/core-api-concepts/core-api-concepts-http-status-codes"},"next":{"title":"Knowledge Base","permalink":"/category/knowledge-base"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/core-api-concepts/core-api-concepts-custom-fields.md


const frontMatter = {
	id: 'core-api-concepts-custom-fields',
	title: 'Custom fields',
	sidebar_position: '08',
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
const contentTitle = 'Custom fields';

const assets = {

};



const toc = [{
  "value": "Creating a custom field",
  "id": "creating-a-custom-field",
  "level": 2
}, {
  "value": "Naming a custom field",
  "id": "naming-a-custom-field",
  "level": 2
}, {
  "value": "Updating a custom field",
  "id": "updating-a-custom-field",
  "level": 2
}, {
  "value": "Deleting a custom field",
  "id": "deleting-a-custom-field",
  "level": 2
}, {
  "value": "Types of custom fields",
  "id": "types-of-custom-fields",
  "level": 2
}, {
  "value": "How to find out if a field is a custom field",
  "id": "how-to-find-out-if-a-field-is-a-custom-field",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "custom-fields",
        children: "Custom fields"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Custom fields allow you to add additional data to your Fintesk account that isn't included by default. Each ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deal"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "organization"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "person"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "product"
      }), " item can contain custom fields. We have ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/core-api-concepts-custom-fields#types-of-custom-fields",
        children: "16 different field types"
      }), " available, each with its own uses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-a-custom-field",
      children: "Creating a custom field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#creating-a-custom-field"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Useful for"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/DealFields/operation/addDealField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/dealFields"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a new deal field."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/OrganizationFields/operation/addOrganizationField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/organizationFields"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a new organization field"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/PersonFields/operation/addPersonField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/personFields"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a new person field"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/ProductFields/operation/addProductField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/productFields"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a new product field"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Note that custom fields cannot be duplicated to multiple different Fintesk accounts. You can add the custom fields with the same name and field type to different accounts but they'll have different values for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key"
        }), " parameters referenced in our API."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "naming-a-custom-field",
      children: "Naming a custom field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#naming-a-custom-field"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All custom fields are referenced as randomly generated 24-character hashes in the dataset, for example, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "671a4610084c309cd93e5939"
      }), " - it may look like our office cat walked across the laptop, but this actually is a key for a custom field in our API dataset."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["These 24-character custom fields (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "671a4610084c309cd93e5939"
        }), ") are not shown in our API Reference as they ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "differ for each Fintesk account"
        }), ", but they can be seen in the API requests and responses as well as used in the requests when adding new items or updating existing ones."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can’t rename the reference of the custom field (the field API key), but you can rename the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " of a custom field that’s visible to the User."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inside Fintesk, you can find the API key of a field by going to ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Settings > Data fields"
      }), " and choosing the entity (deal/person/organization/product). When you hover over the row of a custom field, a three-dot menu appears on the right-hand side. From there, choose ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Copy API key"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updating-a-custom-field",
      children: "Updating a custom field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#updating-a-custom-field"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Useful for"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/DealFields/operation/updateDealField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/dealFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Updating a Deal field."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1##tag/OrganizationFields/operation/updateOrganizationField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/organizationFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Updating an organization field"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/PersonFields/operation/updatePersonField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/personFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Updating a person field"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/ProductFields/operation/updateProductField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/productFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Updating a product field"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleting-a-custom-field",
      children: "Deleting a custom field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#deleting-a-custom-field"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["We don't recommend deleting a custom field, because it might permanently remove all data. In case you do delete by mistake, there's a chance that you can get it back by ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fintesk.com/es/soporte/contactanos/?utm_source=fintesk-docs",
          children: "contacting"
        }), " our awesome support team."]
      })
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
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Useful for"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/DealFields/operation/deleteDealField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/dealFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Marking a deal field as deleted."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/OrganizationFields/operation/deleteOrganizationField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/organizationFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Marking an organization field as deleted"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/PersonFields/operation/deletePersonField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/personFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Marking a person field as deleted"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../fintesk/api-v1#tag/ProductFields/operation/deleteProductField",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/productFields/{id}"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Marking a product field as deleted"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After a custom field is deleted, it will no longer appear in API responses. All ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST"
      }), " requests mentioning a custom field will ignore it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "types-of-custom-fields",
      children: "Types of custom fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#types-of-custom-fields"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "See below the 16 different types of custom fields available:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "field_type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Useful for"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Additional info"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "VarcharField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The text field is used to store texts up to 255 characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Billing addresses, (short) comments, email addresses"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TextField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The large text field is used to store texts longer than usual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Comments, descriptions"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numerical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NumberField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The numeric field is used to store data such as the amount of commission or other custom numerical data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Commission, priority level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The value should be numeric with a maximum precision (decimal places) of 16. If a number exceeds the maximum precision, it will stay without the full precision."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monetary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MonetaryField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The monetary field is used to store data such as the amount of commission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Commission, amounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The currency of the field will match the user’s default currency setting unless specified otherwise in the request. The format of the field is determined by the user’s locale."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple options"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MultipleChoiceField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The multiple options field lets you predefine a list of values to choose from. Multiple option fields can have a max of 10,000 options per field."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Industry type, competitors, region"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single option"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ChoiceField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The single option field lets you predefine a list of values out of which one can be selected.Single option fields can have a max of 10,000 options per field."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lead type, category, industry"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UserField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user field can contain one user amongst users of your Fintesk account*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tech contacts, previous deal owners"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Organization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrganizationField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The organization field can contain one organization out of all the organizations stored on your Fintesk account*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Related parties, partner organizations"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Person"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PersonField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The person field can contain one person out of all the contacts stored on your Fintesk account*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Related parties, tech contacts"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phone"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PhonesField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A phone number field can contain a phone number (naturally) or a Skype Name with a click-to-call functionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Skype names, phone numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No auto-formatting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TimeField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The time field is used to store times, picked from a handy inline time picker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delivery times, lunchtime"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TimeRangeField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The time range field is used to store time ranges picked from a handy inline time picker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Office hours, the best time to contact"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Date"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DateField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Date field is used to store dates picked from a handy inline calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delivery dates, deadlines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The format of the field is determined by the user’s locale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Date range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DateRangeField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The date range field is used to store date ranges picked from a handy inline calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Event dates, completion estimates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Coming soon"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "left"
              }
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "left"
              }
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "left"
              }
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "left"
              }
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "left"
              }
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "AddressField"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Address field is used to store addresses"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Event places, office locations (when separate from business address)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The address field can hold all parts of address components – including City, tate, Zip Code, and Country – so there’s no need to create separate address fields for each address component. You can use Google Maps autocomplete textfield to enter addresses and visualize them on a map. You’ll also be able to filter items based on specific address criteria."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Autocomplete"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "VarcharField"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The text field is used to store texts up to 255 characters and can autocomplete from the text previously inserted into this field"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              }
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom options (e.g., tagging), email addresses"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["* ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Doesn’t link the item with the user, person, or organization for statistics or any other form of ownership or relation, but can be used for filtering."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-find-out-if-a-field-is-a-custom-field",
      children: "How to find out if a field is a custom field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#how-to-find-out-if-a-field-is-a-custom-field"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system_flag"
      }), " parameter in the response body of an entity’s fields can be used to identify if the field is a custom field:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " – a custom field"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " – Fintesk default field"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"_id\": \"671a460f084c309cd93e58c4\",\n\n  \"active_flag\": true,\n  \"add_deal_modal_visible_flag\": false,\n  \"add_organization_modal_visible_flag\": false,\n  \"add_person_modal_visible_flag\": false,\n  \"add_product_modal_visible_flag\": false,\n  \"add_time\": \"2024-10-24 13:05:19\",\n  \"add_visible_flag\": false,\n  \"alias\": \"next_activity_subject\",\n  \"allow_bulk_edit_flag\": false,\n  \"allow_filtering_flag\": false,\n  \"allow_select_column_flag\": false,\n  \"complex_flag\": false,\n  \"created_by_user_id\": \"671a460f084c309cd93e5848\",\n  \"delete_flag\": false,\n  \"details_visible_flag\": false,\n  \"edit_flag\": false,\n  \"entity_id\": \"671a460f084c309cd93e584b\",\n  \"entity_key\": \"Deals\",\n  \"entity_referenced\": null,\n  \"field_type_class\": \"TextField\",\n  \"field_type_id\": \"671a460f084c309cd93e5855\",\n  \"flow_flag\": false,\n  \"help_text\": \"This field can have 255 characters at maximun\",\n  \"importable_flag\": false,\n  \"important_flag\": false,\n  \"internal_id\": 91,\n  \"key\": \"next_activity_subject\",\n  \"last_updated_by_user_id\": \"671a460f084c309cd93e5848\",\n  \"link\": null,\n  \"mandatory_flag\": false,\n  \"name\": \"next_activity_subject\",\n  \"options\": [],\n  \"order_nbr\": 4,\n  \"owner_id\": \"671a460f084c309cd93e5848\",\n  \"search_field\": null,\n  \"searchable_flag\": false,\n  \"sort_field\": \"next_activity_subject\",\n  \"sortable_flag\": true,\n  \"subfield_flag\": false,\n  \"subfields\": [],\n  \"system_flag\": true,\n  \"update_time\": \"2024-10-24 13:05:18\",\n  \"visible_in_exports_flag\": false\n}\n"
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