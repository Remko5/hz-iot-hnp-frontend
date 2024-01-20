export default function Error({errors}) {
    let displayErrors = []
    const keys = Object.keys(errors)
    keys.forEach(element => {
        displayErrors.push(<div key={element}>{element}: {errors[element]}</div>)
    });

    return (
        <>
            <h1>Oops!</h1>
            <div>There seem to be a problem:</div>
            {displayErrors}
        </>
    )
}