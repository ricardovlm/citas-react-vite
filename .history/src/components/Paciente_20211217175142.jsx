const Paciente = ({pacientes}) => {

    return (
        <div className="bg-white shadow-md rounded- py-10 px-5 md:ml-5 ">
            <p className="block mt-3 font-bold">
                Nombre: {''}
                <span className="font-normal">{paciente.nombre}</span>
            </p>
            <p className="block mt-3 font-bold">
                Propietario: {''}
                <span className="font-normal">{paciente.propietario}</span>
            </p>
            <p className="block mt-3 font-bold">
                Email: {''}
                <span className="font-normal">{paciente.email}</span>
            </p>
            <p className="block mt-3 font-bold">
                Fecha de alta: {''}
                <span className="font-normal">{paciente.fecha}</span>
            </p>
            <p className="block mt-3 font-bold">
                Síntomas: {''}
                <span className="font-normal">{paciente.sintomas}</span>
            </p>
        </div>
    )
}

export default Paciente
