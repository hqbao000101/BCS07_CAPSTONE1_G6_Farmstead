$(document).ready(function () {
  // todo: scroll event
  // * navbar - stick
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      document.querySelector("header > nav").classList.add("sticky-nav");
    } else {
      document.querySelector("header > nav").classList.remove("sticky-nav");
    }
  });

  // * back-to-top
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      this.document.getElementById("top").classList.add("visible");
    } else {
      this.document.getElementById("top").classList.remove("visible");
    }
  });

  // todo: click event
  // * dark-theme
  document
    .querySelector(
      "#navbarNavDropdown ul .nav-item:nth-child(2) i:nth-child(1)"
    )
    .addEventListener("click", function () {
      document.body.classList.add("dark-theme");
      this.style.display = "none";
      document
        .querySelector(
          "#navbarNavDropdown ul .nav-item:nth-child(2) i:nth-child(2)"
        )
        .classList.remove("d-none");
    });
  document
    .querySelector(
      "#navbarNavDropdown ul .nav-item:nth-child(2) i:nth-child(2)"
    )
    .addEventListener("click", function () {
      document.body.classList.remove("dark-theme");
      this.classList.add("d-none");
      document.querySelector(
        "#navbarNavDropdown ul .nav-item:nth-child(2) i:nth-child(1)"
      ).style.display = "block";
    });

  // * dropdown-menu
  var isExpended = false;
  document.getElementById("menu-dropdown").onclick = function () {
    if (isExpended) {
      document
        .querySelector("header .navbar_right .dropdown-menu")
        .classList.remove("dropdown_expand");
      isExpended = false;
    } else {
      document
        .querySelector("header .navbar_right .dropdown-menu")
        .classList.add("dropdown_expand");
      isExpended = true;
    }
  };

  // * right side navbar
  document.getElementById("right").onclick = function () {
    document.querySelector(".home_sidenav .sidenav__block").style.right =
      "-100%";
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "block";
  };
  document.getElementById("left").onclick = function () {
    document.querySelector(".home_sidenav .sidenav__block").style.right = "0";
    document.getElementById("right").style.display = "block";
    document.getElementById("left").style.display = "none";
  };
  // * sidenav actions
  document.querySelector(
    ".home_sidenav .sidenav__block .block__content .content__item:nth-child(1)"
  ).onclick = function () {
    // alert(
    //   "This feature is still under development. Please visit this later !!!"
    // );
    window.history.back();
  };
  document.querySelector(
    ".home_sidenav .sidenav__block .block__content .content__item:nth-child(2)"
  ).onclick = function () {
    alert(
      "This feature is still under development. Please visit this later !!!"
    );
  };
  document.querySelector(
    ".home_sidenav .sidenav__block .block__content .content__item:nth-child(3)"
  ).onclick = function () {
    alert(
      "This feature is still under development. Please visit this later !!!"
    );
  };
});
