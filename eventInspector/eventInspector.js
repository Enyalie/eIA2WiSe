//Emily Jung 27727
var eventInspector;
(function (eventInspector) {
    let PositionX;
    let PositionY;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
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
    function setInfoBox(_event) {
        PositionX = _event.x + 10;
        PositionY = _event.y + 10;
        document.getElementById("span").innerHTML = "x Position:" + PositionX + ", y Position:" + PositionY;
        document.getElementById("span").style.left = _event.x + "px";
        document.getElementById("span").style.top = _event.y + "px";
    }
    function logInfo(_event) {
        console.log("current target:" + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("type event: " + _event.type);
        console.log(_event);
    }
    function custom(_event) {
        let newEvent = new CustomEvent("customEvent", { bubbles: true });
        let button = document.querySelector("#button");
        button.dispatchEvent(newEvent);
    }
})(eventInspector || (eventInspector = {}));
//# sourceMappingURL=eventInspector.js.map