

import React from 'react';

const Index = () => {
    return (
        <div>
            <h1>Pagina Cero</h1>    
            <form action= "/usuarios" method = "get">                
                <input type="submit" value="Usuarios" />
            </form>
            <form action= "/usuarios2" method = "get">                
                <input type="submit" value="Usuarios2" />
            </form>
            <form action= "/avances" method = "get">                
                <input type="submit" value="Avances" />
            </form>
            <form action= "/test" method = "get">                
                <input type="submit" value="Test" />
            </form>
        </div>
    );
}

export default Index;
