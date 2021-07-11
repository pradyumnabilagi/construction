export default (req, res) => {
    const {user,password} = req.body
    res.status(200).json({ name: "90", password: "password" })
}
  