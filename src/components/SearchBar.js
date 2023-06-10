
function searchBar({ onSubmit }){

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit('cars');
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input/>
        </form>
        </>
    )
}
export default searchBar;