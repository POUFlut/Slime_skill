function reset_opt(opt) {  //���m���
    let range = document.getElementById(opt);
    let input = range.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        input[i].checked = false;
    }
}

function all_opt(opt) {  //����
    let range = document.getElementById(opt);
    let input = range.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        input[i].checked = true;
    }
}

function charSearch() {
    let skill = getSkillCheck();  //���o��ܪ��ޯ����
    let level = getLevelCheck();  //���o��ܪ��P��
    let dtype = getDtypeCheck();  //���o��ܪ��ˮ`����
    let ult = getUltCheck();  //���o��ܪ����q����
    let att = getAttCheck();  //���o��ܪ��ݩ�
    if (skill[0] == undefined) { skill = defaultSkill() };  //�p�G������ݩ�
    if (level[0] == undefined) { level = defaultLevel() };  //�p�G����ܬP��
    if (dtype[0] == undefined) { dtype = defaultDtype() };  //�p�G����ܶˮ`����
    if (ult[0] == undefined) { ult = defaultUlt() };  //�p�G����ܶ��q����
    if (att[0] == undefined) { att = defaultAtt() };  //�p�G������ݩ�
    ANDsearchData("char", skill, level, dtype, ult, att);
}
