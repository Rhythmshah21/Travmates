import {
    BLOGS_UPDATE_REQUEST,
    BLOGS_UPDATE_SUCCESS,
    BLOGS_UPDATE_FAIL,
    BLOGS_CREATE_FAIL,
    BLOGS_CREATE_REQUEST,
    BLOGS_CREATE_SUCCESS,
    BLOGS_DELETE_FAIL,
    BLOGS_DELETE_REQUEST,
    BLOGS_DELETE_SUCCESS,
    BLOGS_LIST_FAIL,
    BLOGS_LIST_REQUEST,
    BLOGS_LIST_SUCCESS,
  } from "../constants/blogConstants";
  export const blogListReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
      case BLOGS_LIST_REQUEST:
        return {  };
      case BLOGS_LIST_SUCCESS:
        return { blogs: action.payload };
      case BLOGS_LIST_FAIL:
        return { error: action.payload };
  
      default:
        return state;
    }
  };