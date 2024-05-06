import axios from '../utils/axiosCustomize'

export const fetchBoardDetailApi = async (boardId) => {
  return await axios.get(`v1/boards/${boardId}`)
}