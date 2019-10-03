function setup() {
    // Put things you want to run once in here. 
    createCanvas(730,730)
    strokeWeight(1)

    a = 800;
    w = -150; 
    s = 0; // ysed to scale circle
    t = -700;

  }
  
  function draw(){
    // Put things you want to over and over here. 

        background(207,54,50);
        stroke(234,140,99)
        strokeWeight(2)
        for (var i = 0; i < 800; i += 10) {
            
        line(i, 0, i, 800);
        }

        
        // large circle 
        stroke(234,140,99)
        fill(207,54,50)
        circle(370,360,500)
        
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

      //lines in circle 
        stroke(234,140,99)
      line(300,120,439,120)
      line(270,130,470,130)
      line(250,140,487,140)
      line(235,150,505,150)
      line(220,160,520,160)
      line(209,170,532,170)
      line(197,180,542,180)
      line(187,190,553,190)
      
        line(150,200,560,200)
        line(170,210,570,210)
        line(180,220,576,220)
        line(190,230,582,230)
        line(200,240,590,240)
        line(145,250,595,250)
        line(140,260,600,260)
        line(137,270,602,270)
        line(133,280,606,280)
        line(130,290,610,290)
        line(128,300,613,300)
        line(125,310,615,310)
        line(123,320,616,320)
        line(120,330,619,330)
        line(120,340,620,340)
        line(120,350,620,350)
        line(120,360,620,360)
        line(120,370,620,370)
        line(120,380,620,380)
        line(120,390,620,390)
        line(123,400,616,400)
        line(125,410,615,410)
        line(128,420,613,420)
        line(130,430,610,430)
        line(133,440,606,440)
        line(137,450,602,450)
        line(140,460,600,460)
        line(145,470,595,470)
        line(150,480,590,480)
        line(157,490,585,490)
        line(163,500,580,500)
        line(170,510,583,510)
        line(180,520,583,520)
        line(187,530,570,530)
        line(197,540,563,540)
        line(209,550,555,550)
        line(220,560,500,560)
        line(235,570,500,570)
        line(250,580,500,580)
        line(270,590,470,590)
        line(300,600,439,600)


        
        //function chord(){
           // let angle1 = random(0,2*PI);
           // let xpos1 = 370
        //}

        // rectangles 
        stroke(234,140,99)
        
        fill(207,40,50)

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
 
   //moving orange line   
   for(var c = 1; c <120; c+= 1){
   rotate(PI/c) 
        stroke(4,28,300)
        line(t ,-900,t,900)
        t = t +.004;
        if (t > 800){
            t = -700
        }
      }

    }
