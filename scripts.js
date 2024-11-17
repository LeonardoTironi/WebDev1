function ex1(){
    const element = document.getElementById("divisores");
    let num = parseInt(element.value);
    if(!isNaN(num)){
        let div = [];
        let i = 0;
        let sum = 0
        while(i<num/2+1){
            if(num%i==0){
                div.push(i);
                console.log(i);
            }
            i++;
        }
        div.forEach(eachNum=>{
            sum+=eachNum;
        })
        alert(`Os divisores são: ${div}. A soma é: ${sum}`);
    }
    else{
        alert("Digite um número");
    }
}

function ex2(){
    const ponto1 = document.getElementById("ponto1");
    const ponto2 = document.getElementById("ponto2");
    const ponto3 = document.getElementById("ponto3");
    const ponto4 = document.getElementById("ponto4");
    let num1 = parseInt(ponto1.value);
    let num2 = parseInt(ponto2.value);
    let num3 = parseInt(ponto3.value);
    let num4 = parseInt(ponto4.value);
    if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4)){
        let resultado = (num1-num3)*(num1-num3)+(num2-num4)*(num2-num4);
        alert(`Resultado: ${resultado}`);
    }
    else{
        alert("Digite apenas números");
    }
}

function ex3(){
    const element = document.getElementById("texto");
    let texto = element.value.toLowerCase();
    let palavras = texto.split(" ");
    let resposta = "";
    const listaPalavras = {}
    palavras.forEach(palavra=>{
        listaPalavras[palavra] = (listaPalavras[palavra] || 0) + 1;
    });
    for(const chave in listaPalavras){
        resposta+=`${chave} (${listaPalavras[chave]}) `
    }
    alert(resposta)
    
}

function ex4(){
    const element = document.getElementById("matriz");
    let texto = element.value;
    let linhas = texto.split(";");
    let total = texto.split(" ");
    console.log(linhas.length);
    console.log(total.length);
    let colunas = total.length/linhas.length;
    alert(`Essa é uma matriz de dimensão ${linhas.length}x${colunas}\nA matriz tem ${linhas.length} linhas e ${colunas} colunas.`);
    //linhas[linhas.length-1] para testar se o último elemento é ";", mas não é necessário para o exercício eu acho
}

function ex5(){
    const element = document.getElementById("fibonacci");
    let num = parseInt(element.value);
    let lista=[];
    let resultado = 0;
    let soma = 1;
    let temp = 0;
    if(!isNaN(num)){
        while (num>0){
            num--;
            lista.push(resultado);
            temp = soma+resultado
            resultado=soma;
            soma=temp;
        }
        alert(lista);
    }
    else{
        alert("Digite um número");
    }
}
