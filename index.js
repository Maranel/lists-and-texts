

let array = ['John','Matus','Petra', 'Martina'];

array.forEach(element =>{
    $('ul').append('<li>' + element + '</li>');
    console.log(element);
}   );

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };


  $(document).ready(function() {
    document.title = additionalBlock.title;
});

  console.log(additionalBlock.title);
  $(".end").append("<p>" + additionalBlock.text + "</p>");