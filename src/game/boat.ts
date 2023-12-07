export class Boat {
  readonly boatId: number;
  readonly size: number;
  touche: number;

  constructor(boatId: number, size: number) {
    this.boatId = boatId;
    this.touche = size;
  }

  isSunk(): boolean {
    return this.touche === 0;
  }

  isHit(): void {
    this.touche--;
  }
}
