import './SPA.css'

function SPA () {
    return (
        <div> 
            <form>
            <h1>Olá, bem vindo ao conversor de medidas!</h1>
            <p>Convertemos de acordo com o <a href="https://abre.ai/ltA5" target='_blank' rel='external'>SI</a> (sistema Internacional de Unidades) </p>
                <input type="number" placeholder='Digite aqui'/>
                <select name="Unidades" id="unities">
                    <option value="km">Kilômetro</option>
                    <option value="hm">Hectômertro</option>
                    <option value="dam">Decâmetreo</option>
                    <option value="m">Metro</option>
                    <option value="dc">Decímetro</option>
                    <option value="cm">Centímetro</option>
                    <option value="mm">Milímetro</option>
                </select>
                <p>
                    Resultado: <p id='res'>80m</p>
                </p>
            </form>
        </div>
    )
}

export default SPA