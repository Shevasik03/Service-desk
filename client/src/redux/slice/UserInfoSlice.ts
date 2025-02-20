import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

export const fetchAuthUser = async () => {
    try {
        const { data } = await axios.get('https://sds.nemiroff.local:448/api/userinfo', { withCredentials: true })
        return data == undefined ? "Name" : data
    } catch (err) {
      console.log(err)
    }
}

export type AuthUserProps = {
    username: string,
    fullName: string,
    email: string,
    group: string,
    isMember: boolean
}

export interface UserInfoSliceState {
    userInfo: AuthUserProps
}

const initialState: UserInfoSliceState = {
    userInfo: {
        username: "",
        fullName: "",
        email: "",
        group: "",
        isMember: false,
    }
}

export const UserInfo = createSlice({
    name: 'UserInfo',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<AuthUserProps>) => {
            state.userInfo = action.payload
        },
    }
})

export const { setAuthUser } = UserInfo.actions
export const selectUserInfo = (state: RootState) => state.UserInfo

export default UserInfo.reducer