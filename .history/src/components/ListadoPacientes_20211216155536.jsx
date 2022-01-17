const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-block text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-center mb-5">
                Administra tus pacientes y {''}
                <span className="text-indigo-600 font-bold">citas</span>
            </p>
            
            <div className="bg-white shadow-md rounded- py-10 px-5 ml-5 ">
                <p className="block mt-3 font-bold">
                    Nombre: {''}
                    <span className="font-normal">Hook</span>
                </p>

            </div>
        </div>
    )
}

export default ListadoPacientes
