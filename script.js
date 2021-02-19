var loginBtn=document.getElementById("loginBtn");
        loginBtn.addEventListener('mouseover',function(event){
            console.log("Mouse Has Come Over");
        })
        loginBtn.addEventListener('mouseout',function(event){
            console.log("Mouse Has Gone");
        })
        loginBtn.addEventListener('click',function(event){
            console.log("Mouse Has Been Clicked");
            document.getElementById('loginBox').style.display="none";
            document.getElementById('submitBox').style.display="block";
        })
        //Withdraw Button
        var withdrawButton=document.getElementById('withdrawButton');
        withdrawButton.addEventListener('click',function(event){
            var withdraw=document.getElementById('withdraw').value;
            if(withdraw==""){
                alert("Enter your Amount to Withdraw")
            }else{
                withdraw=parseFloat(withdraw);
                console.log(withdraw);
                updateAmount(withdraw);
            }
            
        })

        function updateAmount(balance){
            var withdrawAmount=document.getElementById('withdrawAmount').innerText;
            withdrawAmount=parseFloat(withdrawAmount);
            
            var balanceAmount=document.getElementById('balanceAmount').innerText;
            balanceAmount=parseFloat(balanceAmount);

            if(balance<=balanceAmount){
                withdrawAmount+=balance;
                withdrawAmountField=document.getElementById('withdrawAmount');
                withdrawAmountField.innerText=withdrawAmount;

                balanceAmount-=balance;
                console.log(balanceAmount);
                var balanceAmountField=document.getElementById('balanceAmount');
                balanceAmountField.innerText=balanceAmount;
            }else{
                alert("You Don't Have Sufficient Balance");
            }
        }





        //deposit button
        var depositButton=document.getElementById('depositButton');
        depositButton.addEventListener('click',function(){
            var deposit=document.getElementById('deposit').value;
            if(deposit==""){
                console.log("Checked");
                document.getElementById('deposit').innerText=00;
            }else{
                deposit=parseFloat(deposit);
                update(deposit);
            }
            

            
        })

        function update(value){
            //inner existed value has taken
            var depositAmount=document.getElementById('depositAmount').innerText;
            // parsing the taken value from string to float
            depositAmount=parseFloat(depositAmount);
            //adding the input value
            depositAmount+=value;
             

            //conneting the span that shows the value
            var depositAmountField=document.getElementById('depositAmount')
            //updating the inner value
            depositAmountField.innerText=depositAmount;
            

            var balanceAmount=document.getElementById('balanceAmount').innerText;
            balanceAmount=parseFloat(balanceAmount);
            balanceAmount+=value;
            

            var balanceAmountField=document.getElementById('balanceAmount')
            balanceAmountField.innerText=balanceAmount;
            }