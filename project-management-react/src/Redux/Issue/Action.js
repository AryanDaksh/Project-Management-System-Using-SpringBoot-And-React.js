import * as actionTypes from "./ActionType";
import api from "@/Config/Api.js";

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_ISSUES_REQUEST});
        try {
            const response = await api.get(`api/issues/project/${id}`);
            console.log("Fetch Issues ", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST});
        try {
            const response = await api.get(`api/issues/${id}`);
            console.log("Fetch Issues by ID", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
                error: error.message,
            });
        }
    };
};

export const updateIssueStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST});
        try {
            const response = await api.put(`api/issues/${id}/status/${status}`);
            console.log("Update Issue Status", response.data);
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
                error: error.message,
            });
        }
    };
};

export const assignedUserToIssue = ({issueId, userId}) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST});
        try {
            const response = await api.put(`api/issues/${issueId}/assignee/${userId}`);
            console.log("Assigned Issue", response.data);
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error: error.message,
            });
        }
    };
};