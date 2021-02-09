




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

// CITY BUTTONS

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

 let api = 'https://api.airvisual.com/v2/city?city='+city+'&state='+state+'&country=poland&key=00674f74-d649-40be-8d45-2eab67f15699';
 fetch(api)
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);

        
     let name = data.data.city;
     let temp = data.data.current.weather.tp;
     let windDir = data.data.current.weather.wd;
     let windSpd = data.data.current.weather.ws;
     let pressure = data.data.current.weather.pr;
     let airQuality = data.data.current.pollution.aqius ;

     $(".name").html(name);
     $(".temp").html(temp +'°C');
     $(".pollution1").html(airQuality+'µg/m3');
     $('.arrow').css('transform',"translate(-50%, -50%) rotate("+windDir+"deg)");
     $(".windspeed1").html(windSpd+' m/s');
     $(".pressure1").html(pressure+' hPa');
    


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
}