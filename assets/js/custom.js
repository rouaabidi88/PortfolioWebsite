
document.addEventListener("DOMContentLoaded", () => {
    const spanElement = document.getElementById('mySpan');
    if (spanElement) {
        spanElement.addEventListener('mouseover', () => {
            spanElement.textContent = 'World';
        });
        spanElement.addEventListener('mouseout', () => {
            spanElement.textContent = 'There';
        });
    }
});

window.crack = function () {
    const x = document.getElementById("inputcode").value;
    if (x === "anything") {
        window.location = "#secret";
    } else {
        window.alert("Guess again :(");
    }
};

window.typeWriter = function () {
    const output = document.getElementById("output");
    const txt = 'Dear Guests, Thank you for stopping by! Enter "anything" below for a little secret :)';
    let i = 0;

    function type() {
        if (i < txt.length) {
            output.innerHTML += txt.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
};

window.ediseronclick = () => window.location = "#ediser";
window.alterlandonclick = () => window.location = "#alterland";
window.saponclick = () => window.location = "#sap";
window.xixonclick = () => window.location = "#xix";
window.eyonclick = () => window.location = "#ey";
window.siyouonclick = () => window.location = "#siyou";
window.c_discoveronclick = () => window.location = "#chaosfieldz";
window.g_discoversonclick = () => window.location = "#galacticrush";


console.log("✅ custom.js is loaded!");
