$(document).ready(function() {
            $('#fullpage').fullpage({
                menu: '#menu',
                anchors: ['firstPage', 'secondPage', '3rdPage'],
                autoScrolling: true
            });

            var pieData = [
                {
                    value: 20,
                    color:"#C82D41",
                    label: "HTML"
                },
                {
                    value : 10,
                    color : "#B92748",
                    label: "Angular.js"
                },
                {
                    value : 20,
                    color : "#AA2250",
                    label: "jQuery/Javascript"
                },
                {
                    value : 10,
                    color : "#9B1C58",
                    label: "Express.js"
                },
                {
                    value : 20,
                    color : "#8C1760",
                    label: "PSQL"
                },
                {
                    value : 10,
                    color : "#7D1167",
                    label: "Git"
                },
                 {
                    value : 20,
                    color : "#6E0C6F",
                    label: "CSS"
                },
                {
                    value : 20,
                    color : "#5F0677",
                    label: "Rails"
                },
                {
                    value : 10,
                    color : "#50017F",
                    label: "Ember"
                }
            ];
            // pie chart options
            var pieOptions = {
                 segmentShowStroke : false,
                 animateScale : true
            }
            // get pie chart canvas
            var skills= document.getElementById("skills").getContext("2d");
            // draw pie chart
            new Chart(skills).Pie(pieData, pieOptions);

            
        });
