import helpIcon from '../../assets/svgs/icon-help.svg'

export function InputModel_1({ title = 'Texto', info = '', onChange, value, type = 'text' }) {
    return (
        <>
            <div id="section" >
                <span>
                    <p className="title-input">{title}</p>
                    {info &&
                        <a href="#" data-tooltip={info}>
                            <img src={helpIcon} alt="" />
                        </a>}
                </span>
                <input type={type} className='input-1' onChange={onChange} value={value} />

            </div>
        </>
    )
}

export function InputModel_2({ title = 'Texto', info = '', lista = [], value, onChange }) {
    return (
        <>
            <div id="section">
                <span>
                    <p className="title-input">{title}</p>
                    {info &&
                        <a href="#" data-tooltip={info}>
                            <img src={helpIcon} alt="" />
                        </a>}
                </span>
                <select name="" id="" className='input-1' value={value} onChange={onChange}>
                    {lista.map((item, index) => (
                        <option key={index}>
                            {item.text}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export function InputModel_3({ title = 'Texto', info = '', p1 = '', p2 = '', value, onChange }) {
    return (
        <>
            <div id="section">
                <span>
                    <p className="title-input">{title}</p>
                    {info &&
                        <a href="#" data-tooltip={info}>
                            <img src={helpIcon} alt="" />
                        </a>}
                </span>
                <span>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </span>
                <input type="range" value={value} onChange={onChange} />
            </div>
        </>
    )
}

export function InputModel_4({ title = 'Texto', info = '', lista = [], onChange, checked }) {
    return (
        <>
            <div id="section">
                <span>
                    <p className="title-input">{title}</p>
                    {info &&
                        <a href="#" data-tooltip={info}>
                            <img src={helpIcon} alt="" />
                        </a>}
                </span>
                {lista.map((item, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={item.id}
                            onChange={() => onChange(item.id, item.text)}
                            checked={checked && checked.some(selectedItem => selectedItem.id === item.id)}
                        />

                        {item.text}
                    </label>))}

            </div>
        </>
    )
}