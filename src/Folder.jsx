function Folder({ data }) {
    function display(x) {
        return (
            <>
                <div className="folder">
                    <h3>Skibidi Folder</h3>
                </div>
            </>
        )}

    return (
        <>
            {display(data)}
        </>
    )
}

export default Folder