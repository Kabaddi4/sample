let cate1 = [
    '---',
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具',
    '調理器具'
];

let cate2 = [
    ['---'],
    ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
    ['ベッド','寝具','マットレス'],
    ['家具・ラック','収納システム'],
    ['子ども部屋家具','ベビー家具・ベビーグッズ'],
    ['包丁', 'まな板', 'フライパン']
];

var itemList = [
    { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 500},
    { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 700},
    { id: '0003', name: '子ども用ベッド', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'], price: 900},
    { id: '0004', name: 'ソファ', tags: ['ソファ'], price: 1500 },
    { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'], price: 2500 },
    { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'], price: 3300 },
    { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'], price: 4300 },
    { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'], price: 4100 },
    { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'], price: 5000 },
    { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'], price: 1000 },
    { id: '0011', name: '調理道具', tags:['包丁', 'まな板',], price: 500 },
    { id: '0012', name: '調理機器', tags:['フライパン'], price: 500 }
];

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


setMainuMenu();

