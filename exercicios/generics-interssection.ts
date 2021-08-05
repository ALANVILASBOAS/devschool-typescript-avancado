// Melhore a tipagem dessa função utilizando 
// generics e interssecção, retornando um tipo 
// mais específico e melhorando a tipagem dos argumentos
export function addPropertyToObject<P extends string, V, O extends {}>(
    property: P, value: V, object: O): O & { 
        [K in P]: V 
    } {
    return {
        ...object,
        [property]: value,
    } as any;
}

const resultado = addPropertyToObject('prop', 1234, {
    name: 'alan'
});

