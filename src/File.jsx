import './File.css'

function File({ file }) {
    return (
        <>
            <div className="file">
                <img className='icon' src='../src/images/iconFile.png'></img>
                <h3>{ file.name }</h3>
                <p>{ file.type }</p>
            </div>
        </>
    )
}

export default File