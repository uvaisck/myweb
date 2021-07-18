function nameValidation()
{
    var name=document.getElementById("nameText").value
    var nameSpan=document.getElementById("nameSpan");
    var letters=/^[a-zA-Z\s]*$/;
    if(name=="")
    {
        nameSpan.innerHTML="Field is required"
        return false;
    }
    else if(name.match(letters))
    {
        nameSpan.innerHTML="";
        return true;
    }
    else
    {
        nameSpan.innerHTML="use only charecters"
        return false;
    }

}
function mobileValid()
{
    var mobile=document.getElementById("mobileText").value
    var mobileSpan=document.getElementById("mobileSpan");
    var letters=/^\d{10}$/;
    if(mobile=="")
    {
        mobileSpan.innerHTML="filed is required"
        return false;
    }
    else if(mobile.match(letters))
    {
        mobileSpan.innerHTML="";
        return true;
    }
    else 
    {
        mobileSpan.innerHTML="invalid mobile number";
        return false;

    }


}
function emailValid()
{
    var name=document.getElementById("emailText").value
    var emailSpan=document.getElementById("emailSpan");
    var letters= /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (name=="")
    {
        emailSpan.innerHTML="Filed is required"
        return false;
    }
    else if(name.match(letters))
    {
        emailSpan.innerHTML="";
        return true;
    }
    else{
        emailSpan.innerHTML="invalid email";
        return false;
    }
}
function MessageValid()
{
    var name=document.getElementById("MessageText").value
    var messageSpan=document.getElementById("MessageSpan");
    if (name=="")
    {
        messageSpan.innerHTML="filed is required"
        return false;
    }
    else if(name.length<=10)
    {
        messageSpan.innerHTML="Enter more than 10 charecter";
        return false;
    }
    else 
    {
        messageSpan.innerHTML="";
        return true;
    }
}

