$("header").load("layout/header.html", function(){
    let searchInputBox = document.querySelector('input[name="search"]');
    let searchAutoCompleteBox = document.querySelector(".search-autocomplete");
    searchInputBox.onkeyup = function () {
      if (searchInputBox.value) {
        searchAutoCompleteBox.setAttribute("style", "display:block");
      } else {
        searchAutoCompleteBox.setAttribute("style", "display:none");
      }
    };
    
    searchInputBox.onblur = function () {
      searchAutoCompleteBox.setAttribute("style", "display:none");
    };
  
    $.cookie("name") && $('#contact').attr("href", `contact.html?name=${$.cookie("name")}`);
  })
  
  function mouseover_on_nav_item(item) {
    if (item.querySelector(".nav-submenu")) {
      item.querySelector(".nav-submenu").setAttribute("style", "display:block");
    }
  }
  
  function mouseout_on_nav_item(item) {
    item.querySelector(".nav-submenu").setAttribute("style", "display:none");
  }
  
  $("nav").load("layout/nav.html");
  $("aside").load("layout/aside.html");
  $("footer").load("layout/footer.html");
  
  
  /*fetch('layout/nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("nav").innerHTML = data;
    });*/