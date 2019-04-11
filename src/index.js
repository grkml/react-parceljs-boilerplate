import image from "./img/image.png";

console.log('hello world');
document.getElementById("root").innerHTML = `
    <h1>Hello World</h1>
    <img src=${image}>`;
