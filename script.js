$(".upload").click(function(){
    console.log("Reached the handler");
    let roll=$("#rollno").val();
    let name=$("#name").val();
    let marks=$("#marks").val();
    if(roll===""||name===""||marks===""){
        alert("All fields are necessary");
    }
    else{
        $("#logs").append('<div>Roll no -<span>'+roll+'</span>, <span>'+name+'</span> has scored <span>'+marks+'</span> marks');
    }
});