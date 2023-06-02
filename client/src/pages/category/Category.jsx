import { Link, useParams, useNavigate } from 'react-router-dom';
import SuppNavbar from './../../components/suppNavbar/SuppNavbar'
import SuppFooter from './../../components/suppFooter/SuppFooter'
import './category.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

// loading
import SkewLoader from "react-spinners/SkewLoader";
import SearchInput from '../../components/searchInput/SearchInput';

const Category = () => {
    const PF = 'http://localhost:3000/assets/'
    const {categories} = useParams();

    const [searchVal, setSearchVal] = useState(null)
    const [loading, setLoading] = useState(false)

    const searchHandle = (e) => {
        setSearchVal(e)
    }

    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/support/categories/get-category/${categories}`).then((res) => setCategory(res.data))
            setLoading(true)
        }
        setTimeout(() => fetch(), 400)
        document.title = `${category.title ? category.title : 'Vummly Help Center'} `
    }, [categories, category.title])

    return (
        <div className='category'>
            <div className="wrap1160">
                {loading ? 
                <div className="category__content" key={category._id}>
                    <SearchInput title={category.title}/>
                    <div className="category__main">
                        <h1 className='category__title'>{category.title}</h1>
                        <div className="category__paragraphs">
                            {category.parts && category.parts.map((part, index) => (
                                <div className="category__paragraphs-item" key={index}>
                                    <h1>{part.title}</h1>
                                    <ul>
                                        {part.links.map((link, index) => (
                                            <Link style={{width: 'fit-content'}} className='paragraph__link' key={index} to={`/support/${link.l}`}>
                                                {link.title}
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> : <SkewLoader color="#3a9691" size={30} className='loaderSkew' /> }
            </div>
        </div>
    );
};

export default Category;