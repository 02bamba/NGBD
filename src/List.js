// import { startSession } from "mongoose";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function List() {
    const [auteurs, setAuteurs] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les données des auteurs
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/');
                setAuteurs(response.data);
                console.log('Réponse de l\'API :', response.data);
            } catch (error) {
                console.error('Donnee recues');
            }
        };
        fetchData();
    }, []);
    return (

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {auteurs.map((auteur,index) => (
                <article key={auteur.index} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <a href="#"
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                            {auteur.type}
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <p>
                                <span className="absolute inset-0" />
                                {auteur.author}
                            </p>
                        </h3>
                        {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Title:{auteur.title}</p>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Author:{auteur.author}</p>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Years: {auteur.year}</p> */}
                    </div>
                </article>
            ))}
        </div>

        // <div>
        //     {auteurs.map((auteur, index) => (
        //         <div key={index}>
        //             <p>{auteur.title}</p>
        //         </div>

        //     ))}
        // </div>
    )
}