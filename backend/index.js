const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username} = req.body;

    try{
        const request = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: {"private-key": "0cea31f8-0f23-43d1-844d-2a45e7213cb0"}
            }
        )
        return res.status(request.status).json(request.data);    
    }catch(e){
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen("3001");