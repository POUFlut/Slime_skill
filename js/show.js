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
            addPopperDiv(data[i].id, data[i].att, data[i].dtype, data[i].ult);
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

function addPopperDiv(id, attr, dtype, ult) {  //新增popper div
    let parent = document.getElementById(id);
    let div = document.createElement("div");
    let pId = id + "_pId";
    div.setAttribute("class", "tooltip");
    div.setAttribute("id", pId);
    div.setAttribute("role", "tooltip");
    parent.appendChild(div);
    setPopperDiv(pId, id, attr, dtype, ult);
}

function pop(ref, popId) {  //pop div
    Popper.createPopper(ref, popId, {
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

function setPopperDiv(pId, id, att, dtype, ult) {  //在Popper中新增div
    let parent = document.getElementById(pId);
    let attr = document.createElement("div");
    let sk_one = document.createElement("div");
    let sk_two = document.createElement("div");
    attr.setAttribute("class", "attr");
    attr.setAttribute("id", id + "_attr");
    parent.appendChild(attr);
    sk_one.setAttribute("class", "sk_one");
    sk_one.setAttribute("id", id + "_sk_one");
    parent.appendChild(sk_one);
    sk_two.setAttribute("class", "sk_two");
    sk_two.setAttribute("id", id + "_sk_two");
    parent.appendChild(sk_two);
    let attr_id = document.getElementById(id + "_attr");
    let sk_one_id = document.getElementById(id + "_sk_one");
    let sk_two_id = document.getElementById(id + "_sk_two");
    setPopperImgTag(id, attr_id, sk_one_id, sk_two_id, att, dtype, ult);
}

function setPopperImgTag(id, attr, one, two, att, dtype, ult) {
    let attr_img_one = document.createElement("img");
    let attr_img_two = document.createElement("img");
    let attr_img_three = document.createElement("img");
    let sk_one = document.createElement("img");
    let sk_two = document.createElement("img");
    attr_img_one.setAttribute("class", "att");
    attr_img_one.setAttribute("id", id + "_att_one");
    attr_img_two.setAttribute("class", "att");
    attr_img_two.setAttribute("id", id + "_att_two");
    attr_img_three.setAttribute("class", "att");
    attr_img_three.setAttribute("id", id + "_att_three");
    sk_one.setAttribute("class", "skill_ic");
    sk_one.setAttribute("id", id + "_skImg_one");
    sk_two.setAttribute("class", "skill_ic");
    sk_two.setAttribute("id", id + "_skImg_one");
    getPopperImg(id, attr_img_one, attr_img_two, attr_img_three, sk_one, sk_two, att, dtype, ult, one, two);
    attr.appendChild(attr_img_one);
    attr.appendChild(attr_img_two);
    attr.appendChild(attr_img_three);
    one.appendChild(sk_one);
    two.appendChild(sk_two);
}

function setSkillContentDiv(id, one, two, content) {
    let c_one = document.createElement("div");
    let c_two = document.createElement("div");
    let id_one = id + "_c_one";
    let id_two = id + "_c_two";
    c_one.setAttribute("id", id_one);
    c_two.setAttribute("id", id_two);
    c_one.setAttribute("class", "sk_c");
    c_two.setAttribute("class", "sk_c");
    one.appendChild(c_one);
    two.appendChild(c_two);
    let set_c_one = document.getElementById(id_one);
    let set_c_two = document.getElementById(id_two);
    set_c_one.innerHTML = content[0];
    set_c_two.innerHTML = content[1];
}
