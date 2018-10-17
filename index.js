const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
  ];

  // Level 0 ------------------------------
  console.log("Level 0 : Display All Name")
  names.forEach(
      function(name){
          console.log(name)
      }
  )

  // Level 1 ------------------------------
  console.log("")
  console.log("Level 1: Diplay All Mr.")

  let result1 = names.filter(function(name){
      return name.charAt(2) == "."
  })
  console.log(result1)

   // Level 2 ------------------------------
   console.log("")
   console.log("Level 2: Identify Gender")
   let result2 =[] ;
   names.forEach(function (name){
       if (name.charAt(2) == "."){
        result2.push(name+" (male)")
       } 
    else if (name.charAt(2) == "s"){
        result2.push(name+" (female)")        
    }
   })
   console.log(result2)