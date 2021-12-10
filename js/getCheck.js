function getSkillCheck() {  //取得選擇的技能種類
    let skill = document.getElementById("skill_opt_content");
    let skillArray = skill.getElementsByTagName("input");
    let skillCheck = [], skillCount = 0;
    for (let i = 0; i < skillArray.length; i++) {
        if (skillArray[i].checked == true) {
            skillCheck[skillCount] = skillArray[i].id;
            skillCount++;
        }
    }
    return skillCheck;
}

function getUltCheck() {  //取得選擇的奧義種類
    let ult = document.getElementById("ult_opt_content");
    let ultArray = ult.getElementsByTagName("input");
    let ultCheck = [], ultCount = 0;
    for (let i = 0; i < ultArray.length; i++) {
        if (ultArray[i].checked == true) {
            ultCheck[ultCount] = ultArray[i].id;
            ultCount++;
        }
    }
    return ultCheck;
}

function getLevelCheck() {  //取得選擇的星數
    let level = document.getElementById("level_opt_content");
    let levelArray = level.getElementsByTagName("input");
    let levelCheck = [], levelCount = 0;
    for (let i = 0; i < levelArray.length; i++) {
        if (levelArray[i].checked == true) {
            levelCheck[levelCount] = levelArray[i].id;
            levelCount++;
        }
    }
    levelCheck = levelCheck.map((i) => Number(i));
    return levelCheck;
}

function getDtypeCheck() {  //取得選擇的傷害類型
    let dtype = document.getElementById("dtype_opt_content");
    let dtypeArray = dtype.getElementsByTagName("input");
    let dtypeCheck = [], dtypeCount = 0;
    for (let i = 0; i < dtypeArray.length; i++) {
        if (dtypeArray[i].checked == true) {
            dtypeCheck[dtypeCount] = dtypeArray[i].id;
            dtypeCount++;
        }
    }
    return dtypeCheck;
}

function getAttCheck() {  //取得選擇的屬性
    let att = document.getElementById("att_opt_content");
    let attArray = att.getElementsByTagName("input");
    let attCheck = [], attCount = 0;
    for (let i = 0; i < attArray.length; i++) {
        if (attArray[i].checked == true) {
            attCheck[attCount] = attArray[i].id;
            attCount++;
        }
    }
    return attCheck;
}

function getPassive_1_Check() {  //取得選擇的被動_1
    let passive_1 = document.getElementById("passive_1_opt_content");
    let passiveArray = passive_1.getElementsByTagName("input");
    let passiveCheck = [], passiveCount = 0;
    for (let i = 0; i < passiveArray.length; i++) {
        if (passiveArray[i].checked == true) {
            passiveCheck[passiveCount] = passiveArray[i].value;
            passiveCount++;
        }
    }
    return passiveCheck;
}

function getPassive_2_Check() {  //取得選擇的被動_2
    let passive_2 = document.getElementById("passive_2_opt_content");
    let passiveArray = passive_2.getElementsByTagName("input");
    let passiveCheck = [], passiveCount = 0;
    for (let i = 0; i < passiveArray.length; i++) {
        if (passiveArray[i].checked == true) {
            passiveCheck[passiveCount] = passiveArray[i].value;
            passiveCount++;
        }
    }
    return passiveCheck;
}

/*function defaultSkill() {  //未選取技能種類時視為全選
    let skill = document.getElementById("skill_opt_content");
    let skillArray = skill.getElementsByTagName("input");
    let skillDefault = [];
    for (let i = 0; i < skillArray.length; i++) {
        skillDefault[i] = skillArray[i].id;
    }
    return skillDefault;
}*/

function defaultLevel() {  //未選取星數時視為全選
    let level = document.getElementById("level_opt_content");
    let levelArray = level.getElementsByTagName("input");
    let levelDefault = [];
    for (i = 0; i < levelArray.length; i++) {
        levelDefault[i] = levelArray[i].id;
    }
    levelDefault = levelDefault.map((i) => Number(i));
    return levelDefault;
}

function defaultDtype() {  //未選取傷害類型時視為全選
    let dtype = document.getElementById("dtype_opt_content");
    let dtypeArray = dtype.getElementsByTagName("input");
    let dtypeDefault = [];
    for (let i = 0; i < dtypeArray.length; i++) {
        dtypeDefault[i] = dtypeArray[i].id;
    }
    return dtypeDefault;
}

function defaultUlt() {  //未選取奧義類型時視為全選
    let ult = document.getElementById("ult_opt_content");
    let ultArray = ult.getElementsByTagName("input");
    let ultDefault = [];
    for (let i = 0; i < ultArray.length; i++) {
        ultDefault[i] = ultArray[i].id;
    }
    return ultDefault;
}

function defaultAtt() {  //未選取屬性時視為全選
    let att = document.getElementById("att_opt_content");
    let attArray = att.getElementsByTagName("input");
    let attDefault = [];
    for (let i = 0; i < attArray.length; i++) {
        attDefault[i] = attArray[i].id;
    }
    return attDefault;
}

function defaultPassive_1() {  //未選取被動1時視為全選
    let passive = document.getElementById("passive_1_opt_content");
    let passiveArray = passive.getElementsByTagName("input");
    let passiveDefault = [];
    for (let i = 0; i < passiveArray.length; i++) {
        passiveDefault[i] = passiveArray[i].value;
    }
    return passiveDefault;
}

function defaultPassive_2() {  //未選取被動2時視為全選
    let passive = document.getElementById("passive_2_opt_content");
    let passiveArray = passive.getElementsByTagName("input");
    let passiveDefault = [];
    for (let i = 0; i < passiveArray.length; i++) {
        passiveDefault[i] = passiveArray[i].value;
    }
    return passiveDefault;
}