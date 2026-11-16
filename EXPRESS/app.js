import express from 'express';

// console.log('helloo world');

const app = express();
app.get("/",(req, res) =>{
     res.send('Hello from Express.js')


     })

     app.listen(3000, () => {
        console.log('Server is running on port 3000');
     })
