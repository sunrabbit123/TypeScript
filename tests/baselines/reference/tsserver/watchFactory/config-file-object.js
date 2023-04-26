currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/tsconfig.json]
{
 "watchOptions": {
  "watchFactory": {
   "name": "myplugin",
   "myconfig": "somethingelse"
  }
 }
}

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


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/a.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/a.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/a.ts",
  "/user/username/projects/myproject/b.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 },
 "watchOptions": {
  "watchFactory": {
   "name": "myplugin",
   "myconfig": "somethingelse"
  }
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Enabling watchFactory 'myplugin' from candidate paths: /a/pluginprobe1,/a/pluginprobe2,/a/lib/tsc.js/../../..
Info seq  [hh:mm:ss:mss] Loading myplugin from /a/pluginprobe1 (resolved to /a/pluginprobe1/node_modules)
CustomRequire:: Resolving myplugin from /a/pluginprobe1/node_modules
Module myplugin:: create with config: {"name":"myplugin","myconfig":"somethingelse"} and options: {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Info seq  [hh:mm:ss:mss] Plugin validation succeeded
Custom watchFile: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Custom watchDirectory: /user/username/projects/myproject true {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Custom watchDirectory: /user/username/projects/myproject/node_modules/@types true {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Custom watchDirectory: /user/username/projects/node_modules/@types true {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a.ts SVC-1-0 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/b.ts Text-1 "export class b { prop = \"hello\"; foo() { return this.prop; } }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	a.ts
	  Matched by default include pattern '**/*'
	b.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

FsWatches::
/user/username/projects/myproject/b.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

Plugin WatchedFiles::
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}

Plugin WatchedDirectories:Recursive::
/user/username/projects/myproject: *new*
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/node_modules/@types: *new*
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/node_modules/@types: *new*
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}

Add a file
Before running Timeout callback:: count: 0
//// [/user/username/projects/myproject/c.ts]
export class a { prop = "hello"; foo() { return this.prop; } }


After running Timeout callback:: count: 0

Invoke plugin watches
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/username/projects/myproject/c.ts :: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/c.ts :: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Before running Timeout callback:: count: 2
1: /user/username/projects/myproject/tsconfig.json
2: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a.ts SVC-1-0 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/b.ts Text-1 "export class b { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/c.ts Text-1 "export class a { prop = \"hello\"; foo() { return this.prop; } }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	a.ts
	  Matched by default include pattern '**/*'
	b.ts
	  Matched by default include pattern '**/*'
	c.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
After running Timeout callback:: count: 0

FsWatches::
/user/username/projects/myproject/b.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/c.ts: *new*
  {}

Plugin WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}

Plugin WatchedDirectories:Recursive::
/user/username/projects/myproject:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/node_modules/@types:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/node_modules/@types:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configurePlugin",
      "arguments": {
        "pluginName": "myplugin",
        "configuration": {
          "extraData": "myData"
        }
      },
      "seq": 2,
      "type": "request"
    }
Custom:: onConfigurationChanged:: {"extraData":"myData"}
Info seq  [hh:mm:ss:mss] response:
    {"seq":0,"type":"response","command":"configurePlugin","request_seq":2,"success":true,"performanceData":{"updateGraphDurationMs":*}}
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configurePlugin",
      "arguments": {
        "pluginName": "randomplugin",
        "configuration": {
          "extraData": "myData"
        }
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {"seq":0,"type":"response","command":"configurePlugin","request_seq":3,"success":true,"performanceData":{"updateGraphDurationMs":*}}
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request
