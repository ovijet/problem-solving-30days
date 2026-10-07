const text: string = "TypeScript is Awesome!";

const output: string = text
  .trim()
  .toLowerCase()
  .split(" ")
  .filter((word) => word.length > 3)
  .join("-");

console.log(output);
