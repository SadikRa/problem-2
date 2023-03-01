const getCountry = () => {
  const url = `https://restcountries.com/v2/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

getCountry();

const displayData = country => {
  const getContainer = document.getElementById('get-container');

  country.forEach(countrys => {
    const cereatDiv = document.createElement("div");

    cereatDiv.classList.add("caountry");

    cereatDiv.innerHTML = `
        
        <div class="col">
                  <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${country[0].name}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>

        
        `;

        getContainer.appendChild(cereatDiv)
  });
};
