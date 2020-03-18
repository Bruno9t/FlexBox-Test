let caixa = document.querySelector('div.container')

let res = document.querySelector('p#res')



function adicionar(){
    let item = document.createElement('div')

    item.innerHTML = `Caixa ${caixa.childElementCount+1}`
    res.innerHTML = `Temos ${caixa.childElementCount+1} produtos cadastrados`


    caixa.appendChild(item)
}