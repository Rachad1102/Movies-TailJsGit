const search_input = document.getElementById('search_input');
const search_btn = document.getElementById('search_btn');

search_btn.addEventListener('click', ()=>{
  if(search_input.classList.contains('invisible')){
    
    search_input.classList.remove('invisible');
    search_input.classList.add('visible');
  } else{
    search_input.classList.add('invisible');
    search_input.classList.remove('visible');
  }
});