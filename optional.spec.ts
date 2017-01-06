import {test} from "ava";
import {Optional} from "./optional";

test("optional should return instance from value", t => {
    const optional = Optional.of("foobar");
    t.truthy(optional.isPresent());
});

test("optional should return instance from absent value", t => {
    const optional = Optional.absent<string>();
    t.falsy(optional.isPresent());
});

test("optional should return instance from nullable vablue", t => {
    const optional = Optional.fromNullable<string>(null);
    t.falsy(optional.isPresent());

    const optional2 = Optional.fromNullable<string>("foobar");
    t.truthy(optional2.isPresent());
});

test("optional should return null if its null", t => {
    const optional = Optional.absent<string>();
    t.is(optional.orNull(), null);
});

test("optional should return if its equal", t => {
    const optional = Optional.of("foobar");
    t.truthy(optional.equals("foobar"));
});

test("optional should return default value if null", t => {
    const optional = Optional.absent<string>();
    t.is(optional.or("foobar"), "foobar");
});

test("optional should return value if not null", t => {
    const optional = Optional.of("foobar");
    t.is(optional.or("milkyway"), "foobar");
});

test("optional should return value", t => {
    const optional = Optional.of("foobar");
    t.is(optional.get(), "foobar");
});