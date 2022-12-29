import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function HistoryButtons() {

    const navigate = useNavigate();

    return (
        <>
            <Button className="history" variant="primary" type="button" onClick={() => navigate(-1)}>&lt;&lt; Prev page</Button>
            <Button className="history" variant="primary" type="button" onClick={() => navigate(+1)}>&gt;&gt; Next page</Button>
        </>
    );
}

export default HistoryButtons;