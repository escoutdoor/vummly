import React, { useEffect, useRef, useState } from 'react';
import s from './addCollections.module.css'
import axios from 'axios';

const AddCollection = ({setCollections, collections, user}) => {
    const [collectionName, setCollectionName] = useState("")
    const collectionInput = useRef()
    const [error, setError] = useState(false)
    const [activeAddCollection, setActiveAddCollection] = useState(false)
    const PF = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        if(activeAddCollection) {
            collectionInput.current.focus()
        }
    }, [activeAddCollection])

    const createCollection = async () => {
        if(collectionName.length !== 0 && !collections.some(c => c.name === collectionName)) {
            await axios.post(`/collections/${user._id}`, {
                name : collectionName,
            }).then(u => setCollections([u.data, ...collections]))
            setActiveAddCollection(false)
            setCollectionName("")
        }
    }

    const handleEnter = (e) => {
        e.key === 'Enter' && createCollection()
    }

    return (
        <div title='New Collection' className={s.box} onKeyDown={handleEnter}> 
            <div className={s.content}>
                <div className={activeAddCollection ? `${s.notActiveMode} ${s.hidden}` : s.notActiveMode} onClick={() => setActiveAddCollection(true)}>
                    <img src={`${PF}images/icons/profile/plus-circle.svg`} alt="" />
                    <h1 className={s.title}>New Collection</h1>
                </div>
                <div className={activeAddCollection ? s.activeMode : `${s.activeMode} ${s.hidden}`} >
                    <input maxLength={40} style={{color: error ? 'red' : '#3a9691'}} placeholder='Collection Name' ref={collectionInput} type="text" className={s.collectionInput} value={collectionName} onChange={e => setCollectionName(e.target.value)}/>
                    <div className={s.buttons}>
                        <button className={s.saveButton} onClick={createCollection}>save</button>
                        <button className={s.cancelButton} onClick={() => {setActiveAddCollection(false); setCollectionName("")}}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCollection;