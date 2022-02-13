let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click',(e)=>{
   e.preventDefault();
   getWeather(searchInput.value);
   searchInput.value=''; 
});

const getWeather=async (city)=>
{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c6ae52da14bebf0536e2080cab05e12`,
        {node:'cors'}
        );
        const weatherData=await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id==800)
        {
            tempicon.src="clear.svg"
        }
       else if(id>=200 && id<=232)
        {
            tempicon.src="storm.svg"
        }
        else if(id>=600 && id<=622)
        {
            tempicon.src="snow.svg"
        }
       else if(id>=701 && id<=781)
        {
            tempicon.src="haze.svg"
        }
       else if(id>=801&& id<=804)
        {
            tempicon.src="cloud.svg"
        }
       else if((id>=300 && id<=321)||(id>=500 && id<=531))
        {
            tempicon.src="rain.svg";
        }
    }
    catch(error)
    {
        alert('city not found');
    }
};

