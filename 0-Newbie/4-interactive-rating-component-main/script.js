var Active = true;
var numActive;

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
}
/*"hsla(213, 20%, 35%, 0.20)"*/