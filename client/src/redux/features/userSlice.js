import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload
		},
		logout: state => {
			state.user = null
		},
		update: (state, action) => {
			state.user = { ...state.user, ...action.payload }
		},
	},
})

export const { login, logout, update } = userSlice.actions

export const selectUser = state => state.user.user

export default userSlice.reducer
