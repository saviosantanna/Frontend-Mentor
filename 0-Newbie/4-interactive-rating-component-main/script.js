var Active = true;
window.document.getElementById('finish').hidden=true;

function noteActive(z){
    var numNote = `note${z}`
    if(Active){
        window.document.getElementById(numNote).style.backgroundColor = "hsl(217, 12%, 63%)"
        Active = false;
    } else {
        for (i=1; i<=5; i++){
            window.document.getElementById(`note${i}`).style.cssText = "hsla(213, 20%, 35%, 0.20)"
        }
        window.document.getElementById(numNote).style.backgroundColor = "hsl(217, 12%, 63%)"
    }

    var newSpan = document.createElement('span');
    var includeSpan = document.createTextNode(`You selected ${z} out of 5`);
    newSpan.appendChild(includeSpan);
    var newTag = document.getElementById('finish');
    newTag.insertBefore(newSpan, newTag.children[0]);
}

function tkstate(){
    window.document.getElementById('start').hidden=true;
    window.document.getElementById('finish').hidden=false;
    window.document.getElementById('my-style').setAttribute('href', 'style2.css');
    
}

/*"hsla(213, 20%, 35%, 0.20)"*/
