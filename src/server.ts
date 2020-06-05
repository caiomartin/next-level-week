import express, { request, response } from 'express';

const app = express();

app.get('/users', (request, response)=> {
    console.log('Listagem do usuário')

    response.json([
        'Caio',
        'João',
        'Igor'
    ])
});

app.listen(3333);