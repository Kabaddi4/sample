var a = [1,2,3];

try {
    console.log(a[i]);
} catch (i) {
    if (i instanceof ReferenceError) {
        console.log('例外 ReferenceError');  
    } else if (i instanceof Error) {
        console.log('例外 Error');
    }
}