
export const productsFetch = async () => {
    const res = await fetch('https://summer-essentials-json-server.onrender.com/products');
    const data = await res.json();
    return data;
}

export const brandsFetch = async () => {
    const res = await fetch('https://summer-essentials-json-server.onrender.com/brandCards');
    const data = await res.json();
    return data;
}