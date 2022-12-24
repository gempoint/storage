"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiStorage = void 0;
class Storage {
    constructor() {
        this.dat = {};
    }
    delete(key) { delete this.dat[key]; }
    create(key, dat) {
        this.dat[key] = dat;
    }
    get(key) { return this.dat[key]; }
    filter(dat) {
        let result = {
            count: 0,
            items: {}
        };
        for (const y in this.dat) {
            const value = this.dat[y];
            const test = dat(value);
            if (test) {
                result.count++;
                result.items[y] = value;
            }
        }
        return result;
    }
    deleteAll() { this.dat = {}; }
}
exports.default = Storage;
class MultiStorage {
    constructor() {
        this.dats = {};
    }
    newStorage(key) {
        this.dats[key] = new Storage();
    }
    access(key) { return this.dats[key]; }
    delete(key) { delete this.dats[key]; }
    deleteAll() { this.dats = {}; }
}
exports.MultiStorage = MultiStorage;
//# sourceMappingURL=index.js.map