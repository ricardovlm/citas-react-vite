import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {

    console.log(pacientes && pacientes.length);

    return (
        { pacientes && pacientes.length ? (
            <>
                <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
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


                </div>
            </>
        ) : (
            <>
            </>
        )}
       
    )
}

export default ListadoPacientes
