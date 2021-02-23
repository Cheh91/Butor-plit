'use strict';


jQuery(document).ready(function () {
 
  openMenu();
  // tabs();
  drop();
  openModal();
  openPersonalData();
  openSitebarMenu();
});




function openMenu(){
  $(".header__menu-btn").on("click", function(){
    $(".header__menu").toggleClass("to-active");
    $(".modal").toggleClass("act");

    if($(".header__menu").hasClass("to-active")){
      $("body").css("overflow-y", "hidden");
    } else {
      $("body").css("overflow-y", "auto");
    }
    
  })
}

function tabs(){
  $(".sidebar__element-title").on("click", function(e){
    e.preventDefault();


    $(".sidebar__element-title").removeClass("active");
    $(this).addClass("active");

    // let tab = $(this).attr("href");

    // $(".main__row-wrapper").removeClass("active");
    // $(tab).addClass("active");
  })
}


function drop(){
  $(".drop__btn").on("click", function(e){
    e.preventDefault();

    $(this).closest(".drop__box").toggleClass("active");
    $(this).closest(".drop__box").find(".drop__btn-1, .drop__btn-2").toggleClass("active");
  });

  $(".drop__menu li").on("click", function(){
    let option = $(this).html();
    
    $(this).parents(".drop__box").find(".drop__btn").html(option);
    $(this).parents(".drop__box").removeClass("active");

  });

  $("body").click(function (e){
    let block = $(".drop__box");

    if(block.has(e.target).length == 0){
      block.removeClass("active");
    }
    
  });

}

function openModal(){
  $(".about-order__manager-icon").on("click", function(){
    $(".about-order__modal").toggleClass("is-active");
    $(".about-order__manager").toggleClass("active");

    // $("body").click(function (e){
    //   let block = $(".about-order__modal");
  
    //   if(block.has(e.target).length == 0){
    //     block.removeClass("is-active");
    //   }
    // });
  })
}

function openPersonalData(){
  $(".sidebar__top").on("click", function(){
    $(".sidebar__data").toggleClass("active");
    $(".sidebar__top").toggleClass("is-active");
  });

  $(".sidebar__data-close-btn").on("click", function(){
    $(".sidebar__data").toggleClass("active")
    $(".sidebar__top").toggleClass("is-active");
  });
}


function openSitebarMenu(){
  $(".sidebar__data-btn").on("click", function(){
    $(".sidebar__menu").toggleClass("active");
    $(".sidebar__data-btn").toggleClass("is-active");
  });

  $(".sidebar__top-mobile-close-btn").on("click", function(){
    $(".sidebar__menu").toggleClass("active");
    $(".sidebar__data-btn").toggleClass("is-active");
  })
}



