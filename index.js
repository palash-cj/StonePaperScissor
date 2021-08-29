const express = require('express')
const app = express()


app.get('/game/start', (req,res)=>{

    var arr = [];

    for(var i = 1; i<=50; i++){

        //less than or equal to 3.3 = Rock
        //less than or equal to 6.6 & greater than 3.3 = paper
        //greater than 6.6 = paper

        var player1 = Math.random()
        if(player1 <= 0.33){
            player1 = "Rock";
        }else if(player1 <= 0.66){
            player1 = "Paper";
        }else{
            player1 = "Scissor"
        }

        var player2=Math.random()
        if(player2 <= 0.33){
            player2 = "Rock";
        }else if(player2 <= 0.66){
            player2 = "Paper";
        }else{
            player2 = "Scissor"
        }

        var player3=Math.random()
        if(player3 <= 0.33){
            player3 = "Rock";
        }else if(player3 <= 0.66){
            player3 = "Paper";
        }else{
            player3 = "Scissor";
        }

        var player4=Math.random()
        if(player4 <= 0.33){
            player4 = "Rock";
        }else if(player4 <= 0.66){
            player4 = "Paper";
        }else{
            player4 = "Scissor";
        }


        var p1 = 0;
        var p2 = 0;
        var p3 = 0;
        var p4 = 0;

        //for player 1 scores
        if(player1 === "Rock"){
            if(player2 === "Scissor"){
                p1++;
            }
            if(player3 === "Scissor"){
                p1++;
            }
            if(player4 === "Scissor"){
                p1++;
            }
        }

        if(player1 === "Paper"){
            if(player2 === "Rock"){
                p1++;
            }
            if(player3 === "Rock"){
                p1++;
            }
            if(player4 === "Rock"){
                p1++;
            }
        }

        if(player1 === "Scissor"){
            if(player2 === "Paper"){
                p1++;
            }
            if(player3 === "Paper"){
                p1++;
            }
            if(player4 === "Paper"){
                p1++;
            }
        }
        
        //for player 2 score
        if(player2 === "Rock"){
            if(player1 === "Scissor"){
                p2++;
            }
            if(player3 === "Scissor"){
                p2++;
            }
            if(player4 === "Scissor"){
                p2++;
            }
        }

        if(player2 === "Paper"){
            if(player1 === "Rock"){
                p2++;
            }
            if(player3 === "Rock"){
                p2++;
            }
            if(player4 === "Rock"){
                p2++;
            }
        }

        if(player2 === "Scissor"){
            if(player1 === "Paper"){
                p2++;
            }
            if(player3 === "Paper"){
                p2++;
            }
            if(player4 === "Paper"){
                p2++;
            }
        }

        //for player3 score
        if(player3 === "Rock"){
            if(player1 === "Scissor"){
                p3++;
            }
            if(player2 === "Scissor"){
                p3++;
            }
            if(player4 === "Scissor"){
                p3++;
            }
        }

        if(player3 === "Paper"){
            if(player1 === "Rock"){
                p3++;
            }
            if(player2 === "Rock"){
                p3++;
            }
            if(player4 === "Rock"){
                p3++;
            }
        }

        if(player3 === "Scissor"){
            if(player1 === "Paper"){
                p3++;
            }
            if(player2 === "Paper"){
                p3++;
            }
            if(player4 === "Paper"){
                p3++;
            }
        }

        //for player 4
        if(player4 === "Rock"){
            if(player1 === "Scissor"){
                p4++;
            }
            if(player2 === "Scissor"){
                p4++;
            }
            if(player3 === "Scissor"){
                p4++;
            }
        }

        if(player4 === "Paper"){
            if(player1 === "Rock"){
                p4++;
            }
            if(player2 === "Rock"){
                p4++;
            }
            if(player3 === "Rock"){
                p4++;
            }
        }

        if(player4 === "Scissor"){
            if(player1 === "Paper"){
                p4++;
            }
            if(player2 === "Paper"){
                p4++;
            }
            if(player4 === "Paper"){
                p4++;
            }
        }

        //Results
    var obj={};

    obj.Player1 = player1;
    obj.Score1 = p1;
    obj.Player2 = player2;
    obj.Score2 = p2;
    obj.Player3 = player3;
    obj.Score3 = p3;
    obj.Player4 = player4;
    obj.Score4 = p4;

    arr.push(obj);

    }

    res.send(arr);
    
})

app.listen(8080, ()=>{
    console.log('Listening to port 8080')
})