"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["1645"], {
12532: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_data_into_fintesk_with_spreadsheets_md_18c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-importing-data-importing-data-into-fintesk-with-spreadsheets-md-18c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_importing_data_importing_data_into_fintesk_with_spreadsheets_md_18c_namespaceObject = JSON.parse('{"id":"kb/importing-data/importing-data-into-fintesk-with-spreadsheets","title":"Importar datos a Fintesk con hojas de cálculo","description":"Puede importar sus datos a Fintesk desde archivos de hoja de cálculo XLS, XLSX y CSV, lo que le permite agregar negocios, organizaciones, persona, productos, notas and actividades todo al mismo tiempo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-data-into-fintesk-with-spreadsheets.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-data-into-fintesk-with-spreadsheets","permalink":"/es/kb/importing-data/importing-data-into-fintesk-with-spreadsheets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/es/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1742169600000,"sidebarPosition":2,"frontMatter":{"id":"importing-data-into-fintesk-with-spreadsheets","title":"Importar datos a Fintesk con hojas de cálculo","sidebar_position":2,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-17T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Cambiar el tipo de campo de un campo personalizado","permalink":"/es/kb/importing-data/changing-the-field-type-of-a-custom-field"},"next":{"title":"Import fields","permalink":"/es/kb/importing-data/import-fields"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/importing-data/importing-data-into-fintesk-with-spreadsheets.md


const frontMatter = {
	id: 'importing-data-into-fintesk-with-spreadsheets',
	title: 'Importar datos a Fintesk con hojas de cálculo',
	sidebar_position: 2,
	tags: [
		'Getting started',
		'Importing data'
	],
	last_update: {
		date: new Date('2025-03-17T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Preparándose para una importación",
  "id": "preparándose-para-una-importación",
  "level": 2
}, {
  "value": "Campos obligatorios",
  "id": "campos-obligatorios",
  "level": 2
}, {
  "value": "Campos personalizados",
  "id": "campos-personalizados",
  "level": 2
}, {
  "value": "Iniciando su importación",
  "id": "iniciando-su-importación",
  "level": 2
}, {
  "value": "Paso 1: Sube tu archivo",
  "id": "paso-1-sube-tu-archivo",
  "level": 3
}, {
  "value": "Paso 2: mapeo",
  "id": "paso-2-mapeo",
  "level": 3
}, {
  "value": "Paso 3: Vista previa y acabado",
  "id": "paso-3-vista-previa-y-acabado",
  "level": 3
}, {
  "value": "Después de su importación",
  "id": "después-de-su-importación",
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
      children: ["Puede importar sus datos a Fintesk desde archivos de hoja de cálculo XLS, XLSX y CSV, lo que le permite agregar ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/deals/deals-what-they-are-and-how-to-add-them",
        children: "negocios"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/contacts/contacts-persons-and-organizations",
        children: "organizaciones"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/contacts/contacts-persons-and-organizations",
        children: "persona"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/products",
        children: "productos"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/detail-view/how-can-i-add-notes-to-a-deal-or-contact",
        children: "notas"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/activities",
        children: "actividades"
      }), " todo al mismo tiempo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " La importación de datos a Fintesk solo está disponible para usuarios con el \"permiso global\" correcto habilitado."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Antes de comenzar, consulte nuestro artículo sobre ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "cómo se organizan sus datos"
      }), " en Fintesk. Es importante comprender cómo los datos que está importando encajarán en la estructura de datos de Fintesk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Descargue nuestra hoja de cálculo de muestra ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-sample-import-spreadsheets",
        children: "aquí"
      }), " para una práctica de importación."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["También puede leer más sobre la importación y exportación de datos de CRM en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.fintesk.com/es/caracteristicas/importacion-exportacion-de-datos?utm_source=fintesk-docs",
        children: "esta publicación"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparándose-para-una-importación",
      children: "Preparándose para una importación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Antes de importar, considere los datos que está agregando a Fintesk y formatea su hoja de cálculo en consecuencia."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¿Está tratando de importar una lista de contactos (personas y organizaciones?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¿Desea importar contactos y crear un negocio abierto para cada uno?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¿Desea importar contactos, negocios abiertos y crear actividades para esos negocios?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¿Desea importar contactos, negocios abiertos con actividades y adjuntar notas?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¿O abrir nuevos negocios para contactos que ya existen en Fintesk?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Algunos consejos de formato de hoja de cálculo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminar fórmulas –"
        }), " Use una hoja de cálculo nueva sin ninguna fórmula. Si tiene una hoja de cálculo que usa fórmulas o linkea datos para generar el contenido de una celda, copie los datos de su hoja de cálculo en una hoja nueva sin las fórmulas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Una pestaña por hoja de cálculo –"
        }), " Su hoja de cálculo solo debe tener una pestaña que contenga datos. Si su hoja de cálculo tiene más de una pestaña, copie y pegue las pestañas en archivos individuales e importe una a la vez."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sin símbolos especiales –"
        }), " Su hoja de cálculo no puede tener símbolos para campos numéricos o monetarios. Por ejemplo, una columna para el valor del negocio solo debe incluir el número \"100\" y no el símbolo \"$100\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Límite de tamaño de la hoja de cálculo –"
        }), " No hay un límite máximo en el número de columnas de hoja de cálculo, pero el tamaño máximo del archivo es de 50 MB, con un límite de 50,000 filas por hoja de cálculo."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "campos-obligatorios",
      children: "Campos obligatorios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al importar datos a Fintesk desde una hoja de cálculo, incluya los campos obligatorios para cada elemento. Cada campo obligatorio necesita una columna separada en su hoja de cálculo asignada al campo correspondiente en Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Si no importa sus datos con los campos obligatorios, no creará elementos y un ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-errors-and-skip-files",
          children: "archivo omitir"
        }), " será generado."]
      })
    }), "\n", (0,jsx_runtime.jsx)("table", {
      children: (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Para importar"
              })
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Necesitas estos campos obligatorios"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Negocios"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Cualquier campo de negocio"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Nombre de la persona u nombre de la organización"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "(Nombre del negocio recomendado)"
              }), "\n"]
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Persona"
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Nombre de la persona"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "tip",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Nota:"
                }), " Se recomiendan el correo electrónico y el teléfono para evitar duplicados"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Organización"
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Nombre de la organización"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "tip",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Nota:"
                }), " Se recomienda la dirección para evitar duplicados"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Productos"
            })
          }), (0,jsx_runtime.jsxs)("td", {
            children: [(0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Nombre del producto"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "tip",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Nota:"
                }), " Se recomienda el código de producto para evitar duplicados"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Notas"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Contenido"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Negocios, contactos (Información de persona u organización)"
              }), "\n"]
            })
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Actividades"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Cualquier campo de actividad"
              }), "\n"]
            })
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "campos-personalizados",
      children: "Campos personalizados"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si su hoja de cálculo tiene datos para negocios o contactos que no están cubiertos por campos predeterminados, agregue un campo personalizado antes de importar para que sus datos tengan un lugar que se mapee."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Por ejemplo, el \"cargo de trabajo\" no es un campo predeterminado en Fintesk .Para incluir esta información en su importación, cree un campo de persona personalizado, luego asigne la columna de hoja de cálculo al campo recién creado. Recomendamos un campo de texto o opción única."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["También puede crear campos personalizados durante la etapa de mapeo de su importación. Obtenga más información sobre los campos personalizados en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/data-fields/custom-fields",
        children: "este artículo"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf01",
        src: (__webpack_require__(7792)/* ["default"] */.A) + "",
        width: "530",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iniciando-su-importación",
      children: "Iniciando su importación"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paso-1-sube-tu-archivo",
      children: "Paso 1: Sube tu archivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ir a “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "..."
      }), "” ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(Más)> Importar datos> ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/tools/import#history",
          children: "desde una hoja de cálculo"
        })]
      }), ". Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"desde una hoja de cálculo\""
      }), " y seleccione el archivo que tiene la intención de importar. Fintesk admite Excel (.xls y .xlsx) y archivos .csv."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf02",
        src: (__webpack_require__(25457)/* ["default"] */.A) + "",
        width: "1260",
        height: "385"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paso-2-mapeo",
      children: "Paso 2: mapeo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para importar sus datos a Fintesk, asigne cada columna en su hoja de cálculo al icono y campo relevantes en el paso de mapeo. Puede pasar el icono para ver a qué tipo de datos se refiere en Fintesk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La función de reconocimiento automático coincidirá automáticamente con el encabezado de la columna con los campos en Fintesk. Los campos no reconocidos deben arrastrarse desde los campos de Fintesk (derecha) a sus columnas de hoja de cálculo apropiadas (izquierda). Use la barra de búsqueda para encontrar los nombres de campo de Fintesk más fácilmente."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf03",
        src: (__webpack_require__(59058)/* ["default"] */.A) + "",
        width: "1268",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota:"
        }), " Puede obtener más información sobre el mapeo en ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-mapping-your-fields",
          children: "este artículo"
        }), " o mapeo avanzado en ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-advanced-mapping",
          children: "este artículo"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Una vez que haya terminado de mapeo, haga clic en \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Siguiente"
      }), "\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paso-3-vista-previa-y-acabado",
      children: "Paso 3: Vista previa y acabado"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la siguiente ventana, elija qué hacer si se encuentran duplicados en su hoja de cálculo. Si Fintesk detecta un registro duplicado en su hoja de cálculo o datos de Fintesk, lo consolidará en una sola entrada. Puede obtener más información sobre cómo Fintesk detecta duplicados durante la importación en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/how-to-avoid-duplicates-during-an-import",
        children: "este artículo"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf04",
        src: (__webpack_require__(8075)/* ["default"] */.A) + "",
        width: "1259",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta página también muestra una vista previa de sus datos después de la importación."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "idf05",
        src: (__webpack_require__(75332)/* ["default"] */.A) + "",
        width: "1259",
        height: "789"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Una vez que haya previsualizado su importación, seleccione \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iniciar importación"
      }), "\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "después-de-su-importación",
      children: "Después de su importación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Después de su importación, verá una página de confirmación con una descripción general de los datos importados."
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
7792: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf01-de7d079279c949d473e7b21bdbd033ed.jpeg");

}),
25457: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf02-5065cce2468e44770522cba99fb59e74.jpeg");

}),
59058: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf03-56c7c83b548fc7b3d9055e5a9f89c96d.gif");

}),
8075: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/idf04-49de74b34690222102e90e01dc211e2d.jpeg");

}),
75332: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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