

let array = ['John','Matus','Petra'];


$.each(array,function (key,val) {
    $("#ul").append("<ul>"+val+"</ul>");
    // if (val === "Matus")
   });
   let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };