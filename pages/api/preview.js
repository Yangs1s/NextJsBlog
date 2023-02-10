export default function handler(req, res) {
    if (req.query.token !== 'jimmy' || !req.query.post) {
        return res.status(401).json({ message: "Invaild" })
    }

    res.setPreviewData({})
    res.redirect(`/blog/${req.query.post}`)
}