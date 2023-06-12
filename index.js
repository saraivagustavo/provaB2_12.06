// Questão 1
function numeroPrimo() {
   var numero;

   do {
    var input  = prompt("(os números primos de 1-1000 estão no console.log.) Digite o número aqui: ");

    numero = parseFloat(input);

    if (isNaN(numero)){
        alert("Digite um número válido")
    }
   } while (isNaN(numero));

   if (numero <= 1) {
    alert("O número " + numero + " não é primo");
    return;
   }

   var primo = true;

   for (var i=2; i<=Math.sqrt(numero); i++){
    if (numero % i === 0){
        primo = false;
        break;
    }
   }
   if (primo) {
    alert("O número " + numero + " é primo")
   }else {
    alert("O número " + numero + " não é primo")
   }
   for (let i = 2; i <= 1000; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      console.log(i);
    }
  }
}

// Questão 2
function verificarSenha() {
    var senha = prompt("Digite uma senha: ");

    if (senha.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres");
        return;
    }

    let temMaiuscula = false;
    let temMinuscula = false;
    let temNumero = false;
    let temCaracterEspecial = false;
    let numeroDeCaracteres = 0;
  
    for (let i = 0; i < senha.length; i++) {
      if (senha.charCodeAt(i) >= 65 && senha.charCodeAt(i) <= 90) {
        temMaiuscula = true;
      } else if (senha.charCodeAt(i) >= 97 && senha.charCodeAt(i) <= 122) {
        temMinuscula = true;
      } else if (senha.charCodeAt(i) >= 48 && senha.charCodeAt(i) <= 57) {
        temNumero = true;
      } else {
        temCaracterEspecial = true;
      }
    }
  
    if (numeroDeCaracteres < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
    }
    if (!temMaiuscula) {
      alert("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (!temMinuscula) {
      alert("A senha deve conter pelo menos uma letra minúscula.");
    }
    if (!temNumero) {
      alert("A senha deve conter pelo menos um número de 0-9");
    }
    if (!temCaracterEspecial) {
      alert("A senha deve conter pelo menos um caractere especial. ex: ! @ # $ %");
    }
}
verificarSenha();

// Questão 3
function calcularFatorial() {
    var numero = parseInt(prompt("(obs: apenas números de 1-10) Digite um número: "));
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
}
   for (let i = 1; i <= 10; i++) {
    let fatorial = calcularFatorial();
    console.log = fatorial;
}

// Questão 4
function quadradoPerfeito(numero) {
    let raizQuadrada = Math.sqrt(numero);
    return raizQuadrada % 1 === 0;
}

  let numero = parseInt(prompt("Digite um número: "));

  if (quadradoPerfeito(numero)) {
    alert(`${numero} é um quadrado perfeito`);
  } else {
    alert(`${numero} não é um quadrado perfeito`);
}