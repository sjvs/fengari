/*jshint esversion: 6 */
"use strict";

const test       = require('tape');
const beautify   = require('js-beautify').js_beautify;

const tests      = require("./tests.js");
const getState   = tests.getState;
const toByteCode = tests.toByteCode;

const lvm        = require("../src/lvm.js");
const ldo        = require("../src/ldo.js");
const lapi       = require("../src/lapi.js");
const lauxlib    = require("../src/lauxlib.js");
const lua        = require('../src/lua.js');
const linit      = require('../src/linit.js');

test('luaG_typeerror', function (t) {
    let luaCode = `
        local a = true
        return #a
    `, L;
    
    t.plan(2);

    t.doesNotThrow(function () {

        let bc = toByteCode(luaCode).dataView;

        L = lauxlib.luaL_newstate();

        linit.luaL_openlibs(L);

        lapi.lua_load(L, bc, "test-typeerror");

        lapi.lua_pcall(L, 0, -1, 0);

    }, "JS Lua program ran without error");


    t.ok(
        lapi.lua_tostring(L, -1).endsWith("attempt to get length of a boolean value (local 'a')"),
        "Correct error was thrown"
    )
});


test('luaG_typeerror', function (t) {
    let luaCode = `
        local a = true
        return a.yo
    `, L;
    
    t.plan(2);

    t.doesNotThrow(function () {

        let bc = toByteCode(luaCode).dataView;

        L = lauxlib.luaL_newstate();

        linit.luaL_openlibs(L);

        lapi.lua_load(L, bc, "test-typeerror");

        lapi.lua_pcall(L, 0, -1, 0);

    }, "JS Lua program ran without error");

    t.ok(
        lapi.lua_tostring(L, -1).endsWith("attempt to index a boolean value (local 'a')"),
        "Correct error was thrown"
    )
});


test('luaG_typeerror', function (t) {
    let luaCode = `
        local a = true
        return a.yo
    `, L;
    
    t.plan(2);

    t.doesNotThrow(function () {

        let bc = toByteCode(luaCode).dataView;

        L = lauxlib.luaL_newstate();

        linit.luaL_openlibs(L);

        lapi.lua_load(L, bc, "test-typeerror");

        lapi.lua_pcall(L, 0, -1, 0);

    }, "JS Lua program ran without error");

    t.ok(
        lapi.lua_tostring(L, -1).endsWith("attempt to index a boolean value (local 'a')"),
        "Correct error was thrown"
    )
});


test('luaG_typeerror', function (t) {
    let luaCode = `
        local a = true
        a.yo = 1
    `, L;
    
    t.plan(2);

    t.doesNotThrow(function () {

        let bc = toByteCode(luaCode).dataView;

        L = lauxlib.luaL_newstate();

        linit.luaL_openlibs(L);

        lapi.lua_load(L, bc, "test-typeerror");

        lapi.lua_pcall(L, 0, -1, 0);

    }, "JS Lua program ran without error");

    t.ok(
        lapi.lua_tostring(L, -1).endsWith("attempt to index a boolean value (local 'a')"),
        "Correct error was thrown"
    )
});