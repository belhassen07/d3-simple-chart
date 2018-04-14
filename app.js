const height = 400;
    let min; 
    let max;
    let ex;
  let data;
d3.csv("atlanta.csv", (d) => {
    ex = d.map(element => parseInt(element["Max.TemperatureF"]) ); 
    let dates = d.map(element => element["Date"]);
    let height = 600;
    let width  = 1200;
    let rectWidth =  width / d.length;
    let margin = {top: 20, bottom: 20, right: 20, left: 20};
    //extents
    let dateExtent = d3.extent(d, (data) => new Date(data.Date));
    let tempExtent = d3.extent(d, (data) =>  parseFloat(data["Max.TemperatureF"]) )
    // console.log(Math.max(ex))

    //scales 
    let xScale = d3.scaleLinear().domain(dateExtent).range([margin.left , width - margin.right]);
    let yScale = d3.scaleLinear().domain(tempExtent).range([height , 0]);
    let yAxis = d3.axisLeft(yScale);  
    let xAxis = d3.axisBottom(xScale).tickFormat((d) =>
    ` ${(new Date(d)).getMonth() + 1} / ${(new Date(d)).getFullYear()} ` ) ;
    let svg = d3.select("svg");
    svg.append("g") 
     .attr("transform", `translate(${margin.left - 1}  , 0)`)
     .call(yAxis);

    svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

     svg.attr("height", height)
        .attr("width", width);
  	 svg.append("g").selectAll("rect").data(d)
     .enter().append("rect")
     .attr("x", (d,i) =>  xScale(new Date(d.Date)))
     .attr("y", (d, i) => height -   yScale(d[["Max.TemperatureF"]]) )
     .attr("height", (d,i) =>  yScale(d[["Max.TemperatureF"]]))
     .attr("width",rectWidth)
     .attr("fill", "#f0f")
   console.log(yScale(101) );

  
} );     
  
 
 