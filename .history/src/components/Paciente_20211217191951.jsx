const Paciente = ({hey, paciente}) => {

    const {nombre,propietario,email,fecha,sintomas} = paciente;

    return (
        <div className="bg-white shadow-md rounded- py-10 px-5 md:ml-5 mb-5">
            <p className="block mt-3 font-bold">
                Nombre: {''}
                <span className="font-normal">{nombre}</span>
            </p>
            <p className="block mt-3 font-bold">
                Propietario: {''}
                <span className="font-normal">{propietario}</span>
            </p>
            <p className="block mt-3 font-bold">
                Email: {''}
                <span className="font-normal">{email}</span>
            </p>
            <p className="block mt-3 font-bold">
                Fecha de alta: {''}
                <span className="font-normal">{fecha}</span>
            </p>
            <p className="block mt-3 font-bold">
                Síntomas: {''}
                <span className="font-normal">{sintomas}</span>
            </p>
            <div>
            <button
                type="button"
                className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >Editar</button>

            <button
                type="button"
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
