var todo = 4;

function book_1() {
    var x = document.getElementById("book_1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      todo= todo-1;
      document.getElementById("book_left").innerHTML = todo;
    }
  }

  function book_2() {
    var x = document.getElementById("book_2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      todo= todo-1;
      document.getElementById("book_left").innerHTML = todo;
    }
  }


  function book_3() {
    var x = document.getElementById("book_3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      todo= todo-1;
      document.getElementById("book_left").innerHTML = todo;
    }
  }

  function book_4() {
    var x = document.getElementById("book_4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      todo= todo-1;
      document.getElementById("book_left").innerHTML = todo;
    }
  }
