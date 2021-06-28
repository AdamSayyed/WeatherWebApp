




function weather(){ 
  
  var x =document.getElementById("search").value;
  var link = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8351d803816f5ef1142e8ab1efb29bdb"
  //var weatherdata;
fetch("https://api.openweathermap.org/data/2.5/weather?q="+x+"&units=imperial&appid=8351d803816f5ef1142e8ab1efb29bdb")

   .then(weatherdata => {

return weatherdata.json();
    
   })
.then(wdata=>{

  console.log(wdata);

 //myFunction(weather);
                                                  //var weth = weather().weather;
                                                  console.log(wdata);
                                                  var we =0; 
                                                 
                                                  var desc = wdata.weather[0].main;
var temp = wdata.main.temp;
console.log (temp); 
document.getElementById("main-temp").innerHTML = Math.round(temp)+"F";
document.getElementById("main-desc").innerHTML = wdata.weather[0].description;
document.getElementById("main-humid").innerHTML ="Humidity: " + wdata.main.humidity + "%";
document.getElementById("main-feels").innerHTML = "Feels like: " +Math.round(wdata.main.feels_like) + "F";
                                                  console.log(desc);
                                                  var y = "https://api.unsplash.com/search/photos?orientation=landscape&query="+desc+"&client_id=CJCzZ6e5bhsTxJxVGVSClmm4YHBAgqsmuWK8Wkdp7HM"
  fetch(y)
  .then(data =>{
  return data.json();


                                                  //var ref = document.body.style.backgroundImage.src;
                                                  //var w = "a";
                                                  //get(w);
                                                  //document.body.style.backgroundImage = "url("https://images.unsplash.com/photo-1501691223387-dd0500403074?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE4NTM0Mn0');

                                                  //console.
                                                  

                                                  }).then(resp =>{

                                                    console.log(resp);

var number = Math.floor(Math.random() * 11); 

                                                    var shrr= resp.results[number].urls.regular;

                                                    var repp= shrr;

console.log(shrr);

                                                    var r = document.body.style.backgroundImage = "url('"+repp+"');";

                                                    console.log(r);
                                                    document.body.style.backgroundImage = "url("+'"'+repp+'"'+")";



                                                  });


                                                 
   
            
            
  
 

});
  
  
}
  
  function myFunction(x) {

  //document.getElementById("demo").innerHTML = "Hello World";*/
}
function get(x){
  console.log("jh");
//getElementById('background').url ="https://images.unsplash.com/photo-1501691223387-dd0500403074?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE4NTM0Mn0";

v





//  console.log(myFunction().y);
}
function test(){




  console.log("test");
}
/*function click() {

  var x;

  x = ()=>{



  return "]";

  console.log("work");
  }
 click();

  //console.

  console.log(x());

}*/




