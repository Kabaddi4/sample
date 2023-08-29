let itemList = [];

let cate1 =[];

let cate2 = [];

let cate1Element = document.getElementById('mainMenu');

let cate2Element = document.getElementById('subMenu');

let itemListElement = document.getElementById('itemList');

function setMainMenu() {
    //取得したselectを空白に
    cate1Element.innerHTML = "";

    for (let i = 0; i < cate1.length; i++) {
        //option要素
        let option = document.createElement('option');
        option.value = cate[i];
        option.text = cate[i];
        cate1Element.appendChild(option);
    }
}

function setSubMenu(idx) {
    //取得したselectを空白に
    cate2Element.innerHTML = "";

    for (let i = 0; i < cate2[idx].length; i++) {
        //option要素
        let option = document.createElement('option');
        option.value = cate2[idx][i];
        option.text = cate2[idx][i];
        cate2Element.appendChild(option);
    }
}

function viewItemList(tag) {
    console.log(tag);
    let target = document.getElementById('itemList');

    target.innerHTML = '';

    if (tag !== undefined) {
        let html = '';
        html += '<table>';
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].tags.some(t => t == tag)) {
                if (count === 0) {
                    html += '<tr>';
                }

                html += "<td>";
                html += '<img src="img/item/sample.jpg" alt="商品の名前" width="180" height="123" />';
                html += "<td>";

                if (count == 5) {
                    html += "</tr>";
                    count = 0;
                } else {
                    count++;
                }
            }
        }
        if (count > 0) html += "</tr>";
        html += "</table>";
        target.innerHTML = html;
    }
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

$(function () {
    $.ajax({
        url: 'json./sample.json', //jsファイル読み込みと似てる。
        dataType: 'json'
    })
    .done(function (data) {
        cate1 = data.cate1;
        cate2 = data.cate2;
        itemList = data.items;

        setMainMenu();
    })
    .fail(function () {
        alert('ファイルが読み込めませんでした');
    });
});