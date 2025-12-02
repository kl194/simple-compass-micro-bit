let heading = 0
basic.forever(function () 
{
    heading = input.compassHeading()
    if (heading >= 337.5 || heading < 22.5) 
    {
        basic.showArrow(ArrowNames.North)
    } 
    else if (heading >= 22.5 && heading < 67.5) 
    {
        basic.showArrow(ArrowNames.NorthWest)
    } 
    else if (heading >= 67.5 && heading < 112.5) 
    {
        basic.showArrow(ArrowNames.West)
    } 
    else if (heading >= 112.5 && heading < 157.5) 
    {
        basic.showArrow(ArrowNames.SouthWest)
    } 
    else if (heading >= 157.5 && heading < 202.5) 
    {
        basic.showArrow(ArrowNames.South)
    } 
    else if (heading >= 202.5 && heading < 247.5) 
    {
        basic.showArrow(ArrowNames.SouthEast)
    } 
    else if (heading >= 247.5 && heading < 292.5) 
    {
        basic.showArrow(ArrowNames.East)
    } 
    else 
    {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
