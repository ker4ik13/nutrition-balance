export const checkAdvertTime = (endDate: string, styles: CSSModuleClasses) => {
    const dateNow = new Date().getTime();
    const endDateInSeconds = new Date(endDate).getTime();
    
    if(dateNow > endDateInSeconds){
        return styles.hidden;
    } else {
        return '';
    }
}