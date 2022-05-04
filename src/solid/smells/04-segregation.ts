interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}
(async () => {
  class Tucan implements Bird {
    fly(): void {
      console.log("I can fly");
    }
    eat(): void {
      console.log("I can eat");
    }
    run(): void {
      console.log("I can run");
    }
    swim(): void {
      throw new Error("Method not implemented.");
    }
  }

  class HumminBird implements Bird {
    fly(): void {
      console.log("I can fly");
    }
    eat(): void {
      console.log("I can eat");
    }
    run(): void {
      console.log("I can run");
    }
    swim(): void {
      throw new Error("Method not implemented.");
    }
  }

  class Ostrich implements Bird {
    fly(): void {
      throw new Error("Method not implemented.");
    }
    eat(): void {
      console.log("I can eat");
    }
    run(): void {
      console.log("I can run");
    }
    swim(): void {
      throw new Error("Method not implemented.");
    }
  }

  class Penguin implements Bird {
    fly(): void {
      throw new Error("Method not implemented.");
    }
    eat(): void {
      console.log("I can eat");
    }
    run(): void {
      console.log("I can run");
    }
    swim(): void {
      console.log("I can swim");
    }
  }
})();
