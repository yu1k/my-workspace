"use strict";

const nodemailer = require("nodemailer");

const authMailAddress = "";
const authMailAddressPass = "";

const toMailAddress = ""; //複数の宛先に送信する時は別ファイルにメールアドレスを格納する

function sendMail(){
    /***   認証   ***/
    //https://support.google.com/a/answer/176600?hl=ja
    let smtpSetting = {
        host : 'smtp.gmail.com',
        port : 465,
        secure : true,
        auth    : {
            user : authMailAddress,
            pass : authMailAddressPass,

        }
    };

    //メールの内容
    let mailMessage = {
        from    : authMailAddress,
        to      : toMailAddress,
        subject : 'title',
        text    : 'test'
    };

    let smtp = nodemailer.createTransport(smtpSetting);
    smtp.sendMail(mailMessage, function(err, response){
        if(err){
            console.log(err);
        }
        console.log("メールを送信できました: " + response.message);
        smtp.close();
    });
}

function main(){
    sendMail();
}

main();
