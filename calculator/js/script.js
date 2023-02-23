let a = '';
let b = '';
let sign = '';
let finish = false;

const DIGIT = ['0','1','2','3','4','5','6','7','8','9'];
const ACTION = ['+','-','X',':'];

const SCREEN = document.querySelector('.calculator-screen');

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    SCREEN.textContent = '0';
}


document.querySelector('.btn-numpad').addEventListener('click', (event) => {
    if(!event.target.classList.contains('btn-line__btn')) return;
    if(event.target.classList.contains('clear-all')){
    clearAll();
    }

    SCREEN.textContent = '';

    const KEY = event.target.textContent;

    if(DIGIT.includes(KEY)) {
        if(b === '' && sign === ''){
            a+=KEY;
            SCREEN.textContent = a;
        }

        else if (a!=='' && b!=='' && finish){
            b = KEY;
            finish = false;
            SCREEN.textContent = b;
        }

        else {
            b+=KEY;
            SCREEN.textContent = b;
        }
        console.log(a,b,sign);
        return;
    }

    if(ACTION.includes(KEY)) {
        sign = KEY;
        SCREEN.textContent = sign;
        console.log(a,b,sign);
        return; 
    }

    if(KEY === '=') {
        if(b === '') b = a;
        switch (sign) {
            case "+":
                a = +a + +b;
                break;
            case "-":
                a = +a - +b;
                break;
            case "X":
                a = +a * +b;  
                break;
            case ":":
                if(b === '0'){
                    SCREEN.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = +a / +b;
                break;
        }
        finish = true;
        SCREEN.textContent = a;
        console.log(a,b,sign);
    }
})