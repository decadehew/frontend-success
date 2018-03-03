class Accordion{
    constructor(selector){
        this.selector = selector;
    }
    _event(){   
        this.selector.onclick = function(e){
            this._removeClass()
            let dom = e.target || e.currentTarget;
                if(dom.classList.contains('title')){
                    dom.parentNode.classList.add('active');
                }
        }.bind(this);
    }
    _removeClass(){
        for(let i = 0;i< this.selector.children.length;i++){
            if(this.selector.children[i].classList.contains('active')){
                this.selector.children[i].classList.remove('active')
            }
        }
        
    }
    init(){
        this._event();
    }
}