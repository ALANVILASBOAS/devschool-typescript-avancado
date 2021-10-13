export type Point = { 
    x: number; 
    y: number;
};
export type PointKeys = keyof Point; // 'x' | 'y'

export function test(pointKeys: PointKeys) {
    if(pointKeys === 'x') {
        
    } else if(pointKeys === 'y') {

    } else {
        pointKeys // never
    }
}
