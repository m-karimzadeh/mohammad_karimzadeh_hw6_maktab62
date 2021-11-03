let mainText = document.getElementById('mainNodeText').textContent;

document.getElementById('parentCopy').onclick = function(){
    let parentText = document.getElementById('parentNodeText').textContent + mainText
        ,childText = document.getElementById('childNodeText').textContent + mainText;

    document.getElementById('mainNodeText').textContent = parentText + childText;
}

document.getElementById('childCopy').onclick = function(){
    let childText = document.getElementById('childNodeText').textContent + mainText;
    document.getElementById('mainNodeText').textContent = childText;
}