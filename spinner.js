//looping it

const arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 0;
for (let i = 0; i < arr.length; i++) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}  `);
  }, time);
}

//hard coding it
// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 100);
// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 300);
// setTimeout(() => {
//   process.stdout.write("\r-  ");
// }, 500);
// setTimeout(() => {
//   process.stdout.write("\r\\  ");
// }, 700);
// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 900);
// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 1100);
// setTimeout(() => {
//   process.stdout.write("\r-  ");
// }, 1300);
// setTimeout(() => {
//   process.stdout.write("\r\\  ");
// }, 1500);
// setTimeout(() => {
//   process.stdout.write("\r|  \n");
// }, 1700);
