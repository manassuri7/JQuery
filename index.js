//$("h1").css("color","red");//$ means jQuery or shorthand for document.querySelector or document.querySelectorAll
//css is a method in JQuery
// console.log($("h1").css("color"));/* returns the color */
//console.log($("h1").css("font-size")); *///returns the font-size

//we can also add the classes from Jquery
//$("h1").addClass("big-title");//to add class, $("h1").removeClass("big-title");to remove class
//To add multiple classes
//$("h1").addClass("big-title margin-50");

//$("h1").hasClass("big-title");//returns True/false and heck whether class is der or not

//to manipulate text
//$("h1").text("Bye");//to change text of all h1's to Bye as Jquery gets auto applied to all selectors
//$("button").text("Dont click me");
//$("button").html("<em>Hey<em>");//to emphasize text using tags we use html, overwrites the above text

//manipulating Attributes
//$("img").attr("src");
//$("a").attr("href","https://www.msn.com");//takes us to msn on clicking the anchor

//adding eventListeners through Jquery, we dont need to write a loop for that as we id in drum-kit project
//$("h1").click(function(){
//$("h1").css("color","purple");
//});

//$("button").click(function(){
  //  $("h1").css("color","purple");
    //});

//event key listener
//$(document).keypress(function(event){
  //  console.log(event.key);//logs the keys pressed on keyboard
    //}); 
    
    /* $(document).keypress(function(event){to change the h1 tag to the key pressed
     $("h1").text(event.key);
    });  
 */

 /* $("h1").on("mouseover",function(){to change the color of h1 while hovering over it using mouse
     $("h1").css("color","red");
 }); */

 /* $("h1").on("click",function(){//to change the color of h1 using click
    $("h1").css("color","red");
});  */

//adding and removing elements using Jquery
//using before(),after(),prepend(),append() 
/* $("h1").before("<button>ClickMe</button>");to add the Element b4 the h1
$("h1").after("<button>ClickMe</button>");to add the element after the h1
$("h1").prepend("<button>ClickMe</button>");to add the element ahead of h1 but but on same line
$("h1").append("<button>ClickMe</button>");to add the element after h1 but on same line */

//To remove elements
//$("button").remove();removes all buttons

//$("button").on("click",function(){
  //$("h1").hide();//to hide h1 on clicking any button
  //show()-to show a hidden element
  //toggle()-to toggle betrween hide and show
  //fadeOut() and fadIn() and fadeToggle()
  //$("h1").fadeOut();
//});

//slideUp() and slideDown() and slideToggle()-used for dropdown menu
/* $("button").on("click",function(){
    $("h1").slideUp();
}); */

//using animate({}), This can aonly be used for numeric values, not for colors and all but only for numeric values
/* $("button").on("click",function(){
    $("h1").animate({opacity:0.5});//changing the opacity to 50% on clicking of button
    $("h1").animate({margin:"20%"});
}); */

//cascading
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

