import './MyLabel.css';


interface MyLabelProps {

    /* 
    * The text to display
    */
    label: string;


    /*
    * The size of the label
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    /* 
    * Capitalize all letters
    */
    allCaps?: boolean;
    

    /*
    * Label Color
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    
    
    
    /*
    * The color of the text
    */
    fontColor?: string;
}


const MyLabel = ( { label, size = 'normal', allCaps = true, color = 'text-primary', fontColor = 'red' }: MyLabelProps ) => {
    return (
        <span className={`${size} ${color}`} style={{ color: fontColor }}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}

export default MyLabel;