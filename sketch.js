function setup() {
    // Put things you want to run once in here. 
    createCanvas(730,730)
    strokeWeight(1)

    a = 800;
    w = -150; 
    s = 0; // ysed to scale circle

  }
  
  function draw(){
    // Put things you want to over and over here. 

        background(207,54,50);
        stroke(234,140,99)
        strokeWeight(2)
        for (var i = 0; i < 800; i += 10) {
            
        line(i, 0, i, 800);
        }
// moving blue line
        stroke(4,28,300)
        line(a,-150,a,800)
        a = a - 1;
        if (a<-150){
            a = 800;
        }
   // moving orange line     
        stroke(4,28,300)
        line(w,-150,w,800)
        w = w +1;
        if (w > 800){
            w = -100
        }
        
        // large circle 
        stroke(234,140,99)
        fill(207,54,50)
        circle(370,360,500)
        
      //lines in circle 
        

        line(150,200,560,200)
        line(170,210,570,210)
        line(180,220,580,220)
        line(190,230,585,230)
        line(200,240,590,240)
        line(145,250,595,250)
        line(140,260,600,260)
        line(137,270,602,270)
        line(133,280,606,280)
        line(130,290,610,290)
        line(128,300,613,300)
        line(125,310,615,310)
        line(123,320,616,320)

        for(var i = 120; i < 600; i+= 10){
            
            line(250,i,250,i)
            }
        
        //function chord(){
           // let angle1 = random(0,2*PI);
           // let xpos1 = 370
        //}

        // rectangles 
        stroke(234,140,99)
        
        fill(192,53,92)

        strokeWeight(2);

        rect(20,20,80,80);

        
        for(var i = 30; i < 100; i+= 10){
        
            line(20,i,100,i)
            } 

        //translate the rectangel
        translate(120,120);

        rect(20,20,100,100);

        // ine in rectangle
        for(var i = 30; i < 120; i+= 10){
        
        line(20,i,120,i)
        } 


        //translate the rectangel
        translate(150,150);
 
        rect(20,20,150,150);

        // ine in rectangle
        for(var i = 30; i < 170; i+= 10){
        
        line(20,i,170,i)
        
        } 

  //translate the rectangel
  translate(200,200);
    
  rect(20,20,100,100);

  // ine in rectangle
  for(var i = 30; i < 120; i+= 10){
  
  line(20,i,120,i)
  } 
   
   //translate the rectangel
   translate(140,140);

   rect(20,20,80,80);
 
   // ine in rectangle
   for(var i = 30; i < 100; i+= 10){
   
   line(20,i,100,i)
   } 
   /*stroke(234,140,99)
   strokeWeight(2)
   for (var t = 0; t < 800; t += 10) {
     rotate(Pi + t) 
     print (8); 
   line(t, 0, t, 800);
   }  */ 
 
    }
