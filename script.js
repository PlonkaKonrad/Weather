




let YOUR_API_KEY = '00674f74-d649-40be-8d45-2eab67f15699';
let url = `http://api.airvisual.com/v2/states?country=Poland&key=`+YOUR_API_KEY; 

// cities fetch
let Białystok = "http://api.airvisual.com/v2/city?city=Białystok&state=Podlasie&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Bydgoszcz = "http://api.airvisual.com/v2/city?city=Bydgoszcz&state=Kujawsko-Pomorskie&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Gdańsk = "http://api.airvisual.com/v2/city?city=Gdańsk&state=pomerania&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Katowice = "http://api.airvisual.com/v2/city?city=Katowice&state=silesia&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Kielce = "http://api.airvisual.com/v2/city?city=Kielce&state=Swietokrzyskie&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Kraków = "http://api.airvisual.com/v2/city?city=Kraków&state=Lesser%20Poland%20Voivodeship&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Lublin = "http://api.airvisual.com/v2/city?city=Lublin&state=Lublin&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Łódź = "http://api.airvisual.com/v2/city?city=Łódź&state=Lodz%20Voivodeship&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Olsztyn = "http://api.airvisual.com/v2/city?city=Olsztyn&state=Warmia-Masuria&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Opole = "http://api.airvisual.com/v2/city?city=Opole&state=Opole%20Voivodeship&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Poznań = "http://api.airvisual.com/v2/city?city=Poznań&state=Greater%20Poland&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Rzeszów = "http://api.airvisual.com/v2/city?city=Rzeszów&state=Subcarpathian%20Voivodeship&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Szczecin = "http://api.airvisual.com/v2/city?city=Szczecin&state=West%20Pomerania&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Warszawa = "http://api.airvisual.com/v2/city?city=Warsaw&state=Mazovia&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let Wrocław = "http://api.airvisual.com/v2/city?city=Wrocław&state=Lower%20Silesia&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";
let ZielonaGóra = "http://api.airvisual.com/v2/city?city=Zielona%20Góra&state=Lubusz&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699";












// fetch('http://api.airvisual.com/v2/city?city=gda%C5%84sk&state=Pomerania&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699')
//   .then(response => response.json())
//   .then(data => console.log(data.data));

$('button').click(()=>{
    $('.map').toggleClass('mapscale');
    $('.info').toggleClass('info-active');
    $('.backToMap-btn').toggleClass('backToMap-btn-active');

})

$('.backToMap-btn').click(() =>{
    $('.map').toggleClass('mapscale');
    $('.info').toggleClass('info-active');
    $('.backToMap-btn').toggleClass('backToMap-btn-active');
})

// BUTTONS

$('.city-Białystok-btn').click(()=>{
    $('.info').css('background-image', 'url(images/Białystok.png)');

    fetchData("Białystok", "Podlasie") 

})
$('.city-Bydgoszcz-btn').click(()=>{
    $('.info').css('background-image', 'url(images/bydgoszcz.png)');
    fetchData("Bydgoszcz", "Kujawsko-Pomorskie") 
})

$('.city-Gdańsk-btn').click(()=>{
    $('.info').css('background-image', 'url(images/gdańsk.png)');
    fetchData("Gdańsk", "pomerania") 
})
$('.city-Katowice-btn').click(()=>{
    $('.info').css('background-image', 'url(images/katowice.png)');
    fetchData("Katowice", "silesia") 
})
$('.city-Kielce-btn').click(()=>{
    $('.info').css('background-image', 'url(images/kielce.png)');
    fetchData('Kielce','Swietokrzyskie');

})
$('.city-krakow-btn').click(()=>{
    $('.info').css('background-image', 'url(images/kraków.png)');
    fetchData('Kraków','Lesser%20Poland%20Voivodeship');

})
$('.city-Lublin-btn').click(()=>{
    $('.info').css('background-image', 'url(images/lublin.png)');
    fetchData('Lublin','Lublin');
})
$('.city-Łódź-btn').click(()=>{
    $('.info').css('background-image', 'url(images/łódź.png)');
    fetchData('Łódź','Lodz%20Voivodeship');
})
$('.city-Olsztyn-btn').click(()=>{
    $('.info').css('background-image', 'url(images/olsztyn.png)');
    fetchData('Olsztyn','Warmia-Masuria');
})
$('.city-Opole-btn').click(()=>{
    $('.info').css('background-image', 'url(images/opole.png)'); // BŁĄD
    fetchData('Kedzierzyn-Kozle','Opole%20Voivodeship');
})
$('.city-Poznań-btn').click(()=>{
    $('.info').css('background-image', 'url(images/poznań.png)');
    fetchData('Poznań','Greater%20Poland');
})
$('.city-Rzeszów-btn').click(()=>{
    $('.info').css('background-image', 'url(images/rzeszów.png)');
    fetchData('Rzeszów','Subcarpathian%20Voivodeship');
})
$('.city-Szczecin-btn').click(()=>{
    $('.info').css('background-image', 'url(images/szczecin.png)');
    fetchData('Szczecin','West%20Pomerania');
})
$('.city-Warszawa-btn').click(()=>{
    $('.info').css('background-image', 'url(images/warszawa.png)');
    fetchData('Warsaw','Mazovia');

})
$('.city-Wrocław-btn').click(()=>{
    $('.info').css('background-image', 'url(images/wrocław.png)');
    fetchData('Wrocław','Lower%20Silesia');
})
$('.city-ZielonaGóra-btn').click(()=>{
    $('.info').css('background-image', 'url(images/zielonagóra.png)');
    fetchData('Zielona Góra','Lubusz');
})



function fetchData(city, state) {

 let api = 'http://api.airvisual.com/v2/city?city='+city+'&state='+state+'&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699';
 fetch(api)
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);

        
     let name = data.data.city;
     let temp = data.data.current.weather.tp;
    // let icon = data.data.current.weather.ic;
    // let windDir = data.data.current.weather.wd;
    // let windSpd = data.data.current.weather.ws;
    // let pressure = data.data.current.weather.pr;
    // let humidity = data.data.current.weather.hu;

     let airQuality = data.data.current.pollution.aqius ;

     $(".name").html(name);
     $(".temp").html(temp +'°C');
     $(".pollution1").html(airQuality+'µg/m3');


     if( airQuality <50) {
        $(".pollution1").css('color','#008033');
        $(".air-quality1").css('color','#008033');
        $(".air-quality1").html('Bardzo dobra');
     }else if(airQuality <100){
        $(".pollution1").css('color','#04bf6b');
        $(".air-quality1").css('color','#04bf6b');
        $(".air-quality1").html('Dobra');
     }else if(airQuality <150){
        $(".pollution1").css('color','#dedb18');
        $(".air-quality1").css('color','#dedb18');
        $(".air-quality1").html('Umiarkowana');
     }else if(airQuality <200){
        $(".pollution1").css('color','#d49708');
        $(".air-quality1").css('color','#d49708');
        $(".air-quality1").html('Dostateczna');
     }else if(airQuality <300){
        $(".pollution1").css('color','#ff2f00');
        $(".air-quality1").css('color','#ff2f00');
        $(".air-quality1").html('Zła');
     }else if(airQuality >300){
        $(".pollution1").css('color','#631200');
        $(".air-quality1").css('color','#631200');
        $(".air-quality1").html('Bardzo zła');
     }



    })


 
//   .then(response => response.json())
//   .then(data => console.log(data));
  
 


  

    // let name = data.city;
    // let temp = data.data.current.weather.tp;
    // let icon = data.data.current.weather.ic;
    // let windDir = data.data.current.weather.wd;
    // let windSpd = data.data.current.weather.ws;
    // let pressure = data.data.current.weather.pr;
    // let humidity = data.data.current.weather.hu;

    // let airQuality = data.data.current.pollution.aqius ;

    // $(".name").html(name);
    // $(".temp").html(temp);
    // $(".poluttion").html(airQuality);

}