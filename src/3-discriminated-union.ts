type Square = {
    type: 'square';
    size: number;
    name: string;
}

type Rectangle = {
    type: 'rectangle';
    width: number;
    height: number;
    name: string;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape.type === 'rectangle') {
        return shape.width * shape.height;
    } else {
        return shape.size * shape.size;
    }
}
