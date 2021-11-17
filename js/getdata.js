async function ANDsearchData(collection, skill, level, dtype, ult, att) {  //���o�ޯ�z��᪺���,AND�d��
    let obj_skill = [], storage1 = [], storage2 = [], storage3 = [], storage4 = [], storage5 = [], storage6 = [];
    switch (skill.length) {
        case 1:  //�Ŀ�@�ӧޯ�
            await db.collection(collection).where("skill", "array-contains", skill[0])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        obj_skill.push(data.data());
                    })
                })
            break;
        case 2:  //�Ŀ��ӧޯ�
            await db.collection(collection).where("skill", "array-contains", skill[0])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage1.push(data.data());
                    })
                    //console.log(storage1);
                })
            await db.collection(collection).where("skill", "array-contains", skill[1])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage2.push(data.data());
                    })
                    //console.log(storage2);
                })
             for(let i = 0; i < storage1.length; i++) {
                for (let j = 0; j < storage2.length; j++) {
                    if (storage1[i].id == storage2[j].id) {
                        obj_skill.push(storage1[i]);
                    }
                }
            }
            break;
        case 3:  //�Ŀ�T�ӧޯ�
            await db.collection(collection).where("skill", "array-contains", skill[0])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage1.push(data.data());
                    })
                    //console.log(storage1);
                })
            await db.collection(collection).where("skill", "array-contains", skill[1])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage2.push(data.data());
                    })
                    //console.log(storage2);
                })
            await db.collection(collection).where("skill", "array-contains", skill[2])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage3.push(data.data());
                    })
                    //console.log(storage3);
                })
            for (let i = 0; i < storage1.length; i++) {
                for (let j = 0; j < storage2.length; j++) {
                    if (storage1[i].id == storage2[j].id) {
                        storage4.push(storage1[i]);
                    }
                }
            }
            for (let i = 0; i < storage4.length; i++) {
                for (let j = 0; j < storage3.length; j++) {
                    if (storage4[i].id == storage3[j].id) {
                        obj_skill.push(storage4[i]);
                    }
                }
            }
            break;
        case 4:  //�Ŀ�|�ӧޯ�
            await db.collection(collection).where("skill", "array-contains", skill[0])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage1.push(data.data());
                    })
                    //console.log(storage1);
                })
            await db.collection(collection).where("skill", "array-contains", skill[1])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage2.push(data.data());
                    })
                    //console.log(storage2);
                })
            await db.collection(collection).where("skill", "array-contains", skill[2])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage3.push(data.data());
                    })
                    //console.log(storage3);
                })
            await db.collection(collection).where("skill", "array-contains", skill[3])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        storage4.push(data.data());
                    })
                    //console.log(storage4);
                })
            for (let i = 0; i < storage1.length; i++) {
                for (let j = 0; j < storage2.length; j++) {
                    if (storage1[i].id == storage2[j].id) {
                        storage5.push(storage1[i]);
                    }
                }
            }
            for (let i = 0; i < storage3.length; i++) {
                for (let j = 0; j < storage4.length; j++) {
                    if (storage3[i].id == storage4[j].id) {
                        storage6.push(storage3[i]);
                    }
                }
            }
            for (let i = 0; i < storage5.length; i++) {
                for (let j = 0; j < storage6.length; j++) {
                    if (storage5[i].id == storage6[j].id) {
                        obj_skill.push(storage5[i]);
                    }
                }
            }
            break;
        default:
            console.log("quantity error");
    }
    //console.log(obj_skill);
    selectData_level(level, dtype, ult, att, obj_skill);
}

function selectData_level(level, dtype, ult, att, obj_skill) {  //�z��P��
    let obj_level = [];
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < obj_skill.length; j++) {
            if (level[i] == obj_skill[j].level) {
                obj_level.push(obj_skill[j]);
            }
        }
    }
    //console.log(obj_level);
    selectData_dtype(dtype, ult, att, obj_level);
}

function selectData_dtype(dtype, ult, att, obj_level) {  //�z��ˮ`����
    let obj_dtype = [];
    for (let i = 0; i < dtype.length; i++) {
        for (let j = 0; j < obj_level.length; j++) {
            if (dtype[i] == obj_level[j].dtype) {
                obj_dtype.push(obj_level[j]);
            }
        }
    }
    //console.log(obj_dtype);
    selectData_ult(ult, att, obj_dtype);
}

function selectData_ult(ult, att, obj_dtype) {  //�z����q����
    let obj_ult = [];
    for (let i = 0; i < ult.length; i++) {
        for (let j = 0; j < obj_dtype.length; j++) {
            if (ult[i] == obj_dtype[j].ult) {
                obj_ult.push(obj_dtype[j]);
            }
        }
    }
    //console.log(obj_ult);
    selectData_att(att, obj_ult);
}

function selectData_att(att, obj_ult) {  //�z���ݩ�
    let obj_att = [];
    for (let i = 0; i < att.length; i++) {
        for (let j = 0; j < obj_ult.length; j++) {
            if (att[i] == obj_ult[j].att) {
                obj_att.push(obj_ult[j]);
            }
        }
    }
    console.log(obj_att);
    //showResult(obj_att, objId_att);
}

function getIcon() {
    let storageRef = storage.ref("icon/A310801.jpg");
    storageRef.getDownloadURL()
        .then((url) => {
            let test = url;
            document.querySelector('img').src = test;
        })
}