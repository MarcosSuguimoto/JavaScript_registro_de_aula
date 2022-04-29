/*Olá, caro leitor. Neste arquivo .js faço anotações de uso e sintaxe na linguagem JavaScript (april/22)*/

//Usando operadores
/*
if (nome == "Maria"){
    alert ("Se dirija ao consultório 6.")
}

//outro exemplo de uso de operadores

sexo = prompt ("Qual o seu sexo? F (feminino) M (masculino): ");

idade = prompt ("Qual sua idade?: ");

if (sexo == 'F' && idade >= 16) {
    alert ("Venha participar da nossa campanha de saúde!");
} else {
    if (sexo == 'M' && estado_civil == "casado") {
        alert ("Venha participar da nossa campanha para casais.");
    } else {
        alert ("Venha participar da nossa campanha de doação de sangue.");
    }

/

//Tomada de decisão em exemplo

var numero;

numero = prompt ("Insira um número, please: "); //variaveis guardadas com prompt são consideradas string

if (numero > 0){
    alert ("O número digitado é positivo");
} else {
    if (numero > 0){
        alert ("O número digitado é negativo");
    } else {
        alert ("O número digitado é neutro");
    }
}

//convertendo uma variável do tipo string em numérica

var idade = prompt ("Digite sua idade");

idade = parseInt(idade); //o parseInt converte uma variável para o inteiro

var idade_somada = idade + 1;

alert ("Você tem quase" + idade_somada + "anos de idade.");

//exemplo de tomada de decisão composta

var preco_arroz_T1, preco_arroz_T2, preco_feijao_branco, preco_feijao_preto, preco_linguica, preco_lentilha, resposta, total_compras;

preco_arroz_T1 = prompt ("Qual o valor do Kilo do arroz tipo 1");

preco_arroz_T2 = prompt ("Qual o valor do Kilo do arroz tipo 2");

preco_feijao_branco = prompt ("Qual o valor do Kilo do feijão branco");

preco_feijao_preto = prompt ("Qual o valor do Kilo do feijão preto");

preco_linguica = prompt ("Qual o valor do Kilo da linguiça");

preco_lentilha = prompt ("Qual o valor do Kilo da lentilha");

resposta = prompt ("No mercado tem arroz tipo 1?\n Responda S para SIM ou N para NÃO");

if (resposta == 'S') {
    preco_arroz_T1 = parseInt (preco_arroz_T1);
    preco_feijao_preto = parseInt(preco_feijao_preto);
    total_compras = preco_arroz_T1 + (preco_feijao_preto * 2);
} else {
    resposta = prompt ("No mercado tem arroz tipo 2?\n Responda S para SIM ou N para NÃO");
    if (resposta == 'S') {
        preco_arroz_T2 = parseInt (preco_arroz_T2);
        preco_feijao_branco = parseInt(preco_feijao_branco);
        total_compras = (preco_arroz_T2 * 3) + preco_feijao_branco;
} else {
    preco_linguica = parseInt(preco_linguica);
    preco_lentilha = parseInt(preco_lentilha);
    total_compras = (preco_lentilha * 2) + preco_linguica;
 }
}

alert ("O preço da sua compra foi R$" + total_compras + "reais.");

//Estrutura de repetição

var idade, cont  = 1;

idade = prompt ("Insira sua idade");

while (idade < 0 && cont < 3){
idade = prompt  ("Idade inválida. Insira novamente");
cont++;  // cont++ é o mesmo que cont = cont + 1
}
if (cont < 3) {
alert ("Sua idade é" + idade);
} else {
alert ("Você excedeu o número de tentativas");
}

// exemplo com do-while

var idade, cont = 1;

idade = prompt ("Insira sua idade");

do {
    idade = prompt ("Insira sua idade");
    cont++;
} while (idade < 0 && cont <3);
if (cont<3){
    alert ("Sua idade é" + idade);
} else {
    alert ("Você excedeu o número de tentativas");
}

//exemplo com o for

for (var cont=1; idade < 0 && cont <3; cont++){
    idade = prompt ("Idade inválida. Insira novamente");
}

//mais exemplo com do, while e for

var senha, repete, s;

do {
    senha = prompt ("Insira sua senha numérica de 6 dígitos");
} while (senha.lenght ! = 6);
repete = prompt ("Redigite sua senha para validação. Ela deve ser a mesma.");
 while (repete ! = senha) {
repete = prompt ("A senha não é a mesma. Insira novamente a senha para validação.");
}

s = prompt ("Para acessar sua conta entre com sua senha");

for (var cont = 1; senha != s && cont < 3; cont++){
  alert ("A senha informada não confere. Insira novamente. Você tem mais " + (3-cont) + " tentativa (s).")
  s = prompt ("Para acessar sua conta entre com sua senha");
}
if (cont < 3){
  alert ("Sua senha está correta! Você pode acessar sua conta.");
} else {
  senha = 99;
  alert ("Sua senha foi bloqueada. Procure seu gerente");
}

//jogo de adivinhação com estrutura de repetição

var num; chute;

num = Math.floor (Math.random() * 10); //gerador de número aleatório do tipo inteiro

do {
    chute = promt ("Insira um número entre 0 e 9");
} while (chute < 0 || chute > 9);

for (var cont = 1; chute != num; cont++){
    do {
        chute = promt ("Insira um número diferente do anterior entre 0 e 9");
    } while (chute < 0 || chute > 9);
}

alert ("Você acertou na tentativa "+ cont);

// utilizando array (vetor)
// cadastro de nome, email e telefone

var nome = [], email = [], tel = [];

var resp = 's';

for (i=0; resp == 's'; i++){
    nome[i] = prompt ("Digite o nome" + (i+1) + "pessoa");
    email[i] = prompt ("Digite o email da " + (i+1) + "pessoa");
    tel[i] = prompt ("Digite o telefone da " + (i+1) + "pessoa");
    alert ("\n");

    resp = prompt ("Deseja continuar? s/n");

    alert ("\n");
}

alert ("Essas são as pessoas cadastradas em nossso sistema:\n");

for (i=0; nome.length >i; i++){
    alert ("O(A) sr(a) " + nome[i] + "possui o email: " + email[i] + " e telefone: " + tel[i]+ "\n");
}

//fazendo consulta em um array

var idade = [];

var achou = 'n', resp = 's';

var idade_procurar;

for (i=0; resp == 's'; i++){
     idade[i] = prompt ("Digite uma idade");
     resp = prompt ("Deseja continuar? s/n");
}

 idade_procurar = parseInt (prompt ("Qual idade deseja procurar?"));

 for (i=0; (achou == 'n' && idade.length > i); i++){
     if (idade[i] == idade_procurar){
     achou = 's';
    }
}

if (achou == 'n'){
alert ("Não consta o cadastro dessa idade");
} else{
alert ("A idade " + idade_procurar + " está cadastrada na posição " + i);
}

//ordenação de vetor (array)

var idade = [], aux;

for (var i = 0; i < 5; i++){
    idade[i] = prompt ("Digite uma idade");
}

for (var fixa = 0; fixa < 4; fixa++){
    for (var resto = (fixa + 1); resto <5; resto++){
        if (idade[fixa] > idade[resto]){
            aux = idade[fixa];
            idade[fixa] = idade[resto];
            idade[resto] = aux;
        }
    }
}

for (var i = 0; i < 5; i++){
    alert (idade[i]);
}


// criando e manipulando matriz

var nome = [[],[]]; //o JS não possui um matriz verdadeira, então usamos vetores dentro de vetores para simular uma matriz

for (linha=0; linha < nome.length; linha++){
    for (coluna=0; coluna < 3; coluna++){
        nome[linha][coluna] = prompt ("Insira um nome");
    }
}

alert (nome)

*/

// matriz 5x11 para cadastro das média nas disciplinas dos alunos

var media = [ [ ],[ ],[ ],[ ],[ ] ], situacao = [ [ ],[ ],[ ],[ ],[ ] ];

media[0] [0] = "MÉDIA"; situacao[0] [0] = "SITUAÇÃO";
media[1] [0] = "Português"; situacao[1] [0] = "Português";
media[2] [0] = "Matemática"; situacao[2] [0] = "Matemática";
media[3] [0] = "Física"; situacao[3] [0] = "Física";
media[4] [0] = "Biologia"; situacao[4] [0] = "Biologia";

for (linha=0; linha < media.length; linha++){
    for (coluna=1; coluna < 11; coluna++){
        if (linha == 0){
            media[linha][coluna] = prompt ("Insira um nome");
            situacao[linha][coluna] = media[linha][coluna];
} else{
    media [linha] [coluna] = prompt ("Insira a média de " + 
    media [linha] [0] + " do aluno " + media[0] [coluna]);
         if (media[linha][coluna] < 6){
            situacao[linha][coluna] = "REPROVADO";
         } else{
            situacao[linha][coluna] = "APROVADO";
          }
        }
    }
}
for (linha=0; linha < situacao.length; linha++){
      for (coluna=0; coluna < 11; coluna++){
             alert (situacao[linha][coluna]);
        }
 alert ("\n");
}

// consultando o nome do aluno na matriz anterior
/*
var nome = prompt ("Informe qual aluno deseja pesquisar");
var controle = 0;

for (coluna=0; coluna < 11; coluna++){
     if (nome == media[0][coluna]){
         alert ("O aluno " + media[0][coluna] + " encontra-se na base de dados na posição " + coluna);
            controle = 1;
        }
    }
        if (controle == 0){
     alert ("O aluno " + nome + " não está na base de dados");
}

// nova consulta de nome e média em uma determinada disciplina

var nome = prompt ("Informe qual aluno deseja pesquisar");
var disciplina = prompt ("Informe qual a disciplina deseja pesquisar a nota");
var controle = 0;

for (coluna=0; coluna < 11; coluna++){
    if (nome == media[0][coluna]){
         for (linha=1; linha < media.length; linha++){
              if (disciplina == media[linha][0]){
                alert ("A média do " + nome + " na disciplina " + disciplina + " é " + media[linha][coluna]);      
                controle = 1;
            }
        }
    }
}
if (controle == 0){
    alert ("O aluno " + nome + " ou a disciplina " + disciplina + " não constam na base de dados");
}
*/

// Utilizando funções
// abaixo um menu com 3 opções


function Menu(){
    var opc = prompt ("Escolha sua opção: \n1. Inserir Notas \n2. Calcular Média \n3. Sair \n\n"); 
    return opc;
}
function Inserir_nota (){
    for (i=0; i<3; i++){
       do{
            nota[i] = parseInt(prompt ("Digite a " + (i+1) + "º nota :"));
        } while (nota[i] < 0 || nota[i] > 10);
    }
    return 0;
}
function Calcular_media (ver){
     if (ver == 0){
        var media = (nota[0]+nota[1]+nota[2])/3;
    } else {
      alert ("Você ainda não inseriu nenhuma nota");
      media = "erro de cálculo";
        }
    return media;
}
var nota=[];

var op, ver = -1;

do{
    op = Menu();
    if (op == 1){
    ver = Inserir_nota();
    } else {
    if (op == 2){
        alert ("Sua média é: " + Calcular_media(ver));
    } else {
       alert ("Obrigado por utilizar nosso sistema. Volte sempre!");
    }
  }
  prompt ("");
  console.clear();
} while (op != 3);