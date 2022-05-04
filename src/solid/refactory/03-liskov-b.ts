export abstract class Vehicle {
  constructor() {}

  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
