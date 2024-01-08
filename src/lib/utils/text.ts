type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export class Text
{
    public static Capitalize(input : string)
    {
        return input.slice(0,1).toUpperCase() + input.slice(1,input.length).toLowerCase();
    }

    public static Format(input : string)
    {
        input = input.replaceAll('-',' ')
        input = this.Capitalize(input);
        return input;
    }

    public static FormatDate(input : string) : string
    {
        // This method expects 20 december 2020 as 20/12/2020 (DD/MM/YYYY)
        var dateParts = input.split("/");
        let date = new Date(Number.parseInt(dateParts[2]), Number.parseInt(dateParts[1]) - 1, Number.parseInt(dateParts[0]));
        let result = date.getDate() + ' ' + date.toLocaleString('en-US', { month: 'short' }) + ', ' + date.getFullYear();
        return result
    }

    public static DisplayLink(input : string) : string
    {
        return input.trim().replaceAll('https','').replaceAll('http','').replaceAll('://','')
    }
}