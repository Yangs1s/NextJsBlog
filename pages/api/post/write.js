import { createPost } from '../../../lib/posts'
import format from 'date-fns/format'

export default async function handler(req, res) {
    const { id, title, content, tag } = req.body
    try {
        await createPost({
            id, title, date: format(new Date(), 'yyyy-MM-dd'), content, tag
        })
        res.status(200).json({ message: "create Success" })
    } catch (error) {
        res.status(500).json({ message: `create failed ${error}` })

    }

}