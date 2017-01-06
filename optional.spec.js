"use strict";
const ava_1 = require("ava");
const optional_1 = require("./optional");
ava_1.test("optional should return instance from value", t => {
    const optional = optional_1.Optional.of("foobar");
    t.truthy(optional.isPresent());
});
ava_1.test("optional should return instance from absent value", t => {
    const optional = optional_1.Optional.absent();
    t.falsy(optional.isPresent());
});
ava_1.test("optional should return instance from nullable vablue", t => {
    const optional = optional_1.Optional.fromNullable(null);
    t.falsy(optional.isPresent());
    const optional2 = optional_1.Optional.fromNullable("foobar");
    t.truthy(optional2.isPresent());
});
ava_1.test("optional should return null if its null", t => {
    const optional = optional_1.Optional.absent();
    t.is(optional.orNull(), null);
});
ava_1.test("optional should return if its equal", t => {
    const optional = optional_1.Optional.of("foobar");
    t.truthy(optional.equals("foobar"));
});
ava_1.test("optional should return default value if null", t => {
    const optional = optional_1.Optional.absent();
    t.is(optional.or("foobar"), "foobar");
});
ava_1.test("optional should return value if not null", t => {
    const optional = optional_1.Optional.of("foobar");
    t.is(optional.or("milkyway"), "foobar");
});
ava_1.test("optional should return value", t => {
    const optional = optional_1.Optional.of("foobar");
    t.is(optional.get(), "foobar");
});
