function createNode(tagName, textInfo, textColor = null){
    let node = document.createElement(tagName);
    let textNode = document.createTextNode(textInfo);

    node.appendChild(textNode);
    if(textColor){
        node.style.color = "red";
    }

    document.body.appendChild(node);
}

function createLiNode(tagName, dataInfo, appendNode=null){
    let node = document.createElement(tagName)
        ,childNode, textNode, delNode;

    for (let info of dataInfo) {
        childNode = document.createElement("li");

        textNode = document.createTextNode(info[0]);

        if(info[1]){
            delNode = document.createElement("del");
            delNode.appendChild(textNode);
            childNode.appendChild(delNode);

        }else{
            childNode.appendChild(textNode);
        }
        
        if(Array.isArray(info[2])){
            createLiNode('ul', info[2], childNode);
        }

        node.appendChild(childNode);
    }

    if(appendNode){
        appendNode.appendChild(node);

    }else{
        document.body.appendChild(node);
    }
}

function createFormNode(inputArray){
    let node = document.createElement('form')
        ,inputNode, textNode;

    for (let info of inputArray) {
        inputNode = document.createElement("input");
        inputNode.setAttribute("type", info[0]);
        inputNode.setAttribute("name", info[1]);
        inputNode.setAttribute("placeholder", info[2]);

        node.appendChild(inputNode);
    }

    inputNode = document.createElement("button");
    inputNode.setAttribute("type", 'submit');
    inputNode.setAttribute("name", 'submit');
    
    textNode = document.createTextNode('submit');

    inputNode.appendChild(textNode);
    node.appendChild(inputNode);

    document.body.appendChild(node);
}

// create h1
createNode('h1', 'My Tasks', 'red');

// create ul
let olInfoArray = [
    ['login', false, null],
    ['register', true, null],
    ['log out', false, null],
]

let ulInfoArray = [
    ['user dashboard', false, null],
    ['admin dashboard', false, null],
    ['authentication', false, null],
    ['about page', false, olInfoArray],
    ['content page', true, null],
]

createLiNode('ol', ulInfoArray);

// create form
let inputArray = [
    ['text', 'title', 'Enter task title'],
    ['text', 'body', 'Enter task body']
];

createFormNode(inputArray)