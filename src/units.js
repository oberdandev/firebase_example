console.log('chegou no units.js')

const h2 = document.querySelector('h2')

fetch('http://localhost:3000/api/units')
  .then((response) => response.json())
  .then((data) => 
  {
    console.log(data)
    h2.textContent = data
})
  .catch((err)=> console.log('Erro ao utilizar fetch na API da unit: ', err))