export default class Storage<T> {
  private dat: Record<string, T> = {}

  delete(key: string) { delete this.dat[key] }

  create(key: string, dat: T) {
    this.dat[key] = dat;
  }

  get(key: string): T | undefined { return this.dat[key] }

  filter(dat: (x: T) => boolean) {
    let result: FilterResults<T> = {
      count: 0,
      items: {}
    }
    for (const y in this.dat) {
      const value = this.dat[y];
      const test = dat(value)
      if (test) {
        result.count++
        result.items[y] = value
      }
    }
    return result;
  }

  deleteAll() { this.dat = {} }
}

export class MultiStorage {
  private dats: Record<string, Storage<unknown>> = {}

  newStorage<T>(key: string) {
    this.dats[key] = new Storage<T>()
  }

  access(key: string): Storage<unknown> | undefined { return this.dats[key] }

  delete(key: string) { delete this.dats[key] }

  deleteAll() { this.dats = {} }
}

export interface FilterResults<T> {
  count: number
  items: { [x: string]: T }
}  
