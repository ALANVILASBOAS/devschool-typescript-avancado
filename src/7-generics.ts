// Tipo genérico que recebe um argumento de tipo "Type" que é usado 
// de alguma forma na definição do tipo, no caso, é utilizado na propriedade "data"
export type Wrapper<Type> = {
    data: Type;
}

// Os argumentos genéricos também podem ter alguma restrição e também valores padrões, no caso o argumento T 
// precisa ser do conjunto de strings e caso não seja passado nada, ele assume o tipo padrão de "string"
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

// Classes também podem ser genéricas
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
