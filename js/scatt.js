function reset_opt(opt) {  //重置選取
    let newOpt = opt + "_content";
    let range = document.getElementById(newOpt);
    let input = range.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        input[i].checked = false;
        input[i].parentNode.style.backgroundColor = "white";
        input[i].parentNode.style.color = "black";
    }
}

function all_opt(opt) {  //全選
    let newOpt = opt + "_content";
    let range = document.getElementById(newOpt);
    let input = range.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        input[i].checked = true;
        input[i].parentNode.style.backgroundColor = "darkturquoise";
        //input[i].parentNode.style.color = "white";
    }
}

function charSearch() {
    let skill = getSkillCheck();  //取得選擇的技能種類
    let level = getLevelCheck();  //取得選擇的星數
    let dtype = getDtypeCheck();  //取得選擇的傷害類型
    let ult = getUltCheck();  //取得選擇的奧義類型
    let att = getAttCheck();  //取得選擇的屬性
    if (skill[0] == undefined) { skill = defaultSkill() };  //如果未選擇屬性
    if (level[0] == undefined) { level = defaultLevel() };  //如果未選擇星數
    if (dtype[0] == undefined) { dtype = defaultDtype() };  //如果未選擇傷害類型
    if (ult[0] == undefined) { ult = defaultUlt() };  //如果未選擇奧義類型
    if (att[0] == undefined) { att = defaultAtt() };  //如果未選擇屬性
    let way = document.getElementById("AND");
    if (way.value == "AND") {
        if (skill.length > 4) {
            showResult(null);
        }
        else ANDsearchData("char", skill, level, dtype, ult, att);
    }
    else {  
        if (skill.length > 10) {
            showResult(null);
        }
        else ORsearchData("char", skill, level, dtype, ult, att);
    }
}

function sortObj(data) {  //排序
    data = data.sort((a, b) => {
        if (a.id > b.id)
            return 1;
        else
            return -1;
    })
    return data;
}