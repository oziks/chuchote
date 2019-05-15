#!/usr/bin/env node

const chuchote = require("../../dist/chuchote.cjs");

const debug = chuchote.createLogger({
  filterLevel: chuchote.logLevel.INFO
});

debug.error("You made a mistake");
