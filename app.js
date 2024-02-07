        function Submit_validation() {
            if (
                myform.username.value != "" &&
                myform.mobilenumber.value != "" &&
                myform.emailaddress.value != "" &&
                myform.enquiry.value != "" &&
                myform.feedback.value != "" &&
                myform.gen.value != "" &&
                (myform.chkb_c.checked ||
                    myform.chkb_cpp.checked ||
                    myform.chkb_java.checked ||
                    myform.chkb_react.checked ||
                    myform.chkb_node.checked ||
                    myform.chkb_mongodb.checked) &&
                myform.ph.value != "" &&
                myform.filechoose.value != "" &&
                myform.dob.value != "" &&
                myform.visittime.value != "" &&
                myform.peraddress.value != "" &&
                myform.browse.value != "" &&
                myform.sec.value != ""
            ) {
                return true;
            } else {
                alert("Pls fill");
                return false;
            }
        }
        /* function Preview_display() {
             if (
                 myform.username.value != "" &&
                 myform.mobilenumber.value != "" &&
                 myform.emailaddress.value != "" &&
                 myform.enquiry.value != "" &&
                 myform.feedback.value != "" &&
                 myform.gen.value != "" &&
                 (myform.chkb_c.checked ||
                     myform.chkb_cpp.checked ||
                     myform.chkb_java.checked ||
                     myform.chkb_react.checked ||
                     myform.chkb_node.checked ||
                     myform.chkb_mongodb.checked) &&
                 myform.ph.value != "" &&
                 myform.filechoose.value != "" &&
                 myform.dob.value != "" &&
                 myform.visittime.value != "" &&
                 myform.peraddress.value != "" &&
                 myform.browse.value != "" &&
                 myform.sec.value != ""
             ) {
                 var name = "Name: " + myform.username.value;
                 document.getElementById("labname").innerHTML = name;
                 var email = "Email: " + myform.emailaddress.value;
                 document.getElementById("labemail").innerHTML = email;
                 var number = "Mobile-Num: " + myform.mobilenumber.value;
                 document.getElementById("labmob").innerHTML = number;
                 var enquiry = "Enquiry: " + myform.enquiry.value;
                 document.getElementById("labenq").innerHTML = enquiry;
                 var text = "Feedback: " + myform.feedback.value;
                 document.getElementById("labfeed").innerHTML = text;
                 var gender = "Gender: " + myform.gen.value;
                 document.getElementById("labgender").innerHTML = gender;
                 var course = "Course: ";
                 document.getElementById("labcourse").innerHTML=course
                 if (myform.chkb_c.checked) {
                     document.getElementById("lab_c").innerHTML +=
                           myform.chkb.value + ",";
                 }
                 if (myform.chkb_cpp.checked) {
                     document.getElementById("lab_cpp").innerHTML +=
                         myform.chkb1.value + ",";
                 }
                 if (myform.chkb_java.checked) {
                     document.getElementById("lab_java").innerHTML +=
                         myform.chkb2.value + ",";
                 }
                 if (myform.chkb_react.checked) {
                     document.getElementById("lab_react").innerHTML +=
                         myform.chkb3.value + ",";
                 }
                 if (myform.chkb_node.checked) {
                     document.getElementById("lab_node").innerHTML +=
                         myform.chkb4.value + ",";
                 }
                 if (myform.chkb_mongodb.checked) {
                     document.getElementById("lab_mongodb").innerHTML +=
                         myform.chkb5.value + ".";
                 }
                 var personalnumber = "Personal-Num: " + myform.ph.value;
                 document.getElementById("labpersonalnumber").innerHTML = personalnumber;
                 var file = "Choose-File: " + myform.filechoose.value;
                 document.getElementById("labfile").innerHTML = file;
                 var stream = "Stream: " + myform.sec.value;
                 document.getElementById("labstream").innerHTML = stream;
                 var DOB = "D.O.B: " + myform.dob.value;
                 document.getElementById("labdob").innerHTML = DOB;
                 var vtime = "Visit-Time: " + myform.visittime.value;
                 document.getElementById("labvisit").innerHTML = vtime;
                 var browse = "Browser: " + myform.browse.value;
                 document.getElementById("labbrowse").innerHTML = browse;
                 var peraddress = "Per-Address: " + myform.peraddress.value;
                 document.getElementById("labperaddress").innerHTML = peraddress;
                 document.getElementById("Submit").disabled = false;
             } else {
                 alert("please fill the all fields");
             }
         }*/
         
         function isCheckFilled(textboxid,messageid){
             var txtbox = document.getElementById(textboxid)
             if(txtbox.value==""){
                 txtbox.style="border-color:red"
                 document.getElementById(messageid).innerHTML="please fill the field"
             }else{
                txtbox.style="border-color:blue"
                document.getElementById(messageid).innerHTML=""
             }
             var d= document.getElementById('dobid')
                var e= new Date(d.value)
                var year=e.getFullYear()
                 if(year>2006){
                     myform.dob.style="border-color:red"
                     document.getElementById("doberrorbox").innerHTML="you are not elgible to apply"
                 }else{
                     document.getElementById("doberrorbox").innerHTML=""
                 }
         }
         function selectbtn(){
             var box=document.getElementById('gender')
             if(box.value!=""){
                 document.getElementById('gendererrorbox').innerHTML=""
             }
         }
         function checkCheckBox(){
                if(myform.chkb_c.checked==true ||
                myform.chkb_cpp.checked==true ||
                myform.chkb_java.checked==true ||
                myform.chkb_react.checked==true ||
                myform.chkb_node.checked==true ||
                myform.chkb_mongodb.checked==true){
                        document.getElementById("courseerrorbox").innerHTML=""
                }else{
                        document.getElementById("courseerrorbox").innerHTML="Please select the Course"
                }
          

            }

         function Preview_display() {
            if (
                (myform.username.value == "" &&
                myform.mobilenumber.value == "" &&
                myform.emailaddress.value == "" &&
                myform.enquiry.value == "" &&
                myform.feedback.value == "" &&
                myform.gen.value == "" &&
                (   myform.chkb_c.checked=="" ||
                    myform.chkb_cpp.checked=="" ||
                    myform.chkb_java.checked=="" ||
                    myform.chkb_react.checked=="" ||
                    myform.chkb_node.checked=="" ||
                    myform.chkb_mongodb.checked=="") &&
                myform.ph.value == "" &&
                myform.filechoose.value == "" &&
                myform.dob.value == "" &&
                myform.visittime.value == "" &&
                myform.peraddress.value== "" &&
                myform.browse.value == "" &&
                myform.sec.value == "") ){
                alert("Please fill all fields")
                myform.username.focus()
                myform.gen.focus()
            }else{
                if (myform.username.value == "") {
                    //alert("Name is required ")
                    myform.username.focus()   
                    return;
                } else {
                    var name ="Name: "+ myform.username.value
                    document.getElementById("labname").innerHTML = name
                }
                if (myform.emailaddress.value == "") {
                    //alert("Email is required")
                    myform.emailaddress.focus()
                    return;
                } else {
                    var email ="Email: "+ myform.emailaddress.value
                    document.getElementById("labemail").innerHTML = email
                }
                if (myform.mobilenumber.value == "" ||myform.mobilenumber.value.length!=10) {
                    //alert("Mobile number is required")
                    myform.mobilenumber.focus()
                    return;
                } else {   
                    var number ="Mobile-Num: "+ myform.mobilenumber.value
                    document.getElementById("labmob").innerHTML = number
                }
                if (myform.enquiry.value == "") {
                    //alert("Enquiry is required")
                    myform.enquiry.focus()
                    return;
                } else {
                    var enquiry = "Enquiry: " + myform.enquiry.value;
                    document.getElementById("labenq").innerHTML = enquiry;
                }
                if (myform.feedback.value == "") {
                    //alert("Feedback is required")
                    myform.feedback.focus()
                    return;
                } else {
                    var text = "Feedback: " + myform.feedback.value;
                    document.getElementById("labfeed").innerHTML = text;
                }
                if (myform.gen.value == "") {
                    document.getElementById("gendererrorbox").innerHTML="Please select Gender"
                    document.getElementById('gender').focus()
                    return;
                } else {
                    document.getElementById("gendererrorbox").innerHTML=""
                    var gender = "Gender: " + myform.gen.value;
                    document.getElementById("labgender").innerHTML = gender;
                }
                if (myform.chkb_c.checked ||
                    myform.chkb_cpp.checked ||
                    myform.chkb_java.checked ||
                    myform.chkb_react.checked ||
                    myform.chkb_node.checked ||
                    myform.chkb_mongodb.checked) {
                    var course = "Course:";
                    document.getElementById("labcourse").innerHTML = course
                    if (myform.chkb_c.checked) {
                        document.getElementById("lab_c").innerHTML =
                            myform.chkb_c.value + ",";
                    }
                    if (myform.chkb_cpp.checked) {
                        document.getElementById("lab_cpp").innerHTML =
                            myform.chkb_cpp.value + ",";
                    }
                    if (myform.chkb_java.checked) {
                        document.getElementById("lab_java").innerHTML =
                            myform.chkb_java.value + ",";
                    }
                    if (myform.chkb_react.checked) {
                        document.getElementById("lab_react").innerHTML =
                            myform.chkb_react.value + ",";
                    }
                    if (myform.chkb_node.checked) {
                        document.getElementById("lab_node").innerHTML =
                            myform.chkb_node.value + ",";
                    }
                    if (myform.chkb_mongodb.checked) {
                        document.getElementById("lab_mongodb").innerHTML =
                            myform.chkb_mongodb.value + ".";
                    }
                    document.getElementById("courseerrorbox").innerHTML=""
                } else {
                    document.getElementById("courseerrorbox").innerHTML="Please select the Course"
                    document.getElementById("coursechkbox").focus()
                    return;
                }
                if (myform.ph.value == "" || myform.ph.value.length!=10) {
                    //alert("Alternate number is required or invalid" )
                    myform.ph.focus()
                    return;
                } else {
                    var personalnumber = "Personal-Num: " + myform.ph.value;
                    document.getElementById("labpersonalnumber").innerHTML = personalnumber;
                }
                if (myform.filechoose.value == "") {
                    //alert("Please choose the file")
                    myform.filechoose.focus()
                    return;
                } else {
                    var file = "Choose-File: " + myform.filechoose.value;
                    document.getElementById("labfile").innerHTML = file;
                }
                
                    var d= document.getElementById('dobid')
                    var e= new Date(d.value)
                    var year=e.getFullYear()
                if (myform.dob.value == "" || year>2006 ) {
                    //alert("Date of birth is required")
                    myform.dob.focus()
                    return;
                } else {
                        var DOB = "D.O.B: " + myform.dob.value;
                        document.getElementById("labdob").innerHTML = DOB;
                }
                if (myform.visittime.value == "") {
                    //alert("Time is required")
                    myform.visittime.focus()
                    return;
                } else {
                    var vtime = "Visit-Time: " + myform.visittime.value;
                    document.getElementById("labvisit").innerHTML = vtime;
                }
                if (myform.peraddress.value == "") {
                    //alert("Address is required")
                    myform.peraddress.focus()
                    return;
                } else {
                    var peraddress = "Per-Address: " + myform.peraddress.value;
                    document.getElementById("labperaddress").innerHTML = peraddress;
                }
                if (myform.browse.value == "") {
                    //alert("Please select the browser")
                    myform.browse.focus()
                    return;
                } else {
                    var browse = "Browser: " + myform.browse.value;
                    document.getElementById("labbrowse").innerHTML = browse;
                }
                if (myform.sec.value == "") {
                    //alert("Please select the stream")
                    myform.sec.focus()
                    return;
                } else {
                    var stream = "Stream: " + myform.sec.value;
                    document.getElementById("labstream").innerHTML = stream;
                }
                document.getElementById("label_preview").style="visibility:visible"
                document.getElementById("Submit").disabled = false;
            }
        }
        function change(){
            if(myform.username.value==""){
                myform.username.style="border-color:red"
                document.getElementById("nameerrorbox").innerHTML="Please fill the name"
            }else{
                document.getElementById("nameerrorbox").innerHTML=""
                myform.username.style="border-color:blue"
            }
            if(myform.emailaddress.value==""){
                myform.emailaddress.style="border-color:red"
                document.getElementById("emailerrorbox").innerHTML="Please fill the email"
            }else{
                document.getElementById("emailerrorbox").innerHTML=""
                myform.emailaddress.style="border-color:blue"
            }
            if(myform.mobilenumber.value==""){
                myform.mobilenumber.style="border-color:red"
            }else{
                myform.mobilenumber.style="border-color:blue"
            }
            if(myform.enquiry.value==""){
                myform.enquiry.style="border-color:red"
            }else{
                myform.enquiry.style="border-color:blue"
            }
            if(myform.feedback.value==""){
                myform.feedback.style="border-color:red"
            }else{
                myform.feedback.style="border-color:blue"
            }
            if(myform.ph.value==""){
                myform.ph.style="border-color:red"
            }else{
                myform.ph.style="border-color:blue"
            }
            if(myform.filechoose.value==""){
                myform.filechoose.style="border-color:red"
            }else{
                myform.filechoose.style="border-color:blue"
            }
            if(myform.dob.value==""){
                myform.dob.style="border-color:red"
            }else{
                myform.dob.style="border-color:blue"
            }
            if(myform.visittime.value==""){
                myform.visittime.style="border-color:red"
            }else{
                myform.visittime.style="border-color:blue"
            }
            if(myform.peraddress.value==""){
                myform.peraddress.style="border-color:red"
            }else{
                myform.peraddress.style="border-color:blue"
            }
            if(myform.browse.value==""){
                myform.browse.style="border-color:red"
            }else{
                myform.browse.style="border-color:blue"
            }
            if(myform.sec.value==""){
                myform.sec.style="border-color:red"
            }else{
                myform.sec.style="border-color:blue"
            }
        }   
        function mobilenumberchk(mobilebox,mobilechk){
            
            isCheckFilled(mobilebox,mobilechk)
            
            var b= document.getElementById(mobilebox)
            
            if(b.value.length==10){
                b.style="border-color:blue"
                document.getElementById(mobilechk).innerHTML=""       
            }else{
                b.style="border-color:red"
                document.getElementById(mobilechk).innerHTML="mobile number is Invailid"
            }
        }
        function datechange(){
                var d= document.getElementById('dobid')
                var e= new Date(d.value)
                var year=e.getFullYear()
                 if(year>2006){
                     document.getElementById("doberrorbox").innerHTML="you are not elgible to apply"
                 }else{
                     document.getElementById("doberrorbox").innerHTML=""
                 }
        }