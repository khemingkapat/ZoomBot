const { Client } = require("discord.js")
const client = new Client({
    disableEveryone: true
});

client.on("ready",()=>{
    console.log('Im ready')

    client.user.setActivity("/todayc To Show Class Information",{ 
        type : "WATCHING"

    });
});

client.on("message",async message=>{
    var date = new Date();
    var d = date.getDay();
    var h = date.getHours();
    var mm = date.getMinutes().toString();
    
    var fullm = mm.split('')
    fullm.unshift(0)
    var fm = fullm[mm.length-1]
    var sm = fullm[mm.length]
    var tim = ""+h+fm+sm
    var time = parseInt(tim,10)

    if(message.content === "/todayc"){
        if(d === 1){
            if(time < 900){
                message.channel.send('@everyone')
                message.channel.send('Homeroom\n    T.In 605 088 6678')
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                message.channel.send('Period 1 Is')
                message.channel.send('Esl\n    T.Mark 860 989 2559\n    T.Film 683 491 9962')
            }else if(time >=1040 && time < 1215){
                message.channel.send('@everyone')
                message.channel.send("Period 2 Is")
                message.channel.send('Math\n    T.Bank 712 007 6566\n    T.Potae 785 661 2970')
            }else if(time >=1215 && time <1450){
                message.channel.send('@everyone')
                message.channel.send("Period 3 Is")
                message.channel.send('PE\n    T.Mhee 843 423 0211')
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 2){
            if(time < 900){
                message.channel.send('@everyone')
                message.channel.send('Homeroom\n    T.In 605 088 6678')
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                message.channel.send('Period 1 Is')
                message.channel.send('Core Social\n    T.Air 571 582 1155')
            }else if(time >=1040 && time < 1215){
                message.channel.send('@everyone')
                message.channel.send("Period 2 Is")
                message.channel.send('Bio\n    T.Nes 296 054 7939\nWard Sen\n    T.Ka 559 662 9202\nIELTS\n    T.Nicky 542 224 7703')
            }else if(time >=1215 && time <1450){
                message.channel.send('@everyone')
                message.channel.send("Period 3 Is")
                message.channel.send('Physic\n    T.Tee 858 958 7989\nSocial Issue\n    T.Oom 808 785 5326\nThai Art\n    K.Wi 312 078 4966')
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 3){
            if(time < 900){
                message.channel.send('@everyone')
                message.channel.send('Homeroom\n    T.In 605 088 6678')
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                message.channel.send('Period 1 Is')
                message.channel.send('Chemi\n    T.Bacon 495 441 7170\nPhycology\n    T.Nook 428 618 1075\nComputer Music\n    T.Fight 562 510 2030\n2D\n    Kadokawa 488 314 4285\nChinese\n    T.Ton 306 249 8903\nGermany\n    T.Foo 316 663 7819')
            }else if(time >=1040 && time < 1215){
                message.channel.send('@everyone')
                message.channel.send("Period 2 Is")
                message.channel.send('Art\n    T.Wi 312 078 4966')
            }else if(time >=1215 && time <1450){
                message.channel.send('@everyone')
                message.channel.send("Period 3 Is")
                message.channel.send('Core Thai\n    T.Mild 869 589 8954')
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 4){
            if(time < 900){
                message.channel.send('@everyone')
                message.channel.send('Homeroom\n    T.In 605 088 6678')
            }else if(time >=900 && time < 1040){
                console.log(time)
                message.channel.send('@everyone')
                message.channel.send('Period 1 Is')
                message.channel.send('Core Sci\n    T.Jeng 420 955 9045')
            }else if(time >=1040 && time < 1215){
                message.channel.send('@everyone')
                message.channel.send("Period 2 Is")
                message.channel.send('Guidance\n    T.Ning 306 180 3781')
            }else if(time >=1215 && time <1450){
                message.channel.send('@everyone')
                message.channel.send("Period 3 Is")
                message.channel.send('This Is PBL Class\n    T.In 605 088 6678')
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 5){
            if(time < 900){
                message.channel.send('@everyone')
                message.channel.send('Homeroom\n    T.In 605 088 6678')
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                message.channel.send('Period 1 Is')
                message.channel.send('Esl\n    T.Mark 860 989 2559\n    T.Film 683 491 9962')
            }else if(time >=1040 && time < 1215){
                message.channel.send('@everyone')
                message.channel.send("Period 2 Is")
                message.channel.send('Math\n    T.Bank 712 007 6566\nMedia Literacy\n    T.Air 571 582 1155\nMusic Harmony\n    T.Music 284 877 1017\nEntrepreneur\n    T.Mum 848 792 9132\nGermany\n    T.Foo 316 663 7819')
            }else if(time >=1215 && time <1450){
                message.channel.send('@everyone')
                message.channel.send("Period 3 Is")
                message.channel.send('Math\n    T.Bank 712 007 6566\n    T.Potae 785 661 2970')
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d>5){
            message.reply('There Is No Class Today')
        }
    }
})
client.login('your token');
