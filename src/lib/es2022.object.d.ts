interface ObjectConstructor {
    /**
     * Determines whether an object has a property with the specified name.
     * @param o An object.
     * @param v A property name.
     */
    hasOwn<T extends {}, K extends string>(o: T, v: K): o is T & { [key in K]: unknown};
}
