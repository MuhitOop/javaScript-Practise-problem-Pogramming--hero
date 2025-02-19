const nameOfcandidate = ['mahi', 'sobur', 'rafi', 'soyaib', 'tanzir', 'sefat', 'mahi', 'rafi', 'sefat']; //you can use number instate of string

function noDuplicate(arr) {
    const unique = [];

    for (const item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    const sortUnique = unique.sort(); //this line is optional, this used only for prettier
    return sortUnique;
}


const uniqueArray = noDuplicate(nameOfcandidate);

console.log(uniqueArray);