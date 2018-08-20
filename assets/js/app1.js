  var container = (function() {
    "use strict"

    var mybtn,myname,myprix,mydesc,myList = [], td, tr, tbody, td1,
    td2, td3, td4, td5, newRef, maRef, i, newButton, reset, erreur, tr_a_supp, td_a_supp ;

    var createObject = function (clbk, n, p, d) {
        return {
          ref : clbk(),
          name: n,
          prix: p,
          desc: d,
        };
    };


    var getRef = function() {
      newRef = Math.floor(Math.random()* (10000 - 1001) + 1001);
      return newRef;
    }

    var createNewLine = function(e){
      if(myname.value === "" || mydesc.value ==="" || myprix.value ===""){
        erreur = document.querySelector(".alert");
        erreur.innerHTML="veuillez remplir tous les champs";
        erreur.classList.add("alert-danger");
      } else {
        if(myprix.value <0) {
          erreur = document.querySelector(".alert");
          erreur.innerHTML="Le prix doit être supérieur à 0";
          erreur.classList.add("alert-danger");
        }
        else {
          myList.push(createObject(getRef, myname.value,myprix.value,mydesc.value));
          // erreur.remove();
          affHTML();
          console.log(myList);

        }

      }
        e.preventDefault();

    };

    var parcourirTableau = function (){
      for (i = myList.length - 1 ; i < myList.length; i += 1){
          maRef = myList[i].ref;
      }
      return maRef;
    };

  var supprLigneTableau = function(){


      myList.forEach(function(e, index){
        console.log(e.ref.textContent);
        console.log(tr_a_supp.childNodes[0]);
        if(tr_a_supp.childNodes[0] == e.ref.value)
        {

          console.log("hello");
        }

      });
      // console.log(myList);
    };


  var supprLigne = function() {

    td_a_supp = this.parentNode;
    tr_a_supp = td_a_supp.parentNode;

    tr_a_supp.remove();

    supprLigneTableau();



  };


    var affHTML = function() {
        tbody = document.getElementById("body");
        tr = document.createElement("tr");
        var tr_td = tbody.appendChild(tr);

        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        td5 = document.createElement("td");

        tr_td.appendChild(td1);
        tr_td.appendChild(td2);
        tr_td.appendChild(td3);
        tr_td.appendChild(td4);
        tr_td.appendChild(td5);
        td1.innerHTML= parcourirTableau();
        td2.innerHTML= myname.value;
        td3.innerHTML= myprix.value;
        td4.innerHTML= mydesc.value;

        newButton = document.createElement("button");
        newButton.innerHTML = "supprimer"
        td5.appendChild(newButton);
        newButton.addEventListener("click", supprLigne)


    };



   var start = function(){
    mybtn = document.getElementById('mybtn');
    myname = document.getElementById('myname');
    myprix = document.getElementById('myprix');
    mydesc = document.getElementById('mydesc');
    mybtn.addEventListener('click',createNewLine)
   }

  window.addEventListener("DOMContentLoaded", start)

  }());
