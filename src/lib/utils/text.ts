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
}