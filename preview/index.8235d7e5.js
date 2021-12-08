// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"emU3S":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"aeH4U"}],"aeH4U":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"8alcJ"}],"8alcJ":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"kI0tF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "07d7339d8235d7e5";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4TH1x":[function(require,module,exports) {
// Experiment library
var _index = require("../dist/index");
// Configuration to be used
var _config = require("./config");
// Import the jsPsych plugins to be used
var _jspsychInstructions = require("jspsych/plugins/jspsych-instructions");
const experiment = new _index.Experiment(_config.config);
const timeline = [
    {
        type: 'instructions',
        pages: [
            `<h1>First page!</h1>`,
            `<h1>Second page!</h1>`, 
        ],
        show_clickable_nav: true
    }
];
// Start the experiment with the jsPsych properties
experiment.start({
    timeline: timeline,
    show_progress_bar: true,
    show_preload_progress_bar: true
});

},{"./config":"iGW6J","jspsych/plugins/jspsych-instructions":"lmRoL","../dist/index":"7Ewmd"}],"iGW6J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config
);
const config = {
    // -------------------- Information --------------------
    name: 'Test experiment',
    localisation: 'en-US',
    // -------------------- Manipulations --------------------
    manipulations: {
    },
    // -------------------- Stimuli --------------------
    stimuli: {
    },
    // -------------------- Keybindings --------------------
    keybindings: {
        'keyboard': {
            next: 'j',
            previous: 'f',
            submit: ' ',
            alt: 'g'
        },
        'spectrometer': {
            next: '3',
            previous: '2',
            submit: '4',
            alt: '1'
        }
    },
    // -------------------- Style constants --------------------
    style: {
    },
    // -------------------- Other properties --------------------
    // Timing configuration, times specified in milliseconds
    timings: {
        run: 1000
    },
    // Seed for RNG must be in [0, 1)
    seed: 0.1234
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lmRoL":[function(require,module,exports) {
/* jspsych-instructions.js
 * Josh de Leeuw
 *
 * This plugin displays text (including HTML formatted strings) during the experiment.
 * Use it to show instructions, provide performance feedback, etc...
 *
 * Page numbers can be displayed to help with navigation by setting show_page_number
 * to true.
 *
 * documentation: docs.jspsych.org
 *
 *
 */ jsPsych.plugins.instructions = (function() {
    var plugin = {
    };
    plugin.info = {
        name: 'instructions',
        description: '',
        parameters: {
            pages: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Pages',
                default: undefined,
                array: true,
                description: 'Each element of the array is the content for a single page.'
            },
            key_forward: {
                type: jsPsych.plugins.parameterType.KEY,
                pretty_name: 'Key forward',
                default: 'ArrowRight',
                description: 'The key the subject can press in order to advance to the next page.'
            },
            key_backward: {
                type: jsPsych.plugins.parameterType.KEY,
                pretty_name: 'Key backward',
                default: 'ArrowLeft',
                description: 'The key that the subject can press to return to the previous page.'
            },
            allow_backward: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Allow backward',
                default: true,
                description: 'If true, the subject can return to the previous page of the instructions.'
            },
            allow_keys: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Allow keys',
                default: true,
                description: 'If true, the subject can use keyboard keys to navigate the pages.'
            },
            show_clickable_nav: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Show clickable nav',
                default: false,
                description: 'If true, then a "Previous" and "Next" button will be displayed beneath the instructions.'
            },
            show_page_number: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Show page number',
                default: false,
                description: 'If true, and clickable navigation is enabled, then Page x/y will be shown between the nav buttons.'
            },
            page_label: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Page label',
                default: 'Page',
                description: 'The text that appears before x/y (current/total) pages displayed with show_page_number'
            },
            button_label_previous: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Button label previous',
                default: 'Previous',
                description: 'The text that appears on the button to go backwards.'
            },
            button_label_next: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Button label next',
                default: 'Next',
                description: 'The text that appears on the button to go forwards.'
            }
        }
    };
    plugin.trial = function(display_element, trial) {
        var current_page = 0;
        var view_history = [];
        var start_time = performance.now();
        var last_page_update_time = start_time;
        function btnListener(evt) {
            evt.target.removeEventListener('click', btnListener);
            if (this.id === "jspsych-instructions-back") back();
            else if (this.id === 'jspsych-instructions-next') next();
        }
        function show_current_page() {
            var html = trial.pages[current_page];
            var pagenum_display = "";
            if (trial.show_page_number) pagenum_display = "<span style='margin: 0 1em;' class='jspsych-instructions-pagenum'>" + trial.page_label + ' ' + (current_page + 1) + "/" + trial.pages.length + "</span>";
            if (trial.show_clickable_nav) {
                var nav_html = "<div class='jspsych-instructions-nav' style='padding: 10px 0px;'>";
                if (trial.allow_backward) {
                    var allowed = current_page > 0 ? '' : "disabled='disabled'";
                    nav_html += "<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' " + allowed + ">&lt; " + trial.button_label_previous + "</button>";
                }
                if (trial.pages.length > 1 && trial.show_page_number) nav_html += pagenum_display;
                nav_html += "<button id='jspsych-instructions-next' class='jspsych-btn'style='margin-left: 5px;'>" + trial.button_label_next + " &gt;</button></div>";
                html += nav_html;
                display_element.innerHTML = html;
                if (current_page != 0 && trial.allow_backward) display_element.querySelector('#jspsych-instructions-back').addEventListener('click', btnListener);
                display_element.querySelector('#jspsych-instructions-next').addEventListener('click', btnListener);
            } else {
                if (trial.show_page_number && trial.pages.length > 1) // page numbers for non-mouse navigation
                html += "<div class='jspsych-instructions-pagenum'>" + pagenum_display + "</div>";
                display_element.innerHTML = html;
            }
        }
        function next() {
            add_current_page_to_view_history();
            current_page++;
            // if done, finish up...
            if (current_page >= trial.pages.length) endTrial();
            else show_current_page();
        }
        function back() {
            add_current_page_to_view_history();
            current_page--;
            show_current_page();
        }
        function add_current_page_to_view_history() {
            var current_time = performance.now();
            var page_view_time = current_time - last_page_update_time;
            view_history.push({
                page_index: current_page,
                viewing_time: page_view_time
            });
            last_page_update_time = current_time;
        }
        function endTrial() {
            if (trial.allow_keys) jsPsych.pluginAPI.cancelKeyboardResponse(keyboard_listener);
            display_element.innerHTML = '';
            var trial_data = {
                view_history: view_history,
                rt: performance.now() - start_time
            };
            jsPsych.finishTrial(trial_data);
        }
        var after_response = function(info) {
            // have to reinitialize this instead of letting it persist to prevent accidental skips of pages by holding down keys too long
            keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                valid_responses: [
                    trial.key_forward,
                    trial.key_backward
                ],
                rt_method: 'performance',
                persist: false,
                allow_held_key: false
            });
            // check if key is forwards or backwards and update page
            if (jsPsych.pluginAPI.compareKeys(info.key, trial.key_backward)) {
                if (current_page !== 0 && trial.allow_backward) back();
            }
            if (jsPsych.pluginAPI.compareKeys(info.key, trial.key_forward)) next();
        };
        show_current_page();
        if (trial.allow_keys) var keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: [
                trial.key_forward,
                trial.key_backward
            ],
            rt_method: 'performance',
            persist: false
        });
    };
    return plugin;
})();

},{}],"7Ewmd":[function(require,module,exports) {
/******/ (()=>{
    /******/ var __webpack_modules__ = {
        /***/ "./node_modules/consola/dist/consola.browser.js": function(module) {
            !function(t, e) {
                module.exports = e();
            }(this, function() {
                "use strict";
                function t1(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function e1(t, e) {
                    for(var r = 0; r < e.length; r++){
                        var o = e[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                    }
                }
                function r1(t, r, o) {
                    return r && e1(t.prototype, r), o && e1(t, o), t;
                }
                function o1(t, e, r) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r, t;
                }
                function n1(t, e2) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e2 && (o = o.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })), r.push.apply(r, o);
                    }
                    return r;
                }
                function s1(t) {
                    for(var e3 = 1; e3 < arguments.length; e3++){
                        var r = null != arguments[e3] ? arguments[e3] : {
                        };
                        e3 % 2 ? n1(Object(r), !0).forEach(function(e) {
                            o1(t, e, r[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n1(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                        });
                    }
                    return t;
                }
                function i1(t2) {
                    return (function(t) {
                        if (Array.isArray(t)) return l1(t);
                    })(t2) || (function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t2) || a1(t2) || (function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })();
                }
                function a1(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l1(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l1(t, e) : void 0;
                    }
                }
                function l1(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var r = 0, o = new Array(e); r < e; r++)o[r] = t[r];
                    return o;
                }
                function u1(t3) {
                    if ("undefined" == typeof Symbol || null == t3[Symbol.iterator]) {
                        if (Array.isArray(t3) || (t3 = a1(t3))) {
                            var e = 0, r = function() {
                            };
                            return {
                                s: r,
                                n: function() {
                                    return e >= t3.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t3[e++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: r
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o, n, s = !0, i = !1;
                    return {
                        s: function() {
                            o = t3[Symbol.iterator]();
                        },
                        n: function() {
                            var t = o.next();
                            return s = t.done, t;
                        },
                        e: function(t) {
                            i = !0, n = t;
                        },
                        f: function() {
                            try {
                                s || null == o.return || o.return();
                            } finally{
                                if (i) throw n;
                            }
                        }
                    };
                }
                var c1 = {
                };
                c1[c1.Fatal = 0] = "Fatal", c1[c1.Error = 0] = "Error", c1[c1.Warn = 1] = "Warn", c1[c1.Log = 2] = "Log", c1[c1.Info = 3] = "Info", c1[c1.Success = 3] = "Success", c1[c1.Debug = 4] = "Debug", c1[c1.Trace = 5] = "Trace", c1[c1.Silent = -1 / 0] = "Silent", c1[c1.Verbose = 1 / 0] = "Verbose";
                var f = {
                    silent: {
                        level: -1
                    },
                    fatal: {
                        level: c1.Fatal
                    },
                    error: {
                        level: c1.Error
                    },
                    warn: {
                        level: c1.Warn
                    },
                    log: {
                        level: c1.Log
                    },
                    info: {
                        level: c1.Info
                    },
                    success: {
                        level: c1.Success
                    },
                    debug: {
                        level: c1.Debug
                    },
                    trace: {
                        level: c1.Trace
                    },
                    verbose: {
                        level: c1.Trace
                    },
                    ready: {
                        level: c1.Info
                    },
                    start: {
                        level: c1.Info
                    }
                };
                function h(t) {
                    var e;
                    return e = t, "[object Object]" === Object.prototype.toString.call(e) && !(!t.message && !t.args) && !t.stack;
                }
                var p = !1, y = [], d = function() {
                    function e4() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        };
                        for(var o in t1(this, e4), this._reporters = r.reporters || [], this._types = r.types || f, this.level = void 0 !== r.level ? r.level : 3, this._defaults = r.defaults || {
                        }, this._async = void 0 !== r.async ? r.async : void 0, this._stdout = r.stdout, this._stderr = r.stderr, this._mockFn = r.mockFn, this._throttle = r.throttle || 1000, this._throttleMin = r.throttleMin || 5, this._types){
                            var n = s1(s1({
                                type: o
                            }, this._types[o]), this._defaults);
                            this[o] = this._wrapLogFn(n), this[o].raw = this._wrapLogFn(n, !0);
                        }
                        this._mockFn && this.mockTypes(), this._lastLogSerialized = void 0, this._lastLog = void 0, this._lastLogTime = void 0, this._lastLogCount = 0, this._throttleTimeout = void 0;
                    }
                    return r1(e4, [
                        {
                            key: "create",
                            value: function(t) {
                                return new e4(Object.assign({
                                    reporters: this._reporters,
                                    level: this.level,
                                    types: this._types,
                                    defaults: this._defaults,
                                    stdout: this._stdout,
                                    stderr: this._stderr,
                                    mockFn: this._mockFn
                                }, t));
                            }
                        },
                        {
                            key: "withDefaults",
                            value: function(t) {
                                return this.create({
                                    defaults: Object.assign({
                                    }, this._defaults, t)
                                });
                            }
                        },
                        {
                            key: "withTag",
                            value: function(t) {
                                return this.withDefaults({
                                    tag: this._defaults.tag ? this._defaults.tag + ":" + t : t
                                });
                            }
                        },
                        {
                            key: "addReporter",
                            value: function(t) {
                                return this._reporters.push(t), this;
                            }
                        },
                        {
                            key: "removeReporter",
                            value: function(t) {
                                if (t) {
                                    var e = this._reporters.indexOf(t);
                                    if (e >= 0) return this._reporters.splice(e, 1);
                                } else this._reporters.splice(0);
                                return this;
                            }
                        },
                        {
                            key: "setReporters",
                            value: function(t) {
                                return this._reporters = Array.isArray(t) ? t : [
                                    t
                                ], this;
                            }
                        },
                        {
                            key: "wrapAll",
                            value: function() {
                                this.wrapConsole(), this.wrapStd();
                            }
                        },
                        {
                            key: "restoreAll",
                            value: function() {
                                this.restoreConsole(), this.restoreStd();
                            }
                        },
                        {
                            key: "wrapConsole",
                            value: function() {
                                for(var t in this._types)console["__" + t] || (console["__" + t] = console[t]), console[t] = this[t].raw;
                            }
                        },
                        {
                            key: "restoreConsole",
                            value: function() {
                                for(var t in this._types)console["__" + t] && (console[t] = console["__" + t], delete console["__" + t]);
                            }
                        },
                        {
                            key: "wrapStd",
                            value: function() {
                                this._wrapStream(this.stdout, "log"), this._wrapStream(this.stderr, "log");
                            }
                        },
                        {
                            key: "_wrapStream",
                            value: function(t4, e) {
                                var r = this;
                                t4 && (t4.__write || (t4.__write = t4.write), t4.write = function(t) {
                                    r[e].raw(String(t).trim());
                                });
                            }
                        },
                        {
                            key: "restoreStd",
                            value: function() {
                                this._restoreStream(this.stdout), this._restoreStream(this.stderr);
                            }
                        },
                        {
                            key: "_restoreStream",
                            value: function(t) {
                                t && t.__write && (t.write = t.__write, delete t.__write);
                            }
                        },
                        {
                            key: "pauseLogs",
                            value: function() {
                                p = !0;
                            }
                        },
                        {
                            key: "resumeLogs",
                            value: function() {
                                p = !1;
                                var t, e = u1(y.splice(0));
                                try {
                                    for(e.s(); !(t = e.n()).done;){
                                        var r = t.value;
                                        r[0]._logFn(r[1], r[2]);
                                    }
                                } catch (t5) {
                                    e.e(t5);
                                } finally{
                                    e.f();
                                }
                            }
                        },
                        {
                            key: "mockTypes",
                            value: function(t) {
                                if (this._mockFn = t || this._mockFn, "function" == typeof this._mockFn) for(var e in this._types)this[e] = this._mockFn(e, this._types[e]) || this[e], this[e].raw = this[e];
                            }
                        },
                        {
                            key: "_wrapLogFn",
                            value: function(t, e) {
                                var r = this;
                                return function() {
                                    for(var o = arguments.length, n = new Array(o), s = 0; s < o; s++)n[s] = arguments[s];
                                    if (!p) return r._logFn(t, n, e);
                                    y.push([
                                        r,
                                        t,
                                        n,
                                        e
                                    ]);
                                };
                            }
                        },
                        {
                            key: "_logFn",
                            value: function(t6, e5, r2) {
                                var o = this;
                                if (t6.level > this.level) return !!this._async && Promise.resolve(!1);
                                var n = Object.assign({
                                    date: new Date,
                                    args: []
                                }, t6);
                                !r2 && 1 === e5.length && h(e5[0]) ? Object.assign(n, e5[0]) : n.args = Array.from(e5), n.message && (n.args.unshift(n.message), delete n.message), n.additional && (Array.isArray(n.additional) || (n.additional = n.additional.split("\n")), n.args.push("\n" + n.additional.join("\n")), delete n.additional), n.type = "string" == typeof n.type ? n.type.toLowerCase() : "", n.tag = "string" == typeof n.tag ? n.tag.toLowerCase() : "";
                                var a = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = o._lastLogCount - o._throttleMin;
                                    if (o._lastLog && e > 0) {
                                        var r = i1(o._lastLog.args);
                                        e > 1 && r.push("(repeated ".concat(e, " times)")), o._log(s1(s1({
                                        }, o._lastLog), {
                                        }, {
                                            args: r
                                        })), o._lastLogCount = 1;
                                    }
                                    if (t) {
                                        if (o._lastLog = n, o._async) return o._logAsync(n);
                                        o._log(n);
                                    }
                                };
                                clearTimeout(this._throttleTimeout);
                                var l = this._lastLogTime ? n.date - this._lastLogTime : 0;
                                if (this._lastLogTime = n.date, l < this._throttle) try {
                                    var u = JSON.stringify([
                                        n.type,
                                        n.tag,
                                        n.args
                                    ]), c = this._lastLogSerialized === u;
                                    if (this._lastLogSerialized = u, c && (this._lastLogCount++, this._lastLogCount > this._throttleMin)) return void (this._throttleTimeout = setTimeout(a, this._throttle));
                                } catch (t) {
                                }
                                a(!0);
                            }
                        },
                        {
                            key: "_log",
                            value: function(t) {
                                var e, r = u1(this._reporters);
                                try {
                                    for(r.s(); !(e = r.n()).done;)e.value.log(t, {
                                        async: !1,
                                        stdout: this.stdout,
                                        stderr: this.stderr
                                    });
                                } catch (t7) {
                                    r.e(t7);
                                } finally{
                                    r.f();
                                }
                            }
                        },
                        {
                            key: "_logAsync",
                            value: function(t) {
                                var e = this;
                                return Promise.all(this._reporters.map(function(r) {
                                    return r.log(t, {
                                        async: !0,
                                        stdout: e.stdout,
                                        stderr: e.stderr
                                    });
                                }));
                            }
                        },
                        {
                            key: "stdout",
                            get: function() {
                                return this._stdout || console._stdout;
                            }
                        },
                        {
                            key: "stderr",
                            get: function() {
                                return this._stderr || console._stderr;
                            }
                        }
                    ]), e4;
                }();
                d.prototype.add = d.prototype.addReporter, d.prototype.remove = d.prototype.removeReporter, d.prototype.clear = d.prototype.removeReporter, d.prototype.withScope = d.prototype.withTag, d.prototype.mock = d.prototype.mockTypes, d.prototype.pause = d.prototype.pauseLogs, d.prototype.resume = d.prototype.resumeLogs;
                var v, g = function() {
                    function e6(r) {
                        t1(this, e6), this.options = Object.assign({
                        }, r), this.defaultColor = "#7f8c8d", this.levelColorMap = {
                            0: "#c0392b",
                            1: "#f39c12",
                            3: "#00BCD4"
                        }, this.typeColorMap = {
                            success: "#2ecc71"
                        };
                    }
                    return r1(e6, [
                        {
                            key: "log",
                            value: function(t) {
                                var e = t.level < 1 ? console.__error || console.error : 1 === t.level && console.warn ? console.__warn || console.warn : console.__log || console.log, r = "log" !== t.type ? t.type : "", o = t.tag ? t.tag : "", n = this.typeColorMap[t.type] || this.levelColorMap[t.level] || this.defaultColor, s = "\n      background: ".concat(n, ";\n      border-radius: 0.5em;\n      color: white;\n      font-weight: bold;\n      padding: 2px 0.5em;\n    "), a = "%c".concat([
                                    o,
                                    r
                                ].filter(Boolean).join(":"));
                                "string" == typeof t.args[0] ? e.apply(void 0, [
                                    "".concat(a, "%c ").concat(t.args[0]),
                                    s,
                                    ""
                                ].concat(i1(t.args.slice(1)))) : e.apply(void 0, [
                                    a,
                                    s
                                ].concat(i1(t.args)));
                            }
                        }
                    ]), e6;
                }();
                return "undefined" != typeof window && window.consola || ((v = new d({
                    reporters: [
                        new g
                    ]
                })).Consola = d, v.LogLevel = c1, v.BrowserReporter = g, v);
            });
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/jspsych/css/jspsych.css": (module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            /* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
            /* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([
                module.id,
                "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700);"
            ]);
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module.id,
                "/*\n * CSS for jsPsych experiments.\n *\n * This stylesheet provides minimal styling to make jsPsych\n * experiments look polished without any additional styles.\n */\n\n/* Container holding jsPsych content */\n\n .jspsych-display-element {\n   display: flex;\n   flex-direction: column;\n   overflow-y: auto;\n }\n\n .jspsych-display-element:focus {\n   outline: none;\n }\n\n .jspsych-content-wrapper {\n   display: flex;\n   margin: auto;\n   flex: 1 1 100%;\n   width: 100%;\n }\n\n .jspsych-content {\n   max-width: 95%; /* this is mainly an IE 10-11 fix */\n   text-align: center;\n   margin: auto; /* this is for overflowing content */\n }\n\n .jspsych-top {\n   align-items: flex-start;\n }\n\n .jspsych-middle {\n   align-items: center;\n }\n\n/* fonts and type */\n\n.jspsych-display-element {\n  font-family: 'Open Sans', 'Arial', sans-serif;\n  font-size: 18px;\n  line-height: 1.6em;\n}\n\n/* Form elements like input fields and buttons */\n\n.jspsych-display-element input[type=\"text\"] {\n  font-family: 'Open Sans', 'Arial', sans-serif;\n  font-size: 14px;\n}\n\n/* borrowing Bootstrap style for btn elements, but combining styles a bit */\n.jspsych-btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: 'Open Sans', 'Arial', sans-serif;\n  cursor: pointer;\n  line-height: 1.4;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n/* only apply the hover style on devices with a mouse/pointer that can hover - issue #977 */\n@media (hover: hover) {\n  .jspsych-btn:hover {\n    background-color: #ddd;\n    border-color: #aaa;\n  }\n}\n\n.jspsych-btn:active {\n  background-color: #ddd;\n  border-color:#000000;\n}\n\n.jspsych-btn:disabled {\n  background-color: #eee;\n  color: #aaa;\n  border-color: #ccc;\n  cursor: not-allowed;\n}\n\n/* custom style for input[type=\"range] (slider) to improve alignment between positions and labels */\n\n.jspsych-slider {\n  appearance: none;\n  -webkit-appearance: none; \n  -moz-appearance: none;\n  width: 100%; \n  background: transparent; \n}\n.jspsych-slider:focus {\n  outline: none;\n}\n/* track */\n.jspsych-slider::-webkit-slider-runnable-track {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n.jspsych-slider::-moz-range-track {\n  appearance: none;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n.jspsych-slider::-ms-track {\n  appearance: none;\n  width: 99%;\n  height: 14px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n/* thumb */\n.jspsych-slider::-webkit-slider-thumb {\n  border: 1px solid #666;\n  height: 24px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9px;\n}\n.jspsych-slider::-moz-range-thumb {\n  border: 1px solid #666;\n  height: 24px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n}\n.jspsych-slider::-ms-thumb {\n  border: 1px solid #666;\n  height: 20px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  margin-top: -2px;\n}\n\n/* jsPsych progress bar */\n\n#jspsych-progressbar-container {\n  color: #555;\n  border-bottom: 1px solid #dedede;\n  background-color: #f9f9f9;\n  margin-bottom: 1em;\n  text-align: center;\n  padding: 8px 0px;\n  width: 100%;\n  line-height: 1em;\n}\n#jspsych-progressbar-container span {\n  font-size: 14px;\n  padding-right: 14px;\n}\n#jspsych-progressbar-outer {\n  background-color: #eee;\n  width: 50%;\n  margin: auto;\n  height: 14px;\n  display: inline-block;\n  vertical-align: middle;\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n#jspsych-progressbar-inner {\n  background-color: #aaa;\n  width: 0%;\n  height: 100%;\n}\n\n/* Control appearance of jsPsych.data.displayData() */\n#jspsych-data-display {\n  text-align: left;\n}\n",
                "",
                {
                    "version": 3,
                    "sources": [
                        "webpack://./node_modules/jspsych/css/jspsych.css"
                    ],
                    "names": [],
                    "mappings": "AAAA;;;;;EAKE;;AAIF,sCAAsC;;CAErC;GACE,aAAa;GACb,sBAAsB;GACtB,gBAAgB;CAClB;;CAEA;GACE,aAAa;CACf;;CAEA;GACE,aAAa;GACb,YAAY;GACZ,cAAc;GACd,WAAW;CACb;;CAEA;GACE,cAAc,EAAE,mCAAmC;GACnD,kBAAkB;GAClB,YAAY,EAAE,oCAAoC;CACpD;;CAEA;GACE,uBAAuB;CACzB;;CAEA;GACE,mBAAmB;CACrB;;AAED,mBAAmB;;AAEnB;EACE,6CAA6C;EAC7C,eAAe;EACf,kBAAkB;AACpB;;AAEA,gDAAgD;;AAEhD;EACE,6CAA6C;EAC7C,eAAe;AACjB;;AAEA,2EAA2E;AAC3E;EACE,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,6CAA6C;EAC7C,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,WAAW;EACX,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA,2FAA2F;AAC3F;EACE;IACE,sBAAsB;IACtB,kBAAkB;EACpB;AACF;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,mGAAmG;;AAEnG;EACE,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA,UAAU;AACV;EACE,gBAAgB;EAChB,wBAAwB;EACxB,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,oDAAoD;EACpD,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,oDAAoD;EACpD,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,oDAAoD;EACpD,kBAAkB;EAClB,sBAAsB;AACxB;AACA,UAAU;AACV;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,wBAAwB;EACxB,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA,yBAAyB;;AAEzB;EACE,WAAW;EACX,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,2CAA2C;AAC7C;AACA;EACE,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA,qDAAqD;AACrD;EACE,gBAAgB;AAClB",
                    "sourcesContent": [
                        "/*\n * CSS for jsPsych experiments.\n *\n * This stylesheet provides minimal styling to make jsPsych\n * experiments look polished without any additional styles.\n */\n\n @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700);\n\n/* Container holding jsPsych content */\n\n .jspsych-display-element {\n   display: flex;\n   flex-direction: column;\n   overflow-y: auto;\n }\n\n .jspsych-display-element:focus {\n   outline: none;\n }\n\n .jspsych-content-wrapper {\n   display: flex;\n   margin: auto;\n   flex: 1 1 100%;\n   width: 100%;\n }\n\n .jspsych-content {\n   max-width: 95%; /* this is mainly an IE 10-11 fix */\n   text-align: center;\n   margin: auto; /* this is for overflowing content */\n }\n\n .jspsych-top {\n   align-items: flex-start;\n }\n\n .jspsych-middle {\n   align-items: center;\n }\n\n/* fonts and type */\n\n.jspsych-display-element {\n  font-family: 'Open Sans', 'Arial', sans-serif;\n  font-size: 18px;\n  line-height: 1.6em;\n}\n\n/* Form elements like input fields and buttons */\n\n.jspsych-display-element input[type=\"text\"] {\n  font-family: 'Open Sans', 'Arial', sans-serif;\n  font-size: 14px;\n}\n\n/* borrowing Bootstrap style for btn elements, but combining styles a bit */\n.jspsych-btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: 'Open Sans', 'Arial', sans-serif;\n  cursor: pointer;\n  line-height: 1.4;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n/* only apply the hover style on devices with a mouse/pointer that can hover - issue #977 */\n@media (hover: hover) {\n  .jspsych-btn:hover {\n    background-color: #ddd;\n    border-color: #aaa;\n  }\n}\n\n.jspsych-btn:active {\n  background-color: #ddd;\n  border-color:#000000;\n}\n\n.jspsych-btn:disabled {\n  background-color: #eee;\n  color: #aaa;\n  border-color: #ccc;\n  cursor: not-allowed;\n}\n\n/* custom style for input[type=\"range] (slider) to improve alignment between positions and labels */\n\n.jspsych-slider {\n  appearance: none;\n  -webkit-appearance: none; \n  -moz-appearance: none;\n  width: 100%; \n  background: transparent; \n}\n.jspsych-slider:focus {\n  outline: none;\n}\n/* track */\n.jspsych-slider::-webkit-slider-runnable-track {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n.jspsych-slider::-moz-range-track {\n  appearance: none;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n.jspsych-slider::-ms-track {\n  appearance: none;\n  width: 99%;\n  height: 14px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n/* thumb */\n.jspsych-slider::-webkit-slider-thumb {\n  border: 1px solid #666;\n  height: 24px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9px;\n}\n.jspsych-slider::-moz-range-thumb {\n  border: 1px solid #666;\n  height: 24px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n}\n.jspsych-slider::-ms-thumb {\n  border: 1px solid #666;\n  height: 20px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  margin-top: -2px;\n}\n\n/* jsPsych progress bar */\n\n#jspsych-progressbar-container {\n  color: #555;\n  border-bottom: 1px solid #dedede;\n  background-color: #f9f9f9;\n  margin-bottom: 1em;\n  text-align: center;\n  padding: 8px 0px;\n  width: 100%;\n  line-height: 1em;\n}\n#jspsych-progressbar-container span {\n  font-size: 14px;\n  padding-right: 14px;\n}\n#jspsych-progressbar-outer {\n  background-color: #eee;\n  width: 50%;\n  margin: auto;\n  height: 14px;\n  display: inline-block;\n  vertical-align: middle;\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n#jspsych-progressbar-inner {\n  background-color: #aaa;\n  width: 0%;\n  height: 100%;\n}\n\n/* Control appearance of jsPsych.data.displayData() */\n#jspsych-data-display {\n  text-align: left;\n}\n"
                    ],
                    "sourceRoot": ""
                }
            ]);
            // Exports
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css": (module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());
            // Module
            ___CSS_LOADER_EXPORT___.push([
                module.id,
                "",
                "",
                {
                    "version": 3,
                    "sources": [],
                    "names": [],
                    "mappings": "",
                    "sourceRoot": ""
                }
            ]);
            // Exports
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        /***/ },
        /***/ "./node_modules/css-loader/dist/runtime/api.js": (module)=>{
            "use strict";
            /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/ // css base code, injected by the css-loader
            // eslint-disable-next-line func-names
            module.exports = function(cssWithMappingToString) {
                var list = []; // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function(item) {
                        var content = cssWithMappingToString(item);
                        if (item[2]) return "@media ".concat(item[2], " {").concat(content, "}");
                        return content;
                    }).join("");
                }; // import a list of modules into the list
                // eslint-disable-next-line func-names
                list.i = function(modules, mediaQuery, dedupe) {
                    if (typeof modules === "string") // eslint-disable-next-line no-param-reassign
                    modules = [
                        [
                            null,
                            modules,
                            ""
                        ]
                    ];
                    var alreadyImportedModules = {
                    };
                    if (dedupe) for(var i = 0; i < this.length; i++){
                        // eslint-disable-next-line prefer-destructuring
                        var id = this[i][0];
                        if (id != null) alreadyImportedModules[id] = true;
                    }
                    for(var _i = 0; _i < modules.length; _i++){
                        var item = [].concat(modules[_i]);
                        if (dedupe && alreadyImportedModules[item[0]]) continue;
                        if (mediaQuery) {
                            if (!item[2]) item[2] = mediaQuery;
                            else item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                        }
                        list.push(item);
                    }
                };
                return list;
            };
        /***/ },
        /***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js": (module)=>{
            "use strict";
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
                return arr2;
            }
            function _iterableToArrayLimit(arr, i) {
                var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
                if (_i == null) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _s, _e;
                try {
                    for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally{
                    try {
                        if (!_n && _i["return"] != null) _i["return"]();
                    } finally{
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            module.exports = function cssWithMappingToString(item) {
                var _item = _slicedToArray(item, 4), content = _item[1], cssMapping = _item[3];
                if (!cssMapping) return content;
                if (typeof btoa === "function") {
                    // eslint-disable-next-line no-undef
                    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
                    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
                    var sourceMapping = "/*# ".concat(data, " */");
                    var sourceURLs = cssMapping.sources.map(function(source) {
                        return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
                    });
                    return [
                        content
                    ].concat(sourceURLs).concat([
                        sourceMapping
                    ]).join("\n");
                }
                return [
                    content
                ].join("\n");
            };
        /***/ },
        /***/ "./node_modules/d3-random/src/defaultSource.js": (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Math.random;
        /***/ },
        /***/ "./node_modules/d3-random/src/lcg.js": (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "default": ()=>/* binding */ lcg
            });
            // https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
            const mul = 1664525;
            const inc = 1013904223;
            const eps = 1 / 4294967296;
            function lcg(seed = Math.random()) {
                let state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
                return ()=>(state = mul * state + inc | 0, eps * (state >>> 0))
                ;
            }
        /***/ },
        /***/ "./node_modules/d3-random/src/uniform.js": (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            /* harmony import */ var _defaultSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultSource.js */ "./node_modules/d3-random/src/defaultSource.js");
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = function sourceRandomUniform(source) {
                function randomUniform(min, max) {
                    min = min == null ? 0 : +min;
                    max = max == null ? 1 : +max;
                    if (arguments.length === 1) max = min, min = 0;
                    else max -= min;
                    return function() {
                        return source() * max + min;
                    };
                }
                randomUniform.source = sourceRandomUniform;
                return randomUniform;
            }(_defaultSource_js__WEBPACK_IMPORTED_MODULE_0__.default);
        /***/ },
        /***/ "./node_modules/jquery/dist/jquery.js": function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */ 
            (function(global, factory) {
                if (typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
                // is present, execute the factory and get jQuery.
                // For environments that do not have a `window` with a `document`
                // (such as Node.js), expose a factory as module.exports.
                // This accentuates the need for the creation of a real `window`.
                // e.g. var jQuery = require("jquery")(window);
                // See ticket #14549 for more info.
                module.exports = global.document ? factory(global, true) : function(w) {
                    if (!w.document) throw new Error("jQuery requires a window with a document");
                    return factory(w);
                };
                else factory(global);
            // Pass this if window is not defined yet
            })(typeof window !== "undefined" ? window : this, function(window1, noGlobal) {
                // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
                // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
                // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
                // enough that all such attempts are guarded in a try block.
                "use strict";
                var arr1 = [];
                var getProto = Object.getPrototypeOf;
                var slice1 = arr1.slice;
                var flat = arr1.flat ? function(array) {
                    return arr1.flat.call(array);
                } : function(array) {
                    return arr1.concat.apply([], array);
                };
                var push1 = arr1.push;
                var indexOf1 = arr1.indexOf;
                var class2type = {
                };
                var toString = class2type.toString;
                var hasOwn1 = class2type.hasOwnProperty;
                var fnToString = hasOwn1.toString;
                var ObjectFunctionString = fnToString.call(Object);
                var support1 = {
                };
                var isFunction = function isFunction(obj) {
                    // Support: Chrome <=57, Firefox <=52
                    // In some browsers, typeof returns "function" for HTML <object> elements
                    // (i.e., `typeof document.createElement( "object" ) === "function"`).
                    // We don't want to classify *any* DOM node as a function.
                    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
                    // Plus for old WebKit, typeof returns "function" for HTML collections
                    // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
                    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
                };
                var isWindow = function isWindow(obj) {
                    return obj != null && obj === obj.window;
                };
                var document1 = window1.document;
                var preservedScriptAttributes = {
                    type: true,
                    src: true,
                    nonce: true,
                    noModule: true
                };
                function DOMEval(code, node, doc) {
                    doc = doc || document1;
                    var i, val, script = doc.createElement("script");
                    script.text = code;
                    if (node) for(i in preservedScriptAttributes){
                        // Support: Firefox 64+, Edge 18+
                        // Some browsers don't support the "nonce" property on scripts.
                        // On the other hand, just using `getAttribute` is not enough as
                        // the `nonce` attribute is reset to an empty string whenever it
                        // becomes browsing-context connected.
                        // See https://github.com/whatwg/html/issues/2369
                        // See https://html.spec.whatwg.org/#nonce-attributes
                        // The `node.getAttribute` check was added for the sake of
                        // `jQuery.globalEval` so that it can fake a nonce-containing node
                        // via an object.
                        val = node[i] || node.getAttribute && node.getAttribute(i);
                        if (val) script.setAttribute(i, val);
                    }
                    doc.head.appendChild(script).parentNode.removeChild(script);
                }
                function toType(obj) {
                    if (obj == null) return obj + "";
                    // Support: Android <=2.3 only (functionish RegExp)
                    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
                }
                /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
                // unguarded in another place, it seems safer to define global only for this module
                var version = "3.6.0", // Define a local copy of jQuery
                jQuery = function(selector, context) {
                    // The jQuery object is actually just the init constructor 'enhanced'
                    // Need init if jQuery is called (just allow error to be thrown if not included)
                    return new jQuery.fn.init(selector, context);
                };
                jQuery.fn = jQuery.prototype = {
                    // The current version of jQuery being used
                    jquery: version,
                    constructor: jQuery,
                    // The default length of a jQuery object is 0
                    length: 0,
                    toArray: function() {
                        return slice1.call(this);
                    },
                    // Get the Nth element in the matched element set OR
                    // Get the whole matched element set as a clean array
                    get: function(num) {
                        // Return all the elements in a clean array
                        if (num == null) return slice1.call(this);
                        // Return just the one element from the set
                        return num < 0 ? this[num + this.length] : this[num];
                    },
                    // Take an array of elements and push it onto the stack
                    // (returning the new matched element set)
                    pushStack: function(elems) {
                        // Build a new jQuery matched element set
                        var ret = jQuery.merge(this.constructor(), elems);
                        // Add the old object onto the stack (as a reference)
                        ret.prevObject = this;
                        // Return the newly-formed element set
                        return ret;
                    },
                    // Execute a callback for every element in the matched set.
                    each: function(callback) {
                        return jQuery.each(this, callback);
                    },
                    map: function(callback) {
                        return this.pushStack(jQuery.map(this, function(elem, i) {
                            return callback.call(elem, i, elem);
                        }));
                    },
                    slice: function() {
                        return this.pushStack(slice1.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(jQuery.grep(this, function(_elem, i) {
                            return (i + 1) % 2;
                        }));
                    },
                    odd: function() {
                        return this.pushStack(jQuery.grep(this, function(_elem, i) {
                            return i % 2;
                        }));
                    },
                    eq: function(i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [
                            this[j]
                        ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    // For internal use only.
                    // Behaves like an Array's method, not like a jQuery method.
                    push: push1,
                    sort: arr1.sort,
                    splice: arr1.splice
                };
                jQuery.extend = jQuery.fn.extend = function() {
                    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {
                    }, i = 1, length = arguments.length, deep = false;
                    // Handle a deep copy situation
                    if (typeof target === "boolean") {
                        deep = target;
                        // Skip the boolean and the target
                        target = arguments[i] || {
                        };
                        i++;
                    }
                    // Handle case when target is a string or something (possible in deep copy)
                    if (typeof target !== "object" && !isFunction(target)) target = {
                    };
                    // Extend jQuery itself if only one argument is passed
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for(; i < length; i++){
                        // Only deal with non-null/undefined values
                        if ((options = arguments[i]) != null) // Extend the base object
                        for(name in options){
                            copy = options[name];
                            // Prevent Object.prototype pollution
                            // Prevent never-ending loop
                            if (name === "__proto__" || target === copy) continue;
                            // Recurse if we're merging plain objects or arrays
                            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                                src = target[name];
                                // Ensure proper type for the source value
                                if (copyIsArray && !Array.isArray(src)) clone = [];
                                else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {
                                };
                                else clone = src;
                                copyIsArray = false;
                                // Never move original objects, clone them
                                target[name] = jQuery.extend(deep, clone, copy);
                            // Don't bring in undefined values
                            } else if (copy !== undefined) target[name] = copy;
                        }
                    }
                    // Return the modified object
                    return target;
                };
                jQuery.extend({
                    // Unique for each copy of jQuery on the page
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    // Assume jQuery is ready without the ready module
                    isReady: true,
                    error: function(msg) {
                        throw new Error(msg);
                    },
                    noop: function() {
                    },
                    isPlainObject: function(obj) {
                        var proto, Ctor;
                        // Detect obvious negatives
                        // Use toString instead of jQuery.type to catch host objects
                        if (!obj || toString.call(obj) !== "[object Object]") return false;
                        proto = getProto(obj);
                        // Objects with no prototype (e.g., `Object.create( null )`) are plain
                        if (!proto) return true;
                        // Objects with prototype are plain iff they were constructed by a global Object function
                        Ctor = hasOwn1.call(proto, "constructor") && proto.constructor;
                        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
                    },
                    isEmptyObject: function(obj) {
                        var name;
                        for(name in obj)return false;
                        return true;
                    },
                    // Evaluates a script in a provided context; falls back to the global one
                    // if not specified.
                    globalEval: function(code, options, doc) {
                        DOMEval(code, {
                            nonce: options && options.nonce
                        }, doc);
                    },
                    each: function(obj, callback) {
                        var length, i = 0;
                        if (isArrayLike(obj)) {
                            length = obj.length;
                            for(; i < length; i++){
                                if (callback.call(obj[i], i, obj[i]) === false) break;
                            }
                        } else for(i in obj){
                            if (callback.call(obj[i], i, obj[i]) === false) break;
                        }
                        return obj;
                    },
                    // results is for internal usage only
                    makeArray: function(arr, results) {
                        var ret = results || [];
                        if (arr != null) {
                            if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                                arr
                            ] : arr);
                            else push1.call(ret, arr);
                        }
                        return ret;
                    },
                    inArray: function(elem, arr, i) {
                        return arr == null ? -1 : indexOf1.call(arr, elem, i);
                    },
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    merge: function(first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        for(; j < len; j++)first[i++] = second[j];
                        first.length = i;
                        return first;
                    },
                    grep: function(elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        // Go through the array, only saving the items
                        // that pass the validator function
                        for(; i < length; i++){
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                        }
                        return matches;
                    },
                    // arg is for internal usage only
                    map: function(elems, callback, arg) {
                        var length, value, i = 0, ret = [];
                        // Go through the array, translating each of the items to their new values
                        if (isArrayLike(elems)) {
                            length = elems.length;
                            for(; i < length; i++){
                                value = callback(elems[i], i, arg);
                                if (value != null) ret.push(value);
                            }
                        // Go through every key on the object,
                        } else for(i in elems){
                            value = callback(elems[i], i, arg);
                            if (value != null) ret.push(value);
                        }
                        // Flatten any nested arrays
                        return flat(ret);
                    },
                    // A global GUID counter for objects
                    guid: 1,
                    // jQuery.support is not used in Core but other projects attach their
                    // properties to it so it needs to exist.
                    support: support1
                });
                if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr1[Symbol.iterator];
                // Populate the class2type map
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                });
                function isArrayLike(obj) {
                    // Support: real iOS 8.2 only (not reproducible in simulator)
                    // `in` check used to prevent JIT error (gh-2145)
                    // hasOwn isn't used here due to false negatives
                    // regarding Nodelist length in IE
                    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                    if (isFunction(obj) || isWindow(obj)) return false;
                    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
                }
                var Sizzle1 = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */ function(window) {
                    var i2, support, Expr, getText, isXML1, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
                    setDocument, document, docElem1, documentIsHTML, rbuggyQSA, rbuggyMatches, matches1, contains, // Instance-specific data
                    expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                        if (a === b) hasDuplicate = true;
                        return 0;
                    }, // Instance methods
                    hasOwn = {
                    }.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push = arr2.push, slice = arr2.slice, // Use a stripped-down indexOf as it's faster than native
                    // https://jsperf.com/thor-indexof-vs-for/5
                    indexOf = function(list, elem) {
                        var i = 0, len = list.length;
                        for(; i < len; i++){
                            if (list[i] === elem) return i;
                        }
                        return -1;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
                    // http://www.w3.org/TR/css3-selectors/#whitespace
                    whitespace = "[\\x20\\t\\r\\n\\f]", // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
                    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
                    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
                    // or strings [capture 3 or capture 4]"
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                    // 1. quoted (capture 3; capture 4 or capture 5)
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
                    ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                    rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        "ID": new RegExp("^#(" + identifier + ")"),
                        "CLASS": new RegExp("^\\.(" + identifier + ")"),
                        "TAG": new RegExp("^(" + identifier + "|[*])"),
                        "ATTR": new RegExp("^" + attributes),
                        "PSEUDO": new RegExp("^" + pseudos),
                        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                        // For use in libraries implementing .is()
                        // We use this for POS matching in `select`
                        "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
                    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 65536;
                        return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
                        nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
                        // Support: IE <=11+
                        // For values outside the Basic Multilingual Plane (BMP), manually construct a
                        // surrogate pair
                        high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
                    }, // CSS string/identifier serialization
                    // https://drafts.csswg.org/cssom/#common-serializing-idioms
                    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                        if (asCodePoint) {
                            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                            if (ch === "\0") return "\uFFFD";
                            // Control characters and (dependent upon position) numbers get escaped as code points
                            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                        }
                        // Other potentially-special ASCII characters get backslash-escaped
                        return "\\" + ch;
                    }, // Used for iframes
                    // See setDocument()
                    // Removing the function wrapper causes a "Permission Denied"
                    // error in IE
                    unloadHandler = function() {
                        setDocument();
                    }, inDisabledFieldset = addCombinator(function(elem) {
                        return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                    // Optimize for push.apply( _, NodeList )
                    try {
                        push.apply(arr2 = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                        // Support: Android<4.0
                        // Detect silently failing push.apply
                        // eslint-disable-next-line no-unused-expressions
                        arr2[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: arr2.length ? // Leverage slice if possible
                            function(target, els) {
                                pushNative.apply(target, slice.call(els));
                            } : // Support: IE<9
                            // Otherwise append directly
                            function(target, els) {
                                var j = target.length, i = 0;
                                // Can't trust NodeList.length
                                while(target[j++] = els[i++]);
                                target.length = j - 1;
                            }
                        };
                    }
                    function Sizzle(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
                        nodeType = context ? context.nodeType : 9;
                        results = results || [];
                        // Return early from calls with invalid selector or context
                        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
                        // Try to shortcut find operations (as opposed to filters) in HTML documents
                        if (!seed) {
                            setDocument(context);
                            context = context || document;
                            if (documentIsHTML) {
                                // If the selector is sufficiently simple, try using a "get*By*" DOM method
                                // (excepting DocumentFragment context, where the methods don't exist)
                                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                                    // ID selector
                                    if (m = match[1]) {
                                        // Document context
                                        if (nodeType === 9) {
                                            if (elem = context.getElementById(m)) // Support: IE, Opera, Webkit
                                            // TODO: identify versions
                                            // getElementById can match elements by name instead of ID
                                            {
                                                if (elem.id === m) {
                                                    results.push(elem);
                                                    return results;
                                                }
                                            } else return results;
                                        // Element context
                                        } else // Support: IE, Opera, Webkit
                                        // TODO: identify versions
                                        // getElementById can match elements by name instead of ID
                                        if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    // Type selector
                                    } else if (match[2]) {
                                        push.apply(results, context.getElementsByTagName(selector));
                                        return results;
                                    // Class selector
                                    } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                        push.apply(results, context.getElementsByClassName(m));
                                        return results;
                                    }
                                }
                                // Take advantage of querySelectorAll
                                if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                                    newSelector = selector;
                                    newContext = context;
                                    // qSA considers elements outside a scoping root when evaluating child or
                                    // descendant combinators, which is not what we want.
                                    // In such cases, we work around the behavior by prefixing every selector in the
                                    // list with an ID selector referencing the scope context.
                                    // The technique has to be used as well when a leading combinator is used
                                    // as such selectors are not recognized by querySelectorAll.
                                    // Thanks to Andrew Dupont for this technique.
                                    if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                                        // Expand context for sibling selectors
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                        // We can use :scope instead of the ID hack if the browser
                                        // supports it & if we're not changing the context.
                                        if (newContext !== context || !support.scope) {
                                            // Capture the context ID, setting it first if necessary
                                            if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape);
                                            else context.setAttribute("id", nid = expando);
                                        }
                                        // Prefix every selector in the list
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                        newSelector = groups.join(",");
                                    }
                                    try {
                                        push.apply(results, newContext.querySelectorAll(newSelector));
                                        return results;
                                    } catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    } finally{
                                        if (nid === expando) context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                        // All others
                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }
                    /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                            if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                            delete cache[keys.shift()];
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
                        var el = document.createElement("fieldset");
                        try {
                            return !!fn(el);
                        } catch (e) {
                            return false;
                        } finally{
                            // Remove from its parent by default
                            if (el.parentNode) el.parentNode.removeChild(el);
                            // release memory in IE
                            el = null;
                        }
                    }
                    /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */ function addHandle(attrs, handler) {
                        var arr = attrs.split("|"), i = arr.length;
                        while(i--)Expr.attrHandle[arr[i]] = handler;
                    }
                    /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */ function siblingCheck(a, b) {
                        var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
                        // Use IE sourceIndex if available on both nodes
                        if (diff) return diff;
                        // Check if b follows a
                        if (cur) while(cur = cur.nextSibling){
                            if (cur === b) return -1;
                        }
                        return a ? 1 : -1;
                    }
                    /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === type;
                        };
                    }
                    /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return (name === "input" || name === "button") && elem.type === type;
                        };
                    }
                    /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
                        // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                        return function(elem) {
                            // Only certain elements can match :enabled or :disabled
                            // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                            // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                            if ("form" in elem) {
                                // Check for inherited disabledness on relevant non-disabled elements:
                                // * listed form-associated elements in a disabled fieldset
                                //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                                //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                                // * option elements in a disabled optgroup
                                //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                                // All such elements have a "form" property.
                                if (elem.parentNode && elem.disabled === false) {
                                    // Option elements defer to a parent optgroup if present
                                    if ("label" in elem) {
                                        if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                                        else return elem.disabled === disabled;
                                    }
                                    // Support: IE 6 - 11
                                    // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                                    return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                                    /* jshint -W018 */ elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                                }
                                return elem.disabled === disabled;
                            // Try to winnow out elements that can't be disabled before trusting the disabled property.
                            // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                            // even exist on them, let alone have a boolean value.
                            } else if ("label" in elem) return elem.disabled === disabled;
                            // Remaining elements are neither :enabled nor :disabled
                            return false;
                        };
                    }
                    /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
                        return markFunction(function(argument) {
                            argument = +argument;
                            return markFunction(function(seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                // Match elements found at the specified indexes
                                while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                            });
                        });
                    }
                    /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
                        return context && typeof context.getElementsByTagName !== "undefined" && context;
                    }
                    // Expose support vars for convenience
                    support = Sizzle.support = {
                    };
                    /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */ isXML1 = Sizzle.isXML = function(elem) {
                        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
                        // Support: IE <=8
                        // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
                        // https://bugs.jquery.com/ticket/4833
                        return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
                    };
                    /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ setDocument = Sizzle.setDocument = function(node1) {
                        var hasCompare, subWindow, doc = node1 ? node1.ownerDocument || node1 : preferredDoc;
                        // Return early if doc is invalid or already selected
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
                        // Update global variables
                        document = doc;
                        docElem1 = document.documentElement;
                        documentIsHTML = !isXML1(document);
                        // Support: IE 9 - 11+, Edge 12 - 18+
                        // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                            // Support: IE 11, Edge
                            if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false);
                            else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
                        }
                        // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
                        // Safari 4 - 5 only, Opera <=11.6 - 12.x only
                        // IE/Edge & older browsers don't support the :scope pseudo-class.
                        // Support: Safari 6.0 only
                        // Safari 6.0 supports :scope but it's an alias of :root there.
                        support.scope = assert(function(el) {
                            docElem1.appendChild(el).appendChild(document.createElement("div"));
                            return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
                        });
                        /* Attributes
	---------------------------------------------------------------------- */ // Support: IE<8
                        // Verify that getAttribute really returns attributes and not properties
                        // (excepting IE8 booleans)
                        support.attributes = assert(function(el) {
                            el.className = "i";
                            return !el.getAttribute("className");
                        });
                        /* getElement(s)By*
	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
                        support.getElementsByTagName = assert(function(el) {
                            el.appendChild(document.createComment(""));
                            return !el.getElementsByTagName("*").length;
                        });
                        // Support: IE<9
                        support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                        // Support: IE<10
                        // Check if getElementById returns elements by name
                        // The broken getElementById methods don't pick up programmatically-set names,
                        // so use a roundabout getElementsByName test
                        support.getById = assert(function(el) {
                            docElem1.appendChild(el).id = expando;
                            return !document.getElementsByName || !document.getElementsByName(expando).length;
                        });
                        // ID filter and find
                        if (support.getById) {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [
                                        elem
                                    ] : [];
                                }
                            };
                        } else {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                            // Support: IE 6 - 7 only
                            // getElementById is not reliable as a find shortcut
                            Expr.find["ID"] = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var node, i, elems, elem = context.getElementById(id);
                                    if (elem) {
                                        // Verify the id attribute
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) return [
                                            elem
                                        ];
                                        // Fall back on getElementsByName
                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while(elem = elems[i++]){
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) return [
                                                elem
                                            ];
                                        }
                                    }
                                    return [];
                                }
                            };
                        }
                        // Tag
                        Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                            if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                            else if (support.qsa) return context.querySelectorAll(tag);
                        } : function(tag, context) {
                            var elem, tmp = [], i = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                            results = context.getElementsByTagName(tag);
                            // Filter out possible comments
                            if (tag === "*") {
                                while(elem = results[i++])if (elem.nodeType === 1) tmp.push(elem);
                                return tmp;
                            }
                            return results;
                        };
                        // Class
                        Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
                        };
                        /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
                        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                        rbuggyMatches = [];
                        // qSa(:focus) reports false when true (Chrome 21)
                        // We allow this because of a bug in IE8/9 that throws an error
                        // whenever `document.activeElement` is accessed on an iframe
                        // So, we allow :focus to pass through QSA all the time to avoid the IE error
                        // See https://bugs.jquery.com/ticket/13378
                        rbuggyQSA = [];
                        if (support.qsa = rnative.test(document.querySelectorAll)) {
                            // Build QSA regex
                            // Regex strategy adopted from Diego Perini
                            assert(function(el) {
                                var input;
                                // Select is set to empty string on purpose
                                // This is to test IE's treatment of not explicitly
                                // setting a boolean content attribute,
                                // since its presence should be enough
                                // https://bugs.jquery.com/ticket/12359
                                docElem1.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                                // Support: IE8, Opera 11-12.16
                                // Nothing should be selected when empty strings follow ^= or $= or *=
                                // The test attribute must be unknown in Opera but "safe" for WinRT
                                // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                                if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                // Support: IE8
                                // Boolean attributes and "value" are not treated correctly
                                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                                // Support: IE 11+, Edge 15 - 18+
                                // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                                // Adding a temporary attribute to the document before the selection works
                                // around the issue.
                                // Interestingly, IE 10 & older don't seem to have the issue.
                                input = document.createElement("input");
                                input.setAttribute("name", "");
                                el.appendChild(input);
                                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                                // Webkit/Opera - :checked should return selected option elements
                                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                // IE8 throws error here and will not see later tests
                                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                                // Support: Safari 8+, iOS 8+
                                // https://bugs.webkit.org/show_bug.cgi?id=136851
                                // In-page `selector#id sibling-combinator selector` fails
                                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                                // Support: Firefox <=3.6 - 5 only
                                // Old Firefox doesn't throw on a badly-escaped identifier.
                                el.querySelectorAll("\\\f");
                                rbuggyQSA.push("[\\r\\n\\f]");
                            });
                            assert(function(el) {
                                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                // Support: Windows 8 Native Apps
                                // The type and name attributes are restricted during .innerHTML assignment
                                var input = document.createElement("input");
                                input.setAttribute("type", "hidden");
                                el.appendChild(input).setAttribute("name", "D");
                                // Support: IE8
                                // Enforce case-sensitivity of name attribute
                                if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                                // IE8 throws error here and will not see later tests
                                if (el.querySelectorAll(":enabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                                // Support: IE9-11+
                                // IE's :disabled selector does not pick up the children of disabled fieldsets
                                docElem1.appendChild(el).disabled = true;
                                if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                                // Support: Opera 10 - 11 only
                                // Opera 10-11 does not throw on post-comma invalid pseudos
                                el.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            });
                        }
                        if (support.matchesSelector = rnative.test(matches1 = docElem1.matches || docElem1.webkitMatchesSelector || docElem1.mozMatchesSelector || docElem1.oMatchesSelector || docElem1.msMatchesSelector)) assert(function(el) {
                            // Check to see if it's possible to do matchesSelector
                            // on a disconnected node (IE 9)
                            support.disconnectedMatch = matches1.call(el, "*");
                            // This should fail with an exception
                            // Gecko does not error, returns false instead
                            matches1.call(el, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos);
                        });
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                        /* Contains
	---------------------------------------------------------------------- */ hasCompare = rnative.test(docElem1.compareDocumentPosition);
                        // Element contains another
                        // Purposefully self-exclusive
                        // As in, an element does not contain itself
                        contains = hasCompare || rnative.test(docElem1.contains) ? function(a, b) {
                            var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                        } : function(a, b) {
                            if (b) while(b = b.parentNode){
                                if (b === a) return true;
                            }
                            return false;
                        };
                        /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
                        sortOrder = hasCompare ? function(a, b) {
                            // Flag for duplicate removal
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            // Sort on method existence if only one input has compareDocumentPosition
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) return compare;
                            // Calculate position if both inputs belong to the same document
                            // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                            // two documents; shallow comparisons work.
                            // eslint-disable-next-line eqeqeq
                            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                            1;
                            // Disconnected nodes
                            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                // Choose the first element that is related to our preferred document
                                // Support: IE 11+, Edge 17 - 18+
                                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                // two documents; shallow comparisons work.
                                // eslint-disable-next-line eqeqeq
                                if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                                // Support: IE 11+, Edge 17 - 18+
                                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                // two documents; shallow comparisons work.
                                // eslint-disable-next-line eqeqeq
                                if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                                // Maintain original order
                                return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                            }
                            return compare & 4 ? -1 : 1;
                        } : function(a, b) {
                            // Exit early if the nodes are identical
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [
                                a
                            ], bp = [
                                b
                            ];
                            // Parentless nodes are either documents or disconnected
                            if (!aup || !bup) // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                            // two documents; shallow comparisons work.
                            /* eslint-disable eqeqeq */ return a == document ? -1 : b == document ? 1 : /* eslint-enable eqeqeq */ aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                            else if (aup === bup) return siblingCheck(a, b);
                            // Otherwise we need full lists of their ancestors for comparison
                            cur = a;
                            while(cur = cur.parentNode)ap.unshift(cur);
                            cur = b;
                            while(cur = cur.parentNode)bp.unshift(cur);
                            // Walk down the tree looking for a discrepancy
                            while(ap[i] === bp[i])i++;
                            return i ? // Do a sibling check if the nodes have a common ancestor
                            siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                            // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                            // two documents; shallow comparisons work.
                            /* eslint-disable eqeqeq */ ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : /* eslint-enable eqeqeq */ 0;
                        };
                        return document;
                    };
                    Sizzle.matches = function(expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };
                    Sizzle.matchesSelector = function(elem, expr) {
                        setDocument(elem);
                        if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                            var ret = matches1.call(elem, expr);
                            // IE 9's matchesSelector returns false on disconnected nodes
                            if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                            // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11) return ret;
                        } catch (e) {
                            nonnativeSelectorCache(expr, true);
                        }
                        return Sizzle(expr, document, null, [
                            elem
                        ]).length > 0;
                    };
                    Sizzle.contains = function(context, elem) {
                        // Set document vars if needed
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if ((context.ownerDocument || context) != document) setDocument(context);
                        return contains(context, elem);
                    };
                    Sizzle.attr = function(elem, name) {
                        // Set document vars if needed
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if ((elem.ownerDocument || elem) != document) setDocument(elem);
                        var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                        return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    };
                    Sizzle.escape = function(sel) {
                        return (sel + "").replace(rcssescape, fcssescape);
                    };
                    Sizzle.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ Sizzle.uniqueSort = function(results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        // Unless we *know* we can detect duplicates, assume their presence
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                            while(j--)results.splice(duplicates[j], 1);
                        }
                        // Clear input after sorting to release objects
                        // See https://github.com/jquery/sizzle/pull/225
                        sortInput = null;
                        return results;
                    };
                    /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */ getText = Sizzle.getText = function(elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) // If no nodeType, this is expected to be an array
                        while(node = elem[i++])// Do not traverse comment nodes
                        ret += getText(node);
                        else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                            // Use textContent for elements
                            // innerText usage removed for consistency of new lines (jQuery #11153)
                            if (typeof elem.textContent === "string") return elem.textContent;
                            else // Traverse its children
                            for(elem = elem.firstChild; elem; elem = elem.nextSibling)ret += getText(elem);
                        } else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
                        // Do not include comment or processing instruction nodes
                        return ret;
                    };
                    Expr = Sizzle.selectors = {
                        // Can be adjusted by the user
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {
                        },
                        find: {
                        },
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            "ATTR": function(match) {
                                match[1] = match[1].replace(runescape, funescape);
                                // Move the given value to match[3] whether quoted or unquoted
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if (match[2] === "~=") match[3] = " " + match[3] + " ";
                                return match.slice(0, 4);
                            },
                            "CHILD": function(match) {
                                /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                                if (match[1].slice(0, 3) === "nth") {
                                    // nth-* requires argument
                                    if (!match[3]) Sizzle.error(match[0]);
                                    // numeric x and y parameters for Expr.filter.CHILD
                                    // remember that false/true cast respectively to 0/1
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                    match[5] = +(match[7] + match[8] || match[3] === "odd");
                                // other types prohibit arguments
                                } else if (match[3]) Sizzle.error(match[0]);
                                return match;
                            },
                            "PSEUDO": function(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr["CHILD"].test(match[0])) return null;
                                // Accept quoted arguments as-is
                                if (match[3]) match[2] = match[4] || match[5] || "";
                                else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    // excess is a negative index
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                // Return only captures needed by the pseudo filter method (type and argument)
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            "TAG": function(nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return nodeNameSelector === "*" ? function() {
                                    return true;
                                } : function(elem) {
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                            },
                            "CLASS": function(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                                    return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                                }));
                            },
                            "ATTR": function(name, operator, check) {
                                return function(elem) {
                                    var result = Sizzle.attr(elem, name);
                                    if (result == null) return operator === "!=";
                                    if (!operator) return true;
                                    result += "";
                                    /* eslint-disable max-len */ return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                                /* eslint-enable max-len */ };
                            },
                            "CHILD": function(type, what, _argument, first, last) {
                                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                                return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                                function(elem) {
                                    return !!elem.parentNode;
                                } : function(elem, _context, xml) {
                                    var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                    if (parent) {
                                        // :(first|last|only)-(child|of-type)
                                        if (simple) {
                                            while(dir){
                                                node = elem;
                                                while(node = node[dir]){
                                                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return false;
                                                }
                                                // Reverse direction for :only-* (if we haven't yet done so)
                                                start = dir = type === "only" && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [
                                            forward ? parent.firstChild : parent.lastChild
                                        ];
                                        // non-xml :nth-child(...) stores cache data on `parent`
                                        if (forward && useCache) {
                                            // Seek `elem` from a previously-cached index
                                            // ...in a gzip-friendly way
                                            node = parent;
                                            outerCache = node[expando] || (node[expando] = {
                                            });
                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {
                                            });
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                uniqueCache[type] = [
                                                    dirruns,
                                                    nodeIndex,
                                                    diff
                                                ];
                                                break;
                                            }
                                        } else {
                                            // Use previously-cached element index if available
                                            if (useCache) {
                                                // ...in a gzip-friendly way
                                                node = elem;
                                                outerCache = node[expando] || (node[expando] = {
                                                });
                                                // Support: IE <9 only
                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {
                                                });
                                                cache = uniqueCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex;
                                            }
                                            // xml :nth-child(...)
                                            // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                            if (diff === false) {
                                                // Use the same loop as above to seek `elem` from the start
                                                while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                    // Cache the index of each encountered element
                                                    if (useCache) {
                                                        outerCache = node[expando] || (node[expando] = {
                                                        });
                                                        // Support: IE <9 only
                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {
                                                        });
                                                        uniqueCache[type] = [
                                                            dirruns,
                                                            diff
                                                        ];
                                                    }
                                                    if (node === elem) break;
                                                }
                                            }
                                        }
                                        // Incorporate the offset, then check against cycle size
                                        diff -= last;
                                        return diff === first || diff % first === 0 && diff / first >= 0;
                                    }
                                };
                            },
                            "PSEUDO": function(pseudo, argument) {
                                // pseudo-class names are case-insensitive
                                // http://www.w3.org/TR/selectors/#pseudo-classes
                                // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                                // Remember that setFilters inherits from pseudos
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                                // The user may use createPseudo to indicate that
                                // arguments are needed to create the filter function
                                // just as Sizzle does
                                if (fn[expando]) return fn(argument);
                                // But maintain support for old signatures
                                if (fn.length > 1) {
                                    args = [
                                        pseudo,
                                        pseudo,
                                        "",
                                        argument
                                    ];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                        var idx, matched = fn(seed, argument), i = matched.length;
                                        while(i--){
                                            idx = indexOf(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    }) : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            // Potentially complex pseudos
                            "not": markFunction(function(selector) {
                                // Trim the selector passed to compile
                                // to avoid treating leading and trailing
                                // spaces as combinators
                                var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                                return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                    // Match elements unmatched by `matcher`
                                    while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                                }) : function(elem, _context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    // Don't keep the element (issue #299)
                                    input[0] = null;
                                    return !results.pop();
                                };
                            }),
                            "has": markFunction(function(selector) {
                                return function(elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            }),
                            "contains": markFunction(function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                                };
                            }),
                            // "Whether an element is represented by a :lang() selector
                            // is based solely on the element's language value
                            // being equal to the identifier C,
                            // or beginning with the identifier C immediately followed by "-".
                            // The matching of C against the element's language value is performed case-insensitively.
                            // The identifier C does not have to be a valid language name."
                            // http://www.w3.org/TR/selectors/#lang-pseudo
                            "lang": markFunction(function(lang) {
                                // lang value must be a valid identifier
                                if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                        elemLang = elemLang.toLowerCase();
                                        return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                    }
                                    while ((elem = elem.parentNode) && elem.nodeType === 1)
                                    return false;
                                };
                            }),
                            // Miscellaneous
                            "target": function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            "root": function(elem) {
                                return elem === docElem1;
                            },
                            "focus": function(elem) {
                                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            // Boolean properties
                            "enabled": createDisabledPseudo(false),
                            "disabled": createDisabledPseudo(true),
                            "checked": function(elem) {
                                // In CSS3, :checked should return both checked and selected elements
                                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                var nodeName = elem.nodeName.toLowerCase();
                                return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                            },
                            "selected": function(elem) {
                                // Accessing this property makes selected-by-default
                                // options in Safari work properly
                                if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                                elem.parentNode.selectedIndex;
                                return elem.selected === true;
                            },
                            // Contents
                            "empty": function(elem) {
                                // http://www.w3.org/TR/selectors/#empty-pseudo
                                // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                                //   but not by others (comment: 8; processing instruction: 7; etc.)
                                // nodeType < 6 works because attributes (2) do not appear as children
                                for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                                    if (elem.nodeType < 6) return false;
                                }
                                return true;
                            },
                            "parent": function(elem) {
                                return !Expr.pseudos["empty"](elem);
                            },
                            // Element/input types
                            "header": function(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            "input": function(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            "button": function(elem) {
                                var name = elem.nodeName.toLowerCase();
                                return name === "input" && elem.type === "button" || name === "button";
                            },
                            "text": function(elem) {
                                var attr;
                                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                            },
                            // Position-in-collection
                            "first": createPositionalPseudo(function() {
                                return [
                                    0
                                ];
                            }),
                            "last": createPositionalPseudo(function(_matchIndexes, length) {
                                return [
                                    length - 1
                                ];
                            }),
                            "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                                return [
                                    argument < 0 ? argument + length : argument
                                ];
                            }),
                            "even": createPositionalPseudo(function(matchIndexes, length) {
                                var i = 0;
                                for(; i < length; i += 2)matchIndexes.push(i);
                                return matchIndexes;
                            }),
                            "odd": createPositionalPseudo(function(matchIndexes, length) {
                                var i = 1;
                                for(; i < length; i += 2)matchIndexes.push(i);
                                return matchIndexes;
                            }),
                            "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument > length ? length : argument;
                                for(; --i >= 0;)matchIndexes.push(i);
                                return matchIndexes;
                            }),
                            "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for(; ++i < length;)matchIndexes.push(i);
                                return matchIndexes;
                            })
                        }
                    };
                    Expr.pseudos["nth"] = Expr.pseudos["eq"];
                    // Add button/input type pseudos
                    for(i2 in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    })Expr.pseudos[i2] = createInputPseudo(i2);
                    for(i2 in {
                        submit: true,
                        reset: true
                    })Expr.pseudos[i2] = createButtonPseudo(i2);
                    // Easy API for creating new setFilters
                    function setFilters() {
                    }
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters();
                    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while(soFar){
                            // Comma and first run
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) // Don't consume trailing commas as valid
                                soFar = soFar.slice(match[0].length) || soFar;
                                groups.push(tokens = []);
                            }
                            matched = false;
                            // Combinators
                            if (match = rcombinators.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    // Cast descendant combinators to space
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            // Filters
                            for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            if (!matched) break;
                        }
                        // Return the length of the invalid excess
                        // if we're just parsing
                        // Otherwise, throw an error or return tokens
                        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
                        tokenCache(selector, groups).slice(0);
                    };
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for(; i < len; i++)selector += tokens[i].value;
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
                        return combinator.first ? // Check against closest ancestor/preceding element
                        function(elem, context, xml) {
                            while(elem = elem[dir]){
                                if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                            }
                            return false;
                        } : // Check against all ancestor/preceding elements
                        function(elem, context, xml) {
                            var oldCache, uniqueCache, outerCache, newCache = [
                                dirruns,
                                doneName
                            ];
                            // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                            if (xml) {
                                while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) return true;
                                }
                            } else {
                                while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {
                                    });
                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {
                                    });
                                    if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem;
                                    else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                                    return newCache[2] = oldCache[2];
                                    else {
                                        // Reuse newcache so results back-propagate to previous elements
                                        uniqueCache[key] = newCache;
                                        // A match means we're done; a fail means we have to keep checking
                                        if (newCache[2] = matcher(elem, context, xml)) return true;
                                    }
                                }
                            }
                            return false;
                        };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function(elem, context, xml) {
                            var i = matchers.length;
                            while(i--){
                                if (!matchers[i](elem, context, xml)) return false;
                            }
                            return true;
                        } : matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for(; i < len; i++)Sizzle(selector, contexts[i], results);
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                        for(; i < len; i++){
                            if (elem = unmatched[i]) {
                                if (!filter || filter(elem, context, xml)) {
                                    newUnmatched.push(elem);
                                    if (mapped) map.push(i);
                                }
                            }
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                        if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                        return markFunction(function(seed, results, context, xml) {
                            var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                            elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                                context
                            ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                            postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                            [] : // ...otherwise use results directly
                            results : matcherIn;
                            // Find primary matches
                            if (matcher) matcher(matcherIn, matcherOut, context, xml);
                            // Apply postFilter
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                // Un-match failing elements by moving them back to matcherIn
                                i = temp.length;
                                while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                        temp = [];
                                        i = matcherOut.length;
                                        while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                                        temp.push(matcherIn[i] = elem);
                                        postFinder(null, matcherOut = [], temp, xml);
                                    }
                                    // Move matched elements from seed to results to keep them synchronized
                                    i = matcherOut.length;
                                    while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                                }
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) postFinder(null, results, matcherOut, xml);
                                else push.apply(results, matcherOut);
                            }
                        });
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
                        matchContext = addCombinator(function(elem) {
                            return elem === checkContext;
                        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                            return indexOf(checkContext, elem) > -1;
                        }, implicitRelative, true), matchers = [
                            function(elem, context, xml) {
                                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                                // Avoid hanging onto element (issue #299)
                                checkContext = null;
                                return ret;
                            }
                        ];
                        for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                            addCombinator(elementMatcher(matchers), matcher)
                        ];
                        else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            // Return special upon seeing a positional matcher
                            if (matcher[expando]) {
                                // Find the next relative operator (if any) for proper handling
                                j = ++i;
                                for(; j < len; j++){
                                    if (Expr.relative[tokens[j].type]) break;
                                }
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                tokens.slice(0, i - 1).concat({
                                    value: tokens[i - 2].type === " " ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                            if (outermost) // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                            // two documents; shallow comparisons work.
                            // eslint-disable-next-line eqeqeq
                            outermostContext = context == document || context || outermost;
                            // Add elements passing elementMatchers directly to results
                            // Support: IE<9, Safari
                            // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                            for(; i !== len && (elem = elems[i]) != null; i++){
                                if (byElement && elem) {
                                    j = 0;
                                    // Support: IE 11+, Edge 17 - 18+
                                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                    // two documents; shallow comparisons work.
                                    // eslint-disable-next-line eqeqeq
                                    if (!context && elem.ownerDocument != document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                    if (outermost) dirruns = dirrunsUnique;
                                }
                                // Track unmatched elements for set filters
                                if (bySet) {
                                    // They will have gone through all possible matchers
                                    if (elem = !matcher && elem) matchedCount--;
                                    // Lengthen the array for every element, matched or not
                                    if (seed) unmatched.push(elem);
                                }
                            }
                            // `i` is now the count of elements visited above, and adding it to `matchedCount`
                            // makes the latter nonnegative.
                            matchedCount += i;
                            // Apply set filters to unmatched elements
                            // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                            // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                            // no element matchers and no seed.
                            // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                            // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                            // numerically zero.
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    // Reintegrate element matches to eliminate the need for sorting
                                    if (matchedCount > 0) {
                                        while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                    }
                                    // Discard index placeholder values to get only actual matches
                                    setMatched = condense(setMatched);
                                }
                                // Add matches to results
                                push.apply(results, setMatched);
                                // Seedless set matches succeeding multiple successful matchers stipulate sorting
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                            }
                            // Override manipulation of globals by nested matchers
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            // Generate a function of recursive functions that can be used to check each element
                            if (!match) match = tokenize(selector);
                            i = match.length;
                            while(i--){
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) setMatchers.push(cached);
                                else elementMatchers.push(cached);
                            }
                            // Cache the compiled function
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            // Save selector and tokenization
                            cached.selector = selector;
                        }
                        return cached;
                    };
                    /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ select = Sizzle.select = function(selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || [];
                        // Try to minimize operations if there is only one selector in the list and no seed
                        // (the latter of which guarantees us context)
                        if (match.length === 1) {
                            // Reduce context if the leading compound selector is an ID
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) return results;
                                else if (compiled) context = context.parentNode;
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            // Fetch a seed set for right-to-left matching
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while(i--){
                                token = tokens[i];
                                // Abort if we hit a combinator
                                if (Expr.relative[type = token.type]) break;
                                if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                                {
                                    if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                        // If seed is empty or no tokens remain, we can return early
                                        tokens.splice(i, 1);
                                        selector = seed.length && toSelector(tokens);
                                        if (!selector) {
                                            push.apply(results, seed);
                                            return results;
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        // Compile and execute a filtering function if one is not provided
                        // Provide `match` to avoid retokenization if we modified the selector above
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    };
                    // One-time assignments
                    // Sort stability
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    // Support: Chrome 14-35+
                    // Always assume duplicates if they aren't passed to the comparison function
                    support.detectDuplicates = !!hasDuplicate;
                    // Initialize against the default document
                    setDocument();
                    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
                    // Detached nodes confoundingly follow *each other*
                    support.sortDetached = assert(function(el) {
                        // Should return 1, but returns 4 (following)
                        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                    });
                    // Support: IE<8
                    // Prevent attribute/property "interpolation"
                    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
                    if (!assert(function(el) {
                        el.innerHTML = "<a href='#'></a>";
                        return el.firstChild.getAttribute("href") === "#";
                    })) addHandle("type|href|height|width", function(elem, name, isXML) {
                        if (!isXML) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    });
                    // Support: IE<9
                    // Use defaultValue in place of getAttribute("value")
                    if (!support.attributes || !assert(function(el) {
                        el.innerHTML = "<input/>";
                        el.firstChild.setAttribute("value", "");
                        return el.firstChild.getAttribute("value") === "";
                    })) addHandle("value", function(elem, _name, isXML) {
                        if (!isXML && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
                    });
                    // Support: IE<9
                    // Use getAttributeNode to fetch booleans when getAttribute lies
                    if (!assert(function(el) {
                        return el.getAttribute("disabled") == null;
                    })) addHandle(booleans, function(elem, name, isXML) {
                        var val;
                        if (!isXML) return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    });
                    return Sizzle;
                }(window1);
                jQuery.find = Sizzle1;
                jQuery.expr = Sizzle1.selectors;
                // Deprecated
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.uniqueSort = jQuery.unique = Sizzle1.uniqueSort;
                jQuery.text = Sizzle1.getText;
                jQuery.isXMLDoc = Sizzle1.isXML;
                jQuery.contains = Sizzle1.contains;
                jQuery.escapeSelector = Sizzle1.escape;
                var dir1 = function(elem, dir, until) {
                    var matched = [], truncate = until !== undefined;
                    while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
                        if (truncate && jQuery(elem).is(until)) break;
                        matched.push(elem);
                    }
                    return matched;
                };
                var siblings = function(n, elem) {
                    var matched = [];
                    for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
                    return matched;
                };
                var rneedsContext = jQuery.expr.match.needsContext;
                function nodeName1(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                }
                var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                // Implement the identical functionality for filter and not
                function winnow(elements, qualifier, not) {
                    if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    });
                    // Single element
                    if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
                        return elem === qualifier !== not;
                    });
                    // Arraylike of elements (jQuery, arguments, Array)
                    if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
                        return indexOf1.call(qualifier, elem) > -1 !== not;
                    });
                    // Filtered directly for both simple and complex selectors
                    return jQuery.filter(qualifier, elements, not);
                }
                jQuery.filter = function(expr, elems, not) {
                    var elem1 = elems[0];
                    if (not) expr = ":not(" + expr + ")";
                    if (elems.length === 1 && elem1.nodeType === 1) return jQuery.find.matchesSelector(elem1, expr) ? [
                        elem1
                    ] : [];
                    return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                        return elem.nodeType === 1;
                    }));
                };
                jQuery.fn.extend({
                    find: function(selector) {
                        var i, ret, len = this.length, self = this;
                        if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                            for(i = 0; i < len; i++){
                                if (jQuery.contains(self[i], this)) return true;
                            }
                        }));
                        ret = this.pushStack([]);
                        for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function(selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function(selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function(selector) {
                        return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
                        // so $("p:first").is("p:last") won't return true for a doc with two "p".
                        typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                    }
                });
                // Initialize a jQuery object
                // A central reference to the root jQuery(document)
                var rootjQuery, // A simple way to check for HTML strings
                // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
                // Strict HTML recognition (#11290: must start with <)
                // Shortcut simple #id case for speed
                rquickExpr1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
                    var match, elem;
                    // HANDLE: $(""), $(null), $(undefined), $(false)
                    if (!selector) return this;
                    // Method init() accepts an alternate rootjQuery
                    // so migrate can support jQuery.sub (gh-2101)
                    root = root || rootjQuery;
                    // Handle HTML strings
                    if (typeof selector === "string") {
                        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
                        match = [
                            null,
                            selector,
                            null
                        ];
                        else match = rquickExpr1.exec(selector);
                        // Match html or make sure no context is specified for #id
                        if (match && (match[1] || !context)) {
                            // HANDLE: $(html) -> $(array)
                            if (match[1]) {
                                context = context instanceof jQuery ? context[0] : context;
                                // Option to run scripts is true for back-compat
                                // Intentionally let the error be thrown if parseHTML is not present
                                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document1, true));
                                // HANDLE: $(html, props)
                                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                    for(match in context)// Properties of context are called as methods if possible
                                    if (isFunction(this[match])) this[match](context[match]);
                                    else this.attr(match, context[match]);
                                }
                                return this;
                            // HANDLE: $(#id)
                            } else {
                                elem = document1.getElementById(match[2]);
                                if (elem) {
                                    // Inject the element directly into the jQuery object
                                    this[0] = elem;
                                    this.length = 1;
                                }
                                return this;
                            }
                        } else if (!context || context.jquery) return (context || root).find(selector);
                        else return this.constructor(context).find(selector);
                    // HANDLE: $(DOMElement)
                    } else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;
                    // HANDLE: $(function)
                    // Shortcut for document ready
                    } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
                    selector(jQuery);
                    return jQuery.makeArray(selector, this);
                };
                // Give the init function the jQuery prototype for later instantiation
                init.prototype = jQuery.fn;
                // Initialize central reference
                rootjQuery = jQuery(document1);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
                guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.fn.extend({
                    has: function(target) {
                        var targets = jQuery(target, this), l = targets.length;
                        return this.filter(function() {
                            var i = 0;
                            for(; i < l; i++){
                                if (jQuery.contains(this, targets[i])) return true;
                            }
                        });
                    },
                    closest: function(selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                        // Positional selectors never match, since there's no _selection_ context
                        if (!rneedsContext.test(selectors)) for(; i < l; i++){
                            for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                                matched.push(cur);
                                break;
                            }
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                    },
                    // Determine the position of an element within the set
                    index: function(elem) {
                        // No argument, return index in parent
                        if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        // Index in selector
                        if (typeof elem === "string") return indexOf1.call(jQuery(elem), this[0]);
                        // Locate the position of the desired element
                        return indexOf1.call(this, // If it receives a jQuery object, the first element is used
                        elem.jquery ? elem[0] : elem);
                    },
                    add: function(selector, context) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function(selector) {
                        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    while((cur = cur[dir]) && cur.nodeType !== 1);
                    return cur;
                }
                jQuery.each({
                    parent: function(elem) {
                        var parent = elem.parentNode;
                        return parent && parent.nodeType !== 11 ? parent : null;
                    },
                    parents: function(elem) {
                        return dir1(elem, "parentNode");
                    },
                    parentsUntil: function(elem, _i, until) {
                        return dir1(elem, "parentNode", until);
                    },
                    next: function(elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function(elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function(elem) {
                        return dir1(elem, "nextSibling");
                    },
                    prevAll: function(elem) {
                        return dir1(elem, "previousSibling");
                    },
                    nextUntil: function(elem, _i, until) {
                        return dir1(elem, "nextSibling", until);
                    },
                    prevUntil: function(elem, _i, until) {
                        return dir1(elem, "previousSibling", until);
                    },
                    siblings: function(elem) {
                        return siblings((elem.parentNode || {
                        }).firstChild, elem);
                    },
                    children: function(elem) {
                        return siblings(elem.firstChild);
                    },
                    contents: function(elem) {
                        if (elem.contentDocument != null && // Support: IE 11+
                        // <object> elements with no `data` attribute has an object
                        // `contentDocument` with a `null` prototype.
                        getProto(elem.contentDocument)) return elem.contentDocument;
                        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
                        // Treat the template element as a regular one in browsers that
                        // don't support it.
                        if (nodeName1(elem, "template")) elem = elem.content || elem;
                        return jQuery.merge([], elem.childNodes);
                    }
                }, function(name, fn) {
                    jQuery.fn[name] = function(until, selector) {
                        var matched = jQuery.map(this, fn, until);
                        if (name.slice(-5) !== "Until") selector = until;
                        if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
                        if (this.length > 1) {
                            // Remove duplicates
                            if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                            // Reverse order for parents* and prev-derivatives
                            if (rparentsprev.test(name)) matched.reverse();
                        }
                        return this.pushStack(matched);
                    };
                });
                var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
                // Convert String-formatted options into Object-formatted ones
                function createOptions(options) {
                    var object = {
                    };
                    jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                        object[flag] = true;
                    });
                    return object;
                }
                /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
                    // Convert options from String-formatted to Object-formatted if needed
                    // (we check in cache first)
                    options = typeof options === "string" ? createOptions(options) : jQuery.extend({
                    }, options);
                    var firing, // Last fire value for non-forgettable lists
                    memory, // Flag to know if list was already fired
                    fired, // Flag to prevent firing
                    locked, // Actual callback list
                    list = [], // Queue of execution data for repeatable lists
                    queue = [], // Index of currently firing callback (modified by add/remove as needed)
                    firingIndex = -1, // Fire callbacks
                    fire = function() {
                        // Enforce single-firing
                        locked = locked || options.once;
                        // Execute callbacks for all pending executions,
                        // respecting firingIndex overrides and runtime changes
                        fired = firing = true;
                        for(; queue.length; firingIndex = -1){
                            memory = queue.shift();
                            while(++firingIndex < list.length)// Run callback and check for early termination
                            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                                // Jump to end and forget the data so .add doesn't re-fire
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                        // Forget the data if we're done with it
                        if (!options.memory) memory = false;
                        firing = false;
                        // Clean up if we're done firing for good
                        if (locked) {
                            // Keep an empty list if we have data for future add calls
                            if (memory) list = [];
                            else list = "";
                        }
                    }, // Actual Callbacks object
                    self = {
                        // Add a callback or a collection of callbacks to the list
                        add: function() {
                            if (list) {
                                // If we have memory from a past run, we should fire after adding
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }
                                (function add(args) {
                                    jQuery.each(args, function(_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) list.push(arg);
                                        } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                                        add(arg);
                                    });
                                })(arguments);
                                if (memory && !firing) fire();
                            }
                            return this;
                        },
                        // Remove a callback from the list
                        remove: function() {
                            jQuery.each(arguments, function(_, arg) {
                                var index;
                                while((index = jQuery.inArray(arg, list, index)) > -1){
                                    list.splice(index, 1);
                                    // Handle firing indexes
                                    if (index <= firingIndex) firingIndex--;
                                }
                            });
                            return this;
                        },
                        // Check if a given callback is in the list.
                        // If no argument is given, return whether or not list has callbacks attached.
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        },
                        // Remove all callbacks from the list
                        empty: function() {
                            if (list) list = [];
                            return this;
                        },
                        // Disable .fire and .add
                        // Abort any current/pending executions
                        // Clear all callbacks and values
                        disable: function() {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },
                        // Disable .fire
                        // Also disable .add unless we have memory (since it would have no effect)
                        // Abort any pending executions
                        lock: function() {
                            locked = queue = [];
                            if (!memory && !firing) list = memory = "";
                            return this;
                        },
                        locked: function() {
                            return !!locked;
                        },
                        // Call all callbacks with the given context and arguments
                        fireWith: function(context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [
                                    context,
                                    args.slice ? args.slice() : args
                                ];
                                queue.push(args);
                                if (!firing) fire();
                            }
                            return this;
                        },
                        // Call all the callbacks with the given arguments
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        // To know if the callbacks have already been called at least once
                        fired: function() {
                            return !!fired;
                        }
                    };
                    return self;
                };
                function Identity(v) {
                    return v;
                }
                function Thrower(ex) {
                    throw ex;
                }
                function adoptValue(value, resolve, reject, noValue) {
                    var method;
                    try {
                        // Check for promise aspect first to privilege synchronous behavior
                        if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
                        else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
                        else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                        // * false: [ value ].slice( 0 ) => resolve( value )
                        // * true: [ value ].slice( 1 ) => resolve()
                        resolve.apply(undefined, [
                            value
                        ].slice(noValue));
                    // For Promises/A+, convert exceptions into rejections
                    // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
                    // Deferred#then to conditionally suppress rejection.
                    } catch (value1) {
                        // Support: Android 4.0 only
                        // Strict mode functions invoked without .call/.apply get global-object context
                        reject.apply(undefined, [
                            value1
                        ]);
                    }
                }
                jQuery.extend({
                    Deferred: function(func) {
                        var tuples = [
                            // action, add listener, callbacks,
                            // ... .then handlers, argument index, [final state]
                            [
                                "notify",
                                "progress",
                                jQuery.Callbacks("memory"),
                                jQuery.Callbacks("memory"),
                                2
                            ],
                            [
                                "resolve",
                                "done",
                                jQuery.Callbacks("once memory"),
                                jQuery.Callbacks("once memory"),
                                0,
                                "resolved"
                            ],
                            [
                                "reject",
                                "fail",
                                jQuery.Callbacks("once memory"),
                                jQuery.Callbacks("once memory"),
                                1,
                                "rejected"
                            ]
                        ], state = "pending", promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred1.done(arguments).fail(arguments);
                                return this;
                            },
                            "catch": function(fn) {
                                return promise.then(null, fn);
                            },
                            // Keep pipe for back-compat
                            pipe: function() {
                                var fns = arguments;
                                return jQuery.Deferred(function(newDefer) {
                                    jQuery.each(tuples, function(_i, tuple) {
                                        // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                        // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                        // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                        // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                        deferred1[tuple[1]](function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                            else newDefer[tuple[0] + "With"](this, fn ? [
                                                returned
                                            ] : arguments);
                                        });
                                    });
                                    fns = null;
                                }).promise();
                            },
                            then: function(onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;
                                function resolve(depth, deferred, handler, special) {
                                    return function() {
                                        var that = this, args = arguments, mightThrow = function() {
                                            var returned, then;
                                            // Support: Promises/A+ section 2.3.3.3.3
                                            // https://promisesaplus.com/#point-59
                                            // Ignore double-resolution attempts
                                            if (depth < maxDepth) return;
                                            returned = handler.apply(that, args);
                                            // Support: Promises/A+ section 2.3.1
                                            // https://promisesaplus.com/#point-48
                                            if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            // Support: Promises/A+ sections 2.3.3.1, 3.5
                                            // https://promisesaplus.com/#point-54
                                            // https://promisesaplus.com/#point-75
                                            // Retrieve `then` only once
                                            then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                            // Handle a returned thenable
                                            if (isFunction(then)) {
                                                // Special processors (notify) just wait for resolution
                                                if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                                else {
                                                    // ...and disregard older resolution values
                                                    maxDepth++;
                                                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                                }
                                            } else {
                                                // Only substitute handlers pass on context
                                                // and multiple values (non-spec behavior)
                                                if (handler !== Identity) {
                                                    that = undefined;
                                                    args = [
                                                        returned
                                                    ];
                                                }
                                                // Process the value(s)
                                                // Default process is resolve
                                                (special || deferred.resolveWith)(that, args);
                                            }
                                        }, // Only normal processors (resolve) catch and reject exceptions
                                        process = special ? mightThrow : function() {
                                            try {
                                                mightThrow();
                                            } catch (e) {
                                                if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                                // Support: Promises/A+ section 2.3.3.3.4.1
                                                // https://promisesaplus.com/#point-61
                                                // Ignore post-resolution exceptions
                                                if (depth + 1 >= maxDepth) {
                                                    // Only substitute handlers pass on context
                                                    // and multiple values (non-spec behavior)
                                                    if (handler !== Thrower) {
                                                        that = undefined;
                                                        args = [
                                                            e
                                                        ];
                                                    }
                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };
                                        // Support: Promises/A+ section 2.3.3.3.1
                                        // https://promisesaplus.com/#point-57
                                        // Re-resolve promises immediately to dodge false rejection from
                                        // subsequent errors
                                        if (depth) process();
                                        else {
                                            // Call an optional hook to record the stack, in case of exception
                                            // since it's otherwise lost when execution goes async
                                            if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                            window1.setTimeout(process);
                                        }
                                    };
                                }
                                return jQuery.Deferred(function(newDefer) {
                                    // progress_handlers.add( ... )
                                    tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                                    // fulfilled_handlers.add( ... )
                                    tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                                    // rejected_handlers.add( ... )
                                    tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                                }).promise();
                            },
                            // Get a promise for this deferred
                            // If obj is provided, the promise aspect is added to the object
                            promise: function(obj) {
                                return obj != null ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred1 = {
                        };
                        // Add list-specific methods
                        jQuery.each(tuples, function(i, tuple) {
                            var list = tuple[2], stateString = tuple[5];
                            // promise.progress = list.add
                            // promise.done = list.add
                            // promise.fail = list.add
                            promise[tuple[1]] = list.add;
                            // Handle state
                            if (stateString) list.add(function() {
                                // state = "resolved" (i.e., fulfilled)
                                // state = "rejected"
                                state = stateString;
                            }, // rejected_callbacks.disable
                            // fulfilled_callbacks.disable
                            tuples[3 - i][2].disable, // rejected_handlers.disable
                            // fulfilled_handlers.disable
                            tuples[3 - i][3].disable, // progress_callbacks.lock
                            tuples[0][2].lock, // progress_handlers.lock
                            tuples[0][3].lock);
                            // progress_handlers.fire
                            // fulfilled_handlers.fire
                            // rejected_handlers.fire
                            list.add(tuple[3].fire);
                            // deferred.notify = function() { deferred.notifyWith(...) }
                            // deferred.resolve = function() { deferred.resolveWith(...) }
                            // deferred.reject = function() { deferred.rejectWith(...) }
                            deferred1[tuple[0]] = function() {
                                deferred1[tuple[0] + "With"](this === deferred1 ? undefined : this, arguments);
                                return this;
                            };
                            // deferred.notifyWith = list.fireWith
                            // deferred.resolveWith = list.fireWith
                            // deferred.rejectWith = list.fireWith
                            deferred1[tuple[0] + "With"] = list.fireWith;
                        });
                        // Make the deferred a promise
                        promise.promise(deferred1);
                        // Call given func if any
                        if (func) func.call(deferred1, deferred1);
                        // All done!
                        return deferred1;
                    },
                    // Deferred helper
                    when: function(singleValue) {
                        var // count of uncompleted subordinates
                        remaining = arguments.length, // count of unprocessed arguments
                        i = remaining, // subordinate fulfillment data
                        resolveContexts = Array(i), resolveValues = slice1.call(arguments), // the primary Deferred
                        primary = jQuery.Deferred(), // subordinate callback factory
                        updateFunc = function(i) {
                            return function(value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice1.call(arguments) : value;
                                if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                            };
                        };
                        // Single- and empty arguments are adopted like Promise.resolve
                        if (remaining <= 1) {
                            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                            // Use .then() to unwrap secondary thenables (cf. gh-3000)
                            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
                        }
                        // Multiple arguments are aggregated like Promise.all array elements
                        while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                        return primary.promise();
                    }
                });
                // These usually indicate a programmer mistake during development,
                // warn about them ASAP rather than swallowing them by default.
                var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function(error, stack) {
                    // Support: IE 8 - 9 only
                    // Console exists when dev tools are open, which can happen at any time
                    if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
                };
                jQuery.readyException = function(error) {
                    window1.setTimeout(function() {
                        throw error;
                    });
                };
                // The deferred used on DOM ready
                var readyList = jQuery.Deferred();
                jQuery.fn.ready = function(fn) {
                    readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
                    // happens at the time of error handling instead of callback
                    // registration.
                    .catch(function(error) {
                        jQuery.readyException(error);
                    });
                    return this;
                };
                jQuery.extend({
                    // Is the DOM ready to be used? Set to true once it occurs.
                    isReady: false,
                    // A counter to track how many items to wait for before
                    // the ready event fires. See #6781
                    readyWait: 1,
                    // Handle when the DOM is ready
                    ready: function(wait) {
                        // Abort if there are pending holds or we're already ready
                        if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
                        // Remember that the DOM is ready
                        jQuery.isReady = true;
                        // If a normal DOM Ready event fired, decrement, and wait if need be
                        if (wait !== true && --jQuery.readyWait > 0) return;
                        // If there are functions bound, to execute
                        readyList.resolveWith(document1, [
                            jQuery
                        ]);
                    }
                });
                jQuery.ready.then = readyList.then;
                // The ready event handler and self cleanup method
                function completed1() {
                    document1.removeEventListener("DOMContentLoaded", completed1);
                    window1.removeEventListener("load", completed1);
                    jQuery.ready();
                }
                // Catch cases where $(document).ready() is called
                // after the browser event has already occurred.
                // Support: IE <=9 - 10 only
                // Older IE sometimes signals "interactive" too soon
                if (document1.readyState === "complete" || document1.readyState !== "loading" && !document1.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
                window1.setTimeout(jQuery.ready);
                else {
                    // Use the handy event callback
                    document1.addEventListener("DOMContentLoaded", completed1);
                    // A fallback to window.onload, that will always work
                    window1.addEventListener("load", completed1);
                }
                // Multifunctional method to get and set values of a collection
                // The value/s can optionally be executed if it's a function
                var access = function(elems, fn, key, value2, chainable, emptyGet, raw) {
                    var i = 0, len = elems.length, bulk = key == null;
                    // Sets many values
                    if (toType(key) === "object") {
                        chainable = true;
                        for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
                    // Sets one value
                    } else if (value2 !== undefined) {
                        chainable = true;
                        if (!isFunction(value2)) raw = true;
                        if (bulk) {
                            // Bulk operations run against the entire set
                            if (raw) {
                                fn.call(elems, value2);
                                fn = null;
                            // ...except when executing function values
                            } else {
                                bulk = fn;
                                fn = function(elem, _key, value) {
                                    return bulk.call(jQuery(elem), value);
                                };
                            }
                        }
                        if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value2 : value2.call(elems[i], i, fn(elems[i], key)));
                    }
                    if (chainable) return elems;
                    // Gets
                    if (bulk) return fn.call(elems);
                    return len ? fn(elems[0], key) : emptyGet;
                };
                // Matches dashed string for camelizing
                var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
                // Used by camelCase as callback to replace()
                function fcamelCase(_all, letter) {
                    return letter.toUpperCase();
                }
                // Convert dashed to camelCase; used by the css and data modules
                // Support: IE <=9 - 11, Edge 12 - 15
                // Microsoft forgot to hump their vendor prefix (#9572)
                function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                }
                var acceptData = function(owner) {
                    // Accepts only:
                    //  - Node
                    //    - Node.ELEMENT_NODE
                    //    - Node.DOCUMENT_NODE
                    //  - Object
                    //    - Any
                    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
                };
                function Data() {
                    this.expando = jQuery.expando + Data.uid++;
                }
                Data.uid = 1;
                Data.prototype = {
                    cache: function(owner) {
                        // Check if the owner object already has a cache
                        var value = owner[this.expando];
                        // If not, create one
                        if (!value) {
                            value = {
                            };
                            // We can accept data for non-element nodes in modern browsers,
                            // but we should not, see #8335.
                            // Always return an empty object.
                            if (acceptData(owner)) {
                                // If it is a node unlikely to be stringify-ed or looped over
                                // use plain assignment
                                if (owner.nodeType) owner[this.expando] = value;
                                else Object.defineProperty(owner, this.expando, {
                                    value: value,
                                    configurable: true
                                });
                            }
                        }
                        return value;
                    },
                    set: function(owner, data, value) {
                        var prop, cache = this.cache(owner);
                        // Handle: [ owner, key, value ] args
                        // Always use camelCase key (gh-2257)
                        if (typeof data === "string") cache[camelCase(data)] = value;
                        else // Copy the properties one-by-one to the cache object
                        for(prop in data)cache[camelCase(prop)] = data[prop];
                        return cache;
                    },
                    get: function(owner, key) {
                        return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
                        owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function(owner, key, value) {
                        // In cases where either:
                        //
                        //   1. No key was specified
                        //   2. A string key was specified, but no value provided
                        //
                        // Take the "read" path and allow the get method to determine
                        // which value to return, respectively either:
                        //
                        //   1. The entire cache object
                        //   2. The data stored at the key
                        //
                        if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
                        // When the key is not a string, or both a key and value
                        // are specified, set or extend (existing objects) with either:
                        //
                        //   1. An object of properties
                        //   2. A key and value
                        //
                        this.set(owner, key, value);
                        // Since the "set" path can have two possible entry points
                        // return the expected data based on which path was taken[*]
                        return value !== undefined ? value : key;
                    },
                    remove: function(owner, key) {
                        var i, cache = owner[this.expando];
                        if (cache === undefined) return;
                        if (key !== undefined) {
                            // Support array or space separated string of keys
                            if (Array.isArray(key)) // If key is an array of keys...
                            // We always set camelCase keys, so remove that.
                            key = key.map(camelCase);
                            else {
                                key = camelCase(key);
                                // If a key with the spaces exists, use it.
                                // Otherwise, create an array by matching non-whitespace
                                key = key in cache ? [
                                    key
                                ] : key.match(rnothtmlwhite) || [];
                            }
                            i = key.length;
                            while(i--)delete cache[key[i]];
                        }
                        // Remove the expando if there's no more data
                        if (key === undefined || jQuery.isEmptyObject(cache)) {
                            // Support: Chrome <=35 - 45
                            // Webkit & Blink performance suffers when deleting properties
                            // from DOM nodes, so set to undefined instead
                            // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                            if (owner.nodeType) owner[this.expando] = undefined;
                            else delete owner[this.expando];
                        }
                    },
                    hasData: function(owner) {
                        var cache = owner[this.expando];
                        return cache !== undefined && !jQuery.isEmptyObject(cache);
                    }
                };
                var dataPriv = new Data();
                var dataUser = new Data();
                //	Implementation Summary
                //
                //	1. Enforce API surface and semantic compatibility with 1.9.x branch
                //	2. Improve the module's maintainability by reducing the storage
                //		paths to a single mechanism.
                //	3. Use the same single mechanism to support "private" and "user" data.
                //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
                //	5. Avoid exposing implementation details on user objects (eg. expando properties)
                //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
                function getData(data) {
                    if (data === "true") return true;
                    if (data === "false") return false;
                    if (data === "null") return null;
                    // Only convert to a number if it doesn't change the string
                    if (data === +data + "") return +data;
                    if (rbrace.test(data)) return JSON.parse(data);
                    return data;
                }
                function dataAttr(elem, key, data) {
                    var name;
                    // If nothing was found internally, try to fetch any
                    // data from the HTML5 data-* attribute
                    if (data === undefined && elem.nodeType === 1) {
                        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                        data = elem.getAttribute(name);
                        if (typeof data === "string") {
                            try {
                                data = getData(data);
                            } catch (e) {
                            }
                            // Make sure we set the data so it isn't changed later
                            dataUser.set(elem, key, data);
                        } else data = undefined;
                    }
                    return data;
                }
                jQuery.extend({
                    hasData: function(elem) {
                        return dataUser.hasData(elem) || dataPriv.hasData(elem);
                    },
                    data: function(elem, name, data) {
                        return dataUser.access(elem, name, data);
                    },
                    removeData: function(elem, name) {
                        dataUser.remove(elem, name);
                    },
                    // TODO: Now that all calls to _data and _removeData have been replaced
                    // with direct calls to dataPriv methods, these can be deprecated.
                    _data: function(elem, name, data) {
                        return dataPriv.access(elem, name, data);
                    },
                    _removeData: function(elem, name) {
                        dataPriv.remove(elem, name);
                    }
                });
                jQuery.fn.extend({
                    data: function(key, value3) {
                        var i, name, data1, elem = this[0], attrs = elem && elem.attributes;
                        // Gets all values
                        if (key === undefined) {
                            if (this.length) {
                                data1 = dataUser.get(elem);
                                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                    i = attrs.length;
                                    while(i--)// Support: IE 11 only
                                    // The attrs elements can be null (#14894)
                                    if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (name.indexOf("data-") === 0) {
                                            name = camelCase(name.slice(5));
                                            dataAttr(elem, name, data1[name]);
                                        }
                                    }
                                    dataPriv.set(elem, "hasDataAttrs", true);
                                }
                            }
                            return data1;
                        }
                        // Sets multiple values
                        if (typeof key === "object") return this.each(function() {
                            dataUser.set(this, key);
                        });
                        return access(this, function(value) {
                            var data;
                            // The calling jQuery object (element matches) is not empty
                            // (and therefore has an element appears at this[ 0 ]) and the
                            // `value` parameter was not undefined. An empty jQuery object
                            // will result in `undefined` for elem = this[ 0 ] which will
                            // throw an exception if an attempt to read a data cache is made.
                            if (elem && value === undefined) {
                                // Attempt to get data from the cache
                                // The key will always be camelCased in Data
                                data = dataUser.get(elem, key);
                                if (data !== undefined) return data;
                                // Attempt to "discover" the data in
                                // HTML5 custom data-* attrs
                                data = dataAttr(elem, key);
                                if (data !== undefined) return data;
                                // We tried really hard, but the data doesn't exist.
                                return;
                            }
                            // Set the data...
                            this.each(function() {
                                // We always store the camelCased key
                                dataUser.set(this, key, value);
                            });
                        }, null, value3, arguments.length > 1, null, true);
                    },
                    removeData: function(key) {
                        return this.each(function() {
                            dataUser.remove(this, key);
                        });
                    }
                });
                jQuery.extend({
                    queue: function(elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = dataPriv.get(elem, type);
                            // Speed up dequeue by getting out quickly if this is just a lookup
                            if (data) {
                                if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                                else queue.push(data);
                            }
                            return queue || [];
                        }
                    },
                    dequeue: function(elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                            jQuery.dequeue(elem, type);
                        };
                        // If the fx queue is dequeued, always remove the progress sentinel
                        if (fn === "inprogress") {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            // Add a progress sentinel to prevent the fx queue from being
                            // automatically dequeued
                            if (type === "fx") queue.unshift("inprogress");
                            // Clear up the last queue stop function
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) hooks.empty.fire();
                    },
                    // Not public - generate a queueHooks object, or return the current one
                    _queueHooks: function(elem, type) {
                        var key = type + "queueHooks";
                        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                            empty: jQuery.Callbacks("once memory").add(function() {
                                dataPriv.remove(elem, [
                                    type + "queue",
                                    key
                                ]);
                            })
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        if (typeof type !== "string") {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) return jQuery.queue(this[0], type);
                        return data === undefined ? this : this.each(function() {
                            var queue = jQuery.queue(this, type, data);
                            // Ensure a hooks for this queue
                            jQuery._queueHooks(this, type);
                            if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
                        });
                    },
                    dequeue: function(type) {
                        return this.each(function() {
                            jQuery.dequeue(this, type);
                        });
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", []);
                    },
                    // Get a promise resolved when queues of a certain type
                    // are emptied (fx is the type by default)
                    promise: function(type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                            if (!--count) defer.resolveWith(elements, [
                                elements
                            ]);
                        };
                        if (typeof type !== "string") {
                            obj = type;
                            type = undefined;
                        }
                        type = type || "fx";
                        while(i--){
                            tmp = dataPriv.get(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
                var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
                var cssExpand = [
                    "Top",
                    "Right",
                    "Bottom",
                    "Left"
                ];
                var documentElement = document1.documentElement;
                var isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                }, composed = {
                    composed: true
                };
                // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
                // Check attachment across shadow DOM boundaries when possible (gh-3504)
                // Support: iOS 10.0-10.2 only
                // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
                // leading to errors. We need to check for `getRootNode`.
                if (documentElement.getRootNode) isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
                };
                var isHiddenWithinTree = function(elem, el) {
                    // isHiddenWithinTree might be called from jQuery#filter function;
                    // in that case, element will be second argument
                    elem = el || elem;
                    // Inline style trumps all
                    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
                    // Support: Firefox <=43 - 45
                    // Disconnected elements can have computed display: none, so first confirm that elem is
                    // in the document.
                    isAttached(elem) && jQuery.css(elem, "display") === "none";
                };
                function adjustCSS(elem, prop, valueParts, tween) {
                    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                        return tween.cur();
                    } : function() {
                        return jQuery.css(elem, prop, "");
                    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
                    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                    if (initialInUnit && initialInUnit[3] !== unit) {
                        // Support: Firefox <=54
                        // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
                        initial = initial / 2;
                        // Trust units reported by jQuery.css
                        unit = unit || initialInUnit[3];
                        // Iteratively approximate from a nonzero starting point
                        initialInUnit = +initial || 1;
                        while(maxIterations--){
                            // Evaluate and update our best guess (doubling guesses that zero out).
                            // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                            jQuery.style(elem, prop, initialInUnit + unit);
                            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                            initialInUnit = initialInUnit / scale;
                        }
                        initialInUnit = initialInUnit * 2;
                        jQuery.style(elem, prop, initialInUnit + unit);
                        // Make sure we update the tween properties later on
                        valueParts = valueParts || [];
                    }
                    if (valueParts) {
                        initialInUnit = +initialInUnit || +initial || 0;
                        // Apply relative offset (+=/-=) if specified
                        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                        if (tween) {
                            tween.unit = unit;
                            tween.start = initialInUnit;
                            tween.end = adjusted;
                        }
                    }
                    return adjusted;
                }
                var defaultDisplayMap = {
                };
                function getDefaultDisplay(elem) {
                    var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                    if (display) return display;
                    temp = doc.body.appendChild(doc.createElement(nodeName));
                    display = jQuery.css(temp, "display");
                    temp.parentNode.removeChild(temp);
                    if (display === "none") display = "block";
                    defaultDisplayMap[nodeName] = display;
                    return display;
                }
                function showHide(elements, show) {
                    var display, elem, values = [], index = 0, length = elements.length;
                    // Determine new display value for elements that need to change
                    for(; index < length; index++){
                        elem = elements[index];
                        if (!elem.style) continue;
                        display = elem.style.display;
                        if (show) {
                            // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                            // check is required in this first loop unless we have a nonempty display value (either
                            // inline or about-to-be-restored)
                            if (display === "none") {
                                values[index] = dataPriv.get(elem, "display") || null;
                                if (!values[index]) elem.style.display = "";
                            }
                            if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
                        } else if (display !== "none") {
                            values[index] = "none";
                            // Remember what we're overwriting
                            dataPriv.set(elem, "display", display);
                        }
                    }
                    // Set the display of the elements in a second loop to avoid constant reflow
                    for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
                    return elements;
                }
                jQuery.fn.extend({
                    show: function() {
                        return showHide(this, true);
                    },
                    hide: function() {
                        return showHide(this);
                    },
                    toggle: function(state) {
                        if (typeof state === "boolean") return state ? this.show() : this.hide();
                        return this.each(function() {
                            if (isHiddenWithinTree(this)) jQuery(this).show();
                            else jQuery(this).hide();
                        });
                    }
                });
                var rcheckableType = /^(?:checkbox|radio)$/i;
                var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
                var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
                (function() {
                    var fragment = document1.createDocumentFragment(), div = fragment.appendChild(document1.createElement("div")), input = document1.createElement("input");
                    // Support: Android 4.0 - 4.3 only
                    // Check state lost if the name is set (#11217)
                    // Support: Windows Web Apps (WWA)
                    // `name` and `type` must use .setAttribute for WWA (#14901)
                    input.setAttribute("type", "radio");
                    input.setAttribute("checked", "checked");
                    input.setAttribute("name", "t");
                    div.appendChild(input);
                    // Support: Android <=4.1 only
                    // Older WebKit doesn't clone checked state correctly in fragments
                    support1.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    // Support: IE <=11 only
                    // Make sure textarea (and checkbox) defaultValue is properly cloned
                    div.innerHTML = "<textarea>x</textarea>";
                    support1.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    // Support: IE <=9 only
                    // IE <=9 replaces <option> tags with their contents when inserted outside of
                    // the select element.
                    div.innerHTML = "<option></option>";
                    support1.option = !!div.lastChild;
                })();
                // We have to close these tags to support XHTML (#13200)
                var wrapMap = {
                    // XHTML parsers do not magically insert elements in the
                    // same way that tag soup parsers do. So we cannot shorten
                    // this by omitting <tbody> or other required elements.
                    thead: [
                        1,
                        "<table>",
                        "</table>"
                    ],
                    col: [
                        2,
                        "<table><colgroup>",
                        "</colgroup></table>"
                    ],
                    tr: [
                        2,
                        "<table><tbody>",
                        "</tbody></table>"
                    ],
                    td: [
                        3,
                        "<table><tbody><tr>",
                        "</tr></tbody></table>"
                    ],
                    _default: [
                        0,
                        "",
                        ""
                    ]
                };
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                // Support: IE <=9 only
                if (!support1.option) wrapMap.optgroup = wrapMap.option = [
                    1,
                    "<select multiple='multiple'>",
                    "</select>"
                ];
                function getAll(context, tag) {
                    // Support: IE <=9 - 11 only
                    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
                    var ret;
                    if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
                    else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
                    else ret = [];
                    if (tag === undefined || tag && nodeName1(context, tag)) return jQuery.merge([
                        context
                    ], ret);
                    return ret;
                }
                // Mark scripts as having already been evaluated
                function setGlobalEval(elems, refElements) {
                    var i = 0, l = elems.length;
                    for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                }
                var rhtml1 = /<|&#?\w+;/;
                function buildFragment(elems, context, scripts, selection, ignored) {
                    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                    for(; i < l; i++){
                        elem = elems[i];
                        if (elem || elem === 0) {
                            // Add nodes directly
                            if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(nodes, elem.nodeType ? [
                                elem
                            ] : elem);
                            else if (!rhtml1.test(elem)) nodes.push(context.createTextNode(elem));
                            else {
                                tmp = tmp || fragment.appendChild(context.createElement("div"));
                                // Deserialize a standard representation
                                tag = (rtagName.exec(elem) || [
                                    "",
                                    ""
                                ])[1].toLowerCase();
                                wrap = wrapMap[tag] || wrapMap._default;
                                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                                // Descend through wrappers to the right content
                                j = wrap[0];
                                while(j--)tmp = tmp.lastChild;
                                // Support: Android <=4.0 only, PhantomJS 1 only
                                // push.apply(_, arraylike) throws on ancient WebKit
                                jQuery.merge(nodes, tmp.childNodes);
                                // Remember the top-level container
                                tmp = fragment.firstChild;
                                // Ensure the created nodes are orphaned (#12392)
                                tmp.textContent = "";
                            }
                        }
                    }
                    // Remove wrapper from fragment
                    fragment.textContent = "";
                    i = 0;
                    while(elem = nodes[i++]){
                        // Skip elements already in the context collection (trac-4087)
                        if (selection && jQuery.inArray(elem, selection) > -1) {
                            if (ignored) ignored.push(elem);
                            continue;
                        }
                        attached = isAttached(elem);
                        // Append to fragment
                        tmp = getAll(fragment.appendChild(elem), "script");
                        // Preserve script evaluation history
                        if (attached) setGlobalEval(tmp);
                        // Capture executables
                        if (scripts) {
                            j = 0;
                            while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
                        }
                    }
                    return fragment;
                }
                var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                // Support: IE <=9 - 11+
                // focus() and blur() are asynchronous, except when they are no-op.
                // So expect focus to be synchronous when the element is already active,
                // and blur to be synchronous when the element is not already active.
                // (focus and blur are always synchronous in other supported browsers,
                // this just defines when we can count on it).
                function expectSync1(elem, type) {
                    return elem === safeActiveElement() === (type === "focus");
                }
                // Support: IE <=9 only
                // Accessing document.activeElement can throw unexpectedly
                // https://bugs.jquery.com/ticket/13393
                function safeActiveElement() {
                    try {
                        return document1.activeElement;
                    } catch (err) {
                    }
                }
                function on(elem, types, selector, data, fn, one) {
                    var origFn, type;
                    // Types can be a map of types/handlers
                    if (typeof types === "object") {
                        // ( types-Object, selector, data )
                        if (typeof selector !== "string") {
                            // ( types-Object, data )
                            data = data || selector;
                            selector = undefined;
                        }
                        for(type in types)on(elem, type, selector, data, types[type], one);
                        return elem;
                    }
                    if (data == null && fn == null) {
                        // ( types, fn )
                        fn = selector;
                        data = selector = undefined;
                    } else if (fn == null) {
                        if (typeof selector === "string") {
                            // ( types, selector, fn )
                            fn = data;
                            data = undefined;
                        } else {
                            // ( types, data, fn )
                            fn = data;
                            data = selector;
                            selector = undefined;
                        }
                    }
                    if (fn === false) fn = returnFalse;
                    else if (!fn) return elem;
                    if (one === 1) {
                        origFn = fn;
                        fn = function(event) {
                            // Can use an empty set, since event contains the info
                            jQuery().off(event);
                            return origFn.apply(this, arguments);
                        };
                        // Use same guid so caller can remove using origFn
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                    }
                    return elem.each(function() {
                        jQuery.event.add(this, types, fn, data, selector);
                    });
                }
                /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
                    global: {
                    },
                    add: function(elem, types, handler, data, selector) {
                        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                        // Only attach events to objects that accept data
                        if (!acceptData(elem)) return;
                        // Caller can pass in an object of custom data in lieu of the handler
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        // Ensure that invalid selectors throw exceptions at attach time
                        // Evaluate against documentElement in case elem is a non-element node (e.g., document)
                        if (selector) jQuery.find.matchesSelector(documentElement, selector);
                        // Make sure that the handler has a unique ID, used to find/remove it later
                        if (!handler.guid) handler.guid = jQuery.guid++;
                        // Init the element's event structure and main handler, if this is the first
                        if (!(events = elemData.events)) events = elemData.events = Object.create(null);
                        if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                            // Discard the second event of a jQuery.event.trigger() and
                            // when an event is called after a page has unloaded
                            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                        };
                        // Handle multiple events separated by a space
                        types = (types || "").match(rnothtmlwhite) || [
                            ""
                        ];
                        t = types.length;
                        while(t--){
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            // There *must* be a type, no attaching namespace-only handlers
                            if (!type) continue;
                            // If event changes its type, use the special event handlers for the changed type
                            special = jQuery.event.special[type] || {
                            };
                            // If selector defined, determine special event api type, otherwise given type
                            type = (selector ? special.delegateType : special.bindType) || type;
                            // Update special based on newly reset type
                            special = jQuery.event.special[type] || {
                            };
                            // handleObj is passed to all event handlers
                            handleObj = jQuery.extend({
                                type: type,
                                origType: origType,
                                data: data,
                                handler: handler,
                                guid: handler.guid,
                                selector: selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            // Init the event handler queue if we're the first
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                // Only use addEventListener if the special events handler returns false
                                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                                    if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                                }
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                            }
                            // Add to the element's handler list, delegates in front
                            if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                            else handlers.push(handleObj);
                            // Keep track of which events have ever been used, for event optimization
                            jQuery.event.global[type] = true;
                        }
                    },
                    // Detach an event or set of events from an element
                    remove: function(elem, types, handler, selector, mappedTypes) {
                        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                        if (!elemData || !(events = elemData.events)) return;
                        // Once for each type.namespace in types; type may be omitted
                        types = (types || "").match(rnothtmlwhite) || [
                            ""
                        ];
                        t = types.length;
                        while(t--){
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            // Unbind all events (on this namespace, if provided) for the element
                            if (!type) {
                                for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                continue;
                            }
                            special = jQuery.event.special[type] || {
                            };
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            // Remove matching events
                            origCount = j = handlers.length;
                            while(j--){
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) handlers.delegateCount--;
                                    if (special.remove) special.remove.call(elem, handleObj);
                                }
                            }
                            // Remove generic event handler if we removed something and no more handlers exist
                            // (avoids potential for endless recursion during removal of special event handlers)
                            if (origCount && !handlers.length) {
                                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                                delete events[type];
                            }
                        }
                        // Remove data and the expando if it's no longer used
                        if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
                    },
                    dispatch: function(nativeEvent) {
                        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
                        event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {
                        };
                        // Use the fix-ed jQuery.Event rather than the (read-only) native event
                        args[0] = event;
                        for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
                        event.delegateTarget = this;
                        // Call the preDispatch hook for the mapped type, and let it bail if desired
                        if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
                        // Determine handlers
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        // Run delegates first; they may want to stop propagation beneath us
                        i = 0;
                        while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                            event.currentTarget = matched.elem;
                            j = 0;
                            while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                            // specially universal or its namespaces are a superset of the event's.
                            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {
                                }).handle || handleObj.handler).apply(matched.elem, args);
                                if (ret !== undefined) {
                                    if ((event.result = ret) === false) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                }
                            }
                        }
                        // Call the postDispatch hook for the mapped type
                        if (special.postDispatch) special.postDispatch.call(this, event);
                        return event.result;
                    },
                    handlers: function(event, handlers) {
                        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        // Find delegate handlers
                        if (delegateCount && // Support: IE <=9
                        // Black-hole SVG <use> instance trees (trac-13180)
                        cur.nodeType && // Support: Firefox <=42
                        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                        // Support: IE 11 only
                        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                        !(event.type === "click" && event.button >= 1)) {
                            for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (#13208)
                            // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                                matchedHandlers = [];
                                matchedSelectors = {
                                };
                                for(i = 0; i < delegateCount; i++){
                                    handleObj = handlers[i];
                                    // Don't conflict with Object.prototype properties (#13203)
                                    sel = handleObj.selector + " ";
                                    if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                                        cur
                                    ]).length;
                                    if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                                }
                                if (matchedHandlers.length) handlerQueue.push({
                                    elem: cur,
                                    handlers: matchedHandlers
                                });
                            }
                        }
                        // Add the remaining (directly-bound) handlers
                        cur = this;
                        if (delegateCount < handlers.length) handlerQueue.push({
                            elem: cur,
                            handlers: handlers.slice(delegateCount)
                        });
                        return handlerQueue;
                    },
                    addProp: function(name, hook) {
                        Object.defineProperty(jQuery.Event.prototype, name, {
                            enumerable: true,
                            configurable: true,
                            get: isFunction(hook) ? function() {
                                if (this.originalEvent) return hook(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[name];
                            },
                            set: function(value) {
                                Object.defineProperty(this, name, {
                                    enumerable: true,
                                    configurable: true,
                                    writable: true,
                                    value: value
                                });
                            }
                        });
                    },
                    fix: function(originalEvent) {
                        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                    },
                    special: {
                        load: {
                            // Prevent triggered image.load events from bubbling to window.load
                            noBubble: true
                        },
                        click: {
                            // Utilize native event to ensure correct state for checkable inputs
                            setup: function(data) {
                                // For mutual compressibility with _default, replace `this` access with a local var.
                                // `|| data` is dead code meant only to preserve the variable through minification.
                                var el = this || data;
                                // Claim the first handler
                                if (rcheckableType.test(el.type) && el.click && nodeName1(el, "input")) // dataPriv.set( el, "click", ... )
                                leverageNative(el, "click", returnTrue);
                                // Return false to allow normal processing in the caller
                                return false;
                            },
                            trigger: function(data) {
                                // For mutual compressibility with _default, replace `this` access with a local var.
                                // `|| data` is dead code meant only to preserve the variable through minification.
                                var el = this || data;
                                // Force setup before triggering a click
                                if (rcheckableType.test(el.type) && el.click && nodeName1(el, "input")) leverageNative(el, "click");
                                // Return non-false to allow normal event-path propagation
                                return true;
                            },
                            // For cross-browser consistency, suppress native .click() on links
                            // Also prevent it if we're currently inside a leveraged native-event stack
                            _default: function(event) {
                                var target = event.target;
                                return rcheckableType.test(target.type) && target.click && nodeName1(target, "input") && dataPriv.get(target, "click") || nodeName1(target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(event) {
                                // Support: Firefox 20+
                                // Firefox doesn't alert if the returnValue field is not set.
                                if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                };
                // Ensure the presence of an event listener that handles manually-triggered
                // synthetic events by interrupting progress until reinvoked in response to
                // *native* events that it fires directly, ensuring that state changes have
                // already occurred before other listeners are invoked.
                function leverageNative(el, type, expectSync) {
                    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
                    if (!expectSync) {
                        if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
                        return;
                    }
                    // Register the controller as a special universal handler for all event namespaces
                    dataPriv.set(el, type, false);
                    jQuery.event.add(el, type, {
                        namespace: false,
                        handler: function(event) {
                            var notAsync, result, saved = dataPriv.get(this, type);
                            if (event.isTrigger & 1 && this[type]) {
                                // Interrupt processing of the outer synthetic .trigger()ed event
                                // Saved data should be false in such cases, but might be a leftover capture object
                                // from an async native handler (gh-4350)
                                if (!saved.length) {
                                    // Store arguments for use when handling the inner native event
                                    // There will always be at least one argument (an event object), so this array
                                    // will not be confused with a leftover capture object.
                                    saved = slice1.call(arguments);
                                    dataPriv.set(this, type, saved);
                                    // Trigger the native event and capture its result
                                    // Support: IE <=9 - 11+
                                    // focus() and blur() are asynchronous
                                    notAsync = expectSync(this, type);
                                    this[type]();
                                    result = dataPriv.get(this, type);
                                    if (saved !== result || notAsync) dataPriv.set(this, type, false);
                                    else result = {
                                    };
                                    if (saved !== result) {
                                        // Cancel the outer synthetic event
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        // Support: Chrome 86+
                                        // In Chrome, if an element having a focusout handler is blurred by
                                        // clicking outside of it, it invokes the handler synchronously. If
                                        // that handler calls `.remove()` on the element, the data is cleared,
                                        // leaving `result` undefined. We need to guard against this.
                                        return result && result.value;
                                    }
                                // If this is an inner synthetic event for an event with a bubbling surrogate
                                // (focus or blur), assume that the surrogate already propagated from triggering the
                                // native event and prevent that from happening again here.
                                // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                                // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                                // less bad than duplication.
                                } else if ((jQuery.event.special[type] || {
                                }).delegateType) event.stopPropagation();
                            // If this is a native event triggered above, everything is now in order
                            // Fire an inner synthetic event with the original arguments
                            } else if (saved.length) {
                                // ...and capture the result
                                dataPriv.set(this, type, {
                                    value: jQuery.event.trigger(// Support: IE <=9 - 11+
                                    // Extend with the prototype to reset the above stopImmediatePropagation()
                                    jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                                });
                                // Abort handling of the native event
                                event.stopImmediatePropagation();
                            }
                        }
                    });
                }
                jQuery.removeEvent = function(elem, type, handle) {
                    // This "if" is needed for plain objects
                    if (elem.removeEventListener) elem.removeEventListener(type, handle);
                };
                jQuery.Event = function(src, props) {
                    // Allow instantiation without the 'new' keyword
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    // Event object
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        // Events bubbling up the document may have been marked as prevented
                        // by a handler lower down the tree; reflect the correct value.
                        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
                        src.returnValue === false ? returnTrue : returnFalse;
                        // Create target properties
                        // Support: Safari <=6 - 7 only
                        // Target should not be a text node (#504, #13143)
                        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
                        this.currentTarget = src.currentTarget;
                        this.relatedTarget = src.relatedTarget;
                    // Event type
                    } else this.type = src;
                    // Put explicitly provided properties onto the event object
                    if (props) jQuery.extend(this, props);
                    // Create a timestamp if incoming event doesn't have one
                    this.timeStamp = src && src.timeStamp || Date.now();
                    // Mark it as fixed
                    this[jQuery.expando] = true;
                };
                // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
                // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
                jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: false,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (e && !this.isSimulated) e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopImmediatePropagation();
                        this.stopPropagation();
                    }
                };
                // Includes all common event props including KeyEvent and MouseEvent specific props
                jQuery.each({
                    altKey: true,
                    bubbles: true,
                    cancelable: true,
                    changedTouches: true,
                    ctrlKey: true,
                    detail: true,
                    eventPhase: true,
                    metaKey: true,
                    pageX: true,
                    pageY: true,
                    shiftKey: true,
                    view: true,
                    "char": true,
                    code: true,
                    charCode: true,
                    key: true,
                    keyCode: true,
                    button: true,
                    buttons: true,
                    clientX: true,
                    clientY: true,
                    offsetX: true,
                    offsetY: true,
                    pointerId: true,
                    pointerType: true,
                    screenX: true,
                    screenY: true,
                    targetTouches: true,
                    toElement: true,
                    touches: true,
                    which: true
                }, jQuery.event.addProp);
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(type, delegateType) {
                    jQuery.event.special[type] = {
                        // Utilize native event if possible so blur/focus sequence is correct
                        setup: function() {
                            // Claim the first handler
                            // dataPriv.set( this, "focus", ... )
                            // dataPriv.set( this, "blur", ... )
                            leverageNative(this, type, expectSync1);
                            // Return false to allow normal processing in the caller
                            return false;
                        },
                        trigger: function() {
                            // Force setup before trigger
                            leverageNative(this, type);
                            // Return non-false to allow normal event-path propagation
                            return true;
                        },
                        // Suppress native focus or blur as it's already being fired
                        // in leverageNative.
                        _default: function() {
                            return true;
                        },
                        delegateType: delegateType
                    };
                });
                // Create mouseenter/leave events using mouseover/out and event-time checks
                // so that event delegation works in jQuery.
                // Do the same for pointerenter/pointerleave and pointerover/pointerout
                //
                // Support: Safari 7 only
                // Safari sends mouseenter too often; see:
                // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
                // for the description of the bug (it existed in older Chrome versions as well).
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function(event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            // For mouseenter/leave call the handler if related is outside the target.
                            // NB: No relatedTarget if the mouse left/entered the browser window
                            if (!related || related !== target && !jQuery.contains(target, related)) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                });
                jQuery.fn.extend({
                    on: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function(types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            // ( event )  dispatched jQuery.Event
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if (typeof types === "object") {
                            // ( types-object [, selector] )
                            for(type in types)this.off(type, selector, types[type]);
                            return this;
                        }
                        if (selector === false || typeof selector === "function") {
                            // ( types [, fn] )
                            fn = selector;
                            selector = undefined;
                        }
                        if (fn === false) fn = returnFalse;
                        return this.each(function() {
                            jQuery.event.remove(this, types, fn, selector);
                        });
                    }
                });
                var // Support: IE <=10 - 11, Edge 12 - 13 only
                // In IE/Edge using regex groups here causes severe slowdowns.
                // See https://connect.microsoft.com/IE/feedback/details/1736512/
                rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                // Prefer a tbody over its parent table for containing new rows
                function manipulationTarget(elem, content) {
                    if (nodeName1(elem, "table") && nodeName1(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
                    return elem;
                }
                // Replace/restore the type attribute of script elements for safe DOM manipulation
                function disableScript(elem) {
                    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
                    else elem.removeAttribute("type");
                    return elem;
                }
                function cloneCopyEvent(src, dest) {
                    var i, l, type, pdataOld, udataOld, udataCur, events;
                    if (dest.nodeType !== 1) return;
                    // 1. Copy private data: events, handlers, etc.
                    if (dataPriv.hasData(src)) {
                        pdataOld = dataPriv.get(src);
                        events = pdataOld.events;
                        if (events) {
                            dataPriv.remove(dest, "handle events");
                            for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                    // 2. Copy user data
                    if (dataUser.hasData(src)) {
                        udataOld = dataUser.access(src);
                        udataCur = jQuery.extend({
                        }, udataOld);
                        dataUser.set(dest, udataCur);
                    }
                }
                // Fix IE bugs, see support tests
                function fixInput(src, dest) {
                    var nodeName = dest.nodeName.toLowerCase();
                    // Fails to persist the checked state of a cloned checkbox or radio button.
                    if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
                    else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
                }
                function domManip(collection, args, callback, ignored) {
                    // Flatten any nested arrays
                    args = flat(args);
                    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                    // We can't cloneNode fragments that contain checked, in WebKit
                    if (valueIsFunction || l > 1 && typeof value === "string" && !support1.checkClone && rchecked.test(value)) return collection.each(function(index) {
                        var self = collection.eq(index);
                        if (valueIsFunction) args[0] = value.call(this, index, self.html());
                        domManip(self, args, callback, ignored);
                    });
                    if (l) {
                        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                        first = fragment.firstChild;
                        if (fragment.childNodes.length === 1) fragment = first;
                        // Require either new content or an interest in ignored elements to invoke the callback
                        if (first || ignored) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            // Use the original fragment for the last item
                            // instead of the first because it can end up
                            // being emptied incorrectly in certain situations (#8070).
                            for(; i < l; i++){
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    // Keep references to cloned scripts for later restoration
                                    if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                                    // push.apply(_, arraylike) throws on ancient WebKit
                                    jQuery.merge(scripts, getAll(node, "script"));
                                }
                                callback.call(collection[i], node, i);
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                // Reenable scripts
                                jQuery.map(scripts, restoreScript);
                                // Evaluate executable scripts on first document insertion
                                for(i = 0; i < hasScripts; i++){
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                        if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                                        {
                                            if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                                nonce: node.nonce || node.getAttribute("nonce")
                                            }, doc);
                                        } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                    }
                                }
                            }
                        }
                    }
                    return collection;
                }
                function remove(elem, selector, keepData) {
                    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                    for(; (node = nodes[i]) != null; i++){
                        if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
                        if (node.parentNode) {
                            if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                            node.parentNode.removeChild(node);
                        }
                    }
                    return elem;
                }
                jQuery.extend({
                    htmlPrefilter: function(html) {
                        return html;
                    },
                    clone: function(elem, dataAndEvents, deepDataAndEvents) {
                        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                        // Fix IE cloning issues
                        if (!support1.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                            // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
                        }
                        // Copy the events from the original to the clone
                        if (dataAndEvents) {
                            if (deepDataAndEvents) {
                                srcElements = srcElements || getAll(elem);
                                destElements = destElements || getAll(clone);
                                for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                            } else cloneCopyEvent(elem, clone);
                        }
                        // Preserve script evaluation history
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        // Return the cloned set
                        return clone;
                    },
                    cleanData: function(elems) {
                        var data, elem, type, special = jQuery.event.special, i = 0;
                        for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events) {
                                    for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                                    else jQuery.removeEvent(elem, type, data.handle);
                                }
                                // Support: Chrome <=35 - 45+
                                // Assign undefined instead of using delete, see Data#remove
                                elem[dataPriv.expando] = undefined;
                            }
                            if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                            // Assign undefined instead of using delete, see Data#remove
                            elem[dataUser.expando] = undefined;
                        }
                    }
                });
                jQuery.fn.extend({
                    detach: function(selector) {
                        return remove(this, selector, true);
                    },
                    remove: function(selector) {
                        return remove(this, selector);
                    },
                    text: function(value4) {
                        return access(this, function(value) {
                            return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                            });
                        }, null, value4, arguments.length);
                    },
                    append: function() {
                        return domManip(this, arguments, function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        });
                    },
                    prepend: function() {
                        return domManip(this, arguments, function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        });
                    },
                    before: function() {
                        return domManip(this, arguments, function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this);
                        });
                    },
                    after: function() {
                        return domManip(this, arguments, function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                        });
                    },
                    empty: function() {
                        var elem, i = 0;
                        for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                            // Prevent memory leaks
                            jQuery.cleanData(getAll(elem, false));
                            // Remove any remaining nodes
                            elem.textContent = "";
                        }
                        return this;
                    },
                    clone: function(dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                        return this.map(function() {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        });
                    },
                    html: function(value5) {
                        return access(this, function(value) {
                            var elem = this[0] || {
                            }, i = 0, l = this.length;
                            if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                            // See if we can take a shortcut and just use innerHTML
                            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                                "",
                                ""
                            ])[1].toLowerCase()]) {
                                value = jQuery.htmlPrefilter(value);
                                try {
                                    for(; i < l; i++){
                                        elem = this[i] || {
                                        };
                                        // Remove element nodes and prevent memory leaks
                                        if (elem.nodeType === 1) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                // If using innerHTML throws an exception, use the fallback method
                                } catch (e) {
                                }
                            }
                            if (elem) this.empty().append(value);
                        }, null, value5, arguments.length);
                    },
                    replaceWith: function() {
                        var ignored = [];
                        // Make the changes, replacing each non-ignored context element with the new content
                        return domManip(this, arguments, function(elem) {
                            var parent = this.parentNode;
                            if (jQuery.inArray(this, ignored) < 0) {
                                jQuery.cleanData(getAll(this));
                                if (parent) parent.replaceChild(elem, this);
                            }
                        // Force callback invocation
                        }, ignored);
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(name, original) {
                    jQuery.fn[name] = function(selector) {
                        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                        for(; i <= last; i++){
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            // Support: Android <=4.0 only, PhantomJS 1 only
                            // .get() because push.apply(_, arraylike) throws on ancient WebKit
                            push1.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                });
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var getStyles = function(elem) {
                    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
                    // IE throws on elements created in popups
                    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
                    var view = elem.ownerDocument.defaultView;
                    if (!view || !view.opener) view = window1;
                    return view.getComputedStyle(elem);
                };
                var swap = function(elem, options, callback) {
                    var ret, name, old = {
                    };
                    // Remember the old values, and insert the new ones
                    for(name in options){
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.call(elem);
                    // Revert the old values
                    for(name in options)elem.style[name] = old[name];
                    return ret;
                };
                var rboxStyle = new RegExp(cssExpand.join("|"), "i");
                (function() {
                    // Executing both pixelPosition & boxSizingReliable tests require only one layout
                    // so they're executed at the same time to save the second computation.
                    function computeStyleTests() {
                        // This is a singleton, we need to execute it only once
                        if (!div) return;
                        container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                        documentElement.appendChild(container).appendChild(div);
                        var divStyle = window1.getComputedStyle(div);
                        pixelPositionVal = divStyle.top !== "1%";
                        // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
                        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
                        // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
                        // Some styles come back with percentage values, even though they shouldn't
                        div.style.right = "60%";
                        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
                        // Support: IE 9 - 11 only
                        // Detect misreporting of content dimensions for box-sizing:border-box elements
                        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
                        // Support: IE 9 only
                        // Detect overflow:scroll screwiness (gh-3699)
                        // Support: Chrome <=64
                        // Don't get tricked when zoom affects offsetWidth (gh-4029)
                        div.style.position = "absolute";
                        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
                        documentElement.removeChild(container);
                        // Nullify the div so it wouldn't be stored in the memory and
                        // it will also be a sign that checks already performed
                        div = null;
                    }
                    function roundPixelMeasures(measure) {
                        return Math.round(parseFloat(measure));
                    }
                    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document1.createElement("div"), div = document1.createElement("div");
                    // Finish early in limited (non-browser) environments
                    if (!div.style) return;
                    // Support: IE <=9 - 11 only
                    // Style of cloned element affects source element cloned (#8908)
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support1.clearCloneStyle = div.style.backgroundClip === "content-box";
                    jQuery.extend(support1, {
                        boxSizingReliable: function() {
                            computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelBoxStyles: function() {
                            computeStyleTests();
                            return pixelBoxStylesVal;
                        },
                        pixelPosition: function() {
                            computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginLeft: function() {
                            computeStyleTests();
                            return reliableMarginLeftVal;
                        },
                        scrollboxSize: function() {
                            computeStyleTests();
                            return scrollboxSizeVal;
                        },
                        // Support: IE 9 - 11+, Edge 15 - 18+
                        // IE/Edge misreport `getComputedStyle` of table rows with width/height
                        // set in CSS while `offset*` properties report correct values.
                        // Behavior in IE 9 is more subtle than in newer versions & it passes
                        // some versions of this test; make sure not to make it pass there!
                        //
                        // Support: Firefox 70+
                        // Only Firefox includes border widths
                        // in computed dimensions. (gh-4529)
                        reliableTrDimensions: function() {
                            var table, tr, trChild, trStyle;
                            if (reliableTrDimensionsVal == null) {
                                table = document1.createElement("table");
                                tr = document1.createElement("tr");
                                trChild = document1.createElement("div");
                                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                                tr.style.cssText = "border:1px solid";
                                // Support: Chrome 86+
                                // Height set through cssText does not get applied.
                                // Computed height then comes back as 0.
                                tr.style.height = "1px";
                                trChild.style.height = "9px";
                                // Support: Android 8 Chrome 86+
                                // In our bodyBackground.html iframe,
                                // display for all div elements is set to "inline",
                                // which causes a problem only in Android 8 Chrome 86.
                                // Ensuring the div is display: block
                                // gets around this issue.
                                trChild.style.display = "block";
                                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                                trStyle = window1.getComputedStyle(tr);
                                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                                documentElement.removeChild(table);
                            }
                            return reliableTrDimensionsVal;
                        }
                    });
                })();
                function curCSS(elem, name, computed) {
                    var width, minWidth, maxWidth, ret, // Support: Firefox 51+
                    // Retrieving style before computed somehow
                    // fixes an issue with getting wrong values
                    // on detached elements
                    style = elem.style;
                    computed = computed || getStyles(elem);
                    // getPropertyValue is needed for:
                    //   .css('filter') (IE 9 only, #12537)
                    //   .css('--customProperty) (#3144)
                    if (computed) {
                        ret = computed.getPropertyValue(name) || computed[name];
                        if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
                        // A tribute to the "awesome hack by Dean Edwards"
                        // Android Browser returns percentage for some values,
                        // but width seems to be reliably pixels.
                        // This is against the CSSOM draft spec:
                        // https://drafts.csswg.org/cssom/#resolved-values
                        if (!support1.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                            // Remember the original values
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            // Put in the new values to get a computed value out
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            // Revert the changed values
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }
                    return ret !== undefined ? // Support: IE <=9 - 11 only
                    // IE returns zIndex value as an integer.
                    ret + "" : ret;
                }
                function addGetHookIf(conditionFn, hookFn) {
                    // Define the hook, we'll check on the first run if it's really needed.
                    return {
                        get: function() {
                            if (conditionFn()) {
                                // Hook not needed (or it's not possible to use it due
                                // to missing dependency), remove it.
                                delete this.get;
                                return;
                            }
                            // Hook needed; redefine it so that the support test is not executed again.
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                var cssPrefixes = [
                    "Webkit",
                    "Moz",
                    "ms"
                ], emptyStyle = document1.createElement("div").style, vendorProps = {
                };
                // Return a vendor-prefixed property or undefined
                function vendorPropName(name) {
                    // Check for vendor prefixed names
                    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                    while(i--){
                        name = cssPrefixes[i] + capName;
                        if (name in emptyStyle) return name;
                    }
                }
                // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
                function finalPropName(name) {
                    var final = jQuery.cssProps[name] || vendorProps[name];
                    if (final) return final;
                    if (name in emptyStyle) return name;
                    return vendorProps[name] = vendorPropName(name) || name;
                }
                var // Swappable if display is none or starts with table
                // except "table", "table-cell", or "table-caption"
                // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
                rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function setPositiveNumber(_elem, value, subtract) {
                    // Any relative (+/-) values have already been
                    // normalized at this point
                    var matches = rcssNum.exec(value);
                    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
                    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
                }
                function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                    var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
                    // Adjustment may not be necessary
                    if (box === (isBorderBox ? "border" : "content")) return 0;
                    for(; i < 4; i += 2){
                        // Both box models exclude margin
                        if (box === "margin") delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                        // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
                        if (!isBorderBox) {
                            // Add padding
                            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            // For "border" or "margin", add border
                            if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                            else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        // If we get here with a border-box (content + padding + border), we're seeking "content" or
                        // "padding" or "margin"
                        } else {
                            // For "content", subtract padding
                            if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            // For "content" or "padding", subtract border
                            if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                    // Account for positive content-box scroll gutter when requested by providing computedVal
                    if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
                    // Assuming integer scroll gutter, subtract the rest and round down
                    delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
                    return delta;
                }
                function getWidthOrHeight(elem, dimension, extra) {
                    // Start with computed style
                    var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
                    // Fake content-box until we know it's needed to know the true value.
                    boxSizingNeeded = !support1.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                    // Support: Firefox <=54
                    // Return a confounding non-pixel value or feign ignorance, as appropriate.
                    if (rnumnonpx.test(val)) {
                        if (!extra) return val;
                        val = "auto";
                    }
                    // Support: IE 9 - 11 only
                    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
                    // In those cases, the computed value can be trusted to be border-box.
                    if ((!support1.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
                    // IE/Edge misreport `getComputedStyle` of table rows with width/height
                    // set in CSS while `offset*` properties report correct values.
                    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
                    !support1.reliableTrDimensions() && nodeName1(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
                    // This happens for inline elements with no explicit setting (gh-3571)
                    val === "auto" || // Support: Android <=4.1 - 4.3 only
                    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
                    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
                    elem.getClientRects().length) {
                        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                        // Where available, offsetWidth/offsetHeight approximate border box dimensions.
                        // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
                        // retrieved value as a content box dimension.
                        valueIsBorderBox = offsetProp in elem;
                        if (valueIsBorderBox) val = elem[offsetProp];
                    }
                    // Normalize "" and auto
                    val = parseFloat(val) || 0;
                    // Adjust for the element's box model
                    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
                    val) + "px";
                }
                jQuery.extend({
                    // Add in style property hooks for overriding the default
                    // behavior of getting and setting a style property
                    cssHooks: {
                        opacity: {
                            get: function(elem, computed) {
                                if (computed) {
                                    // We should always get a number back from opacity
                                    var ret = curCSS(elem, "opacity");
                                    return ret === "" ? "1" : ret;
                                }
                            }
                        }
                    },
                    // Don't automatically add "px" to these possibly-unitless properties
                    cssNumber: {
                        "animationIterationCount": true,
                        "columnCount": true,
                        "fillOpacity": true,
                        "flexGrow": true,
                        "flexShrink": true,
                        "fontWeight": true,
                        "gridArea": true,
                        "gridColumn": true,
                        "gridColumnEnd": true,
                        "gridColumnStart": true,
                        "gridRow": true,
                        "gridRowEnd": true,
                        "gridRowStart": true,
                        "lineHeight": true,
                        "opacity": true,
                        "order": true,
                        "orphans": true,
                        "widows": true,
                        "zIndex": true,
                        "zoom": true
                    },
                    // Add in properties whose names you wish to fix before
                    // setting or getting the value
                    cssProps: {
                    },
                    // Get and set the style property on a DOM Node
                    style: function(elem, name, value, extra) {
                        // Don't set styles on text and comment nodes
                        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
                        // Make sure that we're working with the right name
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        // Make sure that we're working with the right name. We don't
                        // want to query the value if it is a CSS custom property
                        // since they are user-defined.
                        if (!isCustomProp) name = finalPropName(origName);
                        // Gets hook for the prefixed version, then unprefixed version
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        // Check if we're setting a value
                        if (value !== undefined) {
                            type = typeof value;
                            // Convert "+=" or "-=" to relative numbers (#7345)
                            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                                value = adjustCSS(elem, name, ret);
                                // Fixes bug #9237
                                type = "number";
                            }
                            // Make sure that null and NaN values aren't set (#7116)
                            if (value == null || value !== value) return;
                            // If a number was passed in, add the unit (except for certain CSS properties)
                            // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                            // "px" to a few hardcoded values.
                            if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                            // background-* props affect original clone's values
                            if (!support1.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                            // If a hook was provided, use that value, otherwise just set the specified value
                            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                                if (isCustomProp) style.setProperty(name, value);
                                else style[name] = value;
                            }
                        } else {
                            // If a hook was provided get the non-computed value from there
                            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                            // Otherwise just get the value from the style object
                            return style[name];
                        }
                    },
                    css: function(elem, name, extra, styles) {
                        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                        // Make sure that we're working with the right name. We don't
                        // want to modify the value if it is a CSS custom property
                        // since they are user-defined.
                        if (!isCustomProp) name = finalPropName(origName);
                        // Try prefixed name followed by the unprefixed name
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        // If a hook was provided get the computed value from there
                        if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                        // Otherwise, if a way to get the computed value exists, use that
                        if (val === undefined) val = curCSS(elem, name, styles);
                        // Convert "normal" to computed value
                        if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
                        // Make numeric if forced or a qualifier was provided and val looks numeric
                        if (extra === "" || extra) {
                            num = parseFloat(val);
                            return extra === true || isFinite(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each([
                    "height",
                    "width"
                ], function(_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function(elem, computed, extra) {
                            if (computed) // Certain elements can have dimension info if we invisibly show them
                            // but it must have a current display style that would benefit
                            return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                                return getWidthOrHeight(elem, dimension, extra);
                            }) : getWidthOrHeight(elem, dimension, extra);
                        },
                        set: function(elem, value, extra) {
                            var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                            // to avoid forcing a reflow.
                            scrollboxSizeBuggy = !support1.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                            boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                            // Account for unreliable border-box dimensions by comparing offset* to computed and
                            // faking a content-box to get border and padding (gh-3699)
                            if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                            // Convert to pixels if value adjustment is needed
                            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                                elem.style[dimension] = value;
                                value = jQuery.css(elem, dimension);
                            }
                            return setPositiveNumber(elem, value, subtract);
                        }
                    };
                });
                jQuery.cssHooks.marginLeft = addGetHookIf(support1.reliableMarginLeft, function(elem, computed) {
                    if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, function() {
                        return elem.getBoundingClientRect().left;
                    })) + "px";
                });
                // These hooks are used by animate to expand properties
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function(value) {
                            var i = 0, expanded = {
                            }, // Assumes a single number if not a string
                            parts = typeof value === "string" ? value.split(" ") : [
                                value
                            ];
                            for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        }
                    };
                    if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                });
                jQuery.fn.extend({
                    css: function(name1, value6) {
                        return access(this, function(elem, name, value) {
                            var styles, len, map = {
                            }, i = 0;
                            if (Array.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                return map;
                            }
                            return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                        }, name1, value6, arguments.length > 1);
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function(elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || jQuery.easing._default;
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function() {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function(percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
                        else this.pos = eased = percent;
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) this.options.step.call(this.elem, this.now, this);
                        if (hooks && hooks.set) hooks.set(this);
                        else Tween.propHooks._default.set(this);
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function(tween) {
                            var result;
                            // Use a property on the element directly when it is not a DOM element,
                            // or when there is no matching style property that exists.
                            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                            // Passing an empty string as a 3rd parameter to .css will automatically
                            // attempt a parseFloat and fallback to a string if the parse fails.
                            // Simple values such as "10px" are parsed to Float;
                            // complex values such as "rotate(1rad)" are returned as-is.
                            result = jQuery.css(tween.elem, tween.prop, "");
                            // Empty strings, null, undefined and "auto" are converted to 0.
                            return !result || result === "auto" ? 0 : result;
                        },
                        set: function(tween) {
                            // Use step hook for back compat.
                            // Use cssHook if its there.
                            // Use .style if available and use plain properties where available.
                            if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                            else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                            else tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                // Support: IE <=9 only
                // Panic based approach to setting things on disconnected nodes
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                    }
                };
                jQuery.easing = {
                    linear: function(p) {
                        return p;
                    },
                    swing: function(p) {
                        return 0.5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing"
                };
                jQuery.fx = Tween.prototype.init;
                // Back compat <1.8 extension point
                jQuery.fx.step = {
                };
                var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
                function schedule() {
                    if (inProgress) {
                        if (document1.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
                        else window1.setTimeout(schedule, jQuery.fx.interval);
                        jQuery.fx.tick();
                    }
                }
                // Animations created synchronously will run synchronously
                function createFxNow() {
                    window1.setTimeout(function() {
                        fxNow = undefined;
                    });
                    return fxNow = Date.now();
                }
                // Generate parameters to create a standard animation
                function genFx(type, includeWidth) {
                    var which, i = 0, attrs = {
                        height: type
                    };
                    // If we include width, step value is 1 to do all cssExpand values,
                    // otherwise step value is 2 to skip over Left and Right
                    includeWidth = includeWidth ? 1 : 0;
                    for(; i < 4; i += 2 - includeWidth){
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) attrs.opacity = attrs.width = type;
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                    for(; index < length; index++){
                        if (tween = collection[index].call(animation, prop, value)) // We're done with this property
                        return tween;
                    }
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {
                    }, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    // Queue-skipping animations hijack the fx hooks
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (hooks.unqueued == null) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function() {
                                if (!hooks.unqueued) oldfire();
                            };
                        }
                        hooks.unqueued++;
                        anim.always(function() {
                            // Ensure the complete handler is called before this completes
                            anim.always(function() {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                            });
                        });
                    }
                    // Detect show/hide animations
                    for(prop in props){
                        value = props[prop];
                        if (rfxtypes.test(value)) {
                            delete props[prop];
                            toggle = toggle || value === "toggle";
                            if (value === (hidden ? "hide" : "show")) {
                                // Pretend to be hidden if this is a "show" and
                                // there is still data from a stopped show/hide
                                if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                                else continue;
                            }
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        }
                    }
                    // Bail out if this is a no-op like .hide().hide()
                    propTween = !jQuery.isEmptyObject(props);
                    if (!propTween && jQuery.isEmptyObject(orig)) return;
                    // Restrict "overflow" and "display" styles during box animations
                    if (isBox && elem.nodeType === 1) {
                        // Support: IE <=9 - 11, Edge 12 - 15
                        // Record all 3 overflow attributes because IE does not infer the shorthand
                        // from identically-valued overflowX and overflowY and Edge just mirrors
                        // the overflowX value there.
                        opts.overflow = [
                            style.overflow,
                            style.overflowX,
                            style.overflowY
                        ];
                        // Identify a display type, preferring old show/hide data over the CSS cascade
                        restoreDisplay = dataShow && dataShow.display;
                        if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
                        display = jQuery.css(elem, "display");
                        if (display === "none") {
                            if (restoreDisplay) display = restoreDisplay;
                            else {
                                // Get nonempty value(s) by temporarily forcing visibility
                                showHide([
                                    elem
                                ], true);
                                restoreDisplay = elem.style.display || restoreDisplay;
                                display = jQuery.css(elem, "display");
                                showHide([
                                    elem
                                ]);
                            }
                        }
                        // Animate inline elements as inline-block
                        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                            if (jQuery.css(elem, "float") === "none") {
                                // Restore the original display value at the end of pure show/hide animations
                                if (!propTween) {
                                    anim.done(function() {
                                        style.display = restoreDisplay;
                                    });
                                    if (restoreDisplay == null) {
                                        display = style.display;
                                        restoreDisplay = display === "none" ? "" : display;
                                    }
                                }
                                style.display = "inline-block";
                            }
                        }
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        anim.always(function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        });
                    }
                    // Implement show/hide animations
                    propTween = false;
                    for(prop in orig){
                        // General show/hide setup for this element animation
                        if (!propTween) {
                            if (dataShow) {
                                if ("hidden" in dataShow) hidden = dataShow.hidden;
                            } else dataShow = dataPriv.access(elem, "fxshow", {
                                display: restoreDisplay
                            });
                            // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                            if (toggle) dataShow.hidden = !hidden;
                            // Show elements before animating them
                            if (hidden) showHide([
                                elem
                            ], true);
                            /* eslint-disable no-loop-func */ anim.done(function() {
                                /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                                if (!hidden) showHide([
                                    elem
                                ]);
                                dataPriv.remove(elem, "fxshow");
                                for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                            });
                        }
                        // Per-property setup
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = propTween.start;
                            if (hidden) {
                                propTween.end = propTween.start;
                                propTween.start = 0;
                            }
                        }
                    }
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    // camelCase, specialEasing and expand cssHook pass
                    for(index in props){
                        name = camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (Array.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            // Not quite $.extend, this won't overwrite existing keys.
                            // Reusing 'index' because we have the correct "name"
                            for(index in value)if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        } else specialEasing[name] = easing;
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index1 = 0, length1 = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
                        // Don't match elem in the :animated selector
                        delete tick.elem;
                    }), tick = function() {
                        if (stopped) return false;
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
                        // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                        temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for(; index < length; index++)animation.tweens[index].run(percent);
                        deferred.notifyWith(elem, [
                            animation,
                            percent,
                            remaining
                        ]);
                        // If there's more to do, yield
                        if (percent < 1 && length) return remaining;
                        // If this was an empty animation, synthesize a final progress notification
                        if (!length) deferred.notifyWith(elem, [
                            animation,
                            1,
                            0
                        ]);
                        // Resolve the animation and report its conclusion
                        deferred.resolveWith(elem, [
                            animation
                        ]);
                        return false;
                    }, animation = deferred.promise({
                        elem: elem,
                        props: jQuery.extend({
                        }, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {
                            },
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0, // If we are going to the end, we want to run all the tweens
                            // otherwise we skip this part
                            length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            stopped = true;
                            for(; index < length; index++)animation.tweens[index].run(1);
                            // Resolve when we played the last frame; otherwise, reject
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [
                                    animation,
                                    1,
                                    0
                                ]);
                                deferred.resolveWith(elem, [
                                    animation,
                                    gotoEnd
                                ]);
                            } else deferred.rejectWith(elem, [
                                animation,
                                gotoEnd
                            ]);
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for(; index1 < length1; index1++){
                        result = Animation.prefilters[index1].call(animation, elem, props, animation.opts);
                        if (result) {
                            if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                            return result;
                        }
                    }
                    jQuery.map(props, createTween, animation);
                    if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                    // Attach callbacks from options
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem: elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation;
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [
                            function(prop, value) {
                                var tween = this.createTween(prop, value);
                                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                                return tween;
                            }
                        ]
                    },
                    tweener: function(props, callback) {
                        if (isFunction(props)) {
                            callback = props;
                            props = [
                                "*"
                            ];
                        } else props = props.match(rnothtmlwhite);
                        var prop, index = 0, length = props.length;
                        for(; index < length; index++){
                            prop = props[index];
                            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                            Animation.tweeners[prop].unshift(callback);
                        }
                    },
                    prefilters: [
                        defaultPrefilter
                    ],
                    prefilter: function(callback, prepend) {
                        if (prepend) Animation.prefilters.unshift(callback);
                        else Animation.prefilters.push(callback);
                    }
                });
                jQuery.speed = function(speed, easing, fn) {
                    var opt = speed && typeof speed === "object" ? jQuery.extend({
                    }, speed) : {
                        complete: fn || !fn && easing || isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !isFunction(easing) && easing
                    };
                    // Go to the end state if fx are off
                    if (jQuery.fx.off) opt.duration = 0;
                    else if (typeof opt.duration !== "number") {
                        if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
                        else opt.duration = jQuery.fx.speeds._default;
                    }
                    // Normalize opt.queue - true/undefined/null -> "fx"
                    if (opt.queue == null || opt.queue === true) opt.queue = "fx";
                    // Queueing
                    opt.old = opt.complete;
                    opt.complete = function() {
                        if (isFunction(opt.old)) opt.old.call(this);
                        if (opt.queue) jQuery.dequeue(this, opt.queue);
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function(speed, to, easing, callback) {
                        // Show any hidden elements after setting opacity to 0
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
                        .end().animate({
                            opacity: to
                        }, speed, easing, callback);
                    },
                    animate: function(prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                            // Operate on a copy of prop so per-property easing won't be lost
                            var anim = Animation(this, jQuery.extend({
                            }, prop), optall);
                            // Empty animations, or finishing resolves immediately
                            if (empty || dataPriv.get(this, "finish")) anim.stop(true);
                        };
                        doAnimation.finish = doAnimation;
                        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function(type, clearQueue, gotoEnd) {
                        var stopQueue = function(hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if (typeof type !== "string") {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = undefined;
                        }
                        if (clearQueue) this.queue(type || "fx", []);
                        return this.each(function() {
                            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                            if (index) {
                                if (data[index] && data[index].stop) stopQueue(data[index]);
                            } else {
                                for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                            }
                            for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                            // Start the next in the queue if the last step wasn't forced.
                            // Timers currently will call their complete callbacks, which
                            // will dequeue but only if they were gotoEnd.
                            if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                        });
                    },
                    finish: function(type) {
                        if (type !== false) type = type || "fx";
                        return this.each(function() {
                            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            // Enable finishing flag on private data
                            data.finish = true;
                            // Empty the queue first
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) hooks.stop.call(this, true);
                            // Look for any active animations, and finish them
                            for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                            // Look for any animations in the old queue and finish them
                            for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                            // Turn off finishing flag
                            delete data.finish;
                        });
                    }
                });
                jQuery.each([
                    "toggle",
                    "show",
                    "hide"
                ], function(_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                    };
                });
                // Generate shortcuts for custom animations
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(name, props) {
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                });
                jQuery.timers = [];
                jQuery.fx.tick = function() {
                    var timer, i = 0, timers = jQuery.timers;
                    fxNow = Date.now();
                    for(; i < timers.length; i++){
                        timer = timers[i];
                        // Run the timer and safely remove it when done (allowing for external removal)
                        if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                    }
                    if (!timers.length) jQuery.fx.stop();
                    fxNow = undefined;
                };
                jQuery.fx.timer = function(timer) {
                    jQuery.timers.push(timer);
                    jQuery.fx.start();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function() {
                    if (inProgress) return;
                    inProgress = true;
                    schedule();
                };
                jQuery.fx.stop = function() {
                    inProgress = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    // Default speed
                    _default: 400
                };
                // Based off of the plugin by Clint Helfers, with permission.
                // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
                jQuery.fn.delay = function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, function(next, hooks) {
                        var timeout = window1.setTimeout(next, time);
                        hooks.stop = function() {
                            window1.clearTimeout(timeout);
                        };
                    });
                };
                (function() {
                    var input = document1.createElement("input"), select = document1.createElement("select"), opt = select.appendChild(document1.createElement("option"));
                    input.type = "checkbox";
                    // Support: Android <=4.3 only
                    // Default value for a checkbox should be "on"
                    support1.checkOn = input.value !== "";
                    // Support: IE <=11 only
                    // Must access selectedIndex to make default options select
                    support1.optSelected = opt.selected;
                    // Support: IE <=11 only
                    // An input loses its value after becoming a radio
                    input = document1.createElement("input");
                    input.value = "t";
                    input.type = "radio";
                    support1.radioValue = input.value === "t";
                })();
                var boolHook, attrHandle = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function(name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function(name) {
                        return this.each(function() {
                            jQuery.removeAttr(this, name);
                        });
                    }
                });
                jQuery.extend({
                    attr: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        // Don't get/set attributes on text, comment and attribute nodes
                        if (nType === 3 || nType === 8 || nType === 2) return;
                        // Fallback to prop when attributes are not supported
                        if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
                        // Attribute hooks are determined by the lowercase version
                        // Grab necessary hook if one is defined
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                        if (value !== undefined) {
                            if (value === null) {
                                jQuery.removeAttr(elem, name);
                                return;
                            }
                            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                            elem.setAttribute(name, value + "");
                            return value;
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                        ret = jQuery.find.attr(elem, name);
                        // Non-existent attributes return null, we normalize to undefined
                        return ret == null ? undefined : ret;
                    },
                    attrHooks: {
                        type: {
                            set: function(elem, value) {
                                if (!support1.radioValue && value === "radio" && nodeName1(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) elem.value = val;
                                    return value;
                                }
                            }
                        }
                    },
                    removeAttr: function(elem, value) {
                        var name, i = 0, // Attribute names can contain non-HTML whitespace characters
                        // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                        attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
                    }
                });
                // Hooks for boolean attributes
                boolHook = {
                    set: function(elem, value, name) {
                        if (value === false) // Remove boolean attributes when set to false
                        jQuery.removeAttr(elem, name);
                        else elem.setAttribute(name, name);
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name2) {
                    var getter = attrHandle[name2] || jQuery.find.attr;
                    attrHandle[name2] = function(elem, name, isXML) {
                        var ret, handle, lowercaseName = name.toLowerCase();
                        if (!isXML) {
                            // Avoid an infinite loop by temporarily removing this function from the getter
                            handle = attrHandle[lowercaseName];
                            attrHandle[lowercaseName] = ret;
                            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                            attrHandle[lowercaseName] = handle;
                        }
                        return ret;
                    };
                });
                var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function(name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function(name) {
                        return this.each(function() {
                            delete this[jQuery.propFix[name] || name];
                        });
                    }
                });
                jQuery.extend({
                    prop: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        // Don't get/set properties on text, comment and attribute nodes
                        if (nType === 3 || nType === 8 || nType === 2) return;
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                            // Fix name and attach hooks
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (value !== undefined) {
                            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                            return elem[name] = value;
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                        return elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(elem) {
                                // Support: IE <=9 - 11 only
                                // elem.tabIndex doesn't always return the
                                // correct value when it hasn't been explicitly set
                                // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                                // Use proper attribute retrieval(#12072)
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                if (tabindex) return parseInt(tabindex, 10);
                                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                                return -1;
                            }
                        }
                    },
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    }
                });
                // Support: IE <=11 only
                // Accessing the selectedIndex property
                // forces the browser to respect setting selected
                // on the option
                // The getter ensures a default option is selected
                // when in an optgroup
                // eslint rule "no-unused-expressions" is disabled for this code
                // since it considers such accessions noop
                if (!support1.optSelected) jQuery.propHooks.selected = {
                    get: function(elem) {
                        /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
                        if (parent && parent.parentNode) parent.parentNode.selectedIndex;
                        return null;
                    },
                    set: function(elem) {
                        /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) parent.parentNode.selectedIndex;
                        }
                    }
                };
                jQuery.each([
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable"
                ], function() {
                    jQuery.propFix[this.toLowerCase()] = this;
                });
                // Strip and collapse whitespace according to HTML spec
                // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
                function stripAndCollapse(value) {
                    var tokens = value.match(rnothtmlwhite) || [];
                    return tokens.join(" ");
                }
                function getClass(elem) {
                    return elem.getAttribute && elem.getAttribute("class") || "";
                }
                function classesToArray(value) {
                    if (Array.isArray(value)) return value;
                    if (typeof value === "string") return value.match(rnothtmlwhite) || [];
                    return [];
                }
                jQuery.fn.extend({
                    addClass: function(value) {
                        var classes, elem, cur, curValue, clazz, j1, finalValue, i = 0;
                        if (isFunction(value)) return this.each(function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        });
                        classes = classesToArray(value);
                        if (classes.length) while(elem = this[i++]){
                            curValue = getClass(elem);
                            cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                j1 = 0;
                                while(clazz = classes[j1++])if (cur.indexOf(" " + clazz + " ") < 0) cur += clazz + " ";
                                // Only assign if different to avoid unneeded rendering.
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                            }
                        }
                        return this;
                    },
                    removeClass: function(value) {
                        var classes, elem, cur, curValue, clazz, j2, finalValue, i = 0;
                        if (isFunction(value)) return this.each(function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        });
                        if (!arguments.length) return this.attr("class", "");
                        classes = classesToArray(value);
                        if (classes.length) while(elem = this[i++]){
                            curValue = getClass(elem);
                            // This expression is here for better compressibility (see addClass)
                            cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                j2 = 0;
                                while(clazz = classes[j2++])// Remove *all* instances
                                while(cur.indexOf(" " + clazz + " ") > -1)cur = cur.replace(" " + clazz + " ", " ");
                                // Only assign if different to avoid unneeded rendering.
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                            }
                        }
                        return this;
                    },
                    toggleClass: function(value, stateVal) {
                        var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
                        if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
                        if (isFunction(value)) return this.each(function(i) {
                            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                        });
                        return this.each(function() {
                            var className, i, self, classNames;
                            if (isValidValue) {
                                // Toggle individual class names
                                i = 0;
                                self = jQuery(this);
                                classNames = classesToArray(value);
                                while(className = classNames[i++])// Check each className given, space separated list
                                if (self.hasClass(className)) self.removeClass(className);
                                else self.addClass(className);
                            // Toggle whole class name
                            } else if (value === undefined || type === "boolean") {
                                className = getClass(this);
                                if (className) // Store className if set
                                dataPriv.set(this, "__className__", className);
                                // If the element has a class name or if we're passed `false`,
                                // then remove the whole classname (if there was one, the above saved it).
                                // Otherwise bring back whatever was previously saved (if anything),
                                // falling back to the empty string if nothing was stored.
                                if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                            }
                        });
                    },
                    hasClass: function(selector) {
                        var className, elem, i = 0;
                        className = " " + selector + " ";
                        while(elem = this[i++]){
                            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
                        }
                        return false;
                    }
                });
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function(value7) {
                        var hooks, ret, valueIsFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                                ret = elem.value;
                                // Handle most common string cases
                                if (typeof ret === "string") return ret.replace(rreturn, "");
                                // Handle cases where value is null/undef or number
                                return ret == null ? "" : ret;
                            }
                            return;
                        }
                        valueIsFunction = isFunction(value7);
                        return this.each(function(i) {
                            var val;
                            if (this.nodeType !== 1) return;
                            if (valueIsFunction) val = value7.call(this, i, jQuery(this).val());
                            else val = value7;
                            // Treat null/undefined as ""; convert numbers to string
                            if (val == null) val = "";
                            else if (typeof val === "number") val += "";
                            else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                                return value == null ? "" : value + "";
                            });
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            // If set returns undefined, fall back to normal setting
                            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
                        });
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return val != null ? val : // Support: IE <=10 - 11 only
                                // option.text throws exceptions (#14686, #14858)
                                // Strip and collapse whitespace
                                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                                stripAndCollapse(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function(elem) {
                                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                                if (index < 0) i = max;
                                else i = one ? index : 0;
                                // Loop through all the selected options
                                for(; i < max; i++){
                                    option = options[i];
                                    // Support: IE <=9 only
                                    // IE8-9 doesn't update selected after form reset (#2551)
                                    if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                                    !option.disabled && (!option.parentNode.disabled || !nodeName1(option.parentNode, "optgroup"))) {
                                        // Get the specific value for the option
                                        value = jQuery(option).val();
                                        // We don't need an array for one selects
                                        if (one) return value;
                                        // Multi-Selects return an array
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function(elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while(i--){
                                    option = options[i];
                                    /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                                /* eslint-enable no-cond-assign */ }
                                // Force browsers to behave consistently when non-matching value is set
                                if (!optionSet) elem.selectedIndex = -1;
                                return values;
                            }
                        }
                    }
                });
                // Radios and checkboxes getter/setter
                jQuery.each([
                    "radio",
                    "checkbox"
                ], function() {
                    jQuery.valHooks[this] = {
                        set: function(elem, value) {
                            if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                        }
                    };
                    if (!support1.checkOn) jQuery.valHooks[this].get = function(elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    };
                });
                // Return jQuery for attributes-only inclusion
                support1.focusin = "onfocusin" in window1;
                var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
                    e.stopPropagation();
                };
                jQuery.extend(jQuery.event, {
                    trigger: function(event, data, elem, onlyHandlers) {
                        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                            elem || document1
                        ], type = hasOwn1.call(event, "type") ? event.type : event, namespaces = hasOwn1.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = lastElement = tmp = elem = elem || document1;
                        // Don't do events on text and comment nodes
                        if (elem.nodeType === 3 || elem.nodeType === 8) return;
                        // focus/blur morphs to focusin/out; ensure we're not firing them right now
                        if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                        if (type.indexOf(".") > -1) {
                            // Namespaced trigger; create a regexp to match event type in handle()
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        // Caller can pass in a jQuery.Event object, Object, or just an event type string
                        event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                        // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        // Clean up the event in case it is being reused
                        event.result = undefined;
                        if (!event.target) event.target = elem;
                        // Clone any incoming data and prepend the event, creating the handler arg list
                        data = data == null ? [
                            event
                        ] : jQuery.makeArray(data, [
                            event
                        ]);
                        // Allow special events to draw outside the lines
                        special = jQuery.event.special[type] || {
                        };
                        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
                        // Determine event propagation path in advance, per W3C events spec (#9951)
                        // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                            for(; cur; cur = cur.parentNode){
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            // Only add window if we got to document (e.g., not plain obj or detached DOM)
                            if (tmp === (elem.ownerDocument || document1)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
                        }
                        // Fire handlers on the event path
                        i = 0;
                        while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                            lastElement = cur;
                            event.type = i > 1 ? bubbleType : special.bindType || type;
                            // jQuery handler
                            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                            if (handle) handle.apply(cur, data);
                            // Native handler
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (event.result === false) event.preventDefault();
                            }
                        }
                        event.type = type;
                        // If nobody prevented the default action, do it now
                        if (!onlyHandlers && !event.isDefaultPrevented()) {
                            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                            // Don't do default actions on window, that's where global variables be (#6170)
                            {
                                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                                    // Don't re-trigger an onFOO event when we call its FOO() method
                                    tmp = elem[ontype];
                                    if (tmp) elem[ontype] = null;
                                    // Prevent re-triggering of the same event, since we already bubbled it above
                                    jQuery.event.triggered = type;
                                    if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                                    elem[type]();
                                    if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                                    jQuery.event.triggered = undefined;
                                    if (tmp) elem[ontype] = tmp;
                                }
                            }
                        }
                        return event.result;
                    },
                    // Piggyback on a donor event to simulate a different one
                    // Used only for `focus(in | out)` events
                    simulate: function(type, elem, event) {
                        var e = jQuery.extend(new jQuery.Event(), event, {
                            type: type,
                            isSimulated: true
                        });
                        jQuery.event.trigger(e, null, elem);
                    }
                });
                jQuery.fn.extend({
                    trigger: function(type, data) {
                        return this.each(function() {
                            jQuery.event.trigger(type, data, this);
                        });
                    },
                    triggerHandler: function(type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, true);
                    }
                });
                // Support: Firefox <=44
                // Firefox doesn't have focus(in | out) events
                // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
                //
                // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
                // focus(in | out) events fire after focus & blur events,
                // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
                // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
                if (!support1.focusin) jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(orig, fix) {
                    // Attach a single capturing handler on the document while someone wants focusin/focusout
                    var handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                    };
                    jQuery.event.special[fix] = {
                        setup: function() {
                            // Handle: regular nodes (via `this.ownerDocument`), window
                            // (via `this.document`) & document (via `this`).
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                            if (!attaches) doc.addEventListener(orig, handler, true);
                            dataPriv.access(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                dataPriv.remove(doc, fix);
                            } else dataPriv.access(doc, fix, attaches);
                        }
                    };
                });
                var location = window1.location;
                var nonce = {
                    guid: Date.now()
                };
                var rquery = /\?/;
                // Cross-browser xml parsing
                jQuery.parseXML = function(data) {
                    var xml, parserErrorElem;
                    if (!data || typeof data !== "string") return null;
                    // Support: IE 9 - 11 only
                    // IE throws on parseFromString with invalid input.
                    try {
                        xml = new window1.DOMParser().parseFromString(data, "text/xml");
                    } catch (e) {
                    }
                    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
                    if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
                        return el.textContent;
                    }).join("\n") : data));
                    return xml;
                };
                var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (Array.isArray(obj)) // Serialize array item.
                    jQuery.each(obj, function(i, v) {
                        if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
                        add(prefix, v);
                        else // Item is non-scalar (array or object), encode its numeric index.
                        buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                    });
                    else if (!traditional && toType(obj) === "object") // Serialize object item.
                    for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                    else // Serialize scalar item.
                    add(prefix, obj);
                }
                // Serialize an array of form elements or a set of
                // key/values into a query string
                jQuery.param = function(a, traditional) {
                    var prefix, s = [], add = function(key, valueOrFunction) {
                        // If value is a function, invoke it and use its return value
                        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
                    };
                    if (a == null) return "";
                    // If an array was passed in, assume that it is an array of form elements.
                    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
                    jQuery.each(a, function() {
                        add(this.name, this.value);
                    });
                    else // If traditional, encode the "old" way (the way 1.3.2 or older
                    // did it), otherwise encode params recursively.
                    for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
                    // Return the resulting serialization
                    return s.join("&");
                };
                jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            // Can add propHook for "elements" to filter or add form elements
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        }).filter(function() {
                            var type = this.type;
                            // Use .is( ":disabled" ) so that fieldset[disabled] works
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                        }).map(function(_i, elem) {
                            var val1 = jQuery(this).val();
                            if (val1 == null) return null;
                            if (Array.isArray(val1)) return jQuery.map(val1, function(val) {
                                return {
                                    name: elem.name,
                                    value: val.replace(rCRLF, "\r\n")
                                };
                            });
                            return {
                                name: elem.name,
                                value: val1.replace(rCRLF, "\r\n")
                            };
                        }).get();
                    }
                });
                var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
                rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {
                }, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {
                }, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
                allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
                originAnchor = document1.createElement("a");
                originAnchor.href = location.href;
                // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
                function addToPrefiltersOrTransports(structure) {
                    // dataTypeExpression is optional and defaults to "*"
                    return function(dataTypeExpression, func) {
                        if (typeof dataTypeExpression !== "string") {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                        if (isFunction(func)) {
                            // For each dataType in the dataTypeExpression
                            while(dataType = dataTypes[i++])// Prepend if requested
                            if (dataType[0] === "+") {
                                dataType = dataType.slice(1) || "*";
                                (structure[dataType] = structure[dataType] || []).unshift(func);
                            // Otherwise append
                            } else (structure[dataType] = structure[dataType] || []).push(func);
                        }
                    };
                }
                // Base inspection function for prefilters and transports
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {
                    }, seekingTransport = structure === transports;
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                        });
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                // A special extend for ajax options
                // that takes "flat" options (not to be deep extended)
                // Fixes #9887
                function ajaxExtend(target, src) {
                    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {
                    };
                    for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {
                    }))[key] = src[key];
                    if (deep) jQuery.extend(true, target, deep);
                    return target;
                }
                /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
                    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                    // Remove auto dataType and get content-type in the process
                    while(dataTypes[0] === "*"){
                        dataTypes.shift();
                        if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                    // Check if we're dealing with a known content-type
                    if (ct) {
                        for(type in contents)if (contents[type] && contents[type].test(ct)) {
                            dataTypes.unshift(type);
                            break;
                        }
                    }
                    // Check to see if we have a response for the expected dataType
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0];
                    else {
                        // Try convertible dataTypes
                        for(type in responses){
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) firstDataType = type;
                        }
                        // Or just use first one
                        finalDataType = finalDataType || firstDataType;
                    }
                    // If we found a dataType
                    // We add the dataType to the list if needed
                    // and return the corresponding response
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                        return responses[finalDataType];
                    }
                }
                /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {
                    }, // Work with a copy of dataTypes in case we need to modify it for conversion
                    dataTypes = s.dataTypes.slice();
                    // Create converters map with lowercased keys
                    if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    // Convert to each sequential dataType
                    while(current){
                        if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                        // Apply the dataFilter if provided
                        if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                        prev = current;
                        current = dataTypes.shift();
                        if (current) {
                            // There's only work to do if current dataType is non-auto
                            if (current === "*") current = prev;
                            else if (prev !== "*" && prev !== current) {
                                // Seek a direct converter
                                conv = converters[prev + " " + current] || converters["* " + current];
                                // If none found, seek a pair
                                if (!conv) for(conv2 in converters){
                                    // If conv2 outputs current
                                    tmp = conv2.split(" ");
                                    if (tmp[1] === current) {
                                        // If prev can be converted to accepted input
                                        conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                        if (conv) {
                                            // Condense equivalence converters
                                            if (conv === true) conv = converters[conv2];
                                            else if (converters[conv2] !== true) {
                                                current = tmp[0];
                                                dataTypes.unshift(tmp[1]);
                                            }
                                            break;
                                        }
                                    }
                                }
                                // Apply converter (if not an equivalence)
                                if (conv !== true) {
                                    // Unless errors are allowed to bubble, catch and return them
                                    if (conv && s.throws) response = conv(response);
                                    else try {
                                        response = conv(response);
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: conv ? e : "No conversion from " + prev + " to " + current
                                        };
                                    }
                                }
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }
                jQuery.extend({
                    // Counter for holding the number of active queries
                    active: 0,
                    // Last-Modified header cache for next request
                    lastModified: {
                    },
                    etag: {
                    },
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: rlocalProtocol.test(location.protocol),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        // Data converters
                        // Keys separate source (or catchall "*") and destination types with a single space
                        converters: {
                            // Convert anything to text
                            "* text": String,
                            // Text to html (true = no transformation)
                            "text html": true,
                            // Evaluate text as a json expression
                            "text json": JSON.parse,
                            // Parse text as xml
                            "text xml": jQuery.parseXML
                        },
                        // For options that shouldn't be deep extended:
                        // you can add your own custom options here if
                        // and when you create one that shouldn't be
                        // deep extended (see ajaxExtend)
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    // Creates a full fledged settings object into target
                    // with both ajaxSettings and settings fields.
                    // If target is omitted, writes into ajaxSettings.
                    ajaxSetup: function(target, settings) {
                        return settings ? // Building a settings object
                        ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
                        ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    // Main method
                    ajax: function(url, options) {
                        // If url is an object, simulate pre-1.5 signature
                        if (typeof url === "object") {
                            options = url;
                            url = undefined;
                        }
                        // Force options to be an object
                        options = options || {
                        };
                        var transport, // URL without anti-cache param
                        cacheURL, // Response headers
                        responseHeadersString, responseHeaders, // timeout handle
                        timeoutTimer, // Url cleanup var
                        urlAnchor, // Request state (becomes false upon send and true upon completion)
                        completed, // To know if global events are to be dispatched
                        fireGlobals, // Loop variable
                        i, // uncached part of the url
                        uncached, // Create the final options object
                        s = jQuery.ajaxSetup({
                        }, options), // Callbacks context
                        callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
                        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
                        deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
                        statusCode = s.statusCode || {
                        }, // Headers (they are sent all at once)
                        requestHeaders = {
                        }, requestHeadersNames = {
                        }, // Default abort message
                        strAbort = "canceled", // Fake xhr
                        jqXHR = {
                            readyState: 0,
                            // Builds headers hashtable if needed
                            getResponseHeader: function(key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {
                                        };
                                        while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return match == null ? null : match.join(", ");
                            },
                            // Raw string
                            getAllResponseHeaders: function() {
                                return completed ? responseHeadersString : null;
                            },
                            // Caches the header
                            setRequestHeader: function(name, value) {
                                if (completed == null) {
                                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            // Overrides response content-type header
                            overrideMimeType: function(type) {
                                if (completed == null) s.mimeType = type;
                                return this;
                            },
                            // Status-dependent callbacks
                            statusCode: function(map) {
                                var code;
                                if (map) {
                                    if (completed) // Execute the appropriate callbacks
                                    jqXHR.always(map[jqXHR.status]);
                                    else // Lazy-add the new callbacks in a way that preserves old ones
                                    for(code in map)statusCode[code] = [
                                        statusCode[code],
                                        map[code]
                                    ];
                                }
                                return this;
                            },
                            // Cancel the request
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) transport.abort(finalText);
                                done(0, finalText);
                                return this;
                            }
                        };
                        // Attach deferreds
                        deferred.promise(jqXHR);
                        // Add protocol if not provided (prefilters might expect it)
                        // Handle falsy url in the settings object (#10093: consistency with old signature)
                        // We also use the url parameter if available
                        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                        // Alias method option to type as per ticket #12004
                        s.type = options.method || options.type || s.method || s.type;
                        // Extract dataTypes list
                        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                            ""
                        ];
                        // A cross-domain request is in order when the origin doesn't match the current origin.
                        if (s.crossDomain == null) {
                            urlAnchor = document1.createElement("a");
                            // Support: IE <=8 - 11, Edge 12 - 15
                            // IE throws exception on accessing the href property if url is malformed,
                            // e.g. http://example.com:80x/
                            try {
                                urlAnchor.href = s.url;
                                // Support: IE <=8 - 11 only
                                // Anchor's host property isn't correctly set when s.url is relative
                                urlAnchor.href = urlAnchor.href;
                                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                            } catch (e) {
                                // If there is an error parsing the URL, assume it is crossDomain,
                                // it can be rejected by the transport if it is invalid
                                s.crossDomain = true;
                            }
                        }
                        // Convert data if not already a string
                        if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
                        // Apply prefilters
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        // If request was aborted inside a prefilter, stop there
                        if (completed) return jqXHR;
                        // We can fire global events as of now if asked to
                        // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
                        fireGlobals = jQuery.event && s.global;
                        // Watch for a new set of requests
                        if (fireGlobals && (jQuery.active++) === 0) jQuery.event.trigger("ajaxStart");
                        // Uppercase the type
                        s.type = s.type.toUpperCase();
                        // Determine if request has content
                        s.hasContent = !rnoContent.test(s.type);
                        // Save the URL in case we're toying with the If-Modified-Since
                        // and/or If-None-Match header later on
                        // Remove hash to simplify url manipulation
                        cacheURL = s.url.replace(rhash, "");
                        // More options handling for requests with no content
                        if (!s.hasContent) {
                            // Remember the hash so we can put it back
                            uncached = s.url.slice(cacheURL.length);
                            // If data is available and should be processed, append data to url
                            if (s.data && (s.processData || typeof s.data === "string")) {
                                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                // #9682: remove data so that it's not used in an eventual retry
                                delete s.data;
                            }
                            // Add or update anti-cache param if needed
                            if (s.cache === false) {
                                cacheURL = cacheURL.replace(rantiCache, "$1");
                                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                            }
                            // Put hash and anti-cache on the URL that will be requested (gh-1732)
                            s.url = cacheURL + uncached;
                        // Change '%20' to '+' if this is encoded form body content (gh-2658)
                        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
                        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                        // Set the correct header, if data is being sent
                        if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                        // Set the Accepts header for the server, depending on the dataType
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                        // Check for headers option
                        for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
                        // Allow custom headers/mimetypes and early abort
                        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
                        return jqXHR.abort();
                        // Aborting is no longer a cancellation
                        strAbort = "abort";
                        // Install callbacks on deferreds
                        completeDeferred.add(s.complete);
                        jqXHR.done(s.success);
                        jqXHR.fail(s.error);
                        // Get transport
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        // If no transport, we auto-abort
                        if (!transport) done(-1, "No Transport");
                        else {
                            jqXHR.readyState = 1;
                            // Send global event
                            if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                                jqXHR,
                                s
                            ]);
                            // If request was aborted inside ajaxSend, stop there
                            if (completed) return jqXHR;
                            // Timeout
                            if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                                jqXHR.abort("timeout");
                            }, s.timeout);
                            try {
                                completed = false;
                                transport.send(requestHeaders, done);
                            } catch (e) {
                                // Rethrow post-completion exceptions
                                if (completed) throw e;
                                // Propagate others as results
                                done(-1, e);
                            }
                        }
                        // Callback for when everything is done
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            // Ignore repeat invocations
                            if (completed) return;
                            completed = true;
                            // Clear timeout if it exists
                            if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                            // Dereference transport for early garbage collection
                            // (no matter how long the jqXHR object will be used)
                            transport = undefined;
                            // Cache response headers
                            responseHeadersString = headers || "";
                            // Set readyState
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            // Determine if successful
                            isSuccess = status >= 200 && status < 300 || status === 304;
                            // Get response data
                            if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                            // Use a noop converter for missing script but not if jsonp
                            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {
                            };
                            // Convert no matter what (that way responseXXX fields are always set)
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            // If successful, handle type chaining
                            if (isSuccess) {
                                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) jQuery.lastModified[cacheURL] = modified;
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) jQuery.etag[cacheURL] = modified;
                                }
                                // if no content
                                if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                                else if (status === 304) statusText = "notmodified";
                                else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            } else {
                                // Extract error from statusText and normalize for non-aborts
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) status = 0;
                                }
                            }
                            // Set data for the fake xhr object
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            // Success/Error
                            if (isSuccess) deferred.resolveWith(callbackContext, [
                                success,
                                statusText,
                                jqXHR
                            ]);
                            else deferred.rejectWith(callbackContext, [
                                jqXHR,
                                statusText,
                                error
                            ]);
                            // Status-dependent callbacks
                            jqXHR.statusCode(statusCode);
                            statusCode = undefined;
                            if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                                jqXHR,
                                s,
                                isSuccess ? success : error
                            ]);
                            // Complete
                            completeDeferred.fireWith(callbackContext, [
                                jqXHR,
                                statusText
                            ]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [
                                    jqXHR,
                                    s
                                ]);
                                // Handle the global AJAX counter
                                if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function(url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function(url, callback) {
                        return jQuery.get(url, undefined, callback, "script");
                    }
                });
                jQuery.each([
                    "get",
                    "post"
                ], function(_i, method) {
                    jQuery[method] = function(url, data, callback, type) {
                        // Shift arguments if data argument was omitted
                        if (isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = undefined;
                        }
                        // The url can be an options object (which then must have .url)
                        return jQuery.ajax(jQuery.extend({
                            url: url,
                            type: method,
                            dataType: type,
                            data: data,
                            success: callback
                        }, jQuery.isPlainObject(url) && url));
                    };
                });
                jQuery.ajaxPrefilter(function(s) {
                    var i;
                    for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
                });
                jQuery._evalUrl = function(url, options, doc) {
                    return jQuery.ajax({
                        url: url,
                        // Make this explicit, since user can override this through ajaxSetup (#11264)
                        type: "GET",
                        dataType: "script",
                        cache: true,
                        async: false,
                        global: false,
                        // Only evaluate the response if it is successful (gh-4126)
                        // dataFilter is not invoked for failure responses, so using it instead
                        // of the default converter is kludgy but it works.
                        converters: {
                            "text script": function() {
                            }
                        },
                        dataFilter: function(response) {
                            jQuery.globalEval(response, options, doc);
                        }
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function(html) {
                        var wrap;
                        if (this[0]) {
                            if (isFunction(html)) html = html.call(this[0]);
                            // The elements to wrap the target around
                            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) wrap.insertBefore(this[0]);
                            wrap.map(function() {
                                var elem = this;
                                while(elem.firstElementChild)elem = elem.firstElementChild;
                                return elem;
                            }).append(this);
                        }
                        return this;
                    },
                    wrapInner: function(html) {
                        if (isFunction(html)) return this.each(function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        });
                        return this.each(function() {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) contents.wrapAll(html);
                            else self.append(html);
                        });
                    },
                    wrap: function(html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each(function(i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        });
                    },
                    unwrap: function(selector) {
                        this.parent(selector).not("body").each(function() {
                            jQuery(this).replaceWith(this.childNodes);
                        });
                        return this;
                    }
                });
                jQuery.expr.pseudos.hidden = function(elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                };
                jQuery.expr.pseudos.visible = function(elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                };
                jQuery.ajaxSettings.xhr = function() {
                    try {
                        return new window1.XMLHttpRequest();
                    } catch (e) {
                    }
                };
                var xhrSuccessStatus = {
                    // File protocol always yields status code 0, assume 200
                    0: 200,
                    // Support: IE <=9 only
                    // #1450: sometimes IE returns 1223 when it should be 204
                    1223: 204
                }, xhrSupported = jQuery.ajaxSettings.xhr();
                support1.cors = !!xhrSupported && "withCredentials" in xhrSupported;
                support1.ajax = xhrSupported = !!xhrSupported;
                jQuery.ajaxTransport(function(options) {
                    var callback, errorCallback;
                    // Cross domain only allowed if supported through XMLHttpRequest
                    if (support1.cors || xhrSupported && !options.crossDomain) return {
                        send: function(headers, complete) {
                            var i, xhr = options.xhr();
                            xhr.open(options.type, options.url, options.async, options.username, options.password);
                            // Apply custom fields if provided
                            if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                            // Override mime type if needed
                            if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                            // X-Requested-With header
                            // For cross-domain requests, seeing as conditions for a preflight are
                            // akin to a jigsaw puzzle, we simply never set it to be sure.
                            // (it can always be set on a per-request basis or even using ajaxSetup)
                            // For same-domain requests, won't change header if already provided.
                            if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                            // Set headers
                            for(i in headers)xhr.setRequestHeader(i, headers[i]);
                            // Callback
                            callback = function(type) {
                                return function() {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                        if (type === "abort") xhr.abort();
                                        else if (type === "error") {
                                            // Support: IE <=9 only
                                            // On a manual native abort, IE9 throws
                                            // errors on any property access that is not readyState
                                            if (typeof xhr.status !== "number") complete(0, "error");
                                            else complete(// File: protocol always yields status 0; see #8605, #14207
                                            xhr.status, xhr.statusText);
                                        } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                };
                            };
                            // Listen to events
                            xhr.onload = callback();
                            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                            // Support: IE 9 only
                            // Use onreadystatechange to replace onabort
                            // to handle uncaught aborts
                            if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                            else xhr.onreadystatechange = function() {
                                // Check readyState before timeout as it changes
                                if (xhr.readyState === 4) // Allow onerror to be called first,
                                // but that will not handle a native abort
                                // Also, save errorCallback to a variable
                                // as xhr.onerror cannot be accessed
                                window1.setTimeout(function() {
                                    if (callback) errorCallback();
                                });
                            };
                            // Create the abort callback
                            callback = callback("abort");
                            try {
                                // Do send the request (this may raise an exception)
                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) {
                                // #14683: Only rethrow if this hasn't been notified as an error yet
                                if (callback) throw e;
                            }
                        },
                        abort: function() {
                            if (callback) callback();
                        }
                    };
                });
                // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
                jQuery.ajaxPrefilter(function(s) {
                    if (s.crossDomain) s.contents.script = false;
                });
                // Install script dataType
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                // Handle cache's special case and crossDomain
                jQuery.ajaxPrefilter("script", function(s) {
                    if (s.cache === undefined) s.cache = false;
                    if (s.crossDomain) s.type = "GET";
                });
                // Bind script tag hack transport
                jQuery.ajaxTransport("script", function(s) {
                    // This transport only deals with cross domain or forced-by-attrs requests
                    if (s.crossDomain || s.scriptAttrs) {
                        var script, callback;
                        return {
                            send: function(_, complete) {
                                script = jQuery("<script>").attr(s.scriptAttrs || {
                                }).prop({
                                    charset: s.scriptCharset,
                                    src: s.url
                                }).on("load error", callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                                });
                                // Use native DOM manipulation to avoid our domManip AJAX trickery
                                document1.head.appendChild(script[0]);
                            },
                            abort: function() {
                                if (callback) callback();
                            }
                        };
                    }
                });
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                // Default jsonp settings
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                        this[callback] = true;
                        return callback;
                    }
                });
                // Detect, normalize options and install callbacks for jsonp requests
                jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
                    // Handle iff the expected data type is "jsonp" or we have a parameter to set
                    if (jsonProp || s.dataTypes[0] === "jsonp") {
                        // Get callback name, remembering preexisting value associated with it
                        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                        // Insert callback into url or form data
                        if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                        else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        // Use data converter to retrieve json after script execution
                        s.converters["script json"] = function() {
                            if (!responseContainer) jQuery.error(callbackName + " was not called");
                            return responseContainer[0];
                        };
                        // Force json dataType
                        s.dataTypes[0] = "json";
                        // Install callback
                        overwritten = window1[callbackName];
                        window1[callbackName] = function() {
                            responseContainer = arguments;
                        };
                        // Clean-up function (fires after converters)
                        jqXHR.always(function() {
                            // If previous value didn't exist - remove it
                            if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                            else window1[callbackName] = overwritten;
                            // Save back as free
                            if (s[callbackName]) {
                                // Make sure that re-using the options doesn't screw things around
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                // Save the callback name for future use
                                oldCallbacks.push(callbackName);
                            }
                            // Call if it was a function and we have a response
                            if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                            responseContainer = overwritten = undefined;
                        });
                        // Delegate to script
                        return "script";
                    }
                });
                // Support: Safari 8 only
                // In Safari 8 documents created via document.implementation.createHTMLDocument
                // collapse sibling forms: the second one becomes a child of the first one.
                // Because of that, this security measure has to be disabled in Safari 8.
                // https://bugs.webkit.org/show_bug.cgi?id=137337
                support1.createHTMLDocument = (function() {
                    var body = document1.implementation.createHTMLDocument("").body;
                    body.innerHTML = "<form></form><form></form>";
                    return body.childNodes.length === 2;
                })();
                // Argument "data" should be string of html
                // context (optional): If specified, the fragment will be created in this context,
                // defaults to document
                // keepScripts (optional): If true, will include scripts passed in the html string
                jQuery.parseHTML = function(data, context, keepScripts) {
                    if (typeof data !== "string") return [];
                    if (typeof context === "boolean") {
                        keepScripts = context;
                        context = false;
                    }
                    var base, parsed, scripts;
                    if (!context) {
                        // Stop scripts or inline event handlers from being executed immediately
                        // by using document.implementation
                        if (support1.createHTMLDocument) {
                            context = document1.implementation.createHTMLDocument("");
                            // Set the base href for the created document
                            // so any parsed elements with URLs
                            // are based on the document's URL (gh-2965)
                            base = context.createElement("base");
                            base.href = document1.location.href;
                            context.head.appendChild(base);
                        } else context = document1;
                    }
                    parsed = rsingleTag.exec(data);
                    scripts = !keepScripts && [];
                    // Single tag
                    if (parsed) return [
                        context.createElement(parsed[1])
                    ];
                    parsed = buildFragment([
                        data
                    ], context, scripts);
                    if (scripts && scripts.length) jQuery(scripts).remove();
                    return jQuery.merge([], parsed.childNodes);
                };
                /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
                    var selector, type, response, self = this, off = url.indexOf(" ");
                    if (off > -1) {
                        selector = stripAndCollapse(url.slice(off));
                        url = url.slice(0, off);
                    }
                    // If it's a function
                    if (isFunction(params)) {
                        // We assume that it's the callback
                        callback = params;
                        params = undefined;
                    // Otherwise, build a param string
                    } else if (params && typeof params === "object") type = "POST";
                    // If we have elements to modify, make the request
                    if (self.length > 0) jQuery.ajax({
                        url: url,
                        // If "type" variable is undefined, then "GET" method will be used.
                        // Make value of this field explicit since
                        // user can override it through ajaxSetup method
                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done(function(responseText) {
                        // Save response for use in complete callback
                        response = arguments;
                        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
                        // Exclude scripts to avoid IE 'Permission Denied' errors
                        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
                        responseText);
                    // If the request succeeds, this function gets "data", "status", "jqXHR"
                    // but they are ignored because response was set above.
                    // If it fails, this function gets "jqXHR", "status", "error"
                    }).always(callback && function(jqXHR, status) {
                        self.each(function() {
                            callback.apply(this, response || [
                                jqXHR.responseText,
                                status,
                                jqXHR
                            ]);
                        });
                    });
                    return this;
                };
                jQuery.expr.pseudos.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, function(fn) {
                        return elem === fn.elem;
                    }).length;
                };
                jQuery.offset = {
                    setOffset: function(elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {
                        };
                        // Set position first, in-case top/left are set even on static elem
                        if (position === "static") elem.style.position = "relative";
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                        // Need to be able to calculate position if either
                        // top or left is auto and position is either absolute or fixed
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        } else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                        options = options.call(elem, i, jQuery.extend({
                        }, curOffset));
                        if (options.top != null) props.top = options.top - curOffset.top + curTop;
                        if (options.left != null) props.left = options.left - curOffset.left + curLeft;
                        if ("using" in options) options.using.call(elem, props);
                        else curElem.css(props);
                    }
                };
                jQuery.fn.extend({
                    // offset() relates an element's border box to the document origin
                    offset: function(options) {
                        // Preserve chaining for setter
                        if (arguments.length) return options === undefined ? this : this.each(function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        });
                        var rect, win, elem = this[0];
                        if (!elem) return;
                        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
                        // Support: IE <=11 only
                        // Running getBoundingClientRect on a
                        // disconnected node in IE throws an error
                        if (!elem.getClientRects().length) return {
                            top: 0,
                            left: 0
                        };
                        // Get document-relative position by adding viewport scroll to viewport-relative gBCR
                        rect = elem.getBoundingClientRect();
                        win = elem.ownerDocument.defaultView;
                        return {
                            top: rect.top + win.pageYOffset,
                            left: rect.left + win.pageXOffset
                        };
                    },
                    // position() relates an element's margin box to its offset parent's padding box
                    // This corresponds to the behavior of CSS absolute positioning
                    position: function() {
                        if (!this[0]) return;
                        var offsetParent, offset, doc, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        // position:fixed elements are offset from the viewport, which itself always has zero offset
                        if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
                        offset = elem.getBoundingClientRect();
                        else {
                            offset = this.offset();
                            // Account for the *real* offset parent, which can be the document or its root element
                            // when a statically positioned element is identified
                            doc = elem.ownerDocument;
                            offsetParent = elem.offsetParent || doc.documentElement;
                            while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                                // Incorporate borders into its offset, since they are outside its content origin
                                parentOffset = jQuery(offsetParent).offset();
                                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                            }
                        }
                        // Subtract parent offsets and element margins
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    // This method will return documentElement in the following cases:
                    // 1) For the element inside the iframe without offsetParent, this method will return
                    //    documentElement of the parent window
                    // 2) For the hidden or detached element
                    // 3) For body or html element, i.e. in case of the html node - it will return itself
                    //
                    // but those exceptions were never presented as a real life use-cases
                    // and might be considered as more preferable results.
                    //
                    // This logic, however, is not guaranteed and can change at any point in the future
                    offsetParent: function() {
                        return this.map(function() {
                            var offsetParent = this.offsetParent;
                            while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                            return offsetParent || documentElement;
                        });
                    }
                });
                // Create scrollLeft and scrollTop methods
                jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function(val2) {
                        return access(this, function(elem, method, val) {
                            // Coalesce documents and windows
                            var win;
                            if (isWindow(elem)) win = elem;
                            else if (elem.nodeType === 9) win = elem.defaultView;
                            if (val === undefined) return win ? win[prop] : elem[method];
                            if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                            else elem[method] = val;
                        }, method, val2, arguments.length);
                    };
                });
                // Support: Safari <=7 - 9.1, Chrome <=37 - 49
                // Add the top/left cssHooks using jQuery.fn.position
                // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
                // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
                // getComputedStyle returns percent when specified for top/left/bottom/right;
                // rather than make the css module depend on the offset module, just check for it here
                jQuery.each([
                    "top",
                    "left"
                ], function(_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support1.pixelPosition, function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            // If curCSS returns percentage, fallback to offset
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    });
                });
                // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
                jQuery.each({
                    Height: "height",
                    Width: "width"
                }, function(name, type1) {
                    jQuery.each({
                        padding: "inner" + name,
                        content: type1,
                        "": "outer" + name
                    }, function(defaultExtra, funcName) {
                        // Margin is only for outerHeight, outerWidth
                        jQuery.fn[funcName] = function(margin, value8) {
                            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value8 === true ? "margin" : "border");
                            return access(this, function(elem, type, value) {
                                var doc;
                                if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                                // Get document width or height
                                if (elem.nodeType === 9) {
                                    doc = elem.documentElement;
                                    // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                                    // whichever is greatest
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                                jQuery.css(elem, type, extra) : // Set width or height on the element
                                jQuery.style(elem, type, value, extra);
                            }, type1, chainable ? margin : undefined, chainable);
                        };
                    });
                });
                jQuery.each([
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend"
                ], function(_i, type) {
                    jQuery.fn[type] = function(fn) {
                        return this.on(type, fn);
                    };
                });
                jQuery.fn.extend({
                    bind: function(types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function(types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function(selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function(selector, types, fn) {
                        // ( namespace ) or ( selector, types [, fn] )
                        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    },
                    hover: function(fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    }
                });
                jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
                    // Handle event binding
                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                });
                // Support: Android <=4.0 only
                // Make sure we trim BOM and NBSP
                var rtrim1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                // Bind a function to a context, optionally partially applying any
                // arguments.
                // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
                // However, it is not slated for removal any time soon
                jQuery.proxy = function(fn, context) {
                    var tmp, args, proxy;
                    if (typeof context === "string") {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    }
                    // Quick check to determine if target is callable, in the spec
                    // this throws a TypeError, but we will just return undefined.
                    if (!isFunction(fn)) return undefined;
                    // Simulated bind
                    args = slice1.call(arguments, 2);
                    proxy = function() {
                        return fn.apply(context || this, args.concat(slice1.call(arguments)));
                    };
                    // Set the guid of unique handler to the same of original handler, so it can be removed
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                };
                jQuery.holdReady = function(hold) {
                    if (hold) jQuery.readyWait++;
                    else jQuery.ready(true);
                };
                jQuery.isArray = Array.isArray;
                jQuery.parseJSON = JSON.parse;
                jQuery.nodeName = nodeName1;
                jQuery.isFunction = isFunction;
                jQuery.isWindow = isWindow;
                jQuery.camelCase = camelCase;
                jQuery.type = toType;
                jQuery.now = Date.now;
                jQuery.isNumeric = function(obj) {
                    // As of jQuery 3.0, isNumeric is limited to
                    // strings and numbers (primitives or objects)
                    // that can be coerced to finite numbers (gh-2662)
                    var type = jQuery.type(obj);
                    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
                    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                    // subtraction forces infinities to NaN
                    !isNaN(obj - parseFloat(obj));
                };
                jQuery.trim = function(text) {
                    return text == null ? "" : (text + "").replace(rtrim1, "");
                };
                __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return jQuery;
                }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                var // Map over jQuery in case of overwrite
                _jQuery = window1.jQuery, // Map over the $ in case of overwrite
                _$ = window1.$;
                jQuery.noConflict = function(deep) {
                    if (window1.$ === jQuery) window1.$ = _$;
                    if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
                    return jQuery;
                };
                // Expose jQuery and $ identifiers, even in AMD
                // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
                // and CommonJS for browser emulators (#13566)
                if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
                return jQuery;
            });
        /***/ },
        /***/ "./node_modules/jspsych/jspsych.js": ()=>{
            window.jsPsych = (function() {
                var core = {
                };
                core.version = function() {
                    return "6.3.0";
                };
                //
                // private variables
                //
                // options
                var opts = {
                };
                // experiment timeline
                var timeline;
                // flow control
                var global_trial_index = 0;
                var current_trial = {
                };
                var current_trial_finished = false;
                // target DOM element
                var DOM_container;
                var DOM_target;
                // time that the experiment began
                var exp_start_time;
                // is the experiment paused?
                var paused = false;
                var waiting = false;
                // done loading?
                var loaded = false;
                var loadfail = false;
                // is the page retrieved directly via file:// protocol (true) or hosted on a server (false)?
                var file_protocol = false;
                // storing a single webaudio context to prevent problems with multiple inits
                // of jsPsych
                core.webaudio_context = null;
                // temporary patch for Safari
                if (typeof window !== 'undefined' && window.hasOwnProperty('webkitAudioContext') && !window.hasOwnProperty('AudioContext')) window.AudioContext = webkitAudioContext;
                // end patch
                core.webaudio_context = typeof window !== 'undefined' && typeof window.AudioContext !== 'undefined' ? new AudioContext() : null;
                // enumerated variables for special parameter types
                core.ALL_KEYS = 'allkeys';
                core.NO_KEYS = 'none';
                //
                // public methods
                //
                core.init = function(options) {
                    function init() {
                        if (typeof options.timeline === 'undefined') console.error('No timeline declared in jsPsych.init. Cannot start experiment.');
                        if (options.timeline.length == 0) console.error('No trials have been added to the timeline (the timeline is an empty array). Cannot start experiment.');
                        // reset variables
                        timeline = null;
                        global_trial_index = 0;
                        current_trial = {
                        };
                        current_trial_finished = false;
                        paused = false;
                        waiting = false;
                        loaded = false;
                        loadfail = false;
                        file_protocol = false;
                        jsPsych.data.reset();
                        var defaults = {
                            'display_element': undefined,
                            'on_finish': function(data) {
                                return undefined;
                            },
                            'on_trial_start': function(trial) {
                                return undefined;
                            },
                            'on_trial_finish': function() {
                                return undefined;
                            },
                            'on_data_update': function(data) {
                                return undefined;
                            },
                            'on_interaction_data_update': function(data) {
                                return undefined;
                            },
                            'on_close': function() {
                                return undefined;
                            },
                            'use_webaudio': true,
                            'exclusions': {
                            },
                            'show_progress_bar': false,
                            'message_progress_bar': 'Completion Progress',
                            'auto_update_progress_bar': true,
                            'default_iti': 0,
                            'minimum_valid_rt': 0,
                            'experiment_width': null,
                            'override_safe_mode': false,
                            'case_sensitive_responses': false,
                            'extensions': []
                        };
                        // detect whether page is running in browser as a local file, and if so, disable web audio and video preloading to prevent CORS issues
                        if (window.location.protocol == 'file:' && (options.override_safe_mode === false || typeof options.override_safe_mode == 'undefined')) {
                            options.use_webaudio = false;
                            file_protocol = true;
                            console.warn("jsPsych detected that it is running via the file:// protocol and not on a web server. To prevent issues with cross-origin requests, Web Audio and video preloading have been disabled. If you would like to override this setting, you can set 'override_safe_mode' to 'true' in jsPsych.init. For more information, see: https://www.jspsych.org/overview/running-experiments");
                        }
                        // override default options if user specifies an option
                        opts = Object.assign({
                        }, defaults, options);
                        // set DOM element where jsPsych will render content
                        // if undefined, then jsPsych will use the <body> tag and the entire page
                        if (typeof opts.display_element == 'undefined') {
                            // check if there is a body element on the page
                            var body = document.querySelector('body');
                            if (body === null) document.documentElement.appendChild(document.createElement('body'));
                            // using the full page, so we need the HTML element to
                            // have 100% height, and body to be full width and height with
                            // no margin
                            document.querySelector('html').style.height = '100%';
                            document.querySelector('body').style.margin = '0px';
                            document.querySelector('body').style.height = '100%';
                            document.querySelector('body').style.width = '100%';
                            opts.display_element = document.querySelector('body');
                        } else {
                            // make sure that the display element exists on the page
                            var display;
                            if (opts.display_element instanceof Element) var display = opts.display_element;
                            else var display = document.querySelector('#' + opts.display_element);
                            if (display === null) console.error('The display_element specified in jsPsych.init() does not exist in the DOM.');
                            else opts.display_element = display;
                        }
                        opts.display_element.innerHTML = '<div class="jspsych-content-wrapper"><div id="jspsych-content"></div></div>';
                        DOM_container = opts.display_element;
                        DOM_target = document.querySelector('#jspsych-content');
                        // add tabIndex attribute to scope event listeners
                        opts.display_element.tabIndex = 0;
                        // add CSS class to DOM_target
                        if (opts.display_element.className.indexOf('jspsych-display-element') == -1) opts.display_element.className += ' jspsych-display-element';
                        DOM_target.className += 'jspsych-content';
                        // set experiment_width if not null
                        if (opts.experiment_width !== null) DOM_target.style.width = opts.experiment_width + "px";
                        // create experiment timeline
                        timeline = new TimelineNode({
                            timeline: opts.timeline
                        });
                        // initialize audio context based on options and browser capabilities
                        jsPsych.pluginAPI.initAudio();
                        // below code resets event listeners that may have lingered from
                        // a previous incomplete experiment loaded in same DOM.
                        jsPsych.pluginAPI.reset(opts.display_element);
                        // create keyboard event listeners
                        jsPsych.pluginAPI.createKeyboardEventListeners(opts.display_element);
                        // create listeners for user browser interaction
                        jsPsych.data.createInteractionListeners();
                        // add event for closing window
                        window.addEventListener('beforeunload', opts.on_close);
                        // check exclusions before continuing
                        checkExclusions(opts.exclusions, function() {
                            // success! user can continue...
                            // start experiment
                            loadExtensions();
                        }, function() {
                        // fail. incompatible user.
                        });
                        function loadExtensions() {
                            // run the .initialize method of any extensions that are in use
                            // these should return a Promise to indicate when loading is complete
                            if (opts.extensions.length == 0) startExperiment();
                            else {
                                var loaded_extensions = 0;
                                for(var i = 0; i < opts.extensions.length; i++){
                                    var ext_params = opts.extensions[i].params;
                                    if (!ext_params) ext_params = {
                                    };
                                    jsPsych.extensions[opts.extensions[i].type].initialize(ext_params).then(()=>{
                                        loaded_extensions++;
                                        if (loaded_extensions == opts.extensions.length) startExperiment();
                                    }).catch((error_message)=>{
                                        console.error(error_message);
                                    });
                                }
                            }
                        }
                    }
                    // execute init() when the document is ready
                    if (document.readyState === "complete") init();
                    else window.addEventListener("load", init);
                };
                core.progress = function() {
                    var percent_complete = typeof timeline == 'undefined' ? 0 : timeline.percentComplete();
                    var obj = {
                        "total_trials": typeof timeline == 'undefined' ? undefined : timeline.length(),
                        "current_trial_global": global_trial_index,
                        "percent_complete": percent_complete
                    };
                    return obj;
                };
                core.startTime = function() {
                    return exp_start_time;
                };
                core.totalTime = function() {
                    if (typeof exp_start_time == 'undefined') return 0;
                    return new Date().getTime() - exp_start_time.getTime();
                };
                core.getDisplayElement = function() {
                    return DOM_target;
                };
                core.getDisplayContainerElement = function() {
                    return DOM_container;
                };
                core.finishTrial = function(data) {
                    if (current_trial_finished) return;
                    current_trial_finished = true;
                    // remove any CSS classes that were added to the DOM via css_classes parameter
                    if (typeof current_trial.css_classes !== 'undefined' && Array.isArray(current_trial.css_classes)) DOM_target.classList.remove(...current_trial.css_classes);
                    // write the data from the trial
                    data = typeof data == 'undefined' ? {
                    } : data;
                    jsPsych.data.write(data);
                    // get back the data with all of the defaults in
                    var trial_data = jsPsych.data.get().filter({
                        trial_index: global_trial_index
                    });
                    // for trial-level callbacks, we just want to pass in a reference to the values
                    // of the DataCollection, for easy access and editing.
                    var trial_data_values = trial_data.values()[0];
                    if (typeof current_trial.save_trial_parameters == 'object') {
                        var keys = Object.keys(current_trial.save_trial_parameters);
                        for(var i = 0; i < keys.length; i++){
                            var key_val = current_trial.save_trial_parameters[keys[i]];
                            if (key_val === true) {
                                if (typeof current_trial[keys[i]] == 'undefined') console.warn(`Invalid parameter specified in save_trial_parameters. Trial has no property called "${keys[i]}".`);
                                else if (typeof current_trial[keys[i]] == 'function') trial_data_values[keys[i]] = current_trial[keys[i]].toString();
                                else trial_data_values[keys[i]] = current_trial[keys[i]];
                            }
                            if (key_val === false) // we don't allow internal_node_id or trial_index to be deleted because it would break other things
                            {
                                if (keys[i] !== 'internal_node_id' && keys[i] !== 'trial_index') delete trial_data_values[keys[i]];
                            }
                        }
                    }
                    // handle extension callbacks
                    if (Array.isArray(current_trial.extensions)) for(var i = 0; i < current_trial.extensions.length; i++){
                        var ext_data_values = jsPsych.extensions[current_trial.extensions[i].type].on_finish(current_trial.extensions[i].params);
                        Object.assign(trial_data_values, ext_data_values);
                    }
                    // about to execute lots of callbacks, so switch context.
                    jsPsych.internal.call_immediate = true;
                    // handle callback at plugin level
                    if (typeof current_trial.on_finish === 'function') current_trial.on_finish(trial_data_values);
                    // handle callback at whole-experiment level
                    opts.on_trial_finish(trial_data_values);
                    // after the above callbacks are complete, then the data should be finalized
                    // for this trial. call the on_data_update handler, passing in the same
                    // data object that just went through the trial's finish handlers.
                    opts.on_data_update(trial_data_values);
                    // done with callbacks
                    jsPsych.internal.call_immediate = false;
                    // wait for iti
                    if (current_trial.post_trial_gap, typeof current_trial.post_trial_gap === 'undefined') {
                        if (opts.default_iti > 0) setTimeout(nextTrial, opts.default_iti);
                        else nextTrial();
                    } else if (current_trial.post_trial_gap > 0) setTimeout(nextTrial, current_trial.post_trial_gap);
                    else nextTrial();
                };
                core.endExperiment = function(end_message) {
                    timeline.end_message = end_message;
                    timeline.end();
                    jsPsych.pluginAPI.cancelAllKeyboardResponses();
                    jsPsych.pluginAPI.clearAllTimeouts();
                    core.finishTrial();
                };
                core.endCurrentTimeline = function() {
                    timeline.endActiveNode();
                };
                core.currentTrial = function() {
                    return current_trial;
                };
                core.initSettings = function() {
                    return opts;
                };
                core.currentTimelineNodeID = function() {
                    return timeline.activeID();
                };
                core.timelineVariable = function(varname, immediate) {
                    if (typeof immediate == 'undefined') immediate = false;
                    if (jsPsych.internal.call_immediate || immediate === true) return timeline.timelineVariable(varname);
                    else return function() {
                        return timeline.timelineVariable(varname);
                    };
                };
                core.allTimelineVariables = function() {
                    return timeline.allTimelineVariables();
                };
                core.addNodeToEndOfTimeline = function(new_timeline, preload_callback) {
                    timeline.insert(new_timeline);
                };
                core.pauseExperiment = function() {
                    paused = true;
                };
                core.resumeExperiment = function() {
                    paused = false;
                    if (waiting) {
                        waiting = false;
                        nextTrial();
                    }
                };
                core.loadFail = function(message) {
                    message = message || '<p>The experiment failed to load.</p>';
                    loadfail = true;
                    DOM_target.innerHTML = message;
                };
                core.getSafeModeStatus = function() {
                    return file_protocol;
                };
                function TimelineNode(parameters1, parent, relativeID) {
                    // a unique ID for this node, relative to the parent
                    var relative_id;
                    // store the parent for this node
                    var parent_node;
                    // parameters for the trial if the node contains a trial
                    var trial_parameters;
                    // parameters for nodes that contain timelines
                    var timeline_parameters;
                    // stores trial information on a node that contains a timeline
                    // used for adding new trials
                    var node_trial_data;
                    // track progress through the node
                    var progress = {
                        current_location: -1,
                        current_variable_set: 0,
                        current_repetition: 0,
                        current_iteration: 0,
                        done: false
                    };
                    // reference to self
                    var self = this;
                    // recursively get the next trial to run.
                    // if this node is a leaf (trial), then return the trial.
                    // otherwise, recursively find the next trial in the child timeline.
                    this.trial = function() {
                        if (typeof timeline_parameters == 'undefined') // returns a clone of the trial_parameters to
                        // protect functions.
                        return jsPsych.utils.deepCopy(trial_parameters);
                        else {
                            if (progress.current_location >= timeline_parameters.timeline.length) return null;
                            else return timeline_parameters.timeline[progress.current_location].trial();
                        }
                    };
                    this.markCurrentTrialComplete = function() {
                        if (typeof timeline_parameters == 'undefined') progress.done = true;
                        else timeline_parameters.timeline[progress.current_location].markCurrentTrialComplete();
                    };
                    this.nextRepetiton = function() {
                        this.setTimelineVariablesOrder();
                        progress.current_location = -1;
                        progress.current_variable_set = 0;
                        progress.current_repetition++;
                        for(var i = 0; i < timeline_parameters.timeline.length; i++)timeline_parameters.timeline[i].reset();
                    };
                    // set the order for going through the timeline variables array
                    this.setTimelineVariablesOrder = function() {
                        // check to make sure this node has variables
                        if (typeof timeline_parameters === 'undefined' || typeof timeline_parameters.timeline_variables === 'undefined') return;
                        var order = [];
                        for(var i = 0; i < timeline_parameters.timeline_variables.length; i++)order.push(i);
                        if (typeof timeline_parameters.sample !== 'undefined') {
                            if (timeline_parameters.sample.type == 'custom') order = timeline_parameters.sample.fn(order);
                            else if (timeline_parameters.sample.type == 'with-replacement') order = jsPsych.randomization.sampleWithReplacement(order, timeline_parameters.sample.size, timeline_parameters.sample.weights);
                            else if (timeline_parameters.sample.type == 'without-replacement') order = jsPsych.randomization.sampleWithoutReplacement(order, timeline_parameters.sample.size);
                            else if (timeline_parameters.sample.type == 'fixed-repetitions') order = jsPsych.randomization.repeat(order, timeline_parameters.sample.size, false);
                            else if (timeline_parameters.sample.type == 'alternate-groups') order = jsPsych.randomization.shuffleAlternateGroups(timeline_parameters.sample.groups, timeline_parameters.sample.randomize_group_order);
                            else console.error('Invalid type in timeline sample parameters. Valid options for type are "custom", "with-replacement", "without-replacement", "fixed-repetitions", and "alternate-groups"');
                        }
                        if (timeline_parameters.randomize_order) order = jsPsych.randomization.shuffle(order);
                        progress.order = order;
                    };
                    // next variable set
                    this.nextSet = function() {
                        progress.current_location = -1;
                        progress.current_variable_set++;
                        for(var i = 0; i < timeline_parameters.timeline.length; i++)timeline_parameters.timeline[i].reset();
                    };
                    // update the current trial node to be completed
                    // returns true if the node is complete after advance (all subnodes are also complete)
                    // returns false otherwise
                    this.advance = function() {
                        // first check to see if done
                        if (progress.done) return true;
                        // if node has not started yet (progress.current_location == -1),
                        // then try to start the node.
                        if (progress.current_location == -1) {
                            // check for on_timeline_start and conditonal function on nodes with timelines
                            if (typeof timeline_parameters !== 'undefined') {
                                // only run the conditional function if this is the first repetition of the timeline when
                                // repetitions > 1, and only when on the first variable set
                                if (typeof timeline_parameters.conditional_function !== 'undefined' && progress.current_repetition == 0 && progress.current_variable_set == 0) {
                                    jsPsych.internal.call_immediate = true;
                                    var conditional_result = timeline_parameters.conditional_function();
                                    jsPsych.internal.call_immediate = false;
                                    // if the conditional_function() returns false, then the timeline
                                    // doesn't run and is marked as complete.
                                    if (conditional_result == false) {
                                        progress.done = true;
                                        return true;
                                    }
                                }
                                // if we reach this point then the node has its own timeline and will start
                                // so we need to check if there is an on_timeline_start function if we are on the first variable set
                                if (typeof timeline_parameters.on_timeline_start !== 'undefined' && progress.current_variable_set == 0) timeline_parameters.on_timeline_start();
                            }
                            // if we reach this point, then either the node doesn't have a timeline of the 
                            // conditional function returned true and it can start
                            progress.current_location = 0;
                            // call advance again on this node now that it is pointing to a new location
                            return this.advance();
                        }
                        // if this node has a timeline, propogate down to the current trial.
                        if (typeof timeline_parameters !== 'undefined') {
                            var have_node_to_run = false;
                            // keep incrementing the location in the timeline until one of the nodes reached is incomplete
                            while(progress.current_location < timeline_parameters.timeline.length && have_node_to_run == false){
                                // check to see if the node currently pointed at is done
                                var target_complete = timeline_parameters.timeline[progress.current_location].advance();
                                if (!target_complete) {
                                    have_node_to_run = true;
                                    return false;
                                } else progress.current_location++;
                            }
                            // if we've reached the end of the timeline (which, if the code is here, we have)
                            // there are a few steps to see what to do next...
                            // first, check the timeline_variables to see if we need to loop through again
                            // with a new set of variables
                            if (progress.current_variable_set < progress.order.length - 1) {
                                // reset the progress of the node to be with the new set
                                this.nextSet();
                                // then try to advance this node again.
                                return this.advance();
                            } else if (progress.current_repetition < timeline_parameters.repetitions - 1) {
                                this.nextRepetiton();
                                // check to see if there is an on_timeline_finish function
                                if (typeof timeline_parameters.on_timeline_finish !== 'undefined') timeline_parameters.on_timeline_finish();
                                return this.advance();
                            } else {
                                // check to see if there is an on_timeline_finish function
                                if (typeof timeline_parameters.on_timeline_finish !== 'undefined') timeline_parameters.on_timeline_finish();
                                // if we're all done with the repetitions, check if there is a loop function.
                                if (typeof timeline_parameters.loop_function !== 'undefined') {
                                    jsPsych.internal.call_immediate = true;
                                    if (timeline_parameters.loop_function(this.generatedData())) {
                                        this.reset();
                                        jsPsych.internal.call_immediate = false;
                                        return parent_node.advance();
                                    } else {
                                        progress.done = true;
                                        jsPsych.internal.call_immediate = false;
                                        return true;
                                    }
                                }
                            }
                            // no more loops on this timeline, we're done!
                            progress.done = true;
                            return true;
                        }
                    };
                    // check the status of the done flag
                    this.isComplete = function() {
                        return progress.done;
                    };
                    // getter method for timeline variables
                    this.getTimelineVariableValue = function(variable_name) {
                        if (typeof timeline_parameters == 'undefined') return undefined;
                        var v = timeline_parameters.timeline_variables[progress.order[progress.current_variable_set]][variable_name];
                        return v;
                    };
                    // recursive upward search for timeline variables
                    this.findTimelineVariable = function(variable_name) {
                        var v = this.getTimelineVariableValue(variable_name);
                        if (typeof v == 'undefined') {
                            if (typeof parent_node !== 'undefined') return parent_node.findTimelineVariable(variable_name);
                            else return undefined;
                        } else return v;
                    };
                    // recursive downward search for active trial to extract timeline variable
                    this.timelineVariable = function(variable_name) {
                        if (typeof timeline_parameters == 'undefined') return this.findTimelineVariable(variable_name);
                        else {
                            // if progress.current_location is -1, then the timeline variable is being evaluated
                            // in a function that runs prior to the trial starting, so we should treat that trial
                            // as being the active trial for purposes of finding the value of the timeline variable
                            var loc = Math.max(0, progress.current_location);
                            // if loc is greater than the number of elements on this timeline, then the timeline
                            // variable is being evaluated in a function that runs after the trial on the timeline
                            // are complete but before advancing to the next (like a loop_function).
                            // treat the last active trial as the active trial for this purpose.
                            if (loc == timeline_parameters.timeline.length) loc = loc - 1;
                            // now find the variable
                            return timeline_parameters.timeline[loc].timelineVariable(variable_name);
                        }
                    };
                    // recursively get all the timeline variables for this trial
                    this.allTimelineVariables = function() {
                        var all_tvs = this.allTimelineVariablesNames();
                        var all_tvs_vals = {
                        };
                        for(var i = 0; i < all_tvs.length; i++)all_tvs_vals[all_tvs[i]] = this.timelineVariable(all_tvs[i]);
                        return all_tvs_vals;
                    };
                    // helper to get all the names at this stage.
                    this.allTimelineVariablesNames = function(so_far) {
                        if (typeof so_far == 'undefined') so_far = [];
                        if (typeof timeline_parameters !== 'undefined') {
                            so_far = so_far.concat(Object.keys(timeline_parameters.timeline_variables[progress.order[progress.current_variable_set]]));
                            // if progress.current_location is -1, then the timeline variable is being evaluated
                            // in a function that runs prior to the trial starting, so we should treat that trial
                            // as being the active trial for purposes of finding the value of the timeline variable
                            var loc = Math.max(0, progress.current_location);
                            // if loc is greater than the number of elements on this timeline, then the timeline
                            // variable is being evaluated in a function that runs after the trial on the timeline
                            // are complete but before advancing to the next (like a loop_function).
                            // treat the last active trial as the active trial for this purpose.
                            if (loc == timeline_parameters.timeline.length) loc = loc - 1;
                            // now find the variable
                            return timeline_parameters.timeline[loc].allTimelineVariablesNames(so_far);
                        }
                        if (typeof timeline_parameters == 'undefined') return so_far;
                    };
                    // recursively get the number of **trials** contained in the timeline
                    // assuming that while loops execute exactly once and if conditionals
                    // always run
                    this.length = function() {
                        var length = 0;
                        if (typeof timeline_parameters !== 'undefined') for(var i = 0; i < timeline_parameters.timeline.length; i++)length += timeline_parameters.timeline[i].length();
                        else return 1;
                        return length;
                    };
                    // return the percentage of trials completed, grouped at the first child level
                    // counts a set of trials as complete when the child node is done
                    this.percentComplete = function() {
                        var total_trials = this.length();
                        var completed_trials = 0;
                        for(var i = 0; i < timeline_parameters.timeline.length; i++)if (timeline_parameters.timeline[i].isComplete()) completed_trials += timeline_parameters.timeline[i].length();
                        return completed_trials / total_trials * 100;
                    };
                    // resets the node and all subnodes to original state
                    // but increments the current_iteration counter
                    this.reset = function() {
                        progress.current_location = -1;
                        progress.current_repetition = 0;
                        progress.current_variable_set = 0;
                        progress.current_iteration++;
                        progress.done = false;
                        this.setTimelineVariablesOrder();
                        if (typeof timeline_parameters != 'undefined') for(var i = 0; i < timeline_parameters.timeline.length; i++)timeline_parameters.timeline[i].reset();
                    };
                    // mark this node as finished
                    this.end = function() {
                        progress.done = true;
                    };
                    // recursively end whatever sub-node is running the current trial
                    this.endActiveNode = function() {
                        if (typeof timeline_parameters == 'undefined') {
                            this.end();
                            parent_node.end();
                        } else timeline_parameters.timeline[progress.current_location].endActiveNode();
                    };
                    // get a unique ID associated with this node
                    // the ID reflects the current iteration through this node.
                    this.ID = function() {
                        var id = "";
                        if (typeof parent_node == 'undefined') return "0." + progress.current_iteration;
                        else {
                            id += parent_node.ID() + "-";
                            id += relative_id + "." + progress.current_iteration;
                            return id;
                        }
                    };
                    // get the ID of the active trial
                    this.activeID = function() {
                        if (typeof timeline_parameters == 'undefined') return this.ID();
                        else return timeline_parameters.timeline[progress.current_location].activeID();
                    };
                    // get all the data generated within this node
                    this.generatedData = function() {
                        return jsPsych.data.getDataByTimelineNode(this.ID());
                    };
                    // get all the trials of a particular type
                    this.trialsOfType = function(type) {
                        if (typeof timeline_parameters == 'undefined') {
                            if (trial_parameters.type == type) return trial_parameters;
                            else return [];
                        } else {
                            var trials = [];
                            for(var i = 0; i < timeline_parameters.timeline.length; i++){
                                var t = timeline_parameters.timeline[i].trialsOfType(type);
                                trials = trials.concat(t);
                            }
                            return trials;
                        }
                    };
                    // add new trials to end of this timeline
                    this.insert = function(parameters) {
                        if (typeof timeline_parameters == 'undefined') console.error('Cannot add new trials to a trial-level node.');
                        else timeline_parameters.timeline.push(new TimelineNode(Object.assign({
                        }, node_trial_data, parameters), self, timeline_parameters.timeline.length));
                    };
                    // constructor
                    var _construct = function() {
                        // store a link to the parent of this node
                        parent_node = parent;
                        // create the ID for this node
                        if (typeof parent == 'undefined') relative_id = 0;
                        else relative_id = relativeID;
                        // check if there is a timeline parameter
                        // if there is, then this node has its own timeline
                        if (typeof parameters1.timeline !== 'undefined' || typeof jsPsych.plugins[trial_type] == 'function') {
                            // create timeline properties
                            timeline_parameters = {
                                timeline: [],
                                loop_function: parameters1.loop_function,
                                conditional_function: parameters1.conditional_function,
                                sample: parameters1.sample,
                                randomize_order: typeof parameters1.randomize_order == 'undefined' ? false : parameters1.randomize_order,
                                repetitions: typeof parameters1.repetitions == 'undefined' ? 1 : parameters1.repetitions,
                                timeline_variables: typeof parameters1.timeline_variables == 'undefined' ? [
                                    {
                                    }
                                ] : parameters1.timeline_variables,
                                on_timeline_finish: parameters1.on_timeline_finish,
                                on_timeline_start: parameters1.on_timeline_start
                            };
                            self.setTimelineVariablesOrder();
                            // extract all of the node level data and parameters
                            // but remove all of the timeline-level specific information
                            // since this will be used to copy things down hierarchically
                            var node_data = Object.assign({
                            }, parameters1);
                            delete node_data.timeline;
                            delete node_data.conditional_function;
                            delete node_data.loop_function;
                            delete node_data.randomize_order;
                            delete node_data.repetitions;
                            delete node_data.timeline_variables;
                            delete node_data.sample;
                            delete node_data.on_timeline_start;
                            delete node_data.on_timeline_finish;
                            node_trial_data = node_data; // store for later...
                            // create a TimelineNode for each element in the timeline
                            for(var i = 0; i < parameters1.timeline.length; i++){
                                // merge parameters
                                var merged_parameters = Object.assign({
                                }, node_data, parameters1.timeline[i]);
                                // merge any data from the parent node into child nodes
                                if (typeof node_data.data == 'object' && typeof parameters1.timeline[i].data == 'object') {
                                    var merged_data = Object.assign({
                                    }, node_data.data, parameters1.timeline[i].data);
                                    merged_parameters.data = merged_data;
                                }
                                timeline_parameters.timeline.push(new TimelineNode(merged_parameters, self, i));
                            }
                        } else {
                            // check to see if a valid trial type is defined
                            var trial_type = parameters1.type;
                            if (typeof trial_type == 'undefined') console.error('Trial level node is missing the "type" parameter. The parameters for the node are: ' + JSON.stringify(parameters1));
                            else if (typeof jsPsych.plugins[trial_type] == 'undefined' && trial_type.toString().replace(/\s/g, '') != "function(){returntimeline.timelineVariable(varname);}") console.error('No plugin loaded for trials of type "' + trial_type + '"');
                            // create a deep copy of the parameters for the trial
                            trial_parameters = Object.assign({
                            }, parameters1);
                        }
                    }();
                }
                function startExperiment() {
                    loaded = true;
                    // show progress bar if requested
                    if (opts.show_progress_bar === true) drawProgressBar(opts.message_progress_bar);
                    // record the start time
                    exp_start_time = new Date();
                    // begin!
                    timeline.advance();
                    doTrial(timeline.trial());
                }
                function finishExperiment() {
                    if (typeof timeline.end_message !== 'undefined') DOM_target.innerHTML = timeline.end_message;
                    opts.on_finish(jsPsych.data.get());
                }
                function nextTrial() {
                    // if experiment is paused, don't do anything.
                    if (paused) {
                        waiting = true;
                        return;
                    }
                    global_trial_index++;
                    // advance timeline
                    timeline.markCurrentTrialComplete();
                    var complete = timeline.advance();
                    // update progress bar if shown
                    if (opts.show_progress_bar === true && opts.auto_update_progress_bar == true) updateProgressBar();
                    // check if experiment is over
                    if (complete) {
                        finishExperiment();
                        return;
                    }
                    doTrial(timeline.trial());
                }
                function doTrial(trial) {
                    current_trial = trial;
                    current_trial_finished = false;
                    // process all timeline variables for this trial
                    evaluateTimelineVariables(trial);
                    // evaluate variables that are functions
                    evaluateFunctionParameters(trial);
                    // get default values for parameters
                    setDefaultValues(trial);
                    // about to execute callbacks
                    jsPsych.internal.call_immediate = true;
                    // call experiment wide callback
                    opts.on_trial_start(trial);
                    // call trial specific callback if it exists
                    if (typeof trial.on_start == 'function') trial.on_start(trial);
                    // call any on_start functions for extensions
                    if (Array.isArray(trial.extensions)) for(var i = 0; i < trial.extensions.length; i++)jsPsych.extensions[trial.extensions[i].type].on_start(current_trial.extensions[i].params);
                    // apply the focus to the element containing the experiment.
                    DOM_container.focus();
                    // reset the scroll on the DOM target
                    DOM_target.scrollTop = 0;
                    // add CSS classes to the DOM_target if they exist in trial.css_classes
                    if (typeof trial.css_classes !== 'undefined') {
                        if (!Array.isArray(trial.css_classes) && typeof trial.css_classes == 'string') trial.css_classes = [
                            trial.css_classes
                        ];
                        if (Array.isArray(trial.css_classes)) DOM_target.classList.add(...trial.css_classes);
                    }
                    // execute trial method
                    jsPsych.plugins[trial.type].trial(DOM_target, trial);
                    // call trial specific loaded callback if it exists
                    if (typeof trial.on_load == 'function') trial.on_load();
                    // call any on_load functions for extensions
                    if (Array.isArray(trial.extensions)) for(var i = 0; i < trial.extensions.length; i++)jsPsych.extensions[trial.extensions[i].type].on_load(current_trial.extensions[i].params);
                    // done with callbacks
                    jsPsych.internal.call_immediate = false;
                }
                function evaluateTimelineVariables(trial) {
                    var keys = Object.keys(trial);
                    for(var i = 0; i < keys.length; i++){
                        // timeline variables on the root level
                        if (typeof trial[keys[i]] == "function" && trial[keys[i]].toString().replace(/\s/g, '') == "function(){returntimeline.timelineVariable(varname);}") trial[keys[i]] = trial[keys[i]].call();
                        // timeline variables that are nested in objects
                        if (typeof trial[keys[i]] == "object" && trial[keys[i]] !== null) evaluateTimelineVariables(trial[keys[i]]);
                    }
                }
                function evaluateFunctionParameters(trial) {
                    // set a flag so that jsPsych.timelineVariable() is immediately executed in this context
                    jsPsych.internal.call_immediate = true;
                    // first, eval the trial type if it is a function
                    // this lets users set the plugin type with a function
                    if (typeof trial.type === 'function') trial.type = trial.type.call();
                    // now eval the whole trial
                    // start by getting a list of the parameters
                    var keys = Object.keys(trial);
                    // iterate over each parameter
                    for(var i = 0; i < keys.length; i++)// check to make sure parameter is not "type", since that was eval'd above.
                    if (keys[i] !== 'type') {
                        // this if statement is checking to see if the parameter type is expected to be a function, in which case we should NOT evaluate it.
                        // the first line checks if the parameter is defined in the universalPluginParameters set
                        // the second line checks the plugin-specific parameters
                        if (typeof jsPsych.plugins.universalPluginParameters[keys[i]] !== 'undefined' && jsPsych.plugins.universalPluginParameters[keys[i]].type !== jsPsych.plugins.parameterType.FUNCTION) trial[keys[i]] = replaceFunctionsWithValues(trial[keys[i]], null);
                        if (typeof jsPsych.plugins[trial.type].info.parameters[keys[i]] !== 'undefined' && jsPsych.plugins[trial.type].info.parameters[keys[i]].type !== jsPsych.plugins.parameterType.FUNCTION) trial[keys[i]] = replaceFunctionsWithValues(trial[keys[i]], jsPsych.plugins[trial.type].info.parameters[keys[i]]);
                    }
                    // reset so jsPsych.timelineVariable() is no longer immediately executed
                    jsPsych.internal.call_immediate = false;
                }
                function replaceFunctionsWithValues(obj, info) {
                    // null typeof is 'object' (?!?!), so need to run this first!
                    if (obj === null) return obj;
                    else if (Array.isArray(obj)) for(var i = 0; i < obj.length; i++)obj[i] = replaceFunctionsWithValues(obj[i], info);
                    else if (typeof obj === 'object') {
                        var keys = Object.keys(obj);
                        if (info == null || !info.nested) for(var i = 0; i < keys.length; i++)obj[keys[i]] = replaceFunctionsWithValues(obj[keys[i]], null);
                        else {
                            for(var i = 0; i < keys.length; i++)if (typeof info.nested[keys[i]] == 'object' && info.nested[keys[i]].type !== jsPsych.plugins.parameterType.FUNCTION) obj[keys[i]] = replaceFunctionsWithValues(obj[keys[i]], info.nested[keys[i]]);
                        }
                    } else if (typeof obj === 'function') return obj();
                    return obj;
                }
                function setDefaultValues(trial) {
                    for(var param in jsPsych.plugins[trial.type].info.parameters){
                        // check if parameter is complex with nested defaults
                        if (jsPsych.plugins[trial.type].info.parameters[param].type == jsPsych.plugins.parameterType.COMPLEX) {
                            if (jsPsych.plugins[trial.type].info.parameters[param].array == true) // iterate over each entry in the array
                            trial[param].forEach(function(ip, i) {
                                // check each parameter in the plugin description
                                for(var p in jsPsych.plugins[trial.type].info.parameters[param].nested)if (typeof trial[param][i][p] == 'undefined' || trial[param][i][p] === null) {
                                    if (typeof jsPsych.plugins[trial.type].info.parameters[param].nested[p].default == 'undefined') console.error('You must specify a value for the ' + p + ' parameter (nested in the ' + param + ' parameter) in the ' + trial.type + ' plugin.');
                                    else trial[param][i][p] = jsPsych.plugins[trial.type].info.parameters[param].nested[p].default;
                                }
                            });
                        } else if (typeof trial[param] == 'undefined' || trial[param] === null) {
                            if (typeof jsPsych.plugins[trial.type].info.parameters[param].default == 'undefined') console.error('You must specify a value for the ' + param + ' parameter in the ' + trial.type + ' plugin.');
                            else trial[param] = jsPsych.plugins[trial.type].info.parameters[param].default;
                        }
                    }
                }
                function checkExclusions(exclusions, success, fail) {
                    var clear = true;
                    // MINIMUM SIZE
                    if (typeof exclusions.min_width !== 'undefined' || typeof exclusions.min_height !== 'undefined') {
                        var mw = typeof exclusions.min_width !== 'undefined' ? exclusions.min_width : 0;
                        var mh = typeof exclusions.min_height !== 'undefined' ? exclusions.min_height : 0;
                        var w1 = window.innerWidth;
                        var h1 = window.innerHeight;
                        if (w1 < mw || h1 < mh) {
                            clear = false;
                            var interval = setInterval(function() {
                                var w = window.innerWidth;
                                var h = window.innerHeight;
                                if (w < mw || h < mh) {
                                    var msg = "<p>Your browser window is too small to complete this experiment. Please maximize the size of your browser window. If your browser window is already maximized, you will not be able to complete this experiment.</p><p>The minimum width is " + mw + 'px. Your current width is ' + w + 'px.</p>' + '<p>The minimum height is ' + mh + 'px. Your current height is ' + h + 'px.</p>';
                                    core.getDisplayElement().innerHTML = msg;
                                } else {
                                    clearInterval(interval);
                                    core.getDisplayElement().innerHTML = '';
                                    checkExclusions(exclusions, success, fail);
                                }
                            }, 100);
                            return; // prevents checking other exclusions while this is being fixed
                        }
                    }
                    // WEB AUDIO API
                    if (typeof exclusions.audio !== 'undefined' && exclusions.audio) {
                        if (window.hasOwnProperty('AudioContext') || window.hasOwnProperty('webkitAudioContext')) ;
                        else {
                            clear = false;
                            var msg1 = "<p>Your browser does not support the WebAudio API, which means that you will not be able to complete the experiment.</p><p>Browsers that support the WebAudio API include Chrome, Firefox, Safari, and Edge.</p>";
                            core.getDisplayElement().innerHTML = msg1;
                            fail();
                            return;
                        }
                    }
                    // GO?
                    if (clear) success();
                }
                function drawProgressBar(msg) {
                    document.querySelector('.jspsych-display-element').insertAdjacentHTML('afterbegin', "<div id=\"jspsych-progressbar-container\"><span>" + msg + '</span>' + '<div id="jspsych-progressbar-outer">' + '<div id="jspsych-progressbar-inner"></div>' + '</div></div>');
                }
                function updateProgressBar() {
                    var progress = jsPsych.progress().percent_complete;
                    core.setProgressBar(progress / 100);
                }
                var progress_bar_amount = 0;
                core.setProgressBar = function(proportion_complete) {
                    proportion_complete = Math.max(Math.min(1, proportion_complete), 0);
                    document.querySelector('#jspsych-progressbar-inner').style.width = proportion_complete * 100 + "%";
                    progress_bar_amount = proportion_complete;
                };
                core.getProgressBarCompleted = function() {
                    return progress_bar_amount;
                };
                //Leave a trace in the DOM that jspsych was loaded
                document.documentElement.setAttribute('jspsych', 'present');
                return core;
            })();
            jsPsych.internal = (function() {
                var module = {
                };
                // this flag is used to determine whether we are in a scope where
                // jsPsych.timelineVariable() should be executed immediately or
                // whether it should return a function to access the variable later.
                module.call_immediate = false;
                return module;
            })();
            jsPsych.plugins = (function() {
                var module = {
                };
                // enumerate possible parameter types for plugins
                module.parameterType = {
                    BOOL: 0,
                    STRING: 1,
                    INT: 2,
                    FLOAT: 3,
                    FUNCTION: 4,
                    KEY: 5,
                    SELECT: 6,
                    HTML_STRING: 7,
                    IMAGE: 8,
                    AUDIO: 9,
                    VIDEO: 10,
                    OBJECT: 11,
                    COMPLEX: 12,
                    TIMELINE: 13
                };
                module.universalPluginParameters = {
                    data: {
                        type: module.parameterType.OBJECT,
                        pretty_name: 'Data',
                        default: {
                        },
                        description: 'Data to add to this trial (key-value pairs)'
                    },
                    on_start: {
                        type: module.parameterType.FUNCTION,
                        pretty_name: 'On start',
                        default: function() {
                            return;
                        },
                        description: 'Function to execute when trial begins'
                    },
                    on_finish: {
                        type: module.parameterType.FUNCTION,
                        pretty_name: 'On finish',
                        default: function() {
                            return;
                        },
                        description: 'Function to execute when trial is finished'
                    },
                    on_load: {
                        type: module.parameterType.FUNCTION,
                        pretty_name: 'On load',
                        default: function() {
                            return;
                        },
                        description: 'Function to execute after the trial has loaded'
                    },
                    post_trial_gap: {
                        type: module.parameterType.INT,
                        pretty_name: 'Post trial gap',
                        default: null,
                        description: 'Length of gap between the end of this trial and the start of the next trial'
                    },
                    css_classes: {
                        type: module.parameterType.STRING,
                        pretty_name: 'Custom CSS classes',
                        default: null,
                        description: 'A list of CSS classes to add to the jsPsych display element for the duration of this trial'
                    }
                };
                return module;
            })();
            jsPsych.extensions = (function() {
                return {
                };
            })();
            jsPsych.data = (function() {
                var module = {
                };
                // data storage object
                var allData = DataCollection();
                // browser interaction event data
                var interactionData = DataCollection();
                // data properties for all trials
                var dataProperties = {
                };
                // cache the query_string
                var query_string;
                // DataCollection
                function DataCollection(data) {
                    var data_collection = {
                    };
                    var trials = typeof data === 'undefined' ? [] : data;
                    data_collection.push = function(new_data) {
                        trials.push(new_data);
                        return data_collection;
                    };
                    data_collection.join = function(other_data_collection) {
                        trials = trials.concat(other_data_collection.values());
                        return data_collection;
                    };
                    data_collection.top = function() {
                        if (trials.length <= 1) return data_collection;
                        else return DataCollection([
                            trials[trials.length - 1]
                        ]);
                    };
                    /**
     * Queries the first n elements in a collection of trials.
     *
     * @param {number} n A positive integer of elements to return. A value of
     *                   n that is less than 1 will throw an error.
     *
     * @return {Array} First n objects of a collection of trials. If fewer than
     *                 n trials are available, the trials.length elements will
     *                 be returned.
     *
     */ data_collection.first = function(n) {
                        if (typeof n == 'undefined') n = 1;
                        if (n < 1) throw `You must query with a positive nonzero integer. Please use a 
               different value for n.`;
                        if (trials.length == 0) return DataCollection([]);
                        if (n > trials.length) n = trials.length;
                        return DataCollection(trials.slice(0, n));
                    };
                    /**
     * Queries the last n elements in a collection of trials.
     *
     * @param {number} n A positive integer of elements to return. A value of
     *                   n that is less than 1 will throw an error.
     *
     * @return {Array} Last n objects of a collection of trials. If fewer than
     *                 n trials are available, the trials.length elements will
     *                 be returned.
     *
     */ data_collection.last = function(n) {
                        if (typeof n == 'undefined') n = 1;
                        if (n < 1) throw `You must query with a positive nonzero integer. Please use a 
               different value for n.`;
                        if (trials.length == 0) return DataCollection([]);
                        if (n > trials.length) n = trials.length;
                        return DataCollection(trials.slice(trials.length - n, trials.length));
                    };
                    data_collection.values = function() {
                        return trials;
                    };
                    data_collection.count = function() {
                        return trials.length;
                    };
                    data_collection.readOnly = function() {
                        return DataCollection(jsPsych.utils.deepCopy(trials));
                    };
                    data_collection.addToAll = function(properties) {
                        for(var i = 0; i < trials.length; i++)for(var key in properties)trials[i][key] = properties[key];
                        return data_collection;
                    };
                    data_collection.addToLast = function(properties) {
                        if (trials.length != 0) for(var key in properties)trials[trials.length - 1][key] = properties[key];
                        return data_collection;
                    };
                    data_collection.filter = function(filters) {
                        // [{p1: v1, p2:v2}, {p1:v2}]
                        // {p1: v1}
                        if (!Array.isArray(filters)) var f = jsPsych.utils.deepCopy([
                            filters
                        ]);
                        else var f = jsPsych.utils.deepCopy(filters);
                        var filtered_data = [];
                        for(var x = 0; x < trials.length; x++){
                            var keep = false;
                            for(var i = 0; i < f.length; i++){
                                var match = true;
                                var keys = Object.keys(f[i]);
                                for(var k = 0; k < keys.length; k++){
                                    if (typeof trials[x][keys[k]] !== 'undefined' && trials[x][keys[k]] == f[i][keys[k]]) ;
                                    else match = false;
                                }
                                if (match) {
                                    keep = true;
                                    break;
                                } // can break because each filter is OR.
                            }
                            if (keep) filtered_data.push(trials[x]);
                        }
                        var out = DataCollection(filtered_data);
                        return out;
                    };
                    data_collection.filterCustom = function(fn) {
                        var included = [];
                        for(var i = 0; i < trials.length; i++)if (fn(trials[i])) included.push(trials[i]);
                        return DataCollection(included);
                    };
                    data_collection.select = function(column) {
                        var values = [];
                        for(var i = 0; i < trials.length; i++)if (typeof trials[i][column] !== 'undefined') values.push(trials[i][column]);
                        var out = DataColumn();
                        out.values = values;
                        return out;
                    };
                    data_collection.ignore = function(columns) {
                        if (!Array.isArray(columns)) columns = [
                            columns
                        ];
                        var o = jsPsych.utils.deepCopy(trials);
                        for(var i = 0; i < o.length; i++)for(var j in columns)delete o[i][columns[j]];
                        return DataCollection(o);
                    };
                    data_collection.uniqueNames = function() {
                        var names = [];
                        for(var i = 0; i < trials.length; i++){
                            var keys = Object.keys(trials[i]);
                            for(var j = 0; j < keys.length; j++)if (!names.includes(keys[j])) names.push(keys[j]);
                        }
                        return names;
                    };
                    data_collection.csv = function() {
                        return JSON2CSV(trials);
                    };
                    data_collection.json = function(pretty) {
                        if (pretty) return JSON.stringify(trials, null, '\t');
                        return JSON.stringify(trials);
                    };
                    data_collection.localSave = function(format, filename) {
                        var data_string;
                        if (format == 'JSON' || format == 'json') data_string = data_collection.json();
                        else if (format == 'CSV' || format == 'csv') data_string = data_collection.csv();
                        else throw new Error('Invalid format specified for localSave. Must be "JSON" or "CSV".');
                        saveTextToFile(data_string, filename);
                    };
                    return data_collection;
                }
                // DataColumn class
                function DataColumn() {
                    var data_column = {
                    };
                    data_column.values = [];
                    data_column.sum = function() {
                        var s = 0;
                        for(var i = 0; i < data_column.values.length; i++)s += data_column.values[i];
                        return s;
                    };
                    data_column.mean = function() {
                        return data_column.sum() / data_column.count();
                    };
                    data_column.median = function() {
                        if (data_column.values.length == 0) return undefined;
                        var numbers = data_column.values.slice(0).sort(function(a, b) {
                            return a - b;
                        });
                        var middle = Math.floor(numbers.length / 2);
                        var isEven = numbers.length % 2 === 0;
                        return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
                    };
                    data_column.min = function() {
                        return Math.min.apply(null, data_column.values);
                    };
                    data_column.max = function() {
                        return Math.max.apply(null, data_column.values);
                    };
                    data_column.count = function() {
                        return data_column.values.length;
                    };
                    data_column.variance = function() {
                        var mean = data_column.mean();
                        var sum_square_error = 0;
                        for(var i = 0; i < data_column.values.length; i++)sum_square_error += Math.pow(data_column.values[i] - mean, 2);
                        var mse = sum_square_error / (data_column.values.length - 1);
                        return mse;
                    };
                    data_column.sd = function() {
                        var mse = data_column.variance();
                        var rmse = Math.sqrt(mse);
                        return rmse;
                    };
                    data_column.frequencies = function() {
                        var unique = {
                        };
                        for(var i = 0; i < data_column.values.length; i++){
                            var v = data_column.values[i];
                            if (typeof unique[v] == 'undefined') unique[v] = 1;
                            else unique[v]++;
                        }
                        return unique;
                    };
                    data_column.all = function(eval_fn) {
                        for(var i = 0; i < data_column.values.length; i++){
                            if (!eval_fn(data_column.values[i])) return false;
                        }
                        return true;
                    };
                    data_column.subset = function(eval_fn) {
                        var out = [];
                        for(var i = 0; i < data_column.values.length; i++)if (eval_fn(data_column.values[i])) out.push(data_column.values[i]);
                        var o = DataColumn();
                        o.values = out;
                        return o;
                    };
                    return data_column;
                }
                module.reset = function() {
                    allData = DataCollection();
                    interactionData = DataCollection();
                };
                module.get = function() {
                    return allData;
                };
                module.getInteractionData = function() {
                    return interactionData;
                };
                module.write = function(data_object) {
                    var progress = jsPsych.progress();
                    var trial = jsPsych.currentTrial();
                    //var trial_opt_data = typeof trial.data == 'function' ? trial.data() : trial.data;
                    var default_data = {
                        'trial_type': trial.type,
                        'trial_index': progress.current_trial_global,
                        'time_elapsed': jsPsych.totalTime(),
                        'internal_node_id': jsPsych.currentTimelineNodeID()
                    };
                    var ext_data_object = Object.assign({
                    }, data_object, trial.data, default_data, dataProperties);
                    allData.push(ext_data_object);
                };
                module.addProperties = function(properties) {
                    // first, add the properties to all data that's already stored
                    allData.addToAll(properties);
                    // now add to list so that it gets appended to all future data
                    dataProperties = Object.assign({
                    }, dataProperties, properties);
                };
                module.addDataToLastTrial = function(data) {
                    allData.addToLast(data);
                };
                module.getDataByTimelineNode = function(node_id) {
                    var data = allData.filterCustom(function(x) {
                        return x.internal_node_id.slice(0, node_id.length) === node_id;
                    });
                    return data;
                };
                module.getLastTrialData = function() {
                    return allData.top();
                };
                module.getLastTimelineData = function() {
                    var lasttrial = module.getLastTrialData();
                    var node_id = lasttrial.select('internal_node_id').values[0];
                    if (typeof node_id === 'undefined') return DataCollection();
                    else {
                        var parent_node_id = node_id.substr(0, node_id.lastIndexOf('-'));
                        var lastnodedata = module.getDataByTimelineNode(parent_node_id);
                        return lastnodedata;
                    }
                };
                module.displayData = function(format) {
                    format = typeof format === 'undefined' ? "json" : format.toLowerCase();
                    if (format != "json" && format != "csv") {
                        console.log('Invalid format declared for displayData function. Using json as default.');
                        format = "json";
                    }
                    var data_string;
                    if (format == 'json') data_string = allData.json(true); // true = pretty print with tabs
                    else data_string = allData.csv();
                    var display_element = jsPsych.getDisplayElement();
                    display_element.innerHTML = '<pre id="jspsych-data-display"></pre>';
                    document.getElementById('jspsych-data-display').textContent = data_string;
                };
                module.urlVariables = function() {
                    if (typeof query_string == 'undefined') query_string = getQueryString();
                    return query_string;
                };
                module.getURLVariable = function(whichvar) {
                    if (typeof query_string == 'undefined') query_string = getQueryString();
                    return query_string[whichvar];
                };
                module.createInteractionListeners = function() {
                    // blur event capture
                    window.addEventListener('blur', function() {
                        var data = {
                            event: 'blur',
                            trial: jsPsych.progress().current_trial_global,
                            time: jsPsych.totalTime()
                        };
                        interactionData.push(data);
                        jsPsych.initSettings().on_interaction_data_update(data);
                    });
                    // focus event capture
                    window.addEventListener('focus', function() {
                        var data = {
                            event: 'focus',
                            trial: jsPsych.progress().current_trial_global,
                            time: jsPsych.totalTime()
                        };
                        interactionData.push(data);
                        jsPsych.initSettings().on_interaction_data_update(data);
                    });
                    // fullscreen change capture
                    function fullscreenchange() {
                        var type = document.isFullScreen || document.webkitIsFullScreen || document.mozIsFullScreen || document.fullscreenElement ? 'fullscreenenter' : 'fullscreenexit';
                        var data = {
                            event: type,
                            trial: jsPsych.progress().current_trial_global,
                            time: jsPsych.totalTime()
                        };
                        interactionData.push(data);
                        jsPsych.initSettings().on_interaction_data_update(data);
                    }
                    document.addEventListener('fullscreenchange', fullscreenchange);
                    document.addEventListener('mozfullscreenchange', fullscreenchange);
                    document.addEventListener('webkitfullscreenchange', fullscreenchange);
                };
                // public methods for testing purposes. not recommended for use.
                module._customInsert = function(data) {
                    allData = DataCollection(data);
                };
                module._fullreset = function() {
                    module.reset();
                    dataProperties = {
                    };
                };
                // private function to save text file on local drive
                function saveTextToFile(textstr, filename) {
                    var blobToSave = new Blob([
                        textstr
                    ], {
                        type: 'text/plain'
                    });
                    var blobURL = "";
                    if (typeof window.webkitURL !== 'undefined') blobURL = window.webkitURL.createObjectURL(blobToSave);
                    else blobURL = window.URL.createObjectURL(blobToSave);
                    var display_element = jsPsych.getDisplayElement();
                    display_element.insertAdjacentHTML('beforeend', '<a id="jspsych-download-as-text-link" style="display:none;" download="' + filename + '" href="' + blobURL + '">click to download</a>');
                    document.getElementById('jspsych-download-as-text-link').click();
                }
                //
                // A few helper functions to handle data format conversion
                //
                // this function based on code suggested by StackOverflow users:
                // http://stackoverflow.com/users/64741/zachary
                // http://stackoverflow.com/users/317/joseph-sturtevant
                function JSON2CSV(objArray) {
                    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
                    var line = '';
                    var result = '';
                    var columns = [];
                    var i = 0;
                    for(var j = 0; j < array.length; j++)for(var key in array[j]){
                        var keyString = key + "";
                        keyString = '"' + keyString.replace(/"/g, '""') + '",';
                        if (!columns.includes(key)) {
                            columns[i] = key;
                            line += keyString;
                            i++;
                        }
                    }
                    line = line.slice(0, -1);
                    result += line + '\r\n';
                    for(var i = 0; i < array.length; i++){
                        var line = '';
                        for(var j = 0; j < columns.length; j++){
                            var value = typeof array[i][columns[j]] === 'undefined' ? '' : array[i][columns[j]];
                            if (typeof value == 'object') value = JSON.stringify(value);
                            var valueString = value + "";
                            line += '"' + valueString.replace(/"/g, '""') + '",';
                        }
                        line = line.slice(0, -1);
                        result += line + '\r\n';
                    }
                    return result;
                }
                // this function is modified from StackOverflow:
                // http://stackoverflow.com/posts/3855394
                function getQueryString() {
                    var a = window.location.search.substr(1).split('&');
                    if (a == "") return {
                    };
                    var b = {
                    };
                    for(var i = 0; i < a.length; ++i){
                        var p = a[i].split('=', 2);
                        if (p.length == 1) b[p[0]] = "";
                        else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                    }
                    return b;
                }
                return module;
            })();
            jsPsych.turk = (function() {
                var module = {
                };
                // core.turkInfo gets information relevant to mechanical turk experiments. returns an object
                // containing the workerID, assignmentID, and hitID, and whether or not the HIT is in
                // preview mode, meaning that they haven't accepted the HIT yet.
                module.turkInfo = function() {
                    var turk = {
                    };
                    var param = function(url, name) {
                        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                        var regexS = "[\\?&]" + name + "=([^&#]*)";
                        var regex = new RegExp(regexS);
                        var results = regex.exec(url);
                        return results == null ? "" : results[1];
                    };
                    var src = param(window.location.href, "assignmentId") ? window.location.href : document.referrer;
                    var keys = [
                        "assignmentId",
                        "hitId",
                        "workerId",
                        "turkSubmitTo"
                    ];
                    keys.map(function(key) {
                        turk[key] = unescape(param(src, key));
                    });
                    turk.previewMode = turk.assignmentId == "ASSIGNMENT_ID_NOT_AVAILABLE";
                    turk.outsideTurk = !turk.previewMode && turk.hitId === "" && turk.assignmentId == "" && turk.workerId == "";
                    turk_info = turk;
                    return turk;
                };
                // core.submitToTurk will submit a MechanicalTurk ExternalHIT type
                module.submitToTurk = function(data) {
                    var turkInfo = jsPsych.turk.turkInfo();
                    var assignmentId = turkInfo.assignmentId;
                    var turkSubmitTo = turkInfo.turkSubmitTo;
                    if (!assignmentId || !turkSubmitTo) return;
                    var dataString = [];
                    for(var key in data)if (data.hasOwnProperty(key)) dataString.push(key + "=" + escape(data[key]));
                    dataString.push("assignmentId=" + assignmentId);
                    var url = turkSubmitTo + "/mturk/externalSubmit?" + dataString.join("&");
                    window.location.href = url;
                };
                return module;
            })();
            jsPsych.randomization = (function() {
                var module = {
                };
                module.repeat = function(array, repetitions, unpack) {
                    var arr_isArray = Array.isArray(array);
                    var rep_isArray = Array.isArray(repetitions);
                    // if array is not an array, then we just repeat the item
                    if (!arr_isArray) {
                        if (!rep_isArray) {
                            array = [
                                array
                            ];
                            repetitions = [
                                repetitions
                            ];
                        } else {
                            repetitions = [
                                repetitions[0]
                            ];
                            console.log('Unclear parameters given to randomization.repeat. Multiple set sizes specified, but only one item exists to sample. Proceeding using the first set size.');
                        }
                    } else {
                        if (!rep_isArray) {
                            var reps = [];
                            for(var i = 0; i < array.length; i++)reps.push(repetitions);
                            repetitions = reps;
                        } else if (array.length != repetitions.length) {
                            console.warning('Unclear parameters given to randomization.repeat. Items and repetitions are unequal lengths. Behavior may not be as expected.');
                            // throw warning if repetitions is too short, use first rep ONLY.
                            if (repetitions.length < array.length) {
                                var reps = [];
                                for(var i = 0; i < array.length; i++)reps.push(repetitions);
                                repetitions = reps;
                            } else // throw warning if too long, and then use the first N
                            repetitions = repetitions.slice(0, array.length);
                        }
                    }
                    // should be clear at this point to assume that array and repetitions are arrays with == length
                    var allsamples = [];
                    for(var i = 0; i < array.length; i++){
                        for(var j = 0; j < repetitions[i]; j++)if (array[i] == null || typeof array[i] != 'object') allsamples.push(array[i]);
                        else allsamples.push(Object.assign({
                        }, array[i]));
                    }
                    var out = shuffle(allsamples);
                    if (unpack) out = unpackArray(out);
                    return out;
                };
                module.shuffle = function(arr) {
                    if (!Array.isArray(arr)) console.error('Argument to jsPsych.randomization.shuffle() must be an array.');
                    return shuffle(arr);
                };
                module.shuffleNoRepeats = function(arr, equalityTest) {
                    if (!Array.isArray(arr)) console.error('First argument to jsPsych.randomization.shuffleNoRepeats() must be an array.');
                    if (typeof equalityTest !== 'undefined' && typeof equalityTest !== 'function') console.error('Second argument to jsPsych.randomization.shuffleNoRepeats() must be a function.');
                    // define a default equalityTest
                    if (typeof equalityTest == 'undefined') equalityTest = function(a, b) {
                        if (a === b) return true;
                        else return false;
                    };
                    var random_shuffle = shuffle(arr);
                    for(var i = 0; i < random_shuffle.length - 1; i++)if (equalityTest(random_shuffle[i], random_shuffle[i + 1])) {
                        // neighbors are equal, pick a new random neighbor to swap (not the first or last element, to avoid edge cases)
                        var random_pick = Math.floor(Math.random() * (random_shuffle.length - 2)) + 1;
                        // test to make sure the new neighbor isn't equal to the old one
                        while(equalityTest(random_shuffle[i + 1], random_shuffle[random_pick]) || equalityTest(random_shuffle[i + 1], random_shuffle[random_pick + 1]) || equalityTest(random_shuffle[i + 1], random_shuffle[random_pick - 1]))random_pick = Math.floor(Math.random() * (random_shuffle.length - 2)) + 1;
                        var new_neighbor = random_shuffle[random_pick];
                        random_shuffle[random_pick] = random_shuffle[i + 1];
                        random_shuffle[i + 1] = new_neighbor;
                    }
                    return random_shuffle;
                };
                module.shuffleAlternateGroups = function(arr_groups, random_group_order) {
                    if (typeof random_group_order == 'undefined') random_group_order = false;
                    var n_groups = arr_groups.length;
                    if (n_groups == 1) {
                        console.warn('jsPsych.randomization.shuffleAlternateGroups was called with only one group. Defaulting to simple shuffle.');
                        return module.shuffle(arr_groups[0]);
                    }
                    var group_order = [];
                    for(var i = 0; i < n_groups; i++)group_order.push(i);
                    if (random_group_order) group_order = module.shuffle(group_order);
                    var randomized_groups = [];
                    var min_length = null;
                    for(var i = 0; i < n_groups; i++){
                        min_length = min_length === null ? arr_groups[i].length : Math.min(min_length, arr_groups[i].length);
                        randomized_groups.push(module.shuffle(arr_groups[i]));
                    }
                    var out = [];
                    for(var i = 0; i < min_length; i++)for(var j = 0; j < group_order.length; j++)out.push(randomized_groups[group_order[j]][i]);
                    return out;
                };
                module.sampleWithoutReplacement = function(arr, size) {
                    if (!Array.isArray(arr)) console.error("First argument to jsPsych.randomization.sampleWithoutReplacement() must be an array");
                    if (size > arr.length) console.error("Cannot take a sample larger than the size of the set of items to sample.");
                    return jsPsych.randomization.shuffle(arr).slice(0, size);
                };
                module.sampleWithReplacement = function(arr, size, weights) {
                    if (!Array.isArray(arr)) console.error("First argument to jsPsych.randomization.sampleWithReplacement() must be an array");
                    var normalized_weights = [];
                    if (typeof weights !== 'undefined') {
                        if (weights.length !== arr.length) console.error("The length of the weights array must equal the length of the array to be sampled from.");
                        var weight_sum = 0;
                        for(var i = 0; i < weights.length; i++)weight_sum += weights[i];
                        for(var i = 0; i < weights.length; i++)normalized_weights.push(weights[i] / weight_sum);
                    } else for(var i = 0; i < arr.length; i++)normalized_weights.push(1 / arr.length);
                    var cumulative_weights = [
                        normalized_weights[0]
                    ];
                    for(var i = 1; i < normalized_weights.length; i++)cumulative_weights.push(normalized_weights[i] + cumulative_weights[i - 1]);
                    var samp = [];
                    for(var i = 0; i < size; i++){
                        var rnd = Math.random();
                        var index = 0;
                        while(rnd > cumulative_weights[index])index++;
                        samp.push(arr[index]);
                    }
                    return samp;
                };
                module.factorial = function(factors, repetitions, unpack) {
                    var factorNames = Object.keys(factors);
                    var factor_combinations = [];
                    for(var i = 0; i < factors[factorNames[0]].length; i++){
                        factor_combinations.push({
                        });
                        factor_combinations[i][factorNames[0]] = factors[factorNames[0]][i];
                    }
                    for(var i = 1; i < factorNames.length; i++){
                        var toAdd = factors[factorNames[i]];
                        var n = factor_combinations.length;
                        for(var j = 0; j < n; j++){
                            var base = factor_combinations[j];
                            for(var k = 0; k < toAdd.length; k++){
                                var newpiece = {
                                };
                                newpiece[factorNames[i]] = toAdd[k];
                                factor_combinations.push(Object.assign({
                                }, base, newpiece));
                            }
                        }
                        factor_combinations.splice(0, n);
                    }
                    repetitions = typeof repetitions === 'undefined' ? 1 : repetitions;
                    var with_repetitions = module.repeat(factor_combinations, repetitions, unpack);
                    return with_repetitions;
                };
                module.randomID = function(length) {
                    var result = '';
                    var length = typeof length == 'undefined' ? 32 : length;
                    var chars = '0123456789abcdefghjklmnopqrstuvwxyz';
                    for(var i = 0; i < length; i++)result += chars[Math.floor(Math.random() * chars.length)];
                    return result;
                };
                function unpackArray(array) {
                    var out = {
                    };
                    for(var i = 0; i < array.length; i++){
                        var keys = Object.keys(array[i]);
                        for(var k = 0; k < keys.length; k++){
                            if (typeof out[keys[k]] === 'undefined') out[keys[k]] = [];
                            out[keys[k]].push(array[i][keys[k]]);
                        }
                    }
                    return out;
                }
                function shuffle(array) {
                    var copy_array = array.slice(0);
                    var m = copy_array.length, t, i;
                    // While there remain elements to shuffle…
                    while(m){
                        // Pick a remaining element…
                        i = Math.floor(Math.random() * m--);
                        // And swap it with the current element.
                        t = copy_array[m];
                        copy_array[m] = copy_array[i];
                        copy_array[i] = t;
                    }
                    return copy_array;
                }
                return module;
            })();
            jsPsych.pluginAPI = (function() {
                var module = {
                };
                // keyboard listeners //
                var keyboard_listeners = [];
                var held_keys = {
                };
                var root_keydown_listener = function(e) {
                    for(var i = 0; i < keyboard_listeners.length; i++)keyboard_listeners[i].fn(e);
                    held_keys[e.key] = true;
                };
                var root_keyup_listener = function(e) {
                    held_keys[e.key] = false;
                };
                module.reset = function(root_element) {
                    keyboard_listeners = [];
                    held_keys = {
                    };
                    root_element.removeEventListener('keydown', root_keydown_listener);
                    root_element.removeEventListener('keyup', root_keyup_listener);
                };
                module.createKeyboardEventListeners = function(root_element) {
                    root_element.addEventListener('keydown', root_keydown_listener);
                    root_element.addEventListener('keyup', root_keyup_listener);
                };
                module.getKeyboardResponse = function(parameters) {
                    //parameters are: callback_function, valid_responses, rt_method, persist, audio_context, audio_context_start_time, allow_held_key
                    parameters.rt_method = typeof parameters.rt_method === 'undefined' ? 'performance' : parameters.rt_method;
                    if (parameters.rt_method != 'performance' && parameters.rt_method != 'audio') {
                        console.log('Invalid RT method specified in getKeyboardResponse. Defaulting to "performance" method.');
                        parameters.rt_method = 'performance';
                    }
                    var start_time;
                    if (parameters.rt_method == 'performance') start_time = performance.now();
                    else if (parameters.rt_method === 'audio') start_time = parameters.audio_context_start_time;
                    var case_sensitive = typeof jsPsych.initSettings().case_sensitive_responses === 'undefined' ? false : jsPsych.initSettings().case_sensitive_responses;
                    var listener_id;
                    var listener_function = function(e) {
                        var key_time;
                        if (parameters.rt_method == 'performance') key_time = performance.now();
                        else if (parameters.rt_method === 'audio') key_time = parameters.audio_context.currentTime;
                        var rt = key_time - start_time;
                        // overiding via parameters for testing purposes.
                        var minimum_valid_rt = parameters.minimum_valid_rt;
                        if (!minimum_valid_rt) minimum_valid_rt = jsPsych.initSettings().minimum_valid_rt || 0;
                        var rt_ms = rt;
                        if (parameters.rt_method == 'audio') rt_ms = rt_ms * 1000;
                        if (rt_ms < minimum_valid_rt) return;
                        var valid_response = false;
                        if (typeof parameters.valid_responses === 'undefined') valid_response = true;
                        else if (parameters.valid_responses == jsPsych.ALL_KEYS) valid_response = true;
                        else if (parameters.valid_responses != jsPsych.NO_KEYS) {
                            if (parameters.valid_responses.includes(e.key)) valid_response = true;
                            if (!case_sensitive) {
                                var valid_lower = parameters.valid_responses.map(function(v) {
                                    return v.toLowerCase();
                                });
                                var key_lower = e.key.toLowerCase();
                                if (valid_lower.includes(key_lower)) valid_response = true;
                            }
                        }
                        // check if key was already held down
                        if ((typeof parameters.allow_held_key === 'undefined' || !parameters.allow_held_key) && valid_response) {
                            if (typeof held_keys[e.key] !== 'undefined' && held_keys[e.key] == true) valid_response = false;
                            if (!case_sensitive && typeof held_keys[e.key.toLowerCase()] !== 'undefined' && held_keys[e.key.toLowerCase()] == true) valid_response = false;
                        }
                        if (valid_response) {
                            // if this is a valid response, then we don't want the key event to trigger other actions
                            // like scrolling via the spacebar.
                            e.preventDefault();
                            var key = e.key;
                            if (!case_sensitive) key = key.toLowerCase();
                            parameters.callback_function({
                                key: key,
                                rt: rt_ms
                            });
                            if (keyboard_listeners.includes(listener_id)) {
                                if (!parameters.persist) // remove keyboard listener
                                module.cancelKeyboardResponse(listener_id);
                            }
                        }
                    };
                    // create listener id object
                    listener_id = {
                        type: 'keydown',
                        fn: listener_function
                    };
                    // add this keyboard listener to the list of listeners
                    keyboard_listeners.push(listener_id);
                    return listener_id;
                };
                module.cancelKeyboardResponse = function(listener) {
                    // remove the listener from the list of listeners
                    if (keyboard_listeners.includes(listener)) keyboard_listeners.splice(keyboard_listeners.indexOf(listener), 1);
                };
                module.cancelAllKeyboardResponses = function() {
                    keyboard_listeners = [];
                };
                module.convertKeyCharacterToKeyCode = function(character) {
                    console.warn("Warning: The jsPsych.pluginAPI.convertKeyCharacterToKeyCode function will be removed in future jsPsych releases. We recommend removing this function and using strings to identify/compare keys.");
                    var code;
                    character = character.toLowerCase();
                    if (typeof keylookup[character] !== 'undefined') code = keylookup[character];
                    return code;
                };
                module.convertKeyCodeToKeyCharacter = function(code) {
                    console.warn("Warning: The jsPsych.pluginAPI.convertKeyCodeToKeyCharacter function will be removed in future jsPsych releases. We recommend removing this function and using strings to identify/compare keys.");
                    for(var i in Object.keys(keylookup)){
                        if (keylookup[Object.keys(keylookup)[i]] == code) return Object.keys(keylookup)[i];
                    }
                    return undefined;
                };
                module.compareKeys = function(key1, key2) {
                    if (Number.isFinite(key1) || Number.isFinite(key2)) {
                        // if either value is a numeric keyCode, then convert both to numeric keyCode values and compare (maintained for backwards compatibility)
                        if (typeof key1 == 'string') key1 = module.convertKeyCharacterToKeyCode(key1);
                        if (typeof key2 == 'string') key2 = module.convertKeyCharacterToKeyCode(key2);
                        return key1 == key2;
                    } else if (typeof key1 === 'string' && typeof key2 === 'string') {
                        // if both values are strings, then check whether or not letter case should be converted before comparing (case_sensitive_responses in jsPsych.init)
                        var case_sensitive = typeof jsPsych.initSettings().case_sensitive_responses === 'undefined' ? false : jsPsych.initSettings().case_sensitive_responses;
                        if (case_sensitive) return key1 == key2;
                        else return key1.toLowerCase() == key2.toLowerCase();
                    } else if (key1 === null && (typeof key2 === 'string' || Number.isFinite(key2)) || key2 === null && (typeof key1 === 'string' || Number.isFinite(key1))) return false;
                    else if (key1 === null && key2 === null) return true;
                    else {
                        console.error('Error in jsPsych.pluginAPI.compareKeys: arguments must be numeric key codes, key strings, or null.');
                        return undefined;
                    }
                };
                var keylookup = {
                    'backspace': 8,
                    'tab': 9,
                    'enter': 13,
                    'shift': 16,
                    'ctrl': 17,
                    'alt': 18,
                    'pause': 19,
                    'capslock': 20,
                    'esc': 27,
                    'space': 32,
                    'spacebar': 32,
                    ' ': 32,
                    'pageup': 33,
                    'pagedown': 34,
                    'end': 35,
                    'home': 36,
                    'leftarrow': 37,
                    'uparrow': 38,
                    'rightarrow': 39,
                    'downarrow': 40,
                    'insert': 45,
                    'delete': 46,
                    '0': 48,
                    '1': 49,
                    '2': 50,
                    '3': 51,
                    '4': 52,
                    '5': 53,
                    '6': 54,
                    '7': 55,
                    '8': 56,
                    '9': 57,
                    'a': 65,
                    'b': 66,
                    'c': 67,
                    'd': 68,
                    'e': 69,
                    'f': 70,
                    'g': 71,
                    'h': 72,
                    'i': 73,
                    'j': 74,
                    'k': 75,
                    'l': 76,
                    'm': 77,
                    'n': 78,
                    'o': 79,
                    'p': 80,
                    'q': 81,
                    'r': 82,
                    's': 83,
                    't': 84,
                    'u': 85,
                    'v': 86,
                    'w': 87,
                    'x': 88,
                    'y': 89,
                    'z': 90,
                    '0numpad': 96,
                    '1numpad': 97,
                    '2numpad': 98,
                    '3numpad': 99,
                    '4numpad': 100,
                    '5numpad': 101,
                    '6numpad': 102,
                    '7numpad': 103,
                    '8numpad': 104,
                    '9numpad': 105,
                    'multiply': 106,
                    'plus': 107,
                    'minus': 109,
                    'decimal': 110,
                    'divide': 111,
                    'f1': 112,
                    'f2': 113,
                    'f3': 114,
                    'f4': 115,
                    'f5': 116,
                    'f6': 117,
                    'f7': 118,
                    'f8': 119,
                    'f9': 120,
                    'f10': 121,
                    'f11': 122,
                    'f12': 123,
                    '=': 187,
                    ',': 188,
                    '.': 190,
                    '/': 191,
                    '`': 192,
                    '[': 219,
                    '\\': 220,
                    ']': 221
                };
                // timeout registration
                var timeout_handlers = [];
                module.setTimeout = function(callback, delay) {
                    var handle = setTimeout(callback, delay);
                    timeout_handlers.push(handle);
                    return handle;
                };
                module.clearAllTimeouts = function() {
                    for(var i = 0; i < timeout_handlers.length; i++)clearTimeout(timeout_handlers[i]);
                    timeout_handlers = [];
                };
                // video //
                var video_buffers = {
                };
                module.getVideoBuffer = function(videoID) {
                    return video_buffers[videoID];
                };
                // audio //
                var context = null;
                var audio_buffers = [];
                module.initAudio = function() {
                    context = jsPsych.initSettings().use_webaudio === true ? jsPsych.webaudio_context : null;
                };
                module.audioContext = function() {
                    if (context !== null) {
                        if (context.state !== 'running') context.resume();
                    }
                    return context;
                };
                module.getAudioBuffer = function(audioID) {
                    return new Promise(function(resolve, reject) {
                        // check whether audio file already preloaded
                        if (typeof audio_buffers[audioID] == 'undefined' || audio_buffers[audioID] == 'tmp') {
                            // if audio is not already loaded, try to load it
                            function complete() {
                                resolve(audio_buffers[audioID]);
                            }
                            function error(e) {
                                reject(e.error);
                            }
                            module.preloadAudio([
                                audioID
                            ], complete, function() {
                            }, error);
                        } else // audio is already loaded
                        resolve(audio_buffers[audioID]);
                    });
                };
                // preloading stimuli //
                var preloads = [];
                var preload_requests = [];
                var img_cache = {
                };
                module.preloadAudio = function(files, callback_complete, callback_load, callback_error) {
                    files = jsPsych.utils.flatten(files);
                    files = jsPsych.utils.unique(files);
                    var n_loaded = 0;
                    var loadfn = typeof callback_load === 'undefined' ? function() {
                    } : callback_load;
                    var finishfn = typeof callback_complete === 'undefined' ? function() {
                    } : callback_complete;
                    var errorfn = typeof callback_error === 'undefined' ? function() {
                    } : callback_error;
                    if (files.length == 0) {
                        finishfn();
                        return;
                    }
                    function load_audio_file_webaudio(source, count) {
                        count = count || 1;
                        var request = new XMLHttpRequest();
                        request.open('GET', source, true);
                        request.responseType = 'arraybuffer';
                        request.onload = function() {
                            context.decodeAudioData(request.response, function(buffer) {
                                audio_buffers[source] = buffer;
                                n_loaded++;
                                loadfn(source);
                                if (n_loaded == files.length) finishfn();
                            }, function(e) {
                                errorfn({
                                    source: source,
                                    error: e
                                });
                            });
                        };
                        request.onerror = function(e) {
                            var err = e;
                            if (this.status == 404) err = "404";
                            errorfn({
                                source: source,
                                error: err
                            });
                        };
                        request.onloadend = function(e) {
                            if (this.status == 404) errorfn({
                                source: source,
                                error: "404"
                            });
                        };
                        request.send();
                        preload_requests.push(request);
                    }
                    function load_audio_file_html5audio(source, count) {
                        count = count || 1;
                        var audio = new Audio();
                        audio.addEventListener('canplaythrough', function handleCanPlayThrough() {
                            audio_buffers[source] = audio;
                            n_loaded++;
                            loadfn(source);
                            if (n_loaded == files.length) finishfn();
                            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
                        });
                        audio.addEventListener('error', function handleError(e) {
                            errorfn({
                                source: audio.src,
                                error: e
                            });
                            audio.removeEventListener('error', handleError);
                        });
                        audio.addEventListener('abort', function handleAbort(e) {
                            errorfn({
                                source: audio.src,
                                error: e
                            });
                            audio.removeEventListener('abort', handleAbort);
                        });
                        audio.src = source;
                        preload_requests.push(audio);
                    }
                    for(var i = 0; i < files.length; i++){
                        var bufferID = files[i];
                        if (typeof audio_buffers[bufferID] !== 'undefined') {
                            n_loaded++;
                            loadfn(bufferID);
                            if (n_loaded == files.length) finishfn();
                        } else {
                            audio_buffers[bufferID] = 'tmp';
                            if (module.audioContext() !== null) load_audio_file_webaudio(bufferID);
                            else load_audio_file_html5audio(bufferID);
                        }
                    }
                };
                module.preloadImages = function(images, callback_complete, callback_load, callback_error) {
                    // flatten the images array
                    images = jsPsych.utils.flatten(images);
                    images = jsPsych.utils.unique(images);
                    var n_loaded = 0;
                    var finishfn = typeof callback_complete === 'undefined' ? function() {
                    } : callback_complete;
                    var loadfn = typeof callback_load === 'undefined' ? function() {
                    } : callback_load;
                    var errorfn = typeof callback_error === 'undefined' ? function() {
                    } : callback_error;
                    if (images.length === 0) {
                        finishfn();
                        return;
                    }
                    function preload_image(source) {
                        var img = new Image();
                        img.onload = function() {
                            n_loaded++;
                            loadfn(img.src);
                            if (n_loaded === images.length) finishfn();
                        };
                        img.onerror = function(e) {
                            errorfn({
                                source: img.src,
                                error: e
                            });
                        };
                        img.src = source;
                        img_cache[source] = img;
                        preload_requests.push(img);
                    }
                    for(var i = 0; i < images.length; i++)preload_image(images[i]);
                };
                module.preloadVideo = function(video, callback_complete, callback_load, callback_error) {
                    // flatten the video array
                    video = jsPsych.utils.flatten(video);
                    video = jsPsych.utils.unique(video);
                    var n_loaded = 0;
                    var finishfn = !callback_complete ? function() {
                    } : callback_complete;
                    var loadfn = !callback_load ? function() {
                    } : callback_load;
                    var errorfn = typeof callback_error === 'undefined' ? function() {
                    } : callback_error;
                    if (video.length === 0) {
                        finishfn();
                        return;
                    }
                    function preload_video(source, count) {
                        count = count || 1;
                        //based on option 4 here: http://dinbror.dk/blog/how-to-preload-entire-html5-video-before-play-solved/
                        var request = new XMLHttpRequest();
                        request.open('GET', source, true);
                        request.responseType = 'blob';
                        request.onload = function() {
                            if (this.status === 200 || this.status === 0) {
                                var videoBlob = this.response;
                                video_buffers[source] = URL.createObjectURL(videoBlob); // IE10+
                                n_loaded++;
                                loadfn(source);
                                if (n_loaded === video.length) finishfn();
                            }
                        };
                        request.onerror = function(e) {
                            var err = e;
                            if (this.status == 404) err = "404";
                            errorfn({
                                source: source,
                                error: err
                            });
                        };
                        request.onloadend = function(e) {
                            if (this.status == 404) errorfn({
                                source: source,
                                error: "404"
                            });
                        };
                        request.send();
                        preload_requests.push(request);
                    }
                    for(var i = 0; i < video.length; i++)preload_video(video[i]);
                };
                module.registerPreload = function(plugin_name, parameter, media_type) {
                    if ([
                        'audio',
                        'image',
                        'video'
                    ].indexOf(media_type) === -1) console.error('Invalid media_type parameter for jsPsych.pluginAPI.registerPreload. Please check the plugin file.');
                    var preload = {
                        plugin: plugin_name,
                        parameter: parameter,
                        media_type: media_type
                    };
                    preloads.push(preload);
                };
                module.getAutoPreloadList = function(timeline_description) {
                    function getTrialsOfTypeFromTimelineDescription(td, target_type, inherited_type) {
                        var trials = [];
                        for(var i = 0; i < td.length; i++){
                            var node = td[i];
                            if (Array.isArray(node.timeline)) {
                                if (typeof node.type !== 'undefined') inherited_type = node.type;
                                trials = trials.concat(getTrialsOfTypeFromTimelineDescription(node.timeline, target_type, inherited_type));
                            } else {
                                if (typeof node.type !== 'undefined' && node.type == target_type) trials.push(node);
                                if (typeof node.type == 'undefined' && inherited_type == target_type) trials.push(Object.assign({
                                }, {
                                    type: target_type
                                }, node));
                            }
                        }
                        return trials;
                    }
                    if (typeof timeline_description == 'undefined') timeline_description = jsPsych.initSettings().timeline;
                    // list of items to preload
                    var images = [];
                    var audio = [];
                    var video = [];
                    // construct list
                    for(var i3 = 0; i3 < preloads.length; i3++){
                        var type = preloads[i3].plugin;
                        var param = preloads[i3].parameter;
                        var media = preloads[i3].media_type;
                        var trials1 = getTrialsOfTypeFromTimelineDescription(timeline_description, type);
                        for(var j = 0; j < trials1.length; j++){
                            if (typeof trials1[j][param] == 'undefined') {
                                console.warn("jsPsych failed to auto preload one or more files:");
                                console.warn("no parameter called " + param + " in plugin " + type);
                            } else if (typeof trials1[j][param] !== 'function') {
                                if (media === 'image') images = images.concat(jsPsych.utils.flatten([
                                    trials1[j][param]
                                ]));
                                else if (media === 'audio') audio = audio.concat(jsPsych.utils.flatten([
                                    trials1[j][param]
                                ]));
                                else if (media === 'video') video = video.concat(jsPsych.utils.flatten([
                                    trials1[j][param]
                                ]));
                            }
                        }
                    }
                    images = jsPsych.utils.unique(jsPsych.utils.flatten(images));
                    audio = jsPsych.utils.unique(jsPsych.utils.flatten(audio));
                    video = jsPsych.utils.unique(jsPsych.utils.flatten(video));
                    // remove any nulls false values
                    images = images.filter(function(x) {
                        return x != false && x != null;
                    });
                    audio = audio.filter(function(x) {
                        return x != false && x != null;
                    });
                    video = video.filter(function(x) {
                        return x != false && x != null;
                    });
                    return {
                        images,
                        audio,
                        video
                    };
                };
                module.cancelPreloads = function() {
                    for(var i = 0; i < preload_requests.length; i++){
                        preload_requests[i].onload = function() {
                        };
                        preload_requests[i].onerror = function() {
                        };
                        preload_requests[i].oncanplaythrough = function() {
                        };
                        preload_requests[i].onabort = function() {
                        };
                    }
                    preload_requests = [];
                };
                /**
   * Allows communication with user hardware through our custom Google Chrome extension + native C++ program
   * @param		{object}	mess	The message to be passed to our extension, see its documentation for the expected members of this object.
   * @author	Daniel Rivas
   *
   */ module.hardware = function hardware(mess) {
                    //since Chrome extension content-scripts do not share the javascript environment with the page script that loaded jspsych,
                    //we will need to use hacky methods like communicating through DOM events.
                    var jspsychEvt = new CustomEvent('jspsych', {
                        detail: mess
                    });
                    document.dispatchEvent(jspsychEvt);
                //And voila! it will be the job of the content script injected by the extension to listen for the event and do the appropriate actions.
                };
                /** {boolean} Indicates whether this instance of jspsych has opened a hardware connection through our browser extension */ module.hardwareConnected = false;
                //it might be useful to open up a line of communication from the extension back to this page script,
                //again, this will have to pass through DOM events. For now speed is of no concern so I will use jQuery
                document.addEventListener("jspsych-activate", function(evt) {
                    module.hardwareConnected = true;
                });
                return module;
            })();
            // methods used in multiple modules //
            jsPsych.utils = (function() {
                var module = {
                };
                module.flatten = function(arr, out) {
                    out = typeof out === 'undefined' ? [] : out;
                    for(var i = 0; i < arr.length; i++)if (Array.isArray(arr[i])) module.flatten(arr[i], out);
                    else out.push(arr[i]);
                    return out;
                };
                module.unique = function(arr) {
                    var out = [];
                    for(var i = 0; i < arr.length; i++)if (arr.indexOf(arr[i]) == i) out.push(arr[i]);
                    return out;
                };
                module.deepCopy = function(obj) {
                    if (!obj) return obj;
                    var out;
                    if (Array.isArray(obj)) {
                        out = [];
                        for(var i = 0; i < obj.length; i++)out.push(module.deepCopy(obj[i]));
                        return out;
                    } else if (typeof obj === 'object') {
                        out = {
                        };
                        for(var key in obj)if (obj.hasOwnProperty(key)) out[key] = module.deepCopy(obj[key]);
                        return out;
                    } else return obj;
                };
                return module;
            })();
            // polyfill for Object.assign to support IE
            if (typeof Object.assign != 'function') Object.assign = function(target, varArgs) {
                if (target == null) throw new TypeError('Cannot convert undefined or null to object');
                var to = Object(target);
                for(var index = 1; index < arguments.length; index++){
                    var nextSource = arguments[index];
                    if (nextSource != null) {
                        for(var nextKey in nextSource)// Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
                    }
                }
                return to;
            };
            // polyfill for Array.includes to support IE
            if (!Array.prototype.includes) Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
                if (this == null) throw new TypeError('Array.prototype.includes called on null or undefined');
                var O = Object(this);
                var len = parseInt(O.length, 10) || 0;
                if (len === 0) return false;
                var n = parseInt(arguments[1], 10) || 0;
                var k;
                if (n >= 0) k = n;
                else {
                    k = len + n;
                    if (k < 0) k = 0;
                }
                var currentElement;
                while(k < len){
                    currentElement = O[k];
                    if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) return true;
                    k++;
                }
                return false;
            };
            // polyfill for Array.isArray
            if (!Array.isArray) Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        /***/ },
        /***/ "./node_modules/jspsych/plugins/jspsych-preload.js": ()=>{
            /**
 * jspsych-preload
 * documentation: docs.jspsych.org
 **/ jsPsych.plugins['preload'] = (function() {
                var plugin = {
                };
                plugin.info = {
                    name: 'preload',
                    description: '',
                    parameters: {
                        auto_preload: {
                            type: jsPsych.plugins.parameterType.BOOL,
                            default: false,
                            description: 'Whether or not to automatically preload any media files based on the timeline passed to jsPsych.init.'
                        },
                        trials: {
                            type: jsPsych.plugins.parameterType.TIMELINE,
                            default: [],
                            description: "Array with a timeline of trials to automatically preload. If one or more trial objects is provided, then the plugin will attempt to preload the media files used in the trial(s)."
                        },
                        images: {
                            type: jsPsych.plugins.parameterType.STRING,
                            default: [],
                            description: "Array with one or more image files to load. This parameter is often used in cases where media files cannot be automatically preloaded based on the timeline, e.g. because the media files are passed into an image plugin/parameter with timeline variables or dynamic parameters, or because the image is embedded in an HTML string."
                        },
                        audio: {
                            type: jsPsych.plugins.parameterType.STRING,
                            default: [],
                            description: "Array with one or more audio files to load. This parameter is often used in cases where media files cannot be automatically preloaded based on the timeline, e.g. because the media files are passed into an audio plugin/parameter with timeline variables or dynamic parameters, or because the audio is embedded in an HTML string."
                        },
                        video: {
                            type: jsPsych.plugins.parameterType.STRING,
                            default: [],
                            description: "Array with one or more video files to load. This parameter is often used in cases where media files cannot be automatically preloaded based on the timeline, e.g. because the media files are passed into a video plugin/parameter with timeline variables or dynamic parameters, or because the video is embedded in an HTML string."
                        },
                        message: {
                            type: jsPsych.plugins.parameterType.HTML_STRING,
                            default: null,
                            description: 'HTML-formatted message to be shown above the progress bar while the files are loading.'
                        },
                        show_progress_bar: {
                            type: jsPsych.plugins.parameterType.BOOL,
                            default: true,
                            description: 'Whether or not to show the loading progress bar.'
                        },
                        continue_after_error: {
                            type: jsPsych.plugins.parameterType.BOOL,
                            default: false,
                            description: "Whether or not to continue with the experiment if a loading error occurs. If false, then if a loading error occurs, the error_message will be shown on the page and the trial will not end. If true, then if if a loading error occurs, the trial will end and preloading failure will be logged in the trial data."
                        },
                        error_message: {
                            type: jsPsych.plugins.parameterType.HTML_STRING,
                            default: 'The experiment failed to load.',
                            description: 'Error message to show on the page in case of any loading errors. This parameter is only relevant when continue_after_error is false.'
                        },
                        show_detailed_errors: {
                            type: jsPsych.plugins.parameterType.BOOL,
                            default: false,
                            description: "Whether or not to show a detailed error message on the page. If true, then detailed error messages will be shown on the page for all files that failed to load, along with the general error_message. This parameter is only relevant when continue_after_error is false."
                        },
                        max_load_time: {
                            type: jsPsych.plugins.parameterType.INT,
                            default: null,
                            description: "The maximum amount of time that the plugin should wait before stopping the preload and either ending the trial (if continue_after_error is true) or stopping the experiment with an error message (if continue_after_error is false). If null, the plugin will wait indefintely for the files to load."
                        },
                        on_error: {
                            type: jsPsych.plugins.parameterType.FUNCTION,
                            default: null,
                            description: 'Function to be called after a file fails to load. The function takes the file name as its only argument.'
                        },
                        on_success: {
                            type: jsPsych.plugins.parameterType.FUNCTION,
                            default: null,
                            description: 'Function to be called after a file loads successfully. The function takes the file name as its only argument.'
                        }
                    }
                };
                plugin.trial = function(display_element, trial) {
                    var success = null;
                    var timeout = false;
                    var failed_images = [];
                    var failed_audio = [];
                    var failed_video = [];
                    var detailed_errors = [];
                    var in_safe_mode = jsPsych.getSafeModeStatus();
                    // create list of media to preload //
                    var images = [];
                    var audio = [];
                    var video = [];
                    if (trial.auto_preload) {
                        var auto_preload = jsPsych.pluginAPI.getAutoPreloadList();
                        images = images.concat(auto_preload.images);
                        audio = audio.concat(auto_preload.audio);
                        video = video.concat(auto_preload.video);
                    }
                    if (trial.trials.length > 0) {
                        var trial_preloads = jsPsych.pluginAPI.getAutoPreloadList(trial.trials);
                        images = images.concat(trial_preloads.images);
                        audio = audio.concat(trial_preloads.audio);
                        video = video.concat(trial_preloads.video);
                    }
                    images = images.concat(trial.images);
                    audio = audio.concat(trial.audio);
                    video = video.concat(trial.video);
                    images = jsPsych.utils.unique(jsPsych.utils.flatten(images));
                    audio = jsPsych.utils.unique(jsPsych.utils.flatten(audio));
                    video = jsPsych.utils.unique(jsPsych.utils.flatten(video));
                    if (in_safe_mode) // don't preload video if in safe mode (experiment is running via file protocol)
                    video = [];
                    // render display of message and progress bar
                    var html = '';
                    if (trial.message !== null) html += trial.message;
                    if (trial.show_progress_bar) html += `
          <div id='jspsych-loading-progress-bar-container' style='height: 10px; width: 300px; background-color: #ddd; margin: auto;'>
            <div id='jspsych-loading-progress-bar' style='height: 10px; width: 0%; background-color: #777;'></div>
          </div>`;
                    display_element.innerHTML = html;
                    // do preloading
                    if (trial.max_load_time !== null) jsPsych.pluginAPI.setTimeout(on_timeout, trial.max_load_time);
                    var total_n = images.length + audio.length + video.length;
                    var loaded = 0; // success or error count
                    var loaded_success = 0; // success count
                    if (total_n == 0) on_success();
                    else {
                        function load_video(cb) {
                            jsPsych.pluginAPI.preloadVideo(video, cb, file_loading_success, file_loading_error);
                        }
                        function load_audio(cb) {
                            jsPsych.pluginAPI.preloadAudio(audio, cb, file_loading_success, file_loading_error);
                        }
                        function load_images(cb) {
                            jsPsych.pluginAPI.preloadImages(images, cb, file_loading_success, file_loading_error);
                        }
                        if (video.length > 0) load_video(function() {
                        });
                        if (audio.length > 0) load_audio(function() {
                        });
                        if (images.length > 0) load_images(function() {
                        });
                    }
                    // helper functions and callbacks
                    function update_loading_progress_bar() {
                        loaded++;
                        if (trial.show_progress_bar) {
                            var percent_loaded = loaded / total_n * 100;
                            var preload_progress_bar = jsPsych.getDisplayElement().querySelector('#jspsych-loading-progress-bar');
                            if (preload_progress_bar !== null) preload_progress_bar.style.width = percent_loaded + "%";
                        }
                    }
                    // called when a single file loading fails
                    function file_loading_error(e) {
                        // update progress bar even if there's an error
                        update_loading_progress_bar();
                        // change success flag after first file loading error
                        if (success == null) success = false;
                        // add file to failed media list
                        var source = "unknown file";
                        if (e.source) source = e.source;
                        if (e.error && e.error.path && e.error.path.length > 0) {
                            if (e.error.path[0].localName == "img") failed_images.push(source);
                            else if (e.error.path[0].localName == "audio") failed_audio.push(source);
                            else if (e.error.path[0].localName == "video") failed_video.push(source);
                        }
                        // construct detailed error message
                        var err_msg = '<p><strong>Error loading file: ' + source + '</strong><br>';
                        if (e.error.statusText) err_msg += 'File request response status: ' + e.error.statusText + '<br>';
                        if (e.error == "404") err_msg += '404 - file not found.<br>';
                        if (typeof e.error.loaded !== 'undefined' && e.error.loaded !== null && e.error.loaded !== 0) err_msg += e.error.loaded + ' bytes transferred.';
                        else err_msg += "File did not begin loading. Check that file path is correct and reachable by the browser,<br>and that loading is not blocked by cross-origin resource sharing (CORS) errors.";
                        err_msg += '</p>';
                        detailed_errors.push(err_msg);
                        // call trial's on_error function
                        after_error(source);
                        // if this is the last file
                        if (loaded == total_n) {
                            if (trial.continue_after_error) // if continue_after_error is false, then stop with an error
                            end_trial();
                            else // otherwise end the trial and continue
                            stop_with_error_message();
                        }
                    }
                    // called when a single file loads successfully
                    function file_loading_success(source) {
                        update_loading_progress_bar();
                        // call trial's on_success function
                        after_success(source);
                        loaded_success++;
                        if (loaded_success == total_n) // if this is the last file and all loaded successfully, call success function
                        on_success();
                        else if (loaded == total_n) {
                            // if this is the last file and there was at least one error
                            if (trial.continue_after_error) // end the trial and continue with experiment
                            end_trial();
                            else // if continue_after_error is false, then stop with an error
                            stop_with_error_message();
                        }
                    }
                    // called if all files load successfully
                    function on_success() {
                        if (typeof timeout !== 'undefined' && timeout === false) {
                            // clear timeout immediately after finishing, to handle race condition with max_load_time
                            jsPsych.pluginAPI.clearAllTimeouts();
                            // need to call cancel preload function to clear global jsPsych preload_request list, even when they've all succeeded
                            jsPsych.pluginAPI.cancelPreloads();
                            success = true;
                            end_trial();
                        }
                    }
                    // called if all_files haven't finished loading when max_load_time is reached
                    function on_timeout() {
                        //console.log('timeout fired');
                        jsPsych.pluginAPI.cancelPreloads();
                        if (typeof success !== 'undefined' && (success === false || success === null)) {
                            timeout = true;
                            if (loaded_success < total_n) success = false;
                            after_error('timeout'); // call trial's on_error event handler here, in case loading timed out with no file errors
                            detailed_errors.push("<p><strong>Loading timed out.</strong><br>Consider compressing your stimuli files, loading your files in smaller batches,<br>and/or increasing the <i>max_load_time</i> parameter.</p>");
                            if (trial.continue_after_error) end_trial();
                            else stop_with_error_message();
                        }
                    }
                    function stop_with_error_message() {
                        jsPsych.pluginAPI.clearAllTimeouts();
                        jsPsych.pluginAPI.cancelPreloads();
                        // show error message
                        display_element.innerHTML = trial.error_message;
                        // show detailed errors, if necessary
                        if (trial.show_detailed_errors) {
                            display_element.innerHTML += '<p><strong>Error details:</strong></p>';
                            detailed_errors.forEach(function(e) {
                                display_element.innerHTML += e;
                            });
                        }
                    }
                    function after_error(source) {
                        // call on_error function and pass file name
                        if (trial.on_error !== null) trial.on_error(source);
                    }
                    function after_success(source) {
                        // call on_success function and pass file name
                        if (trial.on_success !== null) trial.on_success(source);
                    }
                    function end_trial() {
                        // clear timeout again when end_trial is called, to handle race condition with max_load_time
                        jsPsych.pluginAPI.clearAllTimeouts();
                        var trial_data = {
                            success: success,
                            timeout: timeout,
                            failed_images: failed_images,
                            failed_audio: failed_audio,
                            failed_video: failed_video
                        };
                        // clear the display
                        display_element.innerHTML = '';
                        jsPsych.finishTrial(trial_data);
                    }
                };
                return plugin;
            })();
        /***/ },
        /***/ "./node_modules/jspsych/css/jspsych.css": (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            /* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            /* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
            /* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
            /* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
            /* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
            /* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
            /* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _css_loader_dist_cjs_js_jspsych_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./jspsych.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/jspsych/css/jspsych.css");
            var options = {
            };
            options.styleTagTransform = _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
            options.setAttributes = _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
            options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
            options.domAPI = _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
            options.insertStyleElement = _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();
            var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_jspsych_css__WEBPACK_IMPORTED_MODULE_6__.default, options);
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = _css_loader_dist_cjs_js_jspsych_css__WEBPACK_IMPORTED_MODULE_6__.default && _css_loader_dist_cjs_js_jspsych_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _css_loader_dist_cjs_js_jspsych_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined;
        /***/ },
        /***/ "./src/css/styles.css": (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
            /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
            /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
            /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
            /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
            /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");
            var options = {
            };
            options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
            options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
            options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
            options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
            options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();
            var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined;
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (module)=>{
            "use strict";
            var stylesInDom = [];
            function getIndexByIdentifier(identifier) {
                var result = -1;
                for(var i = 0; i < stylesInDom.length; i++)if (stylesInDom[i].identifier === identifier) {
                    result = i;
                    break;
                }
                return result;
            }
            function modulesToDom(list, options) {
                var idCountMap = {
                };
                var identifiers = [];
                for(var i = 0; i < list.length; i++){
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var count = idCountMap[id] || 0;
                    var identifier = "".concat(id, " ").concat(count);
                    idCountMap[id] = count + 1;
                    var index = getIndexByIdentifier(identifier);
                    var obj = {
                        css: item[1],
                        media: item[2],
                        sourceMap: item[3]
                    };
                    if (index !== -1) {
                        stylesInDom[index].references++;
                        stylesInDom[index].updater(obj);
                    } else stylesInDom.push({
                        identifier: identifier,
                        updater: addStyle(obj, options),
                        references: 1
                    });
                    identifiers.push(identifier);
                }
                return identifiers;
            }
            function addStyle(obj, options) {
                var api = options.domAPI(options);
                api.update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                        api.update(obj = newObj);
                    } else api.remove();
                };
            }
            module.exports = function(list, options) {
                options = options || {
                };
                list = list || [];
                var lastIdentifiers = modulesToDom(list, options);
                return function update(newList) {
                    newList = newList || [];
                    for(var i = 0; i < lastIdentifiers.length; i++){
                        var identifier = lastIdentifiers[i];
                        var index = getIndexByIdentifier(identifier);
                        stylesInDom[index].references--;
                    }
                    var newLastIdentifiers = modulesToDom(newList, options);
                    for(var _i = 0; _i < lastIdentifiers.length; _i++){
                        var _identifier = lastIdentifiers[_i];
                        var _index = getIndexByIdentifier(_identifier);
                        if (stylesInDom[_index].references === 0) {
                            stylesInDom[_index].updater();
                            stylesInDom.splice(_index, 1);
                        }
                    }
                    lastIdentifiers = newLastIdentifiers;
                };
            };
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js": (module)=>{
            "use strict";
            var memo = {
            };
            /* istanbul ignore next  */ function getTarget(target) {
                if (typeof memo[target] === "undefined") {
                    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
                        // This will throw an exception if access to iframe is blocked
                        // due to cross-origin restrictions
                        styleTarget = styleTarget.contentDocument.head;
                    } catch (e) {
                        // istanbul ignore next
                        styleTarget = null;
                    }
                    memo[target] = styleTarget;
                }
                return memo[target];
            }
            /* istanbul ignore next  */ function insertBySelector(insert, style) {
                var target = getTarget(insert);
                if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                target.appendChild(style);
            }
            module.exports = insertBySelector;
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js": (module)=>{
            "use strict";
            /* istanbul ignore next  */ function insertStyleElement(options) {
                var style = document.createElement("style");
                options.setAttributes(style, options.attributes);
                options.insert(style);
                return style;
            }
            module.exports = insertStyleElement;
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (module, __unused_webpack_exports, __webpack_require__)=>{
            "use strict";
            /* istanbul ignore next  */ function setAttributesWithoutAttributes(style) {
                var nonce = __webpack_require__.nc;
                if (nonce) style.setAttribute("nonce", nonce);
            }
            module.exports = setAttributesWithoutAttributes;
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (module)=>{
            "use strict";
            /* istanbul ignore next  */ function apply(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) style.setAttribute("media", media);
                else style.removeAttribute("media");
                if (sourceMap && typeof btoa !== "undefined") css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                 // For old IE
                /* istanbul ignore if  */ options.styleTagTransform(css, style);
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) return false;
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */ function domAPI(options) {
                var style = options.insertStyleElement(options);
                return {
                    update: function update(obj) {
                        apply(style, options, obj);
                    },
                    remove: function remove() {
                        removeStyleElement(style);
                    }
                };
            }
            module.exports = domAPI;
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js": (module)=>{
            "use strict";
            /* istanbul ignore next  */ function styleTagTransform(css, style) {
                if (style.styleSheet) style.styleSheet.cssText = css;
                else {
                    while(style.firstChild)style.removeChild(style.firstChild);
                    style.appendChild(document.createTextNode(css));
                }
            }
            module.exports = styleTagTransform;
        /***/ },
        /***/ "./src/api/manipulations.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "Manipulations": ()=>/* binding */ Manipulations1
            });
            /**
 * Class that links to the Gorilla Manipulations API. It allows safe references
 * to the API while developing the tasks locally.
 */ var Manipulations1 = function() {
                /**
     * Default constructor
     * @param {any} manipulations target object containing the manipulations
     * @param {string[]} _keys list of manipulation keys
     */ function Manipulations(manipulations) {
                    this.manipulations = manipulations;
                    this.bind();
                }
                /**
     * Retrieves the Gorilla instance and connects any manipulations specified
     * to the Gorilla Manipulations API.
     */ Manipulations.prototype.bind = function() {
                    var _this = this;
                    var gorilla = window['gorilla'];
                    Object.keys(this.manipulations).forEach(function(key) {
                        if (_this.manipulations[key]) {
                            // Type checks to make sure properties are preserved
                            if (_this.manipulations[key] instanceof Number) // Number
                            _this.manipulations[key] = Number(gorilla.manipulation(key));
                            else if (_this.manipulations[key] instanceof Boolean) // Boolean
                            _this.manipulations[key] = gorilla.manipulation(key) == 'true';
                            else // Everything else (strings etc.)
                            _this.manipulations[key] = gorilla.manipulation(key);
                        } else console.warn("Manipulation '".concat(key, "' was not bound"));
                    });
                };
                return Manipulations;
            }();
        /***/ },
        /***/ "./src/api/stimuli.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "Stimuli": ()=>/* binding */ Stimuli1
            });
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
            /* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.browser.js");
            /* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
            // Imports
            // Logging library
            /**
 * Utility class to load images and setup any API calls if required
 */ var Stimuli1 = function() {
                /**
     * Default constructor
     * @param {any} collection images to load and manage
     */ function Stimuli(collection) {
                    this.collection = collection;
                    this.isLoaded = false;
                }
                /**
     * Loader method for the ImageCollection
     */ Stimuli.prototype.load = function() {
                    var _this = this;
                    // Get the Experiment object to determine the platform
                    var experiment = window['Experiment'];
                    if (experiment.getPlatform() === _constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.GORILLA) {
                        // Populate the image collection for Gorilla
                        // Grab the Gorilla API from the browser
                        var gorilla_1 = window['gorilla'];
                        // For each of the images from the desktop build, we
                        // want to create a new API call to retrieve each from
                        // the Gorilla platform
                        Object.keys(this.collection).forEach(function(image) {
                            // Generate the new API call
                            _this.collection[image] = gorilla_1.stimuliURL(image);
                        });
                        this.isLoaded = true;
                    }
                };
                /**
     * Get the image collection
     * @return {any}
     */ Stimuli.prototype.getCollection = function() {
                    if (this.isLoaded) // Return the collection if loaded images
                    return this.collection;
                    // Raise error and return empty if not loaded yet
                    consola__WEBPACK_IMPORTED_MODULE_1___default().error("Image collection not loaded before accessing! Ensure 'load()' has been called.");
                    return {
                    };
                };
                return Stimuli;
            }();
        /***/ },
        /***/ "./src/constants.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "PLATFORMS": ()=>/* binding */ PLATFORMS
                ,
                /* harmony export */ "CONTROLLERS": ()=>/* binding */ CONTROLLERS
            });
            // Platform contants
            var PLATFORMS = {
                GORILLA: 'gorilla',
                JSPSYCH: 'jsPsych'
            };
            // Valid controller types
            var CONTROLLERS = {
                KEYBOARD: 'keyboard',
                SPECTROMETER: 'spectrometer',
                TOUCH: 'touch'
            };
        /***/ },
        /***/ "./src/experiment.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "Experiment": ()=>/* binding */ Experiment1
                ,
                /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
            /* harmony import */ var _api_manipulations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/manipulations */ "./src/api/manipulations.ts");
            /* harmony import */ var _api_stimuli__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/stimuli */ "./src/api/stimuli.ts");
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ "./src/functions.ts");
            /* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.browser.js");
            /* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var jspsych_jspsych__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspsych/jspsych */ "./node_modules/jspsych/jspsych.js");
            /* harmony import */ var jspsych_jspsych__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(jspsych_jspsych__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var jspsych_plugins_jspsych_preload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspsych/plugins/jspsych-preload */ "./node_modules/jspsych/plugins/jspsych-preload.js");
            /* harmony import */ var jspsych_plugins_jspsych_preload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(jspsych_plugins_jspsych_preload__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var jspsych_css_jspsych_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspsych/css/jspsych.css */ "./node_modules/jspsych/css/jspsych.css");
            /* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
            /* harmony import */ var d3_random__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-random */ "./node_modules/d3-random/src/uniform.js");
            /* harmony import */ var d3_random__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-random */ "./node_modules/d3-random/src/lcg.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
            // Imports
            // Logging library
            // Import jsPsych & require preload plugin to ensure
            // everything is bundled when compiled
            // Import any experiment styling
            // Import and configure d3 for random number generation
            // using a uniform random distribution
            // Import jQuery for Gorilla integration only
            /**
 * Experiment class to start and manage connection to jsPsych
 * or Gorilla if required
 */ var Experiment1 = function() {
                /**
     * Default constructor
     * @param {Configuration} config configuration object
     */ function Experiment(config) {
                    // Assign the experiment to the window
                    window['Experiment'] = this;
                    this.config = config;
                    // Configure the d3 RNG
                    this.generator = d3_random__WEBPACK_IMPORTED_MODULE_10__.default.source((0, d3_random__WEBPACK_IMPORTED_MODULE_11__.default)(this.config.seed))(0, 1);
                    // Detect and update the target in the configuration
                    this.setPlatform(this.detectPlatforms());
                    // Load all the stimuli
                    this.loadStimuli();
                    // Configure the manipulations in the configuration file
                    if (this.platform === _constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.GORILLA) new _api_manipulations__WEBPACK_IMPORTED_MODULE_1__.Manipulations(config.manipulations);
                }
                /**
     * Get the experiment configuration object
     * @return {Config}
     */ Experiment.prototype.getConfiguration = function() {
                    return this.config;
                };
                /**
     * Update and set the target
     * @param {string} _target updated target
     */ Experiment.prototype.setPlatform = function(_target) {
                    if (_target !== this.platform) consola__WEBPACK_IMPORTED_MODULE_4___default().info("Target updated to '".concat(_target, "'"));
                    this.platform = _target;
                };
                /**
     * Get the current platform the Experiment is running on
     * @return {string}
     */ Experiment.prototype.getPlatform = function() {
                    return this.platform;
                };
                /**
     * Generate and return a random number from a uniform
     * distribution in [0, 1)
     * @return {number}
     */ Experiment.prototype.random = function() {
                    return this.generator();
                };
                /**
     * Detect the platform that the experiment is running on
     * @return {string} platform name
     */ Experiment.prototype.detectPlatforms = function() {
                    // Instantiate hook storage
                    this.instances = {
                        gorilla: null,
                        jsPsych: null
                    };
                    // Check for Gorilla
                    if (_constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.GORILLA in window) {
                        consola__WEBPACK_IMPORTED_MODULE_4___default().info("Gorilla instance found");
                        // Store the platform
                        this.instances.gorilla = window[_constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.GORILLA];
                    }
                    // Check for jsPsych
                    if (_constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.JSPSYCH in window) {
                        consola__WEBPACK_IMPORTED_MODULE_4___default().info("jsPsych instance found");
                        // Store the platform
                        this.instances.jsPsych = window[_constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.JSPSYCH];
                    }
                    // Return the correct platform
                    if (this.instances.gorilla) // Gorilla was found
                    return _constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.GORILLA;
                    else if (this.instances.jsPsych) // jsPsych found but not Gorilla
                    return _constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.JSPSYCH;
                    else // Big issue if we are here
                    throw new Error('No valid platforms detected');
                };
                /**
     * Setup and enable the global error handler.
     * Listens for the 'onerror' event
     */ Experiment.prototype.setupErrorHandler = function() {
                    var _this = this;
                    window.onerror = function(_event) {
                        // Heading text
                        var heading = document.createElement('h1');
                        heading.textContent = 'Oh no!';
                        // Subheading
                        var subheading = document.createElement('h2');
                        subheading.textContent = 'It looks like an error has occurred.';
                        // Container for the error information
                        var errorContainer = document.createElement('div');
                        errorContainer.style.margin = '20px';
                        // 'Error description:' text
                        var textIntroduction = document.createElement('p');
                        textIntroduction.textContent = 'Error description:';
                        // Error description
                        var description = document.createElement('code');
                        description.innerText = _event;
                        description.style.gap = '20rem';
                        errorContainer.append(textIntroduction, description);
                        // Follow-up instructions
                        var textInstructions = document.createElement('p');
                        if (_this.config.allowParticipantContact === true) {
                            textInstructions.innerHTML = "Please send an email to " + "<a href=\"mailto:".concat(_this.config.contact, "?") + "subject=Error (".concat(_this.config.studyName, ")") + "&body=Error text: ".concat(_event, "%0D%0A") + "Additional information:\"" + ">".concat(_this.config.contact) + "</a> to share " + "the details of this error.";
                            textInstructions.style.margin = '20px';
                        }
                        // Button to end the experiment
                        var endButton = document.createElement('button');
                        endButton.textContent = 'End Experiment';
                        endButton.classList.add('jspsych-btn');
                        endButton.onclick = function() {
                            jsPsych.endExperiment('The experiment ended early due to an error occurring.');
                        };
                        // Clear and replace the content of the document.body
                        var contentContainer = document.getElementById('jspsych-content');
                        (0, _functions__WEBPACK_IMPORTED_MODULE_3__.clear)(contentContainer);
                        contentContainer.append(heading, subheading, errorContainer, textInstructions, endButton);
                    };
                };
                /**
     * Retrieve an instance of a platform to utilise
     * in integration
     * @param {string} platform identifier of the platform
     * @return {any} platform instance
     */ Experiment.prototype.getHook = function(platform) {
                    if (this.instances[platform]) return this.instances[platform];
                    else {
                        consola__WEBPACK_IMPORTED_MODULE_4___default().warn("Hook '".concat(platform, "' not found"));
                        return null;
                    }
                };
                /**
     * Load the stimuli and setup the ImageCollection
     * instance
     */ Experiment.prototype.loadStimuli = function() {
                    this.stimuliCollection = new _api_stimuli__WEBPACK_IMPORTED_MODULE_2__.Stimuli(this.config.stimuli);
                    this.stimuliCollection.load();
                };
                /**
     * Retrieve the collection of loaded images
     * @return {any}
     */ Experiment.prototype.getStimuli = function() {
                    return this.stimuliCollection.getCollection();
                };
                /**
     * Start the experiment
     * @param {Init} parameters collection of the jsPsych
     * timeline nodes to execute.
     */ Experiment.prototype.start = function(parameters) {
                    var _this = this;
                    // Add the error handler
                    this.setupErrorHandler();
                    if (this.platform === _constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.GORILLA) {
                        // Initialise jsPsych and Gorilla (if required)
                        var gorilla_1 = this.getHook(_constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.GORILLA);
                        var jsPsych_1 = this.getHook(_constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.JSPSYCH);
                        // Populate the image collection for Gorilla
                        Object.keys(this.config.stimuli).forEach(function(image) {
                            _this.config.stimuli[image] = gorilla_1.stimuliURL(image);
                        });
                        // Create a new timeline node to preload the images
                        parameters.timeline.unshift({
                            type: 'preload',
                            auto_preload: true,
                            images: Object.values(this.config.stimuli)
                        });
                        // Bring the stimuli into the local scope
                        var stimuli = this.config.stimuli;
                        // Make sure Gorilla and jsPsych are loaded
                        if (typeof jsPsych_1 !== 'undefined' && typeof gorilla_1 !== 'undefined') {
                            // Update the parameters object with required functions
                            // and properties
                            // Display element
                            parameters.display_element = jquery__WEBPACK_IMPORTED_MODULE_9___default()('#gorilla')[0];
                            // 'on_data_update' callback
                            parameters.on_data_update = function(data) {
                                gorilla_1.metric(data);
                            };
                            // 'on_finish' callback
                            parameters.on_finish = function() {
                                gorilla_1.finish();
                            };
                            // 'preload_images' value
                            parameters.preload_images = Object.values(stimuli);
                            // Start Gorilla and initialise jsPsych with the updated
                            // parameters
                            gorilla_1.ready(function() {
                                jsPsych_1.init(parameters);
                            });
                        } else throw new Error("Gorilla or jsPsych not loaded");
                    } else {
                        // Initialise jsPsych
                        var jsPsych_2 = this.getHook(_constants__WEBPACK_IMPORTED_MODULE_0__.PLATFORMS.JSPSYCH);
                        // Add a new timeline node to preload the images
                        parameters.timeline.unshift({
                            type: 'preload',
                            auto_preload: true,
                            images: Object.values(this.config.stimuli)
                        });
                        // Bring the stimuli into the local scope
                        var stimuli = this.config.stimuli;
                        // Make sure jsPsych is loaded
                        if (typeof jsPsych_2 !== 'undefined') {
                            // Update the parameters object with required functions
                            // and properties
                            // 'on_finish' callback
                            parameters.on_finish = function() {
                                jsPsych_2.data.get().localSave("csv", "experiment_complete_".concat(Date.now(), ".csv"));
                            };
                            // 'preload_images' value
                            parameters.preload_images = Object.values(stimuli);
                            // Initialise jsPsych with the updated parameters
                            jsPsych_2.init(parameters);
                        } else throw new Error("jsPsych not loaded");
                    }
                    // Scale everything
                    (0, _functions__WEBPACK_IMPORTED_MODULE_3__.scale)();
                };
                return Experiment;
            }();
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                Experiment: Experiment1
            };
        /***/ },
        /***/ "./src/functions.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ "scale": ()=>/* binding */ scale
                ,
                /* harmony export */ "clear": ()=>/* binding */ clear
            });
            /**
 * Scaling function to automatically resize and scale content
 */ function scale() {
                var wrapper = document.querySelector('.jspsych-content-wrapper');
                var content = document.querySelector('.jspsych-content');
                if (content) // Apply the CSS transform using the scale() function
                content.style.width = "".concat(Math.max(content.clientWidth, wrapper.clientWidth), "px");
            }
            /**
 * Clear the HTML contents of an element without
 * editing innerHTML.
 * @param {HTMLElement} _target element to clear contents
 */ function clear(_target) {
                // Clear existing HTML nodes
                while(_target.firstChild)_target.removeChild(_target.lastChild);
            }
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {
    };
    /******/ /******/ // The require function
    /******/ function __webpack_require__1(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = __webpack_module_cache__[moduleId] = {
            /******/ id: moduleId,
            /******/ // no module.loaded needed
            /******/ exports: {
            }
        };
        /******/ /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__1);
        /******/ /******/ // Return the exports of the module
        /******/ return module.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ (()=>{
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__1.n = (module)=>{
            /******/ var getter = module && module.__esModule ? /******/ ()=>module['default']
             : /******/ ()=>module
            ;
            /******/ __webpack_require__1.d(getter, {
                a: getter
            });
            /******/ return getter;
        /******/ };
    /******/ })();
    /******/ /******/ /* webpack/runtime/define property getters */ /******/ (()=>{
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__1.d = (exports, definition)=>{
            /******/ for(var key in definition)/******/ if (__webpack_require__1.o(definition, key) && !__webpack_require__1.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        /******/ };
    /******/ })();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ (()=>{
        /******/ __webpack_require__1.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop)
        ;
    /******/ })();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ (()=>{
        /******/ // define __esModule on exports
        /******/ __webpack_require__1.r = (exports)=>{
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
    /******/ })();
    /******/ /************************************************************************/ var __webpack_exports__1 = {
    };
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (()=>{
        /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/ __webpack_require__1.r(__webpack_exports__1);
        /* harmony export */ __webpack_require__1.d(__webpack_exports__1, {
            /* harmony export */ "Experiment": ()=>/* reexport safe */ _experiment__WEBPACK_IMPORTED_MODULE_0__.Experiment
        });
        /* harmony import */ var _experiment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__1(/*! ./experiment */ "./src/experiment.ts");
    })();
/******/ })();

},{}]},["emU3S","kI0tF","4TH1x"], "4TH1x", "parcelRequiree394")

//# sourceMappingURL=index.8235d7e5.js.map
