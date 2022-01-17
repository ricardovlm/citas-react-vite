import Paciente from "./Paciente"

const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-block text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-center mb-5">
                Administra tus pacientes y {''}
                <span className="text-indigo-600 font-bold">citas</span>
            </p>
            
            <Paciente />
            
        </div>
    )
}

export default ListadoPacientes
