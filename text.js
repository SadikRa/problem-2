const getData = () => {
    fetch('https://api.kanye.rest/')
      .then((res) => res.json())
      .then((data) => displayData(data));
  };
  getData();
  
  function displayData (data)  {
  const getConstainer =   document.getElementById('containers')
  getConstainer.innerHTML = data.quote;
  
  
  // console.log(getConstainer)
  
  };
  
  
  document.getElementById('button-change').addEventListener('click', function(){
    getData(); 
  })