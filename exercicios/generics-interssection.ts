// Melhore a tipagem dessa função utilizando 
// generics e interssecção, retornando um tipo 
// mais específico e melhorando a tipagem dos argumentos
export function addPropertyToObject(property: string, value: any, object: any) {
    return {
        ...object,
        [property]: value,
    }
}

const resultado = addPropertyToObject('prop', 'valor', {});
