export type User = {
    id: string;
    name: string;
}

export type UserByIds = {
    [id: string]: User;
}

const usersByIds: UserByIds = {
    '23134': {
        id: '23134',
        name: 'Alan',
    }
};


