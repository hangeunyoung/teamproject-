let depth1_li = document.querySelectorAll('header nav .depth1 > li')
for(let i = 0; i < depth1_li.length; i++){
    depth1_li[i].addEventListener('mouseover', function(){
        // for(let i = 0; i < depth1_li.length; i++) {
        //     depth1_li[i].classList.add('show');
        // }
        depth1_li.forEach(function(depth1) {
            depth1.classList.add('show')
        });
        
        console.log('완성');
    });
}
for(let i = 0; i < depth1_li.length; i++){
    depth1_li[i].addEventListener('mouseout', function(){
        // for(let i = 0; i < depth1_li.length; i++) {
        //     depth1_li[i].classList.add('show');
        // }
        depth1_li.forEach(function(depth1) {
            depth1.classList.remove('show')
        });
        
        console.log('완성');
    });
}