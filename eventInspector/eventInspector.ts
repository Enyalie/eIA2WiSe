//Emily Jung 27727

namespace eventInspector{

    let PositionX: number;
    let PositionY: number;

    window.addEventListener("load", handleLoad);

function handleLoad(): void {

    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo); 
    document.addEventListener("keyup", logInfo);

    document.querySelector("#button").addEventListener("click", custom);
         document.addEventListener("customEvent", logInfo);
}

document.body.addEventListener("click", logInfo);
document.body.addEventListener("keyup", logInfo);

document.getElementById("div0").addEventListener("click", logInfo);
document.getElementById("div1").addEventListener("click", logInfo);

document.getElementById("div0").addEventListener("keyup", logInfo);
document.getElementById("div1").addEventListener("keyup", logInfo); 

function setInfoBox(_event: MouseEvent): void {
    PositionX = _event.x+10;
    PositionY = _event.y+10;
    
    document.getElementById("span").innerHTML = "x Position:" + PositionX + ", y Position:" + PositionY;
        
    document.getElementById("span").style.left = _event.x + "px";
    document.getElementById("span").style.top = _event.y + "px";}

function logInfo(_event: Event): void {
    console.log("current target:" + _event.currentTarget);
    console.log("Target: " + _event.target);
    console.log("type event: " + _event.type);
    console.log(_event);
}

function custom(_event: MouseEvent): void {
    let newEvent: CustomEvent = new CustomEvent("customEvent", {bubbles: true});
    let button: HTMLElement = document.querySelector("#button");
    button.dispatchEvent(newEvent);

}
}