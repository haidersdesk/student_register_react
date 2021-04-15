
const Welcome = (props)=>{

    props.setView('')

    const clickViewHandler=()=>{
        props.setView('viewStudentList')
    }

    const clickCreateHandler=()=>{
        props.setView('viewCreateStudent')
    }


    return(
        <form>
        <header>
            <h1>Students Register App</h1>
            <button className="btn" onClick={clickViewHandler}>View List</button>
            <div className="divider"/>
            <button className="btn" onClick={clickCreateHandler}>Add Record</button>
        </header>
        </form>
    )
}

export default Welcome;