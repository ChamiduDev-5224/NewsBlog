const login = async (req, res) => {
  try {
    return res.json({
      message: 1,
      status: res.Status,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
};
