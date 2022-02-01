class Stage3{
    constructor() {
        this.access7 = createInput("Code7")
        this.access7.position(100,90);
        this.access7.style("white");  

        this.button7 = createButton('Check7');
        this.button7.position(100,120);
        this.button7.style("lightgrey");    

        this.access8 = createInput("Code8")
        this.access8.position(700,190);
        this.access8.style("white");  

        this.button8 = createButton('Check8');
        this.button8.position(700,220);
        this.button8.style("lightgrey");

        this.access9 = createInput("Code9")
        this.access9.position(100,290);
        this.access9.style("white");  

        this.button9 = createButton('Check9');
        this.button9.position(100,320);
        this.button9.style("lightgrey");

    }
    display3() {
        // console.log("display stage 3")
        this.button7.mousePressed(() => {
            console.log("btn 7 was clicked");
            if(system.authenticate(accessCode7,this.access7.value())){
                this.button7.hide();
                this.access7.hide();
                score++;
            }
        });

        this.button8.mousePressed(() => {
            console.log("btn 8 was clicked");
            if(system.authenticate(accessCode8,this.access8.value())){
                this.button8.hide();
                this.access8.hide();
                score++;
            }
        });

        this.button9.mousePressed(() => {
            console.log("btn 9 was clicked");
            if(system.authenticate(accessCode9,this.access9.value())){
          
                this.button9.hide();
                this.access9.hide();

                score++;
            }
        });
    }
}