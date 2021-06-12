import React, {useState} from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';



function Search(props) {
    const [term, setTerm] = useState({
        input:""
    });
    
    const onInputChange = (event) => {
        const {value} = event.target;
        setTerm({ input: value });
    }
    const onFormSubmit = (event) => {
        props.onFormSubmit(term.input);
        event.preventDefault();
    }
    return (
        <div className="search-bar">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <div className="bar">
                        <input type="text" spellCheck="false" placeholder="YouTube Search" value={term.input} onChange={onInputChange} />
                        <IconButton 
                            label="Submit"
                            primary={true}
                            onClick={onFormSubmit}
                            className="search-icon">
                            <SearchIcon />
                        </IconButton>
                    </div>                    
                </div>
            </form>
        </div>
    );
}
export default Search;