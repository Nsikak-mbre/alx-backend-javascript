class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Override valueOf method for number casting
  valueOf() {
    return this._size;
  }

  // Override toString method for string casting
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
