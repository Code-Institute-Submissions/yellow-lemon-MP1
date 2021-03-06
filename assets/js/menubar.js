window.onscroll = function() {
    if ( document.readyState == ("complete") ) {
        //console.log(window.pageYOffset);
        var nav = document.getElementById('navbar'),
            logo = document.getElementById('navlogo'),
            menu = document.getElementById('mobilemenu'),
            overlay = document.getElementById('menuoverlay'),
            spotifyOverlay = document.getElementById('spotify');
        if ( window.pageYOffset > 50 ) {
            nav.style.transition = "all 0.2s ease";
            nav.style.height = "75px";
            logo.style.fontSize = "85%";
            menu.style.width = "50px";
            overlay.style.top = "calc(76px + var(--theme-margin))";
            spotifyOverlay.style.top = "calc(76px + var(--theme-margin))";
            menu.style.transition = "all 0.2s ease";    
        } else {
            nav.style.transition = "all 0.2s ease";
            nav.style.height = "100px";
            logo.style.fontSize = "100%";
            menu.style.width = "55px";
            overlay.style.top = "calc(100px + var(--theme-margin))";
            spotifyOverlay.style.top = "calc(100px + var(--theme-margin))";
            menu.style.transition = "all 0.2s ease";
        }
    }
}

// Credit: http://jsfiddle.net/cgdoh1bo/1 // 