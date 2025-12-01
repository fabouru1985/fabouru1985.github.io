"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["5493"], {
26033: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_30_fintesk_com_en_el_ecosistema_de_ongs_md_a83_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_11_30_fintesk_com_en_el_ecosistema_de_ongs_md_a83_json__rspack_import_0 = __webpack_require__(32718);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Fintesk.com en el Ecosistema de Ongs',
	slug: 'fintesk-com-en-el-ecosistema-de-ongs',
	authors: 'fabrizzio',
	tags: [
		'ventas',
		'crm',
		'ONGs'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(91931)/* ["default"] */.A) + "",
        width: "1024",
        height: "420"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "El presente documento constituye un análisis exhaustivo, técnico y estratégico sobre la viabilidad de la plataforma 'fintesk.com' como solución de gestión para Organizaciones No Gubernamentales (ONG). En un entorno donde la transformación digital se ha convertido en un imperativo para la sostenibilidad del Tercer Sector, la elección de las herramientas tecnológicas adecuadas trasciende la mera operatividad administrativa; se convierte en un pilar fundamental para la transparencia, la captación de recursos y la medición del impacto social. Este informe evalúa Fintesk.com no como una entidad aislada, sino contrastando sus capacidades inherentes como herramienta de gestión financiera frente a los requerimientos idiosincrásicos y semánticos de las entidades sin fines de lucro."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
91931: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/fintesk-com-en-el-ecosistema-de-ongs-c5e891e437861aa325fb4e8fa3540520.jpg");

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
32718: (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/fintesk-com-en-el-ecosistema-de-ongs","source":"@site/blog/2025-11-30-fintesk-com-en-el-ecosistema-de-ongs.md","title":"Fintesk.com en el Ecosistema de Ongs","description":"El presente documento constituye un análisis exhaustivo, técnico y estratégico sobre la viabilidad de la plataforma \'fintesk.com\' como solución de gestión para Organizaciones No Gubernamentales (ONG). En un entorno donde la transformación digital se ha convertido en un imperativo para la sostenibilidad del Tercer Sector, la elección de las herramientas tecnológicas adecuadas trasciende la mera operatividad administrativa; se convierte en un pilar fundamental para la transparencia, la captación de recursos y la medición del impacto social. Este informe evalúa Fintesk.com no como una entidad aislada, sino contrastando sus capacidades inherentes como herramienta de gestión financiera frente a los requerimientos idiosincrásicos y semánticos de las entidades sin fines de lucro.","date":"2025-11-30T00:00:00.000Z","tags":[{"inline":true,"label":"ventas","permalink":"/blog/tags/ventas"},{"inline":true,"label":"crm","permalink":"/blog/tags/crm"},{"inline":true,"label":"ONGs","permalink":"/blog/tags/on-gs"}],"readingTime":17.11,"hasTruncateMarker":true,"authors":[{"name":"Fabrizzio Andrioli","title":"Fintesk - Founder and CTO","url":"https://www.linkedin.com/in/fabrizzioandrioli/","imageURL":"https://media.licdn.com/dms/image/v2/C4E03AQFwGY37uwAy5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552776292880?e=1749686400&v=beta&t=S9QZhN75QUdnHsKsufVuzythwiOBOSafOuLwKXrNtGw","key":"fabrizzio","page":null}],"frontMatter":{"title":"Fintesk.com en el Ecosistema de Ongs","slug":"fintesk-com-en-el-ecosistema-de-ongs","authors":"fabrizzio","tags":["ventas","crm","ONGs"]},"unlisted":false,"nextItem":{"title":"Guía Definitiva de Ecosistemas CRM para ONGs (2025)","permalink":"/blog/guia-definitiva-de-ecosistemas-crm-para-ongs-2025"}}')

}),

}]);