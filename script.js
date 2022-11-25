const form = document.querySelector('.form');
let ul = document.querySelector('ul');
let button = document.querySelector('button');
let svg = document.querySelector('svg');
    button.addEventListener('click', (event) => {
        event.preventDefault();
            let row = document.createElement('li');
            ul.append(row);
            row.innerHTML = `<input type="text"><i class="fa-regular fa-circle-xmark"></i>`;
            let allRow = Array.from(document.querySelectorAll('li'));
            let rowAll = Array.from(document.querySelectorAll('i'));
            let input = Array.from(document.querySelectorAll('input'));
            svg.onclick = function(){
                let newArr = [];
                input.forEach((item)=>{
                    newArr.push(item.value);
                    newArr.sort();
                }); 
                for(let i=0;i<newArr.length;i++){
                    input[i].value = newArr[i];
                }}
            rowAll.forEach((item)=>{
                item.onclick = function(){
                    item.parentElement.remove();
                }
            })
    });