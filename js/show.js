function showResult(data) {  //顯示搜尋結果
    let parent = document.getElementById("searchResult");
    let child = parent.getElementsByTagName("div");
    if (child.length != 0 || child != null) {  //清空已有內容
        parent.innerHTML = "";
    }
    if ( data == null ) {
        addDiv("no_result");
        let result = document.getElementById("no_result");
        result.textContent = "查無結果";
    }
    else {
        for (let i = 0; i < data.length; i++) {
            addDiv(data[i].id);
            addIconImg(data[i].id);
            addLink(data[i].id, data[i].sitelink, data[i].title);
        }
        for (let j = 0; j < 11; j++) {
            let parent = document.getElementById("searchResult");
            let i = document.createElement("i");
            parent.appendChild(i);
        }
    }
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
    getIcon(id, img);
    parent.appendChild(img);
}

function addLink(id, sitelink, title) {  //新增超連結
    let parent = document.getElementById(id);
    let a = document.createElement("a");
    let aId = id + "_a";
    a.setAttribute(id, aId);
    a.setAttribute("target", "_blank");
    a.setAttribute("class", "aTag");
    a.textContent = title;
    a.href = sitelink;
    parent.appendChild(a);
}