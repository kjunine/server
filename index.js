#!/usr/bin/env node
var express = require('express');
var fs = require('fs');

var app = express(express.logger());

var current = process.cwd();
var port = process.argv[2] || 8000;

app.use(express.static(current));

app.listen(port, function() {
  console.log("Server for", current, "on", port);
});
