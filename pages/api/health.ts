import * as CorsServices from '../../server/services/services.cors';

export default async function handler(req, res) {
  const { method } = req

  // await dbConnect()

  switch (method) {
    case 'GET':
      try {
        // const pets = await Pet.find({}) /* find all the data in our database */
        const api = {
          status: 'Up'
        }
        res.status(200).json({ success: true, payload: api })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

module.exports = CorsServices.allowCors(handler)
