import { Movie } from "./movies";

export function yearComparator(a: Movie, b: Movie) {
  return a.year - b.year;
}

export function titleComparator(a: Movie, b: Movie) {
  const aTitle = a.title.replace("The ", "");
  const bTitle = b.title.replace("The ", "");
  return aTitle.localeCompare(bTitle);
}

export function inGenreFilter(genre: string) {
  return function (movie: Movie) {
    return movie.genres.includes(genre);
  };
}

export function sortYear(movies: Movie[]): Movie[] {
  return movies.sort(yearComparator);
}

export function sortTitle(movies: Movie[]): Movie[] {
  return movies.sort(titleComparator);
}

export function inGenre(movies: Movie[], genre: string): Movie[] {
  return movies.filter(inGenreFilter(genre));
}
