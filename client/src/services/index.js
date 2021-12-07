import axios from 'axios'



export const URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_Questions_BASE}/questions`

export const config = {
  headers: {
      Authorization: `Bearer ${process.env.REACT_APP_Questions_KEY}`
    }
  }


export const getQuestions = async () => {
  const response = await axios.get(URL, config)
  return response.data.records
}
export const postQuestion = async (body) => {
  const response = await axios.post(URL, { fields: body }, config)
  return response.data
}