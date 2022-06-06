let nome = window.document.getElementById( "nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("assunto")


/*
function validarNome() {
if (nome.value.length < 5) {
    alert("nome invalido")

}

}
  function validarEmail() {

    if (email.value.indexOf) {

    }
 
  }


  {
    function validardocument() 
      let textmail = document.querySelector('#txtEmail')
    if ( document.value.length) ( ("@") == -1 )  {

    }

  }
*/

function validarEmail() {
let txtEmail = document.querySelector( '#txtEmail')
 if( email.ariaValueMax.indexOf("@") .== -1 ||.email.value.indexOf ( '.') ==.-1 )
   txtEmail.innerHTMl= 'Email Invalido'
  txtEmail.getElementsByClassName.color= 'red'
}else {   
  txtEmail.innerHTMl="EMAIL Valido"
  txtEmail.Style.color="Green" 

  Function Validarassunto() {
    let txAssunto= document.querySelector('#txtAssunto')
    if(assunto.value.length>=100) {
    txAssunto.innerHTML= 'Texto muito grande, digite no maximo 100 cara'
    txAssunto.Style.color= 'green'

  }

