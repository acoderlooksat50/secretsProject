//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
/*TODO
 1. type set to module so we are going to import depdencies from dependencies
 2. set variables (port, app)
 3. set app.use for bodyparser?
 4. app.listen on port
 5. app.get on root route to respond with index.html
 6. app.post route for the password submit
 7. inside the post check if the password is equal to the required password
 8. return the secret.html if so, else redirect to the root (res.redirect('/'))
 */

 import express from "express";
 import bodyParser from "body-parser";
 import { dirname } from "path";
 import { fileURLToPath } from "url";
 
 const __dirname = dirname(fileURLToPath(import.meta.url));
 
 const app = express();
 const port = 3000;
 
 app.use(bodyParser.urlencoded({extended:true}));
 
 app.listen(process.env.PORT || port, () => {
    console.log(`Server running on port ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/check', (req,res) => {
    if ( req.body['password'] === 'ILoveProgramming'){
        res.sendFile(__dirname + '/public/secret.html');
    }else{
        res.sendFile(__dirname + '/public/index.html')
    }
})

