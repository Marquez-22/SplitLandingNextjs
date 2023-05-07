import { TituloImagesButton } from "../TituloImagesButton"

type ColumnAnimationType = "ColumnAnimation1" | "ColumnAnimation2"

interface ColumnAnimationProps {
    type?: ColumnAnimationType

}

export const ColumnAnimation = ({ type = "ColumnAnimation1" }: ColumnAnimationProps) => {
    return (<>
        <div className={`ColumnAnimation ${type}`}>
            <div className="Columna Columna1">

                <TituloImagesButton
                    title="Samsung Galaxi-A80"
                    buttonText='Buy Now'
                    images='/images/Samsung-Galaxy-A80.png'
                    type="TituloImagesButton1"
                />
            </div>

            <div className="Columna Columna2">


                <TituloImagesButton
                    title="iPhone 14 pro Mockup 2"
                    buttonText='Buy Now'
                    images='/images/Phone-14.png'
                     type="TituloImagesButton2"
                />
            </div>


        </div>

    </>)
}