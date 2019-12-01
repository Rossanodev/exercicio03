function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'impossivel contar'
        //window.alert('erro')
    } else {
        res.innerHTML ='Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p <= 0){
            window.alert('passo invalido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f603}`
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f603}`
            }
        }
        res.innerHTML += `${c} \u{1f603}`
    }
}