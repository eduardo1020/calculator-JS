var num = 0
var op
var calculo

function calcular(tipo, valor) {
    
    if(tipo === 'operacao') {

        if(valor === '%' || valor === '/' || valor === '*' || valor === '+' || valor === '-' || valor === '.') {
            document.getElementById('input1').value += valor
        }else if(valor === 'c') {
            document.getElementById('input1').value = ''
            document.getElementById('input2').value = ''
        }
    }

    if(tipo === 'numero') {

        if(valor === '0' || valor === '1' || valor === '2' || valor === '3' || valor === '4' || valor === '5' || valor === '6' || valor === '7' || valor === '8' || valor === '9') {
            document.getElementById('input1').value += valor
        }
    }

    if(tipo === 'operacao' && valor === '=') {

        var resultado = eval(document.getElementById('input1').value)
        document.getElementById('input2').value = resultado
    }

}