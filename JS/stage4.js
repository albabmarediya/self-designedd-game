class Stage4{
    constructor() {
        this.access10 = createInput("Code10")
        this.access10.position(100,90);
        this.access10.style("white");  

        this.button10 = createButton('Check10');
        this.button10.position(100,120);
        this.button10.style("lightgrey");    

        this.access11 = createInput("Code11")
        this.access11.position(700,190);
        this.access11.style("white");  

        this.button11 = createButton('Check11');
        this.button11.position(700,220);
        this.button11.style("lightgrey");

        this.access12 = createInput("Code12")
        this.access12.position(100,290);
        this.access12.style("white");  

        this.button12 = createButton('Check12');
        this.button12.position(100,320);
        this.button12.style("lightgrey");

    }
    display4() {
        // console.log("display stage 3")
        this.button10.mousePressed(() => {
            console.log("btn 10 was clicked");
            if(system.authenticate(accessCode10,this.access10.value())){
                this.button10.hide();
                this.access10.hide();
                score++;
            }
        });

        this.button11.mousePressed(() => {
            console.log("btn 11 was clicked");
            if(system.authenticate(accessCode11,this.access11.value())){
                this.button11.hide();
                this.access11.hide();
                score++;
            }
        });

        this.button12.mousePressed(() => {
            console.log("btn 12 was clicked");
            if(system.authenticate(accessCode12,this.access12.value())){
          
                this.button12.hide();
                this.access12.hide();

                score++;
            }
        });
    }
}