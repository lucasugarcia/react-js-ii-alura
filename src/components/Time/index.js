import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
    return(
        colaboradores.length > 0 &&
        <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <h3 style={{borderColor: time.corSecundaria}}>{time.nome}</h3>
            <input value={time.corSecundaria} onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' />
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                        corDeFundo={time.corSecundaria} 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        aoDeletar={aoDeletar} 
                    />
                })}
            </div>
        </section>
    )
}

export default Time