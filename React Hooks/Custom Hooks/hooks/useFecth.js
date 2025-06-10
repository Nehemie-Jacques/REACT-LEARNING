import { useEffect, useState } from "react";

const useEffect = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await fetch(url);
                if (!Response.ok) {
                    throw new Error("Network esponse was not ok");
                }
                const result = await Response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useEffect;