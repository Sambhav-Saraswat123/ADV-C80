const submitButton = document.querySelector('#submit');
const sortButton = document.querySelector('#sorting');
const updateButton = document.querySelector('#update');
let names = [];
submitButton.addEventListener('click', () => {
    // console.log("its working");
    let displayStudentArray = [];
    for (let i=1; i <= 4; i++) {
        names.push(document.getElementById(i).value);
        console.log(names);
    }
    let removeCommas = names.join("");
    let withCommas = names.join(",");
    console.log(`The length of names you gave including empty strings is ${names.length}`);
    console.log(`The names you gave excluding empty strings is ${removeCommas}`);
    console.log(`The names you gave excluding empty strings with commas(,) is ${withCommas}`);
    document.getElementById('displayNameCommas').innerHTML = withCommas;
});
sortButton.addEventListener('click', () => {
    names.sort();
    console.log(names);
    let displayArraySorting = [];
    let lengthStudentArray = names.length;
    console.log(names);
    for (let i = 0; i <= names; i++) {
        displayArraySorting.push(`Name ${names}`);
        console.log(displayArraySorting);
    }
    let rmvCommas = displayArraySorting.join("");
    console.log(removeCommas);
    document.getElementById('displayNameWithoutCommas').innerHTML = removeCommas;
});