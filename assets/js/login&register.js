
window.onload= function(){
    cartClicked=0;


     // storing input from register-form
         users = [];
    // on click Sign In Button checks with the remote server that username =='admin' and password == 'password'
    $("#rgstr_btn").click(function(){

                var usrName = $("#uName").val();
                var usrPw = $("#uPw").val();

                let stored_users = JSON.parse(localStorage.getItem('users'));
                if(stored_users) {
                    stored_users.push({name: usrName, password: usrPw});
                    localStorage.setItem('users', JSON.stringify(stored_users));
                } else {
                    localStorage.setItem('users', JSON.stringify([{name: usrName, password: usrPw}]));
                }
                alert(' succes registration. Now you can log in!');
                window.open("login.html");
               // Register(usrName);
          
            });


    $("#login_btn").click(function(){
        var usrName = $("#uNameIN").val();
    var usrPw = $("#uPwIN").val();
    let stored_users = JSON.parse(localStorage.getItem('users'))
    if (stored_users) {
    for (let u = 0; u < stored_users.length; u++){

        if( usrName ==stored_users[u].name  && usrPw == stored_users[u].password) {
                
                    alert("Hello "+ usrName);
     
                    window.open("index.html");
                    localStorage.setItem("login" , "1");
                    localStorage.setItem("username" , usrName);
                    return;


        }
        
    }
}
else{
    localStorage.setItem('users', '[]');

}

    return  alert("please try again, you email or password wrong");
    

        });
         

      
    $("#logoutuser").click(function(event){
        test=0;
        localStorage.removeItem("login");
        localStorage.removeItem("cartClicked")
        window.location.reload();
    });

    $("#addcart").click(function(){ 
    
        alert("i am here");
        var FullName =$('#myimage').attr('name');
        var title=FullName.split('$')[0];
        var imgsrc = $('#myimage').attr('src');
        var price=FullName.split('$')[1];
        id=1;


        alert(imgsrc);

        cartClicked=1;

        /*var products = Array();
        var data = {
            productId:id ,
            cartIsclicked: cartClicked,
            NameOfProduct: title,
            priceOfProduct: price,
            imgSourseProduct: imgsrc 
          };

        products.push(data);
  
      localStorage.setItem('products', JSON.stringify(this.products));

       var result = JSON.parse(localStorage.getItem('products'));
        console.log(result)
*/
       // ​var products = { productId:id , cartIsclicked: cartClicked , NameOfProduct: title, priceOfProduct: price, imgSourseProduct: imgsrc }​​​​​​​;
       // localStorage.setItem("products", JSON.stringify(products));
      //  var test2 = localStorage.getItem("products");
      //  test = JSON.parse(test2); //var test is now re-loaded!
       
      //  console.log(test);
        //localStorage.setItem("productss", JSON.stringify(productss));
  
        var products=Array();
        products.push(id ,cartClicked,title,price,imgsrc);
      localStorage.products += JSON.stringify({ "productId":id, "cartclicked": cartClicked, "NameOfProduct": title, "priceOfProduct": price, "imgSourseProduct": imgsrc });
 


        id++;
        cartClicked=1;
        localStorage.setItem("cartClicked" , 1);
       window.open("cart.html");

    });
    
   


};
    






     