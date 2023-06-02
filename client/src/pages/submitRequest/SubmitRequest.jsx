import SuppNavbar from './../../components/suppNavbar/SuppNavbar'
import SuppFooter from './../../components/suppFooter/SuppFooter'
import styles from './submitRequest.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Select from 'react-select'
import emailjs from '@emailjs/browser'
import SearchInput from '../../components/searchInput/SearchInput';

const SubmitRequest = () => {
    const PF = 'http://localhost:3000/assets/'

    const [searchVal, setSearchVal] = useState(null)
    const searchHandle = (e) => {
        setSearchVal(e)
    }

    useEffect(() => {
        document.title = "Submit a request"
    }, [])

    const options = [{id:1, label: 'Chrome', value: 'chrome'}, {id:2, label: 'Opera', value: 'opera'}, {id:3, label: 'Safari', value: 'safari'}, {id:4, label: 'Firefox', value: 'firefox'}, {id:5, label: 'Internet Explorer 10', value: 'internet-explorer-10'}, {id:6, label: 'Internet Explorer 11', value: 'internet-explorer-11'}, {id:7, label: 'Internet Explorer 8 or earlier', value: 'internet-explorer-8-or-earlier'}, {id:8, label: 'Internet Explorer 9', value: 'internet-explorer-9'}, {id:9, label: 'Other', value: 'other'}]

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState("Email: cannot be blank")
    const [emailDirty, setEmailDirty] = useState(false)
    
    const [subject, setSubject] = useState('')
    const [subjectError, setSubjectError] = useState("Subject: cannot be blank")
    const [subjectDirty, setSubjectDirty] = useState(false)

    const [description, setDecription] = useState('')
    const [descriptionError, setDescriptionError] = useState("Description: cannot be blank")
    const [descriptionDirty, setDescriptionDirty] = useState(false)

    const [url, setUrl] = useState('')
    const [urlError, setUrlError] = useState("URL: cannot be blank")
    const [urlDirty, setUrlDirty] = useState(false)

    const [browser, setBrowser] = useState({...options[0]})

    const [image, setImage] = useState('')
    const [imageError, setImageError] = useState('')

    const [invalid, setInvalid] = useState(true)

    const [info, setInfo] = useState({})

    useEffect(() => {
        email && !emailError && subject && !subjectError && url && !urlError && description && !descriptionError && browser && setInvalid(false)
        !invalid ? setInfo({email: email, subject: subject, description : description, browser: (browser ? browser : options[0]), url: url, image: image}) : setInfo('')
    }, [email, emailError, url, subject, description, descriptionError, image, browser])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const pattern = /^\S+@\S+\.\S+$/
        if(!pattern.test(e.target.value)) {
            setEmailError(`Email: is not properly formatted`)
        } else {
            setEmailError('')
        }
    }

    const subjectHandler = (e) => {
        setSubject(e.target.value)
        if(subject.length <= 1) {
            setSubjectError("It must be 3 symbols long at least")
        } else {
            setSubjectError('')
        }
    }


    const urlHandler = (e) => {
        setUrl(e.target.value)
        const pattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
        if(!pattern.test(e.target.value)) {
            setUrlError("URL : enter valid url")
        } else {
            setUrlError('')
        }
    }

    const descHandler = (e) => {
        setDecription(e.target.value)
        if(description.split('').length <= 1) {
            setDescriptionError("It must be 3 symbols long at least")
        } else {
            setDescriptionError('')
        }
    }

    const imageHandler = (e) => {
        setImage(e.target.value)
        const pattern = /\.(jpe?g|png|gif|bmp)$/i
        if(!pattern.test(image)) {
            setImageError("File format isn't supported")
        } else {
            setImageError('')
        }
    }


    const blur = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'subject' :
                setSubjectDirty(true)
                break
            case 'url' :
                setUrlDirty(true)
                break
            case 'description' :
                setDescriptionDirty(true)
                break
        }
    }

    const nav = useNavigate()
    const form = useRef()
    const sendForm = async (e) => {
        e.preventDefault()
        await info && (!emailError && !subjectError && !descriptionError && browser && !urlError) ? (emailjs.sendForm('service_h7toabu', 'template_7g83q57', form.current, 'dQJDPMl6oL-bM1aSW').then((result) => {
            nav('/support/', {state:{sent: true}})
        }, (error) => {
            console.log(error.text);
        }))  : alert("Fill these gaps pls")
    }


    return (
        <div className={styles.submitReq}>
            <div className={styles.submitReqWrapper}>
                <SearchInput title={"Submit a request"}/>
                <form ref={form} className={styles.submitBody} onSubmit={sendForm} >
                    <h1 className={styles.submitTitle}>Submit a request</h1>
                    <div className={styles.submitInputs}>
                        <div className={styles.subInput}>
                            <label  className={styles.subInput__title}>Your email address</label> 
                            <input type="text" onBlur={e => blur(e)} name={'email'} value={email} className={styles.subInput__input} onChange={(e) => emailHandler(e)} />
                            {(emailDirty && emailError) && <div className={styles.validationBlock}>{emailError}</div>}
                        </div>
                        <div className={styles.subInput}>
                            <label  className={styles.subInput__title}>Subject</label> 
                            <input type="text" onBlur={e => blur(e)} name={'subject'} value={subject} className={styles.subInput__input} onChange={(e) => subjectHandler(e)} />
                            {(subjectDirty && subjectError) && <div className={styles.validationBlock}>{subjectError}</div>}
                        </div>
                        <div className={styles.subInput}>
                            <label  className={styles.subInput__title}>URL of Recipe Page or Search Results</label> 
                            <input type="text" onBlur={e => blur(e)} name={'url'} value={url} className={styles.subInput__input} onChange={(e) => urlHandler(e)} />
                            <span className={styles.subInput__underDesc}>Paste the URL of the recipe page or search results you are discussing. This will help us quickly see what you are seeing.</span>
                            {(urlDirty && urlError) && <div className={styles.validationBlock}>{urlError}</div>}
                        </div>
                        <div className={styles.subInput}>
                            <label  className={styles.subInput__title}>Description</label> 
                            <textarea name='description' onBlur={e => blur(e)} onChange={(e) => descHandler(e)} value={description} className={styles.subInput__textArea}></textarea>
                            <span className={styles.subInput__underDesc}>Please enter the details of your request. You can attach a screen shot below if that helps explain a problem you are seeing. Have an idea you want to share with the Yummly community? Share it here. A member of our support staff will respond as soon as possible.</span>
                            {(descriptionDirty && descriptionError) && <div className={styles.validationBlock}>{descriptionError}</div>}
                        </div>
                        <div className={styles.subInput}>
                            <label className={styles.subInput__title}>Your Browser</label> 
                            <Select 
                                defaultValue={options[0]} 
                                name='browser' isSearchable={true} 
                                isClearable={true} 
                                className={`${styles.subInput__select}`} 
                                classNamePrefix="select" 
                                onChange={(choice) => setBrowser(choice)}
                                options={options} 
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#adc5c4',
                                        primary: '#3a9691',
                                    },
                                })}
                            />
                            {!browser && <div className={styles.validationBlock}>Choose a browser</div>}
                        </div>
                        <div className={styles.submitInputs__attachment}>
                            <label className={styles.subInput__title} data-end={'(optional)'}>Attachments</label>
                            <div className={styles.submitInputs__attachmentBox}>
                                <span className={styles.submitInputs__attachmentClick}>Add file</span>
                                <input  name='image' onChange={(e) => imageHandler(e)} className={styles.submitInputs__attachmentInput} type="file" />
                            </div>
                            {imageError && <div className={styles.validationBlock}>{imageError}</div>}
                        </div>
                    </div>
                    <input className={styles.submitButt} type="submit" value={'Send'}/>
                </form>
            </div>
        </div>
    );
};

export default SubmitRequest;