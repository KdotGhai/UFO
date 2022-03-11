// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      });
    });
  }  

 //here we are using D3(d3) to "listen for user input/clicks"
function handleClick() {
    let date = d3.select("#datetime").property("value")
    
    //We're re-capturing the data.js in filteredata
    // simply see it like this: let filteredData = tableData = data
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };/* //The triple equal signs test for equality, 
    meaning that the date in the table has to match our filter exactly. */
};

//when a button with the id of "filter-btn" is clicked, d3 will detect it
d3.selectAll("#filter-btn").on("click", handleClick);


// Build the table when the page loads
buildTable(tableData);
