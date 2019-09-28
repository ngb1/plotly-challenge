// @TODO: YOUR CODE HERE!

function buildPlot(stock) {
    var apiKey = "YOUR KEY HERE";
  
    var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;
  
    d3.json(url).then(function(data) {
  
      // Grab values from the response json object to build the plots
      var name = data.dataset.name;
      var stock = data.dataset.dataset_code;
      var startDate = data.dataset.start_date;
      var endDate = data.dataset.end_date;
      var dates = unpack(data.dataset.data, 0);
      var closingPrices = unpack(data.dataset.data, 1);

function buildPlot(data) {
    

    // id,state,abbr,poverty,povertyMoe,age,ageMoe,income,incomeMoe,healthcare,
    //healthcareLow,healthcareHigh,obesity,obesityLow,obesityHigh,smokes,smokesLow,smokesHigh
    d3.csv("data.csv").then(function(data, err) {
        var id = data.id;
        var state = data.state;
        var abbr = data.abbr;
        var poverty = data.poverty;
        var povertyMoe = data.povertyMoe;
        var age = data.age;
        var income = data.income;
        var incomeMoe = data.incomeMoe;
        var healthcare = data.healthcare;
        var healthcareLow = data.healthcareLow;
        var healthcareHigh = data.healthcareHigh;
        var obesity = data.obesity;
        var obesityLow = data.obesityLow;
        var obesityHigh = data.obesityHigh;
        var smokes = data.smokes;
        var smokesLow = data.smokesLow;
        var smokesHigh = data.smokesHigh;
        if (err) throw err;
        var data = [{
      values: [1, 2, 3, 39],
      labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
      type: "pie"
    }];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.plot("pie", data, layout);
  }
  
  function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
  }
  
  function getData(dataset) {
    var data = [];
    switch (dataset) {
    case "dataset1":
      data = [1, 2, 3, 39];
      break;
    case "dataset2":
      data = [10, 20, 30, 37];
      break;
    case "dataset3":
      data = [100, 200, 300, 23];
      break;
    default:
      data = [0, 0, 0, 0];
    }
    updatePlotly(data);
  }
  
  init();