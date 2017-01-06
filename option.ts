export interface Option<T> {
    /**
     * Returns true if this holder contains a (non-null) instance.
     *
     * @returns {Boolean}
     */
    isPresent(): boolean;

    /**
     * Returns the contained instance, which must be present. If the instance might be absent, use or(Object) or orNull() instead.
     *
     * @returns {T}
     */
    get(): T;

    /**
     * Returns the contained instance if it is present; defaultValue otherwise.
     * If no default value should be required because the instance is known to be present,
     * use get() instead. For a default value of null, use orNull().
     *
     * @param defaultValue
     * @returns {T}
     */
    or(defaultValue: T): T;

    /**
     * Returns the contained instance if it is present; null otherwise.
     *
     * @returns {T}
     */
    orNull(): T;

    /**
     * Returns true if object is an Optional instance, and either the contained references are equal to each other or both are absent.
     * Note that Optional instances of differing parameterized types can be equal.
     *
     * @param comparator
     * @returns {boolean}
     */
    equals(comparator: Option<T> | T): boolean;
}