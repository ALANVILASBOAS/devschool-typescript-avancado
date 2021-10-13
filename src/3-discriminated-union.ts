type Square = {
    type: 'square';
    size: number;
}

type Rectangle = {
    type: 'rectangle';
    width: number;
    height: number;
}

// união com discriminante na propriedade "type"
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    // afunilamento feito por meio do discriminante
    if (shape.type === 'rectangle') {
        return shape.width * shape.height;
    } else if (shape.type === 'square') {
        return shape.size * shape.size;
    } else {
        shape // never
    }
}
