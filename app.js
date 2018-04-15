const height = 400;
d3.csv("atlanta.csv", (d) => {
    let dates = d.map(element => element["Date"]);
    let height = 600;
    let width  = 1200;
    let rectWidth =  width / d.length;
    let margin = {top: 20, bottom: 20, right: 20, left: 20};
    //extents
    let dateExtent = d3.extent(d, (data) => d3.timeParse("%Y-%m-%d")(data.Date));
    let tempExtent = d3.extent(d, (data) =>  parseFloat(data["Max.TemperatureF"]) )
    // console.log(Math.max(ex))

    //scales 
    let xScale = d3.scaleLinear().domain(dateExtent).range([margin.left , width - margin.right]);
    let yScale = d3.scaleLinear().domain(tempExtent).range([height , 0]);
    let fillScale = d3.scaleLinear().domain(tempExtent).range([0,255]);
    //axis
    let yAxis = d3.axisLeft(yScale);  

    let xAxis = d3.axisBottom(xScale).tickFormat((d) =>
    d3.timeFormat("%b %Y ")(new Date(d)) ) ;
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
     .attr("x", (d,i) =>  xScale(d3.timeParse("%Y-%m-%d")(d.Date)))
     .attr("y", (d, i) => height -   yScale(d["Max.TemperatureF"]) )
     .attr("height", (d,i) =>  yScale(d[["Max.TemperatureF"]]))
     .attr("width",rectWidth)
     .attr("fill", (d) => `rgb(0,0, ${Math.floor(fillScale(d["Max.TemperatureF"]))} )`)
   console.log(xScale((d[0].Date)));

  
} );     
  
 
 