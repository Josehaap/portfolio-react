import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

/**
 * 
 * @param {Seleccionamos el elemento donde queremos implementar la animación, el eleeto será un id, selector css etc} element 
 * @param {*Indicamos el tipo de división del texto ejemplos soportables: chars, words, lines, chars words, lines words, lines chars, lines words chars, etc } type 
 * @param {* Array con dos objetos literales indicando la configuración} configuration 
 */
export function animacionText(element, type, targetType , configuration) {
    // Si el parámetro es un selector CSS, seleccionamos el elemento
    const target = typeof element === "string" ? document.querySelector(element) : element;
    
    if (!target) {
        console.warn(" No se encontró el elemento especificado.");
        
    }else{
         //Hacemos la comprobación del que el elemento está renderizado: 
     
        // Creamos una nueva instancia de SplitText, que divide el texto según el tipo indicado (chars, words, lines, etc.)
            const split = new SplitText(element, { type: type });

            // Una vez creado el split, obtenemos el grupo específico según el tipo de corte deseado.
            // Por ejemplo: split.chars, split.words o split.lines
            if (!split[targetType]) {
                console.warn(`El tipo de corte '${targetType}' no existe en SplitText.`);
            }
            
            //Implementamos la configuración en la función 
            gsap.fromTo(split[targetType], {...configuration[0]},{...configuration[1]} );


    }
}
export function basicAnimationFromTo(element,  configuration) {
    // Si el parámetro es un selector CSS, seleccionamos el elemento
    const target = typeof element === "string" ? document.querySelector(element) : element;
    
    if (!target) {
        console.warn(" No se encontró el elemento especificado.");
        
    }else{ 
         //Implementamos la configuración en la función 
        gsap.fromTo(target, {...configuration[0]},{...configuration[1]} );


    }
   
}