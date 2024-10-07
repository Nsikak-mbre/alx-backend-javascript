class Building {
  constructor(sqft) {
    // if (new.target === Building) {
    //   throw new TypeError('Cannot instantiate abstract class Building directly');
    // }

    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Setters
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error(`Class extending Building with ${this.sqft} sqft must override evacuationWarningMessage`);
  }
}

export default Building;
