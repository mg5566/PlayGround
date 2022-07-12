// function getdata() {
//   var tabledata;
//   $.get('https://domain.com/products/1', function (response) {
//     tabledata = response;
//   });
//   return tabledata;
// }
//
// console.log(getdata()); // undefined
//
//
function getdata(callbackfunc) {
  $.get('https://domain.com/products/1', function (response) {
    callbackfunc(response); // 서버에서 받은 데이터 response를 callbackfunc() 함수에 넘겨줌
  });
}

getdata(function (tabledata) {
  console.log(tabledata); // $.get()의 response 값이 tabledata에 전달
});

$.get('https://domain.com/products/1').then(res => console.log("response", res)).catch(err => console.log("Error", err));

$.get('url', function (response) {
  parseValue(response, function (id) {
    auth(id, function (result) {
      display(result, function (text) {
        console.log(text);
      });
    });
  });
});

$.get(url)
  .then((res) => parseValue(res))
  .then((id) => auth(id))
  .then((result) => display(result))
  .then((test) => console.log(text))
  .catch(err => console.log("Error", err));