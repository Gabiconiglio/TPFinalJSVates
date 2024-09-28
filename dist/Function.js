"use strict";
const changeColorBtn = document.getElementById("change-color-btn");
const changeTextBtn = document.getElementById("change-text-btn");
const boxes = document.querySelectorAll(".box");
function changeBoxColors() {
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        if (box.style.backgroundColor === "lightgray") {
            box.style.backgroundColor = "blue";
        }
        else {
            box.style.backgroundColor = "lightgray";
        }
    }
}
function changeBoxText() {
    var _a;
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        console.log(box);
        console.log(box.textContent);
        if ((_a = box.textContent) === null || _a === void 0 ? void 0 : _a.includes('Caja')) {
            box.textContent = "Nuevo Texto " + [i + 1];
        }
        else {
            box.textContent = "Caja " + [i + 1];
        }
    }
}
changeColorBtn.addEventListener("click", changeBoxColors);
changeTextBtn.addEventListener("click", changeBoxText);
