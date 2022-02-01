class Stage2 {
    constructor() { 
        this.access4 = createInput("Code4")
        this.access4.position(100,90);
        this.access4.style("white");  

        this.button4 = createButton('Check4');
        this.button4.position(100,120);
        this.button4.style("lightgrey");    

        this.access5 = createInput("Code5")
        this.access5.position(700,190);
        this.access5.style("white");  

        this.button5 = createButton('Check5');
        this.button5.position(700,220);
        this.button5.style("lightgrey");

        this.access6 = createInput("Code6")
        this.access6.position(100,290);
        this.access6.style("white");  

        this.button6 = createButton('Check6');
        this.button6.position(100,320);
        this.button6.style("lightgrey");

    }
    display2() {
        // console.log("display stage 2")
        this.button4.mousePressed(() => {
            console.log("btn 4 was clicked");
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            console.log("btn 5 was clicked");
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

        this.button6.mousePressed(() => {
            console.log("btn 6 was clicked");
            if(system.authenticate(accessCode6,this.access6.value())){
          
                this.button6.hide();
                this.access6.hide();

                score++;
            }
        });
    }
 
    
}