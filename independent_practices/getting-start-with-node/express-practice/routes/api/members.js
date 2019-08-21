const express   = require('express');
const uuid      = require('uuid');
const router    = express.Router();
const members   = require('../../Members');

// Gets All Members
router.get('/', (req, res) => {
    res.json(members);

});

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        // res.send(req.params.id)
        // res.json(members.filter(member => member.id === req.params.id)); // this is not going to work
        res.json(members.filter(member => member.id === parseInt(req.params.id))); // need to wrap req.params.id with parseInt
    } else {
        res.status(400).json({msg: `No member witht the id of ${req.params.id}`})
    }
})

// === Create Member ===
router.post('/', (req, res) => {
    // res.send(req.body) // use this one for checking with postman
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    // add new member to the array
    if(!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email'})
    }

    members.push(newMember);
    res.json(members);
})

// === Update Member ===
router.put('/:id', (req, res) => {
        const found = members.some(member => member.id === parseInt(req.params.id));
        console.log(found);
    
        if (found) {
            
            const updMember = req.body;

            members.forEach(member => {
                if(member.id === parseInt(res.params.id)) {
                    member.name = updMember.name ? updMember.name : member.name;
                    member.email = updMember.email ? updMember.email : member.email;

                    res.json({msg: 'Member updated', member});
                }
            })
            res.status(400).json({msg: `No member witht the id of ${req.params.id}`})
        }
})

// === Delete Member ===
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))}); 
    } else {
        res.status(400).json({msg: `No member witht the id of ${req.params.id}`})
    }
})

module.exports = router;