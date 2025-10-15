import File from './File.jsx'
import Folder from './Folder.jsx'

function FileExplorer({ fileSystem }) {
    function display(x) {
        if (x.type === "folder") {
            return (
                <>
                    {<Folder data={x} />}
                </>
            )
        } else {
            return (
                <>
                    {<File file={x} />}
                </>
            )
        }
    }

    return (
        <>
            {fileSystem.children.map((item) => (
                <div key={item.id}>
                    {display(item)}
                </div>
            ))}
        </>
    )
}

export default FileExplorer