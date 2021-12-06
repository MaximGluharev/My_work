const Dom = function() {

    this.methods = [
        'html',
        'addClass',
        'on',
        'search',
        'removeClass',
        'toggleClass',
        'attr',
        'appendElem',
    ]

    this.create = function(name) {
        if (name.length == 0) return;

        this.element = document.createElement(name);

        let dom = new Dom();
        dom.methods.forEach(m => {
            this.element[m] = dom[m];
        });

        return this.element;
    }

    this.html = function(html) {
        this.innerHTML = html;

        return this;
    }
    
    this.addClass = function(name) {
        if (name.length == 0) return;

        this.classList.add(name);

        return this;
    }

    this.on = function(name, func) {
        if (name.length == 0 || !func) return null;

        this.addEventListener(name, func);

        return this;
    }

    this.search = function(selector) {
        let element = document;

        if (this.nodeName && this.nodeName.length > 0) element = this;

        let result = element.querySelectorAll(selector);

        if (result.length == 0) return null;

        let dom = new Dom();
        result.forEach(elems => {
            dom.methods.forEach(m => {
                elems[m] = dom[m];
            });
        });

        if (result.length == 1) result = result[0];

        return result;
    }


    // Домашняя работа 


    this.removeClass = function(name) {
        
        if (this.classList.contains(name)) {
            
            this.classList.remove(name);
        } else {
            return;
        };

        return this;
    }

    this.toggleClass = function(name) {
        if (name.length == 0) {
            return;
        } else {
            this.classList.toggle(name);

        };
        

        return this;
    }

    this.attr = function  (attr, name) {
        if (name.length == 0) {
            return this.getAttribute(attr);
        } else {
            return this.setAttribute (attr, name);

        };
        

    }

    this.appendElem = function (element, before) {
        if (!before) {
            this.append(element);
        } else {
            this.insertBefore (element, before);
        };
            

        return this;
    }

    

};

const $ = new Dom();