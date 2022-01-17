import {useState, useEffect} from 'react';


const Formulario = () => {
    // Hooks se colocan en la pare de arriba del componete dentro de la funcion
    const [nombre, setNombre] = useState('');

    // funciones
    const handleSubmit = (e) => {
        e.PreventDefault();
        console.log('enviando formulario');
    }

    // return
    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10">
            <h2 className="font-block text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-center mb-5">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">administralos</span>
            </p>
            <form className="bg-white shadow-md rounded- py-10 px-5"  
                    action=""
                    submit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mt-3" htmlFor="mascota">Nombre de Mascota {nombre}</label>
                    <input 
                        type="text"
                        id="mascota"
                        className="block rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-200"
                        placeholder="Nombre de la mascota"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label className="block mt-3" htmlFor="propietario">Nombre de Propietario</label>
                    <input 
                        type="text"
                        id="propietario"
                        className="block rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-200"
                        placeholder="Nombre del propietario"
                        />
                </div>
                <div className="mb-5">
                    <label className="block mt-3" htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        className="block rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-200"
                        placeholder="Email contacto propietario"
                        />
                </div>
                <div className="mb-5">
                    <label className="block mt-3" htmlFor="alta">Alta</label>
                    <input 
                        type="date"
                        id="alta"
                        className="block rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-200"
                        />
                </div>
                <div className="mb-5">
                    <label className="block mt-3" htmlFor="sintomas">Síntomas</label>
                    <textarea 
                        className="block rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-200"
                        name="sintomas" 
                        id="sintomas" 
                        cols="30" 
                        rows="10"
                        placeholder="Observaciones"
                        ></textarea>
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full text-white mt-4 p-3 hover:bg-indigo-300 cursor-pointer transition-all" 
                    value="Agregar paciente"
                    />
            </form>
        </div>
    )
}

export default Formulario
