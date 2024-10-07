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

  // Implementing the abstract method
  evacuationWarningMessage() {
    return `Evacuate the building immediately! This is a ${this._floors}-floor office building.`;
  }
}

export default Building;
