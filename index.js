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


   // Level 3 ------------------------------
   console.log("")
   console.log("Level 3: Search")
//    let input=prompt()
//    let result3 = names.filter( name=> name.toLowerCase().includes(input)
//        )
//    document.write(`keyword : ${input} </br> result : ${result3}` )
   
   // Level 4 ------------------------------
   console.log("")
   console.log("Level 4: Merge 2 arrays")
   const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
    const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

    let names3 = names1.concat(names2)
        console.log(names3)
