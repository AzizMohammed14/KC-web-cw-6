// جافا سكريبت ليس جافا


alert ("مرحباً بك في موقعي الذي سيحسب درجتك!!");

let grade = prompt ('يرجي ادخال نتيجتك');

console.log (grade);

if (grade >= 90) {

    console.log ("%c لقد حصلت على امتياز 🥳" , "color: red;");
} else if (grade >= 80) {

    console.log ("%cلقد حصلت على جيد جداً🤩" , "color: red;");
} else if (grade >= 70) {

    console.log ("%cلقد حصلت على جيد🙂" , "color: red;");

} else if (grade >= 60) {
    console.log ("%cلقد حصلت على مقبول😕" , "color: red;");
} else if (grade >= 50) {
    console.log ("%cلقد حصلت على ضعيف☹️" , "color: red");
} else {
    console.log ("%cراسب💔" , "color: red;")
}

// ترا احبك ياللي تشوف الكلاس وورك