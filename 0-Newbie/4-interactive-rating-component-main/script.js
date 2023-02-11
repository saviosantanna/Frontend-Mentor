var Active = true;
var Active2;
window.document.getElementById('finish').hidden=true;

function noteActive(z){
    var numNote = `note${z}`
    var newSpan = document.createElement('span');
    var includeSpan = document.createTextNode(`You selected ${z} out of 5`);
    newSpan.setAttribute('id', 'txt-note');
    if(Active){
        window.document.getElementById(numNote).style.backgroundColor = "hsl(217, 12%, 63%)"
        window.document.getElementById(numNote).style.color = "white"
        Active = false;
        Active2 = true;
    } else {
        for (i=1; i<=5; i++){
            window.document.getElementById(`note${i}`).style.cssText = "hsla(213, 20%, 35%, 0.20)"
        }
        window.document.getElementById(numNote).style.backgroundColor = "hsl(217, 12%, 63%)"
        window.document.getElementById(numNote).style.color = "white"

        newSpan.appendChild.createTextNode="doideira"
    }

    if(Active2){
        newSpan.appendChild(includeSpan);
        var newTag = document.getElementById('finish');
        newTag.insertBefore(newSpan, newTag.children[1]);
        Active2=false;
        window.document.getElementsByTagName('span').setAttribute('id','txt-note');
    } else {
        
        document.getElementById('txt-note').innerHTML = `You selected ${z} out of 5`;
    }
}

function tkstate(){
    if(Active){
    window.alert(`Please rate our support.`)
    }else{
    window.document.getElementById('start').hidden=true;
    window.document.getElementById('finish').hidden=false;
    window.document.getElementById('my-style').setAttribute('href', 'style2.css');
    }
}





/*"hsla(213, 20%, 35%, 0.20)"*/

    /*var newSpan = document.createElement('span');
    var includeSpan = document.createTextNode(`You selected ${z} out of 5`);
    newSpan.appendChild(includeSpan);
    var newTag = document.getElementById('finish');
    newTag.insertBefore(newSpan, newTag.children[0]);*/
