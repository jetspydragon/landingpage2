export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}
