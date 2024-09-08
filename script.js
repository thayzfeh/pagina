async function carregarApi(){
    var data;
    try{
        const response = await fetch('https://banco-production.up.railway.app/country');
        if(!response.ok){
            throw new Error('erro ao carregar json');
        }
        data = await response.json();
    }catch(e){
        console.log('erro ao buscar json',e);
    }
    
    const tabela = document.querySelector('#corpoTabela');

    data.country.forEach(country => {
       tabela.innerHTML += `<tr><td>${country.rank}</td><td><img src="${country.flag}"></td><td>${country.name}</td><td>${country.medals.gold}</td><td>${country.medals.silver}</td><td>${country.medals.bronze}</td><td>${country.pontuation}</td></tr>`
    });
}

