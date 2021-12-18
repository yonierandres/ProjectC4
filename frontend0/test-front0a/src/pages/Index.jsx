

import React from 'react';

const Index = () => {
    return (
        <div>
            <h1>Pagina Cero</h1>    
            <form action= "/usuarios" method = "get">                
                <input type="submit" value="Usuarios" />
            </form>
            <form action= "/avances" method = "get">                
                <input type="submit" value="Avances" />
            </form>
        </div>
    );
}

export default Index;
