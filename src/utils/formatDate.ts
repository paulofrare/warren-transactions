const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
export function formatDateFull(date: string): String {

    let data = new Date(date);
    let dataFormatada = `${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`

    return dataFormatada

}
export function formatDateShort(date: string): string {

    let data = new Date(date);
    let dataFormatada = `${data.getDate()} de ${meses[data.getMonth()]}`

    return dataFormatada

}