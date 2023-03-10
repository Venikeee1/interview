# interview
Common questions for frontend developer.

## HTML
- What is new in css and html
- display variants
- positiong
- css variables
- Buttton vs anchor
- Semantic tags

## JS
- how browser works
- repaint and reflow
- Js gamechanger features from ES6.
- ES what is new for today.
- var, let, const
- JS types
- Symbols
- rest, spread
- function expretion vs function declaration
- arrow fn vs fn
- closures
- Objects
- Map, Set, Proxy
- Prototype inheritense vs OOP
- Prototypes vs __proto__
- Can you write your own 'instance of'
- Describe process of creating object by using function contructor and operator 'new'
- Promises
- Mikrotasks, makrotasks
- @@@ How js works(AST(abstract syntax tree), optimizator, JIT(just in time))
- Cashe in V8 and hidden classes js
- Write your own subscriber
- Task about optimiaztion of searching in 100k sorted items items
- Promises vs Observable
- Can we implement Promise.all in async/await style?
- CommonJS vs AMD

---------Browser behaviors and HTTP---------
- Describe flow of HTTP request
- CORS vs jsonp and why they needed
- What type of security vulnerability do you know
- How to increase performance

---------Team works---------
- How would you manege a new large project. What tools will you use?
- How you are planing your workflow?
- How you gonna structure your project?
- How would you control code quality on your project?

---------Vue---------
1) Reactivity
2) data vs computed vs watcher
3) Event propagation
4) slots
5) Vuex
6) nextTick
7) Provide, Inject

<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  name: 'Hello',
  data: {
    value: 1
  },
  mounted() {
    for (i = 0; i < 100; i++ ) {
      this.value = this.value++;
    }
  }
}
</script>
