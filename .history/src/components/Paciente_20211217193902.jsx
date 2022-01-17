const Paciente = ({hey, paciente,setPaciente}) => {

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
            <div className="mt-6 flex justify-between">
                <button
                    type="button"
                    className="px-10 py-2 text-sm text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-all"
                    onClick={setPaciente}
                    >Editar</button>

                <button
                    type="button"
                    className="px-10 py-2 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-all"
                    >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
