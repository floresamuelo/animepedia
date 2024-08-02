let animes = [
  {
    name: "Naruto",
    img: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    link: "pages/naruto.html",
  },
  {
    name: "One Piece",
    img: "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    link: "pages/one_piece.html",
  },
  {
    name: "Attack on Titan",
    img: " https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg ",
    link: "pages/attack_on_titan.html",
  },
  {
    name: "Initial D",
    img: "https://m.media-amazon.com/images/M/MV5BNmY0MThjNGYtYTllOS00MWVkLTkwNmItODE3MGJiMzkyMWM5XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    link: "pages/Initiald.html",
  },
  {
    name: "Jujustu Kaisen",
    img: "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
    link: "pages/jujustu_Kaisen.html",
  },
  {
    name: "Neon Genisis Evangelion",
    img: "https://m.media-amazon.com/images/M/MV5BODZkZjUxNmEtMGEyOS00ZDY5LTkxZDMtZTJkZDBiZTkyOWRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    link: "pages/neon_Genisis_Evangelion.html",
  },
  {
    name: "Blood Blockade Battlefront",
    img: "https://m.media-amazon.com/images/M/MV5BNDEyMmI5YjEtZWFiMC00NDg2LWI0ODgtY2UyMmQyNzY0M2Q5XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    link: "pages/blood_Blockade_Battlefront.html",
  },
  {
    name: "Bungo Stray Dogs",
    img: "https://m.media-amazon.com/images/M/MV5BODA4NTE3NDMtYjViZS00NDIzLWE0ZTgtZjkwNDE3NWRlNzRkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    link: "pages/bungo_Stray_Dogs.html",
  },
  {
    name: "Chainsaw Man",
    img: "https://m.media-amazon.com/images/M/MV5BZjY5MDFhZTgtOGVhMi00NTUzLTk5NjktNmRlMjI3NjI4MmE0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    link: "pages/chainsaw_Man.html",
  },
  {
    name: "Jojo's Bizzare Adventure",
    img: "https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
    link: "pages/jojo's_Bizzare_Adventure.html",
  },
  {
    name: "Dororo",
    img: "https://m.media-amazon.com/images/M/MV5BMTMwNmQyM2EtMDQ2My00Y2FhLWJlYTYtMDMwYWU4MzAwYmI3XkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_.jpg",
    link: "pages/dororo.html",
  },
  {
    name: "Dorohedoro",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdv6GPO1Ce62cNJwVALs-D0IrfWOA5xIRfQ&s.jpg",
    link: "pages/dorohedoro.html",
  },
  {
    name: "Hunter X Hunter",
    img: "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    link: "pages/hunter_Hunter.html",
  },
  {
    name: "Akira",
    img: "https://m.media-amazon.com/images/M/MV5BNjFmNWYzZjMtYWIyZi00NDVmLWIxY2EtN2RiMjZiMDk4MzcyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_FMjpg_UX1000_.jpg",
    link: "pages/akira.html",
  },
  {
    name: "The End of Evangelion",
    img: "https://m.media-amazon.com/images/M/MV5BMjU0MzQwMmMtMWU3OS00MDc0LWIzOTItZmE1MjZlYmExMGJiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_FMjpg_UX1000_.jpg",
    link: "pages/the_End_Of_Evangelion.html",
  },
  {
    name: "Naruto Shippuden",
    img: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    link: "pages/naruto_Shippuden.html",
  },
  {
    name: "Hajime no Ippo",
    img: "https://m.media-amazon.com/images/M/MV5BMDMxZjFjZWYtNDdlNy00ZTQ2LWIzMWItMjQ2MTJhMWU0NDVjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    link: "pages/hajime_No_Ippo.html",
  },
  {
    name: "Mob Psycho 100",
    img: "https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    link: "pages/mob_Psycho.html",
  },

  // Add more anime objects as needed
];
let cartoon = [
  {
    name: "Hell’s Paradise",
    img: "https://m.media-amazon.com/images/M/MV5BYmU0YjMyNDctNWZhYS00ZGNiLThlNWYtN2FiNTQ1NWM4YWFjXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    link: "pages/hells_paradise.html",
  },
  {
    name: "Fullmetal Alchemist: Brotherhood",
    img: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    link: "pages/fullMetal.html",
  },
  {
    name: "Demon Slayer",
    img: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    link: "pages/demonSlayer.html",
  },
  {
    name: "Solo Leveling",
    img: "https://m.media-amazon.com/images/M/MV5BYWMwYmYwNjMtMmE0MC00ODdhLTgzYzQtYzA3MDQ5OWRmZWNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    link: "pages/soloLeveling.html",
  },
  {
    name: "Code Geass",
    img: "https://m.media-amazon.com/images/M/MV5BZmUxZmVlNGMtZGMyMy00MmM3LTg5ZjgtNzFhZWU4MTU5MjIwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    link: "pages/codegeass.html",
  },
  {
    name: "Tower of God",
    img: "https://m.media-amazon.com/images/M/MV5BZGM4NjE1OWYtNzcwMC00ZGY0LWE4NjEtZTgzYzY4YWU5M2E3XkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_FMjpg_UX1000_.jpg",
    link: "pages/towerOfGod.html",
  },
  {
    name: "One Punch Man",
    img: "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    link: "pages/onePunch.html",
  },
  {
    name: "Black Clover",
    img: "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    link: "pages/blackClover.html",
  },
  {
    name: "Samurai Champloo",
    img: "https://m.media-amazon.com/images/M/MV5BMzg1NmFlMzctYmVkNC00Y2M4LTgyOGQtNjkyYWFkZDQ4MGJjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    link: "pages/samurai.html",
  },
  {
    name: "Violet Evergarden",
    img: "https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    link: "pages/Violet.html",
  },
  {
    name: "Gurren Lagann ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGczzmkd-_bas52Ojdoq2KX-fXTVlPTHx5Dg&s",
    link: "pages/gurren.html",
  },
  {
    name: "Fire Force",
    img: "https://m.media-amazon.com/images/M/MV5BY2IyMDA0NGEtZjIyOS00NjU0LThlOTctODA0OTZmMDU2ZTMxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    link: "pages/fireForce.html",
  },
  {
    name: "Cowboy Bebop",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Cowboy_Bebop_key_visual.jpg",
    link: "pages/cowboy.html",
  },
  {
    name: "Kill La Kill ",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Killlakillpromo.jpg",
    link: "pages/kill.html",
  },
  {
    name: "Death Note",
    img: "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    link: "pages/deathNote.html",
  },
];

let animeList;

function displayAnimes(animeArray) {
  animeList.innerHTML = "";
  animeArray.forEach((anime) => {
    let animeItem = document.createElement("div");
    animeItem.classList.add("col-sm-4", "anime-item");
    animeItem.innerHTML = `
          <a href="${anime.link}">
              <img src="${anime.img}" alt="${anime.name}" />
              <div>${anime.name}</div>
          </a>
      `;
    animeList.appendChild(animeItem);
  });
}
let query;
let filteredAnimes;
if (document.getElementById("anime-page")) {
  animeList = document.getElementById("anime-list");
  document.getElementById("nav-search").addEventListener("input", function () {
    query = this.value.toLowerCase();
    filteredAnimes = animes.filter((anime) =>
      anime.name.toLowerCase().includes(query)
    );
    displayAnimes(filteredAnimes);
  });

  // Initial display of all animes
  displayAnimes(animes);
}
if (document.getElementById("cartoon-page")) {
  animeList = document.getElementById("anime");
  document.getElementById("nav-search").addEventListener("input", function () {
    query = this.value.toLowerCase();
    filteredAnimes = cartoon.filter((anime) =>
      anime.name.toLowerCase().includes(query)
    );
    displayAnimes(filteredAnimes);
  });

  // Initial display of all animes
  displayAnimes(cartoon);
}
