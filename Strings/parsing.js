
function naming(name) {
    let fullName = name.indexOf(" ");

    let firstName = name.substring(0, fullName);
    let lastName = name.substring(fullName + 1);

    console.log("Name:", name);
    console.log("First name:", firstName);
    console.log("Last name:", lastName);

}

naming("Sarah Mus");