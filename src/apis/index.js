import axios from '../utils/axiosCustomize'

export const fetchBoardDetailApi = async (boardId) => {
  return await axios.get(`v1/boards/${boardId}`)
}

export const createNewColumnApi = async (newColumnData) => {
  return await axios.post('v1/columns', newColumnData)
}

export const createNewCardApi = async (newCardData) => {
  return await axios.post('v1/cards', newCardData)
}