const moviesLists = [
  { title: "Interstellar", rating: 16, genre: "Sci-fi", available: true },
  { title: "Invincibles", rating: 13, genre: "Action", available: true },
  { title: "Oppenheimer", rating: 16, genre: "sci", available: true },
  { title: "Hercules", rating: 18, genre: "Adventure", available: false },
  { title: "Merlin", rating: 13, genre: "Adventure", available: false },
  { title: "Rhabii", rating: 18, genre: "Romance", available: true },
  { title: "Bhahubali", rating: 13, genre: "Action", available: true },
];

class MoviesRentalsStore {
  constructor() {
    this.movies = [...moviesLists];
  }

  static message = "Welcome to our movie rental store";

  ourMoviesLists() {
    return this.movies;
  }

  rentMovie(title) {
    const movie = this.movies.find((m) => m.title === title);

    if (movie && movie.available) {
      console.log(`You have rented ${movie.title}`);
      movie.available = false; // Mark the movie as not available after renting
    } else if (movie && !movie.available) {
      console.log(
        `${movie.title} is not available for rent at this time. Please try again later.`
      );
    } else {
      console.log(
        `${title} not available in our store. Kindly find some other movie.`
      );
    }

    return this;
  }
}

class Person {
  constructor() {
    this.rentedMovies = [];
  }

  rentMovie(store, title) {
    const result = store.rentMovie(title);
    if (result) {
      this.rentedMovies.push(title);
    }
    return this;
  }
}

const shop = new MoviesRentalsStore();
console.log(shop.ourMoviesLists());

const michael = new Person();
const sarah = new Person();

michael.rentMovie(shop, "Interstellar").rentMovie(shop, "Rhabii");
sarah.rentMovie(shop, "Merlin").rentMovie(shop, "Invincibles");
michael.rentMovie(shop, "Khan");

console.log("Michael's rented movies:", michael.rentedMovies);
console.log("Sarah's rented movies:", sarah.rentedMovies);
