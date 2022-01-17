import {useState, useEffect} from 'react';
import Error from './Error';


const Formulario = ({ pacientes, setPacientes, paciente }) => {
    // Hooks se colocan en la pare de arriba del componete dentro de la funcion
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {   
        if (Object.keys(paciente).length > 0){
           setNombre(paciente.nombre);
           setPropietario(paciente.propietario);
           setEmail(paciente.email);
           setFecha(paciente.fecha);
           setSintomas(paciente.sintomas);

        };
    }, [paciente])

    // funciones

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('enviando formulario');
        // validacion del formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            // lo meto en un array y con el metodo includes valido si hay algun campo vacio
            console.log('Algun campo vacio');
            setError(true);
        } else {
            console.log('Todos los campos llenos');
            setError(false);

            // creamos un objeto de paciente
            const objectoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas
            }

            if(paciente.id){
                // editando registro
                console.log('Editando');
                objectoPaciente.id = paciente.id;
               // console.log(objectoPaciente);

                const pacientesActualizados = pacientes.map(pacienteState => 
                    pacienteState.id === paciente.id ? objectoPaciente :  pacienteState);
                   
                

                setPacientes(pacientesActualizados);



            } else {
                // nuevo registro
                id:generarId();
                setPacientes([...pacientes,objectoPaciente]);
            }
            
           

            // reiniciar el formulario
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
        }
    }

    // return
    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10">
            <h2 className="font-block text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-center mb-5">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">administralos</span>
            </p>
            <form 
                className="bg-white shadow-md rounded- py-10 px-5"  
                onSubmit={handleSubmit} >

                {error ? (
                   <Error>Todos los campos son obligatorios</Error> 
                ) : '' } 

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
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label className="block mt-3" htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        className="block rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-200"
                        placeholder="Email contacto propietario"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label className="block mt-3" htmlFor="alta">Alta</label>
                    <input 
                        type="date"
                        id="alta"
                        className="block rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-200"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
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
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}

                        ></textarea>
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full text-white mt-4 p-3 hover:bg-indigo-300 cursor-pointer transition-all" 
                    value= { paciente.id ? 'Editar paciente' : 'Agregar'}
                    />
            </form>
        </div>
    )
}

export default Formulario
