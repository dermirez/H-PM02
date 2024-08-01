const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    gender: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    gender: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    gender: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    title: "The King Lion",
    year: 1994,
    director: "Roger Allers",
    duration: "1h 28min",
    gender: ["Musical", "Drama", "Adventure", "Family"],
    rate: 8.9,
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_thelionking_19752_1_0b9de87b.jpeg?region=0%2C0%2C540%2C810",
  },

  /* 
   {
    "title": "Spider-Man: No Way Home",
    "year": 2021,
    "director": "Jon Watts",
    "duration": "2h 28min",
    "genre": ["Action", "Adventure", "Fantasy"],
    "rate": 8.4,
    "poster": "https://m.media-amazon.com/images/M/MV5BMmU2YzJkZTAtNzkwYy00MDI4LTk3ZWMtMjI5NWRiYzU3YmJjXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
  },
  {
    "title": "The Batman",
    "year": 2022,
    "director": "Matt Reeves",
    "duration": "2h 56min",
    "genre": ["Action", "Crime", "Drama"],
    "rate": 7.9,
    "poster": "https://m.media-amazon.com/images/M/MV5BM2M2MmE1MTEtM2MwZC00ZWM5LThlZGMtNjNkY2RhNGI4MTY3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
  },
  {
    "title": "Dune",
    "year": 2021,
    "director": "Denis Villeneuve",
    "duration": "2h 35min",
    "genre": ["Action", "Adventure", "Drama"],
    "rate": 8.0,
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA2Njk3NzY3OF5BMl5BanBnXkFtZTgwNDQ1MTE1MjE@._V1_SX300.jpg"
  },
  {
    "title": "Top Gun: Maverick",
    "year": 2022,
    "director": "Joseph Kosinski",
    "duration": "2h 11min",
    "genre": ["Action", "Drama"],
    "rate": 8.4,
    "poster": "https://m.media-amazon.com/images/M/MV5BMzUyMmY5ZWQtODJhMy00MzZhLTg2ODQtN2MxNDMwN2VhZDZlXkEyXkFqcGdeQXVyMTA2MDc2NDg@._V1_SX300.jpg"
  },
  {
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "director": "Dan Kwan, Daniel Scheinert",
    "duration": "2h 19min",
    "genre": ["Action", "Adventure", "Comedy"],
    "rate": 8.0,
    "poster": "https://m.media-amazon.com/images/M/MV5BNTEzNDgxNTY1NF5BMl5BanBnXkFtZTgwNjM4MTQ2NDE@._V1_SX300.jpg"
  },
  {
    "title": "No Time to Die",
    "year": 2021,
    "director": "Cary Joji Fukunaga",
    "duration": "2h 43min",
    "genre": ["Action", "Adventure", "Thriller"],
    "rate": 7.3,
    "poster": "https://m.media-amazon.com/images/M/MV5BMjI4NDA3MzY5Ml5BMl5BanBnXkFtZTgwNzQxODk2ODE@._V1_SX300.jpg"
  },
  {
    "title": "The Suicide Squad",
    "year": 2021,
    "director": "James Gunn",
    "duration": "2h 12min",
    "genre": ["Action", "Adventure", "Comedy"],
    "rate": 7.2,
    "poster": "https://m.media-amazon.com/images/M/MV5BMzM2NzIxNzMzMl5BMl5BanBnXkFtZTgwNzA2Mjg4MjE@._V1_SX300.jpg"
  },
  {
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "year": 2021,
    "director": "Destin Daniel Cretton",
    "duration": "2h 12min",
    "genre": ["Action", "Adventure", "Fantasy"],
    "rate": 7.4,
    "poster": "https://m.media-amazon.com/images/M/MV5BM2M5M2UzODAtNjk3Ni00NjM5LTk2YWItM2U1MWU0NTg5ZTczXkEyXkFqcGdeQXVyMTE1MjA2NzM@._V1_SX300.jpg"
  },
  {
    "title": "Doctor Strange in the Multiverse of Madness",
    "year": 2022,
    "director": "Sam Raimi",
    "duration": "2h 6min",
    "genre": ["Action", "Adventure", "Fantasy"],
    "rate": 6.9,
    "poster": "https://m.media-amazon.com/images/M/MV5BNzg1M2NhZDktODMzZS00NzMzLTg0YTAtMzUzNTE0NzAyMDk2XkEyXkFqcGdeQXVyMjA3MTU5Njk@._V1_SX300.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever",
    "year": 2022,
    "director": "Ryan Coogler",
    "duration": "2h 41min",
    "genre": ["Action", "Adventure", "Drama"],
    "rate": 6.7,
    "poster": "https://m.media-amazon.com/images/M/MV5BZjRiNDQ3ZTItMzdiZC00NDg4LThlMTQtMTMyNjY0YjgwOGUyXkEyXkFqcGdeQXVyMTEyNjE1NzQ3._V1_SX300.jpg"
  }
  */
];
