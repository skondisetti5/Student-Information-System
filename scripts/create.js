







$("#createBtn").click(function(){
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
    $.ajax( { url: "https://api.mlab.com/api/1/databases/sit/collections/students?apiKey="+api_key,
		  data: JSON.stringify( data ),
		  type: "POST",
		  contentType: "application/json", 
            success:function(response){
                console.log(response);
                location.href="/";
                
            }, 
             
             error:function(err){
                 console.log(err);
             }
            
            
            } );
})









