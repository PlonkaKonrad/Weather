




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
