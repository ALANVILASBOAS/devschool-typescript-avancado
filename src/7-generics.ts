export type Wrapper<Type> = {
    data: Type;
}

export type StringWrapper<T extends string = string> = {
    data: T;
}

export function wrap<T extends string>(object: T): StringWrapper<T> {
    return {
        data: object,
    }
} 

const stringObj = "b";

export const wrapperString = wrap(stringObj);


export class GenericClass<T> {
    prop: T;

    constructor(property: T) {
        this.prop = property;
    }

    setProp(value: T) {
        this.prop = value;
    }
}

const genericInstance = new GenericClass<number>(123);
genericInstance.setProp(43534);
