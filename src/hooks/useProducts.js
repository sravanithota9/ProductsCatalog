import { useEffect, useState } from "react";

const API_URL = 'https://run.mocky.io/v3/7b3c25df-3827-4eb1-a93a-aae5473e2c04';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        let isAborted = false;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            !isAborted && setProducts(data.groups);
        }
        fetchData();
        return () => {
            isAborted = true;
        }
    }, [])
    return {
        products,
        selectedProduct,
        setSelectedProduct
    }
}

export default useProducts;