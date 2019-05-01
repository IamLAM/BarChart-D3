document.addEventListener('DOMContentLoaded', function() {
 
        req = new XMLHttpRequest();
        req.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);
        req.send();
        req.onload = function() {
            json = JSON.parse(req.responseText);
            var html = "";
            json = json.filter(function(val) {
                return (val.id !== 1);
            });
            json.forEach(function(val) {
                html +=val
            });
            document.getElementsByClassName('info')[0].innerHTML = html;
        }
    });