"use strict";
function isDefined(value) {
    return value !== null && typeof value !== "undefined";
}
class Optional {
    constructor(data) {
        this.data = data;
    }
    /**
     * Returns true if this holder contains a (non-null) instance.
     * @returns {Boolean}
     */
    isPresent() {
        return isDefined(this.data);
    }
    /**
     * Returns the contained instance, which must be present. If the instance might be absent,
     * use or(Object) or orNull() instead.
     *
     * @returns {T}
     */
    get() {
        return this.data;
    }
    /**
     * Returns the contained instance if it is present; defaultValue otherwise.
     * If no default value should be required because the instance is known to be present,
     * use get() instead. For a default value of null, use orNull().
     *
     * @param defaultValue
     * @returns {T}
     */
    or(defaultValue) {
        return this.data ? this.data : defaultValue;
    }
    /**
     * Returns the contained instance if it is present; null otherwise.
     *
     * @returns {T}
     */
    orNull() {
        return isDefined(this.data) ? this.data : null;
    }
    /**
     * Returns true if object is an Optional instance, and either the contained
     * references are equal to each other or both are absent.
     * Note that Optional instances of differing parameterized types can be equal.
     *
     * @param comparator
     * @returns {boolean}
     */
    equals(comparator) {
        let object = comparator;
        if (comparator instanceof Optional) {
            object = comparator.orNull();
        }
        return this.data === object;
    }
    /**
     * Returns an Optional instance with no contained reference.
     *
     * @returns {Optional<T>}
     */
    static absent() {
        return new Optional(null);
    }
    /**
     * If nullableReference is non-null, returns an Optional instance containing that reference; otherwise returns absent().
     *
     * @param nullableReference
     * @returns {Option<T>}
     */
    static fromNullable(nullableReference) {
        return isDefined(nullableReference) ? Optional.of(nullableReference) : Optional.absent();
    }
    /**
     * Returns an Optional instance containing the given non-null reference.
     * To have null treated as absent(), use fromNullable(T) instead.
     *
     * @param value
     * @returns {Option<T>}
     */
    static of(value) {
        return new Optional(value);
    }
}
exports.Optional = Optional;
