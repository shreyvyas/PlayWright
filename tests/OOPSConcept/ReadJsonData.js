let data = {

    "username" : "shreyvyas",
    "password" : "test123"

};

console.log(data.username);
console.log(data.password);


let data1 = {"menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }};

console.log(data1.menu.popup.menuitem[2].value);

// let obj = JSON.parse(data1);
// console.log(obj.menu.popup.menuitem[2].value);

//menu.popup[menuitem]

let data2 = '[{"name": "Amit", "age": 30}, {"name": "Mohit", "age": 25}, {"name": "Rohit", "age": 35}]';

let obj = JSON.parse(data2);

console.log(obj[0].name);


const data3 = {
    "collection" : [
          {"id" : 101},
          {"id" : 102},
          {"id" : 103}
    ]
  }
  console.log(data3.collection[0].id);

  