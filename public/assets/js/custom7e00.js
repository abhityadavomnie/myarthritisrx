/** Added by Ajay (9 July 2020)
* LoadMoreFaq function to load faq item of our program page
**/

function LoadMoreFaq(itemid, pageSize) {

    var totalPage = $("#faqItemsPageCount").val();
    var loadMoreCurrentPage = $("#faqItemsCurrCount").val();

    loadMoreCurrentPage++;

    var data = {
        'ReqCase': "LoadMoreFaq",
        'currPage': loadMoreCurrentPage,
        'ItemId' : itemid,
        'pageSize': pageSize
    };

    var ajaxurl = "/ajax/AjaxFunctions.aspx";
    jQuery.post(ajaxurl, data, function (response) {

        var htmlString = ''
        var jsonArray = JSON.parse(response);

        jsonArray.forEach(function(item){
            htmlString += '<li class="item"><h5 class="accordion-btn ff-MuseoSans-500"><a href="#">' + item.Title + '</a></h5><div class="accordion-content">' + item.Description + '</div></li>';
        })

        $("#faqAccordian").append(htmlString);

        $("#faqItemsCurrCount").val(loadMoreCurrentPage);

        if (loadMoreCurrentPage >= totalPage) {
            $('.faqItemsloadmore').hide();
        }

    });

}


/*
* Below function is added for Register section of Ready for Change - Added by Ajay (23rd July 2020) 
*/

function ReadyForChangeRegistration() {
    var erromsg = true;
   
    var checkEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var email = $('#RegemailChange');
    var FirstName = $('#RegFirstNameChange');
    var LastName = $('#RegLastNameChange');
    var contact = $('#RegContactChange');
    var Password = $('#RegPwdChange');
    


    var sEmail = $('#RegEmailChangeError');
    var sFirstName = $('#RegFirstNameChangeError');
    var sLastName = $('#RegLastNameChangeError');
    var sContact = $('#RegContactChangeError');
    var sPassword = $('#RegPasswordChangeError');

    $('#RegErrsMsgChange').hide();

    if (jQuery.trim(email.val()) == '') {

        sEmail.show();
        sEmail.html('');
        sEmail.html('Please enter a valid email address.');
        erromsg = false;
    }
    else if (!checkEmail.test(email.val())) {

        sEmail.show();
        sEmail.html('');
        sEmail.html('Please enter a valid email address.');
        erromsg = false;
    }
    else {
        sEmail.hide();
    }
    if (jQuery.trim(FirstName.val()) == '') {

        sFirstName.show();
        sFirstName.html('');
        sFirstName.html('Please enter your first name.');
        erromsg = false;
    }
    else {
        sFirstName.hide();
    }

    if (jQuery.trim(LastName.val()) == '') {

        sLastName.show();
        sLastName.html('');
        sLastName.html('Please enter your last name.');
        erromsg = false;
    }
    else {
        sLastName.hide();
    }

    if (jQuery.trim(contact.val()) == '') {

        sContact.show();
        sContact.html('');
        sContact.html('Please enter your contact number.');
        erromsg = false;
    }
    else {
        sContact.hide();
    }
    if (jQuery.trim(Password.val()) == '') {

        sPassword.show();
        sPassword.html('');
        sPassword.html('Please enter your password.');
        erromsg = false;
    }
    else {
        sPassword.hide();
    }
    if (jQuery.trim(Password.val()) != '') {
        if (Password.val().length < 6) {
            sPassword.show();
            sPassword.html('');
            sPassword.html("Password must contain at least six characters.");
            erromsg = false;
        }
    }
   
    if (erromsg == true) {

        ReadyForChangeRegistrationAjax();
    }

    return false;
}


function ReadyForChangeRegistrationAjax() {

    $('#btn-register-change').prop("disabled", true);

    var formData = new FormData();
    formData.append("Name", $('#RegFirstNameChange').val() + " " + $('#RegLastNameChange').val());
    formData.append("Contact", $('#RegContactChange').val());
    formData.append("Email", $('#RegemailChange').val());
    formData.append("Password", $('#RegPwdChange').val());
    formData.append("ReqCase", "NewRegister");
    $.ajax({
        type: "POST",
        url: "/ajax/ajaxfunctions.aspx",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data1) {

            var data = '';
            var nextPage = '';
            if (data1.indexOf('|') != -1) {
                data = data1.split('|')[0];
                nextPage = data1.split('|')[1];
            }

            if (data == "True") {



                $('#RegFirstNameChange').val('');
                $('#RegLastNameChange').val('');
                $('#RegContactChange').val('');
                $('#RegemailChange').val('');
                $('#RegPwdChange').val('');

                $('#RegErrsMsgChange').html("You have successfully registered.");
                $('#RegErrsMsgChange').show();

                if (nextPage != "") {
                    window.location = nextPage;
                }
                else {
                    setTimeout(function () {
                        location.reload();
                    }, 5000);
                }
            }
            else {
                $('#btn-register-change').prop("disabled", false);
                $('#RegErrsMsgChange').show();
                $('#RegErrsMsgChange').html("The entered email address already registered with us.");
            }
        },
        error: function (xhr) {
            console.log(xhr.responseText);
        }

    });
}


$('#agreementChange').on('click', function () {

    if ($('#agreementChange').is(':checked')) {

        $('#btn-register-change').attr('disabled', null).removeClass('disabled-btn');
    }
    else {
        $('#btn-register-change').attr('disabled', 'disabled').addClass('disabled-btn');
    }

});

/*
*End
*/

window.onload = function() {
    // Check browser support
    //if (typeof (Storage) !== "undefined") {

    //    if (sessionStorage.getItem("JoinPop") == null) {
    //        setTimeout(function () {
    //            sessionStorage.setItem("JoinPop", "Val");

    //            $('body').addClass('popup-join-program-open');

    //            $("#join-program-pop").show();
                
    //        }, 5000);
    //    }
      
    //} else {
    //    console.log("Sorry, your browser does not support Web Storage...");
    //}
};


