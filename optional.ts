import {Option} from "./option";

function isDefined(value: any): boolean {
    return value !== null && typeof value !== "undefined";
}

export class Optional<T> implements Option<T> {
    constructor(private data: T) {}

    /**
     * Returns true if this holder contains a (non-null) instance.
     * @returns {Boolean}
     */
    public isPresent(): boolean {
        return isDefined(this.data);
    }

    /**
     * Returns the contained instance, which must be present. If the instance might be absent,
     * use or(Object) or orNull() instead.
     *
     * @returns {T}
     */
    public get(): T {
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
    public or(defaultValue: T): T {
        return this.data ? this.data : defaultValue;
    }

    /**
     * Returns the contained instance if it is present; null otherwise.
     *
     * @returns {T}
     */
    public orNull(): T {
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
    public equals(comparator: Optional<T> | T): boolean {
        let object = comparator;

        if (comparator instanceof Optional) {
            object = (comparator as Option<T>).orNull();
        }

        return this.data === object;
    }

    /**
     * Returns an Optional instance with no contained reference.
     *
     * @returns {Optional<T>}
     */
    public static absent<T>(): Optional<T> {
        return new Optional<T>(null);
    }

    /**
     * If nullableReference is non-null, returns an Optional instance containing that reference; otherwise returns absent().
     *
     * @param nullableReference
     * @returns {Option<T>}
     */
    public static fromNullable<T>(nullableReference: T): Optional<T> {
        return isDefined(nullableReference) ? Optional.of<T>(nullableReference) : Optional.absent<T>();
    }

    /**
     * Returns an Optional instance containing the given non-null reference.
     * To have null treated as absent(), use fromNullable(T) instead.
     *
     * @param value
     * @returns {Option<T>}
     */
    public static of<T>(value: T): Optional<T> {
        return new Optional<T>(value);
    }
}