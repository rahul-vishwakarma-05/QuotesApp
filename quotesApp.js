const api     = 'https://type.fit/api/quotes';
const btn     = document.querySelector('.btn');
const text    = document.querySelector('.text');
let realData  = '';
const writter = document.querySelector('.writter');

newQuotes = () =>{
    const random_num = Math.random() * 1000;
    const final_num  = Math.floor(random_num);
    text.innerText = `${realData[final_num].text}`;
    writter.innerText = `${realData[final_num].author}`;


    if (realData[final_num].author === null) {
    writter.innerText = `${realData[final_num].author = "unkown"}`;   
    }
};


const getQuotes = async () => {
    try {
        let data = await fetch(api);
          realData = await data.json();
          newQuotes(); 
    } catch (error) {
        alert('error')
    }
}

getQuotes();

btn.addEventListener('click' , () =>{
  newQuotes();
});