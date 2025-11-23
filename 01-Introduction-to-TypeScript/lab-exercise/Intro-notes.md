# TypesScript introduction

`ctrl + shift + v`

**`Learning Video - Intro to TypeScript with Yourdan Nedelchev`**

- https://www.youtube.com/watch?v=i-xHQCGa2xY
- https://www.typescriptlang.org/docs/handbook/intro.html // handbook typescript
- https://github.com/Yoan-Nedelchev/typescript-october-2025

### 1. Install TypeScript and VS Code

- npm install -g typescript // latest stable build
- tsc --version // should return the version
- tsc --init // this will create a new tsconfig.json file

`In the tsconfig.json file, please remove the comments from
the following:`

```ts
{
"compilerOptions" : {
"target": "esnext", // ECMAScript target version
"module": "esnext", // module code generation
"sourceMap": true, // Generates corresponding .map file
"strict": true, // strict type-checking options
"outDir": "out", // redirect output to the directory.
}
}
```

### 2. Transpiling TypeScript Code

`After creating tsconfig.json, you can use the TypeScript
compiler (tsc) to convert .ts files into .js`

```ts
npx tsc // Transpile all files according to tsconfig.json
```

#### After running npx tsc:

- a new folder such as dist/ or build/ will be generated
- Inside it, you’ll find the compiled JavaScript files ready to run
- Once your files are transpiled, run them with Node.js:

```ts
node dist/index.js //This executes the compiled JavaScript code
```

#### Alternative: Using ts-node

_If you want to avoid manual compilation, you can use ts-node,
which runs .ts files directly_

- Install ts-node as development dependency:

```ts
npm install -D ts-node
```
