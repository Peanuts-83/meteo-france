/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/carte/map_prev.png */ "./src/assets/img/carte/map_prev.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes arrow {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: 10px;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes menu {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n#block_search {\n  flex: 1;\n}\n#block_search .block_search_form {\n  display: flex;\n  border: solid 1px #dee2e6;\n  border-radius: 5px;\n  max-width: 100%;\n  margin-left: 0;\n}\n#block_search .block_search_form .search_form_input {\n  flex-grow: 2;\n  height: 45px;\n  padding-left: 15px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #003661;\n  border: none;\n  margin-right: 0;\n}\n#block_search .block_search_form .search_form_input:focus {\n  outline: none;\n}\n#block_search .block_search_form .search_form_submit {\n  background: transparent;\n  border: none;\n  padding: 10px;\n  font-size: 16px;\n  color: grey;\n}\n#block_search .block_search_form .search_form_submit:hover {\n  color: #003661;\n  cursor: pointer;\n}\n\n#header_search_xs {\n  display: none;\n}\n\n#header_top {\n  padding: 12px 0;\n}\n#header_top #header_top_left {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding: 0;\n  width: fit-content;\n}\n#header_top #header_top_left .marianne,\n#header_top #header_top_left .logo {\n  float: left;\n  width: auto;\n  margin: 0;\n  margin-right: 10px;\n}\n#header_top #header_top_middle {\n  margin-right: 15px;\n  margin-left: 0;\n  justify-content: start;\n  flex: 1;\n}\n#header_top #header_top_right {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 22px;\n  color: transparent;\n}\n#header_top #header_top_right .fa-bell {\n  color: grey;\n  cursor: pointer;\n}\n#header_top #header_top_right #tooltip_vigilance {\n  position: absolute;\n  opacity: 0;\n  z-index: 600;\n  top: 30px;\n  left: -70%;\n  width: 150px;\n  height: 50px;\n  background-color: #ffb82b;\n  border-radius: 10px;\n  color: black;\n  transition: all 0.5s ease-in-out;\n}\n#header_top #header_top_right #tooltip_vigilance .fas {\n  font-size: 11px;\n  color: black;\n  margin-top: -10px;\n  margin-bottom: 0;\n}\n#header_top #header_top_right #tooltip_vigilance p {\n  font-size: 11px;\n  position: relative;\n  text-transform: uppercase;\n  margin: 0;\n}\n#header_top #header_top_right #tooltip_vigilance::before {\n  content: \"\";\n  position: absolute;\n  top: -7px;\n  left: 43%;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #ffb82b;\n  background-color: transparent;\n}\n#header_top #header_top_right .block_vigilance {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin: 0;\n  cursor: pointer;\n}\n#header_top #header_top_right .block_vigilance .fa-exclamation-triangle {\n  color: #ffb82b;\n  font-size: 18px;\n}\n#header_top #header_top_right .block_vigilance .label {\n  color: #003661;\n  max-width: 60px;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 5px 0;\n}\n#header_top #header_top_right .block_vigilance:hover > #tooltip_vigilance {\n  display: block;\n  opacity: 1;\n  transform: translateY(40px);\n  pointer-events: none;\n}\n#header_top #header_top_right #burger_menu_top {\n  display: none;\n  font-size: 14px;\n}\n#header_top #socialmedia {\n  display: flex;\n  flex-wrap: nowrap;\n}\n#header_top #socialmedia * {\n  margin-left: 10px;\n  padding: 10px;\n  font-size: 18px;\n  transition: all 0.3s ease-in-out;\n}\n#header_top #socialmedia *:hover {\n  cursor: pointer;\n  color: #db0084;\n}\n#header_top #carte_vigilance {\n  margin: 0 20px;\n}\n#header_top #carte_vigilance:hover {\n  cursor: pointer;\n}\n\n#header_middle {\n  z-index: 557;\n  width: 100%;\n}\n#header_middle .block {\n  width: 100%;\n  text-align: start;\n  justify-content: start;\n}\n#header_middle ul {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  padding: 5px 0;\n}\n#header_middle ul li a {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  flex-wrap: nowrap;\n  margin-right: 10px;\n}\n#header_middle ul li a .fa {\n  margin-right: 5px;\n  pointer-events: none;\n}\n#header_middle ul li a p {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12px;\n  margin-left: 5px;\n  pointer-events: none;\n}\n\n#header_bottom {\n  width: 100%;\n  background-color: #145e9a;\n  font-size: 12px;\n  color: white;\n  padding: 3px 0;\n}\n#header_bottom .block_bottom_nav #add_city {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#header_bottom .block_bottom_nav #add_city .fa-plus-circle {\n  padding-left: 10px;\n  color: white;\n  font-size: 20px;\n}\n#header_bottom .block_bottom_nav #add_city:hover {\n  cursor: pointer;\n}\n\n.fa-angle-down {\n  font-size: 14px;\n  margin-left: 7px;\n  margin-right: auto;\n  justify-self: start;\n}\n\n#burger_menu * {\n  font-size: 18px;\n  margin: 0 10px;\n}\n\n#menu_climat,\n#menu_actus {\n  display: none;\n  opacity: 0;\n  transition: all 0.5s;\n}\n\n.menu_container {\n  display: none;\n  position: fixed;\n  justify-content: center;\n  left: 0;\n  width: 100vw;\n  background-color: white;\n  border: 1px solid rgb(224, 224, 224);\n  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);\n  z-index: 2;\n}\n.menu_container .menu-grid {\n  display: grid;\n  gap: 15px;\n  justify-items: start;\n  align-items: start;\n  width: 100%;\n  color: #003661;\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.menu_container .menu-flex {\n  display: flex;\n  justify-items: start;\n  align-items: start;\n  width: 100%;\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: white;\n}\n.menu_container .submenu {\n  position: relative;\n  height: auto;\n  align-self: stretch;\n}\n.menu_container .menu_row {\n  flex-direction: row;\n  width: 100%;\n  flex: 1;\n}\n.menu_container .menu_col {\n  flex-direction: column;\n  flex: 1;\n}\n.menu_container .title_menu {\n  width: 95%;\n  margin: 10px;\n  margin-left: 0;\n  padding: 10px;\n  padding-left: 0;\n  padding-bottom: 20px;\n  font-weight: 700;\n  font-size: 16px;\n  border-bottom: 2px solid #145e9a;\n  transition: all 0.3s ease-in-out;\n}\n.menu_container .title_menu:hover {\n  border-bottom: 2px solid #db0084;\n}\n.menu_container .text_menu {\n  width: 100%;\n  padding: 5px 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n@media screen and (max-width: 1200px) {\n  .menu_container .menu-grid {\n    max-width: 940px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  #header_top #socialmedia {\n    display: none;\n  }\n  #header_top #block_search .block_search_form {\n    width: auto;\n  }\n  #header_top .block_vigilance {\n    padding-right: 20px;\n  }\n  #header_top .block_vigilance .label {\n    display: none;\n  }\n  #header_top #header_top_left .marianne {\n    transform: scale(70%);\n  }\n  #header_top #header_top_right #burger_menu_top {\n    display: block;\n  }\n  #header_top #header_top_right #tooltip_vigilance {\n    left: -160%;\n    top: 20px;\n  }\n  #header_top #header_top_right .block_vigilance:hover > #tooltip_vigilance {\n    display: block;\n    opacity: 1;\n    transform: translateY(20px);\n    pointer-events: none;\n  }\n  #header_middle {\n    display: none;\n  }\n  #header_middle #burger_menu {\n    display: flex;\n  }\n}\n@media screen and (max-width: 656px) {\n  #header_search_xs {\n    display: flex;\n  }\n  #header_top {\n    padding: 3px;\n    margin: 0;\n  }\n  #header_top #header_top_left .logo,\n#header_top #header_top_left .marianne {\n    transform: scale(70%);\n    margin-right: 0;\n  }\n  #header_top #header_top_middle {\n    display: none;\n  }\n  #header_top #header_top_right #burger_menu_top {\n    font-size: 21px;\n    margin-right: 20px;\n    margin-left: -40px;\n  }\n  #header_top #header_top_right #carte_vigilance {\n    transform: scale(70%);\n  }\n  #header_top #header_top_right .block_vigilance {\n    top: -20px;\n    left: -40px;\n  }\n  #header_top #header_top_right #tooltip_vigilance {\n    left: -130px;\n    top: 10px;\n  }\n  #header_top #header_top_right #tooltip_vigilance::before {\n    content: \"\";\n    position: absolute;\n    top: -7px;\n    left: 80%;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #ffb82b;\n    background-color: transparent;\n  }\n  #header_bottom {\n    padding: 0 10px;\n  }\n}\n.sidebar_page {\n  padding: 10px;\n  overflow-y: scroll;\n}\n.sidebar_page .logos {\n  display: flex;\n}\n.sidebar_page .logos * {\n  margin: 10px;\n  height: 70px;\n}\n.sidebar_page ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.sidebar_page ul li {\n  display: flex;\n  align-items: center;\n  color: #003661;\n  margin: 0;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.sidebar_page ul li .fa {\n  padding: 10px;\n}\n.sidebar_page ul li p {\n  font-size: 13px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.sidebar_page ul li:hover {\n  color: #db0084;\n}\n.sidebar_page .vigilance_burger {\n  display: flex;\n  align-items: center;\n  color: #003661;\n  background-color: #ffb82b;\n  border-radius: 20px;\n  margin: 10px 0;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.sidebar_page .vigilance_burger .fa {\n  padding: 10px;\n}\n.sidebar_page .vigilance_burger p {\n  font-size: 13px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.sidebar_page .vigilance_burger:hover {\n  background-color: #ffaa00;\n}\n.sidebar_page hr {\n  border: 1px solid rgb(224, 224, 224);\n  margin: 10px 0;\n}\n.sidebar_page .follow_us {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n  align-items: center;\n  color: #003661;\n}\n.sidebar_page .follow_us p {\n  font-size: 14px;\n  font-weight: bold;\n}\n.sidebar_page .follow_us .social_icons {\n  display: flex;\n  width: 100%;\n  margin: 0 50px;\n  justify-content: center;\n}\n.sidebar_page .follow_us .social_icons * {\n  font-size: 18px;\n  padding: 0 5px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.sidebar_page .follow_us .social_icons *:hover {\n  color: #db0084;\n}\n\n.alert {\n  color: #db0084;\n  cursor: pointer;\n}\n.alert:hover > .fa-arrow-right {\n  animation: arrow 1s ease-in-out infinite;\n}\n.alert .fa {\n  font-size: 20px;\n}\n.alert .fa-arrow-right {\n  position: relative;\n  left: 0;\n}\n.alert .alert_content {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 700;\n}\n.alert .alert_content * {\n  padding-right: 10px;\n}\n\n.vigilance_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  border: 1px solid rgb(224, 224, 224);\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n  cursor: pointer;\n}\n.vigilance_main:hover > .vigilance_btn .fa {\n  animation: arrow 1s ease-in-out infinite;\n}\n.vigilance_main .vigilance_text {\n  background-color: #ffb82b;\n  display: flex;\n  font-size: 13px;\n  padding: 8px;\n  margin: 0;\n  width: 80%;\n}\n.vigilance_main .vigilance_text .fa {\n  font-size: 15px;\n  margin-left: auto;\n  padding: 0 10px;\n}\n.vigilance_main .vigilance_text span {\n  margin-right: auto;\n}\n.vigilance_main .vigilance_btn {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  margin: 0;\n  padding: auto;\n  color: #145e9a;\n}\n.vigilance_main .vigilance_btn .fa {\n  position: relative;\n  left: 0;\n  margin-left: 5px;\n}\n\n.block_main .main_title {\n  color: #145e9a;\n  font-size: 21px;\n}\n.block_main .menu_carte {\n  display: flex;\n}\n.block_main .menu_carte p {\n  white-space: nowrap;\n  font-weight: 700;\n  font-size: 13px;\n  text-transform: uppercase;\n  color: #145e9a;\n  margin-right: 2%;\n  padding: 5px 10px;\n}\n.block_main .menu_carte p.is-active {\n  border-radius: 5px;\n  color: white;\n  background-color: #db0084;\n}\n.block_main .menu_carte p.is-active:hover {\n  color: white;\n  cursor: default;\n}\n.block_main .menu_carte p:hover {\n  color: #db0084;\n  cursor: pointer;\n}\n.block_main .carte {\n  position: relative;\n  width: 100%;\n  height: 550px;\n  border-radius: 5px;\n  padding: 5px;\n  background-size: cover;\n  background-position: right;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  margin-bottom: 20px;\n}\n.block_main .carte .submenu_carte {\n  display: block;\n  width: fit-content;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 13px;\n  color: #003661;\n  background-color: white;\n}\n.block_main .carte .submenu_carte .carte_day {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.block_main .carte .submenu_carte .carte_day .day {\n  font-weight: 700;\n}\n.block_main .carte .submenu_carte .is-active {\n  font-weight: 700;\n  color: #db0084;\n}\n.block_main .carte .submenu_carte * {\n  cursor: pointer;\n  line-height: 1.4;\n}\n.block_main .legende_carte {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  flex: 1;\n  margin: 5px;\n  border-radius: 5px;\n  overflow: hidden;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: white;\n  background-color: #145e9a;\n}\n.block_main .legende_carte .legende_carte_ico {\n  width: 20px;\n  margin: 0 10px;\n}\n.block_main .legende_carte div {\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.block_main .legende_carte .legende-active {\n  color: #145e9a;\n  background-color: white;\n}\n\n.article {\n  margin-bottom: 20px;\n}\n.article h2 {\n  color: #145e9a;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-weight: 600;\n}\n.article h2 .fa {\n  margin-right: 10px;\n  color: #db0084;\n  font-size: 22px;\n}\n.article .article_img {\n  position: relative;\n  border-radius: 5px;\n  overflow: hidden;\n  width: fit-content;\n  height: fit-content;\n  cursor: pointer;\n}\n.article .article_img img {\n  width: 101%;\n  height: 101%;\n}\n.article .article_img::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 100%;\n  height: 98%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.article .article_img::after {\n  position: absolute;\n  top: 42%;\n  left: 45%;\n  content: \"\\f04b\";\n  font-family: FontAwesome;\n  font-size: 35px;\n  color: white;\n}\n.article .article_txt p {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n.article .article_txt .article_read {\n  text-align: end;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #db0084;\n  cursor: pointer;\n}\n.article .article_txt .article_read .fa {\n  margin-left: 5px;\n}\n.article .article_txt .article_read:hover {\n  color: #1c9bd4;\n}\n\n.cards_article .article_img {\n  width: 100%;\n}\n.cards_article .article_img img {\n  width: 100%;\n}\n.cards_article .article_img::before {\n  background-color: transparent;\n}\n.cards_article .article_img::after {\n  content: \"\";\n}\n\n.cards_article_videos {\n  color: white;\n  background-color: #333;\n}\n.cards_article_videos .row_main {\n  grid-template-columns: 1fr 1fr;\n}\n.cards_article_videos .article_img {\n  width: 100%;\n  height: 100%;\n  background-color: red;\n}\n.cards_article_videos .article_img iframe {\n  width: 100%;\n  height: 100%;\n}\n.cards_article_videos .article_img::before {\n  background-color: transparent;\n}\n.cards_article_videos .article_img::after {\n  content: \"\";\n}\n.cards_article_videos h2 {\n  margin: 0 0 10px 0;\n  color: white;\n}\n.cards_article_videos .article_menu {\n  font-size: 14px;\n}\n.cards_article_videos .article_menu nav {\n  display: flex;\n}\n.cards_article_videos .article_menu nav .nav_article_video {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-bottom: 1px solid grey;\n  cursor: pointer;\n}\n.cards_article_videos .article_menu nav .nav_article_video .fa {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.cards_article_videos .article_menu nav .nav_article_video .fa p {\n  font-family: \"Roboto\", sans-serif;\n  margin-left: 10px;\n}\n.cards_article_videos .article_menu nav .nav_article_video .underliner {\n  position: relative;\n  bottom: -2px;\n  background-color: #db0084;\n  border-radius: 5px;\n  width: 0%;\n  height: 3px;\n  transition: width 0.3s ease;\n}\n.cards_article_videos .article_menu nav .nav_article_video:hover > .underliner {\n  width: 98%;\n}\n.cards_article_videos .article_menu nav .nav-active > .underliner {\n  width: 98%;\n}\n.cards_article_videos .article_menu .article_menu_content {\n  list-style-type: none;\n  margin: 0;\n  padding-top: 20px;\n}\n.cards_article_videos .article_menu .article_menu_content li {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  margin: 0 0 20px 0;\n  padding: 0;\n  cursor: pointer;\n}\n.cards_article_videos .article_menu .article_menu_content li:hover > .img_container img {\n  transform: scale(160%);\n}\n.cards_article_videos .article_menu .article_menu_content li .img_container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n.cards_article_videos .article_menu .article_menu_content li .img_container img {\n  width: 100%;\n  transform: scale(140%);\n  transition: all 0.3s ease-in-out;\n}\n.cards_article_videos .article_menu .article_menu_content li p {\n  margin-left: 10px;\n}\n\n.card {\n  display: grid;\n  grid-template-rows: 150px 2fr;\n  position: relative;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid rgb(224, 224, 224);\n  cursor: pointer;\n  pointer-events: none;\n  width: 100%;\n}\n.card:hover > .card_txt .pastille_arrow {\n  background-color: #db0084;\n}\n.card:hover > .img_container img {\n  transform: scale(110%);\n}\n.card:hover > .card_txt .suite {\n  color: #db0084;\n}\n.card .img_container {\n  pointer-events: auto;\n  width: 100%;\n}\n.card .img_container img {\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n}\n.card .pastille {\n  position: absolute;\n  top: 0;\n  margin: 10px;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: #db0084;\n  color: white;\n  width: fit-content;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.card .card_txt {\n  position: relative;\n  padding: 10px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  color: grey;\n  background-color: white;\n  pointer-events: auto;\n  width: 100%;\n}\n.card .card_txt strong {\n  color: #003661;\n  padding-right: 65px;\n}\n.card .card_txt .pastille_arrow {\n  position: absolute;\n  top: -20px;\n  right: 0;\n  margin-right: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #145e9a;\n  color: white;\n  font-size: 20px;\n  padding: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transition: all 0.3s ease-in-out;\n}\n.card .card_txt .date {\n  margin-top: 0;\n  color: #1c9bd4;\n}\n.card .card_txt .suite {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: -10px 0;\n  font-size: 11px;\n  color: #1c9bd4;\n  transition: all 0.3s ease-in-out;\n}\n.card .card_txt .suite * {\n  margin-left: 5px;\n}\n\n.card_solo {\n  grid-template-rows: 1fr;\n}\n\n.card_multi {\n  position: relative;\n  width: 100%;\n  max-width: 350px;\n  height: 100%;\n  max-height: 300px;\n  overflow: hidden;\n  border: 1px solid rgb(224, 224, 224);\n  border-radius: 5px;\n}\n.card_multi .card_multi_ul {\n  position: relative;\n  left: 0;\n  display: flex;\n  width: 400%;\n  padding: 0;\n  margin: 0;\n  transition: all 0.3s ease-in-out;\n}\n.card_multi .card_multi_ul .card_multi_li {\n  display: grid;\n  grid-template-rows: 150px 1fr;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  height: fit-content;\n  pointer-events: none;\n}\n.card_multi .card_multi_ul .card_multi_li:hover > .card_txt .pastille_arrow {\n  background-color: #db0084;\n}\n.card_multi .card_multi_ul .card_multi_li:hover > .img_container img {\n  transform: scale(110%);\n}\n.card_multi .card_multi_ul .card_multi_li .img_container {\n  pointer-events: auto;\n}\n.card_multi .card_multi_ul .card_multi_li .img_container img {\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n}\n.card_multi .card_multi_ul .card_multi_li .pastille {\n  position: absolute;\n  top: 0;\n  margin: 10px;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: #db0084;\n  color: white;\n  width: fit-content;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.card_multi .card_multi_ul .card_multi_li .card_txt {\n  position: relative;\n  padding: 10px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  color: grey;\n  background-color: white;\n  pointer-events: auto;\n}\n.card_multi .card_multi_ul .card_multi_li .card_txt strong {\n  color: #003661;\n  padding-right: 65px;\n}\n.card_multi .card_multi_ul .card_multi_li .card_txt .pastille_arrow {\n  position: absolute;\n  top: -20px;\n  right: 0;\n  margin-right: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #145e9a;\n  color: white;\n  font-size: 20px;\n  padding: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transition: all 0.3s ease-in-out;\n}\n.card_multi .dots {\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  cursor: default;\n}\n.card_multi .dot {\n  margin: 0 10px 10px 0;\n  padding: 3px;\n  border: 1px solid rgb(224, 224, 224);\n  border-radius: 50%;\n  pointer-events: initial;\n  cursor: pointer;\n}\n.card_multi .dot:hover {\n  background-color: #db0084;\n  border: 1px solid #db0084;\n}\n.card_multi .dot-active {\n  background-color: #db0084;\n  border: 1px solid #db0084;\n}\n\n.minicard {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  align-self: start;\n  justify-content: start;\n  border-radius: 5px;\n  border: 1px solid rgb(224, 224, 224);\n  height: 80px;\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n}\n.minicard:hover > .img_container img {\n  transform: scale(110%);\n}\n.minicard .img_container {\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  width: 100%;\n}\n.minicard .img_container img {\n  align-self: flex-end;\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n}\n.minicard .minicard_txt {\n  padding: 10px;\n  color: #003661;\n  background-color: white;\n  padding-bottom: 0;\n  font-size: 13px;\n  width: 100%;\n}\n.minicard .minicard_txt .minicard_date {\n  align-self: end;\n  color: #1c9bd4;\n}\n\n#block_card3 {\n  grid-row: 1/3;\n  grid-column: 3/4;\n}\n\n#block_article {\n  grid-row: 3/4;\n  grid-column: 1/3;\n}\n\n#block_article_video {\n  grid-row: 5/6;\n  grid-column: 1/4;\n  margin: 10px -20px;\n  padding: 20px;\n}\n\n.row_full {\n  grid-column: 1/4;\n  display: flex;\n  justify-content: center;\n}\n\n#btn_more {\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n  margin: 10px;\n  border-radius: 20px;\n  border: 2px solid #145e9a;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  background-color: #145e9a;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n#btn_more:hover {\n  background-color: transparent;\n  color: #145e9a;\n}\n#btn_more * {\n  margin: 10px;\n}\n\n@media screen and (max-width: 1024px) {\n  .card_multi {\n    grid-row: 2/3;\n    grid-column: 1/4;\n    max-width: none;\n    max-height: 400px;\n    margin-bottom: 20px;\n  }\n  .card_multi .card_multi_ul .card_multi_li {\n    grid-template-rows: 250px 1fr;\n  }\n  .article {\n    margin-bottom: 0;\n  }\n  .cards_article_videos .row_main {\n    grid-template-columns: 1fr;\n    grid-template-rows: 347px 1fr;\n  }\n  .row_full {\n    grid-column: 1/3;\n  }\n  #block_article {\n    grid-row: 3;\n    grid-column: 1/3;\n  }\n  #block_card3 {\n    grid-row: 4;\n    grid-column: 1/3;\n  }\n  #card_soraya {\n    grid-row: 6;\n    grid-column: 1/3;\n  }\n  #block_article_video {\n    grid-row: 7;\n    grid-column: 1/3;\n    margin: 10px -20px;\n    padding: 20px;\n  }\n}\n@media screen and (max-width: 656px) {\n  .card {\n    grid-template-rows: 300px 1fr;\n  }\n}\n.top20 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 15px;\n  color: white;\n  background-image: linear-gradient(to bottom, #0076c9 0%, #1c9bd4 100%);\n}\n.top20 h2 {\n  justify-self: center;\n  position: relative;\n  padding: 20px;\n  margin: 20px 0;\n}\n.top20 h2::after {\n  position: absolute;\n  bottom: 0;\n  left: 35%;\n  content: \"\";\n  width: 100px;\n  border-bottom: 3px solid white;\n}\n.top20 .cities,\n.top20 .outre-mer {\n  display: flex;\n  justify-content: center;\n  width: 1140px;\n}\n.top20 .cities ul,\n.top20 .outre-mer ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n  margin: 0;\n  padding: 10px 10%;\n  text-align: center;\n  list-style-type: none;\n}\n.top20 .cities ul li,\n.top20 .outre-mer ul li {\n  text-align: start;\n  cursor: pointer;\n  margin: -10px 0;\n}\n.top20 .social_icons {\n  display: flex;\n  justify-content: center;\n  margin: 30px 0;\n  font-size: 21px;\n}\n.top20 .social_icons .social_round {\n  margin: 0 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #145e9a;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.top20 .social_icons .social_round:hover {\n  background-color: #db0084;\n}\n.top20 .mini_menus ul {\n  display: flex;\n  flex-wrap: wrap;\n  width: 1140px;\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 20px;\n}\n.top20 .mini_menus ul li {\n  display: inline;\n  padding: 5px 10px;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.top20 .mini_menus ul li::before {\n  content: \"\\f054\";\n  font-family: \"FontAwesome\";\n  margin-right: 3px;\n  font-size: 12px;\n  color: #db0084;\n}\n.top20 .mini_menus ul li:hover {\n  color: #db0084;\n}\n\n.footer_logos {\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n.footer_logos .logo {\n  padding: 30px 15px;\n  height: 120px;\n}\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  font-size: 15px;\n  color: white;\n  background-color: #145e9a;\n}\n.copyright a {\n  color: white;\n}\n.copyright a:hover {\n  text-decoration: underline;\n  color: white;\n}\n\n@media screen and (max-width: 1024px) {\n  .top20 .cities,\n.top20 .outre-mer {\n    width: 600px;\n  }\n  .top20 .cities ul,\n.top20 .outre-mer ul {\n    grid-template-columns: 1fr 1fr;\n    padding: 10px 0;\n  }\n  .top20 .mini_menus ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 600px;\n  }\n}\n@media screen and (max-width: 656px) {\n  .top20 .cities,\n.top20 .outre-mer {\n    width: 100%;\n    text-align: center;\n  }\n  .top20 .cities ul,\n.top20 .outre-mer ul {\n    grid-template-columns: 1fr;\n    padding: 10px 0;\n  }\n  .top20 .mini_menus ul {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n}\nhtml,\nbody,\n#header,\n#sidebar_nav,\n#sidebar_overlay,\n#main {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #eee;\n  font-family: \"Quicksand\", sans-serif;\n}\n\n#header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -110px;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  transition: all 0.3s ease-in-out;\n  transform: translateY(0px);\n  background-color: white;\n}\n\n.sidebar_page {\n  display: block;\n  position: fixed;\n  width: 320px;\n  top: 0;\n  bottom: 0;\n  right: -340px;\n  opacity: 0;\n  z-index: 1001;\n  background-color: white;\n  transition: all 0.5s ease-in-out;\n}\n\n.sidebar_overlay {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  padding-right: 320px;\n  text-transform: uppercase;\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  opacity: 0;\n  cursor: pointer;\n}\n\n#main {\n  margin: 30px 0;\n}\n#main section {\n  margin: 15px 0;\n  background-color: white;\n  padding: 0 20px;\n  border-radius: 5px;\n}\n#main .block_cards {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px 30px;\n  margin: 0 -20px;\n  padding: 20px;\n  padding-bottom: 40px;\n  background-color: rgb(245, 245, 245);\n}\n#main .block_minicards {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 10px;\n}\n\n#footer {\n  margin-top: 20px;\n  background-color: #003661;\n}\n\na {\n  color: #003661;\n  transition: all 0.3s ease-in-out;\n  text-decoration: none;\n}\na:hover {\n  color: #db0084;\n}\n\n.is-active * {\n  color: #db0084;\n}\n\n.sidebar-active {\n  right: 0;\n  opacity: 1;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.row_main {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 40px;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  width: 100%;\n}\n\n.col_main {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n\n.spacer {\n  margin: 20px;\n}\n\n.container {\n  max-width: 1140px;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  position: relative;\n}\n\n.select {\n  padding: 10px;\n  margin-bottom: 20px;\n  width: 50%;\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 1200px) {\n  .container {\n    max-width: 940px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .container {\n    max-width: 600px;\n  }\n  .row_main {\n    grid-template-columns: 1fr;\n  }\n  #main .block_cards {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media screen and (max-width: 656px) {\n  .container {\n    max-width: 100%;\n  }\n  #header {\n    top: 0;\n  }\n  #main section {\n    background-color: transparent;\n    padding: 0 10px;\n  }\n  #main .block_cards {\n    grid-template-columns: 1fr;\n  }\n  #main .block_cards > div {\n    grid-column: 1/2;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_variables.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_header.scss","webpack://./src/styles/_sidebar.scss","webpack://./src/styles/_main.scss","webpack://./src/styles/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["\n$blue: #003661;\n$blueLight: #145e9a;\n$blueSuperLight: #1c9bd4;;\n$pink: #db0084;\n$yellow: #ffb82b;\n$yellowDark: #ffaa00;\n$greyDark: #333;\n$greyLight: rgb(224, 224, 224);\n$greySuperLight: rgb(245, 245, 245);\n\n// animations\n\n// arrow right moving\n@keyframes arrow {\n    0% {\n        left: 0;\n    }\n\n    50% {\n        left: 10px;\n    }\n\n    100% {\n        left: 0;\n    }\n}\n\n// Menu fadein/fadeout\n@keyframes menu {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}","@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');\n// @import \"../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss\";\n@import \"./variables\";\n@import \"./header\";\n@import \"./sidebar\";\n@import \"./main\";\n@import \"./footer\";\n\n\nhtml,\nbody,\n#header,\n#sidebar_nav,\n#sidebar_overlay,\n#main {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #eee;\n    font-family: 'Quicksand', sans-serif;\n}\n\n// SECTIONS\n#header {\n    position: -webkit-sticky;\n    position: sticky;\n    top: -110px;\n    left: 0;\n    width: 100%;\n    z-index: 1000;\n    transition: all .3s ease-in-out;\n    transform: translateY(0px);\n    background-color: white;\n}\n\n.sidebar_page {\n    display: block;\n    position: fixed;\n    width: 320px;\n    top: 0;\n    bottom: 0;\n    right: -340px;\n    opacity: 0;\n    z-index: 1001;\n    background-color: white;\n    transition: all .5s ease-in-out;\n}\n\n.sidebar_overlay {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    padding-right: 320px;\n    text-transform: uppercase;\n    color: white;\n    font-size: 18px;\n    font-weight: 700;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 1000;\n    background-color: rgba($color: #000000, $alpha: .5);\n    top: 0;\n    left: 0;\n    transition: all .3s ease-in-out;\n    opacity: 0;\n    cursor: pointer;\n}\n\n#main {\n    margin: 30px 0;\n\n    section {\n        margin: 15px 0;\n        background-color: white;\n        padding: 0 20px;\n        border-radius: 5px;\n    }\n\n    .block_cards {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 10px 30px;\n        margin: 0 -20px;\n        padding: 20px;\n        padding-bottom: 40px;\n        background-color: $greySuperLight;\n    }\n\n    .block_minicards {\n        display: flex;\n        flex-direction: column;\n        align-items: start;\n        gap: 10px;\n    }\n}\n\n#footer {\n    margin-top: 20px;\n    background-color: $blue;\n}\n\n// UTILS\n\na {\n    color: $blue;\n    transition: all .3s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        color: $pink;\n    }\n}\n\n.is-active {\n    * {\n        color: $pink;\n    }\n}\n\n.sidebar-active {\n    right: 0;\n    opacity: 1;\n}\n\n.row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row_main {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    gap: 40px;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    width: 100%;\n}\n\n.col_main {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    // align-items: stretch;\n\n}\n\n.spacer {\n    margin: 20px;\n}\n\n.container {\n    max-width: 1140px;\n    margin-right: auto !important;\n    margin-left: auto !important;\n    position: relative;\n}\n\n.select {\n    padding: 10px;\n    margin-bottom: 20px;\n    width: 50%;\n    background-color: white;\n    border: 1px solid grey;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n@media screen and (max-width:1200px) {\n    .container {\n        max-width: 940px;\n    }\n}\n\n@media screen and (max-width:1024px) {\n    .container {\n        max-width: 600px;\n    }\n\n    .row_main {\n        grid-template-columns: 1fr;\n    }\n\n    #main {\n        .block_cards {\n            // display: grid;\n            // gap: 10px 30px;\n            grid-template-columns: 1fr 1fr;\n            // background-color: $pink;\n        }\n\n    }\n}\n\n@media screen and (max-width:656px) {\n    .container {\n        max-width: 100%;\n    }\n\n    #header {\n        top: 0;\n    }\n\n    #main {\n        section {\n            background-color: transparent;\n            padding: 0 10px;\n        }\n\n        .block_cards {\n            grid-template-columns: 1fr;\n\n            &>div {\n                grid-column: 1/2;\n            }\n        }\n    }\n}","#block_search {\n    flex: 1;\n\n    .block_search_form {\n        display: flex;\n        border: solid 1px #dee2e6;\n        border-radius: 5px;\n        // width: 400px;\n        max-width: 100%;\n        // margin-right: 20px;\n        margin-left: 0;\n\n        .search_form_input {\n            flex-grow: 2;\n            height: 45px;\n            padding-left: 15px;\n            font-size: 12px;\n            font-weight: 500;\n            color: $blue;\n            border: none;\n            margin-right: 0;\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        .search_form_submit {\n            background: transparent;\n            border: none;\n            padding: 10px;\n            font-size: 16px;\n            color: grey;\n\n            &:hover {\n                color: $blue;\n                cursor: pointer;\n            }\n        }\n    }\n}\n\n#header_search_xs {\n    display: none;\n}\n\n#header_top {\n    padding: 12px 0;\n\n    #header_top_left {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        padding: 0;\n        width: fit-content;\n\n        .marianne,\n        .logo {\n            float: left;\n            width: auto;\n            margin: 0;\n            margin-right: 10px;\n        }\n    }\n\n    #header_top_middle {\n        margin-right: 15px;\n        margin-left: 0;\n        justify-content: start;\n        flex: 1;\n\n\n    }\n\n    #header_top_right {\n        position: relative;\n        display: flex;\n        align-items: center;\n        font-size: 22px;\n        color: transparent;\n\n        .fa-bell {\n            color: grey;\n            cursor: pointer;\n        }\n\n        #tooltip_vigilance {\n            // display: none;\n            position: absolute;\n            opacity: 0;\n            z-index: 600;\n            top: 30px;\n            left: -70%;\n            width: 150px;\n            height: 50px;\n            background-color: $yellow;\n            border-radius: 10px;\n            color: black;\n            transition: all .5s ease-in-out;\n\n            .fas {\n                font-size: 11px;\n                color: black;\n                margin-top: -10px;\n                margin-bottom: 0;\n            }\n\n            p {\n                font-size: 11px;\n                position: relative;\n                text-transform: uppercase;\n                margin: 0;\n            }\n\n            // Triangle warning\n            &::before {\n                content: '';\n                position: absolute;\n                top: -7px;\n                left: 43%;\n                width: 0;\n                height: 0;\n                border-left: 10px solid transparent;\n                border-right: 10px solid transparent;\n                border-bottom: 10px solid $yellow;\n                background-color: transparent;\n            }\n        }\n\n        .block_vigilance {\n            position: relative;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            text-align: center;\n            margin: 0;\n            cursor: pointer;\n\n            .fa-exclamation-triangle {\n                color: $yellow;\n                font-size: 18px;\n            }\n\n            .label {\n                color: $blue;\n                max-width: 60px;\n                font-size: 13px;\n                font-weight: 700;\n                font-family: \"Quicksand\", sans-serif;\n                margin: 5px 0;\n            }\n\n            &:hover>#tooltip_vigilance {\n                display: block;\n                opacity: 1;\n                transform: translateY(40px);\n                pointer-events: none;\n            }\n        }\n\n        #burger_menu_top {\n            display: none;\n            font-size: 14px;\n        }\n    }\n\n    #socialmedia {\n        display: flex;\n        flex-wrap: nowrap;\n\n        * {\n            margin-left: 10px;\n            padding: 10px;\n            font-size: 18px;\n            transition: all .3s ease-in-out;\n\n            &:hover {\n                cursor: pointer;\n                color: $pink;\n            }\n        }\n    }\n\n    #carte_vigilance {\n        margin: 0 20px;\n\n        &:hover {\n            cursor: pointer;\n        }\n\n    }\n}\n\n#header_middle {\n    z-index: 557;\n    width: 100%;\n\n    .block {\n        width: 100%;\n        text-align: start;\n        justify-content: start;\n        // max-width: 1140px;\n    }\n\n    ul {\n        list-style: none;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0;\n        padding: 5px 0;\n\n        li a {\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: start;\n            flex-wrap: nowrap;\n            margin-right: 10px;\n\n            .fa {\n                margin-right: 5px;\n                pointer-events: none;\n            }\n\n            p {\n                font-weight: 700;\n                text-transform: uppercase;\n                font-family: \"Quicksand\", sans-serif;\n                font-size: 12px;\n                margin-left: 5px;\n                pointer-events: none;\n            }\n        }\n\n    }\n}\n\n#header_bottom {\n    width: 100%;\n    background-color: $blueLight;\n    font-size: 12px;\n    color: white;\n    padding: 3px 0;\n\n    .block_bottom_nav {\n        #add_city {\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n\n            .fa-plus-circle {\n                padding-left: 10px;\n                color: white;\n                font-size: 20px;\n            }\n\n            &:hover {\n                cursor: pointer;\n            }\n        }\n    }\n}\n\n.fa-angle-down {\n    font-size: 14px;\n    margin-left: 7px;\n    margin-right: auto;\n    justify-self: start;\n}\n\n#burger_menu * {\n    font-size: 18px;\n    margin: 0 10px;\n}\n\n#menu_climat,\n#menu_actus {\n    display: none;\n    opacity: 0;\n    transition: all .5s;\n}\n\n.menu_container {\n    display: none;\n    position: fixed;\n    justify-content: center;\n    left: 0;\n    width: 100vw;\n    background-color: white;\n    border: 1px solid $greyLight;\n    box-shadow: 10px 10px 25px rgba(0, 0, 0, .3);\n    z-index: 2;\n\n    .menu-grid {\n        display: grid;\n        gap: 15px;\n        justify-items: start;\n        align-items: start;\n        // border: 3px solid pink;\n        width: 100%;\n        color: $blue;\n        max-width: 1140px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .menu-flex {\n        display: flex;\n        justify-items: start;\n        align-items: start;\n        // border: 3px solid pink;\n        width: 100%;\n        max-width: 1140px;\n        margin-left: auto;\n        margin-right: auto;\n        background-color: white;\n    }\n\n    .submenu {\n        position: relative;\n        height: auto;\n        align-self: stretch;\n        // border: 3px dashed pink;\n    }\n\n    .menu_row {\n        flex-direction: row;\n        width: 100%;\n        flex: 1;\n    }\n\n    .menu_col {\n        flex-direction: column;\n        flex: 1;\n    }\n\n\n    .title_menu {\n        width: 95%;\n        margin: 10px;\n        margin-left: 0;\n        padding: 10px;\n        padding-left: 0;\n        padding-bottom: 20px;\n        // color: $blue;\n        font-weight: 700;\n        font-size: 16px;\n        border-bottom: 2px solid $blueLight;\n        transition: all .3s ease-in-out;\n\n        &:hover {\n            border-bottom: 2px solid $pink;\n        }\n    }\n\n    .text_menu {\n        width: 100%;\n        padding: 5px 0;\n        // line-height: .5;\n        font-size: 14px;\n        font-weight: 600;\n        // color: $blueLight;\n    }\n}\n\n@media screen and (max-width:1200px) {\n    .menu_container {\n        .menu-grid {\n            max-width: 940px;\n        }\n    }\n}\n\n@media screen and (max-width:1024px) {\n    #header_top {\n\n        #socialmedia {\n            display: none;\n        }\n\n        #block_search {\n\n            .block_search_form {\n                width: auto;\n            }\n        }\n\n        .block_vigilance {\n            padding-right: 20px;\n\n            .label {\n                display: none;\n            }\n        }\n\n        #header_top_left {\n            .marianne {\n                transform: scale(70%);\n            }\n        }\n\n        #header_top_right {\n            #burger_menu_top {\n                display: block;\n            }\n\n            #tooltip_vigilance {\n                left: -160%;\n                top: 20px;\n            }\n\n            .block_vigilance {\n                &:hover>#tooltip_vigilance {\n                    display: block;\n                    opacity: 1;\n                    transform: translateY(20px);\n                    pointer-events: none;\n                }\n            }\n        }\n    }\n\n    #header_middle {\n        display: none;\n\n        #burger_menu {\n            display: flex;\n        }\n    }\n}\n\n@media screen and (max-width:656px) {\n    #header_search_xs {\n        display: flex;\n    }\n\n    #header_top {\n        padding: 3px;\n        margin: 0;\n\n        #header_top_left {\n\n            .logo,\n            .marianne {\n                transform: scale(70%);\n                margin-right: 0;\n            }\n        }\n\n        #header_top_middle {\n            display: none;\n        }\n\n        #header_top_right {\n            #burger_menu_top {\n                font-size: 21px;\n                margin-right: 20px;\n                margin-left: -40px;\n            }\n\n            #carte_vigilance {\n                transform: scale(70%);\n            }\n\n            .block_vigilance {\n                top: -20px;\n                left: -40px;\n            }\n\n            #tooltip_vigilance {\n                left: -130px;\n                top: 10px;\n\n                // Triangle warning\n                &::before {\n                    content: '';\n                    position: absolute;\n                    top: -7px;\n                    left: 80%;\n                    width: 0;\n                    height: 0;\n                    border-left: 10px solid transparent;\n                    border-right: 10px solid transparent;\n                    border-bottom: 10px solid $yellow;\n                    background-color: transparent;\n                }\n            }\n        }\n    }\n\n    #header_bottom {\n        padding: 0 10px;\n    }\n}",".sidebar_page {\n    padding: 10px;\n    overflow-y: scroll;\n\n    .logos {\n        display: flex;\n\n        * {\n            margin: 10px;\n            height: 70px;\n        }\n    }\n\n    ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n\n        li {\n            display: flex;\n            align-items: center;\n            color: $blue;\n            margin: 0;\n            transition: all .3s ease-in-out;\n            cursor: pointer;\n\n            .fa {\n                padding: 10px;\n            }\n\n            p {\n                font-size: 13px;\n                font-weight: bold;\n                text-transform: uppercase;\n            }\n\n            &:hover {\n                color: $pink;\n            }\n        }\n    }\n\n    .vigilance_burger {\n        display: flex;\n        align-items: center;\n        color: $blue;\n        background-color: $yellow;\n        border-radius: 20px;\n        margin: 10px 0;\n        transition: all .3s ease-in-out;\n        cursor: pointer;\n\n        .fa {\n            padding: 10px;\n        }\n\n        p {\n            font-size: 13px;\n            font-weight: bold;\n            text-transform: uppercase;\n        }\n\n        &:hover {\n            background-color: $yellowDark;\n        }\n    }\n\n    hr {\n        border: 1px solid $greyLight;\n        margin: 10px 0;\n    }\n\n    .follow_us {\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 40px;\n        align-items: center;\n        color: $blue;\n\n        p {\n            font-size: 14px;\n            font-weight: bold;\n        }\n\n        .social_icons {\n            display: flex;\n            width: 100%;\n            margin: 0 50px;\n            justify-content: center;\n\n            * {\n                font-size: 18px;\n                padding: 0 5px;\n                cursor: pointer;\n                transition: all .3s ease-in-out;\n\n                &:hover {\n                    color: $pink;\n                }\n\n            }\n        }\n\n    }\n}",".alert {\n    color: $pink;\n    cursor: pointer;\n\n    &:hover>.fa-arrow-right {\n        animation: arrow 1s ease-in-out infinite;\n    }\n\n    .fa {\n        font-size: 20px;\n    }\n\n    .fa-arrow-right {\n        position: relative;\n        left: 0;\n    }\n\n    .alert_content {\n        display: flex;\n        align-items: center;\n        font-size: 13px;\n        font-weight: 700;\n\n        * {\n            padding-right: 10px;\n        }\n    }\n\n}\n\n.vigilance_main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    border: 1px solid $greyLight;\n    width: 100%;\n    font-size: 14px;\n    font-weight: 600;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover>.vigilance_btn .fa {\n        animation: arrow 1s ease-in-out infinite;\n    }\n\n    .vigilance_text {\n        background-color: $yellow;\n        display: flex;\n        font-size: 13px;\n        padding: 8px;\n        margin: 0;\n        width: 80%;\n\n        .fa {\n            font-size: 15px;\n            margin-left: auto;\n            padding: 0 10px;\n        }\n\n        span {\n            margin-right: auto;\n        }\n    }\n\n    .vigilance_btn {\n        display: flex;\n        justify-content: center;\n        flex: 1;\n        // background-color: white;\n        margin: 0;\n        padding: auto;\n        color: $blueLight;\n\n        .fa {\n            position: relative;\n            left: 0;\n            margin-left: 5px;\n        }\n    }\n}\n\n.block_main {\n\n    .main_title {\n        color: $blueLight;\n        font-size: 21px;\n    }\n\n    .menu_carte {\n        display: flex;\n\n        p {\n            white-space: nowrap;\n            font-weight: 700;\n            font-size: 13px;\n            text-transform: uppercase;\n            color: $blueLight;\n            margin-right: 2%;\n            padding: 5px 10px;\n\n            &.is-active {\n                border-radius: 5px;\n                color: white;\n                background-color: $pink;\n\n                &:hover {\n                    color: white;\n                    cursor: default;\n                }\n            }\n\n            &:hover {\n                color: $pink;\n                cursor: pointer;\n            }\n        }\n    }\n\n    .carte {\n        position: relative;\n        width: 100%;\n        height: 550px;\n        border-radius: 5px;\n        padding: 5px;\n        background-size: cover;\n        background-position: right;\n        background-image: url(\"../assets/img/carte/map_prev.png\");\n        margin-bottom: 20px;\n\n        .submenu_carte {\n            display: block;\n            width: fit-content;\n            border-radius: 5px;\n            padding: 10px;\n            font-size: 13px;\n            color: $blue;\n            background-color: white;\n\n            .carte_day {\n                list-style: none;\n                margin: 0;\n                padding: 0;\n\n                .day {\n                    font-weight: 700;\n                }\n            }\n\n            .is-active {\n                font-weight: 700;\n                color: $pink;\n            }\n\n            * {\n                cursor: pointer;\n                line-height: 1.4;\n            }\n        }\n    }\n\n    .legende_carte {\n        position: absolute;\n        top: 0;\n        right: 0;\n        display: flex;\n        flex: 1;\n        margin: 5px;\n        border-radius: 5px;\n        overflow: hidden;\n        // width: fit-content;\n        font-size: 11px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: white;\n        background-color: $blueLight;\n\n        .legende_carte_ico {\n            width: 20px;\n            margin: 0 10px;\n        }\n\n        div {\n            padding: 0 10px;\n            display: flex;\n            align-items: center;\n            cursor: pointer;\n        }\n\n        .legende-active {\n            color: $blueLight;\n            background-color: white;\n        }\n    }\n}\n\n.article {\n    margin-bottom: 20px;\n\n    h2 {\n        color: $blueLight;\n        text-transform: uppercase;\n        font-size: 18px;\n        font-weight: 600;\n\n        .fa {\n            margin-right: 10px;\n            color: $pink;\n            font-size: 22px;\n        }\n    }\n\n    .article_img {\n        position: relative;\n        border-radius: 5px;\n        overflow: hidden;\n        width: fit-content;\n        height: fit-content;\n        cursor: pointer;\n\n        img {\n            width: 101%;\n            height: 101%;\n        }\n\n\n        &::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            border-radius: 5px;\n            overflow: hidden;\n            width: 100%;\n            height: 98%;\n            background-color: rgba(0, 0, 0, .3);\n        }\n\n        &::after {\n            position: absolute;\n            top: 42%;\n            left: 45%;\n            content: \"\\f04b\";\n            font-family: FontAwesome;\n            font-size: 35px;\n            color: white;\n        }\n    }\n\n    .article_txt {\n        p {\n            line-height: 1.5;\n            font-family: \"Roboto\", sans-serif;\n            font-size: 14px;\n            font-weight: 400;\n        }\n\n        .article_read {\n            text-align: end;\n            font-family: \"Roboto\", sans-serif;\n            font-size: 11px;\n            font-weight: 400;\n            text-transform: uppercase;\n            color: $pink;\n            cursor: pointer;\n\n            .fa {\n                margin-left: 5px;\n            }\n\n            &:hover {\n                color: $blueSuperLight;\n            }\n        }\n    }\n}\n\n.cards_article {\n    .article_img {\n        width: 100%;\n\n        img {\n            width: 100%;\n        }\n\n        &::before {\n            background-color: transparent;\n        }\n\n        &::after {\n            content: '';\n        }\n    }\n}\n\n.cards_article_videos {\n    color: white;\n    background-color: $greyDark;\n    // width: 100%;\n\n    .row_main {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .article_img {\n        width: 100%;\n        height: 100%;\n        background-color: red;\n\n        iframe {\n            width: 100%;\n            height: 100%;\n        }\n\n        &::before {\n            background-color: transparent;\n        }\n\n        &::after {\n            content: '';\n        }\n\n    }\n\n    h2 {\n        margin: 0 0 10px 0;\n        color: white;\n    }\n\n    .article_menu {\n        font-size: 14px;\n\n        nav {\n            display: flex;\n\n            .nav_article_video {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                // align-items: space-between;\n                width: 100%;\n                border-bottom: 1px solid grey;\n                cursor: pointer;\n\n                .fa {\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n\n                    p {\n                        font-family: 'Roboto', sans-serif;\n                        margin-left: 10px;\n                    }\n                }\n\n                .underliner {\n                    position: relative;\n                    bottom: -2px;\n                    background-color: $pink;\n                    border-radius: 5px;\n                    width: 0%;\n                    height: 3px;\n                    transition: width .3s ease;\n                }\n\n                &:hover>.underliner {\n                    width: 98%;\n                }\n            }\n\n            .nav-active>.underliner {\n                width: 98%;\n            }\n        }\n\n        .article_menu_content {\n            list-style-type: none;\n            margin: 0;\n            padding-top: 20px;\n\n            li {\n                display: grid;\n                grid-template-columns: 1fr 4fr;\n                margin: 0 0 20px 0;\n                padding: 0;\n                cursor: pointer;\n\n                &:hover>.img_container img {\n                    transform: scale(160%);\n                }\n\n                .img_container {\n                    display: flex;\n                    align-items: center;\n                    width: 100%;\n                    overflow: hidden;\n\n                    img {\n                        width: 100%;\n                        transform: scale(140%);\n                        transition: all .3s ease-in-out;\n                    }\n                }\n\n                p {\n                    margin-left: 10px;\n                }\n            }\n\n        }\n\n    }\n}\n\n.card {\n    display: grid;\n    grid-template-rows: 150px 2fr;\n    position: relative;\n    // margin: 10px 0;\n    border-radius: 5px;\n    overflow: hidden;\n    border: 1px solid $greyLight;\n    cursor: pointer;\n    // height: fit-content;\n    pointer-events: none;\n    width: 100%;\n\n    &:hover>.card_txt .pastille_arrow {\n        background-color: $pink;\n    }\n\n    &:hover>.img_container img {\n        transform: scale(110%);\n    }\n\n    &:hover>.card_txt .suite {\n        color: $pink;\n    }\n\n    .img_container {\n        pointer-events: auto;\n        width: 100%;\n\n        img {\n            width: 100%;\n            height: 100%;\n            transition: all .3s ease-in-out;\n\n        }\n\n    }\n\n    .pastille {\n        position: absolute;\n        top: 0;\n        margin: 10px;\n        padding: 5px;\n        border-radius: 5px;\n        background-color: $pink;\n        color: white;\n        width: fit-content;\n        font-size: 10px;\n        font-weight: 700;\n        text-transform: uppercase;\n    }\n\n    .card_txt {\n        position: relative;\n        padding: 10px;\n        font-family: 'Roboto', sans-serif;\n        font-size: 13px;\n        color: grey;\n        background-color: white;\n        pointer-events: auto;\n        width: 100%;\n\n        strong {\n            color: $blue;\n            padding-right: 65px;\n        }\n\n        .pastille_arrow {\n            position: absolute;\n            top: -20px;\n            right: 0;\n            margin-right: 20px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background-color: $blueLight;\n            color: white;\n            font-size: 20px;\n            padding: 20px;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            transition: all .3s ease-in-out;\n        }\n\n        .date {\n            margin-top: 0;\n            color: $blueSuperLight;\n        }\n\n        .suite {\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;\n            margin: -10px 0;\n            font-size: 11px;\n            color: $blueSuperLight;\n            transition: all .3s ease-in-out;\n\n            * {\n                margin-left: 5px;\n            }\n        }\n    }\n}\n\n.card_solo {\n    grid-template-rows: 1fr;\n}\n\n.card_multi {\n    position: relative;\n    width: 100%;\n    max-width: 350px;\n    height: 100%;\n    max-height: 300px;\n    overflow: hidden;\n    border: 1px solid $greyLight;\n    border-radius: 5px;\n\n    .card_multi_ul {\n        position: relative;\n        left: 0;\n        display: flex;\n        width: 400%;\n        padding: 0;\n        margin: 0;\n        transition: all .3s ease-in-out;\n\n        .card_multi_li {\n            display: grid;\n            grid-template-rows: 150px 1fr;\n            width: 100%;\n            position: relative;\n            overflow: hidden;\n            cursor: pointer;\n            height: fit-content;\n            pointer-events: none;\n\n            &:hover>.card_txt .pastille_arrow {\n                background-color: $pink;\n            }\n\n            &:hover>.img_container img {\n                transform: scale(110%);\n            }\n\n            .img_container {\n                pointer-events: auto;\n\n                img {\n                    width: 100%;\n                    height: 100%;\n                    transition: all .3s ease-in-out;\n\n                }\n\n            }\n\n            .pastille {\n                position: absolute;\n                top: 0;\n                margin: 10px;\n                padding: 5px;\n                border-radius: 5px;\n                background-color: $pink;\n                color: white;\n                width: fit-content;\n                font-size: 10px;\n                font-weight: 700;\n                text-transform: uppercase;\n            }\n\n            .card_txt {\n                position: relative;\n                padding: 10px;\n                font-family: 'Roboto', sans-serif;\n                font-size: 13px;\n                color: grey;\n                background-color: white;\n                pointer-events: auto;\n\n                strong {\n                    color: $blue;\n                    padding-right: 65px;\n                }\n\n                .pastille_arrow {\n                    position: absolute;\n                    top: -20px;\n                    right: 0;\n                    margin-right: 20px;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    background-color: $blueLight;\n                    color: white;\n                    font-size: 20px;\n                    padding: 20px;\n                    width: 20px;\n                    height: 20px;\n                    border-radius: 50%;\n                    transition: all .3s ease-in-out;\n                }\n            }\n        }\n    }\n\n    .dots {\n        display: flex;\n        justify-content: center;\n        background-color: white;\n        cursor: default;\n    }\n\n    .dot {\n        margin: 0 10px 10px 0;\n        padding: 3px;\n        border: 1px solid $greyLight;\n        border-radius: 50%;\n        pointer-events: initial;\n        cursor: pointer;\n\n        &:hover {\n            background-color: $pink;\n            border: 1px solid $pink;\n        }\n    }\n\n    .dot-active {\n        background-color: $pink;\n        border: 1px solid $pink;\n    }\n}\n\n.minicard {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    align-self: start;\n    justify-content: start;\n    border-radius: 5px;\n    border: 1px solid $greyLight;\n    height: 80px;\n    width: 100%;\n\n    overflow: hidden;\n    cursor: pointer;\n\n\n    &:hover>.img_container img {\n        transform: scale(110%);\n    }\n\n    .img_container {\n        display: flex;\n        justify-content: center;\n        overflow: hidden;\n        width: 100%;\n\n        img {\n            align-self: flex-end;\n            width: 100%;\n            height: 100%;\n            transition: all .3s ease-in-out;\n        }\n    }\n\n    .minicard_txt {\n        padding: 10px;\n        color: $blue;\n        background-color: white;\n        padding-bottom: 0;\n        font-size: 13px;\n        width: 100%;\n\n        .minicard_date {\n            align-self: end;\n            color: $blueSuperLight;\n        }\n    }\n}\n\n// Cards space\n#block_card3 {\n    grid-row: 1/3;\n    grid-column: 3/4;\n}\n\n#block_article {\n    grid-row: 3/4;\n    grid-column: 1/3;\n}\n\n#block_article_video {\n    grid-row: 5/6;\n    grid-column: 1/4;\n    margin: 10px -20px;\n    padding: 20px;\n}\n\n// Utils\n.row_full {\n    grid-column: 1/4;\n    display: flex;\n    justify-content: center;\n}\n\n#btn_more {\n    display: flex;\n    align-items: center;\n    padding: 0 30px;\n    margin: 10px;\n    border-radius: 20px;\n    border: 2px solid $blueLight;\n    text-transform: uppercase;\n    font-size: 14px;\n    color: white;\n    background-color: $blueLight;\n    transition: all .3s ease-in-out;\n    cursor: pointer;\n\n    &:hover {\n        background-color: transparent;\n        color: $blueLight;\n    }\n\n    * {\n        margin: 10px;\n    }\n}\n\n@media screen and (max-width:1200px)  {}\n\n@media screen and (max-width:1024px)  {\n    .card_multi {\n        grid-row: 2/3;\n        grid-column: 1/4;\n        max-width: none;\n        max-height: 400px;\n        margin-bottom: 20px;\n\n        .card_multi_ul {\n            .card_multi_li {\n                grid-template-rows: 250px 1fr;\n            }\n        }\n    }\n\n    .article {\n        margin-bottom: 0;\n    }\n\n    .cards_article_videos {\n        .row_main {\n            grid-template-columns: 1fr;\n            grid-template-rows: 347px 1fr;\n        }\n    }\n\n    .row_full {\n        grid-column: 1/3;\n    }\n\n    // Cards space\n    // #block_card1 {\n    //     grid-row: 1;\n    //     grid-column: 1/2;\n    // }\n\n    // #block_card2 {\n    //     grid-row: 1;\n    //     grid-column: 2/3;\n    // }\n\n    // #block_card4 {\n    //     grid-row: 2;\n    //     grid-column: 1/2;\n    // }\n\n    // #block_card5 {\n    //     grid-row: 2;\n    //     grid-column: 2/3;\n    // }\n\n    #block_article {\n        grid-row: 3;\n        grid-column: 1/3;\n    }\n\n    #block_card3 {\n        grid-row: 4;\n        grid-column: 1/3;\n    }\n\n    // #card_prevention {\n    //     grid-row: 5;\n    //     grid-column: 1/2;\n    // }\n\n    // #card_securite {\n    //     grid-row: 5;\n    //     grid-column: 2/3;\n    // }\n\n    #card_soraya {\n        grid-row: 6;\n        grid-column: 1/3;\n    }\n\n    #block_article_video {\n        grid-row: 7;\n        grid-column: 1/3;\n        margin: 10px -20px;\n        padding: 20px;\n    }\n\n    // #block_card6 {\n    //     grid-row: 8;\n    //     grid-column: 1/2;\n    // }\n\n    // #block_card7 {\n    //     grid-row: 8;\n    //     grid-column: 2/3;\n    // }\n\n    // #block_card8 {\n    //     grid-row: 9;\n    //     grid-column: 1/2;\n    // }\n\n    // #block_card9 {\n    //     grid-row: 9;\n    //     grid-column: 2/3;\n    // }\n\n    // #block_card10 {\n    //     grid-row: 10;\n    //     grid-column: 2/3;\n    // }\n}\n\n@media screen and (max-width:656px) {\n    .card {\n        grid-template-rows: 300px 1fr;\n    }\n}\n",".top20 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    // height: fit-content;\n    font-size: 15px;\n    color: white;\n    background-image: linear-gradient(to bottom, #0076c9 0%, #1c9bd4 100%);\n\n    h2 {\n        justify-self: center;\n        position: relative;\n        padding: 20px;\n        margin: 20px 0;\n\n        &::after {\n            position: absolute;\n            bottom: 0;\n            left: 35%;\n            content: '';\n            width: 100px;\n            border-bottom: 3px solid white;\n        }\n    }\n\n    .cities,\n    .outre-mer {\n        display: flex;\n        justify-content: center;\n        width: 1140px;\n\n        ul {\n            display: grid;\n            grid-template-columns: 1fr 1fr 1fr;\n            gap: 20px;\n            // justify-items: center;\n            margin: 0;\n            padding: 10px 10%;\n            text-align: center;\n            list-style-type: none;\n\n            li {\n                text-align: start;\n                cursor: pointer;\n                margin: -10px 0;\n            }\n        }\n    }\n\n    .social_icons {\n        display: flex;\n        justify-content: center;\n        margin: 30px 0;\n        font-size: 21px;\n\n        .social_round {\n            margin: 0 10px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 15px;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            background-color: $blueLight;\n            transition: all .3s ease-in-out;\n            cursor: pointer;\n\n            &:hover {\n                background-color: $pink;\n            }\n        }\n    }\n\n    .mini_menus {\n        ul {\n            display: flex;\n            flex-wrap: wrap;\n            width: 1140px;\n            list-style-type: none;\n            padding: 0;\n            margin-bottom: 20px;\n\n            li {\n                display: inline;\n                padding: 5px 10px;\n                transition: all .3s ease-in-out;\n                cursor: pointer;\n\n                &::before {\n                    content: \"\\f054\";\n                    font-family: \"FontAwesome\";\n                    margin-right: 3px;\n                    font-size: 12px;\n                    color: $pink;\n                }\n\n                &:hover {\n                    color: $pink;\n                }\n            }\n        }\n    }\n}\n\n.footer_logos {\n    display: flex;\n    justify-content: center;\n    background-color: white;\n\n    .logo {\n        padding: 30px 15px;\n        height: 120px;\n    }\n}\n\n.copyright {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    font-size: 15px;\n    color: white;\n    background-color: $blueLight;\n\n    a {\n        color: white;\n\n        &:hover {\n            text-decoration: underline;\n            color: white;\n        }\n    }\n}\n\n@media screen and (max-width:1024px) {\n    .top20 {\n\n        .cities,\n        .outre-mer {\n            width: 600px;\n\n            ul {\n                grid-template-columns: 1fr 1fr;\n                padding: 10px 0;\n\n            }\n        }\n\n        .mini_menus {\n            ul {\n                display: grid;\n                grid-template-columns: 1fr 1fr;\n                width: 600px;\n            }\n        }\n    }\n}\n\n@media screen and (max-width:656px) {\n    .top20 {\n\n        .cities,\n        .outre-mer {\n            width: 100%;\n            text-align: center;\n\n            ul {\n                grid-template-columns: 1fr;\n                padding: 10px 0;\n\n            }\n        }\n\n        .mini_menus {\n            ul {\n                grid-template-columns: 1fr;\n                width: 100%;\n            }\n        }\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/carte/map_prev.png":
/*!*******************************************!*\
  !*** ./src/assets/img/carte/map_prev.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41b2331bf964dd7a0a30.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
 // legende_carte BUTTONS  // previsions / vent / uv

var legende_carte = document.querySelectorAll('.legende_carte>div');
var carte = document.querySelector('.carte');
legende_carte.forEach(function (el) {
  // Change btns icons & colors
  el.addEventListener('mouseup', function () {
    legende_carte.forEach(function (x) {
      x.classList.remove('legende-active');
      x.children[0].src = x.children[0].src.includes('on') ? x.children[0].src.replace('on', 'off') : x.children[0].src;
    });
    el.classList.add('legende-active');
    el.children[0].src = el.children[0].src.replace('off', 'on'); // Change maps

    switch (el.id) {
      case "legende_carte_prev":
        carte.style.backgroundImage = 'url("./assets/img/carte/map_prev.png")';
        break;

      case "legende_carte_vent":
        carte.style.backgroundImage = 'url("./assets/img/carte/map_vent.png")';
        break;

      case "legende_carte_uv":
        carte.style.backgroundImage = 'url("./assets/img/carte/map_uv.png")';
        break;
    }
  });
}); // card_multi A LA UNE

var ul = document.querySelector('.card_multi_ul');
var dots = document.querySelectorAll('.dot');
var dot_posX = [0, 100, 200, 300];
dots.forEach(function (dot, i) {
  dot.addEventListener('mouseup', function () {
    dots.forEach(function (x) {
      x.classList.remove('dot-active');
    });
    dot.classList.add('dot-active');
    ul.style.left = "-".concat(dot_posX[i], "%");
  });
}); // Menu Climat & Actus

var btn_climat = document.querySelector('#btn_climat');
var btn_actus = document.querySelector('#btn_actus');
var btns = document.querySelectorAll('.menu_icon');
var menu_climat = document.querySelector('#menu_climat');
var menu_actus = document.querySelector('#menu_actus');
var menus = [menu_climat, menu_actus];
var menuHeight = 0;
var target = null;
btns.forEach(function (el) {
  return el.addEventListener('mouseover', function (e) {
    if (el === btn_climat) {
      console.log('btn_climat');
      target = menu_climat;
      target.style.display = 'flex';
    } else if (el === btn_actus) {
      target = menu_actus;
      target.style.display = 'flex';
    } else {
      target = null;
    }

    menuHeight = target ? target.offsetHeight : 0;
    console.log('HEIGHT', menuHeight);
    showMenu(target);
  });
});

function observerClientY(e) {
  console.log('target:', e.target);

  if (e.clientY > menuHeight + 165 || e.clientY < 120) {
    target = null;
    showMenu(target);
    menuHeight = 0;
  }
}

function showMenu(target) {
  if (target === null) {
    console.log('CLOSE');
    menus.forEach(function (el) {
      el.style.opacity = 0;
      setTimeout(function () {
        return el.style.display = 'none';
      }, 500);
      window.removeEventListener('mousemove', observerClientY, true);
    });
  } else {
    console.log('OPEN');
    var close = menus.filter(function (x) {
      return x !== target;
    })[0];
    close.style.display = 'none';
    target.style.opacity = 1;
    window.addEventListener('mousemove', observerClientY, true);
  }
} // Menu burger


var burger_menu = document.querySelector('#burger_menu');
var burger_menu_top = document.querySelector('#burger_menu_top');
var burger = [burger_menu, burger_menu_top];
var sidebar = document.querySelector('.sidebar_page');
var overlay = document.querySelector('.sidebar_overlay');
var burgerActive = false;
burger.forEach(function (el) {
  return el.addEventListener('mouseup', function () {
    burgerActive = !burgerActive;

    if (burgerActive) {
      console.log('active');
      sidebar.classList.add('sidebar-active');
      overlay.style.display = 'flex';
      overlay.style.opacity = 1;
    }
  });
});
overlay.addEventListener('mouseup', function () {
  burgerActive = !burgerActive;

  if (!burgerActive) {
    console.log('inactive');
    sidebar.classList.remove('sidebar-active');
    overlay.style.display = 'none';
    overlay.style.opacity = 0;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map