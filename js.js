localStorage.setItem('name','Bob');
localStorage.setItem('name','john');
localStorage.setItem('name','Bol');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name','john');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');
sessionStorage.setItem('name','Bob');
document.cookie = 'name=Kyle; expires=' + new Date(2020, 0, 1);
toUTCString();

document.cookie = 'name=kyle; expires' + new Date(9999, 0, 1);
toUTCString();