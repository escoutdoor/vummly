import './article.css'
import axios from 'axios'
import moment from 'moment'
import { useParams, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

// loading
import SkewLoader from "react-spinners/SkewLoader";
import SearchInput from '../../components/searchInput/SearchInput'

const Article = () => {
    const PF = process.env.REACT_APP_BASE_URL;
    const { article, ctgr } = useParams()
    const [articleInfo, setArticleInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const [searchVal, setSearchVal] = useState(null)
    const [current, setCurrent] = useState()
    const [recentlyViwed, setRecentlyViewed] = useState(null)
    const [allSections, setAllSections] = useState([])
    const searchHandle = (e) => {
        setSearchVal(e)
    }
    useEffect(() => {
		const fetch = async () => {
            await axios.get(`/support/articles/one/${article}`).then((res) => {setArticleInfo(res.data.article)})
            setLoading(true)
		}
        fetch()
	}, [article])

    
    
    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         await axios.get(`/support/section`).then((res) => setAllSections(res.data))
    //     }
    //     // console.log(fetchCategories())
    //     fetchCategories()
    // }, [ctgr, article])


    // page title
    useEffect(() => {
        document.title = `${articleInfo.title ? articleInfo.title : 'Vummly Help Center'}`
    }, [articleInfo])

    // local storage

    useEffect(() => {
        setCurrent(articleInfo)
        localStorage.getItem('articles') && setRecentlyViewed([...JSON.parse(localStorage.getItem('articles'))])
    }, [articleInfo])

    useEffect(() => {
        const addRecently = (article) => {
            const infoBefore = JSON.parse(localStorage.getItem('articles')) || []
            const infoRecently = {
                title: article?.title,
                link: article?.idPage,
            }
            const keyExists = infoBefore.some((item) => item.title === infoRecently.title && item.link === infoRecently.link)
            if (!keyExists) {
                const newStorage = [...infoBefore, infoRecently]
                infoBefore?.length > 4 && newStorage.splice(0, 1)
                localStorage.setItem('articles', JSON.stringify(newStorage))
            }
        };
        
        current && addRecently(current);
    }, [article])


    return (
        <div className='article'>
            <div className="wrap1160">
                {loading ?
                <div className="article__content">
                    <SearchInput way={articleInfo.way} title={articleInfo.title}/>
                    <div className="article__info">
                        <div className="articleLeft">
                            <h1 className='articleLeft__title'>Articles in this section</h1>
                            <ul className="articleList">
                                {articleInfo.section?.[0].list.map(((l, i) => (
                                    <Link onClick={() => {articleInfo.idPage !==  l.link && setLoading(false)}} to={`/support/articles/${ctgr}/${l.link}`}  key={i}  >
                                        <li  className={articleInfo.idPage ===  l.link ? "articleList-item active" : "articleList-item"}>
                                            {l.name}
                                        </li>
                                    </Link>
                                )))}
                            </ul> 
                        </div>
                        <div className="articleText">
                            <h1 className='articleText__title'>{articleInfo.title}</h1>
                            <div className="article__update">
                                <p className="article__updatetime" data-end={articleInfo.updatedAt != articleInfo.createdAt ? 'updated' : null}>{moment(articleInfo.updatedAt).fromNow()}</p>
                            </div>
                            {articleInfo.data.map((item, index) => (
                                <ul className="article__response" key={index}>
                                    {item.text ? item.text.map((line, i) => (
                                        <li className='article__textline' style={{fontStyle : `${line.fontstyle ? line.fontstyle : 'normal'}`}} key={i}>
                                            {line.fontweight ? <strong>{line.textline}</strong> : line.textline} 
                                            <Link className='article__mail' to={line.link || `mailto:${line.mail}`}>{line.link || line.mail && line.link || line.mail}</Link>
                                            {line.image && line.image.map((image, index) => (
                                                <img key={index} className='article__Image' src={`${PF}images/img/articles/${image.img}`}></img>
                                            ))}
                                            {line.bigImage && line.bigImage.map((image, index) => (
                                                <img key={index} className='article__bigImage' src={`${PF}images/img/articles/${image.img}`} />
                                            ))}
                                        </li>
                                    )) : null}
                                    {item.points ? item.points.map((p, i) => (
                                        <li className='article__point' style={{listStyle : `${p.point || p.bold ? "disc" : 'none'}`}} key={i}>
                                            {p.bold ? <strong>{p.bold}</strong> : null}
                                            {p.link || p.mail ? <Link className='article__mail' to={p.link || `mailto:${p.mail}`}>{p.point || p.mail}</Link> : p.point}
                                            {p.image ? p.image.map((image, index) => (
                                                <img key={image._id} className='article__Image' src={`${PF}images/img/articles/${image.img}`}></img>
                                            )) : null}
                                        </li>
                                    )) : null}
                                </ul>
                            ))}
                            <div className="articleHelpful">
                                <div className="articleHelpful__content">
                                    <p className='articleHelpful__ask'>Was this article helpful?</p>
                                    <div className="articleHelpful_buttons">
                                        <button>Yes</button>
                                        <button>No</button>
                                    </div>
                                    <p className='helpful__status'>1 out of 10 found this helpful</p>
                                    <div className="articleHelpful__submit">
                                        <p className='articleHelpful__ask'>Have more questions?</p>
                                        <Link className='articleHelpful__subForm' to={'/support/submit-request'}>
                                            Submit a request
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="articleRecently">
                                <div className="articleRecently__viewed">
                                    <h1>Recently viewed articles</h1>
                                    <ul className='recommendationList'> 
                                        {recentlyViwed ? recentlyViwed.map((rec, index) => (
                                            rec.title !== articleInfo.title && <Link style={{width: 'fit-content'}} onClick={() => {articleInfo.idPage !==  rec.link && setLoading(false)}} to={`/support/articles/${allSections && allSections.find(item => item.list && item.list.some(l => l.link === rec.link))?.own}/${rec.link}`}  key={index}  >
                                                {rec.title !== articleInfo.title ? <li className='recommendationList-item'>{rec.title}</li> : null}
                                            </Link>
                                        )) : <span className='noRecommendation'>Nothing there now</span>}
                                    </ul>
                                </div>
                                <div className="articleRecently__related">
                                    <h1>Related articles</h1>
                                    <ul className='recommendationList'>
                                        {articleInfo.section[0].list.reverse().slice(articleInfo.section[0].list?.length >= 7 ? articleInfo.section[0].list?.length/2 : 0).map((listItem, i) => (
                                            <Link style={{maxWidth: 'fit-content'}} onClick={() => {articleInfo.idPage !==  listItem.link && setLoading(false)}} to={`/support/articles/${ctgr}/${listItem.link}`}  key={i}  >
                                                {listItem.name !== articleInfo.title ? <li className='recommendationList-item'>{listItem.name}</li> : null}
                                            </Link>
                                        ))}
                                        {articleInfo.section[0].list?.length === 1 ? <span className='noRecommendation'>Nothing there now</span> : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <SkewLoader color="#3a9691" size={30} className='loaderSkew' />}
            </div> 
        </div> 
    )
}

export default Article;