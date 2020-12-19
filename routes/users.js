import express from 'express' ;


const router = express.Router();

const users = [ 
    {
        name: "Jhon",
        lastName: "Doe",
        age: 25
    },
    {
        name: "Jhon",
        lastName: "Doe",
        age: 25 
    }
]


router.get('/', (req, res) => {
    res.send(users)
    
});

router.post('/', (req, res) => {
    
})


export default router