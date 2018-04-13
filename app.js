const height = 400;
    let min; 
    let max;
    let ex;
  let data;
d3.csv("atlanta.csv", (d) => {
    ex = d.map(element => parseInt(element["Max.TemperatureF"]) ); 
    let height = 500;
    let width  = 1200;
    let rectWidth =  width / d.length;
     let svg = d3.select("svg");
     svg.attr("height", height)
        .attr("width", width);
  	 svg.selectAll("rect").data(d)
     .enter().append("rect")
     .attr("x", (d,i) => 1 + i * rectWidth)
     .attr("y", (d, i) => height - 3 *ex[i] )
     .attr("height", (d,i) => (3 * ex[i]))
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