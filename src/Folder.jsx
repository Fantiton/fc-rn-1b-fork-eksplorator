import File from './File.jsx'
import React from 'react'
import "./Folder.css"

function Folder({ data }) {
    const [state, setState] = React.useState('closed')

    function display(item) {
        return item.children.map((item) => 
        {
            if (item.type === "folder") {
                return (
                    <>
                        {<Folder data={item} />}
                    </>
                )
            } else {
                return (
                    <>
                        {<File file={item} />}
                    </>
                )
            }
        })
    }
    function returnFolder(){
        if(state == 'open'){
            return (
                <>
                    <div className="folder" >
                        <div onClick={OpenFolder}>
                            <img className='icon' src='../src/images/iconFolderOpen.png'></img>
                            <h3>{ data.name }</h3>
                            <p>{ data.type }</p>
                        </div>
                        {display(data)}
                    </div>
                </>
            )
        } else{
            return(
                <>
                    <div className='folder' onClick={OpenFolder}>
                        <img className='icon' src='../src/images/iconFolderClosed.png' ></img>
                        <h3>{ data.name }</h3>
                    </div>
                </>
            )
        }
    }

    function OpenFolder(){
        if(state == 'open'){
            setState('closed')
        } else{
            setState('open')
        }
    }

    return (
        returnFolder()
    )
}

export default Folder