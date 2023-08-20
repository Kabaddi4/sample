let app = new Vue({
    el:'#app',             
    data:{ 
        SelectMess: '', //selectboxで設定したデータを格納
        msgs:["おはよう","こんばんは","お元気ですか"]}
  });

/*let initApp = {
    el: '#app',
    data : {
        msg:'おはよう'
    }
};
//インスタンス
let app = new Vue(initApp); */

/*  インスタンスのよくある書き方
 let インスタンス = new Vue({
    el: '#app'
    data : {
        msg:'おはよう'
    }
}); */

/* イベンドハンドラ
    methods: {
        msgChange: function () {
            this.msg1 = '値';
            this.msg2 = '値';
        }
    }
*/