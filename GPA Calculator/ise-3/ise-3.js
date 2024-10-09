let subject1 = document.getElementById('subject-1');
let subject2 = document.getElementById('subject-2');
let subject3 = document.getElementById('subject-3');
let subject4 = document.getElementById('subject-4');
let subject5 = document.getElementById('subject-5');
let subject6 = document.getElementById('subject-6');
let subject7 = document.getElementById('subject-7');
let subject8 = document.getElementById('subject-8');
let subject9 = document.getElementById('subject-9');
let calculateGPA = document.getElementById('calculateGPA');
let resetbtn = document.getElementById('resetBtn')

calculateGPA.addEventListener('click', () => {

    a = subject1.value;
    b = subject2.value;
    c = subject3.value;
    d = subject4.value;
    e = subject5.value;
    f = subject6.value;
    g = subject7.value;
    h = subject8.value;
    i = subject9.value;

    const empty = (x) => {
        if (x === "") {
            alert('Enter all grades');
            return true;
        }
        return false; 
    }

    if(empty(a) || empty(b) || empty(c) || empty(d) || empty(e) || empty(f) || empty(g) || empty(h) || empty(i)) {
        return;
    }
    
    
    const correct = (x) => {
      if (x.length > 1){
        alert("Enter grades correctly");
        return true;
      }
      return false;
    }
    
    if ( correct(a) || correct(b) || correct(c) || correct(d) || correct(e) || correct(f) || correct(g) || correct(h) || correct(i)) {
        return ;
    }

    const checkValue = (x) => {
      if ( x != 'A' && x != 'B' && x != 'C' && x != 'D' && x != 'E' && x != 'F' && x != 'S'){
         alert('Enter correct grades')
         return true;
      }
      return false;
    }
    if (checkValue(a) || checkValue(b) || checkValue(c) || checkValue(d) || checkValue(e) || checkValue(f) || checkValue(g) || checkValue(h) || checkValue(i)){
       return;
   }
    
    let gpa = [0, 0, 0, 0, 0, 0, 0, 0]; 

    const check = (x, n, credit) => { 
        if (x == 'S') {
            gpa[n - 1] = credit * 10;
        } else if (x == 'A') {
            gpa[n - 1] = credit * 9;
        } else if (x == 'B') {
            gpa[n - 1] = credit * 8;
        } else if (x == 'C') {
            gpa[n - 1] = credit * 7;
        } else if (x == 'D') {
            gpa[n - 1] = credit * 6;
        } else if (x == 'E') {
            gpa[n - 1] = credit * 5;
        } else if (x == 'F') {
            gpa[n - 1] = credit * 4;
        }
    }

        check(a, 1, 3);
        check(b, 2, 4);
        check(c, 3, 4);
        check(d, 4, 3);
        check(e, 5, 3);
        check(f, 6, 3);
        check(g, 7, 1.5);
        check(h, 8, 1.5);
        check(i, 9, 2);

        let result = Number( gpa[0] + gpa[1] + gpa[2] + gpa[3] + gpa[4] + gpa[5] + gpa[6] + gpa[7] + gpa[8] ) / 25;

        document.getElementById('result').innerText = `Your gpa is ${result}`;
});

resetbtn.addEventListener("click" , () => {
    document.getElementById('subject-1').value = '';
    document.getElementById('subject-2').value='';
    document.getElementById('subject-3').value='';
    document.getElementById('subject-4').value='';
    document.getElementById('subject-5').value='';
    document.getElementById('subject-6').value='';
    document.getElementById('subject-7').value='';
    document.getElementById('subject-8').value='';
    document.getElementById('subject-9').value='';
    document.getElementById('result').innerText = '';
});
