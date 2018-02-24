var components = {
    /**
     * @param {object} options - 可選擇的參數
     * @param {string} options.tabsClassName - 每項tabs的class name; 預設為tabs
     * @param {string} options.insertId - 要插入tab元件的id ;預設為tab;
     * @param {number} amount - 共要有幾個tabs
     * @param {array} tabsName - tabs的名稱
     * @param {array} tabsConent - 此tab的內容
     */
    tabs:function(options,amount,tabsName, tabsConent){
        options = options || {};
        this.amount = amount || 3;
        this.tabsClassName = options.tabsClassName || 'tabs';
        this.insertId = options.insertId || 'tab';
        this.tabsName = tabsName || [];
        this.tabsConent = tabsConent || [];
        this.setEvent = function(){

        }

        this.event = function(){
            this.setEvent();
            document.getElementById('tabs-js').onclick = function(e){
                var dom = e.target || e.currentTarget;
                if(dom.dataset.type !== undefined){
                    for(var i =0 ; i< this.tabsName.length; i++){
                        document.getElementById("tabs-js").children[i].classList.remove('actives');
                    }
                    dom.classList.add('actives');
                    hideContent();
                    showContent(dom.dataset.type);
                }
            }.bind(this);
        }.bind(this);

        var showContent = function(type){
            var html = '';
            html = '<div id="tabsContent">'+ this.tabsConent[type] +'</div>';
            document.getElementById(this.insertId).insertAdjacentHTML('afterend',html);
        }.bind(this);
        
        var hideContent = function(){
            var dom = document.getElementById('tabsContent');
            if(dom !== null){
                dom.remove(dom);
            }
        }.bind(this);

        var renderUlHtml = function(){
            var html = '';
            html = '<ul id="tabs-js"></ul>';
            document.getElementById(this.insertId).insertAdjacentHTML('afterbegin',html);
            var renderLi = renderLiHtml();
            document.getElementById("tabs-js").innerHTML = renderLi;
        }.bind(this);

        var renderLiHtml = function(){
            var html = '';
            if(this.tabsName.length !== 0 ){
                if(this.tabsName.length < amount){
                    for(var i =0 ; i< this.tabsName.length; i++){
                        html += '<li class="'+ this.tabsClassName +'" data-type="'+ i +'">'+ this.tabsName[i] +'</li>'
                    }
                }else{
                    for(var i =0 ; i< amount; i++){
                        html += '<li class="'+ this.tabsClassName +'" data-type="'+ i +'">'+ this.tabsName[i] +'</li>'
                    }
                }
            }
            return html;
        }.bind(this);

        this.show = function(){
            renderUlHtml();
            this.event();
        }
    },
}