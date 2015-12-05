var args = arguments[0] || {};
function login(e)
{
	
	
	var username=$.u.getValue();
	var password=$.p.getValue();
	
	var xhr=Ti.Network.createHTTPClient();
	xhr.onload=function(e)
	{
		alert(this.responseText);
		
		
		var xhr=Ti.Network.createHTTPClient();
		xhr.onload=function(e)
		{
			
			Alloy.Globals.u.title="User:    "+this.responseText;
			
			
		};
		
		xhr.open('POST','http://localhost:1337/user/getUsername');
		xhr.send({ 
			
		});
		
		
		
	};
	
	xhr.open('POST','http://localhost:1337/user/loginMobile' );
	xhr.send({
		'username':username,
		'password':password
	});
	
}