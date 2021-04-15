const EditedView = (props)=>{


    const clickViewHandler=()=>{
        props.setView('viewStudentList')
    }

    const clickCreateHandler=()=>{
        props.setView('')
    }


    return(
        <div className='view'>
        <header>
            <h2>Data Sucessfully Edited</h2>
            <button className="btn" onClick={clickViewHandler}>View List</button>
            <div className="divider"/>
            <button className="btn" onClick={clickCreateHandler}>Back</button>
        </header>
        </div>
    )
}

export default EditedView;