$(document).ready(function(){
   var respose;
   $("#search").click(function(){
      var searchText = $("#search-text").val();
      $("#search-text").val("");

      //console.log(searchText);
     $.ajax({
        type:"GET",
        async:false,
        contentType: "application/json",
        url:"https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchText+"&format=json&callback?",
        dataType:"jsonp",
        success : function(respose){
          $("#output").html("");

          for(var i=0; i<respose[1].length; i++){
          $("#output").prepend("<li><a target='_blank' href='"+respose[3][i]+"'>"+
              respose[1][i]+"</a><p>"+respose[2][i]+"</p></li>"
              );
          }
        },
        error : function(errorMessage){
           console.log(errorMessage);
        }
        
     });
   }); 
});