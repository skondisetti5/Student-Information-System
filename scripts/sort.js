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
//I am from the branch sort just for testing purpose