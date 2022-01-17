function Header({numeros}) { 
    // puedo pasra props como un objeto o hacer destructuring con {nombreVaraible}
    console.log(numeros); 
    return (
        <>
            <h1 className="font-black text-5xl text-center w-1/2 mx-auto">
                Seguimientos Pacientes de <span className="text-indigo-600">Veterinaria</span>
                
            </h1>
        
        </>
    )
  }
  
  export default Header;
  