
type TituloImagesButtonType = "TituloImagesButton1" | "TituloImagesButton2" 

interface TituloImagesButtonProps {
    type?: TituloImagesButtonType
    buttonText?: string
    title?: string
    images?: string

}


export const TituloImagesButton = ({ buttonText = "", title = "", images = "", type = "TituloImagesButton1" }: TituloImagesButtonProps) => {
    return (<>
        <div className={`TituloImagesButton ${type}`}>
            <div className="CapaTexto">
                <h1 className="titulo">{title}</h1>
                <button className="btn">{buttonText}</button>

            </div>
            <div className="CapaImagen">
                
                <img className="samsung" src={images}></img>
            </div>


            <div className="CapaColor">

            </div>

        </div>


    </>)

}