import axios from 'axios'



export const URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_Questions_BASE}/questions`


  export const answerURL =
    `https://api.airtable.com/v0/${process.env.REACT_APP_Questions_BASE}/Answers`
  

export const config = {
  headers: {
      Authorization: `Bearer ${process.env.REACT_APP_Questions_KEY}`
    }
  }


export const getQuestions = async () => {
  const response = await axios.get(URL, config)
  return response.data.records
}

export const getQuestion = async (id) => {
  const response = await axios.get(`${URL}/${id}`, config)
  return response.data
}
  
export const postQuestion = async (body) => {
  const response = await axios.post(URL, { fields: body }, config)
  return response.data
}

export const getAnswers = async () => {
  const response = await axios.get(answerURL, config)
  return response.data.records
}

export const postAnswer = async (body, id) => {
  const response = await axios.post(answerURL, { fields: {...body, questions: [id]} }, config)
  return response.data
}

