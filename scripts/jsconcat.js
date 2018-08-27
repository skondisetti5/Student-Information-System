backupOfStudents=[];
jQuery.ajax({
    url:"https://api.mlab.com/api/1/databases/sit/collections/students/?apiKey="+api_key,
    method:"GET",
    success:function(response){
        console.log("response", response)
        backupOfStudents=response;
        populateStudents(response);
    },
    error:function(err){
        console.log("err",err)
    }
})


function populateStudents(students, sortByField){
    students=calculateTotal(students);
    students=calculateRank(students);
    if(sortByField){
        students=sortByFieldFn(students, sortByField)
    }
    
row='';
for(var i=0; i<students.length; i++){
    student=students[i];
    row=row+'<tr>';
    row=row+'<td>'+(i+1)+'</td>';
    row=row+'<td>'+student.name+'</td>';
    row=row+'<td>'+student.regNo+'</td>';
    row=row+'<td>'+student.dob+'</td>';
    row=row+'<td>'+student.eng+'</td>';
    row=row+'<td>'+student.maths+'</td>';
    row=row+'<td>'+student.sci+'</td>';
    row=row+'<td>'+student.french+'</td>';
    row=row+'<td>'+student.hist+'</td>';
    row=row+'<td>'+student.total+'</td>';
    row=row+'<td>'+student.rank+'</td>';
    row=row+'<td>';
    row=row+ '<button class="btn btn-warning btn-update" data-student-id="'+student._id.$oid+'"><span class="fa fa-pencil fa-lg"> </span></button>';
        row=row+'<button class="btn btn-danger btn-delete" data-student-id="'+student._id.$oid+'"><span class="fa fa-trash fa-lg"> </span> </button>';
    row=row+'</td>';
    row=row+'</tr>';
}    
    
    jQuery("#studentsTable").find("tbody").html(row)
    
    
    
    
    
}

function calculateTotal(students){
    
    students.forEach(function(student){
        student.total=0;
        student.total= student.total+ parseInt(student.eng);
        student.total= student.total+parseInt(student.maths);
          student.total= student.total+parseInt(student.sci);
          student.total= student.total+parseInt(student.french);
          student.total= student.total+parseInt(student.hist);
        
        
            
    })
    
    
    return students;
}

function calculateRank(students){
    
    students=students.sort(function(a,b){
        return b.total-a.total;
    })
    
    
//    for(var i=0; i<students.length; i++){
//        students[i].rank=i+1
//    }
    rank=1;
    students.forEach(function(student){
        
        student.rank=rank;
        rank++;
    })
    
    
    
    
    return students;
    
}


//Event is fired after the character is shown on screen.
jQuery("#search").keyup(function(){
    console.log("key is up");
    search=jQuery(this).val();
    console.log("search", search);
    jQuery("#studentsTable tbody tr").each(function(){
        text=jQuery(this).find("td:eq(1)").text()
        textValue=text.trim().toLowerCase();
        searchValue=search.trim().toLowerCase(); 
        indexValue=textValue.indexOf(searchValue);
        console.log("text", text);
        console.log(textValue.indexOf(searchValue))
        if(indexValue != -1)
           {
            jQuery(this).show();
            
        }
        else{
            jQuery(this).hide();
        }
    })
    
})
//
//jQuery("#search").keypress(function(){
//    console.log("key is pressed");
//})


//Event is fired before the character is shown on screen.
//Usage :- example - a field for mobile number should accept only numbers not alphabets
//If the user is pressing alphabet, you stop the event (which means that character is not shown)
//jQuery("#search").keydown(function(event){
//    console.log("key is down", event);
//    
//    key=event.which;
//    console.log("key", key);
//    if(key< 48 || key>57){
//        event.preventDefault();
//    }
//});

jQuery(".sortit").click(function(){
    sortByField=jQuery(this).attr('data-sorter')
   populateStudents(backupOfStudents, sortByField);
});
function sortByFieldFn(students, sortByField){
  
    students=students.sort(function(a,b){
        
        return a[sortByField]>b[sortByField];
    })
    
    return students;
    
    
    
}




























jQuery(document).on("click",".btn-update",function(){
    studentid=jQuery(this).attr('data-student-id') 
location.href="update.html?studentid="+studentid; 
})

//Method 3:
jQuery(document).on("click", ".btn-delete", function(){
    studentid=jQuery(this).attr("data-student-id");//capture the student ID
    jQuery("#deleteModal").find("#deleteYesBtn").attr("data-student-id",studentid);//create an attribute for student ID on yes button
    jQuery("#deleteModal").modal("show")
})


jQuery("#deleteYesBtn").click(function(){
    console.log("User has agreed to delete.")
    studentid=jQuery(this).attr("data-student-id");//retrieve student ID
    console.log(studentid);
    jQuery.ajax({
        method:"DELETE",
        url:"https://api.mlab.com/api/1/databases/sit/collections/students/"+studentid+"?apiKey="+api_key,
        success:function(){
            jQuery("#deleteModal").modal("hide");
            location.reload();
        
    },
                error:function(){
        
    },
    })
})





//Method 2: 
//jQuery(document).on("click", '.btn-delete', function(){
//    jQuery("#delete-confirmation-wrapper").show();
//})










//jQuery(document).on("click", '.btn-delete', function(){
//    confirmDelete=confirm("Are you sure you want to delete this student?");
//    if(confirmDelete)
//    
//    {
//        console.log("User has agreed to delete.");
//                     
//                     }
//})










































