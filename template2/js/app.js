// from data.js
var tableData = data;

var tbody=d3.select("tbody")
// YOUR CODE HERE!
//console.table(tableData);

tableData.forEach(item =>{
    let row=tbody.append("tr");
    console.log(tableData)
    Object.entries(item).forEach(([key,value])=>{
        let cell=row.append("td");
        cell.text(value);
    });
});

var form=d3.select("#form");
var button = d3.select("#filter-btn");

form.on("submit",filter_func);
button.on("click",filter_func);

function filter_func(){
    //clearing all the html
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Getting the user inputed date
    let entered_date = d3.select("#datetime")
    // getting value
    let entered_value=entered_date.property("value");
    //writing the funtion to fiter data
    let filtered_data=tableData.filter(date => date.datetime===entered_value);
    console.log(filtered_data)
    
    filtered_data.forEach(item =>{
        let row=tbody.append("tr");
        Object.entries(item).forEach(([key,value])=>{
            let cell=row.append("td");
            cell.text(value);
        });
    });
};