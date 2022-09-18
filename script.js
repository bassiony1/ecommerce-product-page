const asider = document.querySelector('.asider');
const toogler = document.querySelector('.menu-bar');
const asiderClose = document.querySelector('.asider i')
const overlay = document.getElementById('overlay')
const cart = document.querySelector('.cart')
const cart_icon = document.querySelector('.cart-icon')
const btn_next = document.querySelector('.s-next')
const btn_prev = document.querySelector('.s-prev')
const preview_imgs = [... document.querySelectorAll('.container .content .preview .hero-preview img')]
const hero_img = document.querySelector('.container .content .preview .hero-preview')
const thum_imgs = [... document.querySelectorAll('.container .content .preview .preview-thums .img-thum')]
let preview_count = 1 ;
let imgPostions = [ 0 ,0 ,0 ,0];
let selected_img = 0;


const overlayed_preview =  document.querySelector('.overlay-preview')
const overlayed_btn_next = document.querySelector('.overlay-next')
const overlayed_btn_prev = document.querySelector('.overlay-prev')
const overlayed_preview_imgs = [... document.querySelectorAll('.overlay-preview .overlay-hero-preview img')]
const overlayed_thum_imgs = [... document.querySelectorAll('.overlay-preview .overlay-preview-thums .overlay-img-thum')]
let overlayed_preview_count = 1 ;
let overlayed_imgPostions = [ 0 ,0 ,0 ,0];
let overlayed_selected_img = 0;


item_increase = document.querySelector('.content .content-data .prod-control .plus');
item_decrease = document.querySelector('.content .content-data .prod-control .minus');
item_count = document.querySelector('.content .content-data .prod-control .num');
add_to_cart = document.querySelector('.content .content-data .prod-control .add-btn');
item_orders = document.querySelector('.nav .cart .cart-content .media-group .product .prod-count');
total_price = document.querySelector('.nav .cart .cart-content .media-group .product .total-price');
prod = document.querySelector('.nav .cart .cart-content .media-group');
trash_btn = document.querySelector('.nav .cart .cart-content .media-group .trash-btn');
empty_order = document.querySelector('.nav .cart .cart-content .empty-cart');
count = 0;


item_increase.addEventListener('click',()=>{
    count++;
    item_count.innerText = count ;

})
item_decrease.addEventListener('click',()=>{

    if (count > 0) {
        count--;
        item_count.innerText = count ;
    }

})

add_to_cart.addEventListener('click' , (e)=>{
    e.preventDefault();
    if (count > 0) {
        total = 125*count ; 
        item_orders.innerText = `${count} `;
        total_price.innerText = `$ ${total}`;
        if (!prod.classList.contains('show-flex'))
            prod.classList.add('show-flex')
            empty_order.classList.add('show-none')
        
        cart_icon.dataset.items = count;
        cart_icon.style.setProperty('--dis', 'flex');
    }

})

trash_btn.addEventListener('click', ()=>{
    count = 0 ;
    item_count.innerText = count ;
    prod.classList.remove('show-flex')
    empty_order.classList.remove('show-none')
    cart_icon.dataset.items = count;
    cart_icon.style.setProperty('--dis', 'none');
})
btn_next.addEventListener('click', ()=>{
    if (preview_count === 4) {
        imgPostions = [0 , 0 ,0 ,0];
        preview_count = 1 ;
        selected_img = 0;
    }else if(preview_count > 0)
    {
        preview_count++;
        selected_img++;
       imgPostions = imgPostions.map((p)=> {
            return p+100;
        })
      
    }
    preview_imgs.forEach((img , i)=>{
        img.style.translate = `${imgPostions[i]}%`
    })
    borderthums();
})
btn_prev.addEventListener('click', ()=>{
    if (preview_count === 1) {
        imgPostions = [300 , 300 ,300 ,300];
        preview_count = 4 ;
        selected_img = 3;
    }else if(preview_count > 0)
    {
        preview_count--;
        selected_img--;
       imgPostions = imgPostions.map((p)=> {
            return p-100;
        })
      
    }
    preview_imgs.forEach((img , i)=>{
        img.style.translate = `${imgPostions[i]}%`
    })

    borderthums();
})

toogler.addEventListener('click' , ()=>{
    asider.classList.add('show-flex');
    document.getElementById("overlay").style.display = "block";


})
overlay.addEventListener('click' , ()=>{
    asider.classList.remove('show-flex');
    overlayed_preview.classList.remove('show-flex')
    document.getElementById("overlay").style.display = "none";
})

asiderClose.addEventListener('click' , ()=>{
    asider.classList.remove('show-flex');
    document.getElementById("overlay").style.display = "none";
})

cart_icon.addEventListener('click',()=>{
    if (cart.style.display === 'none' || cart.style.display === ''){
        cart.style.display = 'flex'
    }else{
        cart.style.display = 'none'
    }
})


hero_img.addEventListener('click',()=>{
   
    if ((document.body.clientWidth > 800)) {

        document.getElementById("overlay").style.display = "block";
        overlayed_preview.classList.add('show-flex')
    }

})

addEventListener('resize', ()=> {
    if(document.body.clientWidth < 800 && overlayed_preview.classList.contains('show-flex')){
        overlayed_preview.classList.remove('show-flex')
        document.getElementById("overlay").style.display = "none";
    }
    if (document.body.clientWidth > 800 && (asider.classList.contains('show-flex')))
    {
        document.getElementById("overlay").style.display = "none";
        asider.classList.remove('show-flex');

    }
})
function borderthums() {
    thum_imgs.forEach((th)=>{
        th.classList.remove('img-active')
    })
    thum_imgs[selected_img].classList.add('img-active')
}





overlayed_btn_next.addEventListener('click', ()=>{
    if (overlayed_preview_count === 4) {
        overlayed_imgPostions = [0 , 0 ,0 ,0];
        overlayed_preview_count = 1 ;
        overlayed_selected_img = 0;
    }else if(overlayed_preview_count > 0)
    {
        overlayed_preview_count++;
        overlayed_selected_img++;
        overlayed_imgPostions = overlayed_imgPostions.map((p)=> {
            return p+100;
        })
      
    }
    overlayed_preview_imgs.forEach((img , i)=>{
        img.style.translate = `${overlayed_imgPostions[i]}%`
    })

    overlayesBorderthums();
})
overlayed_btn_prev.addEventListener('click', ()=>{
    if (overlayed_preview_count === 1) {
        overlayed_imgPostions = [300 , 300 ,300 ,300];
        overlayed_preview_count = 4 ;
        overlayed_selected_img = 3;
    }else if(overlayed_preview_count > 0)
    {
        overlayed_preview_count--;
        overlayed_selected_img--;
        overlayed_imgPostions = overlayed_imgPostions.map((p)=> {
            return p-100;
        })
      
    }
    overlayed_preview_imgs.forEach((img , i)=>{
        img.style.translate = `${overlayed_imgPostions[i]}%`
    })

    overlayesBorderthums();
})



function overlayesBorderthums() {
    overlayed_thum_imgs.forEach((th)=>{
        th.classList.remove('img-active')
    })
    overlayed_thum_imgs[overlayed_selected_img].classList.add('img-active')
}