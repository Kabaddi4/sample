let e1 = document.getElementById('1st_id');

console.log(e1);

$(function(){
    //$(.取得クラス).removeClass('消去クラス名')
    $('.test1').removeClass('test1');
});

//JSON 1:''使用不可 2:,で区切る 3:全角スペース
//JSON 変数前を、''で囲む ・
const test_json = '{"chara":[{"name":"keqing"},{"name":"nilou"},{"name":"navia"},{"name":"furina"}],"num":6}';
//chromeでの起動に根本的に向いてない？
const json_data = '{"message":null,"results":[{"address1":"北海道","address2":"美唄市","address3":"上美唄町協和","zipcode":"0790177"},{"address1":"北海道","address2":"美唄市","address3":"上美唄町南","zipcode":"0790177"}],"status":200}';

console.log(typeof(json_data));
let convert = JSON.parse(json_data);
console.log(convert);

console.log(test_json);