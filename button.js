/* let btn = document.getElementById("btn");
function bgChange() {
   return btn.innerHTML = 'Button was clicked';;
};

btn.addEventListener('click', bgChange); */

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    btn.innerHTML = 'You clicked me!'
    /* btn.window.href = 'https://www.google.com/' */
})

btn.addEventListener('mouseover', (e) => {
  /*   let color = 'red';
    e.target.btn.style.background = color; */
    btn.innerHTML = 'Want to click me?'
})

btn.addEventListener('mouseout', () => {
    btn.innerHTML = 'Click me!'
})


document.addEventListener('click', () => {
    document.getElementById('demo').innerHTML = 'Hello King';
})

