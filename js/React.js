//Reactコンポーネント継承で新たなコンポーネント作成
//class コンポーネント名 extends React.Component
class Test1 extends React.Component {
    //コンストラクター
    constructor(props) {
        super(props);
        //状態を保存するプロパティ
        this.state = { ok : false };
    }

//出力処理
render() {
    if (this.state.ok) {
        return "Pushed button";
    }
    //Reactオブジェクトで、要素作成
    let newElement = React.createElement(
        "button",    //タグ名
        { onClick:() => this.setState({ ok : true })},   //props
        "テスト"    //子の値
    );
    return newElement;
}
}

//表示される要素とコンポーネントを結びつけて表示
//後々に出力処理をさせる場所を指定するので、domContainerで統一するべき？
const domContainer = document.querySelector("#app");

//ReactDOMに出力処理
ReactDOM.render(
    //Reactオブジェクトで、新たな要素作成 L3
    React.createElement(Test1),
    //出力処理をさせるコンテナ L22
    domContainer
)