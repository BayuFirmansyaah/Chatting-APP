document.addEventListener('DOMContentLoaded', function(){
    const button_back = document.querySelector('.back-button');
 
    button_back.addEventListener('click', function(){
       let path = document.location.href
       path = path.split('/');
       path = path[3];
       
       if(path == 'chatting'){
        document.location.href="/"
       }else{
        document.location.href="/group"
       }
    })

    const contain = document.querySelector(".contain");
    contain.scrollTop = contain.scrollHeight;
})