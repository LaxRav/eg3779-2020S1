$(document).ready(function () {
    $.ajax({
        url: "/events",
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function(event) {
                    var article = $("<article>");
                    article.append("<h2>" + event.name + "</h2>");
                    var divElement = $("<div>");
                    divElement.append(event.description+"<br>");
                    divElement.append("Start: " + event.start.date + " " + event.start.time + "<br>");
                    divElement.append("End: " + event.end.date + " " + event.end.time + "<br>");
                    // the challenge ex
                    divElement.append("Organizer: " + event.organizer);
                    article.append(divElement);
                    $(".events").append(article);
                });
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )

    $(".addEvent").click(function () {
        $(".addNewEvent").show();
    })

    // the challenge ex
    $.ajax({
        url: "/organizers",
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function (organizer) {
                    $("#organizer").append("<option value='"+organizer.company+"'>"+organizer.company+"</option>");
                });
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
})