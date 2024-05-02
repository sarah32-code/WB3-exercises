function getSupplier(code) {
    let Supplier = code.indexOf(":");
    console.log("Supplier:", code.substring(0, Supplier));
}
function getProductNumber(code) {
    let Supplier = code.indexOf(":");
    let Product = code.indexOf("-");
    console.log("Product Number:", code.substring(Supplier + 1, Product));
}
function getSize(code) {
    let Product = code.indexOf("-");
    console.log("Size:", code.substring(Product + 1));
}


getSupplier("ACME:123-DI");
getProductNumber("ACME:123-DI");
getSize("ACME:123-DI");


