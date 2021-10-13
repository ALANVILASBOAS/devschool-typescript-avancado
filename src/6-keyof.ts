export type Point = { 
    x: number; 
    y: number;
};

// keyof é um operador do typescript para pegar todas propriedades de um tipo e montar uma união com as keys do tipo
export type PointKeys = keyof Point; // 'x' | 'y'

export function test(pointKeys: PointKeys) {
    if(pointKeys === 'x') {
        
    } else if(pointKeys === 'y') {

    } else {
        pointKeys // never
    }
}
