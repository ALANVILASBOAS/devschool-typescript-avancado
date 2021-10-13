type Point = {
    x: number;
    y: number;
}

type Named = {
    name: string;
}

// Interssection de Point com Named
type NamedPoint = Point & Named;
