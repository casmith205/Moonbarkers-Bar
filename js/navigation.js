var MoonBarkers = MoonBarkers || {};
MoonBarkers.Navigation = MoonBarkers.Navigation || (function(){
    
    var init = function(){

        console.log("Navigation Initialized");
        var links = document.querySelectorAll(".nav-link");
        for (var i=0; i < links.length; i++){
            var link = links[i];
            link.addEventListener("click", handleClick);   
        }
       var mobileNavButton = document.getElementById("mobileNavToggler");
       mobileNavButton.addEventListener("click", mobileNavToggler);
    
    };

    var handleClick = function(evt){
        evt.preventDefault();
        var elem = evt.target;
        var hashMark = elem.href.substring(elem.href.indexOf("#"));
        window.location.hash = hashMark;
        showSection(hashMark);
        return false;
    }

    var mobileNavToggler = function(evt){
        console.log("mobileNavToggler clicked");
        var navs = document.getElementById("nav-links");
        navs.classList.add("show");

    }

    //handle showing clicked links and intially loaded page
    var showSection = function(hashMark){
        var sections = document.querySelectorAll(".site-section");
        for (var i=0; i < sections.length; i++){
            var section = sections[i];
            section.style.display = "none";
            if(("#" + section.id) === hashMark){ 
                section.style.display = "";
            }
        }
    };

    return {
        init: init,
        showSection: showSection
    } 

})();

