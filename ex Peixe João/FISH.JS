var config = {
type: Phaser.AUTO,
width: 800,
heigth: 900,

scene: {
preload:preload,
create: create,
update: update
}
};

var game = new Phaser.Game(config);

var bk; 

var mary;

function preload() {                        
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/tubarao.png');
    this.load.image('baicas', 'assets/peixes/baiacu.png'); 
    this.load.image('plantas', 'assets/peixes/plantas-removebg-preview.png');
}

function create() {
    this.add.image(400,390, 'mar');
    this.add.image(400,150, 'logo').setScale(0.5);
    this.add.image(250,500, 'plantas').setScale(0.65);
    bk = this.add.image(400,600, 'baicas').setScale(0.7);
    mary = this.add.image(400,400, 'peixe');
    mary.setFlip(true, false);
    mary.setScale(0.85);
    

}

function update() {          
    
    
    bk.y = this.input.y;

    mary.x = this.input.x;
    mary.y = this.input.y

}
