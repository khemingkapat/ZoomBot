const { Client } = require("discord.js")
const Discord = require("discord.js")
var fs = require('fs');
const client = new Client({
    disableEveryone: true
});

client.on("ready",()=>{
    console.log('Im ready')

    client.user.setActivity("/class To Show Class Information",{ 
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

    if(message.content === '/class'){
        if(d === 1){
            if(time < 900){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '0'},
                        {name: 'Subject' ,value: 'Home Room'},
                        {name: 'Class Code ' ,value: 'T.In 605 088 6678'},
                        {name: 'Time' ,value: '8.30 - 9.00'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '1'},
                        {name: 'Subject' ,value: 'ESL'},
                        {name: 'Class Code ' ,value: 'T.Mark 860 989 2559\nT.Film 683 491 9962'},
                        {name: 'Time' ,value: '9.20 - 10.40'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1040 && time < 1220){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '2'},
                        {name: 'Subject' ,value: 'Math'},
                        {name: 'Class Code ' ,value: 'T.Potae 785 661 2970\nT.Bo 721383 6097'},
                        {name: 'Time' ,value: '10.55 - 12.20'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1220 && time <1445){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '3'},
                        {name: 'Subject' ,value: 'PE'},
                        {name: 'Class Code ' ,value: 'T.Mhee 843 423 0211'},
                        {name: 'Time' ,value: '13.25-14.45'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 2){
            if(time < 900){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '0'},
                        {name: 'Subject' ,value: 'Home Room'},
                        {name: 'Class Code ' ,value: 'T.In 605 088 6678'},
                        {name: 'Time' ,value: '8.30 - 9.00'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '1'},
                        {name: 'Subject' ,value: 'Core Social'},
                        {name: 'Class Code ' ,value: 'T.Air 571 582 1155'},
                        {name: 'Time' ,value: '9.20 - 10.40'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1040 && time < 1220){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '2'},
                        {name: 'Subject' ,value: 'Selective'},
                        {name: 'Class Code ' ,value: 'T.Nes 296 054 7939\nT.Ka 559 662 9202\nT.Nicky 542 224 7703'},
                        {name: 'Time' ,value: '10.55-12.20'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1220 && time <1445){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '3'},
                        {name: 'Subject' ,value: 'Selective'},
                        {name: 'Class Code ' ,value: 'T.Tee 858 958 7989\nT.Oom 808 785 5326\nK.Wi 312 078 4966'},
                        {name: 'Time' ,value: '13.25-14.45'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 3){
            if(time < 900){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '0'},
                        {name: 'Subject' ,value: 'Home Room'},
                        {name: 'Class Code ' ,value: 'T.In 605 088 6678'},
                        {name: 'Time' ,value: '8.30 - 9.00'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '1'},
                        {name: 'Subject' ,value: 'Selective'},
                        {name: 'Class Code ' ,value: 'T.Bacon 495 441 7170\nT.Nook 428 618 1075\nT.Fight 562 510 2030\nKadokawa 488 314 4285\nT.Ton 306 249 8903\nT.Foo 316 663 7819'},
                        {name: 'Time' ,value: '9.20 - 10.40'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1040 && time < 1220){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '2'},
                        {name: 'Subject' ,value: 'Art'},
                        {name: 'Class Code ' ,value: 'T.Wi 312 078 4966'},
                        {name: 'Time' ,value: '10.55-12.20'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1220 && time <1445){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '3'},
                        {name: 'Subject' ,value: 'Core Thai'},
                        {name: 'Class Code ' ,value: 'T.Mild 869 589 8954'},
                        {name: 'Time' ,value: '13.25-14.45'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 4){
            if(time < 900){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '0'},
                        {name: 'Subject' ,value: 'Home Room'},
                        {name: 'Class Code ' ,value: 'T.In 605 088 6678'},
                        {name: 'Time' ,value: '8.30 - 9.00'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '1'},
                        {name: 'Subject' ,value: 'Core Sci'},
                        {name: 'Class Code ' ,value: 'T.Jeng 420 955 9045'},
                        {name: 'Time' ,value: '9.20 - 10.40'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1040 && time < 1220){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '2'},
                        {name: 'Subject' ,value: 'Guidance'},
                        {name: 'Class Code ' ,value: 'T.Ning 306 180 3781'},
                        {name: 'Time' ,value: '10.55-12.25'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1220 && time <1445){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '3'},
                        {name: 'Subject' ,value: 'PBL'},
                        {name: 'Class Code ' ,value: 'T.In 605 088 6678'},
                        {name: 'Time' ,value: '13.25 - 14.45'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d === 5){
            if(time < 900){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '0'},
                        {name: 'Subject' ,value: 'Home Room'},
                        {name: 'Class Code ' ,value: 'T.In 605 088 6678'},
                        {name: 'Time' ,value: '8.30 - 9.00'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=900 && time < 1040){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '1'},
                        {name: 'Subject' ,value: 'ESL'},
                        {name: 'Class Code ' ,value: 'T.Mark 860 989 2559\nT.Film 683 491 9962'},
                        {name: 'Time' ,value: '9.20-10.40'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1040 && time < 1220){
                message.channel.send('@everyone')
                const Embed = new Discord.MessageEmbed()
                    .setColor('#5DBB63')
                    .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                    .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                    .addFields(
                        {name: 'Period' ,value: '2'},
                        {name: 'Subject' ,value: 'Selective'},
                        {name: 'Class Code ' ,value: 'T.Potae 785 661 2970\nT.Air 571 582 1155\nT.Music 284 877 1017\nT.Mum 848 792 9132\nT.Foo 316 663 7819'},
                        {name: 'Time' ,value: '10.55-12.25'},
                        )
                    .setFooter('โรงเรียนเพลินพัฒนา')
                    message.channel.send(Embed)
            }else if(time >=1220 && time <1445){
                const Embed = new Discord.MessageEmbed()
                .setColor('#5DBB63')
                .setTitle(`Schedule Bot ${h+':'+fm+sm}`)                    
                .setDescription('This Is Learning Schedule For Grade 10 Of Plearnpattana School.')
                .addFields(
                    {name: 'Period' ,value: '3'},
                    {name: 'Subject' ,value: 'Math'},
                    {name: 'Class Code ' ,value: 'T.Potae 785 661 2970\nT.Bo 721383 6097'},
                    {name: 'Time' ,value: '13.25-14.45'},
                    )
                .setFooter('โรงเรียนเพลินพัฒนา')
                message.channel.send(Embed)
            }else{
                message.reply("There Is No Class Right Now")
            }
        }
        if(d>5){
            message.reply('There Is No Class Today')
        }
    }
    if(message.content === '+tb'){
        message.reply({files : ["./table.jpg"]})
    }
})
client.login('NzE1MDY5Nzc3OTc0MTMyODI4.XuHCWA.pPXuo2b0IyzJxLxRN1Gu_ZdO070');
