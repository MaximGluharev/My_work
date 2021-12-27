class User {
    constructor(obj) {
        this.data = {
            id: obj.id || 0,
            name: obj.name || 'Введите данные',
            email: obj.email || 'Введите данные',
            address: obj.address || 'Введите данные',
            phone: obj.phone || 'Введите данные'
        }

    }

    edit(obj) {
        Object.assign(this.data, obj);
    }
   
    get() {
        return this.data;
        
    }

}


class Contacts {
    constructor () {
        this.lastId = 0;

        this.data = [];
    }

    add(obj) {
        let user = new User(obj);
        
        if (user.data) {
            user.data.id = ++this.lastId;

            this.data.push(user);

            return true;
        }

        return false;
    }

    edit(id, obj) {
        if (!id) return false;

        let user = this.data.find(user => {
            if (user.data.id == id) return user;
        });

        if (!user) return false;

        user.edit(obj);

        return true;

    }

    remove(id) {
        if (!id) return false;

        let users = this.data.filter(user => {
            return user.data.id != id;

        });

        this.data = users;
        return true;

    }

    get() {
        return this.data;
        
    }
        
}

class ContactsApp extends Contacts{
    constructor() {
        super();
        // this.init();

        if(!this.storage || this.storage.length == 0) {
            this.getData().then((arr) => {
                arr.forEach((item) => {
                    this.add(item);
                    this.update();
                    
                });
                 
            });
            this.init();
         
        } else {
            this.init();

        };
        

    }

    update() {
        let data = this.get();
        
        this.ulElem.innerHTML = '';

        data.forEach(user => {
            let liElem = document.createElement('li');
            liElem.classList.add('list_item');

            let nameElem = document.createElement('div');
            nameElem.classList.add('name_item');
            nameElem.innerHTML = user.data.name;

            let phoneElem = document.createElement('div');
            phoneElem.classList.add('phone_item');
            phoneElem.innerHTML = user.data.phone;

            let emailElem = document.createElement('div');
            emailElem.classList.add('email_item');
            emailElem.innerHTML = user.data.email;

            let addressElem = document.createElement('div');
            addressElem.classList.add('address_item');
            addressElem.innerHTML = user.data.address;

            let btnsElem = document.createElement('div');
            btnsElem.classList.add('btns_item_elem');
            
            let btnEdit = document.createElement('button');
            btnEdit.classList.add('btnEdit');
            btnEdit.innerHTML = 'Редактировать';

            let btnRemove = document.createElement('button');
            btnRemove.classList.add('btnRemove');
            btnRemove.innerHTML = 'Удалить';

            btnsElem.append(btnEdit, btnRemove);

            liElem.append(nameElem, phoneElem, emailElem, addressElem, btnsElem);
            this.ulElem.append(liElem);

            btnEdit.addEventListener('click', _ => {
                this.onEdit(user.data.id, nameElem, phoneElem, emailElem, addressElem);

            });

            btnRemove.addEventListener('click', _ => {
                this.onRemove(user.data.id);

            })

            this.storage = data;


        })

    };

    setCookie(name, value, options = {}) {

        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };
      
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();

        }
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            
            let optionValue = options[optionKey];
            
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
          
            }
        
        }
      
        document.cookie = updatedCookie;
    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"

        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    set storage(data) {
        const jsonData = JSON.stringify(data);
        localStorage.setItem('usersLocalData', jsonData);

        this.setCookie('localDataExp', "1", {'max-age': 10000 });
    }

    get storage() {
        let usersLocalData = localStorage.getItem('usersLocalData');
        if (!usersLocalData) return [];

        let data = JSON.parse(usersLocalData);

        return data; 



    }

    async getData() {
        let response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );

        let data = await response.json();

        let newData = data.map((item) => {
            return {
                name: item.name,
                phone: item.phone,
                email: item.email,
                address:
                    item.address.city +
                    item.address.street +
                    item.address.suite
            };
        });

        return newData;

    }

    onAdd() {
        let data = {
            name: this.inputName.value,
            phone: this.inputPhone.value,
            email: this.inputEmail.value,
            address: this.inputAdress.value,

        };

        this.add(data);

        return true;

        
    }

    onEdit(id ,nameElem, phoneElem, emailElem, addressElem) {
        nameElem.contentEditable = "true";
        phoneElem.contentEditable = "true";
        emailElem.contentEditable = "true";
        addressElem.contentEditable = "true";

        const save = _ => {
            nameElem.contentEditable = "false";
            phoneElem.contentEditable = "false";
            emailElem.contentEditable = "false";
            addressElem.contentEditable = "false";

            let data = {
                name: nameElem.innerText,
                phone: phoneElem.innerText,
                email: emailElem.innerText,
                address: addressElem.innerText
    
            }; 

            if (this.edit(id ,data)) this.update();
        }

        nameElem.addEventListener('keyup', event => {
           if (event.key == 'Enter' && event.ctrlKey == true) save();
        });

        phoneElem.addEventListener('keyup', event => {
           if (event.key == 'Enter' && event.ctrlKey == true) save();
        });

        emailElem.addEventListener('keyup', event => {
           if (event.key == 'Enter' && event.ctrlKey == true) save();
        });

        addressElem.addEventListener('keyup', event => {
           if (event.key == 'Enter' && event.ctrlKey == true) save();
        });

    }

    onRemove(id) {
       if (this.remove(id)) this.update();
       console.log(localStorage);
       
    }
    

    init() {
        let contactsElem = document.createElement('div')
        contactsElem.classList.add('container')

        let header = document.createElement('div')
        header.classList.add('header');
        contactsElem.append(header);

        let contentElem = document.createElement('div');
        contentElem.classList.add('content');
        contactsElem.append(contentElem);


        let wrapperElem = document.createElement('div')
        wrapperElem.classList.add('wrapper');
        contactsElem.append(wrapperElem);

        let h1Elem = document.createElement('h1');
        h1Elem.innerHTML = 'Контакты';
        header.append(h1Elem);

        document.body.append(contactsElem);

        let pElem = document.createElement('p');
        pElem.innerHTML = 'Добавить пользователя';

        contentElem.append(pElem);

        let inputElem = document.createElement('div');
        inputElem.classList.add('input');

        let label = document.createElement('label');
        label.innerHTML = 'Имя';
        label.setAttribute('for', 'user');

        let input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', 'input1');
        input1.setAttribute('name', 'user');
        
        contentElem.append(inputElem);
        inputElem.append(label);
        inputElem.append(input1);

        //------------------------------------------------------------

        let inputElem2 = document.createElement('div');
        inputElem2.classList.add('input');

        let label2 = document.createElement('label');
        label2.innerHTML = 'Телефон';
        label2.setAttribute('for', 'phone');

        let input2 = document.createElement('input');
        input2.setAttribute('type', 'number');
        input2.setAttribute('id', 'input2');
        input2.setAttribute('name', 'phone');
        
        contentElem.append(inputElem2);
        inputElem2.append(label2);
        inputElem2.append(input2);
        
        //-------------------------------------------------
        
        let inputElem3 = document.createElement('div');
        inputElem3.classList.add('input');

        let label3 = document.createElement('label');
        label3.innerHTML = 'Email';
        label3.setAttribute('for', 'email');

        let input3 = document.createElement('input');
        input3.setAttribute('type', 'text');
        input3.setAttribute('id', 'input3');
        input3.setAttribute('name', 'email');
        
        contentElem.append(inputElem3);
        inputElem3.append(label3);
        inputElem3.append(input3);

        // ----------------------------------------------------
        
        let inputElem4 = document.createElement('div');
        inputElem4.classList.add('input');

        let label4 = document.createElement('label');
        label4.innerHTML = 'Адрес';
        label4.setAttribute('for', 'address');

        let input4 = document.createElement('input');
        input4.setAttribute('type', 'text');
        input4.setAttribute('id', 'input4');
        input4.setAttribute('name', 'address');
        
        contentElem.append(inputElem4);
        inputElem4.append(label4);
        inputElem4.append(input4);

        let button = document.createElement('button');
        button.classList.add('button');
        button.innerHTML = 'Добавить';
        button.setAttribute('id', 'submit');

        contentElem.append(button);

        let output = document.createElement('div');
        output.classList.add('output');
        button.setAttribute('id', 'output');
        wrapperElem.append(output);

        let ulElem = document.createElement('ul');
        ulElem.classList.add('list');
        output.append(ulElem);

        let footerElem = document.createElement('div');
        footerElem.classList.add('footer');
        contactsElem.append(footerElem);
        
        button.addEventListener('click', _ => {
            if (this.onAdd()) {
                input1.value = '';
                input2.value = '';
                input3.value = '';
                input4.value = '';
            };
            
            this.update();
            
        });

        //----------------------------------------------------------

        this.inputName = input1;
        this.inputPhone = input2;
        this.inputEmail = input3;
        this.inputAdress = input4;
        this.ulElem = ulElem;

        let localDataExp = this.getCookie('localDataExp');
        if (!localDataExp) this.storage = [];

        if (this.storage.length > 0) {
            
            this.storage.forEach(user => {
                this.add(user.data);

            })
        }

        this.update();

    }
  

}


new ContactsApp();