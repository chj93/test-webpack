/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: /Users/hjchoi/project/test-webpack/src/index.js: Cannot read property 'bindings' of null\n    at Scope.moveBindingTo (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/scope/index.js:934:13)\n    at BlockScoping.updateScopeInfo (/Users/hjchoi/project/test-webpack/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:364:17)\n    at BlockScoping.run (/Users/hjchoi/project/test-webpack/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:330:12)\n    at PluginPass.BlockStatementSwitchStatementProgram (/Users/hjchoi/project/test-webpack/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:70:24)\n    at newFn (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/visitors.js:175:21)\n    at NodePath._call (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/path/context.js:55:20)\n    at NodePath.call (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/path/context.js:42:17)\n    at NodePath.visit (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/path/context.js:92:31)\n    at TraversalContext.visitQueue (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/context.js:115:16)\n    at TraversalContext.visitSingle (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/context.js:84:19)\n    at TraversalContext.visit (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/context.js:143:19)\n    at Function.traverse.node (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/index.js:82:17)\n    at traverse (/Users/hjchoi/project/test-webpack/node_modules/@babel/traverse/lib/index.js:64:12)\n    at transformFile (/Users/hjchoi/project/test-webpack/node_modules/@babel/core/lib/transformation/index.js:107:29)\n    at transformFile.next (<anonymous>)\n    at run (/Users/hjchoi/project/test-webpack/node_modules/@babel/core/lib/transformation/index.js:35:12)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/hjchoi/project/test-webpack/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:261:32)\n    at /Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:223:11)\n    at /Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:189:28\n    at /Users/hjchoi/project/test-webpack/node_modules/@babel/core/lib/gensync-utils/async.js:72:7\n    at /Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:113:33\n    at step (/Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:287:14)\n    at /Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/hjchoi/project/test-webpack/node_modules/gensync/index.js:223:11)");

/***/ })
/******/ ]);