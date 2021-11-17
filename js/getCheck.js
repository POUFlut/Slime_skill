function getSkillCheck() {  //���o��ܪ��ޯ����
    let skill = document.getElementById("skill_opt");
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

function getUltCheck() {  //���o��ܪ����q����
    let ult = document.getElementById("ult_opt");
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

function getLevelCheck() {  //���o��ܪ��P��
    let level = document.getElementById("level_opt");
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

function getDtypeCheck() {  //���o��ܪ��ˮ`����
    let dtype = document.getElementById("dtype_opt");
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

function getAttCheck() {  //���o��ܪ��ݩ�
    let att = document.getElementById("att_opt");
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

function defaultSkill() {  //������ޯ�����ɵ�������
    let skill = document.getElementById("skill_opt");
    let skillArray = skill.getElementsByTagName("input");
    let skillDefault = [];
    for (let i = 0; i < skillArray.length; i++) {
        skillDefault[i] = skillArray[i].id;
    }
    return skillDefault;
}

function defaultLevel() {  //������P�Ʈɵ�������
    let level = document.getElementById("level_opt");
    let levelArray = level.getElementsByTagName("input");
    let levelDefault = [];
    for (i = 0; i < levelArray.length; i++) {
        levelDefault[i] = levelArray[i].id;
    }
    levelDefault = levelDefault.map((i) => Number(i));
    return levelDefault;
}

function defaultDtype() {  //������ˮ`�����ɵ�������
    let dtype = document.getElementById("dtype_opt");
    let dtypeArray = dtype.getElementsByTagName("input");
    let dtypeDefault = [];
    for (let i = 0; i < dtypeArray.length; i++) {
        dtypeDefault[i] = dtypeArray[i].id;
    }
    return dtypeDefault;
}

function defaultUlt() {  //��������q�����ɵ�������
    let ult = document.getElementById("ult_opt");
    let ultArray = ult.getElementsByTagName("input");
    let ultDefault = [];
    for (let i = 0; i < ultArray.length; i++) {
        ultDefault[i] = ultArray[i].id;
    }
    return ultDefault;
}

function defaultAtt() {  //������ݩʮɵ�������
    let att = document.getElementById("att_opt");
    let attArray = att.getElementsByTagName("input");
    let attDefault = [];
    for (let i = 0; i < attArray.length; i++) {
        attDefault[i] = attArray[i].id;
    }
    return attDefault;
}