function switchOff(){
document.getElementById("imgBulb").src=" https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("imgCat").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

document.getElementById("switchStatus").textContent="Swicthed Off";
document.getElementById("onSwitch").style.backgroundColor="#c4e2e0";
document.getElementById("offSwitch").style.backgroundColor="#0c66a2";
}



function switchOn(){
document.getElementById("imgBulb").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
document.getElementById("imgCat").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";

document.getElementById("switchStatus").textContent="Swicthed On";
document.getElementById("offSwitch").style.backgroundColor="#c4e2e0";
document.getElementById("onSwitch").style.backgroundColor="#0c66a2";
}