import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async content => {
  const anecdoteData = {
    content,
    votes: 0
  }
  const res = await axios.post(baseUrl, anecdoteData)
  return res.data
}

const modifyAnecdote = async nodifiedAnecdoteData => {
  const res = await axios.put(baseUrl + `/${nodifiedAnecdoteData.id}`, nodifiedAnecdoteData)
  return res.data
}

export default { getAll, createNew, modifyAnecdote }