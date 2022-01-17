import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    // Queremos que lea primero el localstorage por si hay algo
    const pacientesLs = JSON.parse(localStorage.getItem('pacientes') ) ?? [];

    console.log(pacientesLs);
    setPaciente(pacientesLs);
    
  }, []); // al no pasarle nada se ejecuta solo la primera vez

  useEffect(() => {
    console.log('UseEffect pacientes listo');
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    console.log('Eliminando paciente ', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    console.log(pacientesActualizados);
    setPacientes(pacientesActualizados);
  }
  

  return (
   <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}  
            paciente={paciente}
            setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
   </div>
  )
}

export default App
