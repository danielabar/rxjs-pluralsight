<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Reactive Programming using RxJS](#reactive-programming-using-rxjs)
  - [Observers and Observables](#observers-and-observables)
    - [Reactive Programming](#reactive-programming)
    - [Installing RxJS with npm](#installing-rxjs-with-npm)
    - [Configuration and Setup](#configuration-and-setup)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Reactive Programming using RxJS

> My notes from Pluralsight [course](https://app.pluralsight.com/library/courses/reactive-programming-rxjs-getting-started/table-of-contents)

## Observers and Observables

### Reactive Programming

RxJS === Reactive Extensions for JavaScript

[reactivex.io](http://reactivex.io/) | [RxJS docs](http://reactivex.io/rxjs/)

RxJS is an implemetation of the ReactiveX API, also has implementations for other languages such as Java, C++, etc.

RxJS can be used anywhere JavaScript can be used such as browser or Node.

ReactiveX === API for asynchronous programming with observable streams.

Asynchronous programming === Wait for something to happen, then react to something happening. eg: wait for user to click a button, submit a form, sending a request to server and waiting for response to deliver updated data, wait for mouse movements in a game.

RxJS useful when interesting events happen sometime in the future, and need code to respond to future events and activities.

**Observable Streams**

Consider an array of movie titles, want to filter on titles starting with "S", but array is changing over time, eg: new movies being pushed via websockets, or user entering more data. Need to *observe* the array and *react* when new data arrives.

Observable stream is like an array but populated over time, i.e. in the future, array will contain new data.

RxJS supports use of operators like `filter` to process data as it arrives.

It's not an array of data, but a `stream`, for example when new movie arrives, can react to it, then move on to next piece of data whenever it arrives. Array has size limitation vs stream which can continue infinitely into the future. eg, stream of mousemove events. Thinking of these as a sequence of events, can filter out those not interested in, and react to those are interested in.

### Installing RxJS with npm

```shell
npm init // accept all defaults
npm install rxjs --save
npm install webpack webpack-dev-server typescript typings ts-loader --save-dev
```

`ts-loader` helps webpack work with typescript.

Tell typescript about ES2015:

```shell
node_modules/.bin/typings install dt~es6-shim --global --save
```

### Configuration and Setup

**Configure Typescript**

`tsconfig.json`

Use commonjs module format because that's what webpack understands.

**Configure Webpack**

`webpack.config.js`

[Entrypoint](hello-rxjs/main.ts)
