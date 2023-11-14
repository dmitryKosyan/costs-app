const ChangeColor = () => {
    const [seconds, setSeconds] = React.useState(0);
    const [timerActive, setTimerActive] = React.useState(false);
    const [color, setColor] = React.useState('yellow')
    const arr = ['red', 'green', 'yellow']

    const changeColor = () => {
        let colorIndex = seconds % 3
        setColor(arr[colorIndex])
    }

    React.useEffect(() => {
        if (seconds && timerActive) {
            setTimeout(setSeconds, 400, seconds + 1);
            changeColor()
        } else {
            setTimerActive(false);
        }
    }, [seconds, timerActive, color]);
    return (
        <>
            {seconds
                ? <React.Fragment>
                    <button onClick={() => setTimerActive(!timerActive)}>
                        {timerActive ? 'stop' : 'start'}
                    </button>
                    <div>{seconds}</div>
                </React.Fragment>
                : <button onClick={() => setSeconds(10)}>ещё раз</button>
            }
            <div className='block' style={{ backgroundColor: color }}></div>
        </>
    )
}