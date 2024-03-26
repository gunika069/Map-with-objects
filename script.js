let Persons = [
  {  name : 'John',
    age : 30,
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=sph"
}
,
{
    name : 'Jane',
    age : 25,
    image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"   
}
,
{
    name : 'Mary',
    age : 20,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"   
}
,
{
    name : 'Peter',
    age : 15 ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw2xykdQcOtky0m0WJqT1cJGNk1cJACn9ia8ElahdmA&s"   
}
,
{
    name : 'Jayson',
    age : 28,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU"   
}

]
let Main = document.getElementById('Main');
Persons.map((e)=>{
     Main.innerHTML = `<div class='Card'>
     <img src='${e.image}'>
     <h2>${e.name}</h2>
     <p>${e.age}</p>
 </div>`
});