//DEFINI AS PRIMEIRAS PROPRIEDADES DA BOLINHA //
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log("teste");
// DEFINI AS CARACTERISTICAS DO PLAYER OU DA BOLINHA NO CASO //
class Player {
    constructor (x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    // METODO DE CRIÇÃO E DEFINIÇÃO DA BOLINHA A PARTIR DOS PARAMETROS PASSADOS NA CLASS // 
    draw(){
        c.beginPath()
        c.arc(this.x , this.y,  this.radius,
            0, Math.PI * 2, false);
            c.fillStyle = this.color;
        c.fill()
    }
}
class Tiros{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw(){
        c.beginPath()
        c.arc(this.x , this.y,  this.radius,
            0, Math.PI * 2, false);
            c.fillStyle = this.color;
        c.fill()
    }

    update(){
        this.draw()
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y 
    }
}

class Enemy{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw(){
        c.beginPath()
        c.arc(this.x , this.y,  this.radius,
            0, Math.PI * 2, false);
            c.fillStyle = this.color;
        c.fill()
    }

    update(){
        this.draw()
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y 
    }
}

// DEFINI ALTURA DA BOLINHA NA TELA //
const x = canvas.width / 2
const y = canvas.height / 2

// DEFINI OS PARAMETROS DA FUNÇÃO PLAYER //
const player = new Player(x, y, 35, 'blue');



const tirinho = []
const enemies = []

function spawnEnemies(){
    setInterval(()=>{

        const radius = 30
        const x = 0 - radius
        const y = Math.random()* canvas.height
        const color = 'green'

        const angulo = Math.atan2(
           canvas.height / 2 - y, 
           canvas.width / 2 - x
            )
            const velocity = {
                x: Math.cos(angulo),
                y:Math.sin(angulo)
            };
       
        enemies.push(new Enemy( x, y, radius, color, velocity))
    }, 1000)
}

function animacao(){
    requestAnimationFrame(animacao);
    c.clearRect(0, 0, canvas. width, canvas.height)
    player.draw();
    tirinho.forEach(tiros =>{
        tiros.update();
    })
    enemies.forEach(enemy =>{
        enemy.update()
    });

}

// METODO QUANDO CLICA NA TELA PARA PEGAR O ANGULO DO CLICK //
window.addEventListener('click', (event) =>{
    const angulo = Math.atan2(
        event.clientY - canvas.height / 2, 
        event.clientX - canvas.width / 2
        )
        const velocity = {
            x: Math.cos(angulo),
            y:Math.sin(angulo)
        };

    tirinho.push(new Tiros(canvas.width / 2, canvas.height / 2, 5, 'red', velocity )
    )
});

animacao();
spawnEnemies();