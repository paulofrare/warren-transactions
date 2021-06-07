export function formatDate(date: string): String {

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let data = new Date(date);
    let dataFormatada = ((data.getDate() + " de " + meses[(data.getMonth())]));

    return dataFormatada

}