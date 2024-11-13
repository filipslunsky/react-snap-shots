const getData = async (query, pageNum) => {
    const apiKey = '7ibUxLt0ptb15Prf5r0In94ODPWeDrm4KYijPAr0ALdk1PZUv1O751OS';
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${pageNum}&per_page=30`, {
        headers: {
            Authorization: apiKey,
        },
    });
    const data = await response.json();
    return data.photos;
};

export default getData;