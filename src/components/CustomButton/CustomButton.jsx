import './CustomButton.css'

export function CustomButton({ text = 'Text', onClick, margin, show = true ,position, top, bottom}) {

    const style = {
        opacity: show ? 1 : 0.5,
        margin: margin ? ' auto' : '',
        position: position,
        top: top,
        marginBottom: bottom // Adicione esta linha para configurar o marginBottom

    }

    return (
        <>
            <main id="main-CustomButton" onClick={show ? onClick: () => {}} style={style}>
                <h1>{text}</h1>
            </main>
        </>
    )
}