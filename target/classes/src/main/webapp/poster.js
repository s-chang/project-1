document.getElementById("posts").addEventListener("load", getPosts());

function getPosts(){
	let xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//TODO: have each post create its own div
			document.getElementById("posts").innerHTML = xhr.responseText;
		}
	}
	
	xhr.open('GET', '/testwebapp/HomePageServlet');
	xhr.send();	
}

document.querySelector('body').addEventListener('click', function(e){
	if(event.target.tagName.toLowerCase() === 'div'){
		//TODO: forward to Post with replies
	}
});