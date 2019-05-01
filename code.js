d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function(err, data) {

            document.getElementById('info').innerHTML = data;
});