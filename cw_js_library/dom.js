const Dom = function() {

    this.create = function(name) {
        if (name.length == 0) return;

        return document.createElement(name);
    }

    this.html = function(element, html) {
        if (!element) return null;

        element.innerHTML = html;
    }

    this.search = function(element, selector) {
        if (!element) return null;

        let result = element.querySelectorAll(selector);

        if (result.length == 0) return null;

        if (result.length == 1) result = result[0];

        return result;
    }

    this.addClass = function(element, name) {
        if (!element || name.length == 0) return;

        element.classList.add(name);
    }

    this.removeClass = function(element, name) {
        if (!element || !name) return;

        element.classList.remove(name);
    }

    this.on = function(element, name, func) {
        if (!element || name.length == 0 || !func) return null;

        element.addEventListener(name, func);
    }

    // Домашняя работа 

    this.removeClass = function(element, name) {
        if (!element || !name) return;

        if (element.classList.contains(name)) {
            element.classList.remove(name);
        };

    };


    this.toggleClass = function(element, name) {
        if (!element || !name) return;

        element.classList.toggle(name);
    };

    this.attr = function (element, attr, name) {
        if (!name) {
            return element.getAttribute(attr);
        } else {
            return element.setAttribute (attr, name);

        };
        
    };

    this.appendElem = function(element, Elem, before) {
        if (!element || !Elem) return;

        if(!before) {
            element.append(Elem);
        } else {
           element.insertBefore(Elem, before);
         
        };

    };
};
const $ = new Dom();