import { Option } from "./option";
export declare class Optional<T> implements Option<T> {
    private data;
    constructor(data: T);
    /**
     * Returns true if this holder contains a (non-null) instance.
     * @returns {Boolean}
     */
    isPresent(): boolean;
    /**
     * Returns the contained instance, which must be present. If the instance might be absent,
     * use or(Object) or orNull() instead.
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
     * Returns true if object is an Optional instance, and either the contained
     * references are equal to each other or both are absent.
     * Note that Optional instances of differing parameterized types can be equal.
     *
     * @param comparator
     * @returns {boolean}
     */
    equals(comparator: Optional<T> | T): boolean;
    /**
     * Returns an Optional instance with no contained reference.
     *
     * @returns {Optional<T>}
     */
    static absent<T>(): Optional<T>;
    /**
     * If nullableReference is non-null, returns an Optional instance containing that reference; otherwise returns absent().
     *
     * @param nullableReference
     * @returns {Option<T>}
     */
    static fromNullable<T>(nullableReference: T): Optional<T>;
    /**
     * Returns an Optional instance containing the given non-null reference.
     * To have null treated as absent(), use fromNullable(T) instead.
     *
     * @param value
     * @returns {Option<T>}
     */
    static of<T>(value: T): Optional<T>;
}
