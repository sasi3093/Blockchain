function Login()
{
	
	var UID = ["preuser","banker","valuer","soliciter","underwriter","customer"];
	var PWD = ["pwd","pwd1","pwd2","pwd3","pwd4","pwd5"];
	
  var exist="NO";
  var uname = document.getElementById("Username").value;
  var pwd = document.getElementById("password").value;
  var loginuser= document.getElementById("loginuser").value;
  for (var i=0;i<UID.length;i++)
	{
	if (uname.trim() == UID[i].trim() && pwd.trim() == PWD[i].trim())
	{					
			if (loginuser=="PreUser" && uname=="preuser")
			{
			//alert("prequalification_user.html");
			location.href="/prequalification-user-view-prospect.html"; 
			//window.location="/prequalification_user.html"
			}
			else if(loginuser=="Banker" && uname=="banker")
			{
			location.href="/banker-view-prospect.html";
			}
			else if(loginuser=="Valuer" && uname=="valuer")
			{
			location.href="/valuer-view-prospect.html";
			}
			else if(loginuser=="Soliciter" && uname=="soliciter")
			{
			location.href="/solictor-view-prospect.html";
			}
			else if(loginuser=="UnderWriter" && uname=="underwriter")
			{
			location.href="/underwriter-view-prospect.html";
			}
			else if(loginuser=="Customer" && uname=="customer")
			{
				location.href="/customer.html";
			}
		else{
                  document.getElementById("sub").style.visibility = "visible";
              }

			
			exist="YES";
			localStorage.setItem('A_username',uname.trim());
	//alert("A_username",+A_username);
			return true;
	}	
	} 
  	if(exist=="NO")
	{	
			  document.getElementById("sub").innerHTML="Please Enter a valid Username and Password";
			  document.getElementById('sub').style.visibility="visible";
			  return false;		
	}  
	else
  	{
  		return true;
  	}
  	
  }

function getParams(){
	//alert("value");
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
	      alert("index" + idx);
	      alert("url length" + document.URL.length);
	var pairs = document.URL.substring(idx+1, document.URL.length).split('&'); 
	alert("pairs" + pairs);
	for (var i=0; i<pairs.length; i++){ 
	nameVal = pairs[i].split('=');
	alert("nameval " +nameVal); 
	params[nameVal[0]] = nameVal[1];
	}
	var firstname=params[nameVal[0]];
	document.getElementById("name").innerHTML=("welcome" +'    '+ params[nameVal[0]]);
	}
}
function formatAMPM() {
	//alert("farawe");
	var storedName = localStorage.getItem('A_username');

var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    document.getElementById("date").innerHTML= days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes;
	//alert("date");
}