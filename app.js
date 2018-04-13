const height = 400;
    let min; 
    let max;
    let ex;
  let data;
d3.csv("https://raw.githubusercontent.com/zonination/weather-us/master/atlanta.csv", (d) => {
 	 ex = d.map(element => parseInt(element["Max.TemperatureF"]) ); 
    let rectWidth =  d.length / 1400;
    let height = 500;
     let svg = d3.select("svg");
  	 svg.selectAll("rect").data(d)
     .enter().append("rect")
     .attr("x", (d,i) => i *  d.length / 1400)
     .attr("y", (d, i) => height - ex[i] )
     .attr("height", 120)
     .attr("width",rectWidth)
     .attr("fill", "#f0f")
 
} );     
  
//   let scale = d3.scaleLinear().domain([min,max]).range([0, 300]);
//   let axis = d3.axisLeft(scale);  
//    d3.select("body").append("svg")
//   .attr("width", 1440) 
//   .attr("height", height)
//   .append("g") 
//   .attr("transform", "translate(200,40)")
//   .call(axis) ;
//     console.log(ex);  
//     console.log(Math.min(ex));   