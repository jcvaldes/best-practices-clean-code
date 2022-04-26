(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieActorsById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBiographyById(actorId: string) {
    console.log({ actorId });
  }
  interface movieOptions {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: movieOptions) {
    console.log({ title, description, rating, cast });
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor", birthdate);
    return true;
  }
})();
