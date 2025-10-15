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
                    {<File data={x} />}
                </>
            )
        }
    }

    return (
        <>
            {display(fileSystem)}
        </>
    )
}

export default FileExplorer