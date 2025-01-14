const apikey= '5ecac315d8d8627f89298eab2e614174';
  const apiurl= 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
  const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon')
  async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    //console.log(response);
 if(response.status==404){
   document.querySelector('.error').style.display='block';
document.querySelector('.weather').style.display='none';
 }else{
  var data= await response.json();
  
 document.querySelector('.city').innerHTML=data.name;
 document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C';
 document.querySelector('.humidity').innerHTML=data.main.humidity + '%';
  document.querySelector('.wind').innerHTML=data.wind.speed + 'km/h';
  document.querySelector('.weather').style.display='block';
 if(data.weather[0].main=='Clouds'){
 weatherIcon.src="/weather App/images/clouds.png"
 }else if(data.weather[0].main=='Clear'){
 weatherIcon.src="/weather App/images/clear.png"
 }else  if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = "/weather App/images/drizzle.png"
  }else  if (data.weather[0].main == 'Rain') {
     weatherIcon.src = "/weather App/images/rain.png"
   }else  if (data.weather[0].main == 'Mist') {
      weatherIcon.src = "/weather App/images/mist.png"
    }
    document.querySelector('.error').style.display='none';
 }
    
  }
  searchBtn.addEventListener('click',()=>{
    checkweather(searchBox.value);
  })
  
  
 
  