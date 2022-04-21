function noteActive(x){
    
    for (i=1; i<=5; i++){
        window.document.getElementById(`note${i}`).style.backgroundColor = "hsla(213, 20%, 35%, 0.20)"
    }    
    var numNote = `note${x}`
    window.document.getElementById(numNote).style.backgroundColor = "hsl(217, 12%, 63%)"
}