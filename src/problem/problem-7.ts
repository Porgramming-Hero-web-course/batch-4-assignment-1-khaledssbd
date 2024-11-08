{
  // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(baseYear: number = new Date().getFullYear()): number {
      return baseYear - this.year;
    }
  }

  const car = new Car('EV SUV', 'Y', 2020);
  console.log(car.getCarAge()); // 4
}