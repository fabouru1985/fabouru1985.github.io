"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["7098"], {
6404: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_importing_data_into_fintesk_with_spreadsheets_md_d5e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-importing-data-into-fintesk-with-spreadsheets-md-d5e.json
var site_docs_kb_importing_data_importing_data_into_fintesk_with_spreadsheets_md_d5e_namespaceObject = JSON.parse('{"id":"kb/importing-data/importing-data-into-fintesk-with-spreadsheets","title":"Importing data into Fintesk with spreadsheets","description":"You can import your data to Fintesk from XLS, XLSX and CSV spreadsheet files, allowing you to add deals, organizations, persons, products, notes and activities all at the same time.","source":"@site/docs/kb/importing-data/importing-data-into-fintesk-with-spreadsheets.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-data-into-fintesk-with-spreadsheets","permalink":"/kb/importing-data/importing-data-into-fintesk-with-spreadsheets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":2,"frontMatter":{"id":"importing-data-into-fintesk-with-spreadsheets","title":"Importing data into Fintesk with spreadsheets","sidebar_position":2,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Changing the field type of a custom field","permalink":"/kb/importing-data/changing-the-field-type-of-a-custom-field"},"next":{"title":"Import fields","permalink":"/kb/importing-data/import-fields"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/importing-data-into-fintesk-with-spreadsheets.md


const frontMatter = {
	id: 'importing-data-into-fintesk-with-spreadsheets',
	title: 'Importing data into Fintesk with spreadsheets',
	sidebar_position: 2,
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
  "value": "Getting ready for an import",
  "id": "getting-ready-for-an-import",
  "level": 2
}, {
  "value": "Mandatory fields",
  "id": "mandatory-fields",
  "level": 2
}, {
  "value": "Custom fields",
  "id": "custom-fields",
  "level": 2
}, {
  "value": "Initiating your import",
  "id": "initiating-your-import",
  "level": 2
}, {
  "value": "Step 1: Upload your file",
  "id": "step-1-upload-your-file",
  "level": 3
}, {
  "value": "Step 2: Mapping",
  "id": "step-2-mapping",
  "level": 3
}, {
  "value": "Step 3: Preview and finish",
  "id": "step-3-preview-and-finish",
  "level": 3
}, {
  "value": "After your import",
  "id": "after-your-import",
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can import your data to Fintesk from XLS, XLSX and CSV spreadsheet files, allowing you to add ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/deals/deals-what-they-are-and-how-to-add-them",
        children: "deals"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/contacts/contacts-persons-and-organizations",
        children: "organizations"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/contacts/contacts-persons-and-organizations",
        children: "persons"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/products",
        children: "products"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/detail-view/how-can-i-add-notes-to-a-deal-or-contact",
        children: "notes"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/activities",
        children: "activities"
      }), " all at the same time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Importing data into Fintesk is only available for users with the correct \"global permission\" enabled."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before getting started, check out our article on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "how your data is organized"
      }), " in Fintesk. It’s important to understand how the data you’re importing will fit into the Fintesk data structure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Download our sample spreadsheet ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-sample-import-spreadsheets",
        children: "here"
      }), " for a practice import."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also read more about CRM data import and export in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.fintesk.com/es/caracteristicas/importacion-exportacion-de-datos?utm_source=fintesk-docs",
        children: "this post"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-ready-for-an-import",
      children: "Getting ready for an import"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you import, consider the data you’re adding to Fintesk and format your spreadsheet accordingly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are you trying to import a list of contacts (persons and organizations?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do you want to import contacts and create an open deal for each one?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do you want to import contacts, open deals, and create activities for those deals?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do you want to import contacts, open deals with activities, and attach notes?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or open new deals for contacts that already exist in Fintesk?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some spreadsheet formatting tips:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove formulas –"
        }), " Use a fresh spreadsheet without any formulas. If you have a spreadsheet that uses formulas or data-linking to generate the contents of a cell, copy the data from your spreadsheet into a fresh sheet without the formulas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One tab per spreadsheet –"
        }), " Your spreadsheet should only have one tab containing data. If your spreadsheet has more than one tab, copy and paste the tabs into individual files and import them one at a time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No special symbols –"
        }), " Your spreadsheet can’t have symbols for numeric or monetary fields. For example, a column for deal value should just include the number “100” and not the symbol “$100”."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spreadsheet size limit –"
        }), " There is no maximum limit on the number of spreadsheet columns, but the maximum file size is 50MB, with a limit of 50,000 rows per spreadsheet."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mandatory-fields",
      children: "Mandatory fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When importing data to Fintesk from a spreadsheet, include the mandatory fields for each item. Each mandatory field needs a separate column in your spreadsheet mapped to the corresponding field in Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " If you don’t import your data with the mandatory fields, it will create no items, and a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-errors-and-skip-files",
          children: "skip file"
        }), " will be generated."]
      })
    }), "\n", (0,jsx_runtime.jsx)("table", {
      children: (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "To import"
              })
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "You need these mandatory fields"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Deals"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Any deal field"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Person name OR organization name"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "(deal title recommended)"
              }), "\n"]
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Persons"
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Person name"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "tip",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Note:"
                }), " Email and phone are recommended for avoiding duplicates"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Organization"
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Organization name"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "tip",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Note:"
                }), " Address is recommended for avoiding duplicates"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Products"
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Product name"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "tip",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Note:"
                }), " Product Code is recommended for avoiding duplicates"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Notes"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Content"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Deal, contact (person or organization) information"
              }), "\n"]
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Activities"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Any activity field"
              }), "\n"]
            })
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-fields",
      children: "Custom fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your spreadsheet has data for deals or contacts that isn’t covered by default fields, add a custom field before importing so your data has somewhere to be mapped."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, “job title” is not a default field in Fintesk. To include this information in your import, create a custom person field, then map the spreadsheet column to the newly created field. We recommend a text or single option field."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also create custom fields during the mapping stage of your import. Learn more about custom fields in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/data-fields/custom-fields",
        children: "this article"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf01",
        src: (__webpack_require__(40949)/* ["default"] */.A) + "",
        width: "530",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initiating-your-import",
      children: "Initiating your import"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-upload-your-file",
      children: "Step 1: Upload your file"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "..."
      }), "” ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(More)> Import data > ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/tools/import#history",
          children: "From a spreadsheet"
        })]
      }), ". Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "'From a spreadsheet'"
      }), " and select the file you intend to import. Fintesk supports Excel (.xls and .xlsx) and .csv files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf02",
        src: (__webpack_require__(39092)/* ["default"] */.A) + "",
        width: "1260",
        height: "385"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-mapping",
      children: "Step 2: Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To import your data to Fintesk, map each column in your spreadsheet to the relevant icon and field in the mapping step. You can hover over the icon to see what type of data it refers to in Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The auto-recognition feature will automatically match the column header to the fields in Fintesk. Any unrecognized fields must be dragged from the Fintesk fields (right) to their appropriate spreadsheet columns (left). Use the search bar to find Fintesk field names more easily."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf03",
        src: (__webpack_require__(23209)/* ["default"] */.A) + "",
        width: "1268",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " You can learn more about mapping in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-mapping-your-fields",
          children: "this article"
        }), " or advanced mapping in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-advanced-mapping",
          children: "this article"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you are finished mapping, click “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), ".”"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-preview-and-finish",
      children: "Step 3: Preview and finish"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the next window, choose what to do if duplicates are found in your spreadsheet. If Fintesk detects a duplicate record in your spreadsheet or Fintesk data, it will consolidate this into one entry. You can learn more about how Fintesk detects duplicates during importing in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/how-to-avoid-duplicates-during-an-import",
        children: "this article"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf04",
        src: (__webpack_require__(44058)/* ["default"] */.A) + "",
        width: "1259",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This page also shows a preview of your data after the import."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf05",
        src: (__webpack_require__(24097)/* ["default"] */.A) + "",
        width: "1259",
        height: "789"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you’ve previewed your import, select “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start import"
      }), ".”"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "after-your-import",
      children: "After your import"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After your import, you will see a confirmation page with an overview of the imported data."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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
40949: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf01-de7d079279c949d473e7b21bdbd033ed.jpeg");

}),
39092: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf02-5065cce2468e44770522cba99fb59e74.jpeg");

}),
23209: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf03-56c7c83b548fc7b3d9055e5a9f89c96d.gif");

}),
44058: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf04-49de74b34690222102e90e01dc211e2d.jpeg");

}),
24097: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf05-04be7a961da7c3b0e88cb38d4bb0f220.jpeg");

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