const GREETINGS = [
    "Whalecome!",
    "Charting the course ahead!",
    "All hands on deck!",
    "test",
]

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length)],
    });
};
