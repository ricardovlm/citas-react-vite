function Header(props) {
  
    
    return (
        <>
            <h1 className="font-black text-5xl text-center w-1/2 mx-auto">
                Seguimientos Pacientes de <span className="text-indigo-600">Veterinaria</span>
                {props}
            </h1>
        
        </>
    )
  }
  
  export default Header;
  