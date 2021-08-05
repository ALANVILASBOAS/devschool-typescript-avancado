export interface User {
    readonly id: string;
    name: string;
    email?: string;
    [index: number]: number;
}

const user: User = {
    id: "1234",
    name: "Alan Jhonnes",
    email: '',
    1: 1,
    2: 1,
    3: 5000,
    38247982734: 500,
    // 4: '5000', // erro pois é string
};

user.name = "Alan";
// user.id = "4321"; // erro pois é readonly

// email pode ser undefined
if (user.email) {
    user.email.toUpperCase();
}
