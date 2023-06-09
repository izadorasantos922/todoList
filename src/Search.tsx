import { StringSearch } from "./Types/Types"

const Search: React.FC<StringSearch> = ({input, setInput}) => {
    
  return (
    <div className="search">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> 
        <i className="bi bi-search-heart-fill"></i>
    </div>
  )
}

export default Search