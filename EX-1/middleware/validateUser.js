// middleware/validateUser.js
const validateUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    next(); // pass control to the controller if valid
};

export default validateUser;
