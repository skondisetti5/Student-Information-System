
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