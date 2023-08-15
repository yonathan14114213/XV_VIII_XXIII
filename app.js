const express = require('express');
const app = express();
const port = 3000;

const users = [{
    'name': 'menahem eisenbeg',
    'id': 0,
    'e-mail': "menahem@example.com"
},{
    name: 'yael eisenberg',
    id: 1,
    'e-mail': 'yael@example.com'
},{
    name: 'noa eisenberg',
    id: 2,
    'e-mail': 'noa@example.com'
},{
    name: 'yitzik eisenberg',
    id: 3,
    'e-mail': 'yitzik@example.com'
},{
    name: 'yoni eisenberg',
    id: 4,
    'e-mail': 'yoni@example.com'
}]

app.get('/user/:id', (req, res)=>{
    const id = req.params.id
    res.send(users[id])
 })
/*
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    for(let i = 0;i < users.length-1;i++){
        if (users[i].id === id){
            res.send(users[i])
        }
    } 
});
*/

app.post('/user/:name/:id/:Email', (req, res)=>{users.push({
        name: req.params.name,
        id: req.params.id,
        'e-mail': req.params.Email
    });
    res.send(users)
})
app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});