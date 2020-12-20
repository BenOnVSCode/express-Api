import { v4 as uuidv4} from 'uuid'
let users = [ ]

export const createUser = (req, res) => {
    const user = req.body ;
    users.push({ ...user, id : uuidv4()})
    res.send(`User with the name ${user.firstName}`)
}

export const getUserById =  (req,res) => {
    const id = req.params.id ;

    const foundUSER = users.find((user) => user.id === id ) ;

    res.send(foundUSER)
}

export const deleteUserById = ( req, res ) => {
    const { id } = req.params 

    users = users.filter((user) => user.id !== id );

    res.send(`User with the id ${id} Deleted `)

    console.log(id)
}


export const updateUserInfoById = (req, res) => {
    const { id } = req.params 
    const user = users.find((user) => user.id === id)
    const { firstName, lastName, age } = req.body 

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age
  
}

export const getUsers = (req, res) => {
    res.send(users)
    
}