export default class Storage<T> {
    private dat;
    delete(key: string): void;
    create(key: string, dat: T): void;
    get(key: string): T | undefined;
    filter(dat: (x: T) => boolean): FilterResults<T>;
    deleteAll(): void;
}
export declare class MultiStorage {
    private dats;
    newStorage<T>(key: string): void;
    access(key: string): Storage<unknown> | undefined;
    delete(key: string): void;
    deleteAll(): void;
}
export interface FilterResults<T> {
    count: number;
    items: {
        [x: string]: T;
    };
}
