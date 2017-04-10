## Getting Started

### Node & NVM
You should be running above node v6

`node --version`

If you are not, you can easily switch node versions by using [nvm](https://github.com/creationix/nvm#install-script)

### Demo!!
To compile and build, run the following:

`npm install`

`npm run build`


You will have to run two servers, a db server and a web server in different tabs. To do this, run the following:

`npm run db `

`npm start` 

Now fill in the missing parts of `src/js/app.js` to render a britechart at `localhost:8080`

## Stuff To Do
1. implement a bar chart using the 'categorical' endpoint
2. implement a line chart using the 'timeSingleLine' endpoint
3. transform 'categorical' endpoint (bar chart data) into donut chart data by looking at the data type from the docs on the britecharts site and transforming it [britecharts donut data](http://eventbrite.github.io/britecharts/global.html#DonutChartData__anchor)
4. hit your own json endpoint like `http://reddit.com/hot.json`, choose an interesting aspect of the data set, choose a chart, transform the data and display it!

## Cool APIs!
* Stock api! pretty neat:
[kibot.com/api/](http://www.kibot.com/api/historical_data_api_sdk.aspx)

* Reddit api, pretty straight forward:
[reddit.com/hot.json](http://www.reddit.com/hot.json)

* IMDB movei api:
[omdbapi.com](http://www.omdbapi.com)

* NFL team arrest record:
  * [nflarrest.com](http://nflarrest.com/api/)
  * [nflarrest.com/api/v1/team](http://nflarrest.com/api/v1/team)

