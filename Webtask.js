const input=document.querySelector('.searchbar')
const searchButton=document.querySelector('.search-icon')
const error=document.querySelector('.error')
const signinButton=document.querySelector('.signin-button')
const userForm=document.querySelector('#userauth-form')
const signupButton=document.querySelector("#signup-btn")
const signoutButton=document.querySelector('.signout-button')
const welcomeText=document.querySelector('.welcome-text')
const userForm2=document.querySelector('#userauth-form2')
searchButton.addEventListener('click',search)
input.addEventListener('keypress',function(e){
  if (e.key==='Enter'){
    search();
  }
})


function search(){
  let inputCity=input.value.trim()
  error.textContent=""
  if (inputCity===""){
    error.textContent="Error Message : Please enter some city"
    error.style.color='red'
    error.style.textDecoration='underline'
    return 
  }

  weather_info(inputCity)
}


const API_KEY='c2f7b6e460334f3bbaa155404251312'
async function weather_info(inputCity){
try{
  let response =await fetch( `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputCity}`)
  console.log(response.status)

  const city_data=await response.json()
  
  

if(city_data.error){
  error.textContent="City not found"
  error.style.color='red'
  error.style.textDecoration='underline'
  return
}
else{
  alert("Weather details fetched for "+inputCity)
}
  


  const city_name=inputCity
  const date=city_data.location.localtime
  const city_temp=city_data.current.temp_c
  const city_humidity=city_data.current.humidity
  const wind_speed=city_data.current.wind_kph
  const atmospheric_pressure=city_data.current.pressure_mb
  const weather_condition=city_data.current.condition.text

  let date_time_list=date.split(" ")


let city_time=date_time_list[1]
let hour_minute_list=city_time.split(':')
let hour=Number(hour_minute_list[0])

      let month_list = {
          '01': 'January',
          '02': 'February',
          '03': 'March',
          '04': 'April',
          '05': 'May',
          '06': 'June',
          '07': 'July',
          '08': 'August',
          '09': 'September',
          '10': 'October',
          '11': 'November',
          '12': 'December'
        }
    let date_list=date_time_list[0].split('-')
    let year=date_list[0]
    let month=month_list[date_list[1]]
    let day=Number(date_list[2])
    const daysList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const dateObject=new Date(date)
    const weekDay=daysList[dateObject.getDay()]
    const formatedDate=`${weekDay}, ${month} ${day}, ${year} ${city_time}`

  const cityName=document.querySelector('#city-name')
  const currentDate=document.querySelector('#current-date')
  const weatherDescription=document.querySelector('#weather-description')
  const cityTemperature=document.querySelector('#city-temperature')
  const cityHumidity=document.querySelector('#city-humidity')
  const windSpeed=document.querySelector('#wind-speed')
  const atmosphericPressure=document.querySelector('#atmospheric-pressure')
  const weatherHeading=document.querySelector('.weather-heading')

  cityName.textContent = `City name : ${city_data.location.name}`
  currentDate.textContent = `Current date and time : ${formatedDate}`
  weatherDescription.textContent = `Weather description : ${weather_condition}`
  cityTemperature.textContent = `Current temperature : ${city_temp} °C`
  cityHumidity.textContent = `Humidity percentage : ${city_humidity}%`
  windSpeed.textContent = `Wind speed : ${wind_speed} km/h`
  atmosphericPressure.textContent = `Atmospheric pressure : ${atmospheric_pressure} mb`

  
const condition=weather_condition.toLowerCase()
  if(condition.includes('sun')){
    weatherHeading.textContent='☀️ Sunny'
  }
  else if( (condition.includes('rain')) || (condition==='drizzle')){
  weatherHeading.textContent = "🌧️ Rainy"
  }
else if (condition.includes("cloud")) {
  weatherHeading.textContent = "☁️ Cloudy"
}
else if (condition.includes("thunder")){
  weatherHeading.textContent = "⛈️ Thunderstorm"
}
else if (condition.includes('snow')) {
  weatherHeading.textContent = "❄️ Snowy";
}
else if ((condition.includes("mist")) || (condition.includes('fog'))) {
  weatherHeading.textContent = "🌫️ Foggy";
}
else {
  weatherHeading.textContent = "🌤️ Weather";
}

const weatherImg=document.querySelector('.background')
const dayBg =
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80";

const eveningBg =
  "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80";

const nightBg =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";


  if((hour >=5 )&&(hour <15)){
    weatherImg.style.background=`url(${dayBg}) no-repeat center center / cover`
  }
  else if(hour>=15 && hour<=18){
    weatherImg.style.background=`url(${eveningBg}) no-repeat center center / cover`
  }
  else{
    weatherImg.style.background=`url(${nightBg}) no-repeat center center / cover`
  }

  const weatherContainer=document.querySelector('.weather-container')
  const about=document.querySelector('#about')
  const aboutText=document.querySelector('.about-text')
  const backgroundOverlay=document.querySelector('.overlay')
  const weatherSection=document.querySelector('#weather')
  const home=document.querySelector('#home')
  const search=document.querySelector('#search')

  home.style.color='#E0E0E0'
  search.style.color='#E0E0E0'
  weatherSection.style.display='flex'
  weatherSection.style.color='#E0E0E0'
  backgroundOverlay.style.background='rgba(0,0,0,0.4)'
  weatherContainer.style.display='block'
  about.style.color='#E0E0E0'
  aboutText.style.color='#E0E0E0'
  welcomeText.style.color='#E0E0E0'
}
catch(err){

  alert("Network Error: Please try again later ")
  
}
}


signinButton.addEventListener('click',function(){
  userForm2.style.display='block'
  
})

signupButton.addEventListener('click',function(){
  userForm.style.display='block'
})



function setError(id,error){
  element=document.getElementById(id)
  element.getElementsByClassName('form-error')[0].textContent=error
}
function validateForm(){
  var returnval = true
  let errorList=document.getElementsByClassName('form-error')
  for(let i=0;i<errorList.length;i++){
    errorList[i].textContent=""
  }
  const name=document.forms['myform']['fname'].value
  if(name.length==0){
    setError('name',"Name cannot be empty")
    returnval=false
  }
    const email=document.forms['myform']['femail'].value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email.length==0){
    setError('email',"Email cannot be empty")
    returnval=false
  }
  else if(!emailRegex.test(email)){
    setError('email','Please enter a valid Email')
  }
  const password=document.forms['myform']['fpass'].value
  if(password.length==0){
    setError('password',"Password cannot be empty")
    returnval=false
  }
  else if(password.length<6){
    setError('password',"Password is too short, minimum length of password should be six.")
    returnval=false
  }
  if(returnval==true){
    signoutButton.style.display = 'inline-block';
    signinButton.style.display = 'none';
    signupButton.style.display='none'
    userForm.style.display = 'none';   
    welcomeText.textContent=`Welcome to the website ${name}, Hope you have a good day.`
    welcomeText.style.display='block'
    localStorage.setItem('username',name)
    localStorage.setItem('email',email)
    localStorage.setItem('password',btoa(password))
     localStorage.setItem('loggedin',true)
  }
  return false
}

function validateForm2(){
  var returnval2 = true
    let errorList=document.getElementsByClassName('form-error')
  for(let i=0;i<errorList.length;i++){
    errorList[i].textContent=""
  }
    const email=document.forms['myform2']['femail2'].value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email.length==0){
    setError('email2',"Email cannot be empty")
    returnval2=false
  }
  else if(!emailRegex.test(email)){
    setError('email2',"Please enter a valid Email")
    returnval2=false
  }
  const password=document.forms['myform2']['fpass2'].value
  if(password.length==0){
    setError('password2',"Password cannot be empty")
    returnval2=false
  }

  let storedEmail=localStorage.getItem('email')
  let storedPassword=localStorage.getItem('password')


  if(storedEmail !==email || storedPassword !==btoa(password)){
    setError('email2',"Invalid Email or password")
    return false
  }
  if(returnval2==true){
    signoutButton.style.display = 'inline-block';
    signupButton.style.display = 'none';
    userForm2.style.display = 'none';   
    var username=localStorage.getItem('username')
    welcomeText.textContent=`Welcome to the website ${username}, Hope you have a good day.`
    welcomeText.style.display='block'
      localStorage.setItem('loggedin',true)

  }
  return false
}

signoutButton.addEventListener('click',function(){
  localStorage.removeItem('loggedin')
  signoutButton.style.display='none'
  signinButton.style.display='inline-block'
    signupButton.style.display='inline-block'
    welcomeText.style.display='none'
})
window.addEventListener('load', function(){
  if(localStorage.getItem('loggedin') == 'true'){
    const username = localStorage.getItem('username')

    signinButton.style.display = 'none'
    signupButton.style.display = 'none'
    signoutButton.style.display = 'inline-block'

    welcomeText.textContent = `Welcome back ${username}, Hope you have a good day.`
    welcomeText.style.display = 'block'
  }
})



