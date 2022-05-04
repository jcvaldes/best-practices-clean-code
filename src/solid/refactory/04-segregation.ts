interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}
interface RunningBird {
  run(): void;
}
interface SwimmerBird {
  swim(): void;
}
(async () => {
  class Tucan implements Bird, FlyingBird {
    run(): void {
      throw new Error("Method not implemented.");
    }
    swim(): void {
      throw new Error("Method not implemented.");
    }
    fly(): void {
      console.log("I can fly");
    }
    eat(): void {
      console.log("I can eat");
    }
  }

  class HumminBird implements Bird, FlyingBird {
    run(): void {
      throw new Error("Method not implemented.");
    }
    swim(): void {
      throw new Error("Method not implemented.");
    }
    fly(): void {
      console.log("I can fly");
    }
    eat(): void {
      console.log("I can eat");
    }
  }

  class Ostrich implements Bird, RunningBird {
    fly(): void {
      throw new Error("Method not implemented.");
    }
    swim(): void {
      throw new Error("Method not implemented.");
    }
    eat(): void {
      console.log("I can eat");
    }
    run(): void {
      console.log("I can run");
    }
  }
  class Penguin implements Bird, SwimmerBird {
    fly(): void {
      throw new Error("Method not implemented.");
    }
    run(): void {
      throw new Error("Method not implemented.");
    }
    eat(): void {
      console.log("I can eat");
    }
    swim(): void {
      console.log("I can swim");
    }
  }
})();
