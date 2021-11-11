let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

let headerTitle = document.createElement('h2');
headerTitle.classList.add('headerTitle');
headerTitle.innerHTML = 'Choose Your Option';
container.append(headerTitle);

let headerSubtitle = document.createElement('p');
headerSubtitle.classList.add('headerSubtitle');
headerSubtitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
container.append(headerSubtitle);

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
container.append(wrapper);

let block_1 = document.createElement('div');
block_1.classList.add('block_1');
wrapper.append(block_1);

let freelancer = document.createElement('p');
freelancer.classList.add('freelancer');
freelancer.innerHTML = 'freelancer';
block_1.append(freelancer);

let initially = document.createElement('h3');
initially.classList.add('initially');
initially.innerHTML = 'Initially designed to';
block_1.append(initially);

let blockTitle = document.createElement('p');
blockTitle.classList.add('blockTitle');
blockTitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
block_1.append(blockTitle);

let button = document.createElement('a');
button.classList.add('button');
button.innerHTML = 'start here';
block_1.append(button);

button.setAttribute('href', '#');

let block_2 = block_1.cloneNode(true);
wrapper.append(block_2);
block_2.querySelector('.freelancer').innerHTML = 'studio';


let style = document.createElement('style');
document.head.append(style);


style.innerHTML = `* {
    padding: 0;
    margin: 0;

}

.container{
    margin: 0 30%;
    text-align: center; 
    margin-top: 90px; 
}


.wrapper{
    display: flex;
    border: 1px solid rgb(233, 232, 232);
    border-radius: 6px;
    
}


.block_1:last-child {
    border-left: 1px solid #E5E5E5;

}


.block_1:hover {
    background-color: #8F75BE;
    color: #ffffff;
}


.block_1:hover .freelancer{
    color: #FFC80A;
} 


h2 {
    margin-bottom: 20px;
    letter-spacing: 2px;
    font-size: 24pt;

}


.freelancer {
    margin-top: 70px;
    text-transform:uppercase;
    font-size: x-small;
    letter-spacing: 3px;

}


.initially {
    letter-spacing: 2px;
    font-size: 30px;
    margin: 0 50px;
    margin-bottom: 30px;

}


.blockTitle {
    margin: 0 50px;
    margin-bottom: 50px;

}


p {
    margin-bottom: 30px;
    color: rgb(138, 136, 136);
    font-size: small;
    line-height: 25px;
    
}


.button {
    margin-bottom: 80px;
    display: inline-block;
    padding: 12px 25px;
    border-radius: 25px;
    border: 3px solid rgb(240, 197, 58);
    color: black;
    font-weight:600;
    font-size: 12px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    
} 


.block_1:hover .blockTitle,
.block_1:hover .button {
    color: #ffffff;

}`;















