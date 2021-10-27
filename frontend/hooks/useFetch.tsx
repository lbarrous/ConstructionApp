import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<unknown>([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { loading, dataFromServer: data };
};