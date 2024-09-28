const changeColorBtn = document.getElementById(
  "change-color-btn"
) as HTMLButtonElement;
const changeTextBtn = document.getElementById(
  "change-text-btn"
) as HTMLButtonElement;
const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLDivElement>;

function changeBoxColors(): void {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    if (box.style.backgroundColor === "lightgray") {
      box.style.backgroundColor = "blue";
    } else {
      box.style.backgroundColor = "lightgray";
    }
  }
}

function changeBoxText(): void {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    console.log(box);
    console.log(box.textContent);
    
    if (box.textContent?.includes('Caja')) {
      box.textContent = "Nuevo Texto " + [i + 1];
    } else {
      box.textContent = "Caja " + [i + 1];
    }
  }
}

changeColorBtn.addEventListener("click", changeBoxColors);
changeTextBtn.addEventListener("click", changeBoxText);
