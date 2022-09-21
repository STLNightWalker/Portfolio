if (new Date().getHours() >= 00) {
    document.getElementById("greeting").innerHTML = "Good Morning,";
    if (new Date().getHours() >=12)
      document.getElementById("greeting").innerHTML = "Good Afternoon,";
        if (new Date().getHours() >=18)
      document.getElementById("greeting").innerHTML = "Good Evening,";
    
  }
  