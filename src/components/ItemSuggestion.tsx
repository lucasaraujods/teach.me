
import { ComponentProps } from "react" 

{/*
    Utilizando a importação dos componetes props para os botões terem a mesma função de onclick 
*/}
{/*
    dentro do componentes de button faz com que eu tenha todos os atrubutos deste elemento button
*/}
type ItemSuggestionProps = ComponentProps <'button'> & {
    title: string
    
}
{/*
   Usando uma tecnica de espalhamento no props
*/}
export function ItemSuggestion({title,...props}: ItemSuggestionProps) {
    return(
        <button {...props}>{title}</button>
    )
}