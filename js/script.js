document.addEventListener("DOMContentLoaded", function () {
  var drawer = document.getElementById("drawer");
  var toggleDrawer = document.getElementById("toggleDrawer");
  var closeDrawer = document.getElementById("closeDrawer");

  var drawerNavItem1 = document.getElementById("drawer-nav-ite1");
  var drawerNavItem2 = document.getElementById("drawer-nav-ite2");
  var drawerNavItem3 = document.getElementById("drawer-nav-ite3");
  var drawerNavItem4 = document.getElementById("drawer-nav-ite4");
  var drawerNavItem5 = document.getElementById("drawer-nav-ite5");
  var drawerNavItem6 = document.getElementById("drawer-nav-ite6");
  var drawerNavItem7 = document.getElementById("drawer-nav-ite7");
  var drawerNavItem8 = document.getElementById("drawer-nav-ite8");
  var drawerNavItem9 = document.getElementById("drawer-nav-ite9");
  var drawerNavItem10 = document.getElementById("drawer-nav-ite10");
  var drawerNavItem11 = document.getElementById("drawer-nav-ite11");

  toggleDrawer.onclick = function () {
    drawer.style.left = "0";
    drawer.style.transition = "0.9s";

    drawerNavItem1.style.left = "0";
    drawerNavItem1.style.transitionDelay = "50ms";

    drawerNavItem2.style.left = "0";
    drawerNavItem2.style.transitionDelay = "200ms";

    drawerNavItem3.style.left = "0";
    drawerNavItem3.style.transitionDelay = "350ms";

    drawerNavItem4.style.left = "0";
    drawerNavItem4.style.transitionDelay = "500ms";

    drawerNavItem5.style.left = "0";
    drawerNavItem5.style.transitionDelay = "650ms";

    drawerNavItem6.style.left = "0";
    drawerNavItem6.style.transitionDelay = "750ms";

    drawerNavItem7.style.left = "0";
    drawerNavItem7.style.transitionDelay = "900ms";

    drawerNavItem8.style.left = "0";
    drawerNavItem8.style.transitionDelay = "1s";

    drawerNavItem9.style.left = "0";
    drawerNavItem9.style.transitionDelay = "1.1s";

    drawerNavItem10.style.left = "0";
    drawerNavItem10.style.transitionDelay = "1.2s";

    drawerNavItem11.style.left = "0";
    drawerNavItem11.style.transitionDelay = "1.4s";
  };

  closeDrawer.onclick = function () {
    drawer.style.left = "-65%";
    drawer.style.transition = "3s";

    drawerNavItem1.style.left = "-100%";
    drawerNavItem1.style.transitionDelay = "1s";

    drawerNavItem2.style.left = "-100%";
    drawerNavItem2.style.transitionDelay = "850ms";

    drawerNavItem3.style.left = "-100%";
    drawerNavItem3.style.transitionDelay = "750ms";

    drawerNavItem4.style.left = "-100%";
    drawerNavItem4.style.transitionDelay = "650ms";

    drawerNavItem5.style.left = "-100%";
    drawerNavItem5.style.transitionDelay = "550ms";

    drawerNavItem6.style.left = "-100%";
    drawerNavItem6.style.transitionDelay = "460ms";

    drawerNavItem7.style.left = "-100%";
    drawerNavItem7.style.transitionDelay = "350ms";

    drawerNavItem8.style.left = "-100%";
    drawerNavItem8.style.transitionDelay = "250ms";

    drawerNavItem9.style.left = "-100%";
    drawerNavItem9.style.transitionDelay = "150ms";

    drawerNavItem10.style.left = "-100%";
    drawerNavItem10.style.transitionDelay = "50ms";

    drawerNavItem11.style.left = "-100%";
    drawerNavItem11.style.transitionDelay = "20ms";
  };
});

// ----------------------Famoso section ----------------------------------

// --------1-------
var btn1 = document.getElementById("go-info-btn1");
var image1 = document.getElementById("amitabh-img");
var name1 = document.getElementById("amitabh");
var infoDataContainer1 = document.getElementById("info-data-container1");
info(btn1, image1, name1, infoDataContainer1);

// --------2-------
var btn2 = document.getElementById("go-info-btn2");
var image2 = document.getElementById("shahrukh-img");
var name2 = document.getElementById("shahrukh");
var infoDataContainer2 = document.getElementById("info-data-container2");
info(btn2, image2, name2, infoDataContainer2);

// --------3-------
var btn3 = document.getElementById("go-info-btn3");
var image3 = document.getElementById("salman-img");
var name3 = document.getElementById("salman");
var infoDataContainer3 = document.getElementById("info-data-container3");
info(btn3, image3, name3, infoDataContainer3);

// --------4-------
var btn4 = document.getElementById("go-info-btn4");
var image4 = document.getElementById("amir-img");
var name4 = document.getElementById("amir");
var infoDataContainer4 = document.getElementById("info-data-container4");
info(btn4, image4, name4, infoDataContainer4);

// --------5-------
var btn5 = document.getElementById("go-info-btn5");
var image5 = document.getElementById("hrithik-img");
var name5 = document.getElementById("hrithik");
var infoDataContainer5 = document.getElementById("info-data-container5");
info(btn5, image5, name5, infoDataContainer5);

// --------6-------
var btn6 = document.getElementById("go-info-btn6");
var image6 = document.getElementById("rajinikanth-img");
var name6 = document.getElementById("rajinikanth");
var infoDataContainer6 = document.getElementById("info-data-container6");
info(btn6, image6, name6, infoDataContainer6);

// --------7-------
var btn7 = document.getElementById("go-info-btn7");
var image7 = document.getElementById("deepika-img");
var name7 = document.getElementById("deepika");
var infoDataContainer7 = document.getElementById("info-data-container7");
info(btn7, image7, name7, infoDataContainer7);

// --------8-------
var btn8 = document.getElementById("go-info-btn8");
var image8 = document.getElementById("Srinidhi-img");
var name8 = document.getElementById("Srinidhi");
var infoDataContainer8 = document.getElementById("info-data-container8");
info(btn8, image8, name8, infoDataContainer8);

// --------9-------
var btn9 = document.getElementById("go-info-btn9");
var image9 = document.getElementById("kriti-img");
var name9 = document.getElementById("kriti");
var infoDataContainer9 = document.getElementById("info-data-container9");
info(btn9, image9, name9, infoDataContainer9);

function info(btn, img, name, infoData) {
  var num = 0;

  btn.addEventListener("click", function () {
    if (num === 0) {
      img.style.display = "none";
      name.style.display = "none";
      infoData.style.display = "block";
      btn.style.color = "red";
      btn.innerText = "Back";
      num++;
    } else {
      img.style.display = "block";
      name.style.display = "block";
      infoData.style.display = "none";
      btn.style.color = "black";
      btn.innerText = "Go";
      num--;
    }
  });
}

// ------------------Contact ---------------------

// gsap ----------------->
gsap.to(".navigation-bar", {
  backgroundColor: "#000",
  color: "#fff",
  duration: 0.5,

  scrollTrigger: {
    trigger: ".navigation-bar",
    scroller: "body",
    start: "top -95%",
  },
});
