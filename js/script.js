 $(document).ready(function(){
   $("#design-pic").click(function(){
   $(".design-a").hide(1500).toggle();
      $("design-pic").slideUp();

   });
   $(".design-a").click(function(){
     $("#design-pic").slideDown();
     $(".design-a").hide();
   })
   $("#prod-pic").click(function(){
     $(".prod-a").hide(1500).toggle();
     $("#prod-pic").slideUp ();
       });
       $(".prod-a").click(function(){
         $("#prod-pic").slideDown();
         $(".prod-a").hide();
       })

   $("#develop-pic").click(function(){
     $(".develop-a").hide(1500).toggle();
     $("#develop-pic").slideUp();
   });
  $(".develop-a").click(function(){
    $("#develop-pic").slideDown();
    $(".develop-a").hide();
  })



 })