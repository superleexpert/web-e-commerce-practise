window.onload = function(){
    for (let i = 0; i < 100; i++) {
        console.log("gogogo");
    }

    var a = 10;
    (function () {
        console.log(a);
        a = 5;
        console.log(window.a);
        var a = 20;
        console.log(a);
    })();
};