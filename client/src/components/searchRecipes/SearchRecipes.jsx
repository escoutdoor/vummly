import s from './searchRecipes.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { slider as feed } from '../../helpers/myFeed/myfeedSlider'

import SearchBar from './searchBar/SearchBar'
import MyFeedSwiper from './myFeedSwiper/MyFeedSwiper'

const SearchRecipes = () => {
	return (
		<div className={s.search}>
			<SearchBar />
			<MyFeedSwiper />
		</div>
	)
}

export default SearchRecipes
