import * as types from "./actionType";
import axios from "axios";

export const getUserSubscription = (jwt) => {
    return async (dispatch) => {
        dispatch({type: types.GET_USER_SUBSCRIPTION_REQUEST});
        try {
            const response = await axios.get("/api/subscriptions/user", {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            });
            dispatch({
                type: types.GET_USER_SUBSCRIPTION_SUCCESS,
                payload: response.data,
            })
            console.log("User Subscription", response.data);
        } catch (error) {
            console.log(error)
            dispatch({
                type: types.GET_USER_SUBSCRIPTION_FAILURE,
                error: error.message,
            });
        }
    };
};

export const upgradeSubscription = ({planType}) => {
    return async (dispatch) => {
        dispatch({type: types.UPGRADE_SUBSCRIPTION_REQUEST});
        try {
            const response = await axios.patch("/api/subscriptions/upgrade", null, {
                params: {
                    planType: planType,
                }
            });
            dispatch({
                type: types.UPGRADE_SUBSCRIPTION_SUCCESS,
                payload: response.data,
            })
            console.log("Upgraded Subscription", response.data);
        } catch (error) {
            console.log(error)
            dispatch({
                type: types.UPGRADE_SUBSCRIPTION_FAILURE,
                error: error.message,
            });
        }
    };
};