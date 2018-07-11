function loadJSON(file)
{
  return new Promise((resolve,reject)=>{
  return fetch(file).then(response=> {
    if(response.ok){
      resolve(response.json());
  }else {
    reject(new Error('error'));
  }
})
})
}
var newFile=loadJSON("data.json");
newFile.then(data=>{
  console.log(data);
    career(data.career);
    education(data.education);
    skills(data.skills);
    achivements(data.achivements);
})
var childtwo=document.querySelector(".childtwo");
function career(careerObj){
  var  careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerObj.info;
  childtwo.appendChild(careerP);
}
function education(edu){
  var  careerHeading=document.createElement("h2");
  careerHeading.textContent="education qualification";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
for(var i=0;i<edu.length;i++)
{
  var eduH3=document.createElement("h3");
  eduH3.textContent=edu[i].degree;
  childtwo.appendChild(eduH3);
  var eduU1=document.createElement("ul");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].institute;
  eduU1.appendChild(eduLi);
  childtwo.appendChild(eduU1);
  var eduU2=document.createElement("u1");
  var eduL2=document.createElement("l2");
  eduL2.textContent=edu[i].data;
  eduU2.appendChild(eduL2);
  childtwo.appendChild(eduU2);
}
}
function skills(sk)
{
  var  careerHeading=document.createElement("h2");
  careerHeading.textContent="skils";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr)
  var skilltable=document.createElement("table");
  skilltable.border="1";

    childtwo.appendChild(skilltable)
  var tabledata="";
  for(var i=0;i<sk.length;i++)
  {
    tabledata+="<tr><td>"+sk[i].title+"</td><td>"+sk[i].info+"</td></tr>"
  }
skilltable.innerHTML=tabledata;
}
function achivements(ac)
{
  var  careerHeading=document.createElement("h2");
  careerHeading.textContent="Achievements";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var ul=document.createElement("ul");
  childtwo.appendChild(ul);
  var li="";
  for(var i = 0;i<ac.length;i++)
  {
    li+="<li>"+ac[i].info;+"</li>";
    ul.innerHTML=li;
  }
}
