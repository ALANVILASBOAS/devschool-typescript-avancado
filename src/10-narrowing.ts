function double(x: number | string): number | string {
    if (typeof x === 'number') {
        return x * 2;
    } else {
        return (Number(x) * 2).toString();
    }
}
