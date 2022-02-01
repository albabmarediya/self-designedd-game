class Stage5{
    constructor() {
        this.access13 = createInput("Code13")
        this.access13.position(100,90);
        this.access13.style("white");  

        this.button13 = createButton('Check13');
        this.button13.position(100,120);
        this.button13.style("lightgrey");    

        this.access14 = createInput("Code14")
        this.access14.position(700,190);
        this.access14.style("white");  

        this.button14 = createButton('Check14');
        this.button14.position(700,220);
        this.button14.style("lightgrey");

        this.access15 = createInput("Code15")
        this.access15.position(100,290);
        this.access15.style("white");  

        this.button15 = createButton('Check15');
        this.button15.position(100,320);
        this.button15.style("lightgrey");

    }
    display5() {
        // console.log("display stage 3")
        this.button13.mousePressed(() => {
            console.log("btn 13 was clicked");
            if(system.authenticate(accessCode13,this.access13.value())){
                this.button13.hide();
                this.access13.hide();
                score++;
            }
        });

        this.button14.mousePressed(() => {
            console.log("btn 14 was clicked");
            if(system.authenticate(accessCode14,this.access14.value())){
                this.button14.hide();
                this.access14.hide();
                score++;
            }
        });

        this.button15.mousePressed(() => {
            console.log("btn 15 was clicked");
            if(system.authenticate(accessCode15,this.access15.value())){
          
                this.button15.hide();
                this.access15.hide();

                score++;
            }
        });
    }
}