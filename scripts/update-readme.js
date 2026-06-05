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

const filePath = "README.md";
let readme = fs.readFileSync(filePath, "utf8");

const newAge = calculateAge();

readme = readme.replace(
  /<!-- AGE:START -->[\s\S]*<!-- AGE:END -->/,
  `<!-- AGE:START -->\n${newAge}\n<!-- AGE:END -->`
);

fs.writeFileSync(filePath, readme);
console.log("Age updated");
