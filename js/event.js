const searchBtn_char = document.getElementById("searchBtn_char");
const searchBtn_bless = document.getElementById("searchBtn_bless");
const reset = document.getElementsByClassName("reset_btn");
const reserAll = document.getElementById("reset_all");
const all = document.getElementsByClassName("all_btn");
const input = document.getElementsByTagName("input");
const goTop = document.getElementById("goTop");
const and_btn = document.getElementById("AND_char");
const and_btn_bless = document.getElementById("AND_bless");
const nav = document.getElementById("nav");

if (searchBtn_char != null) {
    searchBtn_char.addEventListener("click", function () {  //搜尋_char
        charSearch();
        window.setTimeout(function () {
            body = document.body.scrollHeight
            window.scrollTo({ top: body, behavior: 'smooth' });
        }, 500);
    });
}

if (searchBtn_bless != null) {
    searchBtn_bless.addEventListener("click", function () {  //搜尋_bless
        blessSearch();
        window.setTimeout(function () {
            body = document.body.scrollHeight
            window.scrollTo({ top: body, behavior: 'smooth' });
        }, 500);
    });
}

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

goTop.addEventListener("click", function () {  //至頂
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("scroll", function () {  //至頂按鈕控制
    let scrollTop = document.documentElement.scrollTop;
    let btn = document.getElementById("goTop");
    if (scrollTop > 200) {
        btn.style.visibility = "visible";
        btn.style.opacity = 0.5;
    }
    else {
        btn.style.visibility = "hidden";
        btn.style.opacity = 0;
    }
});

nav.addEventListener("click", function () {  //導覽列按鈕
    let aside = document.getElementById("aside");
    if ( aside.hasAttribute("data-show") == false ) {
        aside.setAttribute("data-show", "");
    }
    else {
        aside.removeAttribute("data-show");
    }
})

function addImgEvent(id) {  //點擊圖片時的處理
    let element = document.getElementById(id + "_img");
    let div = document.getElementById(id + "_pId");
    element.addEventListener("click", function addEvent() {
        if (div.hasAttribute("data-show") == false) {
            div.setAttribute("data-show", "");
            element.style.borderStyle = "dashed";
            window.scrollBy(0, 1);
        }
        else {
            div.removeAttribute("data-show");
            element.style.borderStyle = "none";
            window.scrollBy(0, -1);
        }            
    })
}

if (and_btn != null) {
    and_btn.addEventListener("click", function () {  //AND OR 切換_char
        if (and_btn.value == "AND") {
            and_btn.value = "OR";
            and_btn.setAttribute("data_show", "");
            and_btn.textContent = "OR 搜尋";
        }
        else {
            and_btn.value = "AND";
            and_btn.textContent = "AND 搜尋";
            and_btn.removeAttribute("data_show");
        }
    })
}
if (and_btn_bless != null) {
    and_btn_bless.addEventListener("click", function () {  //AND OR 切換_bless
        if (and_btn_bless.value == "AND") {
            and_btn_bless.value = "OR";
            and_btn_bless.setAttribute("data_show", "");
            and_btn_bless.textContent = "OR 搜尋";
        }
        else {
            and_btn_bless.value = "AND";
            and_btn_bless.textContent = "AND 搜尋";
            and_btn_bless.removeAttribute("data_show");
        }
    })
}