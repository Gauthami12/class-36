class Form{
    constructor(){}
    
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(430,150);

        var input = createInput("");
        var button = createButton("play");
        var greetings = createElement("h3");

        input.position(450,200);
        button.position(450,250);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            player.update(name);

            player.updateCount(playerCount);
            greetings.html("Hello " + name);
            greetings.position(450,250);
        });
    }
}