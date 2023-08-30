function media(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var result = (parseInt(val1) + parseInt(val2)) /2;

    
    if(result >= 6)

    alert('sua media foi' + result + 'você foi aprovado')
    else
    alert('sua mediafoi:' + result + 'você foi reprovado') 

}
function comparacao(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    
    if(val1==val2)
    alert('os valores são iguais')
    else
    if(val1>val2)
   
    alert('valor 1 é maior que o valor 2')
    else
    alert('valor 2 é maior que o valor 1')
}
