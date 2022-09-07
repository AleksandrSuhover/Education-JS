const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];


function sortStudentsByGroups(arr) {
arr.sort();
let newStudents = [];
let a = [], b = [], c = [], d = [];
for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
        a.push(arr[i]); 
    } else if (i < 6) {
        b.push(arr[i]);
    }
    else if (i < 9) {
        c.push(arr[[i]]);
    }
    else {
        d.push(arr[i]);
    }
}
newStudents.push(a, b, c);
newStudents.push(`Оставишиеся студены: ${d.length === 0 ? '-' : d.join(', ')}`);
return newStudents;
}

console.log(sortStudentsByGroups(students));
