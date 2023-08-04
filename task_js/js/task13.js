let cate1 = [
    '---',
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具'
];

let cate2 = [
    ['---'],
    ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
    ['ベッド','寝具','マットレス'],
    ['家具・ラック','収納システム'],
    ['子ども部屋家具','ベビー家具・ベビーグッズ']
];

var itemList = [
    { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具']},

];

let cate1Element = document.getElementById('mainMenu');
let cate2Element = document.getElementById('subMenu');
var itemListElement = document.getElementById('itemList');

function setMainuMenu() {
    cate1Element.innerHTML = '';

    for (let i = 0; i < cate1.length; i++) {
        let option = document.createElement('option');
        option.value = cate1[i];
        option.text = cate[i];
        cate1Element.appendChild(option);
    }
}



function setSubMenu(idx) {
    cate2Element.innerHTML = '';

    for (let i = 0; i < cate2[1].length; i++) {
        let option = document.createElement('option');
        option.value = cate2[1][i];
        option.text = cate2[1][i];
        cate2Element.appendChild(option);
    }
}

//function viewItemList(tag)

cate1Element.addEventListener('change', function(){
    let idx = cate1Element.selectedIndex;
    console.log(idx);
});

cate2Element.addEventListener('change', function(){
    let idx = cate2Element.selectedIndex;

    let val = cate2Element.value;

    console.log(idx);
    console.log(val);
});


setMainuMenu();

