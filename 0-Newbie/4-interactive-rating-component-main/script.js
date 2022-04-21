var Active = true;
var numActive;

function noteActive(z){
    var numNote = `note${z}`
    numActive = z;
    if (Active == true){
    window.document.getElementById(numNote).style.backgroundColor = "hsl(217, 12%, 63%)"
    Active = false;
    } else {
        for (i=1; i<=5; i++){
            numNote = `note${i}`
            window.document.getElementById(numNote).style.backgroundColor = "none"
        }
        window.document.getElementById(numNote).style.backgroundColor = "none"
    }
    
}