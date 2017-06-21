import axios from 'axios';

const APIKEY = '068ee0cfb0216f492786450e89bf044e';
const BASE_URL = 'https://api.themoviedb.org/3';

let netflix = {
  // main page, browse by category schema
  mainPage: {
    hero: {
      // title:
      // overview:
    },
    categories: {
      // drama: []
    }
  },
  // search results schema
  results: [],
  // movie expanded by user
  selectedMovie: {},
  genreList: [],
  populateCategories() {
    // populate the categories
    this.getMoviesByCategory('action');
    this.getMoviesByCategory('adventure');
    this.getMoviesByCategory('animation');
    this.getMoviesByCategory('comedy');
    this.getMoviesByCategory('crime');
    this.getMoviesByCategory('documentary');
    this.getMoviesByCategory('drama');
    this.getMoviesByCategory('family');
    this.getMoviesByCategory('fantasy');
    this.getMoviesByCategory('horror');
    this.getMoviesByCategory('mystery');
    this.getMoviesByCategory('romance');
    this.getMoviesByCategory('thriller');
    this.getMoviesByCategory('war');
    console.log('mainPage.categories: ', this.mainPage.categories);
  },
  getMoviesByCategory(category) {
    // hit API with category, get response, manipulate response to fit schema, then set to mainPage.categories[category]
    const genreId = this.genreList[category];
    return axios.get(`${BASE_URL}/discover/movie`, {
        params: {
          with_genres: genreId,
          api_key: APIKEY
        }
      }).then(response => {
        response.data.results
      }).then(movies => {
        this.mainPage.categories[category] = movies.map(movie => this.manipulateMovieData(movie, 'w300'));
      });
  },
  getMoviesBySearch(query) {
    // update this.results with response
    axios.get(`${BASE_URL}/search/movie`, {
      params: {
        query,
        api_key: APIKEY
      }
    }).then(response => {
      console.log('response.data: ', response.data);
      const movies = response.data.results;
      this.results = movies.map(movie => this.manipulateMovieData(movie, 'w300'));
      console.log('results: ', this.results);
    });
  },
  getMoviesByCast(query) {
    // search for personId by query, use the first result
    axios.get(`${BASE_URL}/search/person`, {
      params: {
        query,
        api_key: APIKEY
      }
    }).then(response => {
      // update this.results with response
      let personId = response.data.results[0].id;
      axios.get(`${BASE_URL}/discover/movie`, {
        params: {
          with_cast: personId,
          api_key: APIKEY
        }
      }).then(response => {
        const movies = response.data.results;
        this.results = movies.map(movie => this.manipulateMovieData(movie, 'w300'));
        console.log('results: ', this.results);
      });
    });
  },
  getMovieDetails(movie_id) {
    // update this.selectedMovie with response
    axios.get(`${BASE_URL}/movie/${movie_id}`, {
      params: {
        append_to_response: 'credits,release_dates,similar,reviews',
        api_key: APIKEY
      }
    }).then((response) => {
      const movie = response.data;
      console.log(movie);
      this.selectedMovie = this.manipulateMovieData(movie, 'original');
      console.log('selectedMovie: ', this.selectedMovie);
    });
  },
  manipulateMovieData(movie, backdrop_size) {
    let cast, director, similar, runtime, genres, mpaaRating, reviews;
    let year = this.getYear(movie);
    let backdrop = (movie.backdrop_path) ? movie.backdrop_path : movie.poster_path;
    if (movie.genres) {
      genres = movie.genres.map(genre => genre.name);
    }
    if (movie.similar) {
      similar = movie.similar.results;
    }
    if (movie.release_dates) {
      mpaaRating = this.getMpaaRating(movie);
    }
    if (movie.runtime) {
      runtime = this.formatRuntime(movie.runtime);
    }
    if (movie.credits) {
      cast = movie.credits.cast.map(person => person.name);
      director = this.getDirector(movie);
    }
    if (movie.reviews) {
      reviews = movie.reviews.results.map(review => review.content);
    }
    return {
      year,
      runtime,
      cast,
      director,
      similar,
      genres,
      mpaaRating,
      reviews,
      id: movie.id,
      title: movie.title,
      backdrop: `https://image.tmdb.org/t/p/${backdrop_size}${backdrop}`,
      overview: movie.overview,
      rating: movie.vote_average
    }
  },
  getDirector(movie) {
    return movie.credits.crew.find((person) => person.job === 'Director').name;
  },
  getMpaaRating(movie) {
    return movie.release_dates.results.find(release => release.iso_3166_1 === 'US').release_dates[0].certification;
  },
  formatRuntime(minutes) {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  },
  getGenreList() {
    axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: APIKEY
      }
    }).then((response) => {
      this.genreList = response.data.genres.reduce((obj, genre) => {
        obj[genre.name.toLowerCase()] = genre.id;
        return obj;
      }, {});
    });
  },
  getYear(movie) {
    return movie.release_date.split('-')[0];
  }
};

window.netflix = netflix;
window.netflix.getGenreList();
