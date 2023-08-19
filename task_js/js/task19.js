class CountButton extends React.Component {
    //コンストラクター
    constructor(props) {
        super(props);

        //初期値
        this.state = { count : 100 };
    }
        //処理
    render() {
        if(this.state.count < 0) {
            this.state.count = 100;
        }
        return React.createElement(
            "button",
            { onClick:() => this.setState({ count : this.state.count - 1 }) },
            "カウント数:" + this.state.count
        );
    }
}

    const domContainer = document.querySelector("#app");

    ReactDOM.render(
        React.createElement(CountButton),

        domContainer
    );


/*class Mess extends React.Component {
    //コンストラクタ
    constructor() {
        super();
    }

    //出力
    render() {
    let newElement = React.createElement(
        "h1",   //タグ
        null,   //props(集合体)
        "おはよう"  //値
    );
    return newElement;
    }
}

const domContainer = document.querySelector("#app");

ReactDOM.render(
    React.createElement(Mess),

    domContainer
)

class Ok extends React.Component {
    constructor(pros) {
        super(pros);

        this.state = { ok : false };
    }

    render() {
        if(this.state.ok) {
            return "OK is pushed";
        }
        return React.createElement(
            "button",
            { onClick:() => this.setState({ ok : true })},
            "押してください"
        );
    }
}

const domContainer2 = document.querySelector("#app2");

ReactDOM.render(
    React.createElement(Ok),
    domContainer
) */

