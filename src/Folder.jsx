function Folder({ data }) {
    function display(x) {
        return (
            <>
                <p>{x.name}, {x.type}</p>
                {x.children.map(
                    (y) =>
                        display(y)
                )}
            </>
        )}

    return (
        <>
            {display(data)}
        </>
    )
}

export default Folder