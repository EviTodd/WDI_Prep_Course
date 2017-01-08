
//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
       var reply = 'You need to make some options using if/else'

    if(choice == 2){
        console.log('There is a good chance');
    } else if (choice <= 1){
        console.log('Maybe');
    }else {
        console.log('Not in your wildest dreams');
    }
        console.log(choice);
    

    
}

ask(); 