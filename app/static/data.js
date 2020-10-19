(function(global){
    var data = {};

    data["10dp"] = {
        "max":30, "data":[
            //leck 1 
            {"x":250,"y":5,"count":1}, //middle
            
            {"x":250,"y":80,"count":1},{"x":250,"y":80,"count":1},{"x":250,"y":80,"count":1}, //middle top bottom

            {"x":270,"y":90,"count":1},{"x":270,"y":80,"count":1},{"x":270,"y":90,"count":1},{"x":270,"y":80,"count":1}, //right
            {"x":280,"y":170,"count":1},{"x":280,"y":130,"count":1},{"x":280,"y":180,"count":1},{"x":280,"y":210,"count":1}, //righ edge

            {"x":230,"y":150,"count":1},{"x":230,"y":130,"count":1},{"x":230,"y":180,"count":1},{"x":230,"y":210,"count":1}, //left
           {"x":220,"y":150,"count":1},{"x":220,"y":130,"count":1},{"x":220,"y":180,"count":1},{"x":220,"y":210,"count":1}, //left edge

            //leck 2
            // {"x":340,"y":150,"count":1}, //middle

            // {"x":340,"y":120,"count":1},{"x":340,"y":180,"count":1},{"x":340,"y":210,"count":1}, //middle top bottom

            // {"x":360,"y":170,"count":1},{"x":360,"y":130,"count":1},{"x":360,"y":180,"count":1},{"x":360,"y":210,"count":1}, //right
            // {"x":370,"y":170,"count":1},{"x":370,"y":130,"count":1},{"x":370,"y":180,"count":1},{"x":370,"y":210,"count":1}, //rightedge

            // {"x":320,"y":150,"count":1},{"x":320,"y":130,"count":1},{"x":320,"y":180,"count":1},{"x":320,"y":210,"count":1}, //left
            // {"x":310,"y":150,"count":1},{"x":310,"y":130,"count":1},{"x":310,"y":180,"count":1},{"x":310,"y":210,"count":1}, //left edge

        ]
    };
    data["100dp"] = {
        "max":1,"data":[{"x":38,"y":20,"count":2},{"x":38,"y":690,"count":3},{"x":48,"y":30,"count":1},{"x":48,"y":40,"count":1},{"x":48,"y":670,"count":1},{"x":58,"y":640,"count":1},{"x":58,"y":680,"count":1},{"x":67,"y":630,"count":1},{"x":86,"y":10,"count":1},{"x":86,"y":660,"count":1},{"x":96,"y":0,"count":1},{"x":96,"y":80,"count":1},{"x":96,"y":530,"count":1},{"x":96,"y":540,"count":2},{"x":96,"y":560,"count":1},{"x":96,"y":620,"count":1},{"x":96,"y":640,"count":1},{"x":105,"y":530,"count":1},{"x":105,"y":560,"count":3},{"x":105,"y":590,"count":1},{"x":105,"y":610,"count":1},{"x":115,"y":300,"count":1},{"x":115,"y":310,"count":4},{"x":125,"y":260,"count":1},{"x":125,"y":280,"count":1},{"x":125,"y":300,"count":1},{"x":125,"y":500,"count":1},{"x":125,"y":530,"count":1},{"x":134,"y":250,"count":1},{"x":134,"y":260,"count":1},{"x":134,"y":280,"count":1},{"x":144,"y":40,"count":1},{"x":144,"y":260,"count":1},{"x":144,"y":270,"count":4},{"x":144,"y":320,"count":1},{"x":144,"y":330,"count":1},{"x":153,"y":220,"count":1},{"x":163,"y":280,"count":1},{"x":173,"y":120,"count":2},{"x":182,"y":80,"count":1},{"x":182,"y":120,"count":2},{"x":192,"y":10,"count":1},{"x":192,"y":120,"count":1},{"x":192,"y":130,"count":2},{"x":192,"y":190,"count":1},{"x":192,"y":530,"count":1},{"x":201,"y":120,"count":2},{"x":201,"y":130,"count":1},{"x":201,"y":150,"count":1},{"x":201,"y":190,"count":1},{"x":201,"y":240,"count":1},{"x":201,"y":280,"count":1},{"x":201,"y":290,"count":1},{"x":201,"y":340,"count":1},{"x":201,"y":390,"count":3},{"x":201,"y":400,"count":2},{"x":201,"y":420,"count":1},{"x":201,"y":670,"count":1},{"x":201,"y":710,"count":1},{"x":201,"y":750,"count":1},{"x":211,"y":160,"count":2},{"x":211,"y":280,"count":1},{"x":211,"y":320,"count":1},{"x":211,"y":340,"count":1}]
    };
    data["1000dp"] = {"max":18,"data":[{"x":38,"y":20,"count":2},{"x":38,"y":690,"count":3},{"x":48,"y":30,"count":1},{"x":48,"y":40,"count":1},{"x":48,"y":670,"count":1},{"x":58,"y":640,"count":1},{"x":58,"y":680,"count":1},{"x":67,"y":630,"count":1},{"x":86,"y":10,"count":1},{"x":86,"y":660,"count":1},{"x":96,"y":0,"count":1},{"x":96,"y":80,"count":1},{"x":96,"y":530,"count":1},{"x":96,"y":540,"count":2},{"x":96,"y":560,"count":1},{"x":96,"y":620,"count":1},{"x":96,"y":640,"count":1},{"x":105,"y":530,"count":1},{"x":105,"y":560,"count":3},{"x":105,"y":590,"count":1},{"x":105,"y":610,"count":1},{"x":115,"y":300,"count":1},{"x":115,"y":310,"count":4},{"x":125,"y":260,"count":1},{"x":125,"y":280,"count":1},{"x":125,"y":300,"count":1},{"x":125,"y":500,"count":1},{"x":125,"y":530,"count":1},{"x":134,"y":250,"count":1},{"x":134,"y":260,"count":1},{"x":134,"y":280,"count":1},{"x":144,"y":40,"count":1},{"x":144,"y":260,"count":1},{"x":144,"y":270,"count":4},{"x":144,"y":320,"count":1},{"x":144,"y":330,"count":1},{"x":153,"y":220,"count":1},{"x":163,"y":280,"count":1},{"x":173,"y":120,"count":2},{"x":182,"y":80,"count":1},{"x":182,"y":120,"count":2},{"x":192,"y":10,"count":1},{"x":192,"y":120,"count":1},{"x":192,"y":130,"count":2},{"x":192,"y":190,"count":1},{"x":192,"y":530,"count":1},{"x":201,"y":120,"count":2},{"x":201,"y":130,"count":1},{"x":201,"y":150,"count":1},{"x":201,"y":190,"count":1},{"x":201,"y":240,"count":1},{"x":201,"y":280,"count":1},{"x":201,"y":290,"count":1},{"x":201,"y":340,"count":1},{"x":201,"y":390,"count":3},{"x":201,"y":400,"count":2},{"x":201,"y":420,"count":1},{"x":201,"y":670,"count":1},{"x":201,"y":710,"count":1},{"x":201,"y":750,"count":1},{"x":211,"y":160,"count":2},{"x":211,"y":280,"count":1},{"x":211,"y":320,"count":1},{"x":211,"y":340,"count":1},{"x":211,"y":800,"count":2},{"x":211,"y":810,"count":2},{"x":221,"y":80,"count":1},{"x":221,"y":140,"count":2},{"x":221,"y":170,"count":1},{"x":221,"y":180,"count":1},{"x":221,"y":230,"count":1},{"x":221,"y":420,"count":1},{"x":221,"y":490,"count":2},{"x":221,"y":730,"count":1},{"x":230,"y":150,"count":1},{"x":230,"y":550,"count":4},{"x":230,"y":670,"count":1},{"x":230,"y":790,"count":2},{"x":240,"y":100,"count":1},{"x":240,"y":120,"count":1},{"x":240,"y":150,"count":1},{"x":240,"y":160,"count":1},{"x":240,"y":220,"count":1},{"x":240,"y":240,"count":1},{"x":240,"y":300,"count":1},{"x":240,"y":330,"count":1},{"x":240,"y":460,"count":1},{"x":240,"y":480,"count":2},{"x":240,"y":550,"count":1},{"x":240,"y":570,"count":1},{"x":240,"y":840,"count":2},{"x":249,"y":70,"count":1},{"x":249,"y":120,"count":1},{"x":249,"y":200,"count":1},{"x":249,"y":210,"count":1},{"x":249,"y":290,"count":3},{"x":249,"y":340,"count":1},{"x":249,"y":860,"count":2},{"x":249,"y":870,"count":2},{"x":259,"y":0,"count":1},{"x":259,"y":90,"count":1},{"x":259,"y":160,"count":1},{"x":259,"y":180,"count":1},{"x":259,"y":190,"count":1},{"x":259,"y":270,"count":1},{"x":259,"y":280,"count":1},{"x":259,"y":290,"count":2},{"x":259,"y":320,"count":1},{"x":259,"y":360,"count":1},{"x":259,"y":430,"count":1},{"x":259,"y":480,"count":1},{"x":259,"y":490,"count":1},{"x":259,"y":860,"count":1},{"x":269,"y":60,"count":2},{"x":269,"y":150,"count":1},{"x":269,"y":220,"count":1},{"x":269,"y":260,"count":1},{"x":269,"y":280,"count":1},{"x":269,"y":290,"count":1},{"x":269,"y":300,"count":1},{"x":269,"y":320,"count":1},{"x":269,"y":350,"count":1},{"x":269,"y":450,"count":3},{"x":269,"y":470,"count":2},{"x":269,"y":480,"count":3},{"x":269,"y":490,"count":1},{"x":278,"y":120,"count":1},{"x":278,"y":140,"count":1},{"x":278,"y":150,"count":2},{"x":278,"y":190,"count":1},{"x":278,"y":220,"count":1},{"x":278,"y":260,"count":1},{"x":278,"y":290,"count":2},{"x":278,"y":500,"count":2},{"x":278,"y":680,"count":2},{"x":278,"y":740,"count":2},{"x":288,"y":0,"count":1},{"x":288,"y":50,"count":1},{"x":288,"y":150,"count":2},{"x":288,"y":230,"count":1},{"x":288,"y":260,"count":1},{"x":288,"y":280,"count":1},{"x":288,"y":290,"count":2},{"x":288,"y":320,"count":1},{"x":288,"y":330,"count":1},{"x":288,"y":340,"count":1},{"x":288,"y":460,"count":1},{"x":288,"y":630,"count":2},{"x":288,"y":720,"count":2},{"x":288,"y":730,"count":2},{"x":288,"y":750,"count":2},{"x":288,"y":790,"count":2},{"x":288,"y":840,"count":1},{"x":297,"y":20,"count":1},{"x":297,"y":120,"count":2},{"x":297,"y":140,"count":2},{"x":297,"y":150,"count":1},{"x":297,"y":180,"count":1},{"x":297,"y":250,"count":4},{"x":297,"y":290,"count":8},{"x":297,"y":300,"count":4},{"x":297,"y":310,"count":1},{"x":297,"y":340,"count":2},{"x":297,"y":350,"count":2},{"x":297,"y":360,"count":1},{"x":297,"y":380,"count":2},{"x":297,"y":410,"count":1},{"x":297,"y":430,"count":2},{"x":297,"y":440,"count":5},{"x":297,"y":450,"count":1},{"x":297,"y":460,"count":8},{"x":297,"y":470,"count":2},{"x":297,"y":480,"count":4},{"x":297,"y":490,"count":2},{"x":297,"y":500,"count":3},{"x":297,"y":520,"count":2},{"x":297,"y":530,"count":1},{"x":297,"y":540,"count":1},{"x":297,"y":550,"count":1},{"x":297,"y":610,"count":1},{"x":297,"y":620,"count":2},{"x":297,"y":630,"count":4},{"x":297,"y":640,"count":1},{"x":297,"y":650,"count":2},{"x":297,"y":660,"count":3},{"x":297,"y":670,"count":11},{"x":297,"y":690,"count":1},{"x":297,"y":700,"count":1},{"x":297,"y":710,"count":2},{"x":297,"y":730,"count":2},{"x":297,"y":770,"count":3},{"x":297,"y":780,"count":2},{"x":297,"y":790,"count":2},{"x":297,"y":830,"count":2},{"x":307,"y":0,"count":1},{"x":307,"y":10,"count":1},{"x":307,"y":70,"count":1},{"x":307,"y":100,"count":1},{"x":307,"y":120,"count":3},{"x":307,"y":140,"count":2},{"x":307,"y":150,"count":2},{"x":307,"y":170,"count":2},{"x":307,"y":180,"count":1},{"x":307,"y":230,"count":1},{"x":307,"y":250,"count":1},{"x":307,"y":270,"count":1},{"x":307,"y":290,"count":1},{"x":307,"y":300,"count":1},{"x":307,"y":320,"count":1},{"x":307,"y":350,"count":1},{"x":307,"y":680,"count":2},{"x":307,"y":690,"count":2},{"x":307,"y":700,"count":2},{"x":307,"y":710,"count":1},{"x":307,"y":730,"count":1},{"x":307,"y":840,"count":1},{"x":307,"y":850,"count":2},{"x":316,"y":0,"count":1},{"x":316,"y":140,"count":1},{"x":316,"y":150,"count":1},{"x":316,"y":270,"count":1},{"x":316,"y":410,"count":1},{"x":316,"y":420,"count":1},{"x":316,"y":430,"count":4},{"x":316,"y":440,"count":1},{"x":316,"y":460,"count":1},{"x":316,"y":490,"count":1},{"x":316,"y":510,"count":1},{"x":316,"y":530,"count":2},{"x":316,"y":550,"count":1},{"x":316,"y":690,"count":1},{"x":316,"y":700,"count":2},{"x":316,"y":730,"count":1},{"x":316,"y":850,"count":1},{"x":316,"y":880,"count":1},{"x":326,"y":20,"count":1},{"x":326,"y":90,"count":1},{"x":326,"y":110,"count":1},{"x":326,"y":130,"count":1},{"x":326,"y":170,"count":2},{"x":326,"y":190,"count":1},{"x":326,"y":230,"count":1},{"x":326,"y":260,"count":1},{"x":326,"y":280,"count":1},{"x":326,"y":290,"count":1},{"x":326,"y":300,"count":2},{"x":326,"y":310,"count":1},{"x":326,"y":320,"count":1},{"x":326,"y":330,"count":1},{"x":326,"y":410,"count":1},{"x":326,"y":460,"count":1},{"x":326,"y":480,"count":1},{"x":326,"y":530,"count":1},{"x":326,"y":580,"count":1},{"x":326,"y":680,"count":1},{"x":326,"y":690,"count":3},{"x":326,"y":750,"count":2},{"x":326,"y":840,"count":1},{"x":326,"y":870,"count":1},{"x":326,"y":1010,"count":2},{"x":336,"y":140,"count":1},{"x":336,"y":170,"count":1},{"x":336,"y":180,"count":1},{"x":336,"y":190,"count":1},{"x":336,"y":230,"count":1},{"x":336,"y":240,"count":1},{"x":336,"y":290,"count":2},{"x":336,"y":310,"count":1},{"x":336,"y":480,"count":1},{"x":336,"y":510,"count":1},{"x":336,"y":690,"count":1},{"x":336,"y":730,"count":1},{"x":336,"y":750,"count":3},{"x":336,"y":810,"count":1},{"x":336,"y":870,"count":3},{"x":336,"y":880,"count":1},{"x":336,"y":960,"count":1},{"x":336,"y":990,"count":1},{"x":336,"y":1000,"count":1},{"x":345,"y":0,"count":1},{"x":345,"y":150,"count":3},{"x":345,"y":160,"count":1},{"x":345,"y":190,"count":2},{"x":345,"y":240,"count":1},{"x":345,"y":260,"count":1},{"x":345,"y":290,"count":4},{"x":345,"y":400,"count":1},{"x":345,"y":420,"count":1},{"x":345,"y":440,"count":1},{"x":345,"y":460,"count":1},{"x":345,"y":500,"count":1},{"x":345,"y":510,"count":1},{"x":345,"y":530,"count":1},{"x":345,"y":630,"count":1},{"x":345,"y":650,"count":1},{"x":345,"y":690,"count":1},{"x":345,"y":710,"count":1},{"x":345,"y":750,"count":2},{"x":345,"y":820,"count":1},{"x":345,"y":850,"count":2},{"x":345,"y":900,"count":1},{"x":345,"y":960,"count":1},{"x":355,"y":20,"count":1},{"x":355,"y":140,"count":1},{"x":355,"y":150,"count":1},{"x":355,"y":160,"count":1},{"x":355,"y":180,"count":2},{"x":355,"y":220,"count":1},{"x":355,"y":250,"count":1},{"x":355,"y":280,"count":1},{"x":355,"y":290,"count":3},{"x":355,"y":300,"count":1},{"x":355,"y":310,"count":2},{"x":355,"y":320,"count":2},{"x":355,"y":330,"count":4},{"x":355,"y":460,"count":1},{"x":355,"y":470,"count":1},{"x":355,"y":510,"count":1},{"x":355,"y":680,"count":1},{"x":355,"y":750,"count":1},{"x":355,"y":800,"count":2},{"x":355,"y":810,"count":1},{"x":355,"y":850,"count":1},{"x":364,"y":150,"count":1},{"x":364,"y":160,"count":1},{"x":364,"y":170,"count":1},{"x":364,"y":200,"count":1},{"x":364,"y":230,"count":1},{"x":364,"y":250,"count":1},{"x":364,"y":290,"count":1},{"x":364,"y":310,"count":1},{"x":364,"y":430,"count":1},{"x":364,"y":520,"count":1},{"x":364,"y":700,"count":1},{"x":364,"y":720,"count":1},{"x":364,"y":760,"count":1},{"x":364,"y":780,"count":4},{"x":364,"y":900,"count":1},{"x":364,"y":980,"count":1},{"x":374,"y":90,"count":1},{"x":374,"y":140,"count":1},{"x":374,"y":150,"count":2},{"x":374,"y":180,"count":2},{"x":374,"y":190,"count":2},{"x":374,"y":250,"count":1},{"x":374,"y":260,"count":2},{"x":374,"y":340,"count":1},{"x":374,"y":450,"count":1},{"x":374,"y":480,"count":1},{"x":374,"y":490,"count":1},{"x":374,"y":690,"count":1},{"x":374,"y":870,"count":1},{"x":384,"y":30,"count":3},{"x":384,"y":40,"count":1},{"x":384,"y":50,"count":1},{"x":384,"y":80,"count":1},{"x":384,"y":120,"count":1},{"x":384,"y":140,"count":1},{"x":384,"y":150,"count":1},{"x":384,"y":180,"count":1},{"x":384,"y":210,"count":1},{"x":384,"y":250,"count":4},{"x":384,"y":270,"count":1},{"x":384,"y":300,"count":1},{"x":384,"y":310,"count":1},{"x":384,"y":350,"count":1},{"x":384,"y":390,"count":1},{"x":384,"y":400,"count":2},{"x":384,"y":550,"count":1},{"x":384,"y":560,"count":1},{"x":384,"y":730,"count":1},{"x":384,"y":780,"count":1},{"x":393,"y":50,"count":1},{"x":393,"y":70,"count":1},{"x":393,"y":100,"count":1},{"x":393,"y":140,"count":1},{"x":393,"y":150,"count":2},{"x":393,"y":160,"count":1},{"x":393,"y":180,"count":2},{"x":393,"y":210,"count":1},{"x":393,"y":290,"count":1},{"x":393,"y":310,"count":1},{"x":393,"y":400,"count":2},{"x":393,"y":450,"count":1},{"x":393,"y":480,"count":1},{"x":393,"y":510,"count":1},{"x":393,"y":520,"count":1},{"x":393,"y":600,"count":1},{"x":393,"y":610,"count":1},{"x":393,"y":620,"count":1},{"x":393,"y":630,"count":1},{"x":393,"y":640,"count":1},{"x":393,"y":660,"count":1},{"x":393,"y":680,"count":1},{"x":393,"y":710,"count":1},{"x":393,"y":720,"count":1},{"x":393,"y":850,"count":1},{"x":403,"y":160,"count":1},{"x":403,"y":230,"count":2},{"x":403,"y":250,"count":1},{"x":403,"y":280,"count":1},{"x":403,"y":390,"count":1},{"x":403,"y":400,"count":2},{"x":403,"y":450,"count":1},{"x":403,"y":470,"count":1},{"x":403,"y":500,"count":2},{"x":403,"y":570,"count":1},{"x":403,"y":600,"count":1},{"x":403,"y":610,"count":1},{"x":403,"y":640,"count":4},{"x":403,"y":690,"count":3},{"x":403,"y":720,"count":1},{"x":403,"y":750,"count":1},{"x":412,"y":150,"count":1},{"x":412,"y":160,"count":1},{"x":412,"y":210,"count":1},{"x":412,"y":220,"count":1},{"x":412,"y":250,"count":1},{"x":412,"y":270,"count":1},{"x":412,"y":280,"count":2},{"x":412,"y":330,"count":1},{"x":412,"y":380,"count":2},{"x":412,"y":400,"count":4},{"x":412,"y":450,"count":1},{"x":412,"y":470,"count":1},{"x":412,"y":480,"count":1},{"x":412,"y":490,"count":1},{"x":412,"y":520,"count":1},{"x":412,"y":530,"count":1},{"x":412,"y":560,"count":1},{"x":412,"y":620,"count":2},{"x":412,"y":650,"count":1},{"x":412,"y":680,"count":1},{"x":412,"y":700,"count":1},{"x":412,"y":750,"count":1},{"x":412,"y":840,"count":1},{"x":412,"y":870,"count":1},{"x":422,"y":30,"count":1},{"x":422,"y":40,"count":1},{"x":422,"y":60,"count":1},{"x":422,"y":160,"count":1},{"x":422,"y":170,"count":2},{"x":422,"y":180,"count":1},{"x":422,"y":200,"count":1},{"x":422,"y":220,"count":1},{"x":422,"y":400,"count":1},{"x":422,"y":420,"count":1},{"x":422,"y":450,"count":1},{"x":422,"y":460,"count":1},{"x":422,"y":480,"count":1},{"x":422,"y":490,"count":2},{"x":422,"y":510,"count":1},{"x":422,"y":560,"count":1},{"x":422,"y":600,"count":1},{"x":422,"y":610,"count":1},{"x":422,"y":620,"count":1},{"x":422,"y":630,"count":1},{"x":422,"y":640,"count":1},{"x":422,"y":700,"count":1},{"x":422,"y":710,"count":2},{"x":422,"y":780,"count":1},{"x":432,"y":110,"count":1},{"x":432,"y":150,"count":1},{"x":432,"y":170,"count":1},{"x":432,"y":180,"count":1},{"x":432,"y":240,"count":1},{"x":432,"y":250,"count":1},{"x":432,"y":260,"count":1},{"x":432,"y":310,"count":1},{"x":432,"y":330,"count":1},{"x":432,"y":380,"count":1},{"x":432,"y":430,"count":1},{"x":432,"y":460,"count":1},{"x":432,"y":480,"count":1},{"x":432,"y":510,"count":1},{"x":432,"y":520,"count":1},{"x":432,"y":530,"count":1},{"x":432,"y":620,"count":3},{"x":432,"y":630,"count":5},{"x":432,"y":660,"count":1},{"x":432,"y":670,"count":2},{"x":432,"y":680,"count":1},{"x":432,"y":690,"count":1},{"x":432,"y":730,"count":3},{"x":432,"y":740,"count":1},{"x":432,"y":750,"count":2},{"x":441,"y":50,"count":1},{"x":441,"y":120,"count":1},{"x":441,"y":140,"count":1},{"x":441,"y":150,"count":1},{"x":441,"y":190,"count":2},{"x":441,"y":220,"count":1},{"x":441,"y":290,"count":1},{"x":441,"y":330,"count":1},{"x":441,"y":400,"count":1},{"x":441,"y":410,"count":1},{"x":441,"y":450,"count":1},{"x":441,"y":480,"count":2},{"x":441,"y":500,"count":2},{"x":441,"y":510,"count":1},{"x":441,"y":540,"count":1},{"x":441,"y":570,"count":1},{"x":441,"y":600,"count":2},{"x":441,"y":610,"count":3},{"x":441,"y":620,"count":1},{"x":441,"y":680,"count":3},{"x":441,"y":690,"count":2},{"x":441,"y":730,"count":1},{"x":441,"y":850,"count":1},{"x":441,"y":870,"count":1},{"x":451,"y":140,"count":1},{"x":451,"y":150,"count":3},{"x":451,"y":160,"count":1},{"x":451,"y":220,"count":1},{"x":451,"y":400,"count":1},{"x":451,"y":410,"count":1},{"x":451,"y":450,"count":1},{"x":451,"y":460,"count":1},{"x":451,"y":480,"count":2},{"x":451,"y":560,"count":1},{"x":451,"y":570,"count":1},{"x":451,"y":590,"count":1},{"x":451,"y":600,"count":1},{"x":451,"y":610,"count":4},{"x":451,"y":620,"count":2},{"x":451,"y":870,"count":1},{"x":451,"y":950,"count":2},{"x":460,"y":140,"count":1},{"x":460,"y":150,"count":1},{"x":460,"y":160,"count":1},{"x":460,"y":230,"count":1},{"x":460,"y":300,"count":1},{"x":460,"y":310,"count":3},{"x":460,"y":320,"count":3},{"x":460,"y":330,"count":5},{"x":460,"y":340,"count":8},{"x":460,"y":350,"count":2},{"x":460,"y":400,"count":1},{"x":460,"y":410,"count":1},{"x":460,"y":440,"count":2},{"x":460,"y":450,"count":1},{"x":460,"y":470,"count":1},{"x":460,"y":520,"count":1},{"x":460,"y":630,"count":1},{"x":460,"y":670,"count":1},{"x":460,"y":720,"count":1},{"x":460,"y":850,"count":1},{"x":470,"y":10,"count":1},{"x":470,"y":130,"count":1},{"x":470,"y":140,"count":2},{"x":470,"y":150,"count":1},{"x":470,"y":180,"count":1},{"x":470,"y":220,"count":1},{"x":470,"y":260,"count":1},{"x":470,"y":300,"count":1},{"x":470,"y":330,"count":1},{"x":470,"y":340,"count":1},{"x":470,"y":360,"count":3},{"x":470,"y":400,"count":1},{"x":470,"y":450,"count":1},{"x":470,"y":520,"count":1},{"x":470,"y":600,"count":1},{"x":470,"y":670,"count":1},{"x":470,"y":700,"count":1},{"x":470,"y":850,"count":3},{"x":480,"y":200,"count":1},{"x":480,"y":220,"count":1},{"x":480,"y":290,"count":2},{"x":480,"y":320,"count":2},{"x":480,"y":330,"count":7},{"x":480,"y":410,"count":1},{"x":480,"y":450,"count":2},{"x":480,"y":510,"count":1},{"x":480,"y":540,"count":1},{"x":480,"y":620,"count":2},{"x":480,"y":650,"count":1},{"x":480,"y":670,"count":2},{"x":480,"y":700,"count":1},{"x":480,"y":730,"count":1},{"x":489,"y":20,"count":1},{"x":489,"y":130,"count":1},{"x":489,"y":140,"count":1},{"x":489,"y":150,"count":2},{"x":489,"y":160,"count":1},{"x":489,"y":170,"count":1},{"x":489,"y":190,"count":1},{"x":489,"y":220,"count":2},{"x":489,"y":230,"count":1},{"x":489,"y":240,"count":2},{"x":489,"y":250,"count":2},{"x":489,"y":260,"count":1},{"x":489,"y":270,"count":3},{"x":489,"y":280,"count":1},{"x":489,"y":290,"count":1},{"x":489,"y":430,"count":1},{"x":489,"y":450,"count":1},{"x":489,"y":510,"count":1},{"x":489,"y":640,"count":2},{"x":489,"y":770,"count":1},{"x":489,"y":780,"count":1},{"x":489,"y":840,"count":2},{"x":489,"y":880,"count":1},{"x":499,"y":100,"count":1},{"x":499,"y":110,"count":1},{"x":499,"y":120,"count":1},{"x":499,"y":130,"count":1},{"x":499,"y":140,"count":2},{"x":499,"y":160,"count":2},{"x":499,"y":170,"count":1},{"x":499,"y":180,"count":1},{"x":499,"y":210,"count":1},{"x":499,"y":220,"count":1},{"x":499,"y":240,"count":1},{"x":499,"y":310,"count":2},{"x":499,"y":380,"count":1},{"x":499,"y":410,"count":1},{"x":499,"y":450,"count":1},{"x":499,"y":530,"count":1},{"x":499,"y":540,"count":1},{"x":499,"y":650,"count":2},{"x":499,"y":720,"count":1},{"x":499,"y":790,"count":6},{"x":499,"y":810,"count":1},{"x":508,"y":20,"count":1},{"x":508,"y":120,"count":1},{"x":508,"y":130,"count":2},{"x":508,"y":140,"count":2},{"x":508,"y":150,"count":1},{"x":508,"y":190,"count":1},{"x":508,"y":280,"count":2},{"x":508,"y":360,"count":1},{"x":508,"y":410,"count":1},{"x":508,"y":450,"count":2},{"x":508,"y":490,"count":1},{"x":508,"y":510,"count":2},{"x":508,"y":760,"count":2},{"x":508,"y":860,"count":1},{"x":518,"y":20,"count":1},{"x":518,"y":60,"count":1},{"x":518,"y":100,"count":1},{"x":518,"y":120,"count":1},{"x":518,"y":140,"count":1},{"x":518,"y":150,"count":1},{"x":518,"y":160,"count":1},{"x":518,"y":180,"count":1},{"x":518,"y":200,"count":1},{"x":518,"y":210,"count":1},{"x":518,"y":400,"count":1},{"x":518,"y":410,"count":1},{"x":518,"y":500,"count":1},{"x":527,"y":120,"count":1},{"x":527,"y":140,"count":1},{"x":527,"y":150,"count":1},{"x":527,"y":220,"count":18},{"x":527,"y":230,"count":3},{"x":527,"y":240,"count":1},{"x":527,"y":270,"count":1},{"x":527,"y":300,"count":3},{"x":527,"y":380,"count":1},{"x":527,"y":450,"count":1},{"x":527,"y":470,"count":1},{"x":527,"y":480,"count":1},{"x":527,"y":490,"count":2},{"x":527,"y":500,"count":1},{"x":527,"y":510,"count":2},{"x":527,"y":570,"count":1},{"x":527,"y":580,"count":1},{"x":527,"y":650,"count":7},{"x":527,"y":830,"count":1},{"x":537,"y":140,"count":1},{"x":537,"y":150,"count":1},{"x":537,"y":160,"count":1},{"x":537,"y":170,"count":1},{"x":537,"y":270,"count":1},{"x":537,"y":410,"count":1},{"x":537,"y":450,"count":1},{"x":537,"y":470,"count":2},{"x":537,"y":490,"count":1},{"x":537,"y":630,"count":1},{"x":537,"y":670,"count":2},{"x":537,"y":760,"count":1},{"x":537,"y":880,"count":2},{"x":547,"y":80,"count":2},{"x":547,"y":160,"count":1},{"x":547,"y":180,"count":4},{"x":547,"y":260,"count":2},{"x":547,"y":270,"count":1},{"x":547,"y":280,"count":1},{"x":547,"y":380,"count":1},{"x":547,"y":390,"count":1},{"x":547,"y":410,"count":1},{"x":547,"y":420,"count":1},{"x":547,"y":520,"count":1},{"x":547,"y":630,"count":1},{"x":547,"y":750,"count":3},{"x":547,"y":770,"count":2},{"x":547,"y":860,"count":4},{"x":556,"y":50,"count":1},{"x":556,"y":70,"count":1},{"x":556,"y":130,"count":2},{"x":556,"y":140,"count":1},{"x":556,"y":160,"count":1},{"x":556,"y":190,"count":1},{"x":556,"y":230,"count":5},{"x":556,"y":290,"count":1},{"x":556,"y":300,"count":1},{"x":556,"y":330,"count":1},{"x":556,"y":390,"count":11},{"x":556,"y":450,"count":2},{"x":556,"y":460,"count":13},{"x":556,"y":500,"count":13},{"x":556,"y":520,"count":6},{"x":556,"y":530,"count":14},{"x":556,"y":600,"count":3},{"x":556,"y":660,"count":4},{"x":566,"y":140,"count":1},{"x":566,"y":170,"count":1},{"x":566,"y":180,"count":1},{"x":566,"y":230,"count":1},{"x":566,"y":260,"count":1},{"x":566,"y":320,"count":3},{"x":566,"y":360,"count":1},{"x":566,"y":490,"count":1},{"x":566,"y":830,"count":3},{"x":575,"y":20,"count":1},{"x":575,"y":140,"count":2},{"x":575,"y":150,"count":2},{"x":575,"y":160,"count":1},{"x":575,"y":180,"count":1},{"x":575,"y":260,"count":11},{"x":575,"y":330,"count":1},{"x":575,"y":410,"count":2},{"x":575,"y":450,"count":1},{"x":585,"y":90,"count":1},{"x":585,"y":100,"count":1},{"x":585,"y":140,"count":1},{"x":585,"y":160,"count":1},{"x":585,"y":180,"count":1},{"x":585,"y":190,"count":1},{"x":585,"y":200,"count":1},{"x":585,"y":250,"count":1},{"x":585,"y":310,"count":1},{"x":585,"y":330,"count":1},{"x":585,"y":830,"count":1},{"x":595,"y":30,"count":1},{"x":595,"y":70,"count":2},{"x":595,"y":80,"count":1},{"x":595,"y":90,"count":1},{"x":595,"y":140,"count":1},{"x":595,"y":160,"count":1},{"x":595,"y":180,"count":1},{"x":595,"y":200,"count":1},{"x":595,"y":250,"count":1},{"x":595,"y":280,"count":1},{"x":595,"y":450,"count":1},{"x":595,"y":530,"count":1},{"x":595,"y":540,"count":1},{"x":604,"y":20,"count":1},{"x":604,"y":150,"count":2},{"x":604,"y":180,"count":1},{"x":604,"y":200,"count":1},{"x":604,"y":290,"count":1},{"x":604,"y":410,"count":1},{"x":604,"y":830,"count":1},{"x":614,"y":0,"count":3},{"x":614,"y":20,"count":1},{"x":614,"y":40,"count":1},{"x":614,"y":140,"count":1},{"x":614,"y":160,"count":1},{"x":614,"y":180,"count":1},{"x":614,"y":230,"count":1},{"x":614,"y":430,"count":1},{"x":614,"y":510,"count":1},{"x":623,"y":200,"count":1},{"x":623,"y":230,"count":2},{"x":623,"y":300,"count":1},{"x":623,"y":330,"count":1},{"x":623,"y":410,"count":1},{"x":623,"y":420,"count":1},{"x":623,"y":520,"count":1},{"x":623,"y":530,"count":2},{"x":623,"y":570,"count":5},{"x":633,"y":60,"count":1},{"x":633,"y":150,"count":1},{"x":633,"y":170,"count":1},{"x":633,"y":190,"count":1},{"x":633,"y":260,"count":2},{"x":633,"y":400,"count":1},{"x":633,"y":570,"count":4},{"x":633,"y":830,"count":1},{"x":643,"y":0,"count":1},{"x":643,"y":70,"count":1},{"x":643,"y":150,"count":1},{"x":643,"y":330,"count":2},{"x":643,"y":570,"count":10},{"x":643,"y":590,"count":1},{"x":652,"y":0,"count":2},{"x":652,"y":140,"count":1},{"x":652,"y":160,"count":1},{"x":652,"y":180,"count":2},{"x":652,"y":400,"count":1},{"x":652,"y":470,"count":1},{"x":652,"y":570,"count":4},{"x":652,"y":830,"count":1},{"x":662,"y":170,"count":1},{"x":662,"y":180,"count":1},{"x":662,"y":290,"count":2},{"x":662,"y":400,"count":1},{"x":662,"y":570,"count":2},{"x":671,"y":0,"count":1},{"x":671,"y":30,"count":1},{"x":671,"y":160,"count":1},{"x":671,"y":170,"count":1},{"x":671,"y":310,"count":1},{"x":671,"y":400,"count":1},{"x":671,"y":720,"count":1},{"x":681,"y":0,"count":1},{"x":681,"y":160,"count":1},{"x":681,"y":280,"count":1},{"x":681,"y":320,"count":1},{"x":700,"y":80,"count":1},{"x":700,"y":170,"count":1},{"x":700,"y":850,"count":1},{"x":710,"y":240,"count":1},{"x":710,"y":450,"count":1},{"x":719,"y":80,"count":1},{"x":719,"y":140,"count":1},{"x":719,"y":150,"count":1},{"x":719,"y":710,"count":1},{"x":729,"y":240,"count":1},{"x":729,"y":840,"count":1},{"x":738,"y":10,"count":1},{"x":738,"y":40,"count":1},{"x":738,"y":450,"count":1},{"x":748,"y":0,"count":1},{"x":758,"y":300,"count":1},{"x":758,"y":660,"count":1},{"x":767,"y":270,"count":2},{"x":796,"y":160,"count":1},{"x":806,"y":970,"count":1},{"x":815,"y":280,"count":1},{"x":815,"y":300,"count":1},{"x":815,"y":360,"count":1},{"x":825,"y":790,"count":1},{"x":844,"y":470,"count":1},{"x":901,"y":270,"count":1},{"x":921,"y":220,"count":1},{"x":921,"y":340,"count":1},{"x":921,"y":720,"count":1},{"x":930,"y":490,"count":1},{"x":930,"y":500,"count":1},{"x":940,"y":180,"count":2},{"x":940,"y":430,"count":1},{"x":940,"y":510,"count":1},{"x":940,"y":580,"count":1},{"x":949,"y":120,"count":5},{"x":949,"y":150,"count":1},{"x":949,"y":180,"count":1},{"x":949,"y":370,"count":1},{"x":949,"y":390,"count":1},{"x":949,"y":570,"count":2},{"x":949,"y":720,"count":1},{"x":949,"y":770,"count":2},{"x":949,"y":780,"count":1},{"x":949,"y":860,"count":1}]};
    data["10000dp"] = {};
    global.data = data;

}(window));