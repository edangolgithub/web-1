


function xyz(callback)
{
 setTimeout(function(){ alert('working')} , 5000);
   callback();
}
function callback(){
    alert("work finish")
}
xyz(callback);