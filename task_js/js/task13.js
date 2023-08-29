let cate1 = [];

let cate2 = [];

var itemList = [];

let cate1Element = document.getElementById('mainMenu');
let cate2Element = document.getElementById('subMenu');
var itemListElement = document.getElementById('itemList');

function setMainuMenu() {
    cate1Element.innerHTML = '';

    cate1.forEach(function(category) {
        let option = document.createElement('option');
        option.value = category;
        option.text = category;
        cate1Element.appendChild(option);
    })
}


function setSubMenu(idx) {
    cate2Element.innerHTML = '';

    cate2[idx].forEach(function(item) {
        let option = document.createElement('option');
        option.value = item;
        option.text = item;
        cate2Element.appendChild(option);
    })
}

function viewItemList(tag) {
    itemListElement.innerHTML = '';
    itemList.forEach(function(item) {
        if (item.tags.some(t => t === tag)) {
            let li = document.createElement('li');
            let text = document.createTextNode(item.id + ':' + item.name + ' ' + item.price + '円');
            li.appendChild(text);
            itemListElement.appendChild(li);
        }
    });
}

cate1Element.addEventListener('change', function(){
    let idx = cate1Element.selectedIndex;
    setSubMenu(idx);
    viewItemList(cate2[idx][0]);
});

cate2Element.addEventListener('change', function(){
    let val = cate2Element.value;
    viewItemList(val);
});

