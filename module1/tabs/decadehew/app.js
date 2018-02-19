const tabs = document.querySelector('.tabs')


tabs.addEventListener('click', function(e) {
    const t = e.target;
    const target = e.target.href;
    const href = target.indexOf('#test');
    const s = target.slice(href);
    
    function getActive(t) {
        const child = tabs.children;

        for(var i=0; i<child.length; i++) {
            
            if(t === child[i].children[0]) {
                console.log(t)
                t.classList.add('actives')
            } else {
                child[i].children[0].classList.remove('actives')
            }

        }    
    }
    getActive(t);
    switch(s) {
        case '#test1':
            getContent('test1');
            break;
        case '#test2':
            getContent('test2');
            break;
        case '#test3':
            getContent('test3');
            break;
        default: 
            console.log('good5')
    }
})



function getContent(s) {
    const tabList = document.getElementsByClassName('tab_content')
    const tabContent = tabList[0].children;
    for(var i=0; i<tabContent.length; i++) {
        if(tabContent[i].id === s) {
            tabContent[i].style.display = 'block';
            for(var j=i+1; j<tabContent.length; j++) {
                tabContent[j].style.display = 'none';
            }
            // console.log(s)
            return false;
        } else {
            console.log('error')
        }
        tabContent[i].style.display = 'none';
    }
}