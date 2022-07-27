class playSound {
    constructor (sourat){
        this.sourat = new Audio(sourat);
    }

    play(){
        this.sourat.play();
    }

    stop(){
        this.sourat.load();
    }
}

let kamr = new playSound("القمر.mp3");
let shams = new playSound("الشمس.mp3");
let sama = new playSound("السماء.mp3");