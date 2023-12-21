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

    public static FormatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'nl-nl') 
    {
        date = "1-12-2023"
        // Safari is mad about dashes in the date
        const dateToFormat = new Date(date.replaceAll('-', '/'))
        const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
        return dateFormatter.format(dateToFormat)
    }
}