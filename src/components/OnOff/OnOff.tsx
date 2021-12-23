type PropsType = {
    value: boolean
    onClick: (value: boolean) => void
}

export function OnOff(props: PropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.value ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red',
    }

    const onClicked = () => {
        props.onClick(true)
    }
    const offClicked = () => {
        props.onClick(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>
                On
            </div>
            <div style={offStyle} onClick={offClicked}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}