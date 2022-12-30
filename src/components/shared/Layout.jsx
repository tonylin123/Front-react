

import Navigation from "./Navigation";
import HistoryButtons from "./HistoryButtons";


function Layout({children}) {

    

    return (
    <>
        <header>
            <div>
                <Navigation />
                <HistoryButtons/>
            </div>
           
        </header>
        
        <main>
            {children}
        </main>

        
    </>
    );
}

export default Layout;