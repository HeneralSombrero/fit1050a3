window.onscroll = function() {
    growShrinkLogo()
};
  
  function growShrinkLogo() {
    var Logo = document.getElementById("Logo")
    if ( document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ) {
      Logo.style.width = '180px';
    } else {
      Logo.style.width = '400px';
    }
}