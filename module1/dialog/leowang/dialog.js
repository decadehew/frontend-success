var components = {
    /**
     * @example var dialog = new components.dialog(options,times);
     * 
     * dialog.show();
     * 
     * @param {object} options - 可選參數
     * @param {string} options.classes - 想要添加到dialog的class,
     * @param {number} options.times - 顯示時間
     */
    dialog:function(options){
        options = options || {};
        this.times = options.times || 3000;
        this.classes = options.classes || null;
        
        /**
         * 紀錄目前有幾個dialog
         */
        this._dialogs = [];
        /**
         * _dialogWrap的dom
         */
        this.selector = null;
        this.setEvent = function(){
            
        }.bind(this);

        var _event = function(){
            this.setEvent();
            this.selector.onclick = function(e){
                var dom = e.target || e.currentTarget;
                _hideDiglog(dom.parentNode);
            }.bind(this);
        }.bind(this);

        var _createDialogWrap = function(){
            var html = '<div id="_dialogWrap" style="position:fixed;top:0;right:0;margin:16px 16px 0 0;"></div>';
            document.body.insertAdjacentHTML('beforeend',html);
            var dom = document.getElementById('_dialogWrap');
            this.selector = dom;
        }.bind(this);

        var _hideDiglogWrap = function(){
            this.selector.remove(this.selector);
        }.bind(this);

        var _createDialog = function(bgColor,content){
            var newBgColor = bgColor || '#000';
            var dom = document.createElement('div');
            dom.classList.add('dialog');
            if(this.classes != null){
                var classes = this.classes.split(' ');
                classes.forEach(function(item){
                    dom.classList.add(item);
                })
            }
            dom.style.background = newBgColor;
            dom.style.opacity = '0.7';
            dom.style.marginBottom = '24px';
            dom.innerHTML = content;
            this.selector.insertAdjacentElement('afterbegin', dom);
            this._dialogs.push(dom);
            _setTime(dom);
        }.bind(this);
        
        var _hideDiglog = function(dom){
                dom.remove(dom)
                this._dialogs.pop();
                if(this._dialogs.length == 0){
                    _hideDiglogWrap()
                }
        }.bind(this);

        var _setTime = function(dom){
            var times = setTimeout(function(){
                _hideDiglog(dom);
            }, this.times)
        }.bind(this);

        this.show = function(bgColor,content){
            if(this._dialogs.length == 0){
                _createDialogWrap();
            }
            if(this._dialogs.length < 3){
                _createDialog(bgColor,content);
            }
            _event();
        }.bind(this);
    }

    
}