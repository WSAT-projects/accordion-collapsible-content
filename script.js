const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
  accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll(".accordion-item");
  
  accordionItems.forEach(function(item) {
    const header = item.querySelector(".accordion-item-header");
    
    if (header.textContent === "INFORMATION MANAGEMENT") {
      item.style.borderTopLeftRadius = "10px";
      item.style.borderTopRightRadius = "10px";
    }

    if (header.textContent === "SYSTEMS INTEGRATION AND ARCHITECTURE 1") {
      item.style.borderBottomLeftRadius = "10px";
      item.style.borderBottomRightRadius = "10px";
    }
  });
});