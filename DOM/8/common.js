let result = [];
for (const personDataItem of personData) {
    for (const additionalPersonDataItem of additionalPersonData) {
        if (personDataItem.uid === additionalPersonDataItem.uid) {
            result.push({ ...personDataItem, ...additionalPersonDataItem });
        }
    }
}

let tableNode = document.createElement('table')
    ,tbodyNode = document.createElement('tbody')
    ,trNode, textNode
    ,columnNameArray = ['Row', 'UID', 'First Name', 'Last Name', 'Position', 'City']
    ,bgFlag = false
    ,rowCounter = 0;

tableNode.style.textAlign = 'center'

// table head
trNode = document.createElement('tr');
trNode.style.backgroundColor = "#666666";

for (let dataInfo of columnNameArray) {
    tdNode = document.createElement("td");
    tdNode.style.padding = '5px 10px';
    textNode = document.createTextNode(dataInfo);

    tdNode.appendChild(textNode);
    trNode.appendChild(tdNode);
}

// table data
tbodyNode.appendChild(trNode);

tableNode.appendChild(tbodyNode);

for (let rowInfo of result) {    
    trNode = document.createElement('tr');
    // row number
    tdNode = document.createElement("td");
    tdNode.style.padding = '5px 10px';
    textNode = document.createTextNode(++rowCounter);

    tdNode.appendChild(textNode);
    trNode.appendChild(tdNode);

    if(bgFlag){
        bgFlag = false;
        trNode.style.backgroundColor = "#eeeeee";

    }else{
        bgFlag = true;
    }
    
    for (let dataInfo in rowInfo) {
        tdNode = document.createElement("td");
        tdNode.style.padding = '5px 10px';
        textNode = document.createTextNode(rowInfo[dataInfo]);

        tdNode.appendChild(textNode);
        trNode.appendChild(tdNode);
    }


    tbodyNode.appendChild(trNode);

    tableNode.appendChild(tbodyNode);
}


document.body.appendChild(tableNode);