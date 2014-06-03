function formatDate(d) { return d.getUTCFullYear() + "-" + d.getMonth() + "-" + d.getDate(); }
      
function fetchStockHistory(symbol, months, callback) {


  request = new XMLHttpRequest();
  request.open('GET', 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-05-31%22&format=json&&env=http://datatables.org/alltables.env');

  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      data = JSON.parse(request.responseText).query.results.quote;
      callback(data);
    }
  };

  request.send();
}


//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-02-11%22%20and%20endDate%20=%20%222014-02-18%22&format=json&&env=http://datatables.org/alltables.env

//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-02-11%22%20and%20endDate%20=%20%222014-02-18%22&format=json&&env=http://datatables.org/alltables.env

//http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2014-02-11" and endDate = "2014-02-18"&diagnostics=true&env=store://datatables.org/alltableswithkeys


//var data = encodeURIComponent("select * from yahoo.finance.historicaldata where symbol = ('" 
   // + symbol + "')  and startDate = '" + formatDate(startDate) + "' and endDate = '" 
  //  + formatDate(endDate) + "'");

//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-02-11%22%20and%20endDate%20=%20%222014-02-18%22&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys