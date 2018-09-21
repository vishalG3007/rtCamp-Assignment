
$(document).ready(function(){
    $('.responsive').slick({
        infinite: true,
        speed: 900,
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
        }
        ]
        });
        });

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
        if(!d.getElementById(id)){js=d.createElement(s);
            js.id=id;
            js.src='https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js,fjs);
            }}
            (document,'script','weatherwidget-io-js');
 

    var date,day,days,today,month,months,year,hours,minutes,seconds; 
            
        function clock() {
            date = new Date();
            day = date.getDay();
            days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            today = date.getDate();
            month = date.getMonth();
            months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            year = date.getYear();
                
            var week = days[day] + ", " + today + " " + months[month] + ".";
            document.getElementById("week").innerHTML = week;

            hours = date.getHours();
            minutes = date.getMinutes();
            seconds = date.getSeconds();

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var timer = hours + ":" + minutes + ":" + seconds;
            var cl = "#"+hours+minutes+seconds;
            document.getElementById("timer").innerHTML = timer;
            document.getElementById("timer").style.color = cl; 
            setTimeout(clock,1000);
            }
            clock();