import './ProgressBar.css'

export default function ProgressBar({ width = '20%' }) {
    return (
        <>
            {width === 0 ? '' :width === 100 ? '' :
                <>
                    <main id="main-ProgressBar">
                        <span className='progress' style={{ width: `${width}%` }} />
                        <span className="circle-ProgressBar" />
                        
                    </main>
                </>}
        </>
    )
}