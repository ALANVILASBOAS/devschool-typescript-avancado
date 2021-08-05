
export type Constructor<T = {}> = new (...args: any[]) => T;


export function identifiable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        id = Math.round(Math.random() * 99999999);
    }
}

export interface NodeTyped {
    type: string;
}

export function changeableType<TBase extends Constructor<NodeTyped>>(base: TBase) {
    return class extends base {
        setType(t: string) {
            this.type = t;
        }
    }
}

export class Node<T extends string> implements NodeTyped {
    constructor(public readonly type: T) {

    }
}

export const IdentifiableNode = identifiable(Node);

const idNode = new IdentifiableNode("square");

export function timestampable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        readonly createdAt = new Date();
        updatedAt = new Date();

        setModified() {
            this.updatedAt = new Date();
        }
    }
}

export const TimedAndIdentifiedNode = timestampable(IdentifiableNode);

const timedAndIdentifiedNode = new TimedAndIdentifiedNode("square");

export const ChangeableTimedIdentifiedNode = changeableType(TimedAndIdentifiedNode);

const changeableTimedAndIdentifiedNode = new ChangeableTimedIdentifiedNode("square");

changeableTimedAndIdentifiedNode


