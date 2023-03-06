const toggleBtn = document.querySelector(".toggleBtn");
const menus_list = document.querySelector(".menus-list");
const logo = document.querySelector(".logo");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const products = document.querySelector(".products");
const blogs = document.querySelector(".blogs");
const carouselPart = document.querySelector(".carousel");
const d_home = document.querySelector(".d-home");

const d_about = document.querySelector(".d-about");
const d_product = document.querySelector(".d-product");
const d_blog = document.querySelector(".d-blog");

const rightAngle = document.querySelectorAll(".rightAngle");

toggleBtn.addEventListener("click",function(){
    if(menus_list.style.display==="none")
   { menus_list.style.display="flex";
     carouselPart.style.display="none"

}
    else
   { menus_list.style.display="none";
     carouselPart.style.display="block";
}


    
})
home.addEventListener("click",function(){

    if(d_home.style.display==="none")
    { d_home.style.display="block";
    rightAngle[0].style.transform="rotate(90deg)"
}
     else
    { d_home.style.display="none";
    rightAngle[0].style.transform="rotate(0deg)"
 
 }
 
})

about.addEventListener("click",function(){

    if(d_about.style.display==="none")
    { d_about.style.display="block";
    rightAngle[1].style.transform="rotate(90deg)"
}
     else
    { d_about.style.display="none";
    rightAngle[1].style.transform="rotate(0deg)"
 
 }

})

products.addEventListener("click",function(){

    if(d_product.style.display==="none")
    { d_product.style.display="block";
    rightAngle[2].style.transform="rotate(90deg)";}
     else
    { d_product.style.display="none";
    rightAngle[2].style.transform="rotate(0deg)";
 
 }

})

blogs.addEventListener("click",function(){

    if(d_blog.style.display==="none")
    { d_blog.style.display="block";
    rightAngle[3].style.transform="rotate(90deg)";}
     else
    { d_blog.style.display="none";

    rightAngle[3].style.transform="rotate(0deg)";
 }

})
