function getSocSecTax(pay) {

    let SocialSecurityTax = pay * 0.062;
    console.log(SocialSecurityTax)

}

function getMedicareTax(pay) {
    let MedicareTax = pay * 0.0145
    console.log(MedicareTax)

}

function getFederalTax(pay, code) {
    let federalTax
    if (code === "0") {
        federalTax = pay * 0.23

    }
    else if (code === "1") {
        federalTax = pay * 0.21
    }
    else if (code === "2") {
        federalTax = pay * 0.195
    }
    else if (code === "1") {
        federalTax = pay * 0.185
    }
    else if (code === "4") {
        federalTax = pay * 0.185
    }
    else { code >= "4" }
    federalTax = pay * 0.185 + 0.05


    console.log(federalTax)
}

getSocSecTax(1000)
getFederalTax(1000, "0")
getMedicareTax(1000)