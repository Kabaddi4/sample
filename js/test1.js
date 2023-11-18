//select要素取得
let tag = document.getElementById('List');

//イベントリスナ
tag.addEventListener('change', function() {
    //処理
    //洗濯された値の取得
    var Selected = this.value;

    switch (Selected) {
        case 'Wenty':
            alert(21 + '%');
            break;
        case 'Zhongli':
            alert(59 + '%');
            break;
        case 'Syogun':
            alert(50 + '%');
            break;
        case 'Nahida':
            alert(67 + '%');
            break;
        case 'Fleena':
            alert(87 + '%');
            break;
    }
});



//F12コンソールで表示
console.log("Start test1");
//アラートで表示
//alert("Start test page");