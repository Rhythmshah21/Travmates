import {
    NOTES_CREATE_FAIL,
    BLOGS_CREATE_REQUEST,
    BLOGS_CREATE_SUCCESS,
    BLOGS_DELETE_FAIL,
    BLOGS_DELETE_REQUEST,
    BLOGS_DELETE_SUCCESS,
    BLOGS_LIST_FAIL,
    BLOGS_LIST_REQUEST,
    BLOGS_LIST_SUCCESS,
    BLOGS_UPDATE_FAIL,
    BLOGS_UPDATE_REQUEST,
    BLOGS_UPDATE_SUCCESS,
  } from "../constants/blogConstants";
  import axios from "axios";
  
  export const listNotes = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: BLOGS_LIST_REQUEST,
      });

      const { data } = await axios.get(`/api/blogs`);
  
      dispatch({
        type: BLOGS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: BLOGS_LIST_FAIL,
        payload: message,
      });
    }
  };


// export const createNoteAction = (title, content, imageURL) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     dispatch({
//       type: NOTES_CREATE_REQUEST,
//     });


//     const config = {
//       headers: {
//         "Content-Type": "application/json",      
//       },
//     };

//     const { data } = await axios.post(
//       `/api/notes/create`,
//       { title, content, imageURL },
//       config
//     );

//     dispatch({
//       type: NOTES_CREATE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({
//       type: NOTES_CREATE_FAIL,
//       payload: message,
//     });
//   }
// };

// export const updateNoteAction = (id, title, content, imageURL) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     dispatch({
//       type: NOTES_UPDATE_REQUEST,
//     });



//     const config = {
//       headers: {
//         "Content-Type": "application/json",
    
//       },
//     };

//     const { data } = await axios.put(
//       `/api/notes/${id}`,
//       { title, content, imageURL },
//       config
//     );

//     dispatch({
//       type: NOTES_UPDATE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({
//       type: NOTES_UPDATE_FAIL,
//       payload: message,
//     });
//   }
// };

// export const deleteNoteAction = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: NOTES_DELETE_REQUEST,
//     });


//     const config = {
//       headers: {
    
//       },
//     };

//     const { data } = await axios.delete(`/api/notes/${id}`, config);

//     dispatch({
//       type: NOTES_DELETE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({
//       type: NOTES_DELETE_FAIL,
//       payload: message,
//     });
//   }
// };

  