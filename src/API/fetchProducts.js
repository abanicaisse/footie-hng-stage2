import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TIMBU_API_KEY;
const APP_ID = import.meta.env.VITE_TIMBU_APP_ID;
const ORG_ID = import.meta.env.VITE_TIMBU_ORG_ID;

const baseURL = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

export const fetchProducts = () => {
  const [allProducts, setallProducts] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(baseURL).then((data) => {
          setallProducts(data?.data.items);
          console.log(data?.data);
        });
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  console.log(allProducts[0]);

  return allProducts;
};

// export default FetchProducts;
