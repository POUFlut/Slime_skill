function showResult(data) {  //顯示搜尋結果
    let parent = document.getElementById("searchResult");
    let child = parent.getElementsByTagName("div");
    if (child.length != 0 || child != null) {  //清空已有內容
        parent.innerHTML = "";
    }
    addTitle()  //新增標題
    if ( data == null || data.length == 0) {  //如果無結果或超過四項
        addDiv("no_result");
        let no_result = document.getElementById("no_result");
        let result = document.getElementById("no_result");
        no_result.setAttribute("class", "no_result");
        result.textContent = "查無結果";
    }
    else {
        for (let i = 0; i < data.length; i++) {  //輸出結果
            addDiv(data[i].id);
            addIconImg(data[i].id);
            addPopperDiv(data[i].id);
            addImgEvent(data[i].id);
            addLink(data[i].id, data[i].sitelink, data[i].title);
            let ref = document.getElementById(data[i].id + "_img");
            let popId = document.getElementById(data[i].id + "_pId");
            addArrow(data[i].id);
            pop(ref, popId);
        }
        for (let j = 0; j < 11; j++) {  //輸出iTag
            let parent = document.getElementById("searchResult");
            let i = document.createElement("i");
            parent.appendChild(i);
        }
    }
}

function addTitle() {  //顯示搜尋結果的標題
    let parent = document.getElementById("searchResult");
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let hr = document.createElement("hr");
    div.setAttribute("class", "re_cap");
    div.setAttribute("id", "resultTitle");
    parent.appendChild(div);
    let title = document.getElementById("resultTitle");
    h2.textContent = "搜尋結果";
    title.appendChild(h2);
    title.appendChild(hr); 
}

function addDiv(id) {  //新增div
    let parent = document.getElementById("searchResult");
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", "resultDiv");
    parent.appendChild(div);
}

function addIconImg(id) {  //新增角色圖片
    let parent = document.getElementById(id);
    let img = document.createElement("img");
    let imgId = id + "_img";
    img.setAttribute("id", imgId);
    img.setAttribute("class", "resultImg");
    img.setAttribute("aria-describedby", "tooltip")
    getIcon(id, img);
    parent.appendChild(img);
}

function addLink(id, sitelink, title) {  //新增超連結
    let parent = document.getElementById(id);
    let a = document.createElement("a");
    let aId = id + "_a";
    a.setAttribute("id", aId);
    a.setAttribute("target", "_blank");
    a.setAttribute("class", "aTag");
    a.textContent = title;
    a.href = sitelink;
    parent.appendChild(a);
}

function addPopperDiv(id) {  //新增popper div
    let parent = document.getElementById(id);
    let div = document.createElement("div");
    let pId = id + "_pId";
    div.setAttribute("class", "tooltip");
    div.setAttribute("id", pId);
    div.setAttribute("role", "tooltip");
    div.textContent = "test";
    parent.appendChild(div);
}

function pop(ref, popId) {  //pop div
    const popperInstance = Popper.createPopper(ref, popId, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8]
                }
            }
        ],
        placement: 'top'
    });
}

function addArrow(id) {  //增加箭頭
    let div = document.createElement("div");
    let popId = document.getElementById(id + "_pId");
    div.setAttribute("class", "arrow");
    div.setAttribute("data-popper-arrow", "");
    popId.appendChild(div);
}
