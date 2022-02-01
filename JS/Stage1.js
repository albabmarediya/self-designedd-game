class Stage1 {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style("white");  

        this.button1 = createButton('Check1');
        this.button1.position(100,120);
        this.button1.style("lightgrey");    

        this.access2 = createInput("Code2")
        this.access2.position(700,190);
        this.access2.style("white");  

        this.button2 = createButton('Check2');
        this.button2.position(700,220);
        this.button2.style("lightgrey");

        this.access3 = createInput("Code3")
        this.access3.position(100,290);
        this.access3.style("white");  

        this.button3 = createButton('Check3');
        this.button3.position(100,320);
        this.button3.style("lightgrey");

    }

    display1(){
        // console.log("display stage 1");
        this.button1.mousePressed(() => {
            console.log("Btn 1 was clicked");
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            console.log("btn 2 was pressed");
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            console.log("Btn 3 was clicked");
            if(system.authenticate(accessCode3,this.access3.value())){
          
                this.button3.hide();
                this.access3.hide();

                score++;
            }
        });
    }
   
}