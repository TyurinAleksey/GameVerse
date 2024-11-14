export async function getApiResourse(url) {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error("Ошибка получения данных - ", res.status)
            return false
        }

        return await res.json();
    } catch (error) {
        console.error("Ошибка получения данных - ", error.message)
        return false
    }
}

// (async () => {
//     const data = await getApiResourse(BODY_URL_API+SERCH_API_GAMES+MY_API_KEY);
//     console.log(data)
// })();
