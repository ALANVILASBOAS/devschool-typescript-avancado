const bigConfigObject = {
    url: "http://api.localhost",
    options: {
        retries: 2,
        agent: {
            https: false,
        }
    },
    sequence: [1, 2, 3],
    commands: {
        NEXT: 1,
        START: 2
    }
} as const; // "as const" é um cast especial do typescript para trabalhar com objetos que devem ser readonly


