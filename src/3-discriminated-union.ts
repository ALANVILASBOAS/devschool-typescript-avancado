type Square = {
    type: 'square';
    size: number;
}

type Rectangle = {
    type: 'rectangle';
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape.type === 'rectangle') {
        return shape.width * shape.height;
    } else if (shape.type === 'square') {
        return shape.size * shape.size;
    } else {
        shape // never
    }
}
