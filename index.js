const role = 'admin' 
 
if (role === 'admin') { 
    alert('wellcome admin') 
} else{ 
    document.title = 'erorr!' 
} 
 
let txt = prompt("Parolni yozing...") 
 
if (txt === 'Massa') { 
    document.body.style.backgroundColor = 'lime' 
} else { 
    document.body.style.backgroundColor = 'red' 
}