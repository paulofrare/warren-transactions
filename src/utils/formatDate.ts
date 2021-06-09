const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export function formatDateFull(date: string): string {

    const dateReplace = date.replace(/-/g, "/")

    const newDate = new Date(dateReplace);
    const formattedDate = `${newDate.getDate()} de ${months[newDate.getMonth()]} de ${newDate.getFullYear()}`

    return formattedDate
}

export function formatDateShort(date: string): string {

    const dateReplace = date.replace(/-/g, "/")

    const newDate = new Date(dateReplace);
    const formattedDate = `${newDate.getDate()} de ${months[newDate.getMonth()]}`

    return formattedDate
}
