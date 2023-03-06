import "./MultiStyleText.scss";

export const MultiStyleText = (props) => {
    const globalStyle = (props.text.style && props.text.style.join(' ')) ?? ''
    return (
    <div className={globalStyle}> { 
        props.text.rows.map(row => {
            const rowClassNames = (row.style && ' ' + row.style.join(' ')) ?? ''
            return (
                <div className={"multi-style-text" + rowClassNames}> {
                    <p> { 
                        row.content.map(wordSection => {
                            const classNames = (wordSection.style && wordSection.style.join(' '))
                            return (
                                <span className={classNames}>{wordSection.text}</span>
                            )}
                        )
                    } </p>
                } </div>
            )
        })
    } </div>)
};