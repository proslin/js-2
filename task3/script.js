class Hamburger {
    constructor() {
      this.size=this.getSize();
      this.stuffing=this.getStuffing();
      this.dressing=[];
      this.getDressing();
      this.price=this.getPrice();
      this.calories=this.getCalories();
      
    }
  getSize() {
      return document.querySelector('input[name="size"]:checked').value;
  }

  getStuffing() {
    return document.querySelector('input[name="stuffing"]:checked').value;
  }

  getDressing() {
    let check=document.querySelectorAll('input[name="dressing"]');
    for (let i=0; i<check.length; i++) {
      if (check[i].checked) { 
      this.dressing.push(check[i].value);
    }
    }
  }

  getPrice() {
   let price=0;
   if (this.size=="small") {
     price+=50;
   } else if (this.size=="big") {
     price+=100;
   }
   switch(this.stuffing){
     case "cheese":
       price+=10;
       break;
      case "latuce":
        price+=20;
        break;
      case "french-frize":
        price+=15;
        break;   
   }
   for (let dressingEl of this.dressing) {
     if (dressingEl=="seasoning") {
       price+=15;
     } else if (dressingEl=="mayonnaise") {
       price+=20;
     }
   }
   return price;
  }


getCalories() {
  let calories=0;
  if (this.size=="small") {
    calories+=20;
  } else if (this.size=="big") {
    calories+=40;
  }
  switch(this.stuffing){
    case "cheese":
      calories+=20;
      break;
     case "latuce":
       calories+=5;
       break;
     case "french-frize":
       calories+=10;
       break;   
  }
  for (let dressingEl of this.dressing) {
    if (dressingEl=="seasoning") {
      calories+=0;
    } else if (dressingEl=="mayonnaise") {
      calories+=5;
    }
  }
  return calories;
 }
}

function myFunction() {
  const Hamb=new Hamburger();
  document.querySelector('.total').innerHTML = `<h3>Стоимость гамбургера ${Hamb.price}</h3>
                                                <h3>Калорийность ${Hamb.calories}</h3>`; 
console.log(Hamb);
}

function resetFunction() {
  document.querySelector('.total').innerHTML = "";
}

//const Hamb=new Hamburger(); 
//console.log(Hamb);