const getCountrys = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>  displayData(data))
  }
  
  
  getCountrys()
  
  
  const displayData = counterys =>{
  
    const countryConstiaer = document.getElementById('containers');
  
    
    counterys.forEach(country => {
  
      const countryDiv = document.createElement('div');
      countryDiv.classList.add('country');
      countryDiv.innerHTML = `
      
              <div class="card">
                <img src="${country.coatOfArms.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${country.name.common}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
      
      
      `
      countryConstiaer.appendChild(countryDiv)
    })
  
    
  }