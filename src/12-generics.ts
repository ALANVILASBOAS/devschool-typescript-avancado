export type Wrapper<T> = {
    data: T;
}

export type StringWrapper<T extends string = string> = {
    data: T;
}

export function wrap<T>(object: T): Wrapper<T> {
    return {
        data: object,
    }
} 

const stringObj = "alan";

export const wrapperString = wrap(stringObj);


export class GenericClass<T> {
    prop: T;

    constructor(property: T) {
        this.prop = property;
    }
}

const genericInstance = new GenericClass<number>(123);
genericInstance.prop;
