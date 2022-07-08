function testResult (form) {    
    var num = form.inputbox.value;
    var k = 0;

    if (num === "" || num<2) {
        document.getElementById("print").innerHTML = "Please enter a Number above '1' and Click on 'Let's try...'";
    }

    else {
        for (var i = 1; i <= num; i++) {
            if (num % i === 0) {
                k = k + 1;
            }
        }
        if (k === 2) {
            document.getElementById("print").innerHTML = num + " is a Prime Number.";
        }

        else {
            document.getElementById("print").innerHTML = num + " is not a Prime Number.";
        }
    }
}