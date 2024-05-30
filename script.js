document.addEventListener("DOMContentLoaded", function () {
  const data = {
    items: [
      {
        rank: "1",
        title: "The Shawshank Redemption",
        year: "1994",
        imDbRating: "9.3",
      },
      {
        rank: "2",
        title: "The Godfather",
        year: "1972",
        imDbRating: "9.2",
      },
      {
        rank: "3",
        title: "The Godfather: Part II",
        year: "1974",
        imDbRating: "9.0",
      },
      {
        rank: "4",
        title: "The Dark Knight",
        year: "2008",
        imDbRating: "9.0",
      },
      {
        rank: "5",
        title: "12 Angry Men",
        year: "1957",
        imDbRating: "8.9",
      },
      {
        rank: "6",
        title: "Schindler's List",
        year: "1993",
        imDbRating: "8.9",
      },
      {
        rank: "7",
        title: "The Lord of the Rings: The Return of the King",
        year: "2003",
        imDbRating: "8.9",
      },
      {
        rank: "8",
        title: "Pulp Fiction",
        year: "1994",
        imDbRating: "8.9",
      },
      {
        rank: "9",
        title: "The Good, the Bad and the Ugly",
        year: "1966",
        imDbRating: "8.8",
      },
      {
        rank: "10",
        title: "Fight Club",
        year: "1999",
        imDbRating: "8.8",
      },
    ],
  };

  const movies = data.items;
  const tbody = document.querySelector("#movies-table tbody");
  const template = document.querySelector("#tr-template");

  movies.forEach((movie) => {
    const tr = template.cloneNode(true);
    tr.style.display = "";
    tr.querySelector(".rank").textContent = movie.rank;
    tr.querySelector(".title").textContent = movie.title;
    tr.querySelector(".year").textContent = movie.year;
    tr.querySelector(".rating").textContent = movie.imDbRating;
    tbody.appendChild(tr);
  });
});
