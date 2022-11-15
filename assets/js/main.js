
function navbar_transparent() {
if (window.scrollY > 500) {
    var navbar = document.getElementsByClassName('navbar')[0]
    navbar.style.backgroundColor = 'white'
    navbar.style.boxShadow = '2px 0px 10px #a0a0a0'
    document.getElementsByClassName('logo')[0].style.display = 'none'
    navbar.style.paddingTop = '4vh'
    navbar.style.paddingBottom = '4vh'
    navbar.style.justifyContent = 'center'
    document.getElementsByClassName('list')[0].style.justifyContent = 'center'

}else {
    var navbar = document.getElementsByClassName('navbar')[0]
    navbar.style.backgroundColor = '#fafafaef'
    navbar.style.boxShadow = 'none'
    document.getElementsByClassName('logo')[0].style.display = 'block'
    navbar.style.paddingTop = '0vh'
    navbar.style.paddingBottom = '0vh'
}
};

/* Changing the image every 5 seconds. */

window.setInterval(function () {
    var x = ['image2.webp' , 'image3.jpg' , 'image4.jpeg' , 'image4.webp']
    var i = parseInt(Math.random()*3)
document.getElementById('pic_menu').src ='/img/menu/'+ x[i]
} , 5000);

/* End Changing the image every 5 seconds. */

function sort(item) {
 
    var plats = document.getElementsByClassName('plats')
    var burger = document.getElementsByClassName('burger')
    var dessert = document.getElementsByClassName('dessert')
    var boissons = document.getElementsByClassName('boissons')

    if (item == 0) {
        for (i=0 ; i < plats.length ; i++){
            plats[i].style.display = 'block'
        }
        for (j=0 ; j < burger.length ; j++){
            burger[j].style.display = 'block' 
        }
        for (k=0 ; k < dessert.length ; k++){
            dessert[k].style.display = 'block'

        }
        for (l=0 ; l < boissons.length ; l++){
            boissons[l].style.display = 'block'
        }
    }
    else if(item == 1) {
        for (i=0 ; i < plats.length ; i++){
            plats[i].style.display = 'block'
        }
        for (j=0 ; j < burger.length ; j++){
            burger[j].style.display = 'none'
        }
        for (k=0 ; k < dessert.length ; k++){
            dessert[k].style.display = 'none'
        }
        for (l=0 ; l < boissons.length ; l++){
            boissons[l].style.display = 'none'
        }
        
    }else if (item == 2) {
        for (i=0 ; i < plats.length ; i++){
            plats[i].style.display = 'none'
        }
        for (j=0 ; j < burger.length ; j++){
            burger[j].style.display = 'block'
        }
        for (k=0 ; k < dessert.length ; k++){
            dessert[k].style.display = 'none'
        }
        for (l=0 ; l < boissons.length ; l++){
            boissons[l].style.display = 'none'
        }
    }else if (item == 3) {
        for (i=0 ; i < plats.length ; i++){
            plats[i].style.display = 'none'
        }
        for (j=0 ; j < burger.length ; j++){
            burger[j].style.display = 'none'
        }
        for (k=0 ; k < dessert.length ; k++){
            dessert[k].style.display = 'block' 
        }
        for (l=0 ; l < boissons.length ; l++){
            boissons[l].style.display = 'none'
        }
    }else {
        for (i=0 ; i < plats.length ; i++){
            plats[i].style.display = 'none'
        }
        for (j=0 ; j < burger.length ; j++){
            burger[j].style.display = 'none'
        }
        for (k=0 ; k < dessert.length ; k++){
            dessert[k].style.display = 'none'
        }
        for (l=0 ; l < boissons.length ; l++){
            boissons[l].style.display = 'block'
        }
    }
};