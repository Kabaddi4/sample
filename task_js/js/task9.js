a = [3, 12, 14, 23, 26, 30, 34, 35];

let b3 = a.filter(function(e) {
    if (e % 3 == 0) {
        return true;
    } else {
        false;
    }
});

let b5 = a.filter(function(e) {
    if (e % 5 == 0) {
        return true;
    } else {
        false;
    }
});
