const RecordAddedView = (props)=>{


    const clickViewHandler=()=>{
        props.setView('viewStudentList')
    }

    const clickBackHandler=()=>{
        props.setView('')
    }


    return(
        <div className='view'>
        <header>
            <h2>RECORD ADDED IN DATABASE</h2>
            <button className="btn" onClick={clickViewHandler}>View List</button>
            <div className="divider"/>
            <button className="btn" onClick={clickBackHandler}>Back</button>
        </header>
        </div>
    )
}

export default RecordAddedView;