import { useState } from "react";

const useFecth = (url) => {
    const [data, setData] = useState(null);

    useFecth(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];
}

export default useFecth;