const box = document.querySelector ('#time');

setInterval ( () => {
    const date = new Date ();
    box.innerHTML = `<span>${date.toLocaleTimeString()}</span>`
}, 1000);


