import File from './File.jsx'

function Folder({ data }) {
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
            }
        )
    }

    return (
        <>
            <div className="folder">
                <h3>{ data.name }</h3>
                <p>{ data.type }</p>
                {display(data)}
            </div>
        </>
    )
}

export default Folder