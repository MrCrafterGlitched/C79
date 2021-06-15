Student_array=[];
function submit(){
    var name_1=document.getElementById("Name1").value;
    Student_array.push(name_1)
    var name_2=document.getElementById("Name2").value;
    Student_array.push(name_2)
    var name_3=document.getElementById("Name3").value;
    Student_array.push(name_3)
    var name_4=document.getElementById("Name4").value;
    Student_array.push(name_4)
    document.getElementById("Output").innerHTML=Student_array
    document.getElementById("Button_submit").style.display="none"
    document.getElementById("Button_sort").style.display="inline-block"
}
function sorting(){
    Student_array.sort();
    document.getElementById("Output").innerHTML=Student_array
}