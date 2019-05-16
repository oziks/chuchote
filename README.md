<p align="center">
    <img height="196" width="669" src="https://github.com/oziks/chuchote/blob/master/logo.png?raw=true" />
    <br/>
    <br/>
    <br/>
</p>

Configurable JavaScript logger.

[![NPM Version](https://img.shields.io/npm/v/chuchote.svg?style=flat)](https://www.npmjs.com/package/chuchote)
[![NPM Downloads](https://img.shields.io/npm/dm/chuchote.svg?style=flat)](https://www.npmjs.com/package/chuchote)
[![Build Status](https://travis-ci.org/oziks/chuchote.svg?branch=master)](https://travis-ci.org/oziks/chuchote)
[![codecov](https://codecov.io/gh/oziks/chuchote/branch/master/graph/badge.svg)](https://codecov.io/gh/oziks/chuchote)

## Installation

```bash
$ yarn add chuchote
```

## Getting Started

`chuchote` expose a `createLogger` function which allows you to create a personalized logger.

```js
const chuchote = require("chuchote");

const log = chuchote.createLogger({
  filterLevel:
    process.env.NODE_ENV === "production"
      ? chuchote.logLevel.OFF
      : chuchote.logLevel.INFO,

  handler: (messages, { level }) => {
    console.log(`${level.name}: ${messages[0]}`);
  }
});

log.error("You made a mistake");
```
