
function SearchBox({searchChange}){
    return(
        <div className = "pa2">
            <input 
                className = "ba b--lightest-blue bg-light-green pa3"
                type = "text" 
                placeholder = "Find your friends" 
                onChange = {searchChange}
            />
        </div>
    )
}


export default SearchBox;