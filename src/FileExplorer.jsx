import File from './File.jsx'
import Folder from './Folder.jsx'

function FileExplorer({ fileSystem }) {
    function display(item) {
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