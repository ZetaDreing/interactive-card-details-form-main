//NOMBRE
const visualNombre = document.querySelector('.visual-nombre');
const errorNombre = document.querySelector('.error-nombre');
const nombre = document.querySelector('#names');
const nombreTarjeta = document.querySelector('.nombre-tarjeta');

nombre.addEventListener('input', ()=>{

    if (nombre.value === ''){
        visualNombre.innerText = 'Jane Appleseed';
    }else
    visualNombre.innerText = nombre.value;

    let regExp = /[0-9]/g;
    if(regExp.test(nombre.value)){
        errorNombre.textContent = 'Wrong format, numbers only';
        nombreTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorNombre.textContent = '';
            nombreTarjeta.classList.remove('border-error');
        }, 3000);
        
         }
});
//NUMERO
const numero = document.querySelector('#number');
const errorNumero = document.querySelector('.error-numero');
const numeroTarjeta = document.querySelector('.numero-tarjeta');
const visualNumero = document.querySelector('.visual-numero');
numero.addEventListener('input',event=>{
    //console.log(event);
    const inputValue = event.target.value;
    if (numero.value === ''){
        visualNumero.innerText = '0000 0000 0000 0000';
    }else{
        visualNumero.innerText = numero.value;
    }
    let regExp = /[A-z]/g;
    if(regExp.test(numero.value)){
        errorNumero.textContent = 'Wrong format, numbers only';
        numeroTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorNumero.textContent = '';
            numeroTarjeta.classList.remove('border-error');
        }, 3000);
    }
    else {
        numero.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ');
    }

})

//MES
const mes = document.querySelector('#month');
const errorMes = document.querySelector('.error-mes');
const mesTarjeta = document.querySelector('.mes-tarjeta');
const visualMes = document.querySelector('.mes');
mes.addEventListener('input', ()=>{
    if (mes.value === ''){
        visualMes.innerText = '00';
    }else
    visualMes.innerText = mes.value;

    let regExp = /[A-z]/g;
if(regExp.test(mes.value)){
    errorMes.textContent = 'Wrong format, numbers only';
    mesTarjeta.classList.add('border-error');
    setTimeout(() => {
        errorMes.textContent = '';
        mesTarjeta.classList.remove('border-error');
    }, 3000);
    
     }
});

//AÑO
const year = document.querySelector('#year');
const yearTarjeta = document.querySelector('.year-tarjeta');
const visualYear = document.querySelector('.year');
year.addEventListener('input', ()=>{

    if (year.value === ''){
        visualYear.innerText = '00';
    }else
    visualYear.innerText = year.value;

    let regExp = /[A-z]/g;
    if(regExp.test(year.value)){
        errorMes.textContent = 'Wrong format, numbers only';
        yearTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorMes.textContent = '';
            yearTarjeta.classList.remove('border-error');
        }, 3000);
        
         }
});

//CVC
const errorCvc = document.querySelector('.error-cvc');
const cvcTarjeta = document.querySelector('.cvc-tarjeta');
const cvc = document.querySelector('#cvc');
const visualCvc = document.querySelector('.visual-cvc');
cvc.addEventListener('input', ()=>{

    if (cvc.value === ''){
        visualCvc.innerText = '000';
    }else
    visualCvc.innerText = cvc.value;

    let regExp = /[A-z]/g;
    if(regExp.test(cvc.value)){
        errorCvc.textContent = 'Wrong format, numbers only';
        cvcTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorCvc.textContent = '';
            cvcTarjeta.classList.remove('border-error');
        }, 3000);
        
         }
});

const form = document.querySelector('.formulario');
const boton = document.querySelector('.boton');

const centrarVertical = document.querySelector('.centrar-vertical');

form.addEventListener('submit', e =>{
    e.preventDefault();

    if (nombre.value.length === 0){
        errorNombre.textContent = 'Can`t be blank';
        nombreTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorNombre.textContent ='';
            nombreTarjeta.classList.remove('border-error');
        }, 3000);
    }
    if (nombre.value.length < 8 && nombre.value.length >0)
    {
        errorNombre.textContent = 'Please enter at least 8 digits';
        nombreTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorNombre.textContent = '';
            nombreTarjeta.classList.remove('border-error');
        }, 3000);
        
    }

    if (numero.value.length === 0){
        numeroTarjeta.classList.add('border-error');
        errorNumero.textContent = 'Can`t be blank';
        setTimeout(() => {
            errorNumero.textContent ='';
            numeroTarjeta.classList.remove('border-error');
        }, 3000);
    }
    if (numero.value.length < 16 && numero.value.length >0){
        errorNumero.textContent = 'Please enter at least 16 digits';
        numeroTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorNumero.textContent = '';
            numeroTarjeta.classList.remove('border-error');
        }, 3000);
    }

    if (mes.value.length === 0)
    {
        errorMes.textContent = 'Can`t be blank';
        mesTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorMes.textContent ='';
            mesTarjeta.classList.remove('border-error');
        }, 3000);
    }
    if (mes.value.length >0 && mes.value.length < 2)
    {
        errorMes.textContent = 'Please only enter 2 digits';
        mesTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorMes.textContent ='';
            mesTarjeta.classList.remove('border-error');
        }, 3000);
    }
    if (year.value.length === 0|year.value.length >0 && year.value.length < 2){
        errorMes.textContent = 'Can`t be blank';
        yearTarjeta.classList.add('border-error');
        setTimeout(() => {
            yearTarjeta.classList.remove('border-error');
        }, 3000);
    }
    if(year.value.length >0 && year.value.length < 2){
        errorMes.textContent = 'Please only enter 2 digits';
        yearTarjeta.classList.add('border-error');
        setTimeout(() => {
            yearTarjeta.classList.remove('border-error');
        }, 3000);
    }
 
    if (cvc.value.length === 0){
        errorCvc.textContent = 'Can`t be blank';
        cvcTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorCvc.textContent ='';
            cvcTarjeta.classList.remove('border-error');
        }, 3000);
    }
    if (cvc.value.length >0 && cvc.value.length <3){
        errorCvc.textContent = 'Please only enter 3 digits';
        cvcTarjeta.classList.add('border-error');
        setTimeout(() => {
            errorCvc.textContent ='';
            cvcTarjeta.classList.remove('border-error');
        }, 3000);
    }
    let regExp = /[A-z]/g;
    let listnum = /[0-9]/g;
   if (nombre.value.length > 8 && !listnum.test(nombre.value) && numero.value.length >= 19 && !regExp.test(numero.value) && mes.value.length ===2 &&!regExp.test(mes.value) && year.value.length ===2 && !regExp.test(year.value) && cvc.value.length === 3 && !regExp.test(cvc.value)){
        form.remove('.formulario');
        const aprobado = document.createElement('IMG');
        aprobado.classList.add('aprobado');
        aprobado.src='/images/icon-complete.svg';
        centrarVertical.appendChild(aprobado);

        const aprobadoText = document.createElement('H2');
        aprobadoText.classList.add('aprobado-text');
        aprobadoText.textContent = 'Thank you!';
        centrarVertical.appendChild(aprobadoText);

        const aprobadoParrafo = document.createElement('P');
        aprobadoParrafo.classList.add('aprobado-Parrafo');
        aprobadoParrafo.textContent = 'We`ve added your card details';
        centrarVertical.appendChild(aprobadoParrafo);

        const botonProbado = document.createElement('INPUT');
        botonProbado.classList.add('boton');
        botonProbado.classList.add('boton-aprobado');
        botonProbado.type = 'submit';
        botonProbado.value = 'Continue';
        centrarVertical.appendChild(botonProbado);
    };
});
