let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
// Display inside HTML
function displayHtml( element, index, array)
{
   let pId,textId;
   pId= document.createElement("P");
   textId= document.createTextNode(element);  
   pId.appendChild(textId);
   document.body.appendChild(pId);
   if ((element =="Samedi") ||  (element =="Dimanche"))
   {
      pId.style.fontWeight = "Bold"; 
   }   // To have all array items...
   return true;
}
days.every(displayHtml);