export type User = {
    id: string;
    name: string;
}

export type UserByIds = {
    [prop: string]: User | undefined;
}

const usersByIds: UserByIds = {
    '23134': {
        id: '23134',
        name: 'Alan',
    }
};

usersByIds['abc'] = {
    id: '1234',
    name: 'Alan',
};

const usersCache: UserByIds = {};

function addToCache(user: User): void {
    usersCache[user.id] = user;
}

function getFromCache(id: string): User | undefined {
    return usersCache[id];
}

function removeFromCache(id: string): void {
    delete usersCache[id];
}
