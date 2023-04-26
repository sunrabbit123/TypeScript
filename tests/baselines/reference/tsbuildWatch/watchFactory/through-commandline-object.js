currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/tsconfig.json]
{}

//// [/user/username/projects/myproject/a.ts]
export class a { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/b.ts]
export class b { prop = "hello"; foo() { return this.prop; } }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js -b -w --extendedDiagnostics --watchFactory myplugin --allowPlugins
Output::
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[[90m12:00:29 AM[0m] Found 0 errors. Watching for file changes.

FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":"myplugin"} Config file /user/username/projects/myproject/tsconfig.json
Enabling watchFactory 'myplugin' from candidate paths: /user/username/projects/myproject,/a/lib/../..
Loading myplugin from /user/username/projects/myproject (resolved to /user/username/projects/myproject/node_modules)
Require:: Resolving myplugin from /user/username/projects/myproject/node_modules
Module myplugin:: create with config: {"name":"myplugin"} and options: {"watchFactory":"myplugin"}
Plugin validation succeeded
Custom watchFile: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":"myplugin"}
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":"myplugin"} Wild card directory /user/username/projects/myproject/tsconfig.json
Custom watchDirectory: /user/username/projects/myproject true {"watchFactory":"myplugin"}
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":"myplugin"} Wild card directory /user/username/projects/myproject/tsconfig.json
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a.ts 250 {"watchFactory":"myplugin"} Source file /user/username/projects/myproject/tsconfig.json
Custom watchFile: /user/username/projects/myproject/a.ts 250 {"watchFactory":"myplugin"}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b.ts 250 {"watchFactory":"myplugin"} Source file /user/username/projects/myproject/tsconfig.json
Custom watchFile: /user/username/projects/myproject/b.ts 250 {"watchFactory":"myplugin"}


Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"watch":true,"extendedDiagnostics":true,"allowPlugins":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)
/user/username/projects/myproject/b.ts (used version)

Plugin WatchedFiles::
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000,"options":{"watchFactory":"myplugin"}}
/user/username/projects/myproject/a.ts: *new*
  {"pollingInterval":250,"options":{"watchFactory":"myplugin"}}
/user/username/projects/myproject/b.ts: *new*
  {"pollingInterval":250,"options":{"watchFactory":"myplugin"}}

Plugin WatchedDirectories:Recursive::
/user/username/projects/myproject: *new*
  {"options":{"watchFactory":"myplugin"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
var a = /** @class */ (function () {
    function a() {
        this.prop = "hello";
    }
    a.prototype.foo = function () { return this.prop; };
    return a;
}());
exports.a = a;


//// [/user/username/projects/myproject/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
var b = /** @class */ (function () {
    function b() {
        this.prop = "hello";
    }
    b.prototype.foo = function () { return this.prop; };
    return b;
}());
exports.b = b;



Change:: Change file

Input::
//// [/user/username/projects/myproject/b.ts]
export class b { prop = "hello"; foo() { return this.prop; } }export function foo() { }


Before running Timeout callback:: count: 0
After running Timeout callback:: count: 0
Output::

exitCode:: ExitStatus.undefined


Change:: Invoke plugin watches

Input::

Before running Timeout callback:: count: 1
1: timerToBuildInvalidatedProject
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 250 {"watchFactory":"myplugin"} Source file /user/username/projects/myproject/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 250 {"watchFactory":"myplugin"} Source file /user/username/projects/myproject/tsconfig.json
[[90m12:00:32 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:38 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"watch":true,"extendedDiagnostics":true,"allowPlugins":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/b.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file changed its modified time
//// [/user/username/projects/myproject/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = exports.b = void 0;
var b = /** @class */ (function () {
    function b() {
        this.prop = "hello";
    }
    b.prototype.foo = function () { return this.prop; };
    return b;
}());
exports.b = b;
function foo() { }
exports.foo = foo;


