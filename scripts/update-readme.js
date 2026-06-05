const fs = require("fs");

const birthDate = new Date("2001-04-25");

function calculateAge() {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const readmePath = "README.md";
let readme = fs.readFileSync(readmePath, "utf8");

readme = readme.replace(/{{AGE}}/g, calculateAge());

fs.writeFileSync(readmePath, readme);
