'use strict';


jQuery(document).ready(function () {
 
  openMenu();
  tabs();
  drop();
  openModal();
  openPersonalData();
  openSitebarMenu();
  menuTabs();
  quantity();
  basketMenu();
  openOrdersMobile();
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


function menuTabs(){
  $(".header__menu-item").on("click", function(e){
    e.preventDefault();

    $(".header__menu-item").removeClass("active");
    $(this).addClass("active");
  })
}


function tabs(){
  $(".sidebar__element-title").on("click", function(e){
    // e.preventDefault();
    
    // $("") each  window.location
    // $(".sidebar__element-title").each(function(){
    //   // console.log(this);
    //   if($(this).hasClass("active")){
    //     $(this).style.css("display", "block");
    //   } 
    // });

    $(".sidebar__element-title").removeClass("active");
    $(this).addClass("active");
  })
}


function drop(){
  $(".drop__btn").on("click", function(e){
    e.preventDefault();

    let allDropBox = $(".drop__box");
    let currentDropBox = $(this).closest(".drop__box");
    let allArrowDrop = $(".drop__box").find(".drop__btn, .drop__btn-1, .drop__btn-2, .drop__btn-3, .drop__btn-4");
    let currentArrow = $(this).closest(".drop__box").find(".drop__btn, .drop__btn-1, .drop__btn-2, .drop__btn-3, .drop__btn-4");

    if(currentDropBox.hasClass("active")){
      currentDropBox.removeClass("active");
      currentArrow.removeClass("active");
    } else {
      allDropBox.removeClass("active");
      currentDropBox.addClass("active");
      allArrowDrop.removeClass("active");
      currentArrow.addClass("active");
    }

    $(".drop__menu li").on("click", function(e){
      e.preventDefault();

      let option = $(this).html();
      
      $(this).parents(".drop__box").find(".drop__btn").html(option);
      $(this).parents(".drop__box").removeClass("active");

      if($(".drop__menu li").hasClass("active")){
        currentArrow.addClass("active");
      } else {
        currentArrow.removeClass("active");
      }
  
    });

    $("body").on("click", function (e){
      let block = $(".drop__box");
  
      if(block.has(e.target).length == 0){
        block.removeClass("active");
        currentArrow.removeClass("active");
      }
      
    });

  });

}

function openModal(){
  $(".about-order__manager").on("click", function(){
    $(".about-order__modal").toggleClass("is-active");
    $(".about-order__manager").toggleClass("active");

    $(document).on("click", function(e){
    
      let button = $(".about-order__manager");
      let mobileBlock = $(".about-order__modal");
  
      if(!button.is(e.target) && button.has(e.target).length == 0) {
        mobileBlock.removeClass("is-active");
        button.removeClass("active");
      }
      
    });
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

function quantity(){
  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/arrow-up2.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/arrow-down2.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
}

function basketMenu(){
  $(".basket__menu").on("click", function(){
    $(this).next(".basket__menu-block").toggleClass("active");
  })

  $(document).on("click", function(e){
    
    let button = $(".basket__menu");
    let mobileBlock = $(".basket__menu-block");

    if(!button.is(e.target) && button.has(e.target).length == 0) {
      mobileBlock.removeClass("active");
    }
    
  });
}

function openOrdersMobile(){
  $(".my-orders__open").on("click", function(){

    let allMobileBlock = $(".mobile-block");
    let currentMobileBlock = $(this).parents(".accordion-item").find(".mobile-block");
    let allArrow = $(".my-orders__open");
    let currentArrow = $(this);
    

    if(currentMobileBlock.hasClass("active")){
      currentMobileBlock.removeClass("active");
      currentArrow.removeClass("active");
    } else {
      allMobileBlock.removeClass("active");
      currentMobileBlock.addClass("active");
      allArrow.removeClass("active");
      currentArrow.addClass("active");
    }

  });

  $(document).on("click", function(e){
    
    let button = $(".my-orders__open");
    let mobileBlock = $(".mobile-block");

    if(!button.is(e.target) && button.has(e.target).length == 0) {
      mobileBlock.removeClass("active");
      button.removeClass("active");
    }
    
  });
}





//# sourceMappingURL=my.js.map
