<p align="center">
    <img height="196" width="669" src="https://github.com/oziks/chuchote/blob/master/logo.png?raw=true" />
    <br/>
    <br/>
    <br/>
</p>

Configurable JavaScript logger.

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
