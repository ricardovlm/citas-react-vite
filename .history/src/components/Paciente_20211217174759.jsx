const Paciente = (paciente) => {
    return (
        <div className="bg-white shadow-md rounded- py-10 px-5 md:ml-5 ">
            <p className="block mt-3 font-bold">
                Nombre: {''}
                <span className="font-normal">Hook</span>
            </p>
            <p className="block mt-3 font-bold">
                Propietario: {''}
                <span className="font-normal">Ricardo</span>
            </p>
            <p className="block mt-3 font-bold">
                Email: {''}
                <span className="font-normal">correo@correo.com</span>
            </p>
            <p className="block mt-3 font-bold">
                Fecha de alta: {''}
                <span className="font-normal">10/122/2022</span>
            </p>
            <p className="block mt-3 font-bold">
                Síntomas: {''}
                <span className="font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Maxime placeat aperiam neque aliquam eius accusamus, deleniti alias odio? Ad pariatur 
                alias ea reiciendis harum labore quisquam nemo voluptate ab nesciunt?</span>
            </p>
        </div>
    )
}

export default Paciente
