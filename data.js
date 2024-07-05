const nama = "daffa hanif";
let usia = "50";

function generateBiodata() {
  let generasi;
  if (usia >= 10 && usia < 18) {
    generasi = "gen alpha 🥶";
  } else if (usia >= 18 && usia < 30) {
    generasi = "gen z 🥱";
  } else if (usia >= 30 && usia < 50) {
    generasi = "milenial 😎";
  } else if (usia >= 50) {
    generasi = "boomer 👴";
  } else {
    console.log("njir bocil 😂🤣");
  }
  return console.log("generasi gue adalah", generasi);
}

console.log(nama);
console.log(usia);
generateBiodata();
