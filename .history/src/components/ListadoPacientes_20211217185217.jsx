import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {

    console.log(pacientes && pacientes.length);

    return (
        
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-block text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-center mb-5">
                        Administra tus pacientes y {''}
                        <span className="text-indigo-600 font-bold">citas</span>
                    </p>
                    
                    {   pacientes.map( (paciente) => (
                            <Paciente 
                                key={paciente.id}
                                paciente={paciente}
                            />
                        ))
                    }

                </>
            ) : (
                <>
                    <h2 className="font-block text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-center mb-5">
                       No existe clientes dados de alta. {''}
                        <span className="text-indigo-600 font-bold">Añada uno nuevo</span>
                    </p>
                    
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
