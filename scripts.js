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
    let resultado = (num1-num3)*(num1-num3)+(num2-num4)*(num2-num4);
    alert(`Resultado: ${resultado}`);
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
    
}