import {useEffect, useContext} from "react";
import {LanguagesContext} from "../../services/LanguagesContext";
import Form from 'react-bootstrap/Form';

function SelecetLanguages(props) {

    //props.contactInfo
    //props.setContactInfo

    const {languages} = useContext(LanguagesContext);
    const {getAllLanguages} = useContext(LanguagesContext);

    const handleChange = (event) => {
        let selected = [...props.contactInfo.languages, event.target.value];
        props.setContactInfo({...props.contactInfo, [event.target.name]: selected});
    };

    useEffect(() => {
        getAllLanguages();
    }, []);

    const languageOptions = (languages.length === 0) ? null : languages.map(language => {return (<option value={language.id} key={language.id}>{language.name}</option>)});
    
    return (
        <Form.Control as="select" name="languages" value={props.contactInfo.languages} onChange={handleChange} multiple>
            <option value="" disabled>Select languages</option>
            {languageOptions}
        </Form.Control>
    );
}

export default SelecetLanguages;