class Item {
    constructor(id, name, stock) {

        this.id = id;
        this.name = name;
        this.stock = stock;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getStock() {
        return this.stock;
    }

    addStock(num) {
        this.stock += num;
    } 

    sale(num) {
        //stockが、与えた引数より少ない場合、throw文でエラー警告
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        //それ以外なら、stockから引数の数だけ減算
        } else {
            this.stock -= num;
        }
    }
}

class Bed extends Item {
    constructor(id, name, stock, size) {
        super(id, name, stock);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}



let item1 = new Item('0001', 'ソファベッド', 100);
let item2 = new Item('0002', 'シングルベッド', 100);
let item3 = new Item('0003', '子ども用ベッド', 10);
let bed1 = new Bed('001', 'ソファベッド', 100, 'M');

console.log(item1.getId(), item1.getName(), item1.getStock());
console.log(item2.getId(), item2.getName(), item2.getStock());
console.log(item3.getId(), item3.getName(), item3.getStock());

item1.sale(20);
item2.sale(10);
item3.sale(1);

console.log(item1.getId(), item1.getName(), item1.getStock());

//課題
class Chair extends Item {
    constructor(id, name, stock, status) {
        super(id, name, stock);
        this.status = status;
    }

    getStatus() {
        return this.status;
    }
}

let chair1 = new Chair('0001', 'イージーチェア', 6000, '新品');
let chair2 = new Chair('0002', 'ロッキングチェア', 8000, '新品')
let chair3 = new Chair('0003', 'ロッキングチェア', 5300, '中古');
let chair4 = new Chair('0004', 'オフィスチェア', 17000, '新品');

console.log(chair1.getName(), chair1.getStock(), chair1.getStatus());
console.log(chair3.getName(), chair3.getStock(), chair3.getStatus());