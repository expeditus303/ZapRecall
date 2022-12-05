export default function Footer(props) {

    const { cardsFeitos, totalCards } = props

    return (
        <div className="footer-concluidos" data-test="footer">
            <p>{cardsFeitos}/{totalCards} CONCLUÍDOS</p>
        </div>
    )
}