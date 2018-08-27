 api_key= "UzzK1xc9o9Jh7jjFtyEVPDCec73XLZW6";















function getQueryParam(key){
    removeQuestionmark=location.search.split("?");
    splitAndSymbol=removeQuestionmark[1].split("&");
    
    queryparams={} 
for(var i=0; i<splitAndSymbol.length; i++){
    queryparam=splitAndSymbol[i].split("=");
    
    queryparams[queryparam[0]]=queryparam[1]
}  
    return queryparams[key]; 
    
}