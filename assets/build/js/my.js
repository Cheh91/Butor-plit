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
  $(".sidebar__element-title").on("click", function(){
    
    // $("") each  window.location

    $(".sidebar__element-title").removeClass("active");
    $(this).addClass("active");
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
}






//# sourceMappingURL=my.js.map
