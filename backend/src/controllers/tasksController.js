const getAll = (req, res) => {
    return res.status(200).json({ message: 'tudo certo'})
};

module.exports = {
    getAll
}