$(function(){

    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Previous',
            next : 'Next Step',
            finish : 'Submit',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            var departure = $('#d-dates').val();
            var time = $('#d-time').val();
            var bus = $('#d-bus').val();
            var pickup = $('#d-pickup').val();
            var passengers = $('#d-passengers').val();
            var luggage = $('input[name=luggage]:checked').val();

            var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            var email = $('#email_address').val();
            var phone = $('#phone_number').val();




            $('#fullname-val').text(fullname);
            $('#email-val').text(email);
            $('#phone-val').text(phone);


            $('#departure-date-val').text(departure);
            $('#departure-time-val').text(time);
            $('#departure-bus-val').text(bus);
            $('#departure-pickup-val').text(luggage);



            return true;
        }
    });
    $("#date").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-chevron-down"></i>',
    });


});
