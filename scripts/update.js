studentid=getQueryParam('studentid');
//console.log(studentid); 
jQuery.ajax({
    method:"GET",
    url:"https://api.mlab.com/api/1/databases/sit/collections/students/"+studentid+"?apiKey="+api_key,
    success:function(response){
        //console.log(response)
        populateStudent(response)
    },
    error:function(){
        
    } 
    
    })



function populateStudent(student){
    jQuery("#name").val(student.name)
     jQuery("#regNo").val(student.regNo)
     jQuery("#dob").val(student.dob)
     jQuery("#eng").val(student.eng)
     jQuery("#maths").val(student.maths)
     jQuery("#sci").val(student.sci)
     jQuery("#french").val(student.french)
     jQuery("#hist").val(student.hist)
    
}


jQuery("#updateBtn").click(function(){
data={
        name:$("#name").val(),
        regNo:$("#regNo").val(),
        dob:$("#dob").val(),
        eng:$("#eng").val(),
        maths:$("#maths").val(),
        sci:$("#sci").val(),
        french:$("#french").val(),
        hist:$("#hist").val(),
    };
    console.log("data",data);
    if(!data.regNo){
        alert("Reg No. cannot be empty");
        return;
    }
    $.ajax( { url: "https://api.mlab.com/api/1/databases/sit/collections/students/"+studentid+"?apiKey="+api_key,
		  data: JSON.stringify( data ),
		  type: "PUT", //to update the record, the method is to use PUT
		  contentType: "application/json", 
            success:function(response){
                console.log(response);
                location.href="/"
            }, 
             
             error:function(err){
                 console.log(err);
             }
            
            
            } );




});










































//console.log(location.search)
//removeQuestionmark=location.search.split("?")
//console.log(removeQuestionmark)
//splitAndSymbol=removeQuestionmark[1].split("&") 
//console.log(splitAndSymbol); 
//queryparams={} 
//for(var i=0; i<splitAndSymbol.length; i++){
//    queryparam=splitAndSymbol[i].split("=");
//    console.log(queryparam)
//    queryparams[queryparam[0]]=queryparam[1]
//}  
//console.log("queryparams", queryparams) 
//console.log(queryparams.studentid) 
//
//
//
//
//////1. We have the information of the student in address bar 
//////2. Each information is separated with &
//////3. All information are separated by ? symbol from the server URL 
////http://127.0.0.1 -> server 
////:64712 -> port
/////update.html -> path 
////?studentid=5b7453785d0e657bff2d48a1 -> queryparams 