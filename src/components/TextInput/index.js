import './TextInput.css'

const TextInput = (props) => {

    const placeholderMod = `${props.placehoder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMod} />
        </div>
    )
}

export default TextInput