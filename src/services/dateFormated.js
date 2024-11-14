export const dateFormated = (date) => {
    const dataSplit = date.split("-");
    if (dataSplit.length === 3) {
        const year = dataSplit[0];
        const month = dataSplit[1];
        const day = dataSplit[2];
        return `${day}.${month}.${year}`;
    } else {
        return date;
    }
};