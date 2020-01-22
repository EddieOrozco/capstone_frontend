<template>
  <div id="app">
    <header>
      <!-- header-area start -->
      <div id="sticker" class="header-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <!-- Navigation -->
              <nav class="navbar navbar-default">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target=".bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <!-- Brand -->
                  <a class="navbar-brand page-scroll sticky-logo" href="index.html">
                    <h1>
                      C.C.C
                    </h1>
                    <!-- Uncomment below if you prefer to use an image logo -->
                    <!-- <img src="img/logo.png" alt="" title=""> -->
                  </a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                  <ul class="nav navbar-nav navbar-right">
                    <li class="active">
                      <a class="page-scroll" href="/">Home</a>
                    </li>
                    <!-- <li>
                      <a class="page-scroll" href="/about">About</a>
                    </li> -->
                    <li>
                      <a class="page-scroll" href="/users/current_user">Profile</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="/allcars">All Cars</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="/cars/new">New car</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="/examples/webgl_materials_car.html">3d car view</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="/signup">Signup</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="/login">Login</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
                <!-- navbar-collapse -->
              </nav>
              <!-- END: Navigation -->
            </div>
          </div>
        </div>
      </div>
      <!-- header-area end -->
    </header>
    <!-- header end -->

    <router-view />

    <!-- Start Footer bottom Area -->
    <footer>
      <div class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="footer-content">
                <div class="footer-head">
                  <div class="footer-logo">
                    <h2>
                      <span>C.C.C</span>
                    </h2>
                  </div>

                  <p>
                    Thanks for stopping by and checking out our page. Feel free to come back at any time. Check out more
                    custom classic cars as new sellers will be adding to the page.
                  </p>
                  <div class="footer-icons">
                    <ul>
                      <li>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-google"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single footer -->
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="footer-content">
                <div class="footer-head">
                  <h4>Contact Info</h4>
                  <p>
                    Make sure to come back our web site is always getting update with new cars daily.
                  </p>
                  <div class="footer-contacts">
                    <p>
                      <span>Tel:</span>
                      +312 425 3522
                    </p>
                    <p>
                      <span>Email:</span>
                      contact@ccc.com
                    </p>
                    <p>
                      <span>Working Hours:</span>
                      9am-5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single footer -->
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="footer-content">
                <div class="footer-head">
                  <h4>Instagram</h4>
                  <div class="flicker-img">
                    <a href="#">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcnzGPYE2vo_R1xbp3LI4AbUVhPafuqdiZaf-MjqFzNUBeos9g&s"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcnzGPYE2vo_R1xbp3LI4AbUVhPafuqdiZaf-MjqFzNUBeos9g&s"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcnzGPYE2vo_R1xbp3LI4AbUVhPafuqdiZaf-MjqFzNUBeos9g&s"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcnzGPYE2vo_R1xbp3LI4AbUVhPafuqdiZaf-MjqFzNUBeos9g&s"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcnzGPYE2vo_R1xbp3LI4AbUVhPafuqdiZaf-MjqFzNUBeos9g&s"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcnzGPYE2vo_R1xbp3LI4AbUVhPafuqdiZaf-MjqFzNUBeos9g&s"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-area-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="copyright text-center">
                <p>
                  &copy; Copyright
                  <strong>Custom Classic Cars</strong>
                  . All Rights Reserved
                </p>
              </div>
              <div class="credits">
                Designed by
                <a href="https://bootstrapmade.com/">Eduardo Orozco</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.footer-logo h2 span {
  color: #124075;
}
.footer-contacts p span {
  color: #124075;
}
.footer-icons ul li a {
  color: #124075;
}
.credits a {
  color: #124075;
}
</style>

<script>
export default {
  mounted: function() {
    (function($) {
      "use strict";

      /*--------------------------
  preloader
  ---------------------------- */
      $(window).on("load", function() {
        var pre_loader = $("#preloader");
        pre_loader.fadeOut("slow", function() {
          $(this).remove();
        });
      });

      /*---------------------
   TOP Menu Stick
  --------------------- */
      var s = $("#sticker");
      var pos = s.position();
      $(window).on("scroll", function() {
        var windowpos = $(window).scrollTop() > 300;
        if (windowpos > pos.top) {
          s.addClass("stick");
        } else {
          s.removeClass("stick");
        }
      });

      /*----------------------------
   Navbar nav
  ------------------------------ */
      var main_menu = $(".main-menu ul.navbar-nav li ");
      main_menu.on("click", function() {
        main_menu.removeClass("active");
        $(this).addClass("active");
      });

      /*----------------------------
   wow js active
  ------------------------------ */
      new WOW().init();

      $(".navbar-collapse a:not(.dropdown-toggle)").on("click", function() {
        $(".navbar-collapse.collapse").removeClass("in");
      });

      //---------------------------------------------
      //Nivo slider
      //---------------------------------------------
      $("#ensign-nivoslider").nivoSlider({
        effect: "random",
        slices: 15,
        boxCols: 12,
        boxRows: 8,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false
      });

      /*----------------------------
   Scrollspy js
  ------------------------------ */
      var Body = $("body");
      Body.scrollspy({
        target: ".navbar-collapse",
        offset: 80
      });

      /*---------------------
    Venobox
  --------------------- */
      var veno_box = $(".venobox");
      veno_box.venobox();

      /*----------------------------
  Page Scroll
  ------------------------------ */
      var page_scroll = $("a.page-scroll");
      page_scroll.on("click", function(event) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top - 55
            },
            1500,
            "easeInOutExpo"
          );
        event.preventDefault();
      });

      /*--------------------------
    Back to top button
  ---------------------------- */
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $(".back-to-top").fadeIn("slow");
        } else {
          $(".back-to-top").fadeOut("slow");
        }
      });

      $(".back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
      });

      /*----------------------------
   Parallax
  ------------------------------ */
      var well_lax = $(".wellcome-area");
      well_lax.parallax("50%", 0.4);
      var well_text = $(".wellcome-text");
      well_text.parallax("50%", 0.6);

      /*--------------------------
   collapse
  ---------------------------- */
      var panel_test = $(".panel-heading a");
      panel_test.on("click", function() {
        panel_test.removeClass("active");
        $(this).addClass("active");
      });

      /*---------------------
   Testimonial carousel
  ---------------------*/
      var test_carousel = $(".testimonial-carousel");
      test_carousel.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
      /*----------------------------
   isotope active
  ------------------------------ */
      // portfolio start
      $(window).on("load", function() {
        var $container = $(".awesome-project-content");
        $container.isotope({
          filter: "*",
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
          }
        });
        var pro_menu = $(".project-menu li a");
        pro_menu.on("click", function() {
          var pro_menu_active = $(".project-menu li a.active");
          pro_menu_active.removeClass("active");
          $(this).addClass("active");
          var selector = $(this).attr("data-filter");
          $container.isotope({
            filter: selector,
            animationOptions: {
              duration: 750,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
      });
      //portfolio end

      /*---------------------
   Circular Bars - Knob
--------------------- */
      if (typeof $.fn.knob != "undefined") {
        var knob_tex = $(".knob");
        knob_tex.each(function() {
          var $this = $(this),
            knobVal = $this.attr("data-rel");

          $this.knob({
            draw: function() {
              $(this.i).val(this.cv + "%");
            }
          });

          $this.appear(
            function() {
              $({
                value: 0
              }).animate(
                {
                  value: knobVal
                },
                {
                  duration: 2000,
                  easing: "swing",
                  step: function() {
                    $this.val(Math.ceil(this.value)).trigger("change");
                  }
                }
              );
            },
            {
              accX: 0,
              accY: -150
            }
          );
        });
      }
    })(jQuery);
  }
};
</script>
