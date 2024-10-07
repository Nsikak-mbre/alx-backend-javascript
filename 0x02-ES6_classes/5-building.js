class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error(`Class ${this.constructor.name} extending Building must override evacuationWarningMessage`);
  }
}

export default Building;
