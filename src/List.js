
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
                console.error('Erreur lors de la requête :', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">DBLP</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        liste des auteurs
                    </p>
                    {auteurs.map(auteur, index) => ()}
                </div>
                {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {auteurs.map((auteur, index) => (
                        <article key={auteur.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{auteur.authors}</h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{auteur.booktitle}</p>
                            </div>
                            <div>
                                <ul>
                                    <li>{auteur.title}</li>
                                    <li>{auteur.year}</li>
                                    <li>{auteur.id}</li>
                                </ul>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div> */}
            </div>
        </div>
    )
}
