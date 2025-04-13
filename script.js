function handleclick() {
    let val = Number(input.value);
    if (isNaN(val)) {
        output.textContent = "Please enter a valid number.";
        return;
    }

    // Force browser to render this on next tick (Cypress sees it)
    setTimeout(() => {
        output.textContent = `Result: ${val}`;
    }, 0);

    new Promise(resolve => {
        setTimeout(() => resolve(val), 2000);
    })
    .then(mul => {
        let multi = mul * 2;
        output.textContent = `Result: ${multi}`;
        return new Promise(resolve => {
            setTimeout(() => resolve(multi), 2000);
        });
    })
    .then(sub => {
        let subt = sub - 3;
        output.textContent = `Result: ${subt}`;
        return new Promise(resolve => {
            setTimeout(() => resolve(subt), 1000);
        });
    })
    .then(div => {
        let dived = div / 2;
        output.textContent = `Result: ${dived}`;
        return new Promise(resolve => {
            setTimeout(() => resolve(dived), 1000);
        });
    })
    .then(add => {
        let added = add + 10;
        output.textContent = `Result: ${added}`;
        return new Promise(resolve => {
            setTimeout(() => resolve(added), 1000);
        });
    })
    .then(final => {
        output.textContent = `Result: ${final}`;
    });
}
