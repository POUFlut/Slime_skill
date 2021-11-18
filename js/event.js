const searchBtn = document.getElementById("searchBtn");
const reset = document.getElementsByClassName("reset_btn");
const reserAll = document.getElementById("reset_all");
const all = document.getElementsByClassName("all_btn");
const input = document.getElementsByTagName("input");
const goTop = document.getElementById("goTop");

searchBtn.addEventListener("click", function () {  //搜尋
    charSearch();
    window.setTimeout(function () {
        body = document.body.scrollHeight
        window.scrollTo({ top: body, behavior: 'smooth' });
    }, 500);
});

reserAll.addEventListener("click", function () {  //全部重置
    for (let m = 0; m < reset.length; m++) {
        let buttonForAll = reset[m].id;
        reset_opt(buttonForAll);
    }
});

for (let j = 0; j < reset.length; j++) {  //部分重置
    let button = reset[j].id;
    reset[j].addEventListener("click", function () {
        reset_opt(button);
    })
}

for (let n = 0; n < all.length; n++) {  //部分全選
    let filterId = reset[n + 1].id;
    all[n].addEventListener("click", function () {
        all_opt(filterId);
    })
}

for (let i = 0; i < input.length; i++) {  //選取變色
    input[i].addEventListener("click", function () {
        if (input[i].checked == true) {
            input[i].parentNode.style.backgroundColor = "darkturquoise";
            //input[i].parentNode.style.color = "white";
        }
        else {
            input[i].parentNode.style.backgroundColor = "white";
            input[i].parentNode.style.color = "black";
        };
    });
}

goTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    let btn = document.getElementById("goTop");
    if (scrollTop > 200) {
            btn.style.opacity = 0.5;
    }
    else {
        btn.style.opacity = 0;
    }
});