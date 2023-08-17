const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;
app.use(express.json());

const bcrypt = require('bcrypt');

/*
function enigma(password) {
    bcrypt.hashSync(password.toString(), 10);
    {
        return hashed;
    }
}*/



const users = [{
    'name': 'menahem eisenbreg',
    'id': uuidv4(),
    Email: "menahem@example.com",
    password: enigma('jhg')
},{
    name: 'yael eisenberg',
    id: uuidv4(),
    Email: 'yael@example.com',
    password:enigma('tfdytd')
},{
    name: 'noa eisenberg',
    id: uuidv4(),
    Email: 'noa@example.com',
    password: enigma(" ")
},{
    name: 'yitzik eisenberg',
    id: uuidv4(),
    Email: 'yitzik@example.com',
    password:enigma("gnfnhgftnyh")
},{
    name: 'yoni eisenberg',
    id: uuidv4(),
    Email: 'yoni@example.com',
    password: enigma("yonathan")
}]

app.get('/', (req, res)=>{
    res.send(users[0].password);
});

app.get('/user/:id', (req, res)=>{
    res.send(users[req.params.id]);
 });

app.post('/', (req, res)=>{
    users.push({
        name: req.body.name,
        id: uuidv4(),
        Email: req.body.Email,
        password: enigma(req.body.password)
    });
    res.send(users);
    saltRounds+=1;
});

app.put('/user/:id',(req, res)=>{
    console.log('req came!');
    users[req.params.id].name = req.body.name;
    users[req.params.id].Email = req.body.Email;
    res.send(users);
});

app.delete('/user/:id', (req, res)=>{
    users.splice(req.params.id,1);
    res.send(users);
});

// app.get('/user/:id', (req, res) => {
//     const id = req.params.id
//     for(let i = 0;i < users.length-1;i++){
//         if (users[i].id === id){
//             res.send(users[i])
//         }
//     } 
// });

app.post('/login/:email/:password', (req, res)=>{
    for (let i = 0;i<users.length;i++){
        if (req.params.email === users[i].Email && req.params.password!== users[i].password){
            res.send('the password is uncorrect');
        }
        if (req.params.email===users[i].Email && req.params.password===users[i].password) {
            res.send('user connected');
        }
    }
})

app.listen(port, (req, res) => {
    console.log(`Server is up and running on port:${port}`);
    //res.send('for identifeiding enter user_name and password');
});