// var str ="123";
// var str ="abc";
// var str ="def";
// var count = 123;
//
// var id =1;
// var tarName ="div"
// var strHtml = `<${tarName} class="abc" data-id="${id}"></${tarName}>`;
// console.log(strHtml);

//ecmascript + DOM + BOM

//全局的window对象 内置对象（不需要自己定义）
//全局变量： 直接定义在js文件最外层 不嵌套在任意函数中
//在任意位置（在赋值后）都可以访问到的变量
//全局变量定义在哪？ 使用var定义的全局变量和在全局变量同一层级定义的函数 都会自动成为Windows的属性
// 由于window的唯一性/全局 简写（省略window)
var a =1;
var b =false;

function fn() {
    //局部变量
    var c =2;
    var d =false;
}
//window的常见属性和方法
//尺寸类（window.innerWidth window.outerWidth window.innerHeight
console.log(window.innerWidth, window.innerHeight);//当前可以渲染文档的最大宽高
console.log(window.outerWidth, window.outerWidth);//浏览器渲染的尺寸

let previousState = window.innerWidth <= 800; // 初始化状态，假设页面加载时判断是否小于等于800
function fn1() {
    console.log("内容宽度大于800");
}

function fn2() {
    console.log("内容小于800");
}

window.addEventListener("resize", function () {
    const currentState = window.innerWidth <= 800; // 获取当前状态

    // 如果状态变化了（从小于等于800变为大于800，或者从大于800变为小于等于800），则执行相应函数
    if (currentState !== previousState) {
        if (currentState) {
            fn2();
        } else {
            fn1();
        }

        // 更新状态
        previousState = currentState;
    }
});


// window.pageXOffset【只读属性，返回水平滚动距离】
// window.pageYOffset【只读属性，返回垂直滚动距离】

//mdn文档
//