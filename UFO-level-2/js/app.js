// from data.js
var tableData = data;
var tbody=d3.select("tbody")
// YOUR CODE HERE!
//console.table(tableData);

//Adding table items
function init(data){
tbody.html("");
data.forEach(item =>{
    let row=tbody.append("tr");
    //console.log(tableData)
    Object.entries(item).forEach(([key,value])=>{
        let cell=row.append("td");
        cell.text(value);
    });
});

}

//finding the unique cities
city_list=[];
data.forEach(item=>{
    if(city_list.includes(item.city)===false){
        city_list.push(item.city)
        console.log(item.city)
     }
});

//adding all the city to dropdown
city_list.forEach(item=>{
    let city_opt=d3.select("#city");
    let city_new_opt=city_opt.append("option")
    city_new_opt.text(item)
})

//finding the unique states
state_list=[];
tableData.forEach(item=>{
    if(state_list.includes(item.state)===false){
        state_list.push(item.state)
     }
});

//adding all the state to dropdown
state_list.forEach(item=>{
    let state_opt=d3.select("#state");
    let state_new_opt=state_opt.append("option")
    state_new_opt.text(item)
})

//finding the unique countries
country_list=[];
tableData.forEach(item=>{
    if(country_list.includes(item.country)===false){
        country_list.push(item.country)
     }
});

//adding all the country to dropdown
country_list.forEach(item=>{
    let country_opt=d3.select("#country");
    let country_new_opt=country_opt.append("option")
    country_new_opt.text(item)
})

//finding the unique shapes
shape_list=[];
tableData.forEach(item=>{
    if(shape_list.includes(item.shape)===false){
        shape_list.push(item.shape)
     }
});

//adding all the country to dropdown
shape_list.forEach(item=>{
    let shape_opt=d3.select("#shape");
    let shape_new_opt=shape_opt.append("option")
    shape_new_opt.text(item)
})


let filters = {}
function updateFilters(){

    //filtering based on text input
    if(d3.select(this).select("input").node()!=null){
        let changeElement = d3.select(this).select("input");
        let elementValue = changeElement.property("value");
        console.log(elementValue)
        let filterId = changeElement.attr("id")

        if(elementValue){
            filters[filterId] = elementValue
        } 
        else {
            delete filters[filterId]
        }

        filterTable()
        }
    //filtering based on dropdowns
    else{
        let changeElement = d3.select(this).select("select");
        let elementValue = changeElement.property("value");
        let filterId = changeElement.attr("id");

        if(elementValue){
            filters[filterId] = elementValue
        }
        else {
            delete filters[filterId]
        }

    filterTable()
  }
}

function filterTable(){
    let filteredData = tableData;
    Object.entries(filters).forEach(([key, value]) => {
        if(value!='Select a city'&& value!='Select a State' && value!='Select a Country' && value!='Select a Shape'){
        filteredData = filteredData.filter(row => row[key] === value)
        }
    })
    init(filteredData)
}


d3.selectAll(".filter").on("change", updateFilters);



init(tableData);