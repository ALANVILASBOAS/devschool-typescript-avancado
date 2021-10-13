type Point = {
    x: number;
    y: number;
}

type Named = {
    name: string;
}

type NamedPoint = Point & Named;
