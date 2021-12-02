async function ANDsearchData(collection, skill, level, dtype, ult, att) {  //取得技能篩選後的資料,AND查詢
    let obj_skill = [], storage1 = [], storage2 = [], storage3 = [], storage4 = [], storage5 = [], storage6 = [];
    switch (skill.length) {
        case 1:  //勾選一個技能
            await db.collection(collection).where("skill", "array-contains", skill[0])
                .get().then(querySnapshot => {
                    querySnapshot.forEach(data => {
                        obj_skill.push(data.data());
                    })
                })
            break;
        case 2:  //勾選兩個技能
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
        case 3:  //勾選三個技能
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
        case 4:  //勾選四個技能
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
            showResult(null);
    }
    //console.log(obj_skill);
    selectData_level(level, dtype, ult, att, obj_skill);
}

function selectData_level(level, dtype, ult, att, obj_skill) {  //篩選星數
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

function selectData_dtype(dtype, ult, att, obj_level) {  //篩選傷害類型
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

function selectData_ult(ult, att, obj_dtype) {  //篩選奧義類型
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

function selectData_att(att, obj_ult) {  //篩選屬性
    let obj_att = [];
    for (let i = 0; i < att.length; i++) {
        for (let j = 0; j < obj_ult.length; j++) {
            if (att[i] == obj_ult[j].att) {
                obj_att.push(obj_ult[j]);
            }
        }
    }
    obj_att = sortObj(obj_att);
    showResult(obj_att);
    //showResult(obj_att, objId_att);
}

async function getIcon(id, img) {  //取得角色圖片
    let ref = "icon/" + id + ".jpg";
    let storageRef = storage.ref(ref);
    await storageRef.getDownloadURL()
        .then((url) => {
            img.src = url;
        })
}

async function getPopperImg(id, attr_one_ele, attr_two_ele, attr_three_ele, sk_one_ele,
    sk_two_ele, att, dtype, ult, one, two) {  //取得技能圖片 + 技能
    let result_arr1 = [], result_arr2 = [];
    await db.collection("charSkill").doc(id)
        .get().then(data => {
            result_arr1 = data.data()[1];
            result_arr2 = data.data()[2];
        });
    let ref_attr = "skill/" + att + ".png";
    let ref_dtype = "skill/" + dtype + ".png";
    let ref_ult = "skill/" + ult + ".png";
    let sk_one = "skill/" + result_arr1[0] + ".png";
    let sk_two = "skill/" + result_arr2[0] + ".png";
    let storage_attr = storage.ref(ref_attr);
    let storage_dtype = storage.ref(ref_dtype);
    let storage_ult = storage.ref(ref_ult);
    let storage_sk_one = storage.ref(sk_one);
    let storage_sk_two = storage.ref(sk_two);
    await storage_attr.getDownloadURL()
        .then((url) => {
            attr_one_ele.src = url;
        })
    await storage_dtype.getDownloadURL()
        .then((url) => {
            attr_two_ele.src = url;
        })
    await storage_ult.getDownloadURL()
        .then((url) => {
            attr_three_ele.src = url;
        })
    await storage_sk_one.getDownloadURL()
        .then((url) => {
            sk_one_ele.src = url;
        })
    await storage_sk_two.getDownloadURL()
        .then((url) => {
            sk_two_ele.src = url;
        })
    let content = [result_arr1[1], result_arr2[1]];
    setSkillContentDiv(id, one, two, content);
}

async function ORsearchData(collection, skill, level, dtype, ult, att) {  //取得技能篩選後的資料,OR查詢
    let obj_skill = [];
    await db.collection(collection).where("skill", "array-contains-any", skill)
        .get().then(querySnapshot => {
            querySnapshot.forEach(data => {
                obj_skill.push(data.data());
            }) 
         });
    selectData_level(level, dtype, ult, att, obj_skill);
}

async function ANDsearchDataNoSkill(collection, level, dtype, ult, att) {  //取得技能篩選後的資料,AND查詢,未選擇技能時
    let obj_level = [];
    await db.collection(collection).where("level", "array-contains-any", level)
        .get().then(querySnapshot => {
            querySnapshot.forEach(data => {
                obj_level.push(data.data());
            })
        })
    selectData_dtype(dtype, ult, att, obj_level);
}