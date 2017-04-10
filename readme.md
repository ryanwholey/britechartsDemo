To get started:
run the following:
npm install
npm run build

you will have to run two servers, a db server and a web server in different tabs
npm run db 
npm start 

Now fill in the missing parts of src/index.js to render a britechart at localhost:8080

Stock api! pretty neat
http://www.kibot.com/api/historical_data_api_sdk.aspx

Reddit api, pretty straight forward
http://www.reddit.com/hot.json

IMDB movei api
http://www.omdbapi.com/?s=godfather

NFL team arrest record
http://nflarrest.com/api/v1/team

1) implement a bar chart using the 'categorical' endpoint
2) implement a line chart using the 'timeSingleLine' endpoint
3) transform bar chart data into donut chart data by looking at the data type from the docs on the britecharts site http://eventbrite.github.io/britecharts/global.html#DonutChartData__anchor
4) hit a csv endpoint like "netflix" and create a line chart using some of the parsing functions
5) hit your own json endpoint like http://reddit.com/hot.json, choose an interesting aspect of the data set, choose a chart, transform the data and display it!

