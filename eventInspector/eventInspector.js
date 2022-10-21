//Emily Jung 27727
var EventInspector;
(function (EventInspector) {
    let PositionX;
    let PositionY;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    document.getElementById("div0").addEventListener("click", logInfo);
    document.getElementById("div1").addEventListener("click", logInfo);
    document.getElementById("div0").addEventListener("keyup", logInfo);
    document.getElementById("div1").addEventListener("keyup", logInfo);
    function setInfoBox(_event) {
        PositionX = _event.x;
        PositionY = _event.y;
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
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=eventInspector.js.map