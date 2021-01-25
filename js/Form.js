class Form {

  constructor() {
    this.input = createInput().attribute('placeholder', 'NAME');
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    // var title = createElement('h2')
    // title.html("Car Racing Game");
    // title.position(width/2-20, 50);

    this.input.position(width/2-80, height/2.55);
    this.button.position(width/2-20, height/2.40);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(width/2-80, height/2.55);
    });

  }
}
