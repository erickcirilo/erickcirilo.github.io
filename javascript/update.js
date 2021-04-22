//current date on home page
let time = new Date();
document.querySelector('#year').textContent = time.getFullYear();

//last update on home page
document.querySelector('#latestEdit').textContent = new Date(document.lastModified);