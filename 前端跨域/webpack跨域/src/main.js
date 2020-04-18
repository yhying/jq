console.log('打包')
let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3001/api/user', true); /* true异步 */
xhr.onload = function () {
    console.log(xhr)
    console.log(xhr.response);
}
xhr.send();