const input = document.querySelector('#input');
const form = document.querySelector('#form');
const result = document.querySelector('.moneys');
const moneys = [50, 20, 10, 5, 1];

form.addEventListener("click", (e) => {
    e.preventDefault();
    result.innerHTML = "";
    let amount = +input.value;
    moneys.map((money) => {
        let say = Math.trunc(amount / money);
        amount = amount - money * say;
        if (say) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let i = 0; i < say && i < 5; i++) {
                const image = document.createElement("img");
                image.src = `./${money}.jpg`;
                image.style.left = `${i * 100}px`;
                row.appendChild(image);
            }
            if (say - 5 > 0) {
                const h1 = document.createElement("h1");
                h1.textContent = `${say - 5} x`;
                row.appendChild(h1);
            }
            result.appendChild(row);
        }
    });
});
