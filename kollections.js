class List extends Array {
  constructor(items) {
    super(...items)
  }

  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        if (i < this.length) {
          return {value: this[i++], done: false}
        } else {
          return {done: true}
        }
      }
    }
  }

  get size() {
    return this.length
  }

  get first() {
    return this[0]
  }

  get last() {
    return this[this.size - 1]
  }

  get(i) {
    return this[i]
  }

  // mutable!!
  set(i, k) {
    this[i] = k
  }

  // mutable!!
  add(k) {
    this.push(k)
  }

  // mutable!!
  remove(i) {
    // this = this.slice(0, i) + this.slice(i+1)
  }

  contains(k) {
    return k in this
  }

  isEmpty() {
    return this.size === 0
  }

  joinToString(sep = ',') {
    return this.join(sep)
  }

  reverse() {
    return new List(this.toArray().reverse())
  }

  filter(cb) {
    return new List(this.toArray().filter(cb))
  }

  forEach(cb) {
    this.toArray().forEach(cb)
  }
  
  onEach(cb) {
    this.toArray().forEach(cb)
    return this
  }

  map(cb) {
    return new List(this.toArray().map(cb))
  }
  
  toString() {
    return `List [${this.toArray()}]`
  }

  toArray() {
    return [...this]
  }

  get [Symbol.toStringTag]() {
    return 'List'
  }
}

export function listOf(...items) {
  return new List(items)
}
