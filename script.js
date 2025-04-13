let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
let input = document.querySelector("#ip");

btn.addEventListener("click", handleclick);

function handleclick() {
    let val = Number(input.value);
    if (isNaN(val)) {
        output.textContent = "Please enter a valid number.";
        return;
    }

    // Step 1: Show initial input value
    output.textContent = `Result: ${val}`;

    new Promise(resolve => {
        setTimeout(() => resolve(val), 2000);
    })
    .then(mul => {
        let multi = mul * 2;
        output.textContent = `Result: ${multi}`; // Step 2: After multiplication
        return new Promise(resolve => {
            setTimeout(() => resolve(multi), 2000);
        });
    })
    .then(sub => {
        let subt = sub - 3;
        output.textContent = `Result: ${subt}`; // Step 3: After subtraction
        return new Promise(resolve => {
            setTimeout(() => resolve(subt), 1000);
        });
    })
    .then(div => {
        let dived = div / 2;
        output.textContent = `Result: ${dived}`; // Step 4: After division
        return new Promise(resolve => {
            setTimeout(() => resolve(dived), 1000);
        });
    })
    .then(add => {
        let added = add + 10;
        output.textContent = `Result: ${added}`; // Step 5: After addition
        return new Promise(resolve => {
            setTimeout(() => resolve(added), 1000);
        });
    })
    .then(final => {
        output.textContent = `Result: ${final}`; // Final output
    });
}
