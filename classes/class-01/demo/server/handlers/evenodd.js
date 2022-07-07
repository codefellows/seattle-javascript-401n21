module.exports = (req, res) => {
  let outputObject = {
    10: "even",
    5: "odd",
    time: req.timestamp ?? 0, // we got this from the middleware
  };

  res.status(200).json(outputObject);
};
