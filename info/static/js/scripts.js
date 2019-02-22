$('apireq').click( function() {
    $.ajax({
             url : "http://localhost:8000/studentsapi",
             dataType: "json",
             alert("clicked.");
             success : function (data) {
                      $('#first_name').text( data[0].first_name);
                      $('#last_name').text( data[0].last_name);
                    }
                 });
             });
