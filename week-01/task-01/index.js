import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv()

const app = express()

app.use(express.json())

app.post('/signup',async(req,res)=>{
    try {
        const {email,password} = req?.body || {}
        if(!email || !password) {
            return res.status(404).json({isError:true, error: "Email or Password missing" })
        }
        await new Promise(resolve => setTimeout(() => {
            console.log("Email :", email, "password length :", password.length);
            resolve();
        }, 2000));
        
        await fetch(process.env.SLACK_WEBHOOK, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({"text": `We got another warrior!!`})
        });
        return res.json({isSuccess:true, data:{
            "message": "Signup workflow completed"
          }})
    } catch (error) {
        console.error("Error while signup : ",error)
        return res.status(400).json({isError:true, error: error?.message || "Something went wrong", })
    }
})

app.listen(8000,()=>console.log("Server is up and running"))