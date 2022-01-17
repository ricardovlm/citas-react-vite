const Paciente = ({pacientes}) => {

    return (
        <div className="bg-white shadow-md rounded- py-10 px-5 md:ml-5 ">
            <p className="block mt-3 font-bold">
                Nombre: {''}
                <span className="font-normal">{pacientes.nombre}</span>
            </p>
            <p className="block mt-3 font-bold">
                Propietario: {''}
                <span className="font-normal">{pacientes.propietario}</span>
            </p>
            <p className="block mt-3 font-bold">
                Email: {''}
                <span className="font-normal">{pacientes.email}</span>
            </p>
            <p className="block mt-3 font-bold">
                Fecha de alta: {''}
                <span className="font-normal">{pacientes.fecha}</span>
            </p>
            <p className="block mt-3 font-bold">
                Síntomas: {''}
                <span className="font-normal">{pacientes.sintomas}</span>
            </p>
        </div>
    )
}

export default Paciente
