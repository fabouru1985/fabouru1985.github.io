"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["5616"], {
77610: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocTagsListPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(34308);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(88287);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(29116);
/* import */ var _theme_TagsListByLetter__rspack_import_2 = __webpack_require__(25351);
/* import */ var _theme_SearchMetadata__rspack_import_3 = __webpack_require__(54175);
/* import */ var _theme_Heading__rspack_import_4 = __webpack_require__(72072);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocTagsListPageMetadata({ title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_5/* .PageMetadata */.be, {
                title: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_3/* ["default"] */.A, {
                tag: "doc_tags_list"
            })
        ]
    });
}
function DocTagsListPageContent({ tags, title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_5/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx__rspack_import_6/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.page.docsTagsListPage */.G.page.docsTagsListPage),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "container margin-vert--lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("main", {
                    className: "col col--8 col--offset-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_4/* ["default"] */.A, {
                            as: "h1",
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TagsListByLetter__rspack_import_2/* ["default"] */.A, {
                            tags: tags
                        })
                    ]
                })
            })
        })
    });
}
function DocTagsListPage(props) {
    const title = (0,_docusaurus_theme_common__rspack_import_8/* .translateTagsPageTitle */.b)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocTagsListPageMetadata, {
                ...props,
                title: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocTagsListPageContent, {
                ...props,
                title: title
            })
        ]
    });
}


}),
40535: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(95310);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Tag({ permalink, label, count, description }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
        rel: "tag",
        href: permalink,
        title: description,
        className: (0,clsx/* ["default"] */.A)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
}


}),
25351: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListByLetter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
var tagsUtils = __webpack_require__(29116);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(40535);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(72072);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TagLetterEntryItem({ letterEntry }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                as: "h2",
                id: letterEntry.letter,
                children: letterEntry.letter
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "padding--none",
                children: letterEntry.tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* ["default"] */.A, {
                            ...tag
                        })
                    }, tag.permalink))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {})
        ]
    });
}
function TagsListByLetter({ tags }) {
    const letterList = (0,tagsUtils/* .listTagsByLetters */.Q)(tags);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "margin-vert--lg",
        children: letterList.map((letterEntry)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TagLetterEntryItem, {
                letterEntry: letterEntry
            }, letterEntry.letter))
    });
}


}),
29116: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Q: () => (listTagsByLetters),
  b: () => (translateTagsPageTitle)
});
/* import */ var _docusaurus_Translate__rspack_import_0 = __webpack_require__(30568);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
const translateTagsPageTitle = ()=>(0,_docusaurus_Translate__rspack_import_0/* .translate */.T)({
        id: 'theme.tags.tagsPageTitle',
        message: 'Tags',
        description: 'The title of the tag list page'
    });
function getTagLetter(tag) {
    return tag[0].toUpperCase();
}
/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */ function listTagsByLetters(tags) {
    const groups = {};
    Object.values(tags).forEach((tag)=>{
        const initial = getTagLetter(tag.label);
        groups[initial] ??= [];
        groups[initial].push(tag);
    });
    return Object.entries(groups)// Sort letters
    .sort(([letter1], [letter2])=>letter1.localeCompare(letter2)).map(([letter, letterTags])=>{
        // Sort tags inside a letter
        const sortedTags = letterTags.sort((tag1, tag2)=>tag1.label.localeCompare(tag2.label));
        return {
            letter,
            tags: sortedTags
        };
    });
} //# sourceMappingURL=tagsUtils.js.map


}),

}]);