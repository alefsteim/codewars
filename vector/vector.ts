export class Vector {
  private components: number[] = [];

  constructor(components: number[]) {
    this.components = components;
  }

  public getLength(): number {
    return this.components.length;
  }

  public get(index: number): number {
    return this.components[index];
  }

  public add(addend: Vector): Vector {
    this.checkLength(addend);

    return new Vector(
      this.components.map((item, index) => item + addend.get(index))
    );
  }

  public subtract(subtractor: Vector): Vector {
    this.checkLength(subtractor);

    return new Vector(
      this.components.map((item, index) => item - subtractor.get(index))
    );
  }

  public dot(argument: Vector): number {
    this.checkLength(argument);

    return this.components.reduce(
      (dot, item, index) => dot + item * argument.get(index),
      0
    );
  }

  public norm(): number {
    return Math.sqrt(
      this.components.reduce((norm, item) => norm + item ** 2, 0)
    );
  }

  public equals(counterpart: Vector): boolean {
    return (
      this.sameLength(counterpart) && this.toString() === counterpart.toString()
    );
  }

  public toString(): string {
    return `(${this.components.join(",")})`;
  }

  private sameLength(counterpart: Vector): boolean {
    return this.components.length === counterpart.getLength();
  }

  private checkLength(counterpart: Vector) {
    if (!this.sameLength(counterpart)) {
      throw new Error("Arguments are of different lentgh");
    }
  }
}
