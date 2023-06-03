
var loadYoga = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
    function (loadYoga = {}) {

      function aa() { h.buffer != q.buffer && r(); return q } function w() { h.buffer != q.buffer && r(); return ba } function ca() { h.buffer != q.buffer && r(); return da } function ea() { h.buffer != q.buffer && r(); return fa } function x() { h.buffer != q.buffer && r(); return ha } function y() { h.buffer != q.buffer && r(); return ia } function ja() { h.buffer != q.buffer && r(); return la } var z; z || (z = typeof loadYoga !== 'undefined' ? loadYoga : {}); var ma, na; z.ready = new Promise((a, b) => { ma = a; na = b });
      var oa = Object.assign({}, z), pa = (a, b) => { throw b; }, qa = "object" == typeof window, ra = "function" == typeof importScripts, B = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, D = z.ENVIRONMENT_IS_PTHREAD || !1, E = ""; function sa(a) { return z.locateFile ? z.locateFile(a, E) : E + a } var ta, ua;
      if (B) {
        var fs = require("fs"), va = require("path"); E = ra ? va.dirname(E) + "/" : __dirname + "/"; ta = (b, c) => { b = b.startsWith("file://") ? new URL(b) : va.normalize(b); return fs.readFileSync(b, c ? void 0 : "utf8") }; ua = b => { b = ta(b, !0); b.buffer || (b = new Uint8Array(b)); return b }; process.argv.slice(2); pa = (b, c) => { process.exitCode = b; throw c; }; z.inspect = () => "[Emscripten Module object]"; let a; try { a = require("worker_threads") } catch (b) {
          throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),
          b;
        } global.Worker = a.Worker
      } else if (qa || ra) ra ? E = self.location.href : "undefined" != typeof document && document.currentScript && (E = document.currentScript.src), _scriptDir && (E = _scriptDir), 0 !== E.indexOf("blob:") ? E = E.substr(0, E.replace(/[?#].*/, "").lastIndexOf("/") + 1) : E = "", B || (ta = a => { var b = new XMLHttpRequest; b.open("GET", a, !1); b.send(null); return b.responseText }, ra && (ua = a => { var b = new XMLHttpRequest; b.open("GET", a, !1); b.responseType = "arraybuffer"; b.send(null); return new Uint8Array(b.response) }));
      B && "undefined" == typeof performance && (global.performance = require("perf_hooks").performance); var wa = console.log.bind(console), xa = console.error.bind(console); B && (wa = (...a) => fs.writeSync(1, a.join(" ") + "\n"), xa = (...a) => fs.writeSync(2, a.join(" ") + "\n")); var ya = z.print || wa, F = z.printErr || xa; Object.assign(z, oa); oa = null; z.quit && (pa = z.quit); var za; z.wasmBinary && (za = z.wasmBinary); var noExitRuntime = z.noExitRuntime || !0; "object" != typeof WebAssembly && G("no native wasm support detected");
      var h, Aa, Ba = !1, H, q, ba, da, fa, ha, ia, Ca, la; function r() { var a = h.buffer; z.HEAP8 = q = new Int8Array(a); z.HEAP16 = da = new Int16Array(a); z.HEAP32 = ha = new Int32Array(a); z.HEAPU8 = ba = new Uint8Array(a); z.HEAPU16 = fa = new Uint16Array(a); z.HEAPU32 = ia = new Uint32Array(a); z.HEAPF32 = Ca = new Float32Array(a); z.HEAPF64 = la = new Float64Array(a) } var Da = z.INITIAL_MEMORY || 16777216; 65536 <= Da || G("INITIAL_MEMORY should be larger than STACK_SIZE, was " + Da + "! (STACK_SIZE=65536)");
      if (D) h = z.wasmMemory; else if (z.wasmMemory) h = z.wasmMemory; else if (h = new WebAssembly.Memory({ initial: Da / 65536, maximum: 32768, shared: !0 }), !(h.buffer instanceof SharedArrayBuffer)) throw F("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), B && F("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),
        Error("bad memory"); r(); Da = h.buffer.byteLength; var Ea, Fa = [], Ga = [], Ha = [], Ia = 0; function Ja() { return noExitRuntime || 0 < Ia } function Ka() { var a = z.preRun.shift(); Fa.unshift(a) } var J = 0, La = null, Ma = null; function G(a) { if (z.onAbort) z.onAbort(a); a = "Aborted(" + a + ")"; F(a); Ba = !0; H = 1; a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info."); na(a); throw a; } var K; K = "wasm-sync.wasm"; K.startsWith("data:application/octet-stream;base64,") || (K = sa(K));
      function Na(a) {
        var b = K; try { a: { try { if (b == K && za) { var c = new Uint8Array(za); break a } if (ua) { c = ua(b); break a } throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)"; } catch (e) { G(e) } c = void 0 } var d = new WebAssembly.Module(c); var f = new WebAssembly.Instance(d, a) } catch (e) {
          throw a = e.toString(), F("failed to compile wasm module: " + a), (a.includes("imported Memory") || a.includes("memory import")) && F("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."),
          e;
        } return [f, d]
      } function Oa(a) { this.name = "ExitStatus"; this.message = "Program terminated with exit(" + a + ")"; this.status = a } function Pa(a) { a.terminate(); a.onmessage = () => { } } function Qa(a) { (a = L.na[a]) || G(); L.lb(a) }
      function Ra(a, b, c) { c = b + c; for (var d = ""; !(b >= c);) { var f = a[b++]; if (!f) break; if (f & 128) { var e = a[b++] & 63; if (192 == (f & 224)) d += String.fromCharCode((f & 31) << 6 | e); else { var k = a[b++] & 63; f = 224 == (f & 240) ? (f & 15) << 12 | e << 6 | k : (f & 7) << 18 | e << 12 | k << 6 | a[b++] & 63; 65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023)) } } else d += String.fromCharCode(f) } return d } function Sa(a) { if (D) return Ta(1, 1, a); H = a; if (!Ja()) { L.qb(); if (z.onExit) z.onExit(a); Ba = !0 } pa(a, new Oa(a)) }
      function Ua(a) { H = a; if (D) throw Va(a), "unwind"; Sa(a) } function Wa(a) { a instanceof Oa || "unwind" == a || pa(1, a) }
      var L = {
        ua: [], ta: [], Na: [], na: {}, cb: function () { D && L.eb() }, tb: function () { }, eb: function () { L.receiveObjectTransfer = L.kb; L.threadInitTLS = L.Ma; L.setExitStatus = L.La; noExitRuntime = !1 }, La: function (a) { H = a }, wb: ["$terminateWorker"], qb: function () { for (var a of L.ta) Pa(a); for (a of L.ua) Pa(a); L.ua = []; L.ta = []; L.na = [] }, lb: function (a) { var b = a.ra; delete L.na[b]; L.ua.push(a); L.ta.splice(L.ta.indexOf(a), 1); a.ra = 0; Xa(b) }, kb: function () { }, Ma: function () { L.Na.forEach(a => a()) }, hb: a => new Promise(b => {
          a.onmessage = e => {
            e = e.data; var k =
              e.cmd; a.ra && (L.Qa = a.ra); if (e.targetThread && e.targetThread != Ya()) { var g = L.na[e.vb]; g ? g.postMessage(e, e.transferList) : F('Internal error! Worker sent a message "' + k + '" to target pthread ' + e.targetThread + ", but that thread no longer exists!") } else if ("checkMailbox" === k) Za(); else if ("spawnThread" === k) { if (k = L.Va()) L.ta.push(k), L.na[e.ra] = k, k.ra = e.ra, g = { cmd: "run", start_routine: e.ub, arg: e.sb, pthread_ptr: e.ra }, B && k.unref(), k.postMessage(g, e.xb) } else if ("cleanupThread" === k) Qa(e.thread); else if ("killThread" ===
                k) e = e.thread, k = L.na[e], delete L.na[e], Pa(k), Xa(e), L.ta.splice(L.ta.indexOf(k), 1), k.ra = 0; else if ("cancelThread" === k) L.na[e.thread].postMessage({ cmd: "cancel" }); else if ("loaded" === k) a.loaded = !0, b(a); else if ("print" === k) ya("Thread " + e.threadId + ": " + e.text); else if ("printErr" === k) F("Thread " + e.threadId + ": " + e.text); else if ("alert" === k) alert("Thread " + e.threadId + ": " + e.text); else if ("setimmediate" === e.target) a.postMessage(e); else if ("callHandler" === k) z[e.handler](...e.args); else k && F("worker sent an unknown command " +
                  k); L.Qa = void 0
          }; a.onerror = e => { F("worker sent an error! " + e.filename + ":" + e.lineno + ": " + e.message); throw e; }; B && (a.on("message", function (e) { a.onmessage({ data: e }) }), a.on("error", function (e) { a.onerror(e) })); var c = [], d = ["onExit", "onAbort", "print", "printErr"], f; for (f of d) z.hasOwnProperty(f) && c.push(f); a.postMessage({ cmd: "load", handlers: c, urlOrBlob: z.mainScriptUrlOrBlob || _scriptDir, wasmMemory: h, wasmModule: Aa })
        }), gb: function (a) { a() }, Oa: function () { var a = sa("wasm-sync.worker.js"); a = new Worker(a); L.ua.push(a) },
        Va: function () { 0 == L.ua.length && (L.Oa(), L.hb(L.ua[0])); return L.ua.pop() }
      }; z.PThread = L; function $a(a) { for (; 0 < a.length;)a.shift()(z) } z.establishStackSpace = function () { var a = Ya(), b = x()[a + 52 >> 2]; a = x()[a + 56 >> 2]; ab(b, b - a); bb(b) }; function Va(a) { if (D) return Ta(2, 0, a); Ua(a) } z.invokeEntryPoint = function (a, b) { a = Ea.get(a)(b); Ja() ? L.La(a) : cb(a) }; function db(a) { if (void 0 === a) return "_unknown"; a = a.replace(/[^a-zA-Z0-9_]/g, "$"); var b = a.charCodeAt(0); return 48 <= b && 57 >= b ? `_${a}` : a }
      function eb(a, b) { a = db(a); return { [a]: function () { return b.apply(this, arguments) } }[a] } var M = new function () { this.oa = [void 0]; this.Fa = []; this.get = function (a) { return this.oa[a] }; this.has = function (a) { return void 0 !== this.oa[a] }; this.$a = function (a) { var b = this.Fa.pop() || this.oa.length; this.oa[b] = a; return b }; this.ab = function (a) { this.oa[a] = void 0; this.Fa.push(a) } };
      function fb(a) { var b = Error, c = eb(a, function (d) { this.name = a; this.message = d; d = Error(d).stack; void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, "")) }); c.prototype = Object.create(b.prototype); c.prototype.constructor = c; c.prototype.toString = function () { return void 0 === this.message ? this.name : `${this.name}: ${this.message}` }; return c } var N = void 0; function O(a) { throw new N(a); }
      var gb = a => { a || O("Cannot use deleted val. handle = " + a); return M.get(a).value }, hb = a => { switch (a) { case void 0: return 1; case null: return 2; case !0: return 3; case !1: return 4; default: return M.$a({ Ka: 1, value: a }) } }, ib = void 0, jb = void 0; function P(a) { for (var b = ""; w()[a];)b += jb[w()[a++]]; return b } var kb = []; function lb() { for (; kb.length;) { var a = kb.pop(); a.ea.wa = !1; a["delete"]() } } var mb = void 0, Q = {}; function nb(a, b) { for (void 0 === b && O("ptr should not be undefined"); a.ia;)b = a.ya(b), a = a.ia; return b } var R = {};
      function ob(a) { a = pb(a); var b = P(a); S(a); return b } function qb(a, b) { var c = R[a]; void 0 === c && O(b + " has unknown type " + ob(a)); return c } function rb() { } var sb = !1; function tb(a) { --a.count.value; 0 === a.count.value && (a.ka ? a.la.pa(a.ka) : a.ha.fa.pa(a.ga)) } function ub(a, b, c) { if (b === c) return a; if (void 0 === c.ia) return null; a = ub(a, b, c.ia); return null === a ? null : c.Sa(a) } var vb = {}; function wb(a, b) { b = nb(a, b); return Q[b] } var xb = void 0; function yb(a) { throw new xb(a); }
      function zb(a, b) { b.ha && b.ga || yb("makeClassHandle requires ptr and ptrType"); !!b.la !== !!b.ka && yb("Both smartPtrType and smartPtr must be specified"); b.count = { value: 1 }; return T(Object.create(a, { ea: { value: b } })) } function T(a) { if ("undefined" === typeof FinalizationRegistry) return T = b => b, a; sb = new FinalizationRegistry(b => { tb(b.ea) }); T = b => { var c = b.ea; c.ka && sb.register(b, { ea: c }, b); return b }; rb = b => { sb.unregister(b) }; return T(a) } var Ab = {}; function Bb(a) { for (; a.length;) { var b = a.pop(); a.pop()(b) } }
      function Cb(a) { return this.fromWireType(x()[a >> 2]) } var Db = {}, Eb = {}; function U(a, b, c) { function d(g) { g = c(g); g.length !== a.length && yb("Mismatched type converter count"); for (var l = 0; l < a.length; ++l)V(a[l], g[l]) } a.forEach(function (g) { Eb[g] = b }); var f = Array(b.length), e = [], k = 0; b.forEach((g, l) => { R.hasOwnProperty(g) ? f[l] = R[g] : (e.push(g), Db.hasOwnProperty(g) || (Db[g] = []), Db[g].push(() => { f[l] = R[g]; ++k; k === e.length && d(f) })) }); 0 === e.length && d(f) }
      function Fb(a) { switch (a) { case 1: return 0; case 2: return 1; case 4: return 2; case 8: return 3; default: throw new TypeError(`Unknown type size: ${a}`); } }
      function V(a, b, c = {}) { if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance"); var d = b.name; a || O(`type "${d}" must have a positive integer typeid pointer`); if (R.hasOwnProperty(a)) { if (c.bb) return; O(`Cannot register type '${d}' twice`) } R[a] = b; delete Eb[a]; Db.hasOwnProperty(a) && (b = Db[a], delete Db[a], b.forEach(f => f())) } function Gb(a) { O(a.ea.ha.fa.name + " instance already deleted") } function W() { }
      function Hb(a, b, c) { if (void 0 === a[b].ja) { var d = a[b]; a[b] = function () { a[b].ja.hasOwnProperty(arguments.length) || O(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].ja})!`); return a[b].ja[arguments.length].apply(this, arguments) }; a[b].ja = []; a[b].ja[d.va] = d } }
      function Ib(a, b) { z.hasOwnProperty(a) ? (O(`Cannot register public name '${a}' twice`), Hb(z, a, a), z.hasOwnProperty(void 0) && O("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), z[a].ja[void 0] = b) : z[a] = b } function Jb(a, b, c, d, f, e, k, g) { this.name = a; this.constructor = b; this.qa = c; this.pa = d; this.ia = f; this.Ua = e; this.ya = k; this.Sa = g; this.Ia = [] }
      function Kb(a, b, c) { for (; b !== c;)b.ya || O(`Expected null or instance of ${c.name}, got an instance of ${b.name}`), a = b.ya(a), b = b.ia; return a } function Lb(a, b) { if (null === b) return this.Ca && O(`null is not a valid ${this.name}`), 0; b.ea || O(`Cannot pass "${Mb(b)}" as a ${this.name}`); b.ea.ga || O(`Cannot pass deleted object as a pointer of type ${this.name}`); return Kb(b.ea.ga, b.ea.ha.fa, this.fa) }
      function Nb(a, b) {
        if (null === b) { this.Ca && O(`null is not a valid ${this.name}`); if (this.Ba) { var c = this.Da(); null !== a && a.push(this.pa, c); return c } return 0 } b.ea || O(`Cannot pass "${Mb(b)}" as a ${this.name}`); b.ea.ga || O(`Cannot pass deleted object as a pointer of type ${this.name}`); !this.Aa && b.ea.ha.Aa && O(`Cannot convert argument of type ${b.ea.la ? b.ea.la.name : b.ea.ha.name} to parameter type ${this.name}`); c = Kb(b.ea.ga, b.ea.ha.fa, this.fa); if (this.Ba) switch (void 0 === b.ea.ka && O("Passing raw pointer to smart pointer is illegal"),
          this.pb) { case 0: b.ea.la === this ? c = b.ea.ka : O(`Cannot convert argument of type ${b.ea.la ? b.ea.la.name : b.ea.ha.name} to parameter type ${this.name}`); break; case 1: c = b.ea.ka; break; case 2: if (b.ea.la === this) c = b.ea.ka; else { var d = b.clone(); c = this.jb(c, hb(function () { d["delete"]() })); null !== a && a.push(this.pa, c) } break; default: O("Unsupporting sharing policy") }return c
      }
      function Ob(a, b) { if (null === b) return this.Ca && O(`null is not a valid ${this.name}`), 0; b.ea || O(`Cannot pass "${Mb(b)}" as a ${this.name}`); b.ea.ga || O(`Cannot pass deleted object as a pointer of type ${this.name}`); b.ea.ha.Aa && O(`Cannot convert argument of type ${b.ea.ha.name} to parameter type ${this.name}`); return Kb(b.ea.ga, b.ea.ha.fa, this.fa) }
      function X(a, b, c, d) { this.name = a; this.fa = b; this.Ca = c; this.Aa = d; this.Ba = !1; this.pa = this.jb = this.Da = this.Ja = this.pb = this.ib = void 0; void 0 !== b.ia ? this.toWireType = Nb : (this.toWireType = d ? Lb : Ob, this.ma = null) } function Pb(a, b) { z.hasOwnProperty(a) || yb("Replacing nonexistant public symbol"); z[a] = b; z[a].va = void 0 }
      function Qb(a, b) { var c = []; return function () { c.length = 0; Object.assign(c, arguments); if (a.includes("j")) { var d = z["dynCall_" + a]; d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b) } else d = Ea.get(b).apply(null, c); return d } } function Y(a, b) { a = P(a); var c = a.includes("j") ? Qb(a, b) : Ea.get(b); "function" != typeof c && O(`unknown function pointer with signature ${a}: ${b}`); return c } var Rb = void 0;
      function Sb(a, b) { function c(e) { f[e] || R[e] || (Eb[e] ? Eb[e].forEach(c) : (d.push(e), f[e] = !0)) } var d = [], f = {}; b.forEach(c); throw new Rb(`${a}: ` + d.map(ob).join([", "])); }
      function Tb(a, b, c, d, f) {
        var e = b.length; 2 > e && O("argTypes array size mismatch! Must at least get return value and 'this' types!"); var k = null !== b[1] && null !== c, g = !1; for (c = 1; c < b.length; ++c)if (null !== b[c] && void 0 === b[c].ma) { g = !0; break } var l = "void" !== b[0].name, m = e - 2, n = Array(m), p = [], t = []; return function () {
          arguments.length !== m && O(`function ${a} called with ${arguments.length} arguments, expected ${m} args!`); t.length = 0; p.length = k ? 2 : 1; p[0] = f; if (k) { var v = b[1].toWireType(t, this); p[1] = v } for (var u = 0; u < m; ++u)n[u] =
            b[u + 2].toWireType(t, arguments[u]), p.push(n[u]); u = d.apply(null, p); if (g) Bb(t); else for (var C = k ? 1 : 2; C < b.length; C++) { var I = 1 === C ? v : n[C - 2]; null !== b[C].ma && b[C].ma(I) } v = l ? b[0].fromWireType(u) : void 0; return v
        }
      } function Ub(a, b) { for (var c = [], d = 0; d < a; d++)c.push(y()[b + 4 * d >> 2]); return c } function Vb(a) { a >= M.Ha && 0 === --M.get(a).Ka && M.ab(a) } function Mb(a) { if (null === a) return "null"; var b = typeof a; return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a }
      function Yb(a, b) { switch (b) { case 2: return function (c) { var d = this.fromWireType; h.buffer != q.buffer && r(); return d.call(this, Ca[c >> 2]) }; case 3: return function (c) { return this.fromWireType(ja()[c >> 3]) }; default: throw new TypeError("Unknown float type: " + a); } }
      function Zb(a, b, c) { switch (b) { case 0: return c ? function (d) { return aa()[d] } : function (d) { return w()[d] }; case 1: return c ? function (d) { return ca()[d >> 1] } : function (d) { return ea()[d >> 1] }; case 2: return c ? function (d) { return x()[d >> 2] } : function (d) { return y()[d >> 2] }; default: throw new TypeError("Unknown integer type: " + a); } } function $b(a, b) { for (var c = "", d = 0; !(d >= b / 2); ++d) { var f = ca()[a + 2 * d >> 1]; if (0 == f) break; c += String.fromCharCode(f) } return c }
      function ac(a, b, c) { void 0 === c && (c = 2147483647); if (2 > c) return 0; c -= 2; var d = b; c = c < 2 * a.length ? c / 2 : a.length; for (var f = 0; f < c; ++f) { var e = a.charCodeAt(f); ca()[b >> 1] = e; b += 2 } ca()[b >> 1] = 0; return b - d } function bc(a) { return 2 * a.length } function cc(a, b) { for (var c = 0, d = ""; !(c >= b / 4);) { var f = x()[a + 4 * c >> 2]; if (0 == f) break; ++c; 65536 <= f ? (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023)) : d += String.fromCharCode(f) } return d }
      function dc(a, b, c) { void 0 === c && (c = 2147483647); if (4 > c) return 0; var d = b; c = d + c - 4; for (var f = 0; f < a.length; ++f) { var e = a.charCodeAt(f); if (55296 <= e && 57343 >= e) { var k = a.charCodeAt(++f); e = 65536 + ((e & 1023) << 10) | k & 1023 } x()[b >> 2] = e; b += 4; if (b + 4 > c) break } x()[b >> 2] = 0; return b - d } function ec(a) { for (var b = 0, c = 0; c < a.length; ++c) { var d = a.charCodeAt(c); 55296 <= d && 57343 >= d && ++c; b += 4 } return b } function fc(a) { if (!Ba) try { if (a(), !Ja()) try { D ? cb(H) : Ua(H) } catch (b) { Wa(b) } } catch (b) { Wa(b) } }
      function gc(a) { "function" === typeof Atomics.rb && (Atomics.rb(x(), a >> 2, a).value.then(Za), a += 128, Atomics.store(x(), a >> 2, 1)) } z.__emscripten_thread_mailbox_await = gc; function Za() { var a = Ya(); a && (gc(a), fc(() => hc())) } z.checkMailbox = Za; var ic = {}; function jc(a) { var b = ic[a]; return void 0 === b ? P(a) : b } var kc = []; function lc(a) { var b = kc.length; kc.push(a); return b } function mc(a, b) { for (var c = Array(a), d = 0; d < a; ++d)c[d] = qb(y()[b + 4 * d >> 2], "parameter " + d); return c } var nc = [], oc;
      oc = B ? () => { var a = process.hrtime(); return 1E3 * a[0] + a[1] / 1E6 } : () => performance.timeOrigin + performance.now(); function pc(a) { var b = qc(); a = a(); bb(b); return a } function Ta(a, b) { var c = arguments.length - 2, d = arguments; return pc(() => { for (var f = rc(8 * c), e = f >> 3, k = 0; k < c; k++) { var g = d[2 + k]; ja()[e + k] = g } return sc(a, c, f, b) }) } var tc = []; function uc(a) { return D ? Ta(3, 1, a) : 52 } function vc(a, b, c, d, f) { return D ? Ta(4, 1, a, b, c, d, f) : 70 } var wc = [null, [], []];
      function xc(a, b, c, d) { if (D) return Ta(5, 1, a, b, c, d); for (var f = 0, e = 0; e < c; e++) { var k = y()[b >> 2], g = y()[b + 4 >> 2]; b += 8; for (var l = 0; l < g; l++) { var m = w()[k + l], n = wc[a]; 0 === m || 10 === m ? ((1 === a ? ya : F)(Ra(n, 0)), n.length = 0) : n.push(m) } f += g } y()[d >> 2] = f; return 0 } L.cb(); N = z.BindingError = fb("BindingError"); M.oa.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }); M.Ha = M.oa.length; z.count_emval_handles = function () { for (var a = 0, b = M.Ha; b < M.oa.length; ++b)void 0 !== M.oa[b] && ++a; return a }; ib = z.PureVirtualError = fb("PureVirtualError");
      for (var yc = Array(256), zc = 0; 256 > zc; ++zc)yc[zc] = String.fromCharCode(zc); jb = yc; z.getInheritedInstanceCount = function () { return Object.keys(Q).length }; z.getLiveInheritedInstances = function () { var a = [], b; for (b in Q) Q.hasOwnProperty(b) && a.push(Q[b]); return a }; z.flushPendingDeletes = lb; z.setDelayFunction = function (a) { mb = a; kb.length && mb && mb(lb) }; xb = z.InternalError = fb("InternalError");
      W.prototype.isAliasOf = function (a) { if (!(this instanceof W && a instanceof W)) return !1; var b = this.ea.ha.fa, c = this.ea.ga, d = a.ea.ha.fa; for (a = a.ea.ga; b.ia;)c = b.ya(c), b = b.ia; for (; d.ia;)a = d.ya(a), d = d.ia; return b === d && c === a };
      W.prototype.clone = function () { this.ea.ga || Gb(this); if (this.ea.xa) return this.ea.count.value += 1, this; var a = T, b = Object, c = b.create, d = Object.getPrototypeOf(this), f = this.ea; a = a(c.call(b, d, { ea: { value: { count: f.count, wa: f.wa, xa: f.xa, ga: f.ga, ha: f.ha, ka: f.ka, la: f.la } } })); a.ea.count.value += 1; a.ea.wa = !1; return a }; W.prototype["delete"] = function () { this.ea.ga || Gb(this); this.ea.wa && !this.ea.xa && O("Object already scheduled for deletion"); rb(this); tb(this.ea); this.ea.xa || (this.ea.ka = void 0, this.ea.ga = void 0) };
      W.prototype.isDeleted = function () { return !this.ea.ga }; W.prototype.deleteLater = function () { this.ea.ga || Gb(this); this.ea.wa && !this.ea.xa && O("Object already scheduled for deletion"); kb.push(this); 1 === kb.length && mb && mb(lb); this.ea.wa = !0; return this }; X.prototype.Wa = function (a) { this.Ja && (a = this.Ja(a)); return a }; X.prototype.Ea = function (a) { this.pa && this.pa(a) }; X.prototype.argPackAdvance = 8; X.prototype.readValueFromPointer = Cb; X.prototype.deleteObject = function (a) { if (null !== a) a["delete"]() };
      X.prototype.fromWireType = function (a) {
        function b() { return this.Ba ? zb(this.fa.qa, { ha: this.ib, ga: c, la: this, ka: a }) : zb(this.fa.qa, { ha: this, ga: a }) } var c = this.Wa(a); if (!c) return this.Ea(a), null; var d = wb(this.fa, c); if (void 0 !== d) { if (0 === d.ea.count.value) return d.ea.ga = c, d.ea.ka = a, d.clone(); d = d.clone(); this.Ea(a); return d } d = this.fa.Ua(c); d = vb[d]; if (!d) return b.call(this); d = this.Aa ? d.Pa : d.pointerType; var f = ub(c, this.fa, d.fa); return null === f ? b.call(this) : this.Ba ? zb(d.fa.qa, { ha: d, ga: f, la: this, ka: a }) : zb(d.fa.qa,
          { ha: d, ga: f })
      }; Rb = z.UnboundTypeError = fb("UnboundTypeError");
      var Ac = [null, Sa, Va, uc, vc, xc], Dc = {
        E: function (a) { Bc(a, !ra, 1, !qa, 65536); L.Ma() }, y: function (a) { D ? postMessage({ cmd: "cleanupThread", thread: a }) : Qa(a) }, r: function (a, b, c) {
          a = P(a); b = qb(b, "wrapper"); c = gb(c); var d = [].slice, f = b.fa, e = f.qa, k = f.ia.qa, g = f.ia.constructor; a = eb(a, function () { f.ia.Ia.forEach(function (m) { if (this[m] === k[m]) throw new ib(`Pure virtual function ${m} must be implemented in JavaScript`); }.bind(this)); Object.defineProperty(this, "__parent", { value: e }); this.__construct.apply(this, d.call(arguments)) });
          e.__construct = function () { this === e && O("Pass correct 'this' to __construct"); var m = g.implement.apply(void 0, [this].concat(d.call(arguments))); rb(m); var n = m.ea; m.notifyOnDestruction(); n.xa = !0; Object.defineProperties(this, { ea: { value: n } }); T(this); m = n.ga; m = nb(f, m); Q.hasOwnProperty(m) ? O(`Tried to register registered instance: ${m}`) : Q[m] = this }; e.__destruct = function () { this === e && O("Pass correct 'this' to __destruct"); rb(this); var m = this.ea.ga; m = nb(f, m); Q.hasOwnProperty(m) ? delete Q[m] : O(`Tried to unregister unregistered instance: ${m}`) };
          a.prototype = Object.create(e); for (var l in c) a.prototype[l] = c[l]; return hb(a)
        }, l: function (a) {
          var b = Ab[a]; delete Ab[a]; var c = b.Da, d = b.pa, f = b.Ga, e = f.map(k => k.Za).concat(f.map(k => k.nb)); U([a], e, k => {
            var g = {}; f.forEach((l, m) => { var n = k[m], p = l.Xa, t = l.Ya, v = k[m + f.length], u = l.mb, C = l.ob; g[l.Ta] = { read: I => n.fromWireType(p(t, I)), write: (I, ka) => { var A = []; u(C, I, v.toWireType(A, ka)); Bb(A) } } }); return [{
              name: b.name, fromWireType: function (l) { var m = {}, n; for (n in g) m[n] = g[n].read(l); d(l); return m }, toWireType: function (l, m) {
                for (var n in g) if (!(n in
                  m)) throw new TypeError(`Missing field: "${n}"`); var p = c(); for (n in g) g[n].write(p, m[n]); null !== l && l.push(d, p); return p
              }, argPackAdvance: 8, readValueFromPointer: Cb, ma: d
            }]
          })
        }, x: function () { }, L: function (a, b, c, d, f) {
          var e = Fb(c); b = P(b); V(a, {
            name: b, fromWireType: function (k) { return !!k }, toWireType: function (k, g) { return g ? d : f }, argPackAdvance: 8, readValueFromPointer: function (k) {
              if (1 === c) var g = aa(); else if (2 === c) g = ca(); else if (4 === c) g = x(); else throw new TypeError("Unknown boolean type size: " + b); return this.fromWireType(g[k >>
                e])
            }, ma: null
          })
        }, h: function (a, b, c, d, f, e, k, g, l, m, n, p, t) {
          n = P(n); e = Y(f, e); g && (g = Y(k, g)); m && (m = Y(l, m)); t = Y(p, t); var v = db(n); Ib(v, function () { Sb(`Cannot construct ${n} due to unbound types`, [d]) }); U([a, b, c], d ? [d] : [], function (u) {
            u = u[0]; if (d) { var C = u.fa; var I = C.qa } else I = W.prototype; u = eb(v, function () {
              if (Object.getPrototypeOf(this) !== ka) throw new N("Use 'new' to construct " + n); if (void 0 === A.sa) throw new N(n + " has no accessible constructor"); var Wb = A.sa[arguments.length]; if (void 0 === Wb) throw new N(`Tried to invoke ctor of ${n} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(A.sa).toString()}) parameters instead!`);
              return Wb.apply(this, arguments)
            }); var ka = Object.create(I, { constructor: { value: u } }); u.prototype = ka; var A = new Jb(n, u, ka, t, C, e, g, m); A.ia && (void 0 === A.ia.za && (A.ia.za = []), A.ia.za.push(A)); C = new X(n, A, !0, !1); I = new X(n + "*", A, !1, !1); var Xb = new X(n + " const*", A, !1, !0); vb[a] = { pointerType: I, Pa: Xb }; Pb(v, u); return [C, I, Xb]
          })
        }, d: function (a, b, c, d, f, e, k) {
          var g = Ub(c, d); b = P(b); e = Y(f, e); U([], [a], function (l) {
            function m() { Sb(`Cannot call ${n} due to unbound types`, g) } l = l[0]; var n = `${l.name}.${b}`; b.startsWith("@@") && (b =
              Symbol[b.substring(2)]); var p = l.fa.constructor; void 0 === p[b] ? (m.va = c - 1, p[b] = m) : (Hb(p, b, n), p[b].ja[c - 1] = m); U([], g, function (t) { t = [t[0], null].concat(t.slice(1)); t = Tb(n, t, null, e, k); void 0 === p[b].ja ? (t.va = c - 1, p[b] = t) : p[b].ja[c - 1] = t; if (l.fa.za) for (const v of l.fa.za) v.constructor.hasOwnProperty(b) || (v.constructor[b] = t); return [] }); return []
          })
        }, q: function (a, b, c, d, f, e) {
          0 < b || G(); var k = Ub(b, c); f = Y(d, f); U([], [a], function (g) {
            g = g[0]; var l = `constructor ${g.name}`; void 0 === g.fa.sa && (g.fa.sa = []); if (void 0 !== g.fa.sa[b -
              1]) throw new N(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${g.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`); g.fa.sa[b - 1] = () => { Sb(`Cannot construct ${g.name} due to unbound types`, k) }; U([], k, function (m) { m.splice(1, 0, null); g.fa.sa[b - 1] = Tb(l, m, null, f, e); return [] }); return []
          })
        }, b: function (a, b, c, d, f, e, k, g) {
          var l = Ub(c, d); b = P(b); e = Y(f, e); U([], [a], function (m) {
            function n() {
              Sb(`Cannot call ${p} due to unbound types`,
                l)
            } m = m[0]; var p = `${m.name}.${b}`; b.startsWith("@@") && (b = Symbol[b.substring(2)]); g && m.fa.Ia.push(b); var t = m.fa.qa, v = t[b]; void 0 === v || void 0 === v.ja && v.className !== m.name && v.va === c - 2 ? (n.va = c - 2, n.className = m.name, t[b] = n) : (Hb(t, b, p), t[b].ja[c - 2] = n); U([], l, function (u) { u = Tb(p, u, m, e, k); void 0 === t[b].ja ? (u.va = c - 2, t[b] = u) : t[b].ja[c - 2] = u; return [] }); return []
          })
        }, K: function (a, b) {
          b = P(b); V(a, {
            name: b, fromWireType: function (c) { var d = gb(c); Vb(c); return d }, toWireType: function (c, d) { return hb(d) }, argPackAdvance: 8, readValueFromPointer: Cb,
            ma: null
          })
        }, o: function (a, b, c) { c = Fb(c); b = P(b); V(a, { name: b, fromWireType: function (d) { return d }, toWireType: function (d, f) { return f }, argPackAdvance: 8, readValueFromPointer: Yb(b, c), ma: null }) }, e: function (a, b, c, d, f) { b = P(b); -1 === f && (f = 4294967295); f = Fb(c); var e = g => g; if (0 === d) { var k = 32 - 8 * c; e = g => g << k >>> k } c = b.includes("unsigned") ? function (g, l) { return l >>> 0 } : function (g, l) { return l }; V(a, { name: b, fromWireType: e, toWireType: c, argPackAdvance: 8, readValueFromPointer: Zb(b, f, 0 !== d), ma: null }) }, c: function (a, b, c) {
          function d(e) {
            e >>=
            2; var k = y(); return new f(k.buffer, k[e + 1], k[e])
          } var f = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b]; c = P(c); V(a, { name: c, fromWireType: d, argPackAdvance: 8, readValueFromPointer: d }, { bb: !0 })
        }, p: function (a, b) {
          b = P(b); var c = "std::string" === b; V(a, {
            name: b, fromWireType: function (d) {
              var f = y()[d >> 2], e = d + 4; if (c) for (var k = e, g = 0; g <= f; ++g) { var l = e + g; if (g == f || 0 == w()[l]) { var m = k; k = l - k; m = m ? Ra(w(), m, k) : ""; if (void 0 === n) var n = m; else n += String.fromCharCode(0), n += m; k = l + 1 } } else {
                n =
                Array(f); for (g = 0; g < f; ++g)n[g] = String.fromCharCode(w()[e + g]); n = n.join("")
              } S(d); return n
            }, toWireType: function (d, f) {
              f instanceof ArrayBuffer && (f = new Uint8Array(f)); var e = "string" == typeof f; e || f instanceof Uint8Array || f instanceof Uint8ClampedArray || f instanceof Int8Array || O("Cannot pass non-string to std::string"); var k; if (c && e) for (var g = k = 0; g < f.length; ++g) { var l = f.charCodeAt(g); 127 >= l ? k++ : 2047 >= l ? k += 2 : 55296 <= l && 57343 >= l ? (k += 4, ++g) : k += 3 } else k = f.length; l = k; k = Cc(4 + l + 1); g = k + 4; y()[k >> 2] = l; if (c && e) {
                if (l +=
                  1, e = w(), 0 < l) { l = g + l - 1; for (var m = 0; m < f.length; ++m) { var n = f.charCodeAt(m); if (55296 <= n && 57343 >= n) { var p = f.charCodeAt(++m); n = 65536 + ((n & 1023) << 10) | p & 1023 } if (127 >= n) { if (g >= l) break; e[g++] = n } else { if (2047 >= n) { if (g + 1 >= l) break; e[g++] = 192 | n >> 6 } else { if (65535 >= n) { if (g + 2 >= l) break; e[g++] = 224 | n >> 12 } else { if (g + 3 >= l) break; e[g++] = 240 | n >> 18; e[g++] = 128 | n >> 12 & 63 } e[g++] = 128 | n >> 6 & 63 } e[g++] = 128 | n & 63 } } e[g] = 0 }
              } else if (e) for (e = 0; e < l; ++e)m = f.charCodeAt(e), 255 < m && (S(g), O("String has UTF-16 code units that do not fit in 8 bits")),
                w()[g + e] = m; else for (e = 0; e < l; ++e)w()[g + e] = f[e]; null !== d && d.push(S, k); return k
            }, argPackAdvance: 8, readValueFromPointer: Cb, ma: function (d) { S(d) }
          })
        }, k: function (a, b, c) {
          c = P(c); if (2 === b) { var d = $b; var f = ac; var e = bc; var k = () => ea(); var g = 1 } else 4 === b && (d = cc, f = dc, e = ec, k = () => y(), g = 2); V(a, {
            name: c, fromWireType: function (l) { for (var m = y()[l >> 2], n = k(), p, t = l + 4, v = 0; v <= m; ++v) { var u = l + 4 + v * b; if (v == m || 0 == n[u >> g]) t = d(t, u - t), void 0 === p ? p = t : (p += String.fromCharCode(0), p += t), t = u + b } S(l); return p }, toWireType: function (l, m) {
              "string" !=
              typeof m && O(`Cannot pass non-string to C++ string type ${c}`); var n = e(m), p = Cc(4 + n + b); y()[p >> 2] = n >> g; f(m, p + 4, n + b); null !== l && l.push(S, p); return p
            }, argPackAdvance: 8, readValueFromPointer: Cb, ma: function (l) { S(l) }
          })
        }, m: function (a, b, c, d, f, e) { Ab[a] = { name: P(b), Da: Y(c, d), pa: Y(f, e), Ga: [] } }, j: function (a, b, c, d, f, e, k, g, l, m) { Ab[a].Ga.push({ Ta: P(b), Za: c, Xa: Y(d, f), Ya: e, nb: k, mb: Y(g, l), ob: m }) }, M: function (a, b) { b = P(b); V(a, { fb: !0, name: b, argPackAdvance: 0, fromWireType: function () { }, toWireType: function () { } }) }, F: function (a,
          b) { a == b ? setTimeout(() => Za()) : D ? postMessage({ targetThread: a, cmd: "checkMailbox" }) : (a = L.na[a]) && a.postMessage({ cmd: "checkMailbox" }) }, C: function () { return -1 }, D: gc, H: function (a) { B && L.na[a].ref() }, u: function (a, b, c, d, f) { a = kc[a]; b = gb(b); c = jc(c); var e = []; y()[d >> 2] = hb(e); return a(b, c, e, f) }, v: function (a, b, c, d) { a = kc[a]; b = gb(b); c = jc(c); a(b, c, null, d) }, i: Vb, n: function (a, b) {
            var c = mc(a, b), d = c[0]; b = d.name + "_$" + c.slice(1).map(function (k) { return k.name }).join("_") + "$"; var f = nc[b]; if (void 0 !== f) return f; var e = Array(a -
              1); f = lc((k, g, l, m) => { for (var n = 0, p = 0; p < a - 1; ++p)e[p] = c[p + 1].readValueFromPointer(m + n), n += c[p + 1].argPackAdvance; k = k[g].apply(k, e); for (p = 0; p < a - 1; ++p)c[p + 1].Ra && c[p + 1].Ra(e[p]); if (!d.fb) return d.toWireType(l, k) }); return nc[b] = f
          }, s: function (a) { 4 < a && (M.get(a).Ka += 1) }, t: function (a) { var b = gb(a); Bb(b); Vb(a) }, f: function () { G("") }, G: function () { Ia += 1; throw "unwind"; }, g: oc, B: function (a, b, c) { tc.length = b; c >>= 3; for (var d = 0; d < b; d++)tc[d] = ja()[c + d]; return Ac[a].apply(null, tc) }, A: function (a) {
            var b = w().length; a >>>= 0; if (a <=
              b || 2147483648 < a) return !1; for (var c = 1; 4 >= c; c *= 2) { var d = b * (1 + .2 / c); d = Math.min(d, a + 100663296); var f = Math, e = f.min; d = Math.max(a, d); d += (65536 - d % 65536) % 65536; a: { var k = h.buffer; try { h.grow(e.call(f, 2147483648, d) - k.byteLength + 65535 >>> 16); r(); var g = 1; break a } catch (l) { } g = void 0 } if (g) return !0 } return !1
          }, z: Ua, J: uc, w: vc, I: xc, a: h || z.wasmMemory
      }, Z = function () {
        function a(c, d) {
          c = c.exports; z.asm = c; L.Na.push(z.asm.O); Ea = z.asm._; Ga.unshift(z.asm.N); Aa = d; L.gb(() => {
            J--; z.monitorRunDependencies && z.monitorRunDependencies(J);
            if (0 == J && (null !== La && (clearInterval(La), La = null), Ma)) { var f = Ma; Ma = null; f() }
          }); return c
        } var b = { a: Dc }; J++; z.monitorRunDependencies && z.monitorRunDependencies(J); if (z.instantiateWasm) try { return z.instantiateWasm(b, a) } catch (c) { F("Module.instantiateWasm callback failed with error: " + c), na(c) } b = Na(b); return a(b[0], b[1])
      }(); z.__emscripten_tls_init = Z.O; var Ya = z._pthread_self = Z.P, pb = Z.Q; z.__embind_initialize_bindings = Z.R; var Bc = z.__emscripten_thread_init = Z.S; z.__emscripten_thread_crashed = Z.T;
      var sc = Z.U, Xa = Z.V, cb = z.__emscripten_thread_exit = Z.W, Cc = Z.X, hc = z.__emscripten_check_mailbox = Z.Y, S = Z.Z, ab = Z.$, qc = Z.aa, bb = Z.ba, rc = Z.ca; z.dynCall_jiji = Z.da; z.keepRuntimeAlive = Ja; z.wasmMemory = h; z.ExitStatus = Oa; z.PThread = L; var Ec; Ma = function Fc() { Ec || Gc(); Ec || (Ma = Fc) };
      function Gc() {
        function a() { if (!Ec && (Ec = !0, z.calledRun = !0, !Ba)) { D || $a(Ga); ma(z); if (z.onRuntimeInitialized) z.onRuntimeInitialized(); if (!D) { if (z.postRun) for ("function" == typeof z.postRun && (z.postRun = [z.postRun]); z.postRun.length;) { var b = z.postRun.shift(); Ha.unshift(b) } $a(Ha) } } } if (!(0 < J)) if (D) ma(z), D || $a(Ga), startWorker(z); else {
          if (z.preRun) for ("function" == typeof z.preRun && (z.preRun = [z.preRun]); z.preRun.length;)Ka(); $a(Fa); 0 < J || (z.setStatus ? (z.setStatus("Running..."), setTimeout(function () {
            setTimeout(function () { z.setStatus("") },
              1); a()
          }, 1)) : a())
        }
      } if (z.preInit) for ("function" == typeof z.preInit && (z.preInit = [z.preInit]); 0 < z.preInit.length;)z.preInit.pop()(); Gc();


      return loadYoga
    }

  );
})();
// if (typeof exports === 'object' && typeof module === 'object')
//   module.exports = loadYoga;
// else if (typeof define === 'function' && define['amd'])
//   define([], function() { return loadYoga; });
// else if (typeof exports === 'object')
//   exports["loadYoga"] = loadYoga;
export default loadYoga