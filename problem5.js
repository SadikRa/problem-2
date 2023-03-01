const handaleScresh = () => {
    const getValue = document.getElementById('input-value').value;
   if(getValue){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getValue}`)
    .then(res => res.json())
    .then(data => {
        if(data.title === "No Definitions Found"){
            alert(data.message)
        }
        else{
    
        }
    }
        
        );
    
   }
   else{
    alert('used valude number')
   }
}