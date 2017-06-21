import React from 'react';
import axios from 'axios';
import Navbar from 'Navbar';
import SearchResults from 'SearchResults';
import HomePage from 'HomePage';
import Stream from 'Stream';
import Footer from 'Footer';

const APIKEY = '068ee0cfb0216f492786450e89bf044e';
const BASE_URL = 'https://api.themoviedb.org/3';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // main page, browse by category schema
      homePageView: true,
      resultsView: false,
      streamView: false,
      mainPage: {
        hero: {
          title: '',
          overview: '',
          backdrop: ''
        },
        categories: {
          action: [],
          adventure: [],
          animation: [],
          comedy: [],
          crime: [],
          documentary: [],
          drama: [],
          family: [],
          fantasy: [],
          horror: [],
          mystery: [],
          romance: [],
          thriller: [],
          war: []
        }
      },
      // search results schema
      results: [],
      // movie hover-over or expanded by user
      selectedMovie: {},
      // tmdb's mapping of genre id's to genre names
      genreList: []
    }
  }

  componentDidMount() {
    this._getGenreList();
  }

  _populateCategories() {
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
  }

  _getMoviesByCategory(category) {
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
        this.mainPage.categories[category] = movies.map(movie => this._manipulateMovieData(movie, 'w300'));
      });
  }

  _getMoviesBySearch(query) {
    // update this.results with response
    axios.get(`${BASE_URL}/search/movie`, {
      params: {
        query,
        api_key: APIKEY
      }
    }).then(response => {
      console.log('response.data: ', response.data);
      const movies = response.data.results;
      this.results = movies.map(movie => this._manipulateMovieData(movie, 'w300'));
      console.log('results: ', this.results);
    });
  }

  _getMoviesByPerson(query, castOrCrew) {
    // search for personId by query, use the first result
    let group;
    if (castOrCrew === 'cast') {
      group = 'with_cast'
    } else if (castOrCrew === 'crew') {
      group = 'with_crew'
    } else {
      return 'failed: pass in "cast" or "crew" for second argument';
    }
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
          [group]: personId,
          api_key: APIKEY
        }
      }).then(response => {
        const movies = response.data.results;
        this.results = movies.map(movie => this._manipulateMovieData(movie, 'w300'));
        console.log('results: ', this.results);
      });
    });
  }

  _getMovieDetails(movie_id) {
    // update this.selectedMovie with response
    axios.get(`${BASE_URL}/movie/${movie_id}`, {
      params: {
        append_to_response: 'credits,release_dates,similar,reviews',
        api_key: APIKEY
      }
    }).then((response) => {
      const movie = response.data;
      console.log(movie);
      this.selectedMovie = this._manipulateMovieData(movie, 'original');
      console.log('selectedMovie: ', this.selectedMovie);
    });
  }

  _manipulateMovieData(movie, backdrop_size) {
    let cast, director, similar, runtime, genres, mpaaRating, reviews;
    let year = this._getYear(movie);
    let backdrop = (movie.backdrop_path) ? movie.backdrop_path : movie.poster_path;
    if (movie.genres) {
      genres = movie.genres.map(genre => genre.name);
    }
    if (movie.similar) {
      similar = movie.similar.results;
    }
    if (movie.release_dates) {
      mpaaRating = this._getMpaaRating(movie);
    }
    if (movie.runtime) {
      runtime = this._formatRuntime(movie.runtime);
    }
    if (movie.credits) {
      cast = movie.credits.cast.map(person => person.name);
      director = this._getDirector(movie);
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
  }

  _getDirector(movie) {
    return movie.credits.crew.find((person) => person.job === 'Director').name;
  }

  _getMpaaRating(movie) {
    return movie.release_dates.results.find(release => release.iso_3166_1 === 'US').release_dates[0].certification;
  }

  _formatRuntime(minutes) {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  }

  _getGenreList() {
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
  }

  _getYear(movie) {
    return movie.release_date.split('-')[0];
  }

  render() {
    if (this.state.homePageView) {
      return (
        <div className="app">
          <Navbar />
          <HomePage />
          <Footer />
        </div>
      );
    } else if (this.state.resultsView) {
      return (
        <div className="app">
          <Navbar />
          <SearchResults />
          <Footer />
        </div>
      );
    } else if (this.state.streamView) {
      return (
        <div className="app">
          <Stream />
        </div>
      );
    } else {
      return (
        <div className="app"></div>
      );
    }
  }
}

export default App;
