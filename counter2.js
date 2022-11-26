
    incBtn = document.getElementsByClassName('btn-inc')[0];
    decBtn = document.getElementsByClassName('btn-dec')[0];
    number = document.getElementById('number');
    clear = document.getElementsByClassName('btn-clr')[0];
    element = document.getElementById("Error");


    incBtn.addEventListener('click',function(){
      if(number.innerHTML == 0){
        element.innerHTML = '';       
      }
      number.innerHTML = parseInt(number.innerHTML)+1;
    });
    
    decBtn.addEventListener('click',function(){
      if(number.innerHTML == 0 ){
        element.innerHTML = "Error : Cannot go below 0 ";     
      }
      else{
        number.innerHTML = parseInt(number.innerHTML)-1;
      }
    });
    clear.addEventListener('click',function(){
      if(number.innerHTML == 0){
        element.innerHTML = 'Error : Unable to clear as lower limit is 0';
      }
      number.innerHTML = 0;
    });
