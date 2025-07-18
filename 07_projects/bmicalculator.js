const form = document.querySelector("form");

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');
  
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please enter valid height ${height}`;
  }else if (weight ===''  || weight <0 || isNaN(weight)){
    results.innerHTML=`Please enter valid weight ${weight}`;
  }else{
    const bmi=( weight/((height*height)/10000)).toFixed(2);
    // to show the rsult
  // results.innerHTML=`<span>${bmi}</span>`;
  if(bmi<18.6){
    results.innerHTML=`${bmi} : Under Weight`;
  }else if(bmi>18.6 && bmi<24.9){
    results.innerHTML=`${bmi} : Normal Weight`;
  }
  else{
    results.innerHTML=`${bmi} : Over Weight`;
  }
  }
});