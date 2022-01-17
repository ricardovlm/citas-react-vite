const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-block text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-center">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">administralos</span>
            </p>
            <form className="bg-white shadow-md rounded- py-10 px-5"  action="">
                <div>
                    <label className="block mt-3" htmlFor="">Nombre de MAscota</label>
                    <input 
                    
                        type="text"
                        className="block rounded-md border-2 w-full"
                        placeholder="Nombre de la mascota"
                        />
                </div>
            </form>
        </div>
    )
}

export default Formulario
