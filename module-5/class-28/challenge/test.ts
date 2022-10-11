import { Movies } from "./movies";
import { inGenre, sortTitle, sortYear, yearComparator } from "./sort";

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Cotton Club",
      "Crocodile Dundee",
      "Beetlejuice",
      "The Shawshank Redemption",
      "Memento",
      "City of God",
      "Ratatouille",
      "Stardust",
      "Valkyrie",
      "The Intouchables",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });

  it("can find movies by genre", () => {
    const movies = sortYear(inGenre(Movies, "Adventure"));
    expect(movies.map((m) => m.title)).toEqual([
      "Crocodile Dundee",
      "Stardust",
    ]);
  });
});

describe("Comparison", () => {
  it("can compare movies by year", () => {
    expect(
      yearComparator(
        { title: "A", year: 2000, genres: [] },
        { title: "B", year: 1998, genres: [] }
      )
    ).toBeGreaterThan(0);
    expect(
      yearComparator(
        { title: "B", year: 1998, genres: [] },
        { title: "A", year: 2000, genres: [] }
      )
    ).toBeLessThan(0);
    expect(
      yearComparator(
        { title: "A", year: 2000, genres: [] },
        { title: "A", year: 2000, genres: [] }
      )
    ).toBe(0);
  });
});
